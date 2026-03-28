import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Providers from '@/components/layout/Providers'

export const metadata: Metadata = {
  title: {
    default: 'Vencly – Strategische Geschäftsfeldentwicklung für Konzerne und den Mittelstand',
    template: '%s | Vencly',
  },
  description:
    'Vencly begleitet Unternehmen dabei, neue Geschäftsfelder zu identifizieren, zu bewerten und operativ zu erschließen. Methode. Tempo. Echte Ergebnisse.',
  keywords: [
    'Geschäftsfeldentwicklung',
    'Venture Clienting',
    'Strategieberatung',
    'Innovation',
    'Mittelstand',
    'Konzerne',
    'Startup-Integration',
    'Neue Märkte',
    'Unternehmensberatung',
  ],
  authors: [{ name: 'Vencly GmbH' }],
  creator: 'Vencly GmbH',
  metadataBase: new URL('https://vencly.com'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://vencly.com',
    siteName: 'Vencly',
    title: 'Vencly – Strategische Geschäftsfeldentwicklung für Konzerne und den Mittelstand',
    description:
      'Vencly begleitet Unternehmen dabei, neue Geschäftsfelder zu identifizieren, zu bewerten und operativ zu erschließen. Methode. Tempo. Echte Ergebnisse.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Vencly' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vencly – Strategische Geschäftsfeldentwicklung für Konzerne und den Mittelstand',
    description:
      'Vencly begleitet Unternehmen dabei, neue Geschäftsfelder zu identifizieren, zu bewerten und operativ zu erschließen. Methode. Tempo. Echte Ergebnisse.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="bg-[#F8F7F4] dark:bg-vencly-bg text-gray-900 dark:text-white antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <span className="fixed bottom-3 right-3 z-50 font-mono text-[10px] text-gray-400 dark:text-gray-700 select-none pointer-events-none">
            {process.env.NEXT_PUBLIC_BUILD_VERSION?.slice(0, 7) ?? 'dev'}
          </span>
        </Providers>
      </body>
    </html>
  )
}
