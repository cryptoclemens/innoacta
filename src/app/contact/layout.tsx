import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie Vencly für Erstgespräche zu Venture Clienting und Geschäftsfeldentwicklung. München, DACH-Region.',
  alternates: { canonical: 'https://vencly.com/contact' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
