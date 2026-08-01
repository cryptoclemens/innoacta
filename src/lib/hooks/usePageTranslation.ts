'use client'
import { useLanguage } from '@/contexts/LanguageContext'
import { pageTranslations } from '@/lib/i18n-pages'

export function usePageTranslation() {
  const { locale } = useLanguage()
  return pageTranslations[locale]
}
