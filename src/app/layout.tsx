import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Fraunces } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Providers from '@/components/layout/Providers'
import CookieBanner from '@/components/layout/CookieBanner'

const nunito = localFont({
  src: [
    { path: '../../public/fonts/Nunito-Variable.woff2', style: 'normal' },
    { path: '../../public/fonts/Nunito-VariableItalic.woff2', style: 'italic' },
  ],
  variable: '--font-nunito',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Vencly – Innovatives Gründer-Denken für Unternehmen mit Tradition.',
    template: '%s | Vencly',
  },
  description:
    'Vencly überträgt Startup-Logik auf Konzerne und den Mittelstand: neue Geschäftsfelder entwickeln, validieren und launchen – mit Methode und Tempo.',
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
  alternates: {
    canonical: 'https://vencly.com',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://vencly.com',
    siteName: 'Vencly',
    title: 'Vencly – Innovatives Gründer-Denken für Unternehmen mit Tradition.',
    description:
      'Vencly überträgt Startup-Logik auf Konzerne und den Mittelstand: neue Geschäftsfelder entwickeln, validieren und launchen – mit Methode und Tempo.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Vencly' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vencly – Innovatives Gründer-Denken für Unternehmen mit Tradition.',
    description:
      'Vencly überträgt Startup-Logik auf Konzerne und den Mittelstand: neue Geschäftsfelder entwickeln, validieren und launchen – mit Methode und Tempo.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  manifest: '/manifest.json',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Vencly GmbH',
    url: 'https://vencly.com',
    logo: 'https://vencly.com/logovencly.svg',
    description:
      'Vencly überträgt Startup-Logik auf Konzerne und den Mittelstand: neue Geschäftsfelder entwickeln, validieren und launchen – mit Methode und Tempo.',
    areaServed: ['DE', 'AT', 'CH'],
    serviceType: ['Geschäftsfeldentwicklung', 'Venture Clienting', 'Strategische Transformation'],
    knowsLanguage: ['de', 'en', 'fr', 'es'],
    sameAs: ['https://vencly.com'],
  }

  return (
    <html lang="de" suppressHydrationWarning className={`${nunito.variable} ${fraunces.variable}`}>
      <head>
        <meta name="theme-color" content="#0f766e" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f766e" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* GA Consent Mode v2 defaults – must fire before gtag loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
`.trim(),
          }}
        />
      </head>
      <body className="bg-[#F8F7F4] dark:bg-vencly-bg text-gray-900 dark:text-white antialiased font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NEDCRSRHND"
          strategy="afterInteractive"
        />
        <Script id="ga-config" strategy="afterInteractive">
          {`gtag('config', 'G-NEDCRSRHND', { send_page_view: true });`}
        </Script>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          <span className="fixed bottom-3 right-3 z-50 font-mono text-[10px] text-gray-400 dark:text-gray-700 select-none pointer-events-none">
            {process.env.NEXT_PUBLIC_BUILD_VERSION?.slice(0, 7) ?? 'dev'}
          </span>
        </Providers>
      </body>
    </html>
  )
}
