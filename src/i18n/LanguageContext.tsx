import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Bilingual, Lang } from '../core/i18n';
import { LANG_STORAGE_KEY, isLang, pick } from '../core/i18n';
import { PreferenceStore } from '../core/repository';

interface LanguageApi {
  readonly lang: Lang;
  readonly setLang: (lang: Lang) => void;
  readonly toggle: () => void;
  readonly t: (value: Bilingual) => string;
}

const LanguageContext = createContext<LanguageApi | null>(null);

const store = (): PreferenceStore | null =>
  typeof window === 'undefined' ? null : new PreferenceStore(window.localStorage);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = store()?.read<unknown>(LANG_STORAGE_KEY, null);
    if (isLang(saved)) return saved;
    if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('te')) {
      return 'te';
    }
    return 'en';
  });

  useEffect(() => {
    store()?.write(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(() => setLangState((current) => (current === 'en' ? 'te' : 'en')), []);
  const t = useCallback((value: Bilingual) => pick(value, lang), [lang]);

  const api = useMemo<LanguageApi>(() => ({ lang, setLang, toggle, t }), [lang, setLang, toggle, t]);

  return <LanguageContext.Provider value={api}>{children}</LanguageContext.Provider>;
}

export const useLang = (): LanguageApi => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used inside <LanguageProvider>');
  return context;
};
