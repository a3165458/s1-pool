export const BRAND = {
  stem: 'AERO',
  suffix: 'ULTRA',
} as const;

export const STORAGE_KEYS = {
  language: 'ac3-language',
  session: 'ac3-session',
  poolSize: 'ac3-pool-size',
  poolFilters: 'ac3-pool-filters',
  poolPageSize: 'ac3-pool-page-size',
} as const;

export const DEFAULT_LANGUAGE = 'zh-CN' as const;
export const SUPPORTED_LANGUAGES = ['zh-CN', 'en'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  'zh-CN': 'language.chinese',
  en: 'language.english',
};

export function safeGetStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    if (e instanceof DOMException) return null;
    throw e;
  }
}

export function safeSetStorage(key: string, value: string | null): void {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch (e) {
    if (!(e instanceof DOMException)) throw e;
  }
}
