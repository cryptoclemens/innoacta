import type { Metadata } from 'next'

// Serverseitige Metadaten in der Standardsprache Deutsch. Die Seite selbst ist
// eine Client-Komponente (viersprachig über usePageTranslation); sie zieht
// Titel, Description und OpenGraph beim Sprachwechsel clientseitig nach.
export const metadata: Metadata = {
  title: 'BrunnIQ – Brunnenmanagement für Wasserwerke, offline und datensouverän',
  description:
    'BrunnIQ zeigt Wasserwerken je Brunnen und Pumpe eine Ampel – offline, aus vorhandenen Tabellen, Auswertung durch Ingenieure über verschlüsselte Dateien.',
  alternates: { canonical: 'https://www.innovation.today/brunniq' },
  openGraph: {
    title: 'BrunnIQ | innovation.today',
    description:
      'Brunnenmanagement für Wasserwerke: Ampel je Brunnen und Pumpe, offline, Betriebsdaten bleiben im Haus. Auswertung durch Ingenieure über verschlüsselte Dateien.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
