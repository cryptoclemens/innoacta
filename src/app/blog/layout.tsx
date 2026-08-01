import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog – Wissen zu Venture Clienting & Geschäftsfeldentwicklung',
  description:
    'Praxiswissen zu Venture Clienting, Geschäftsfeldentwicklung und strategischer Umsetzung. Erkenntnisse aus über 40 Projekten in Energie, Infrastruktur und Mittelstand.',
  alternates: { canonical: 'https://vencly.com/blog' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
