export type UserRole = 'admin' | 'supplier' | 'mock_supplier' | 'observer' | 'user';

export interface DbUser {
  id: string; // numeric string /^\d{1,20}$/
  email: string;
  password: string;
  role: UserRole;
  can_create_suppliers: boolean;
  parent_supplier_id: string | null;
  created_at: string;
  multiplier: string | null;
  remark: string | null; // set by admin or direct parent
  remark_admin: string | null; // admin's private remark on sub-partners
  clearing: boolean;
  cleared_at: string | null;
  rates_shown: boolean;
  deploy_closed: boolean;
  hosted_top_id: string | null; // if part of hosted zone
  alliance_key: string;
}

export interface WindowStateRecord {
  id: string;
  config: {
    window_type: string | null;
    model_pattern: string | null;
  };
  utilization: number | null; // 0..100 percentage or 0..1? Let's verify how frontend reads utilization!
  window_start: string | null;
  window_end: string | null;
  last_request_at: string | null;
  request_count: number;
}

export interface LastErrorRecord {
  type: string;
  code: string | null;
  message: string | null;
  occurred_at: string | null;
}

export interface DbProvider {
  id: string; // numeric string /^\d{1,20}$/
  name: string;
  healthy: boolean;
  kind: string | null;
  base_url: string | null;
  http_proxy: string | null;
  last_error: LastErrorRecord | null;
  last_checked_at: string | null;
  deployment_status: 'deploying' | 'succeeded' | 'failed' | null;
  deployment_message: string | null;
  available_from: string | null;
  available_until: string | null;
  created_by_user_id: string | null;
  created_by_email: string | null;
  tags: string[];
  weight: number | null;
  max_concurrent: number | null;
  active_concurrent: number | null;
  rpm: number | null;
  rpm_limit: number | null;
  rps_limit: number | null;
  subscription_tier: string | null;
  total_points_consumed: number;
  today_points_consumed: number;
  h5_points_consumed: number;
  total_requests: number;
  today_requests: number;
  h5_requests: number;
  refused_requests: number;
  total_input_tokens: number;
  total_output_tokens: number;
  total_cache_creation_tokens: number;
  total_cache_read_tokens: number;
  window_states: WindowStateRecord[];
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  remark: string | null;
}

export interface DbGhost {
  id: string;
  name: string;
  owner_id: string | null;
  owner_email: string | null;
  tier: string | null;
  error: LastErrorRecord;
  tags: string[];
  requests: number;
  points: number;
  earned_before: number;
  lives: number;
  enlisted_at: string | null;
  died_at: string;
}

export interface DbCarried {
  id: string;
  email: string;
  points: number;
  lives: number;
}

export interface DbExit {
  id: string; // provider id
  host: string;
  country: string | null;
  health: {
    status: 'good' | 'slow' | 'down';
    latency_ms: number | null;
    checked_at: string;
  };
}

export interface DbDivisionGroup {
  lead_id: string;
  divisions: {
    id: string; // /^d[0-9a-z]{1,23}$/
    name: string;
    members: string[];
  }[];
}

export interface DbMultiplierChange {
  at: string;
  from: string | null;
  to: string;
  applies: 'all' | 'from_now';
  by: string | null;
}

export interface DbSettlementSegment {
  from: string | null;
  until: string | null;
  earned: string; // decimal string
  multiplier: string | null;
}

export interface DbSettlementEntry {
  id: string; // /^\d{1,18}$/
  account_id: string;
  payer_id: string | null; // null = platform
  kind: 'payment' | 'reversal';
  at: string;
  method: 'usdt' | 'alipay' | 'wechat' | 'bank';
  amount: string; // yuan string e.g. "1200.00" or "-1200.00"
  by: string | null;
  usdt: { amount: string; rate: string } | null;
  note: string | null;
  reversed_by: string | null;
  reverses: string | null;
  reason: string | null;
  request_id: string;
}

export interface DbClosedLedger {
  account_id: string;
  payer: string | null;
  until: string;
  earned: string;
  due: string | null;
  paid: string;
  pending: string | null;
  entries: DbSettlementEntry[];
}

export interface DbFleetHost {
  id: string;
  label: string;
  address: string | null;
  hardware: {
    cpu_model: string;
    sockets: number;
    cores: number;
    threads: number;
    memory_bytes: number;
    disk_bytes: number;
  } | null;
  vms: number;
  load: {
    cpu: number;
    memory_used_bytes: number;
    disk_used_bytes: number;
    load_averages: [number, number, number];
    uptime_seconds: number;
    sampled_at: string;
  } | null;
  placement: {
    on: boolean;
    switched_by: string | null;
    switched_at: string | null;
    probed_cpu: number | null;
    probed_at: string | null;
    at_cpu_ceiling: boolean | null;
    probation: { healthy: number; needed: number } | null;
  } | null;
}

export interface DbNotice {
  id: string;
  text: string;
  from: string;
  until: string;
  posted_at: string;
  posted_by: string;
  withdrawn_at: string | null;
}

export interface DbUsageRecord {
  id: string; // /^\d{1,20}$/
  api_key_id: string | null;
  provider_id: string | null;
  model: string;
  mode: 'stream' | 'non-stream';
  status: 'success' | 'error';
  started_at: string;
  first_response_at: string | null;
  first_output_at: string | null;
  finished_at: string | null;
  upstream_status: string | null;
  input_tokens: number;
  output_tokens: number;
  cache_creation_input_tokens: number;
  cache_creation_5m_input_tokens: number | null;
  cache_creation_1h_input_tokens: number | null;
  cache_read_input_tokens: number;
  trace_id: string | null;
  request_id_upstream: string | null;
  request_id_client: string | null;
  error_code: string | null;
  error_message: string | null;
  refused: boolean;
  refusal_reason: string | null;
  points_consumed: {
    delta: number;
    balance_after: number | null;
    pricing_snapshot: {
      input_per_1k: string;
      output_per_1k: string;
      cache_create_per_1k: string | null;
      cache_1h_per_1k: string | null;
      cache_read_per_1k: string | null;
      total_input_tokens: number | null;
      over_input_tokens: number | null;
    } | null;
  } | null;
}

export interface DbOAuthSession {
  id: string;
  http_proxy: string;
  authorization_url: string;
  expires_at: number; // unix seconds
  created_by_user_id: string;
}

export interface DbDeploymentTask {
  id: string;
  request_id: string;
  status: 'pending' | 'accepted' | 'running' | 'succeeded' | 'failed' | 'cancelled';
  message: string | null;
  error: string | null;
  name: string | null;
  provider_id: string | null;
  created_at: number;
}

export interface DatabaseState {
  users: DbUser[];
  providers: DbProvider[];
  ghosts: DbGhost[];
  carried: DbCarried[];
  exits: DbExit[];
  divisions: DbDivisionGroup[];
  multiplierChanges: Record<string, DbMultiplierChange[]>;
  segments: Record<string, DbSettlementSegment[]>;
  settlementEntries: DbSettlementEntry[];
  closedLedgers: DbClosedLedger[];
  fleetHosts: DbFleetHost[];
  notices: DbNotice[];
  usageRecords: DbUsageRecord[];
  ratesRev: number;
  pagesRev: number;
  cleanupArmedAt: string;
  sessions?: Record<string, string>;
  nextIds: {
    user: number;
    provider: number;
    entry: number;
    usage: number;
    notice: number;
    division: number;
  };
}
