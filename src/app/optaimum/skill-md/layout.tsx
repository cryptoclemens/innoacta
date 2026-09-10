import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/brand'

// Die Seite ist eine Client Component und kann kein eigenes metadata exportieren.
// Ohne dieses Layout erbte sie früher das canonical der Startseite und galt für
// Google als deren Duplikat.
export const metadata: Metadata = {
  title: 'Skill-MD Generator – fachlicher Kontext für einen Use-Case',
  description:
    'Gib deiner KI mit dem Skill-MD Generator das Fachwissen für einen konkreten Anwendungsfall – strukturiert und wiederverwendbar. Teil von OptAImum.',
  alternates: { canonical: `${SITE_URL}/optaimum/skill-md/` },
  openGraph: {
    title: 'Skill-MD Generator | innovation.today',
    description: 'Fachlicher Kontext für einen spezifischen Use-Case deiner KI.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
