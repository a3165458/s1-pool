import express, { type Request, type Response, type NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import crypto from 'node:crypto';
import path from 'node:path';
import fs from 'node:fs';
import { store } from './store.js';
import type {
  DbDeploymentTask,
  DbNotice,
  DbProvider,
  DbSettlementEntry,
  DbUser,
} from './types.js';

const app = express();
const PORT = Number(process.env.PORT ?? 3456);

app.use(express.json({ limit: '2mb' }));
app.use(cookieParser());

// ---------------------------------------------------------------------------
// BigInt Fen & Yuan Helpers
// ---------------------------------------------------------------------------
function parseYuanToFen(s: string): bigint {
  const neg = s.startsWith('-');
  const raw = neg ? s.slice(1) : s;
  const [whole = '0', frac = ''] = raw.split('.');
  const fen = BigInt(whole + frac.padEnd(2, '0').slice(0, 2));
  return neg ? -fen : fen;
}

function formatFenToYuan(fen: bigint): string {
  const neg = fen < 0n;
  const abs = neg ? -fen : fen;
  const whole = abs / 100n;
  const rem = String(abs % 100n).padStart(2, '0');
  return `${neg ? '-' : ''}${whole}.${rem}`;
}

function pointsTimesMultiplierToFen(points: number, multiplier: string | null): bigint | null {
  if (multiplier === null) return null;
  const mNum = Number(multiplier);
  if (!Number.isFinite(mNum) || mNum <= 0) return null;
  const fenFloat = Math.round(points * mNum * 100);
  return BigInt(fenFloat);
}

// ---------------------------------------------------------------------------
// Session & Auth Helpers
// ---------------------------------------------------------------------------
interface AuthedRequest extends Request {
  principal?: DbUser;
}

function serializePrincipal(u: DbUser) {
  const parent = u.parent_supplier_id ? store.getUserById(u.parent_supplier_id) : undefined;
  return {
    id: u.id,
    email: u.email,
    role: u.role,
    can_create_suppliers: u.can_create_suppliers,
    parent_supplier_id: u.parent_supplier_id,
    parent_supplier_email: parent?.email ?? null,
  };
}

function requireAuth(req: AuthedRequest, res: Response, next: NextFunction): void {
  const sid = req.cookies?.ac3_sid as string | undefined;
  if (!sid) {
    res.status(401).json({ error: 'unauthenticated', detail: 'Not signed in' });
    return;
  }
  const uid = store.sessions.get(sid);
  const user = uid ? store.getUserById(uid) : undefined;
  if (!user || user.cleared_at !== null) {
    res.status(401).json({ error: 'unauthenticated', detail: 'Session expired' });
    return;
  }
  req.principal = user;
  next();
}

function setupSse(res: Response): void {
  res.status(200);
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();
}

function sendSseData(res: Response, payload: unknown): void {
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

// Track active SSE clients
const noticeStreams = new Set<Response>();
const fleetStreams = new Set<Response>();
interface ProviderStreamClient {
  res: Response;
  user: DbUser;
  offset: number;
  limit: number;
  supplierId: string | null;
  includeDescendants: boolean;
}
const providerStreams = new Set<ProviderStreamClient>();

function getActiveNotices(nowMs = Date.now()) {
  return store.state.notices
    .filter((n) => n.withdrawn_at === null && Date.parse(n.from) <= nowMs && Date.parse(n.until) > nowMs)
    .map((n) => ({
      id: n.id,
      text: n.text,
      until: n.until,
    }));
}

function broadcastNoticeState(): void {
  const payload = {
    notices: getActiveNotices(),
    rates_rev: store.state.ratesRev,
    pages_rev: store.state.pagesRev,
  };
  for (const client of noticeStreams) {
    sendSseData(client, payload);
  }
}

function buildFleetPayload() {
  return {
    as_of: new Date().toISOString(),
    synthetic: false,
    engine: 'answering' as const,
    cpu_ceiling: 0.85,
    hosts: store.state.fleetHosts,
  };
}

function broadcastFleetState(): void {
  const payload = buildFleetPayload();
  for (const client of fleetStreams) {
    sendSseData(client, payload);
  }
}

function filterProvidersForScope(
  user: DbUser,
  opts: {
    deleted?: boolean;
    supplierId?: string | null;
    includeDescendants?: boolean;
    excludeHostedWhenUnscoped?: boolean;
  }
): DbProvider[] {
  const wantDeleted = opts.deleted === true;
  const hostedTops = new Set(
    store.state.users.filter((u) => u.hosted_top_id !== null).map((u) => u.id)
  );

  let allowedOwnerIds: Set<string> | null = null;
  if (user.role === 'supplier' || user.role === 'mock_supplier') {
    const baseScope = store.getDescendantIds(user.id, true);
    if (opts.supplierId && baseScope.has(opts.supplierId)) {
      allowedOwnerIds = opts.includeDescendants
        ? store.getDescendantIds(opts.supplierId, true)
        : new Set([opts.supplierId]);
    } else {
      allowedOwnerIds = baseScope;
    }
  } else if (opts.supplierId) {
    allowedOwnerIds = opts.includeDescendants
      ? store.getDescendantIds(opts.supplierId, true)
      : new Set([opts.supplierId]);
  }

  return store.state.providers.filter((p) => {
    const isDel = p.deleted_at !== null;
    if (wantDeleted !== isDel) return false;
    if (allowedOwnerIds !== null) {
      return p.created_by_user_id !== null && allowedOwnerIds.has(p.created_by_user_id);
    }
    if (opts.excludeHostedWhenUnscoped && p.created_by_user_id && hostedTops.has(p.created_by_user_id)) {
      // Note: frontend also filters hosted via /ac3/hosted! Returning all lets Hierarchy HostedZone count them!
      return true;
    }
    return true;
  });
}

function buildProviderStreamFrame(client: ProviderStreamClient, kind: 'snapshot' | 'patch') {
  const all = filterProvidersForScope(client.user, {
    deleted: false,
    supplierId: client.supplierId,
    includeDescendants: client.includeDescendants,
  });
  const slice = all.slice(client.offset, client.offset + client.limit);
  const totalRpm = all.reduce((sum, p) => sum + (p.healthy ? (p.rpm ?? 0) : 0), 0);
  const items = slice.map((p) => ({
    id: p.id,
    rpm: p.healthy ? (p.rpm ?? 0) : 0,
    total_requests: p.total_requests,
    total_points_consumed: p.total_points_consumed,
    window_states: p.window_states,
  }));

  return {
    kind,
    data: {
      window_summary: { total_rpm: totalRpm },
      list: {
        total: all.length,
        ids: all.map((p) => p.id),
        ...(kind === 'snapshot' ? { providers: items } : { upserts: items }),
      },
    },
  };
}

function broadcastProvidersPatch(): void {
  for (const client of providerStreams) {
    sendSseData(client.res, buildProviderStreamFrame(client, 'patch'));
  }
}

// ---------------------------------------------------------------------------
// 1. Auth Endpoints
// ---------------------------------------------------------------------------
app.post('/ac3/auth/login', (req: Request, res: Response) => {
  const email = String(req.body?.email ?? '').trim().toLowerCase();
  const password = String(req.body?.password ?? '');
  if (!email || !password) {
    res.status(400).json({ error: 'malformed', detail: 'Missing email or password' });
    return;
  }
  const user = store.state.users.find(
    (u) => u.email.toLowerCase() === email && u.password === password && u.cleared_at === null
  );
  if (!user) {
    res.status(401).json({ error: 'invalid_credentials', detail: 'Invalid email or password' });
    return;
  }
  const sid = crypto.randomBytes(24).toString('hex');
  store.sessions.set(sid, user.id);
  store.scheduleSave();
  res.cookie('ac3_sid', sid, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 3600 * 1000,
  });
  res.json({ user: serializePrincipal(user) });
});

app.get('/ac3/auth/me', requireAuth, (req: AuthedRequest, res: Response) => {
  res.json({ user: serializePrincipal(req.principal!) });
});

app.post('/ac3/auth/logout', (req: Request, res: Response) => {
  const sid = req.cookies?.ac3_sid as string | undefined;
  if (sid) store.sessions.delete(sid);
  res.clearCookie('ac3_sid', { path: '/' });
  res.json({ ok: true });
});

// ---------------------------------------------------------------------------
// 2. Pool & Providers Endpoints
// ---------------------------------------------------------------------------
app.get('/portunex/admin/providers/live', requireAuth, (req: AuthedRequest, res: Response) => {
  setupSse(res);
  const offset = Math.max(0, Number(req.query.offset ?? 0) || 0);
  const limit = Math.max(1, Math.min(1000, Number(req.query.limit ?? 500) || 500));
  const supplierId = typeof req.query.created_by_user_id === 'string' ? req.query.created_by_user_id : null;
  const includeDescendants = req.query.include_descendants === 'true';

  const client: ProviderStreamClient = {
    res,
    user: req.principal!,
    offset,
    limit,
    supplierId,
    includeDescendants,
  };
  providerStreams.add(client);
  sendSseData(res, buildProviderStreamFrame(client, 'snapshot'));

  req.on('close', () => {
    providerStreams.delete(client);
  });
});

app.get('/portunex/admin/providers/stats', requireAuth, (req: AuthedRequest, res: Response) => {
  const deleted = req.query.deleted === 'true';
  const supplierId = typeof req.query.created_by_user_id === 'string' ? req.query.created_by_user_id : null;
  const includeDescendants = req.query.include_descendants === 'true';
  const startStr = typeof req.query.start_time === 'string' ? req.query.start_time : null;
  const startMs = startStr ? Date.parse(startStr) : 0;
  const isTodayQuery = startMs > Date.now() - 36 * 3600_000;

  const rows = filterProvidersForScope(req.principal!, {
    deleted,
    supplierId,
    includeDescendants,
  });

  let points = 0;
  let requests = 0;
  for (const p of rows) {
    points += isTodayQuery ? p.today_points_consumed : p.total_points_consumed;
    requests += isTodayQuery ? p.today_requests : p.total_requests;
  }

  // Include Ghost Valley historical earnings when querying deleted stats
  if (deleted) {
    const scopeSet = supplierId
      ? includeDescendants
        ? store.getDescendantIds(supplierId, true)
        : new Set([supplierId])
      : req.principal!.role === 'supplier' || req.principal!.role === 'mock_supplier'
        ? store.getDescendantIds(req.principal!.id, true)
        : null;
    for (const g of store.state.ghosts) {
      if (scopeSet === null || (g.owner_id !== null && scopeSet.has(g.owner_id))) {
        if (!isTodayQuery || Date.parse(g.died_at) >= startMs) {
          points += isTodayQuery ? Math.round(g.points * 0.15 * 100) / 100 : g.points;
          requests += isTodayQuery ? Math.round(g.requests * 0.15) : g.requests;
        }
      }
    }
  }

  res.json({
    total_points_consumed: Number(points.toFixed(2)),
    total_requests: requests,
  });
});

app.get('/portunex/admin/providers', requireAuth, (req: AuthedRequest, res: Response) => {
  const offset = Math.max(0, Number(req.query.offset ?? 0) || 0);
  const limit = Math.max(1, Math.min(1000, Number(req.query.limit ?? 500) || 500));
  const deleted = req.query.deleted === 'true';
  const supplierId = typeof req.query.created_by_user_id === 'string' ? req.query.created_by_user_id : null;
  const includeDescendants = req.query.include_descendants === 'true';

  const all = filterProvidersForScope(req.principal!, {
    deleted,
    supplierId,
    includeDescendants,
  });
  const slice = all.slice(offset, offset + limit);

  res.json({
    providers: slice,
    total: all.length,
    offset,
    limit,
  });
});

// OAuth Deployment Routes (must come before /providers/:id)
app.post('/portunex/admin/providers/isthmus/oauth/sessions', requireAuth, (req: AuthedRequest, res: Response) => {
  const httpProxy = String(req.body?.http_proxy ?? '').trim();
  if (!httpProxy || !httpProxy.startsWith('http://')) {
    res.status(400).json({ error: 'invalid_proxy', detail: 'Valid http:// proxy address is required' });
    return;
  }
  if (!store.isDeployGateOpenFor(req.principal!)) {
    res.status(403).json({ error: 'deploy_closed', detail: 'Deployment channel is currently paused' });
    return;
  }
  const id = `oas_${crypto.randomBytes(8).toString('hex')}`;
  const expiresAt = Date.now() + 10 * 60_000;
  const authUrl = `https://claude.ai/oauth/authorize?client_id=arx-isthmus-v3&response_type=code&scope=user%3Ainference&state=${id}`;
  store.oauthSessions.set(id, {
    id,
    http_proxy: httpProxy,
    authorization_url: authUrl,
    expires_at: expiresAt,
    created_by_user_id: req.principal!.id,
  });
  res.json({
    id,
    authorization_url: authUrl,
    expires_at: expiresAt,
  });
});

app.post(
  '/portunex/admin/providers/isthmus/oauth/sessions/:sessionId/authorize',
  requireAuth,
  (req: AuthedRequest, res: Response) => {
    const { sessionId } = req.params;
    const session = store.oauthSessions.get(sessionId);
    if (!session) {
      res.status(404).json({ error: 'session_not_found', detail: 'OAuth session expired or invalid' });
      return;
    }
    const requestId = String(req.body?.request_id ?? '');
    for (const existing of store.deployments.values()) {
      if (existing.request_id === requestId) {
        res.json(existing);
        return;
      }
    }

    const code = String(req.body?.code ?? '').trim();
    const name = String(req.body?.provider?.name ?? '').trim();
    if (!code || !name) {
      res.status(400).json({ error: 'invalid_request', detail: 'Code and account email are required' });
      return;
    }

    const duplicate = store.state.providers.find(
      (p) => p.deleted_at === null && p.name.toLowerCase() === name.toLowerCase()
    );
    if (duplicate) {
      res.status(409).json({
        error: 'duplicate_provider',
        detail: `账号 ${name} 已在号池中，请勿重复部署`,
      });
      return;
    }

    // Check if returning from Ghost Valley!
    const ghostIdx = store.state.ghosts.findIndex((g) => g.name.toLowerCase() === name.toLowerCase());
    let prevGhost: (typeof store.state.ghosts)[number] | null = null;
    if (ghostIdx >= 0) {
      prevGhost = store.state.ghosts.splice(ghostIdx, 1)[0];
    }

    const newPid = String(store.state.nextIds.provider++);
    const owner = req.principal!;
    const topId = owner.parent_supplier_id ?? (owner.role === 'supplier' ? owner.id : null);
    const tags = ['新入池', 'Max20x'];
    if (topId) tags.push(`alliance-scope-${topId}`);

    if (prevGhost) {
      store.state.carried.push({
        id: newPid,
        email: name,
        points: Number((prevGhost.points + prevGhost.earned_before).toFixed(2)),
        lives: prevGhost.lives,
      });
    }

    const hostObj =
      store.state.fleetHosts.find((h) => h.placement?.on && !h.placement.at_cpu_ceiling) ??
      store.state.fleetHosts[0];
    const vmIdx = 60 + (Number(newPid) % 120);
    const nowIso = new Date().toISOString();

    let proxyHost = '45.138.22.91';
    try {
      proxyHost = new URL(session.http_proxy).hostname;
    } catch {
      // ignore
    }

    const willFail = code.toLowerCase().includes('fail');

    const newProvider: DbProvider = {
      id: newPid,
      name,
      healthy: false,
      kind: 'anthropic-oauth',
      base_url: `http://${hostObj.address}:${10765 + vmIdx}`,
      http_proxy: session.http_proxy,
      last_error: null,
      last_checked_at: nowIso,
      deployment_status: 'deploying',
      deployment_message: '正在拉起隔离实例并校验 OAuth 凭据 (1/3)',
      available_from: null,
      available_until: null,
      created_by_user_id: owner.role === 'admin' ? null : owner.id,
      created_by_email: owner.role === 'admin' ? null : owner.email,
      tags,
      weight: 100,
      max_concurrent: 12,
      active_concurrent: 0,
      rpm: 0,
      rpm_limit: 30,
      rps_limit: 2,
      subscription_tier: 'max20x',
      total_points_consumed: 0,
      today_points_consumed: 0,
      h5_points_consumed: 0,
      total_requests: 0,
      today_requests: 0,
      h5_requests: 0,
      refused_requests: 0,
      total_input_tokens: 0,
      total_output_tokens: 0,
      total_cache_creation_tokens: 0,
      total_cache_read_tokens: 0,
      window_states: [],
      created_at: nowIso,
      updated_at: nowIso,
      deleted_at: null,
      remark: null,
    };

    store.state.providers.unshift(newProvider);
    store.state.exits.push({
      id: newPid,
      host: proxyHost,
      country: 'US',
      health: {
        status: 'good',
        latency_ms: 68,
        checked_at: nowIso,
      },
    });

    const taskId = `dep_${crypto.randomBytes(8).toString('hex')}`;
    const task: DbDeploymentTask = {
      id: taskId,
      request_id: requestId,
      status: 'running',
      message: '正在准备隔离实例与代理出口',
      error: null,
      name,
      provider_id: newPid,
      created_at: Date.now(),
    };
    store.deployments.set(taskId, task);
    store.scheduleSave();
    broadcastProvidersPatch();

    setTimeout(() => {
      const p = store.state.providers.find((x) => x.id === newPid);
      const t = store.deployments.get(taskId);
      if (!p || !t) return;
      const doneIso = new Date().toISOString();
      if (willFail) {
        p.deployment_status = 'failed';
        p.deployment_message = 'OAuth 授权码交换凭据被上游拒绝';
        p.last_error = {
          type: 'invalid_grant',
          code: '400',
          message: 'Authorization code rejected during token exchange',
          occurred_at: doneIso,
        };
        t.status = 'failed';
        t.error = 'OAuth 授权码无效或已过期，请核对后重新部署';
        t.message = '部署失败';
      } else {
        p.healthy = true;
        p.deployment_status = 'succeeded';
        p.deployment_message = 'Instance ready';
        p.rpm = 4;
        p.window_states = [
          {
            id: `${newPid}01`,
            config: { window_type: '5h', model_pattern: '*' },
            utilization: 0.02,
            window_start: doneIso,
            window_end: new Date(Date.now() + 5 * 3600_000).toISOString(),
            last_request_at: doneIso,
            request_count: 1,
          },
          {
            id: `${newPid}02`,
            config: { window_type: '7d', model_pattern: '*' },
            utilization: 0.01,
            window_start: doneIso,
            window_end: new Date(Date.now() + 7 * 86400_000).toISOString(),
            last_request_at: doneIso,
            request_count: 1,
          },
          {
            id: `${newPid}03`,
            config: { window_type: '7d_oi', model_pattern: '*fable*' },
            utilization: 0,
            window_start: doneIso,
            window_end: new Date(Date.now() + 7 * 86400_000).toISOString(),
            last_request_at: null,
            request_count: 0,
          },
        ];
        t.status = 'succeeded';
        t.message = '实例就绪，已开始承接流量';
      }
      p.updated_at = doneIso;
      store.scheduleSave();
      broadcastProvidersPatch();
    }, 2600);

    res.json(task);
  }
);

app.get('/portunex/admin/providers/isthmus/deployments/:taskId', requireAuth, (req: Request, res: Response) => {
  const task = store.deployments.get(req.params.taskId);
  if (!task) {
    res.status(404).json({ error: 'not_found', detail: 'Deployment task not found' });
    return;
  }
  res.json(task);
});

// Batch Provider Operations
function extractBatchIds(body: unknown): string[] {
  const raw = (body as { ids?: unknown[] } | null)?.ids;
  if (!Array.isArray(raw)) return [];
  return raw.map((x) => String(x));
}

app.patch('/portunex/admin/providers/batch/health', requireAuth, (req: AuthedRequest, res: Response) => {
  const ids = new Set(extractBatchIds(req.body));
  const healthy = Boolean(req.body?.healthy);
  let count = 0;
  const nowIso = new Date().toISOString();
  for (const p of store.state.providers) {
    if (p.deleted_at === null && ids.has(p.id)) {
      p.healthy = healthy;
      if (healthy) p.last_error = null;
      else p.rpm = 0;
      p.updated_at = nowIso;
      count++;
    }
  }
  store.scheduleSave();
  broadcastProvidersPatch();
  res.json({ updated_count: count });
});

app.post(
  '/portunex/admin/providers/batch/window-states/reset',
  requireAuth,
  (req: AuthedRequest, res: Response) => {
    const ids = new Set(extractBatchIds(req.body));
    let count = 0;
    const nowIso = new Date().toISOString();
    for (const p of store.state.providers) {
      if (p.deleted_at === null && ids.has(p.id)) {
        p.window_states = p.window_states.map((w) => ({
          ...w,
          utilization: 0,
          request_count: 0,
        }));
        if (p.last_error?.type === 'RateLimited') {
          p.last_error = null;
          p.healthy = true;
        }
        p.updated_at = nowIso;
        count++;
      }
    }
    store.scheduleSave();
    broadcastProvidersPatch();
    res.json({ updated_count: count });
  }
);

function deleteSingleProvider(p: DbProvider, nowIso: string): void {
  p.deleted_at = nowIso;
  p.updated_at = nowIso;
  p.rpm = 0;
  // If deleted while at fault, freeze into Ghost Valley!
  if (!p.healthy && p.last_error !== null && p.deployment_status !== 'deploying' && p.deployment_status !== 'failed') {
    const prevCarry = store.state.carried.find((c) => c.id === p.id);
    store.state.ghosts.unshift({
      id: p.id,
      name: p.name,
      owner_id: p.created_by_user_id,
      owner_email: p.created_by_email,
      tier: p.subscription_tier,
      error: p.last_error,
      tags: p.tags.filter((t) => !t.startsWith('alliance-scope-')),
      requests: p.total_requests,
      points: p.total_points_consumed,
      earned_before: prevCarry?.points ?? 0,
      lives: (prevCarry?.lives ?? 0) + 1,
      enlisted_at: p.created_at,
      died_at: nowIso,
    });
  }
}

app.post('/portunex/admin/providers/batch/delete', requireAuth, (req: AuthedRequest, res: Response) => {
  const ids = new Set(extractBatchIds(req.body));
  const targets = store.state.providers.filter((p) => p.deleted_at === null && ids.has(p.id));
  if (targets.some((p) => p.deployment_status === 'deploying')) {
    res.status(409).json({
      error: 'deployment_in_progress',
      detail: 'Cannot delete while an instance in the batch is deploying',
    });
    return;
  }
  const nowIso = new Date().toISOString();
  for (const p of targets) {
    deleteSingleProvider(p, nowIso);
  }
  store.scheduleSave();
  broadcastProvidersPatch();
  res.json({ deleted_count: targets.length });
});

app.patch('/portunex/admin/providers/batch/settings', requireAuth, (req: AuthedRequest, res: Response) => {
  const ids = new Set(extractBatchIds(req.body));
  const tagSpec = req.body?.tags as { mode?: 'append' | 'replace' | 'clear'; values?: Array<{ name: string }> } | undefined;
  const updated: DbProvider[] = [];
  const nowIso = new Date().toISOString();

  if (tagSpec) {
    const incoming = (tagSpec.values ?? []).map((v) => String(v.name).trim()).filter(Boolean);
    for (const p of store.state.providers) {
      if (p.deleted_at === null && ids.has(p.id)) {
        const internal = p.tags.filter((t) => t.startsWith('alliance-scope-'));
        const visible = p.tags.filter((t) => !t.startsWith('alliance-scope-'));
        let nextVisible: string[] = [];
        if (tagSpec.mode === 'clear') {
          nextVisible = [];
        } else if (tagSpec.mode === 'replace') {
          nextVisible = [...new Set(incoming)];
        } else {
          nextVisible = [...new Set([...visible, ...incoming])];
        }
        p.tags = [...nextVisible, ...internal];
        p.updated_at = nowIso;
        updated.push(p);
      }
    }
  }
  store.scheduleSave();
  broadcastProvidersPatch();
  res.json({ updated });
});

// Single Provider Operations
app.get('/portunex/admin/providers/:id', requireAuth, (req: Request, res: Response) => {
  const p = store.state.providers.find((x) => x.id === req.params.id && x.deleted_at === null);
  if (!p) {
    res.status(404).json({ error: 'not_found', detail: 'Provider not found' });
    return;
  }
  res.json(p);
});

app.get('/portunex/admin/providers/:id/stats', requireAuth, (req: Request, res: Response) => {
  const p = store.state.providers.find((x) => x.id === req.params.id);
  if (!p) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  res.json({
    total_points_consumed: p.h5_points_consumed,
    total_requests: p.h5_requests,
  });
});

app.get('/portunex/admin/providers/:id/isthmus', requireAuth, (req: Request, res: Response) => {
  const p = store.state.providers.find((x) => x.id === req.params.id && x.deleted_at === null);
  if (!p) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  res.json({ http_proxy: p.http_proxy });
});

app.post('/portunex/admin/providers/:id/isthmus/update', requireAuth, (req: Request, res: Response) => {
  const p = store.state.providers.find((x) => x.id === req.params.id && x.deleted_at === null);
  if (!p) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  const httpProxy = String(req.body?.http_proxy ?? '').trim();
  const enableOnSuccess = Boolean(req.body?.enable_on_success);
  p.http_proxy = httpProxy || null;
  p.deployment_status = 'deploying';
  p.deployment_message = '正在切换代理出口并重启实例';
  p.updated_at = new Date().toISOString();

  if (httpProxy) {
    try {
      const host = new URL(httpProxy).hostname;
      const ex = store.state.exits.find((e) => e.id === p.id);
      if (ex) {
        ex.host = host;
        ex.health = { status: 'good', latency_ms: 74, checked_at: new Date().toISOString() };
      } else {
        store.state.exits.push({
          id: p.id,
          host,
          country: 'US',
          health: { status: 'good', latency_ms: 74, checked_at: new Date().toISOString() },
        });
      }
    } catch {
      // ignore invalid URL
    }
  }

  setTimeout(() => {
    p.deployment_status = 'succeeded';
    p.deployment_message = 'Instance ready';
    if (enableOnSuccess) {
      p.healthy = true;
      p.last_error = null;
    }
    p.updated_at = new Date().toISOString();
    store.scheduleSave();
    broadcastProvidersPatch();
  }, 1800);

  store.scheduleSave();
  broadcastProvidersPatch();
  res.json({ ok: true });
});

app.patch('/portunex/admin/providers/:id/health', requireAuth, (req: Request, res: Response) => {
  const p = store.state.providers.find((x) => x.id === req.params.id && x.deleted_at === null);
  if (!p) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  p.healthy = Boolean(req.body?.healthy);
  if (p.healthy) {
    p.last_error = null;
    p.rpm = 3;
  } else {
    p.rpm = 0;
  }
  p.updated_at = new Date().toISOString();
  store.scheduleSave();
  broadcastProvidersPatch();
  res.json({ ok: true });
});

app.post('/portunex/admin/providers/:id/health-check', requireAuth, (req: Request, res: Response) => {
  const p = store.state.providers.find((x) => x.id === req.params.id && x.deleted_at === null);
  if (!p) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  const nowIso = new Date().toISOString();
  const latency = 135 + (Number(p.id) % 190);
  const ok = p.deployment_status === 'succeeded' && p.last_error?.type !== 'Forbidden';
  p.last_checked_at = nowIso;
  if (ok) {
    p.healthy = true;
    p.last_error = null;
  }
  store.scheduleSave();
  broadcastProvidersPatch();
  res.json({
    healthy: ok,
    model: 'claude-sonnet-4-5-20250929',
    latency_ms: latency,
    message: ok ? 'Upstream inference probe succeeded' : p.last_error?.message ?? 'Probe failed',
    checked_at: nowIso,
  });
});

app.post('/portunex/admin/providers/:id/window-states/reset', requireAuth, (req: Request, res: Response) => {
  const p = store.state.providers.find((x) => x.id === req.params.id && x.deleted_at === null);
  if (!p) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  p.window_states = p.window_states.map((w) => ({
    ...w,
    utilization: 0,
    request_count: 0,
  }));
  if (p.last_error?.type === 'RateLimited') {
    p.last_error = null;
    p.healthy = true;
  }
  p.updated_at = new Date().toISOString();
  store.scheduleSave();
  broadcastProvidersPatch();
  res.json({ ok: true });
});

app.delete('/portunex/admin/providers/:id', requireAuth, (req: Request, res: Response) => {
  const p = store.state.providers.find((x) => x.id === req.params.id && x.deleted_at === null);
  if (!p) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  if (p.deployment_status === 'deploying') {
    res.status(409).json({ error: 'deployment_in_progress' });
    return;
  }
  deleteSingleProvider(p, new Date().toISOString());
  store.scheduleSave();
  broadcastProvidersPatch();
  res.json({ ok: true });
});

app.get('/portunex/admin/users/supplier-options', requireAuth, (req: Request, res: Response) => {
  const q = String(req.query.search ?? '').trim().toLowerCase();
  const suppliers = store.state.users
    .filter(
      (u) =>
        (u.role === 'supplier' || u.role === 'mock_supplier') &&
        u.cleared_at === null &&
        (q === '' ||
          u.email.toLowerCase().includes(q) ||
          u.id.includes(q) ||
          (u.remark ?? '').toLowerCase().includes(q))
    )
    .map((u) => ({ id: u.id, email: u.email }));
  res.json({ users: suppliers });
});

app.get('/ac3/exits', requireAuth, (_req: Request, res: Response) => {
  res.json({
    patrol: { every_seconds: 300 },
    exits: store.state.exits,
  });
});

app.get('/ac3/cleanup', requireAuth, (_req: Request, res: Response) => {
  res.json({
    armed_at: store.state.cleanupArmedAt,
    armed: {
      Forbidden: store.state.cleanupArmedAt,
      Unauthorized: store.state.cleanupArmedAt,
    },
  });
});

app.get('/ac3/account-remarks', requireAuth, (_req: Request, res: Response) => {
  const remarks = store.state.providers
    .filter((p) => p.remark !== null && p.remark !== '')
    .map((p) => ({ id: p.id, remark: p.remark! }));
  res.json({ remarks });
});

app.put('/ac3/accounts/:id/remark', requireAuth, (req: Request, res: Response) => {
  const p = store.state.providers.find((x) => x.id === req.params.id);
  if (!p) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  const raw = req.body?.remark;
  p.remark = typeof raw === 'string' && raw.trim() !== '' ? raw.trim().slice(0, 32) : null;
  store.scheduleSave();
  res.json({ ok: true });
});

app.get('/ac3/ghosts', requireAuth, (req: AuthedRequest, res: Response) => {
  const supplierId = typeof req.query.created_by_user_id === 'string' ? req.query.created_by_user_id : null;
  const includeDescendants = req.query.include_descendants === 'true';
  let scope: Set<string> | null = null;
  if (req.principal!.role === 'supplier' || req.principal!.role === 'mock_supplier') {
    const myScope = store.getDescendantIds(req.principal!.id, true);
    if (supplierId && myScope.has(supplierId)) {
      scope = includeDescendants ? store.getDescendantIds(supplierId, true) : new Set([supplierId]);
    } else {
      scope = myScope;
    }
  } else if (supplierId) {
    scope = includeDescendants ? store.getDescendantIds(supplierId, true) : new Set([supplierId]);
  }

  const ghosts = store.state.ghosts.filter(
    (g) => scope === null || (g.owner_id !== null && scope.has(g.owner_id))
  );
  res.json({
    as_of: new Date().toISOString(),
    ghosts,
    carried: store.state.carried.map(({ id, points, lives }) => ({ id, points, lives })),
  });
});

app.get('/ac3/deploy-gate', requireAuth, (req: AuthedRequest, res: Response) => {
  res.json({ open: store.isDeployGateOpenFor(req.principal!) });
});

// ---------------------------------------------------------------------------
// 3. Hierarchy, Partners, Divisions & Clearance
// ---------------------------------------------------------------------------
function getVisiblePartners(viewer: DbUser): DbUser[] {
  const suppliers = store.state.users.filter(
    (u) => (u.role === 'supplier' || u.role === 'mock_supplier') && u.cleared_at === null
  );
  if (viewer.role === 'admin' || viewer.role === 'observer') return suppliers;
  const allowed = store.getDescendantIds(viewer.id, true);
  return suppliers.filter((u) => allowed.has(u.id));
}

app.get('/ac3/partners', requireAuth, (req: AuthedRequest, res: Response) => {
  const viewer = req.principal!;
  const list = getVisiblePartners(viewer).map((u) => {
    const isSelf = u.id === viewer.id;
    return {
      id: u.id,
      email: u.email,
      parent_supplier_id: u.parent_supplier_id,
      can_create_suppliers: u.can_create_suppliers,
      created_at: u.created_at,
      multiplier: isSelf && !u.rates_shown && viewer.role !== 'admin' ? null : u.multiplier,
      remark: isSelf ? null : viewer.role === 'admin' && u.parent_supplier_id !== null ? u.remark_admin : u.remark,
      remark_above: viewer.role === 'admin' && u.parent_supplier_id !== null ? u.remark : null,
      clearing: u.clearing,
      rates_shown: u.rates_shown,
      deploy_closed: u.deploy_closed,
    };
  });
  res.json({ partners: list });
});

app.post('/ac3/partners', requireAuth, (req: AuthedRequest, res: Response) => {
  const viewer = req.principal!;
  if (viewer.role !== 'admin' && !viewer.can_create_suppliers) {
    res.status(403).json({ error: 'forbidden' });
    return;
  }
  const email = String(req.body?.email ?? '').trim().toLowerCase();
  const password = String(req.body?.password ?? '');
  const multiplier = String(req.body?.multiplier ?? '').trim();
  const canCreate = viewer.role === 'admin' ? Boolean(req.body?.can_create_suppliers) : false;

  if (!email.includes('@') || password.length < 8 || !multiplier) {
    res.status(400).json({ error: 'invalid_request' });
    return;
  }
  if (store.state.users.some((u) => u.email.toLowerCase() === email)) {
    res.status(409).json({ error: 'email_taken', detail: 'Email already exists' });
    return;
  }

  const newId = String(store.state.nextIds.user++);
  const nowIso = new Date().toISOString();
  const newUser: DbUser = {
    id: newId,
    email,
    password,
    role: 'supplier',
    can_create_suppliers: canCreate,
    parent_supplier_id: viewer.role === 'admin' ? null : viewer.id,
    created_at: nowIso,
    multiplier,
    remark: null,
    remark_admin: null,
    clearing: false,
    cleared_at: null,
    rates_shown: true,
    deploy_closed: false,
    hosted_top_id: null,
    alliance_key: `ak-ally-${newId}-${crypto.randomBytes(3).toString('hex')}`,
  };
  store.state.users.push(newUser);
  store.state.multiplierChanges[newId] = [
    {
      at: nowIso,
      from: null,
      to: multiplier,
      applies: 'all',
      by: viewer.email,
    },
  ];
  store.scheduleSave();
  res.status(201).json({ id: newId });
});

app.patch('/ac3/partners/:id/multiplier', requireAuth, (req: AuthedRequest, res: Response) => {
  const target = store.getUserById(req.params.id);
  if (!target) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  const nextMult = String(req.body?.multiplier ?? '').trim();
  const applies = req.body?.applies === 'from_now' ? 'from_now' : 'all';
  const prev = target.multiplier;
  target.multiplier = nextMult;
  const list = store.state.multiplierChanges[target.id] ?? [];
  list.unshift({
    at: new Date().toISOString(),
    from: prev,
    to: nextMult,
    applies,
    by: req.principal!.email,
  });
  store.state.multiplierChanges[target.id] = list;
  store.state.ratesRev += 1;
  store.scheduleSave();
  broadcastNoticeState();
  res.json({ ok: true });
});

app.put('/ac3/partners/:id/remark', requireAuth, (req: AuthedRequest, res: Response) => {
  const target = store.getUserById(req.params.id);
  if (!target) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  const raw = req.body?.remark;
  const val = typeof raw === 'string' && raw.trim() !== '' ? raw.trim().slice(0, 32) : null;
  if (req.principal!.role === 'admin' && target.parent_supplier_id !== null) {
    target.remark_admin = val;
  } else {
    target.remark = val;
  }
  store.scheduleSave();
  res.json({ ok: true });
});

app.put('/ac3/partners/:id/rates-shown', requireAuth, (req: Request, res: Response) => {
  const target = store.getUserById(req.params.id);
  if (!target) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  target.rates_shown = Boolean(req.body?.shown);
  store.state.ratesRev += 1;
  store.scheduleSave();
  broadcastNoticeState();
  res.json({ ok: true });
});

app.put('/ac3/partners/:id/deploy-open', requireAuth, (req: Request, res: Response) => {
  const target = store.getUserById(req.params.id);
  if (!target) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  target.deploy_closed = !Boolean(req.body?.open);
  store.scheduleSave();
  res.json({ ok: true });
});

app.get('/ac3/alliance-keys', requireAuth, (req: AuthedRequest, res: Response) => {
  const keys: Record<string, string> = {};
  for (const u of getVisiblePartners(req.principal!)) {
    keys[u.id] = u.alliance_key;
  }
  res.json({ keys });
});

app.get('/ac3/remarks', requireAuth, (req: AuthedRequest, res: Response) => {
  const viewer = req.principal!;
  const remarks = getVisiblePartners(viewer).flatMap((u) => {
    if (viewer.role === 'admin' && u.parent_supplier_id !== null) {
      if (u.remark_admin) return [{ id: u.id, email: u.email, remark: u.remark_admin, from_above: false }];
      if (u.remark) return [{ id: u.id, email: u.email, remark: u.remark, from_above: true }];
      return [];
    }
    return u.remark ? [{ id: u.id, email: u.email, remark: u.remark, from_above: false }] : [];
  });
  res.json({ remarks });
});

app.get('/ac3/lineage', requireAuth, (req: AuthedRequest, res: Response) => {
  const partners = getVisiblePartners(req.principal!).map((u) => ({
    id: u.id,
    email: u.email,
    parent_supplier_id: u.parent_supplier_id,
  }));
  res.json({ partners });
});

app.get('/ac3/hosted', requireAuth, (_req: Request, res: Response) => {
  const tops: string[] = [];
  const members: string[] = [];
  const topOf: Record<string, string> = {};
  for (const u of store.state.users) {
    if (u.hosted_top_id !== null && u.cleared_at === null) {
      members.push(u.id);
      topOf[u.id] = u.hosted_top_id;
      if (u.id === u.hosted_top_id) tops.push(u.id);
    }
  }
  res.json({ tops, members, top_of: topOf });
});

app.get('/ac3/earnings', requireAuth, (req: AuthedRequest, res: Response) => {
  const visible = getVisiblePartners(req.principal!).filter((u) => u.hosted_top_id === null);
  let allToday = 0;
  let allTotal = 0;
  for (const p of store.state.providers) {
    const owner = p.created_by_user_id ? store.getUserById(p.created_by_user_id) : null;
    if (owner?.hosted_top_id) continue;
    allToday += p.today_points_consumed;
    allTotal += p.total_points_consumed;
  }
  for (const g of store.state.ghosts) {
    allTotal += g.points + g.earned_before;
  }

  const partners = visible.map((u) => {
    const own = store.computePartnerEarnings(u.id, false);
    const branch = store.computePartnerEarnings(u.id, true);
    return {
      id: u.id,
      own: { today: own.today.toFixed(2), total: own.total.toFixed(2) },
      branch: { today: branch.today.toFixed(2), total: branch.total.toFixed(2) },
    };
  });

  res.json({
    as_of: new Date().toISOString(),
    all: { today: allToday.toFixed(2), total: allTotal.toFixed(2) },
    partners,
  });
});

app.post('/ac3/pages/refresh', requireAuth, (req: AuthedRequest, res: Response) => {
  if (req.principal!.role !== 'admin') {
    res.status(403).json({ error: 'forbidden' });
    return;
  }
  store.state.pagesRev += 1;
  store.scheduleSave();
  broadcastNoticeState();
  res.json({ ok: true });
});

// Divisions
app.get('/ac3/divisions', requireAuth, (req: AuthedRequest, res: Response) => {
  const viewer = req.principal!;
  if (viewer.role === 'admin') {
    res.json({ divisions: store.state.divisions });
    return;
  }
  res.json({
    divisions: store.state.divisions.filter((g) => g.lead_id === viewer.id),
  });
});

app.post('/ac3/divisions', requireAuth, (req: AuthedRequest, res: Response) => {
  const viewer = req.principal!;
  const name = String(req.body?.name ?? '').trim();
  const members: string[] = Array.isArray(req.body?.members) ? req.body.members.map(String) : [];
  if (!name || name.length > 24) {
    res.status(400).json({ error: 'invalid_name' });
    return;
  }
  let group = store.state.divisions.find((g) => g.lead_id === viewer.id);
  if (!group) {
    group = { lead_id: viewer.id, divisions: [] };
    store.state.divisions.push(group);
  }
  if (group.divisions.length >= 20) {
    res.status(409).json({ error: 'too_many' });
    return;
  }
  if (group.divisions.some((d) => d.name.toLowerCase() === name.toLowerCase())) {
    res.status(409).json({ error: 'name_taken' });
    return;
  }
  const memberSet = new Set(members);
  for (const d of group.divisions) {
    d.members = d.members.filter((m) => !memberSet.has(m));
  }
  const id = `d${(store.state.nextIds.division++).toString(36)}`;
  group.divisions.push({ id, name, members: [...memberSet] });
  store.scheduleSave();
  res.status(201).json({ id });
});

app.put('/ac3/divisions/:id', requireAuth, (req: AuthedRequest, res: Response) => {
  const divId = req.params.id;
  const name = String(req.body?.name ?? '').trim();
  const members: string[] = Array.isArray(req.body?.members) ? req.body.members.map(String) : [];
  const group = store.state.divisions.find((g) => g.divisions.some((d) => d.id === divId));
  if (!group) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  if (group.divisions.some((d) => d.id !== divId && d.name.toLowerCase() === name.toLowerCase())) {
    res.status(409).json({ error: 'name_taken' });
    return;
  }
  const memberSet = new Set(members);
  for (const d of group.divisions) {
    if (d.id === divId) {
      d.name = name;
      d.members = [...memberSet];
    } else {
      d.members = d.members.filter((m) => !memberSet.has(m));
    }
  }
  store.scheduleSave();
  res.json({ ok: true });
});

app.delete('/ac3/divisions/:id', requireAuth, (req: Request, res: Response) => {
  const divId = req.params.id;
  for (const g of store.state.divisions) {
    const idx = g.divisions.findIndex((d) => d.id === divId);
    if (idx >= 0) {
      g.divisions.splice(idx, 1);
      store.scheduleSave();
      res.json({ ok: true });
      return;
    }
  }
  res.status(404).json({ error: 'not_found' });
});

// ---------------------------------------------------------------------------
// 4. Settlement Calculations & Endpoints
// ---------------------------------------------------------------------------
function buildSettlementAccount(partner: DbUser, hideMultiplier = false) {
  const kind: 'top' | 'opening' | 'below' =
    partner.parent_supplier_id !== null ? 'below' : partner.can_create_suppliers ? 'opening' : 'top';
  const earn = store.computePartnerEarnings(partner.id, partner.parent_supplier_id === null);
  const mult = hideMultiplier ? null : partner.multiplier;
  const dueFen = pointsTimesMultiplierToFen(earn.total, partner.multiplier);
  const dueTodayFen = pointsTimesMultiplierToFen(earn.today, partner.multiplier);

  const entries = store.state.settlementEntries.filter((e) => e.account_id === partner.id);
  let paidFen = 0n;
  let lastPaidAt: string | null = null;
  let paymentCount = 0;
  for (const e of entries) {
    paidFen += parseYuanToFen(e.amount);
    if (e.kind === 'payment' && e.reversed_by === null) {
      paymentCount++;
      if (!lastPaidAt || Date.parse(e.at) > Date.parse(lastPaidAt)) {
        lastPaidAt = e.at;
      }
    }
  }

  const pendingFen = dueFen === null ? null : dueFen - paidFen;
  const pendingPoints =
    pendingFen !== null && partner.multiplier !== null && pendingFen > 0n
      ? Math.max(0, Number((Number(pendingFen) / 100 / Number(partner.multiplier)).toFixed(2)))
      : 0;

  return {
    id: partner.id,
    email: partner.email,
    kind,
    remark: partner.remark,
    multiplier: mult,
    earned: earn.total.toFixed(2),
    earned_today: earn.today.toFixed(2),
    pending_points: pendingPoints.toFixed(2),
    due: hideMultiplier || dueFen === null ? null : formatFenToYuan(dueFen),
    due_today: hideMultiplier || dueTodayFen === null ? null : formatFenToYuan(dueTodayFen),
    paid: formatFenToYuan(paidFen),
    pending: dueFen === null ? null : formatFenToYuan(pendingFen!),
    last_paid_at: lastPaidAt,
    payments: paymentCount,
    cleared_at: partner.cleared_at,
  };
}

function serializeSettlementEntry(e: DbSettlementEntry) {
  if (e.kind === 'payment') {
    return {
      kind: 'payment' as const,
      id: e.id,
      at: e.at,
      method: e.method,
      amount: e.amount,
      by: e.by,
      usdt: e.usdt,
      note: e.note,
      reversed_by: e.reversed_by,
    };
  }
  return {
    kind: 'reversal' as const,
    id: e.id,
    at: e.at,
    method: e.method,
    amount: e.amount,
    by: e.by,
    reverses: e.reverses!,
    reason: e.reason,
  };
}

function getClearanceSnapshot(partner: DbUser) {
  const acct = buildSettlementAccount(partner);
  const pendingFen = acct.pending === null ? null : parseYuanToFen(acct.pending);
  const ownProviders = store.state.providers.filter(
    (p) => p.deleted_at === null && p.created_by_user_id === partner.id
  );
  const children = store.state.users.filter(
    (u) => u.parent_supplier_id === partner.id && u.cleared_at === null
  );
  const childIds = new Set(children.map((c) => c.id));
  const childAccountsCount = store.state.providers.filter(
    (p) => p.deleted_at === null && p.created_by_user_id !== null && childIds.has(p.created_by_user_id)
  ).length;

  let owedPartners = 0;
  let owedTotalFen = 0n;
  for (const child of children) {
    const childAcct = buildSettlementAccount(child);
    const cp = childAcct.pending ? parseYuanToFen(childAcct.pending) : 0n;
    if (cp > 0n) {
      owedPartners++;
      owedTotalFen += cp;
    }
  }

  const state: 'open' | 'clearing' | 'cleared' =
    partner.cleared_at !== null ? 'cleared' : partner.clearing ? 'clearing' : 'open';

  return {
    state,
    accounts: ownProviders.length,
    accounts_at_start: partner.clearing ? Math.max(1, ownProviders.length) : null,
    below: {
      partners: children.length,
      accounts: childAccountsCount,
    },
    pending: acct.pending,
    owed_below: {
      partners: owedPartners,
      total: formatFenToYuan(owedTotalFen),
    },
    blocked: pendingFen !== null && pendingFen > 0n && state === 'open' ? ('pending' as const) : null,
  };
}

app.get('/ac3/partners/:id/clearance', requireAuth, (req: Request, res: Response) => {
  const partner = store.getUserById(req.params.id);
  if (!partner) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  res.json(getClearanceSnapshot(partner));
});

app.post('/ac3/partners/:id/clearance', requireAuth, (req: AuthedRequest, res: Response) => {
  const partner = store.getUserById(req.params.id);
  if (!partner) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  const snap = getClearanceSnapshot(partner);
  if (snap.blocked === 'pending') {
    res.status(409).json({ error: 'pending_balance', detail: 'Partner still has unsettled balance' });
    return;
  }
  partner.clearing = true;
  const nowIso = new Date().toISOString();
  // Delete own accounts & re-parent children
  for (const p of store.state.providers) {
    if (p.deleted_at === null && p.created_by_user_id === partner.id) {
      deleteSingleProvider(p, nowIso);
    }
  }
  for (const child of store.state.users) {
    if (child.parent_supplier_id === partner.id) {
      child.parent_supplier_id = req.principal!.role === 'admin' ? null : req.principal!.id;
    }
  }
  partner.clearing = false;
  partner.cleared_at = nowIso;
  store.scheduleSave();
  broadcastProvidersPatch();
  res.json(getClearanceSnapshot(partner));
});

app.get('/ac3/settlement', requireAuth, (req: AuthedRequest, res: Response) => {
  const viewer = req.principal!;
  const isAdmin = viewer.role === 'admin';
  const canSettle = isAdmin || viewer.can_create_suppliers;

  let mine: { account: ReturnType<typeof buildSettlementAccount>; payer: string | null; rates_shown: boolean } | null = null;
  if (viewer.role === 'supplier' || viewer.role === 'mock_supplier') {
    const parent = viewer.parent_supplier_id ? store.getUserById(viewer.parent_supplier_id) : null;
    mine = {
      account: buildSettlementAccount(viewer, !viewer.rates_shown),
      payer: parent?.email ?? null,
      rates_shown: viewer.rates_shown,
    };
  }

  const payees = canSettle
    ? store.state.users
        .filter(
          (u) =>
            (u.role === 'supplier' || u.role === 'mock_supplier') &&
            u.hosted_top_id === null &&
            (isAdmin ? u.parent_supplier_id === null : u.parent_supplier_id === viewer.id)
        )
        .map((u) => buildSettlementAccount(u, false))
    : [];

  res.json({
    as_of: new Date().toISOString(),
    can_settle: canSettle,
    mine,
    payees,
  });
});

app.get('/ac3/settlement/entries', requireAuth, (req: AuthedRequest, res: Response) => {
  const viewer = req.principal!;
  const isAdmin = viewer.role === 'admin';
  const entries = store.state.settlementEntries
    .filter((e) => (isAdmin ? e.payer_id === null : e.payer_id === viewer.id))
    .toSorted((a, b) => Date.parse(b.at) - Date.parse(a.at))
    .map((e) => {
      const acct = store.getUserById(e.account_id);
      return {
        entry: serializeSettlementEntry(e),
        account: {
          id: e.account_id,
          email: acct?.email ?? 'unknown@aerorelay.ai',
          remark: acct?.remark ?? null,
        },
      };
    });
  res.json({ entries, total: entries.length });
});

app.get('/ac3/settlement/accounts/:id', requireAuth, (req: AuthedRequest, res: Response) => {
  const viewer = req.principal!;
  const target = store.getUserById(req.params.id);
  if (!target) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  const isOwn = target.id === viewer.id;
  const canSettle =
    viewer.role === 'admin'
      ? target.parent_supplier_id === null
      : viewer.can_create_suppliers && target.parent_supplier_id === viewer.id;
  const hideRates = isOwn && !target.rates_shown && viewer.role !== 'admin';
  const acct = buildSettlementAccount(target, hideRates);
  const parent = target.parent_supplier_id ? store.getUserById(target.parent_supplier_id) : null;

  const entries = store.state.settlementEntries
    .filter((e) => e.account_id === target.id)
    .toSorted((a, b) => Date.parse(b.at) - Date.parse(a.at))
    .map(serializeSettlementEntry);

  const changes = hideRates ? [] : store.state.multiplierChanges[target.id] ?? [];
  const segments =
    hideRates || acct.due === null
      ? []
      : changes.length > 1
        ? (() => {
            const totalPts = Number(acct.earned);
            const firstPts = Number((totalPts * 0.35).toFixed(2));
            const secondPts = Number((totalPts - firstPts).toFixed(2));
            const firstMult = changes[changes.length - 1].to;
            const secondMult = target.multiplier!;
            const firstDue = pointsTimesMultiplierToFen(firstPts, firstMult) ?? 0n;
            const totalDue = parseYuanToFen(acct.due);
            const secondDue = totalDue - firstDue;
            return [
              {
                from: target.created_at,
                until: changes[0].at,
                earned: firstPts.toFixed(2),
                multiplier: firstMult,
                due: formatFenToYuan(firstDue),
              },
              {
                from: changes[0].at,
                until: null,
                earned: secondPts.toFixed(2),
                multiplier: secondMult,
                due: formatFenToYuan(secondDue),
              },
            ];
          })()
        : [
            {
              from: null,
              until: null,
              earned: acct.earned,
              multiplier: target.multiplier,
              due: acct.due,
            },
          ];

  const closed = store.state.closedLedgers
    .filter((c) => c.account_id === target.id)
    .map((c) => ({
      payer: c.payer,
      until: c.until,
      earned: c.earned,
      due: c.due,
      paid: c.paid,
      pending: c.pending,
      entries: c.entries.map(serializeSettlementEntry),
    }));

  res.json({
    account: acct,
    payer: parent?.email ?? null,
    can_settle: canSettle,
    segments,
    entries,
    multiplier_changes: changes,
    closed,
  });
});

app.post('/ac3/settlement/accounts/:id/payments', requireAuth, (req: AuthedRequest, res: Response) => {
  const viewer = req.principal!;
  const target = store.getUserById(req.params.id);
  if (!target) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  if (target.multiplier === null) {
    res.status(409).json({ error: 'multiplier_unset' });
    return;
  }
  const requestId = String(req.body?.request_id ?? '');
  const dup = store.state.settlementEntries.find((e) => e.request_id === requestId);
  if (dup) {
    res.json({
      entry: serializeSettlementEntry(dup),
      account: buildSettlementAccount(target, false),
    });
    return;
  }

  const method = req.body?.method as 'usdt' | 'alipay' | 'wechat' | 'bank';
  const amountCnyFen = parseYuanToFen(String(req.body?.amount_cny ?? '0'));
  if (amountCnyFen <= 0n) {
    res.status(400).json({ error: 'invalid_amount' });
    return;
  }

  const newEntry: DbSettlementEntry = {
    id: String(store.state.nextIds.entry++),
    account_id: target.id,
    payer_id: viewer.role === 'admin' ? null : viewer.id,
    kind: 'payment',
    at: new Date().toISOString(),
    method,
    amount: formatFenToYuan(amountCnyFen),
    by: viewer.email,
    usdt: req.body?.usdt ?? null,
    note: req.body?.note ?? null,
    reversed_by: null,
    reverses: null,
    reason: null,
    request_id: requestId,
  };
  store.state.settlementEntries.unshift(newEntry);
  store.scheduleSave();

  res.status(201).json({
    entry: serializeSettlementEntry(newEntry),
    account: buildSettlementAccount(target, false),
  });
});

app.post('/ac3/settlement/payments/:id/reversal', requireAuth, (req: AuthedRequest, res: Response) => {
  const viewer = req.principal!;
  const orig = store.state.settlementEntries.find((e) => e.id === req.params.id && e.kind === 'payment');
  if (!orig) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  if (orig.reversed_by !== null) {
    res.status(409).json({ error: 'already_reversed' });
    return;
  }
  const target = store.getUserById(orig.account_id);
  if (!target) {
    res.status(404).json({ error: 'not_found' });
    return;
  }

  const requestId = String(req.body?.request_id ?? '');
  const reason = String(req.body?.reason ?? '').trim();
  const revId = String(store.state.nextIds.entry++);
  const negFen = -parseYuanToFen(orig.amount);

  orig.reversed_by = revId;
  const revEntry: DbSettlementEntry = {
    id: revId,
    account_id: orig.account_id,
    payer_id: orig.payer_id,
    kind: 'reversal',
    at: new Date().toISOString(),
    method: orig.method,
    amount: formatFenToYuan(negFen),
    by: viewer.email,
    usdt: null,
    note: null,
    reversed_by: null,
    reverses: orig.id,
    reason,
    request_id: requestId,
  };
  store.state.settlementEntries.unshift(revEntry);
  store.scheduleSave();

  res.status(201).json({
    entry: serializeSettlementEntry(revEntry),
    account: buildSettlementAccount(target, false),
  });
});

// ---------------------------------------------------------------------------
// 5. Fleet, Notices & Usage Logs
// ---------------------------------------------------------------------------
app.get('/ac3/fleet/live', requireAuth, (req: AuthedRequest, res: Response) => {
  if (req.principal!.role !== 'admin' && req.principal!.role !== 'observer') {
    res.status(403).json({ error: 'forbidden' });
    return;
  }
  setupSse(res);
  fleetStreams.add(res);
  sendSseData(res, buildFleetPayload());

  req.on('close', () => {
    fleetStreams.delete(res);
  });
});

app.put('/ac3/fleet/hosts/:id/placing', requireAuth, (req: AuthedRequest, res: Response) => {
  if (req.principal!.role !== 'admin') {
    res.status(403).json({ error: 'forbidden' });
    return;
  }
  const host = store.state.fleetHosts.find((h) => h.id === req.params.id);
  if (!host || !host.placement) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  host.placement.on = Boolean(req.body?.on);
  host.placement.switched_by = req.principal!.email;
  host.placement.switched_at = new Date().toISOString();
  store.scheduleSave();
  broadcastFleetState();
  res.json({ ok: true });
});

app.get('/ac3/notices', requireAuth, (_req: Request, res: Response) => {
  res.json({ notices: getActiveNotices() });
});

app.get('/ac3/notices/live', requireAuth, (req: Request, res: Response) => {
  setupSse(res);
  noticeStreams.add(res);
  sendSseData(res, {
    notices: getActiveNotices(),
    rates_rev: store.state.ratesRev,
    pages_rev: store.state.pagesRev,
  });

  req.on('close', () => {
    noticeStreams.delete(res);
  });
});

app.get('/ac3/notices/posted', requireAuth, (req: AuthedRequest, res: Response) => {
  if (req.principal!.role !== 'admin') {
    res.status(403).json({ error: 'not_allowed' });
    return;
  }
  res.json({
    notices: store.state.notices,
    watching: Math.max(1, noticeStreams.size),
  });
});

app.post('/ac3/notices', requireAuth, (req: AuthedRequest, res: Response) => {
  if (req.principal!.role !== 'admin') {
    res.status(403).json({ error: 'not_allowed' });
    return;
  }
  const text = String(req.body?.text ?? '').trim();
  const minutes = Math.max(1, Math.min(10080, Number(req.body?.minutes ?? 60)));
  const fromRaw = req.body?.from as string | null | undefined;
  const nowMs = Date.now();

  const activeOrWaiting = store.state.notices.filter(
    (n) => n.withdrawn_at === null && Date.parse(n.until) > nowMs
  );
  if (activeOrWaiting.length >= 10) {
    res.status(409).json({ error: 'too_many' });
    return;
  }

  const fromMs = fromRaw ? Date.parse(fromRaw) : nowMs;
  const untilMs = fromMs + minutes * 60_000;
  const notice: DbNotice = {
    id: `notice-${store.state.nextIds.notice++}`,
    text,
    from: new Date(fromMs).toISOString(),
    until: new Date(untilMs).toISOString(),
    posted_at: new Date(nowMs).toISOString(),
    posted_by: req.principal!.email,
    withdrawn_at: null,
  };
  store.state.notices.unshift(notice);
  store.scheduleSave();
  broadcastNoticeState();
  res.status(201).json({ notice });
});

app.delete('/ac3/notices/:id', requireAuth, (req: AuthedRequest, res: Response) => {
  if (req.principal!.role !== 'admin') {
    res.status(403).json({ error: 'not_allowed' });
    return;
  }
  const notice = store.state.notices.find((n) => n.id === req.params.id);
  if (!notice) {
    res.status(404).json({ error: 'not_found' });
    return;
  }
  notice.withdrawn_at = new Date().toISOString();
  store.scheduleSave();
  broadcastNoticeState();
  res.json({ notice });
});

// Usage Logs
app.get('/portunex/admin/usage', requireAuth, (req: AuthedRequest, res: Response) => {
  if (req.principal!.role !== 'admin' && req.principal!.role !== 'observer') {
    res.status(403).json({ error: 'forbidden' });
    return;
  }
  const offset = Math.max(0, Number(req.query.offset ?? 0) || 0);
  const limit = Math.max(1, Math.min(200, Number(req.query.limit ?? 50) || 50));
  const status = typeof req.query.status === 'string' ? req.query.status : null;
  const mode = typeof req.query.mode === 'string' ? req.query.mode : null;
  const model = typeof req.query.model === 'string' ? req.query.model.trim().toLowerCase() : null;
  const apiKeyId = typeof req.query.api_key_id === 'string' ? req.query.api_key_id.trim() : null;
  const clientReqId = typeof req.query.request_id_client === 'string' ? req.query.request_id_client.trim() : null;
  const traceId = typeof req.query.trace_id === 'string' ? req.query.trace_id.trim() : null;
  const startMs = typeof req.query.start_time === 'string' ? Date.parse(req.query.start_time) : null;
  const endMs = typeof req.query.end_time === 'string' ? Date.parse(req.query.end_time) : null;

  const filtered = store.state.usageRecords.filter((r) => {
    if (status && r.status !== status) return false;
    if (mode && r.mode !== mode) return false;
    if (model && !r.model.toLowerCase().includes(model)) return false;
    if (apiKeyId && r.api_key_id !== apiKeyId) return false;
    if (clientReqId && r.request_id_client !== clientReqId) return false;
    if (traceId && r.trace_id !== traceId) return false;
    const t = Date.parse(r.started_at);
    if (startMs !== null && !Number.isNaN(startMs) && t < startMs) return false;
    if (endMs !== null && !Number.isNaN(endMs) && t > endMs) return false;
    return true;
  });

  res.json({
    usage_records: filtered.slice(offset, offset + limit),
    total: filtered.length,
    offset,
    limit,
  });
});

app.get('/ac3/usage/served', requireAuth, (req: Request, res: Response) => {
  const ids = String(req.query.ids ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const served = ids.map((id) => {
    const rec = store.state.usageRecords.find((r) => r.id === id);
    if (!rec || !rec.provider_id) return { id, account: null };
    const prov = store.state.providers.find((p) => p.id === rec.provider_id);
    if (!prov) {
      return {
        id,
        account: { id: rec.provider_id, name: null, base_url: null, gone: true },
      };
    }
    return {
      id,
      account: {
        id: prov.id,
        name: prov.name,
        base_url: prov.base_url,
        gone: prov.deleted_at !== null,
      },
    };
  });

  res.json({ served });
});

// ---------------------------------------------------------------------------
// Background Live Telemetry Engine (every 2.5s)
// ---------------------------------------------------------------------------
setInterval(() => {
  const now = Date.now();
  const nowIso = new Date(now).toISOString();

  // 1. Pulse active providers
  for (const p of store.state.providers) {
    if (p.deleted_at !== null || !p.healthy || p.deployment_status !== 'succeeded') continue;
    const h5 = p.window_states.find((w) => w.config.window_type === '5h');
    if (h5 && (h5.utilization ?? 0) >= 0.99) {
      p.rpm = 0;
      p.active_concurrent = 0;
      continue;
    }
    const deltaRpm = Math.floor(Math.random() * 5) - 2;
    p.rpm = Math.max(1, Math.min(p.rpm_limit ?? 25, (p.rpm ?? 4) + deltaRpm));
    p.active_concurrent = Math.max(0, Math.min(p.max_concurrent ?? 10, Math.round((p.rpm ?? 0) / 3)));

    if (Math.random() < 0.45) {
      p.total_requests += 1;
      p.today_requests += 1;
      p.h5_requests += 1;
      const pts = Number((0.25 + Math.random() * 0.4).toFixed(2));
      p.total_points_consumed = Number((p.total_points_consumed + pts).toFixed(2));
      p.today_points_consumed = Number((p.today_points_consumed + pts).toFixed(2));
      p.h5_points_consumed = Number((p.h5_points_consumed + pts).toFixed(2));
      if (h5 && h5.utilization !== null) {
        h5.utilization = Math.min(0.98, Number((h5.utilization + 0.001).toFixed(3)));
        h5.last_request_at = nowIso;
        h5.request_count += 1;
      }
    }
  }

  // 2. Pulse fleet hosts
  for (const h of store.state.fleetHosts) {
    if (!h.load) continue;
    const drift = (Math.random() - 0.5) * 0.04;
    const minCpu = h.id === 'host-kronos-02' ? 0.83 : 0.1;
    const maxCpu = h.id === 'host-kronos-02' ? 0.93 : 0.78;
    h.load.cpu = Number(Math.max(minCpu, Math.min(maxCpu, h.load.cpu + drift)).toFixed(3));
    h.load.uptime_seconds += 3;
    h.load.sampled_at = nowIso;
    if (h.placement) {
      h.placement.probed_cpu = h.load.cpu;
      h.placement.probed_at = nowIso;
      h.placement.at_cpu_ceiling = h.load.cpu >= 0.85;
    }
  }

  if (providerStreams.size > 0) broadcastProvidersPatch();
  if (fleetStreams.size > 0) broadcastFleetState();
}, 2500);

// Keep notice SSE alive and trigger scheduled notices on time
setInterval(() => {
  if (noticeStreams.size > 0) {
    broadcastNoticeState();
  }
}, 12_000);

// Serve production frontend if dist exists
const distDir = path.resolve(process.cwd(), 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/ac3/') || req.path.startsWith('/portunex/')) {
      next();
      return;
    }
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(PORT, '127.0.0.1', () => {
  console.log(`[AEROULTRA Server] Listening on http://127.0.0.1:${PORT}`);
});
