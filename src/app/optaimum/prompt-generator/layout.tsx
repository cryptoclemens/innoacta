import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/brand'

// Die Seite ist eine Client Component und kann kein eigenes metadata exportieren.
// Ohne dieses Layout erbte sie früher das canonical der Startseite und galt für
// Google als deren Duplikat.
export const metadata: Metadata = {
  title: 'Prompt-Generator – sofort einsetzbare Prompts ohne Vorkenntnisse',
  description:
    'Erzeuge mit dem Prompt-Generator passgenaue Prompts für deine Aufgabe – sofort einsetzbar, ganz ohne Vorkenntnisse. Teil von OptAImum.',
  alternates: { canonical: `${SITE_URL}/optaimum/prompt-generator/` },
  openGraph: {
    title: 'Prompt-Generator | innovation.today',
    description: 'Sofort einsetzbare Prompts – auch ohne Vorkenntnisse.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
