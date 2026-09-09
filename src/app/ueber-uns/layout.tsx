import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über uns – Clemens Pompeÿ & innovation.today',
  description:
    'Clemens Pompeÿ ist Gründer von innovation.today. Mit über 40 realisierten Venture-Client-Projekten und tiefer Branchenkenntnis in Energie, Infrastruktur und öffentlichem Sektor begleitet er Konzerne und Mittelstand bei der Entwicklung neuer Geschäftsfelder.',
  alternates: { canonical: 'https://www.innovation.today/ueber-uns' },
  openGraph: {
    title: 'Über Clemens Pompeÿ – innovation.today',
    description:
      'Gründer, Unternehmer, Venture-Client-Experte. Clemens Pompeÿ überträgt Startup-Logik auf etablierte Unternehmen.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
