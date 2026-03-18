'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import '../i18n';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  // Auto-detect locale from URL path
  const detectedLocale: Language = pathname.startsWith('/en') ? 'en' : 'fr';

  useEffect(() => {
    if (i18n.language !== detectedLocale) {
      i18n.changeLanguage(detectedLocale);
    }
  }, [detectedLocale, i18n]);

  const setLanguage = (lang: Language) => {
    // Navigate to the equivalent route in the target locale
    const currentPath = pathname;
    const strippedPath = currentPath.replace(/^\/(fr|en)/, '') || '/';
    router.push(`/${lang}${strippedPath === '/' ? '' : strippedPath}`);
  };

  return (
    <LanguageContext.Provider value={{ language: detectedLocale, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
