import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie innovation.today für Erstgespräche zu Venture Clienting und Geschäftsfeldentwicklung. München, DACH-Region.',
  alternates: { canonical: 'https://www.innovation.today/contact' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
