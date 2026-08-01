import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Geschäftsfeldentwicklung – neue Märkte mit Gründer-Denken',
  description:
    'Vencly entwickelt neue Geschäftsfelder für Konzerne und Mittelstand: schnell validiert, marktgetestet und mit echter Umsetzungsverantwortung. Von der Hypothese bis zum validierten Modell.',
  alternates: { canonical: 'https://vencly.com/geschaeftsfeldentwicklung' },
  openGraph: {
    title: 'Geschäftsfeldentwicklung | Vencly',
    description:
      'Neue Märkte erschließen wie ein Gründer: schnell, validierungsgetrieben, mit klarem Fokus auf Markterfolg.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
