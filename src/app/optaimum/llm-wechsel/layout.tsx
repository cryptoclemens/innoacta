import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/brand'

// Die Seite ist eine Client Component und kann kein eigenes metadata exportieren.
// Ohne dieses Layout erbte sie früher das canonical der Startseite und galt für
// Google als deren Duplikat.
export const metadata: Metadata = {
  title: 'LLM-Wechsel – KI-Anbieter wechseln ohne Datenverlust',
  description:
    'Wechsle in wenigen Minuten den KI-Anbieter und nimm Kontext, Einstellungen und Arbeitsstand mit – ohne Datenverlust. Teil von OptAImum.',
  alternates: { canonical: `${SITE_URL}/optaimum/llm-wechsel/` },
  openGraph: {
    title: 'LLM-Wechsel in Minuten | innovation.today',
    description: 'Den KI-Anbieter wechseln, ohne Kontext und Daten zu verlieren.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
