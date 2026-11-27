import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enLocale, zhCNLocale } from './locales';
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  STORAGE_KEYS,
  safeGetStorage,
  type SupportedLanguage,
} from '../constants';

export function readStoredLanguage(): SupportedLanguage | null {
  const raw = safeGetStorage(STORAGE_KEYS.language);
  if (raw === null) return null;
  try {
    const parsed = JSON.parse(raw);
    const lang = parsed?.state?.language;
    if (SUPPORTED_LANGUAGES.includes(lang)) return lang as SupportedLanguage;
    return null;
  } catch {
    return null;
  }
}

i18n.use(initReactI18next).init({
  resources: {
    'zh-CN': { translation: zhCNLocale },
    en: { translation: enLocale },
  },
  lng: readStoredLanguage() ?? DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
