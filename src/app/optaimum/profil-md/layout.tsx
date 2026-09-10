import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/brand'

// Die Seite ist eine Client Component und kann kein eigenes metadata exportieren.
// Ohne dieses Layout erbte sie früher das canonical der Startseite und galt für
// Google als deren Duplikat.
export const metadata: Metadata = {
  title: 'Profil-MD Creator – persönlicher Kontext für deine KI',
  description:
    'Erstelle in fünf Minuten eine Profildatei, mit der deine KI dich, deine Rolle und deine Arbeitsweise von Anfang an kennt. Teil von OptAImum.',
  alternates: { canonical: `${SITE_URL}/optaimum/profil-md/` },
  openGraph: {
    title: 'Profil-MD Creator | innovation.today',
    description: 'Persönlicher Kontext für deine KI – in fünf Minuten erstellt.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
