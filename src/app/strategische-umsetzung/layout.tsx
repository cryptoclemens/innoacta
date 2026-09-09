import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategische Umsetzung – operativ, nicht nur konzeptionell',
  description:
    'innovation.today übernimmt operative Verantwortung in neuen Geschäftsfeldern: Go-to-Market, Geschäftsmodell-Festlegung, Organisationsdesign, Ausgründung, Pilotkunden-Akquise und Steuerungs-KPIs.',
  alternates: { canonical: 'https://vencly.com/strategische-umsetzung' },
  openGraph: {
    title: 'Strategische Umsetzung | innovation.today',
    description:
      'Nicht Strategie statt Umsetzung – sondern beides. innovation.today liefert operative Verantwortung wo interne Strukturen fehlen.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
