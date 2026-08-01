import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Venture Clienting – die smartere Art, externe Innovation einzukaufen',
  description:
    'Vencly findet automatisiert und strukturiert die beste Lösung für Ihre Herausforderung – egal ob Startup, Scaleup oder innovativer Mittelständler. Kein Berater-Bingo, sondern Ergebnisse.',
  alternates: { canonical: 'https://vencly.com/venture-clienting' },
  openGraph: {
    title: 'Venture Clienting | Vencly',
    description:
      'Die beste Lösung für Ihre Herausforderung – nicht die coolste Entität. Vencly sucht smart und automatisiert nach dem richtigen Anbieter.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
