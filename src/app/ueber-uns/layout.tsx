import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über uns – Clemens Pompeÿ & Vencly',
  description:
    'Clemens Pompeÿ ist Gründer von Vencly. Mit über 40 realisierten Venture-Client-Projekten und tiefer Branchenkenntnis in Energie, Infrastruktur und öffentlichem Sektor begleitet er Konzerne und Mittelstand bei der Entwicklung neuer Geschäftsfelder.',
  alternates: { canonical: 'https://vencly.com/ueber-uns' },
  openGraph: {
    title: 'Über Clemens Pompeÿ – Vencly',
    description:
      'Gründer, Unternehmer, Venture-Client-Experte. Clemens Pompeÿ überträgt Startup-Logik auf etablierte Unternehmen.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
