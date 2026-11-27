import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as jsxRuntime from 'react/jsx-runtime';
import {
  NavLink,
  Link,
  Outlet,
  Navigate,
  useLocation,
  useNavigate,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { z, ZodError, ZodIssueCode, NEVER } from 'zod';
import i18n, { readStoredLanguage } from '../i18n';
import {
  BRAND,
  STORAGE_KEYS,
  SUPPORTED_LANGUAGES,
  LANGUAGE_LABELS,
  safeGetStorage,
  safeSetStorage,
  type SupportedLanguage,
} from '../constants';
import { animateElement } from './animate';

export const _ = React;
export const kc = ReactDOM;
export const V = jsxRuntime;
export const pl = animateElement;

// CommonJS lazy factory helper used for jsx-runtime shim
export function o<T>(fn: (exports: Record<string, unknown>, module: { exports: T }) => void): () => T {
  return () => {
    const mod = { exports: {} as T };
    fn(mod.exports as Record<string, unknown>, mod);
    return mod.exports;
  };
}

// Zod schema constructors matching original runtime bindings
export const zStr = z.string;
export const Yn = z.number;
export const B = z.object;
export const $n = z.array;
export const Zn = z.boolean;
export const Xn = z.bigint;
export const Qn = z.unknown;
export const er = z.union;
export const tr = z.discriminatedUnion;
export const nr = z.tuple;
export const rr = z.record;
export const ir = z.literal;
export const ar = z.enum;
export const F = ZodIssueCode;
export const or = NEVER;
export const bt = ZodError;

// i18n & storage bindings
export const st = BRAND;
export const ct = STORAGE_KEYS.language;
export const lt = STORAGE_KEYS.session;
export const ut = STORAGE_KEYS.poolSize;
export const dt = STORAGE_KEYS.poolFilters;
export const ft = STORAGE_KEYS.poolPageSize;
export const mt = SUPPORTED_LANGUAGES;
export const ht = LANGUAGE_LABELS;
export const sr = safeGetStorage;
export const cr = safeSetStorage;
export const lr = (val: unknown): val is SupportedLanguage =>
  SUPPORTED_LANGUAGES.includes(val as SupportedLanguage);
export const fr = (): SupportedLanguage => readStoredLanguage() ?? 'zh-CN';
export const hr = i18n;
export const N = useTranslation;

// React Router bindings
export const yc = NavLink;
export const vc = Link;
export const js = Outlet;
export const As = Navigate;
export const Ko = useLocation;
export const Yo = useNavigate;
export const hc = createBrowserRouter;
export const Ac = RouterProvider;
