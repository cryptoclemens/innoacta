'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { type Locale, type Translations, translations } from '@/lib/i18n'

type LanguageContextType = {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'de',
  t: translations.de,
  setLocale: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('de')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('vencly-locale') as Locale | null
      if (stored && stored in translations) setLocaleState(stored)
    } catch {
      // localStorage unavailable (e.g. private mode with strict settings)
    }
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem('vencly-locale', l)
    } catch {
      // localStorage unavailable
    }
  }

  const value = useMemo(
    () => ({ locale, t: translations[locale], setLocale }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
