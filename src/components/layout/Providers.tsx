'use client'

import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/contexts/LanguageContext'
import CalProvider from '@/components/layout/CalProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <CalProvider />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
}
