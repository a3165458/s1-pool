import React, { useState } from 'react';
// @ts-expect-error JS domain module exports Zustand auth & reveal stores
import { q as useAuthStore, Al as useRevealStore } from '../modules/core';

interface DemoAccount {
  label: string;
  sub: string;
  email: string;
  password: string;
  targetPath: string;
}

const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    label: '超级管理员',
    sub: '全权限 · 总览/号池/层级/结算/公告/日志',
    email: 'admin@aerorelay.ai',
    password: 'aeroultra123',
    targetPath: '/pool',
  },
  {
    label: '大联盟商 (华东)',
    sub: '可账号部署 · 子联盟分组 · 双向结算',
    email: 'lead@aerorelay.ai',
    password: 'aeroultra123',
    targetPath: '/pool',
  },
  {
    label: '子联盟商 (苏州)',
    sub: '可账号部署 · 专属号池 · 我的应收',
    email: 'sub@aerorelay.ai',
    password: 'aeroultra123',
    targetPath: '/pool',
  },
  {
    label: '审计观察者',
    sub: '号池只读 · 明察秋毫计费溯源日志',
    email: 'observer@aerorelay.ai',
    password: 'aeroultra123',
    targetPath: '/pool',
  },
];

export const DemoQuickSwitch: React.FC = () => {
  const principal = useAuthStore((s: { principal: { email: string; role: string } | null }) => s.principal);
  const [open, setOpen] = useState(false);
  const [switching, setSwitching] = useState<string | null>(null);

  const handleSwitch = async (acct: DemoAccount) => {
    if (switching) return;
    setSwitching(acct.email);
    try {
      if (principal) {
        await useAuthStore.getState().logout();
      }
      await useAuthStore.getState().login({
        email: acct.email,
        password: acct.password,
      });
      useRevealStore.getState().startReveal();
      setOpen(false);
      window.history.pushState({}, '', acct.targetPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    } catch (err) {
      console.error('Quick switch failed:', err);
    } finally {
      setSwitching(null);
    }
  };

  const isLoginScreen = !principal;

  return (
    <div
      style={{
        position: 'fixed',
        right: 16,
        bottom: 16,
        zIndex: 85,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {(open || isLoginScreen) && (
        <div
          style={{
            marginBottom: isLoginScreen ? 0 : 8,
            padding: '10px 12px',
            width: 288,
            borderRadius: 12,
            background: 'rgba(14, 18, 25, 0.94)',
            border: '1px solid #262e3a',
            boxShadow: '0 14px 32px rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(10px)',
            color: '#f3f5f8',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 8,
              fontSize: 11,
              letterSpacing: '0.04em',
              color: '#7b8491',
            }}
          >
            <span>演示身份一键切入 (密码: aeroultra123)</span>
            {!isLoginScreen && (
              <button
                type="button"
                onClick={() => setOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#7b8491',
                  cursor: 'pointer',
                  fontSize: 13,
                  padding: '0 2px',
                }}
              >
                ×
              </button>
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {DEMO_ACCOUNTS.map((acct) => {
              const isCurrent = principal?.email === acct.email;
              const isBusy = switching === acct.email;
              return (
                <button
                  key={acct.email}
                  type="button"
                  disabled={switching !== null}
                  onClick={() => void handleSwitch(acct)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 2,
                    padding: '7px 10px',
                    borderRadius: 8,
                    border: isCurrent ? '1px solid rgba(56, 189, 248, 0.55)' : '1px solid #1c222c',
                    background: isCurrent ? 'rgba(56, 189, 248, 0.1)' : '#12161d',
                    color: '#f3f5f8',
                    cursor: switching ? 'wait' : 'pointer',
                    textAlign: 'left',
                    transition: 'border-color 0.15s, background 0.15s',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ color: isCurrent ? '#38bdf8' : '#f3f5f8' }}>
                      {acct.label}
                      {isBusy ? ' · 切入中…' : isCurrent ? ' · 当前' : ''}
                    </span>
                    <span style={{ fontSize: 11, color: '#7b8491', fontFamily: 'monospace' }}>
                      {acct.email.split('@')[0]}
                    </span>
                  </div>
                  <span style={{ fontSize: 11, color: '#a1a8b3' }}>{acct.sub}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {!isLoginScreen && !open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          title="切换演示角色身份（超管 / 大联盟商 / 子联盟商 / 观察者）"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '5px 10px',
            borderRadius: 999,
            background: 'rgba(20, 25, 34, 0.88)',
            border: '1px solid #262e3a',
            color: '#a1a8b3',
            fontSize: 11,
            cursor: 'pointer',
            boxShadow: '0 6px 18px rgba(0,0,0,0.45)',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#38bdf8',
              display: 'inline-block',
            }}
          />
          <span>切换身份</span>
        </button>
      )}
    </div>
  );
};
