import type { Metadata } from 'next'

// Serverseitige Metadaten in der Standardsprache Deutsch. Die Seite selbst ist
// eine Client-Komponente (viersprachig über usePageTranslation); sie zieht
// Titel, Description und OpenGraph beim Sprachwechsel clientseitig nach.
export const metadata: Metadata = {
  title: 'Projekt Woda – Brunnenmanagement für Wasserwerke, offline und datensouverän',
  description:
    'Brunnendaten aus jedem System werden zu standardisierten Experten-Analysen – offline beim Betreiber, ohne dass Betriebsdaten das Haus verlassen.',
  alternates: { canonical: 'https://www.innovation.today/woda' },
  openGraph: {
    title: 'Projekt Woda | innovation.today',
    description:
      'Brunnendaten aus jedem System werden zu standardisierten Experten-Analysen. Offline beim Betreiber, Auswertung durch Ingenieure über verschlüsselte Dateien.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
