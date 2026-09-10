import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/brand'

// Die Seite ist eine Client Component und kann kein eigenes metadata exportieren.
// Ohne dieses Layout erbte sie früher das canonical der Startseite und galt für
// Google als deren Duplikat.
export const metadata: Metadata = {
  title: 'Hook-MD Creator – Verhaltensregeln und Automatisierungen für KI',
  description:
    'Lege mit dem Hook-MD Creator fest, wie sich deine KI verhält und welche Abläufe sie automatisch ausführt – als fertige Datei, ohne Vorkenntnisse. Teil von OptAImum.',
  alternates: { canonical: `${SITE_URL}/optaimum/hook-md/` },
  openGraph: {
    title: 'Hook-MD Creator | innovation.today',
    description: 'Verhaltensregeln und Automatisierungen für deine KI – als fertige Datei.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
