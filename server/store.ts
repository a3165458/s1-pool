import fs from 'node:fs';
import path from 'node:path';
import type {
  DatabaseState,
  DbDeploymentTask,
  DbExit,
  DbFleetHost,
  DbGhost,
  DbNotice,
  DbOAuthSession,
  DbProvider,
  DbSettlementEntry,
  DbUsageRecord,
  DbUser,
} from './types.js';

const DATA_DIR = path.resolve(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

function isoAgo(msAgo: number): string {
  return new Date(Date.now() - msAgo).toISOString();
}

function isoAhead(msAhead: number): string {
  return new Date(Date.now() + msAhead).toISOString();
}

function createSeedDatabase(): DatabaseState {
  const now = Date.now();
  const HOUR = 3600_000;
  const DAY = 24 * HOUR;

  const users: DbUser[] = [
    {
      id: '1000',
      email: 'admin@aerorelay.ai',
      password: 'aeroultra123',
      role: 'admin',
      can_create_suppliers: true,
      parent_supplier_id: null,
      created_at: isoAgo(90 * DAY),
      multiplier: null,
      remark: null,
      remark_admin: null,
      clearing: false,
      cleared_at: null,
      rates_shown: true,
      deploy_closed: false,
      hosted_top_id: null,
      alliance_key: 'ak-admin-root-0000',
    },
    {
      id: '2001',
      email: 'lead@aerorelay.ai',
      password: 'aeroultra123',
      role: 'supplier',
      can_create_suppliers: true,
      parent_supplier_id: null,
      created_at: isoAgo(65 * DAY),
      multiplier: '1.85',
      remark: '华东主力联盟',
      remark_admin: null,
      clearing: false,
      cleared_at: null,
      rates_shown: true,
      deploy_closed: false,
      hosted_top_id: null,
      alliance_key: 'ak-east-lead-8f3c91d2',
    },
    {
      id: '2002',
      email: 'alpha@aerorelay.ai',
      password: 'aeroultra123',
      role: 'supplier',
      can_create_suppliers: true,
      parent_supplier_id: null,
      created_at: isoAgo(48 * DAY),
      multiplier: '1.90',
      remark: '北美深海联盟',
      remark_admin: null,
      clearing: false,
      cleared_at: null,
      rates_shown: true,
      deploy_closed: false,
      hosted_top_id: null,
      alliance_key: 'ak-alpha-sea-4b92e10a',
    },
    {
      id: '2003',
      email: 'zenith@aerorelay.ai',
      password: 'aeroultra123',
      role: 'supplier',
      can_create_suppliers: false,
      parent_supplier_id: null,
      created_at: isoAgo(18 * DAY),
      multiplier: '1.75',
      remark: '星辰直属',
      remark_admin: null,
      clearing: false,
      cleared_at: null,
      rates_shown: true,
      deploy_closed: false,
      hosted_top_id: null,
      alliance_key: 'ak-zenith-direct-91c4b2',
    },
    {
      id: '2004',
      email: 'fresh@aerorelay.ai',
      password: 'aeroultra123',
      role: 'supplier',
      can_create_suppliers: false,
      parent_supplier_id: null,
      created_at: isoAgo(4 * HOUR),
      multiplier: null,
      remark: '今日新开待定',
      remark_admin: null,
      clearing: false,
      cleared_at: null,
      rates_shown: false,
      deploy_closed: false,
      hosted_top_id: null,
      alliance_key: 'ak-fresh-new-77d1e8',
    },
    {
      id: '3001',
      email: 'sub@aerorelay.ai',
      password: 'aeroultra123',
      role: 'supplier',
      can_create_suppliers: false,
      parent_supplier_id: '2001',
      created_at: isoAgo(42 * DAY),
      multiplier: '1.55',
      remark: '苏州一分队',
      remark_admin: '主力高产分队',
      clearing: false,
      cleared_at: null,
      rates_shown: true,
      deploy_closed: false,
      hosted_top_id: null,
      alliance_key: 'ak-sub-suzhou-3001ac',
    },
    {
      id: '3002',
      email: 'nightowl@aerorelay.ai',
      password: 'aeroultra123',
      role: 'supplier',
      can_create_suppliers: false,
      parent_supplier_id: '2001',
      created_at: isoAgo(30 * DAY),
      multiplier: '1.60',
      remark: '杭州夜班组',
      remark_admin: '夜间稳态组',
      clearing: false,
      cleared_at: null,
      rates_shown: true,
      deploy_closed: false,
      hosted_top_id: null,
      alliance_key: 'ak-sub-hz-3002bd',
    },
    {
      id: '3003',
      email: 'harbor@aerorelay.ai',
      password: 'aeroultra123',
      role: 'supplier',
      can_create_suppliers: false,
      parent_supplier_id: '2001',
      created_at: isoAgo(12 * DAY),
      multiplier: '1.50',
      remark: '宁波海港组',
      remark_admin: null,
      clearing: false,
      cleared_at: null,
      rates_shown: false,
      deploy_closed: false,
      hosted_top_id: null,
      alliance_key: 'ak-sub-nb-3003ef',
    },
    {
      id: '3004',
      email: 'pacific@aerorelay.ai',
      password: 'aeroultra123',
      role: 'supplier',
      can_create_suppliers: false,
      parent_supplier_id: '2002',
      created_at: isoAgo(25 * DAY),
      multiplier: '1.65',
      remark: '西雅图节点',
      remark_admin: '美西原生住宅',
      clearing: false,
      cleared_at: null,
      rates_shown: true,
      deploy_closed: false,
      hosted_top_id: null,
      alliance_key: 'ak-sub-sea-3004fa',
    },
    {
      id: '4001',
      email: 'hosted-ark@aerorelay.ai',
      password: 'aeroultra123',
      role: 'supplier',
      can_create_suppliers: false,
      parent_supplier_id: null,
      created_at: isoAgo(35 * DAY),
      multiplier: '1.80',
      remark: '方舟外部托管',
      remark_admin: null,
      clearing: false,
      cleared_at: null,
      rates_shown: true,
      deploy_closed: false,
      hosted_top_id: '4001',
      alliance_key: 'ak-hosted-ark-4001',
    },
    {
      id: '5001',
      email: 'observer@aerorelay.ai',
      password: 'aeroultra123',
      role: 'observer',
      can_create_suppliers: false,
      parent_supplier_id: null,
      created_at: isoAgo(60 * DAY),
      multiplier: null,
      remark: '审计巡检员',
      remark_admin: null,
      clearing: false,
      cleared_at: null,
      rates_shown: false,
      deploy_closed: false,
      hosted_top_id: null,
      alliance_key: 'ak-observer-5001',
    },
  ];

  const fleetHosts: DbFleetHost[] = [
    {
      id: 'host-athena-01',
      label: 'ATHENA01',
      address: '198.51.100.11',
      hardware: {
        cpu_model: 'AMD EPYC 9654 96-Core Processor',
        sockets: 2,
        cores: 192,
        threads: 384,
        memory_bytes: 768 * 1024 ** 3,
        disk_bytes: 7680 * 1024 ** 3,
      },
      vms: 148,
      load: {
        cpu: 0.46,
        memory_used_bytes: Math.round(412 * 1024 ** 3),
        disk_used_bytes: Math.round(2840 * 1024 ** 3),
        load_averages: [82.4, 79.1, 74.8],
        uptime_seconds: 42 * 86400 + 14200,
        sampled_at: new Date(now).toISOString(),
      },
      placement: {
        on: true,
        switched_by: 'admin@aerorelay.ai',
        switched_at: isoAgo(14 * DAY),
        probed_cpu: 0.45,
        probed_at: isoAgo(12_000),
        at_cpu_ceiling: false,
        probation: null,
      },
    },
    {
      id: 'host-kronos-02',
      label: 'KRONOS02',
      address: '198.51.100.12',
      hardware: {
        cpu_model: 'AMD EPYC 9554P 64-Core Processor',
        sockets: 1,
        cores: 64,
        threads: 128,
        memory_bytes: 512 * 1024 ** 3,
        disk_bytes: 3840 * 1024 ** 3,
      },
      vms: 112,
      load: {
        cpu: 0.87,
        memory_used_bytes: Math.round(358 * 1024 ** 3),
        disk_used_bytes: Math.round(2190 * 1024 ** 3),
        load_averages: [108.2, 102.6, 98.4],
        uptime_seconds: 29 * 86400 + 6100,
        sampled_at: new Date(now).toISOString(),
      },
      placement: {
        on: true,
        switched_by: 'admin@aerorelay.ai',
        switched_at: isoAgo(9 * DAY),
        probed_cpu: 0.88,
        probed_at: isoAgo(8_000),
        at_cpu_ceiling: true,
        probation: null,
      },
    },
    {
      id: 'host-helios-03',
      label: 'HELIOS03',
      address: '198.51.100.13',
      hardware: {
        cpu_model: 'Intel(R) Xeon(R) Platinum 8480+',
        sockets: 2,
        cores: 112,
        threads: 224,
        memory_bytes: 512 * 1024 ** 3,
        disk_bytes: 3840 * 1024 ** 3,
      },
      vms: 96,
      load: {
        cpu: 0.58,
        memory_used_bytes: Math.round(274 * 1024 ** 3),
        disk_used_bytes: Math.round(1690 * 1024 ** 3),
        load_averages: [118.5, 114.0, 109.2],
        uptime_seconds: 58 * 86400 + 3800,
        sampled_at: new Date(now).toISOString(),
      },
      placement: {
        on: true,
        switched_by: 'admin@aerorelay.ai',
        switched_at: isoAgo(21 * DAY),
        probed_cpu: 0.57,
        probed_at: isoAgo(9_000),
        at_cpu_ceiling: false,
        probation: null,
      },
    },
    {
      id: 'host-zephyr-04',
      label: 'ZEPHYR04',
      address: '198.51.100.14',
      hardware: {
        cpu_model: 'AMD Ryzen 9 9950X 16-Core Processor',
        sockets: 1,
        cores: 16,
        threads: 32,
        memory_bytes: 192 * 1024 ** 3,
        disk_bytes: 2048 * 1024 ** 3,
      },
      vms: 38,
      load: {
        cpu: 0.31,
        memory_used_bytes: Math.round(98 * 1024 ** 3),
        disk_used_bytes: Math.round(720 * 1024 ** 3),
        load_averages: [9.4, 8.8, 8.2],
        uptime_seconds: 11 * 86400 + 22400,
        sampled_at: new Date(now).toISOString(),
      },
      placement: {
        on: false,
        switched_by: 'admin@aerorelay.ai',
        switched_at: isoAgo(2 * DAY),
        probed_cpu: 0.31,
        probed_at: isoAgo(10_000),
        at_cpu_ceiling: false,
        probation: null,
      },
    },
    {
      id: 'host-boreas-05',
      label: 'BOREAS05',
      address: '198.51.100.15',
      hardware: {
        cpu_model: 'AMD EPYC 9354 32-Core Processor',
        sockets: 1,
        cores: 32,
        threads: 64,
        memory_bytes: 256 * 1024 ** 3,
        disk_bytes: 2048 * 1024 ** 3,
      },
      vms: 6,
      load: {
        cpu: 0.14,
        memory_used_bytes: Math.round(24 * 1024 ** 3),
        disk_used_bytes: Math.round(210 * 1024 ** 3),
        load_averages: [4.1, 3.6, 2.9],
        uptime_seconds: 19400,
        sampled_at: new Date(now).toISOString(),
      },
      placement: {
        on: true,
        switched_by: 'admin@aerorelay.ai',
        switched_at: isoAgo(5 * HOUR),
        probed_cpu: 0.14,
        probed_at: isoAgo(7_000),
        at_cpu_ceiling: false,
        probation: { healthy: 6, needed: 10 },
      },
    },
  ];

  const countries = ['US', 'JP', 'SG', 'TW', 'GB', 'DE', 'HK', 'KR'];
  const tiers = ['max20x', 'max20x', 'max5x', 'max20x', 'pro'];
  const tagPool = ['主力20x', '美西原生', '东京直连', '夜班高防', 'VIP池', '稳定长寿'];

  const ownerSpecs: Array<{
    userId: string | null;
    email: string | null;
    topId: string | null;
    count: number;
  }> = [
    { userId: '2001', email: 'lead@aerorelay.ai', topId: '2001', count: 8 },
    { userId: '3001', email: 'sub@aerorelay.ai', topId: '2001', count: 9 },
    { userId: '3002', email: 'nightowl@aerorelay.ai', topId: '2001', count: 6 },
    { userId: '3003', email: 'harbor@aerorelay.ai', topId: '2001', count: 4 },
    { userId: '2002', email: 'alpha@aerorelay.ai', topId: '2002', count: 5 },
    { userId: '3004', email: 'pacific@aerorelay.ai', topId: '2002', count: 5 },
    { userId: '2003', email: 'zenith@aerorelay.ai', topId: '2003', count: 4 },
    { userId: null, email: null, topId: null, count: 3 }, // Platform-held
    { userId: '4001', email: 'hosted-ark@aerorelay.ai', topId: '4001', count: 2 }, // Hosted
  ];

  const providers: DbProvider[] = [];
  const exits: DbExit[] = [];
  let pid = 10001;
  let idx = 0;

  for (const spec of ownerSpecs) {
    for (let k = 0; k < spec.count; k++) {
      const id = String(pid++);
      const hostObj = fleetHosts[idx % fleetHosts.length];
      const vmNum = 10 + idx;
      const country = countries[idx % countries.length];
      const proxyHost = `45.${120 + (idx % 90)}.${18 + ((idx * 7) % 210)}.${30 + ((idx * 13) % 200)}`;
      const proxyPort = 10000 + (idx % 500);
      const httpProxy = `http://arx_${id}:pw${id}x9@${proxyHost}:${proxyPort}`;
      const baseUrl = `http://${hostObj.address}:${10765 + vmNum}`;
      const tier = tiers[idx % tiers.length];

      // Determine account state distribution
      let healthy = true;
      let deploymentStatus: 'deploying' | 'succeeded' | 'failed' = 'succeeded';
      let deploymentMessage: string | null = 'Instance ready';
      let lastError: DbProvider['last_error'] = null;
      let h5Util = Number((0.18 + ((idx * 17) % 68) / 100).toFixed(2));
      let d7Util = Number((0.22 + ((idx * 13) % 62) / 100).toFixed(2));
      let f5Util = Number((0.12 + ((idx * 19) % 72) / 100).toFixed(2));
      let rpm = 3 + (idx % 11);
      let activeConcurrent = idx % 5;

      if (idx === 3 || idx === 16) {
        // Quota 5h full -> limited (all models)
        h5Util = 1.0;
        rpm = 0;
        activeConcurrent = 0;
      } else if (idx === 8 || idx === 27) {
        // Partial model (F5 / fable) limited
        f5Util = 1.0;
        rpm = 2;
      } else if (idx === 12) {
        // Upstream 429 RateLimited
        healthy = false;
        rpm = 0;
        activeConcurrent = 0;
        lastError = {
          type: 'RateLimited',
          code: '429',
          message: 'Upstream returned HTTP 429: Too Many Requests on claude-opus-4-6',
          occurred_at: isoAgo(18 * 60_000),
        };
      } else if (idx === 6) {
        healthy = false;
        rpm = 0;
        activeConcurrent = 0;
        lastError = {
          type: 'Forbidden',
          code: '403',
          message: 'Account organization disabled by upstream policy [org_ban]',
          occurred_at: isoAgo(3.5 * HOUR),
        };
      } else if (idx === 19) {
        healthy = false;
        rpm = 0;
        activeConcurrent = 0;
        lastError = {
          type: 'Unauthorized',
          code: '401',
          message: 'OAuth session revoked or password changed by account owner',
          occurred_at: isoAgo(6.2 * HOUR),
        };
      } else if (idx === 24) {
        healthy = false;
        rpm = 0;
        activeConcurrent = 0;
        lastError = {
          type: 'PaymentRequired',
          code: '402',
          message: 'Subscription billing cycle unpaid or card declined',
          occurred_at: isoAgo(2.1 * HOUR),
        };
      } else if (idx === 33) {
        healthy = false;
        rpm = 0;
        activeConcurrent = 0;
        lastError = {
          type: 'TokenRefreshError',
          code: 'invalid_grant',
          message: 'Refresh token expired during background rotation',
          occurred_at: isoAgo(55 * 60_000),
        };
      } else if (idx === 14 || idx === 37) {
        // Disabled manually (healthy=false, lastError=null)
        healthy = false;
        rpm = 0;
        activeConcurrent = 0;
      } else if (idx === 21) {
        // Deploying
        healthy = false;
        rpm = 0;
        activeConcurrent = 0;
        deploymentStatus = 'deploying';
        deploymentMessage = '正在初始化隔离容器与住宅代理隧道 (3/4)';
      } else if (idx === 39) {
        // Deploy failed
        healthy = false;
        rpm = 0;
        activeConcurrent = 0;
        deploymentStatus = 'failed';
        deploymentMessage = '代理出口连接超时：无法通过指定 HTTP 代理握手';
        lastError = {
          type: 'ConnectionTimeout',
          code: 'ETIMEDOUT',
          message: 'Proxy tunnel timed out after 15000ms while verifying upstream',
          occurred_at: isoAgo(42 * 60_000),
        };
      }

      const createdAgo =
        idx % 7 === 0
          ? (1 + (idx % 6)) * HOUR // Joined today!
          : (2 + (idx % 24)) * DAY + (idx % 9) * HOUR;

      const totalRequests = deploymentStatus === 'deploying' ? 0 : 1240 + idx * 385;
      const todayRequests = deploymentStatus === 'deploying' ? 0 : 140 + (idx % 12) * 48;
      const h5Requests = deploymentStatus === 'deploying' ? 0 : 38 + (idx % 9) * 19;
      const totalPoints = Number((totalRequests * 0.42).toFixed(2));
      const todayPoints = Number((todayRequests * 0.44).toFixed(2));
      const h5Points = Number((h5Requests * 0.45).toFixed(2));

      const userTags = [tagPool[idx % tagPool.length]];
      if (tier === 'max20x') userTags.push('Max20x');
      if (spec.topId !== null) {
        userTags.push(`alliance-scope-${spec.topId}`);
      }

      const emailPrefix = [
        'claude.zen',
        'arx.prime',
        'relay.core',
        'nebula.max',
        'aurora.ops',
        'silk.node',
        'titan.flow',
        'vertex.ai',
      ][idx % 8];

      providers.push({
        id,
        name: `${emailPrefix}.${101 + idx}@proton.me`,
        healthy,
        kind: 'anthropic-oauth',
        base_url: baseUrl,
        http_proxy: httpProxy,
        last_error: lastError,
        last_checked_at: isoAgo((1 + (idx % 8)) * 60_000),
        deployment_status: deploymentStatus,
        deployment_message: deploymentMessage,
        available_from: idx % 9 === 0 ? '08:00' : null,
        available_until: idx % 9 === 0 ? '23:30' : null,
        created_by_user_id: spec.userId,
        created_by_email: spec.email,
        tags: userTags,
        weight: 100,
        max_concurrent: tier === 'max20x' ? 12 : tier === 'max5x' ? 6 : 3,
        active_concurrent: activeConcurrent,
        rpm,
        rpm_limit: tier === 'max20x' ? 30 : 15,
        rps_limit: 2,
        subscription_tier: tier,
        total_points_consumed: totalPoints,
        today_points_consumed: todayPoints,
        h5_points_consumed: h5Points,
        total_requests: totalRequests,
        today_requests: todayRequests,
        h5_requests: h5Requests,
        refused_requests: idx % 4 === 0 ? 3 + (idx % 7) : 0,
        total_input_tokens: totalRequests * 6800,
        total_output_tokens: totalRequests * 1450,
        total_cache_creation_tokens: totalRequests * 2100,
        total_cache_read_tokens: totalRequests * 19400,
        window_states:
          deploymentStatus === 'deploying'
            ? []
            : [
                {
                  id: `${id}01`,
                  config: { window_type: '5h', model_pattern: '*' },
                  utilization: h5Util,
                  window_start: isoAgo(3.1 * HOUR),
                  window_end: isoAhead((1.9 + (idx % 3) * 0.6) * HOUR),
                  last_request_at: rpm > 0 ? isoAgo((idx % 45) * 1000) : isoAgo(25 * 60_000),
                  request_count: h5Requests,
                },
                {
                  id: `${id}02`,
                  config: { window_type: '7d', model_pattern: '*' },
                  utilization: d7Util,
                  window_start: isoAgo(4.2 * DAY),
                  window_end: isoAhead((2.8 + (idx % 4) * 0.7) * DAY),
                  last_request_at: rpm > 0 ? isoAgo((idx % 45) * 1000) : isoAgo(25 * 60_000),
                  request_count: Math.round(totalRequests * 0.45),
                },
                {
                  id: `${id}03`,
                  config: { window_type: '7d_oi', model_pattern: '*fable*' },
                  utilization: f5Util,
                  window_start: isoAgo(4.2 * DAY),
                  window_end: isoAhead((2.8 + (idx % 4) * 0.7) * DAY),
                  last_request_at: isoAgo(6 * 60_000),
                  request_count: Math.round(totalRequests * 0.16),
                },
              ],
        created_at: isoAgo(createdAgo),
        updated_at: isoAgo(2 * 60_000),
        deleted_at: null,
        remark:
          idx === 0
            ? '华东一号旗舰机'
            : idx === 1
              ? '夜班高优专线'
              : idx === 6
                ? '待核实封号原因'
                : idx % 6 === 0
                  ? `${country} 原生独享 #${idx + 1}`
                  : null,
      });

      const exitStatus: 'good' | 'slow' | 'down' =
        idx === 39 ? 'down' : idx % 9 === 5 ? 'slow' : 'good';
      exits.push({
        id,
        host: proxyHost,
        country,
        health: {
          status: exitStatus,
          latency_ms:
            exitStatus === 'down'
              ? null
              : exitStatus === 'slow'
                ? 680 + (idx % 240)
                : 48 + (idx * 7) % 135,
          checked_at: isoAgo((idx % 4) * 60_000 + 15_000),
        },
      });

      idx++;
    }
  }

  // Ghosts in Ghost Valley + Carried earlier-life points
  const ghosts: DbGhost[] = [
    {
      id: '9901',
      name: 'fallen.ronin.01@proton.me',
      owner_id: '3001',
      owner_email: 'sub@aerorelay.ai',
      tier: 'max_20x',
      error: {
        type: 'Forbidden',
        code: '403',
        message: 'Organization disabled after 18 days of peak traffic',
        occurred_at: isoAgo(5 * HOUR),
      },
      tags: ['主力20x', 'Max20x'],
      requests: 14820,
      points: 6390.5,
      earned_before: 4120.0,
      lives: 2,
      enlisted_at: isoAgo(18 * DAY),
      died_at: isoAgo(4.5 * HOUR),
    },
    {
      id: '9902',
      name: 'fallen.lotus.02@proton.me',
      owner_id: '2001',
      owner_email: 'lead@aerorelay.ai',
      tier: 'max_20x',
      error: {
        type: 'Unauthorized',
        code: '401',
        message: 'Upstream credentials invalidated',
        occurred_at: isoAgo(19 * HOUR),
      },
      tags: ['东京直连'],
      requests: 9240,
      points: 3880.2,
      earned_before: 0,
      lives: 1,
      enlisted_at: isoAgo(11 * DAY),
      died_at: isoAgo(18 * HOUR),
    },
    {
      id: '9903',
      name: 'fallen.amber.03@proton.me',
      owner_id: '3004',
      owner_email: 'pacific@aerorelay.ai',
      tier: 'max_5x',
      error: {
        type: 'PaymentRequired',
        code: '402',
        message: 'Card renewal declined by issuer',
        occurred_at: isoAgo(2.4 * DAY),
      },
      tags: ['美西原生'],
      requests: 6410,
      points: 2512.8,
      earned_before: 5210.4,
      lives: 3,
      enlisted_at: isoAgo(9 * DAY),
      died_at: isoAgo(2.2 * DAY),
    },
    {
      id: '9904',
      name: 'fallen.cipher.04@proton.me',
      owner_id: '3002',
      owner_email: 'nightowl@aerorelay.ai',
      tier: 'max_20x',
      error: {
        type: 'Forbidden',
        code: '403',
        message: 'Account suspended under automated review',
        occurred_at: isoAgo(3 * HOUR),
      },
      tags: ['夜班高防'],
      requests: 11230,
      points: 4920.0,
      earned_before: 0,
      lives: 1,
      enlisted_at: isoAgo(14 * DAY),
      died_at: isoAgo(2.6 * HOUR),
    },
  ];

  const carried = [
    {
      id: providers[0].id,
      email: providers[0].name,
      points: 3420.5,
      lives: 2,
    },
    {
      id: providers[8].id,
      email: providers[8].name,
      points: 5180.0,
      lives: 3,
    },
  ];

  const divisions = [
    {
      lead_id: '2001',
      divisions: [
        { id: 'd1a', name: '江浙主力战区', members: ['3001', '3002'] },
        { id: 'd2b', name: '沿海拓展战区', members: ['3003'] },
      ],
    },
    {
      lead_id: '2002',
      divisions: [{ id: 'd3c', name: '北美原生组', members: ['3004'] }],
    },
  ];

  const multiplierChanges: DatabaseState['multiplierChanges'] = {
    '2001': [
      {
        at: isoAgo(65 * DAY),
        from: null,
        to: '1.75',
        applies: 'all',
        by: 'admin@aerorelay.ai',
      },
      {
        at: isoAgo(20 * DAY),
        from: '1.75',
        to: '1.85',
        applies: 'from_now',
        by: 'admin@aerorelay.ai',
      },
    ],
    '2002': [
      {
        at: isoAgo(48 * DAY),
        from: null,
        to: '1.90',
        applies: 'all',
        by: 'admin@aerorelay.ai',
      },
    ],
    '3001': [
      {
        at: isoAgo(42 * DAY),
        from: null,
        to: '1.55',
        applies: 'all',
        by: 'lead@aerorelay.ai',
      },
    ],
  };

  const settlementEntries: DbSettlementEntry[] = [
    {
      id: '90001',
      account_id: '2001',
      payer_id: null,
      kind: 'payment',
      at: isoAgo(15 * DAY),
      method: 'usdt',
      amount: '68000.00',
      by: 'admin@aerorelay.ai',
      usdt: { amount: '9444.444444', rate: '7.2000' },
      note: 'TRC20 批次结算 #0812',
      reversed_by: null,
      reverses: null,
      reason: null,
      request_id: 'seed-pay-90001',
    },
    {
      id: '90002',
      account_id: '2001',
      payer_id: null,
      kind: 'payment',
      at: isoAgo(4 * DAY),
      method: 'bank',
      amount: '45000.00',
      by: 'admin@aerorelay.ai',
      usdt: null,
      note: '招行对公尾号 8821',
      reversed_by: null,
      reverses: null,
      reason: null,
      request_id: 'seed-pay-90002',
    },
    {
      id: '90003',
      account_id: '2002',
      payer_id: null,
      kind: 'payment',
      at: isoAgo(7 * DAY),
      method: 'usdt',
      amount: '42000.00',
      by: 'admin@aerorelay.ai',
      usdt: { amount: '5817.174515', rate: '7.2200' },
      note: 'ERC20 月度结算',
      reversed_by: null,
      reverses: null,
      reason: null,
      request_id: 'seed-pay-90003',
    },
    {
      id: '90004',
      account_id: '2003',
      payer_id: null,
      kind: 'payment',
      at: isoAgo(9 * DAY),
      method: 'alipay',
      amount: '24000.00',
      by: 'admin@aerorelay.ai',
      usdt: null,
      note: '星辰直属结清',
      reversed_by: '90005',
      reverses: null,
      reason: null,
      request_id: 'seed-pay-90004',
    },
    {
      id: '90005',
      account_id: '2003',
      payer_id: null,
      kind: 'reversal',
      at: isoAgo(8.8 * DAY),
      method: 'alipay',
      amount: '-24000.00',
      by: 'admin@aerorelay.ai',
      usdt: null,
      note: null,
      reversed_by: null,
      reverses: '90004',
      reason: '收款账号填写有误，原路退回重结',
      request_id: 'seed-rev-90005',
    },
    {
      id: '90006',
      account_id: '2003',
      payer_id: null,
      kind: 'payment',
      at: isoAgo(3 * DAY),
      method: 'wechat',
      amount: '18500.00',
      by: 'admin@aerorelay.ai',
      usdt: null,
      note: '重结款项已到账',
      reversed_by: null,
      reverses: null,
      reason: null,
      request_id: 'seed-pay-90006',
    },
    // Lead 2001 paying its sub-partners 3001, 3002
    {
      id: '90007',
      account_id: '3001',
      payer_id: '2001',
      kind: 'payment',
      at: isoAgo(5 * DAY),
      method: 'usdt',
      amount: '32000.00',
      by: 'lead@aerorelay.ai',
      usdt: { amount: '4456.824513', rate: '7.1800' },
      note: '苏州一分队周结',
      reversed_by: null,
      reverses: null,
      reason: null,
      request_id: 'seed-pay-90007',
    },
    {
      id: '90008',
      account_id: '3002',
      payer_id: '2001',
      kind: 'payment',
      at: isoAgo(6 * DAY),
      method: 'alipay',
      amount: '21000.00',
      by: 'lead@aerorelay.ai',
      usdt: null,
      note: '杭州夜班结算',
      reversed_by: null,
      reverses: null,
      reason: null,
      request_id: 'seed-pay-90008',
    },
  ];

  const notices: DbNotice[] = [
    {
      id: 'notice-101',
      text: '【AEROULTRA 调度通告】北美与东京高防住宅出口已完成扩容，Max 20x 账号当前结算产值稳定抬升，欢迎各联盟有序上新。',
      from: isoAgo(35 * 60_000),
      until: isoAhead(5.5 * HOUR),
      posted_at: isoAgo(35 * 60_000),
      posted_by: 'admin@aerorelay.ai',
      withdrawn_at: null,
    },
    {
      id: 'notice-102',
      text: '凌晨 03:00 将对 ZEPHYR04 宿主机进行例行内核热补丁维护，存量实例无感迁移，不影响在途请求。',
      from: isoAhead(4 * HOUR),
      until: isoAhead(10 * HOUR),
      posted_at: isoAgo(2 * HOUR),
      posted_by: 'admin@aerorelay.ai',
      withdrawn_at: null,
    },
    {
      id: 'notice-100',
      text: '本周联盟账目核对已完成，USDT 与对公通道均正常开放结算。',
      from: isoAgo(2 * DAY),
      until: isoAgo(1.5 * DAY),
      posted_at: isoAgo(2 * DAY),
      posted_by: 'admin@aerorelay.ai',
      withdrawn_at: null,
    },
  ];

  const models = [
    'claude-sonnet-4-5-20250929',
    'claude-opus-4-6',
    'claude-fable-5-2-high',
    'claude-haiku-4-5-20251001',
  ];

  const usageRecords: DbUsageRecord[] = [];
  let balanceCursor = 482910.45;

  for (let u = 0; u < 96; u++) {
    const recId = String(700001 + u);
    const model = models[u % models.length];
    const isError = u % 13 === 4;
    const isRefused = !isError && u % 19 === 7;
    const isStream = u % 5 !== 0;
    const prov = providers[u % providers.length];
    const startedMs = now - u * 47_000 - (u % 7) * 3200;
    const ttftMs = 340 + (u % 11) * 145;
    const totalMs = isError ? 620 + (u % 5) * 210 : ttftMs + 1400 + (u % 17) * 580;

    const inputTokens = 1420 + (u * 839) % 28000;
    const outputTokens = isError ? 0 : 280 + (u * 317) % 4200;
    const c5m = u % 3 === 0 ? 3200 + (u * 410) % 9000 : 0;
    const c1h = u % 6 === 0 ? 6400 : 0;
    const cacheCreate = c5m + c1h;
    const cacheRead = u % 2 === 0 ? 12800 + (u * 1290) % 44000 : 0;

    const inPrice = model.includes('opus') || model.includes('fable') ? '0.015' : '0.003';
    const outPrice = model.includes('opus') || model.includes('fable') ? '0.075' : '0.015';
    const cwPrice = model.includes('opus') || model.includes('fable') ? '0.01875' : '0.00375';
    const cw1hPrice = model.includes('opus') || model.includes('fable') ? '0.03' : '0.006';
    const crPrice = model.includes('opus') || model.includes('fable') ? '0.0015' : '0.0003';

    const rawCost = isError
      ? 0
      : (inputTokens * Number(inPrice) +
          outputTokens * Number(outPrice) +
          c5m * Number(cwPrice) +
          c1h * Number(cw1hPrice) +
          cacheRead * Number(crPrice)) /
        1000;
    const delta = Number(rawCost.toFixed(4));
    const thisBalance = Number(balanceCursor.toFixed(2));
    balanceCursor += delta;

    usageRecords.push({
      id: recId,
      api_key_id: String(8801 + (u % 6)),
      provider_id: prov.id,
      model,
      mode: isStream ? 'stream' : 'non-stream',
      status: isError ? 'error' : 'success',
      started_at: new Date(startedMs).toISOString(),
      first_response_at: new Date(startedMs + Math.round(ttftMs * 0.7)).toISOString(),
      first_output_at: isError ? null : new Date(startedMs + ttftMs).toISOString(),
      finished_at: new Date(startedMs + totalMs).toISOString(),
      upstream_status: isError ? (u % 2 === 0 ? '429' : '529') : '200',
      input_tokens: inputTokens,
      output_tokens: outputTokens,
      cache_creation_input_tokens: cacheCreate,
      cache_creation_5m_input_tokens: cacheCreate > 0 ? c5m : null,
      cache_creation_1h_input_tokens: cacheCreate > 0 ? c1h : null,
      cache_read_input_tokens: cacheRead,
      trace_id: `trc_${(90000000 + u * 1337).toString(16)}8f2a9c1b`,
      request_id_upstream: `req_01${(7000000 + u * 971).toString(16)} Anthropic`,
      request_id_client: `cli_${10000 + u}_s1pool`,
      error_code: isError ? (u % 2 === 0 ? 'rate_limit_error' : 'overloaded_error') : null,
      error_message: isError
        ? `[provider_id: ${prov.id}] Upstream returned ${u % 2 === 0 ? '429 rate_limit_error: Number of request tokens has exceeded your per-minute rate limit' : '529 overloaded_error: Upstream capacity temporarily saturated'}`
        : null,
      refused: isRefused,
      refusal_reason: isRefused ? 'safety_policy_classifier: content flagged by upstream guardrail' : null,
      points_consumed: isError
        ? null
        : {
            delta: -delta,
            balance_after: thisBalance,
            pricing_snapshot: {
              input_per_1k: inPrice,
              output_per_1k: outPrice,
              cache_create_per_1k: cwPrice,
              cache_1h_per_1k: cw1hPrice,
              cache_read_per_1k: crPrice,
              total_input_tokens: inputTokens + cacheCreate + cacheRead,
              over_input_tokens: inputTokens + cacheCreate + cacheRead > 200_000 ? 200_000 : null,
            },
          },
    });
  }

  return {
    users,
    providers,
    ghosts,
    carried,
    exits,
    divisions,
    multiplierChanges,
    segments: {},
    settlementEntries,
    closedLedgers: [
      {
        account_id: '3001',
        payer: 'legacy-east@aerorelay.ai',
        until: isoAgo(45 * DAY),
        earned: '8420.00',
        due: '12630.00',
        paid: '12630.00',
        pending: '0.00',
        entries: [],
      },
    ],
    fleetHosts,
    notices,
    usageRecords,
    ratesRev: 1,
    pagesRev: 1,
    cleanupArmedAt: isoAgo(12 * HOUR),
    nextIds: {
      user: 6001,
      provider: pid + 1,
      entry: 90100,
      usage: 700200,
      notice: 200,
      division: 10,
    },
  };
}

export class AppStore {
  public state: DatabaseState;
  public sessions = new Map<string, string>(); // sid -> userId
  public oauthSessions = new Map<string, DbOAuthSession>();
  public deployments = new Map<string, DbDeploymentTask>();
  private saveTimer: NodeJS.Timeout | null = null;

  constructor() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(DB_FILE)) {
      try {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        this.state = JSON.parse(raw) as DatabaseState;
        for (const p of this.state.providers) {
          if (p.subscription_tier === 'max_20x') p.subscription_tier = 'max20x';
          if (p.subscription_tier === 'max_5x') p.subscription_tier = 'max5x';
        }
        for (const g of this.state.ghosts) {
          if (g.tier === 'max_20x') g.tier = 'max20x';
          if (g.tier === 'max_5x') g.tier = 'max5x';
        }
        if (this.state.sessions) {
          for (const [k, v] of Object.entries(this.state.sessions)) {
            this.sessions.set(k, v);
          }
        }
      } catch {
        this.state = createSeedDatabase();
        this.flushSync();
      }
    } else {
      this.state = createSeedDatabase();
      this.flushSync();
    }
  }

  public scheduleSave(): void {
    if (this.saveTimer !== null) return;
    this.saveTimer = setTimeout(() => {
      this.saveTimer = null;
      this.flushSync();
    }, 400);
  }

  public flushSync(): void {
    try {
      this.state.sessions = Object.fromEntries(this.sessions.entries());
      fs.writeFileSync(DB_FILE, JSON.stringify(this.state, null, 2), 'utf8');
    } catch (err) {
      console.error('Failed to persist db.json:', err);
    }
  }

  public getUserById(id: string): DbUser | undefined {
    return this.state.users.find((u) => u.id === id);
  }

  public getDescendantIds(rootId: string, includeSelf = true): Set<string> {
    const result = new Set<string>();
    if (includeSelf) result.add(rootId);
    const queue = [rootId];
    while (queue.length > 0) {
      const cur = queue.shift()!;
      for (const u of this.state.users) {
        if (u.parent_supplier_id === cur && !result.has(u.id)) {
          result.add(u.id);
          queue.push(u.id);
        }
      }
    }
    return result;
  }

  public isDeployGateOpenFor(user: DbUser): boolean {
    let cur: DbUser | undefined = user;
    while (cur !== undefined) {
      if (cur.deploy_closed) return false;
      cur = cur.parent_supplier_id ? this.getUserById(cur.parent_supplier_id) : undefined;
    }
    return true;
  }

  public computePartnerEarnings(partnerId: string, includeBranch: boolean): { today: number; total: number } {
    const scopeIds = includeBranch ? this.getDescendantIds(partnerId, true) : new Set([partnerId]);
    let today = 0;
    let total = 0;
    for (const p of this.state.providers) {
      if (p.created_by_user_id && scopeIds.has(p.created_by_user_id)) {
        today += p.today_points_consumed;
        total += p.total_points_consumed;
      }
    }
    for (const g of this.state.ghosts) {
      if (g.owner_id && scopeIds.has(g.owner_id)) {
        total += g.points + g.earned_before;
      }
    }
    return {
      today: Number(today.toFixed(2)),
      total: Number(total.toFixed(2)),
    };
  }
}

export const store = new AppStore();
