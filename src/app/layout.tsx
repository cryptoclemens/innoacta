import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Vencly – KI-Agenten-Plattform für Venture Clienting',
    template: '%s | Vencly',
  },
  description:
    'Vencly baut KI-Agenten-Plattformen für mittelständische Unternehmen: Venture Clienting, Ausschreibungsautomatisierung, smartes Projektmanagement und B2B-Prototypen.',
  keywords: [
    'KI-Agenten',
    'Venture Clienting',
    'Ausschreibungen',
    'Digitale Transformation',
    'Innovation',
    'KI-Plattform',
    'B2B',
    'Mittelstand',
    'Prozessautomatisierung',
  ],
  authors: [{ name: 'Vencly GmbH' }],
  creator: 'Vencly GmbH',
  metadataBase: new URL('https://vencly.com'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://vencly.com',
    siteName: 'Vencly',
    title: 'Vencly – KI-Agenten-Plattform für Venture Clienting',
    description:
      'Vencly baut KI-Agenten-Plattformen für mittelständische Unternehmen: Venture Clienting, Ausschreibungsautomatisierung, smartes Projektmanagement und B2B-Prototypen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vencly – KI-Agenten-Plattform für Venture Clienting',
    description:
      'Vencly baut KI-Agenten-Plattformen für mittelständische Unternehmen: Venture Clienting, Ausschreibungsautomatisierung, smartes Projektmanagement und B2B-Prototypen.',
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
    <html lang="de">
      <body className="bg-vencly-bg text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
