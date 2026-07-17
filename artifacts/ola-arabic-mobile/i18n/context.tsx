import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translations, type Language, t } from './translations';
export type { Language } from './translations';

const I18N_KEY = 'app_language';

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
  isReady: boolean;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(I18N_KEY)
      .then((saved) => {
        if (saved === 'ar' || saved === 'en' || saved === 'ms' || saved === 'id') {
          setLanguageState(saved);
        }
      })
      .finally(() => setIsReady(true));
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    AsyncStorage.setItem(I18N_KEY, lang);
  };

  return (
    <I18nContext.Provider
      value={{ language, setLanguage, t: (key) => t(key, language), isReady }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
