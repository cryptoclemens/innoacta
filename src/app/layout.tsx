import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Providers from '@/components/layout/Providers'
import CookieBanner from '@/components/layout/CookieBanner'
// TEMPORÄR bis 2026-12-09: Übergangs-Hinweis zur Markenumbenennung.
// Zum Entfernen genügt diese Zeile und die Verwendung unten — siehe Kopf der Datei.
import RebrandNotice from '@/components/layout/RebrandNotice'
import { BRAND_NAME, LEGAL_ENTITY, SITE_URL } from '@/lib/brand'

// Nunito wird per @font-face in globals.css eingebunden und unten im <head>
// vorgeladen. Bewusst ohne next/font, damit unicode-range steuerbar bleibt.

export const metadata: Metadata = {
  title: {
    default: 'innovation.today – Innovatives Gründer-Denken für Unternehmen mit Tradition.',
    template: '%s | innovation.today',
  },
  description:
    'innovation.today überträgt Startup-Logik auf Konzerne und den Mittelstand: neue Geschäftsfelder entwickeln, validieren und launchen – mit Methode und Tempo.',
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
  // authors nennt bewusst die Rechtstraegerin, creator die Marke.
  authors: [{ name: LEGAL_ENTITY }],
  creator: BRAND_NAME,
  metadataBase: new URL(SITE_URL),
  // Bewusst KEIN canonical im Root-Layout: Es vererbt sich an jede Seite ohne
  // eigenes canonical. Client-Seiten, die kein metadata exportieren koennen,
  // erklaerten sich dadurch als Duplikat der Startseite. Jede Seite setzt ihr
  // canonical selbst — im eigenen page.tsx oder in einem layout.tsx daneben.
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'innovation.today',
    title: 'innovation.today – Innovatives Gründer-Denken für Unternehmen mit Tradition.',
    description:
      'innovation.today überträgt Startup-Logik auf Konzerne und den Mittelstand: neue Geschäftsfelder entwickeln, validieren und launchen – mit Methode und Tempo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'innovation.today – Innovatives Gründer-Denken für Unternehmen mit Tradition.',
    description:
      'innovation.today überträgt Startup-Logik auf Konzerne und den Mittelstand: neue Geschäftsfelder entwickeln, validieren und launchen – mit Methode und Tempo.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
    name: BRAND_NAME,
    legalName: LEGAL_ENTITY,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/wordmark_light.svg`,
    description:
      'innovation.today überträgt Startup-Logik auf Konzerne und den Mittelstand: neue Geschäftsfelder entwickeln, validieren und launchen – mit Methode und Tempo.',
    areaServed: ['DE', 'AT', 'CH'],
    serviceType: ['Geschäftsfeldentwicklung', 'Venture Clienting', 'Strategische Transformation'],
    knowsLanguage: ['de', 'en', 'fr', 'es'],
    sameAs: [SITE_URL],
  }

  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Nunito vorladen — crossOrigin ist bei Fonts Pflicht, sonst laedt der
            Browser die Datei ein zweites Mal. */}
        <link
          rel="preload"
          href="/fonts/Nunito-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#0F766E" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0F2540" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Erstgespraechs-Buttons: data-booking="contact" → /contact/.
            Bewusst relativ, damit der Link den Domainwechsel unveraendert uebersteht. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('click',function(e){var el=e.target.closest('[data-booking="contact"]');if(el){window.location.href='/contact/';}});`,
          }}
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
      <body className="bg-brand-sky dark:bg-brand-night text-gray-900 dark:text-white antialiased font-sans">
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
          <RebrandNotice />
          <CookieBanner />
          <span className="fixed bottom-3 right-3 z-50 font-mono text-[10px] text-gray-400 dark:text-gray-700 select-none pointer-events-none">
            {process.env.NEXT_PUBLIC_BUILD_VERSION?.slice(0, 7) ?? 'dev'}
          </span>
        </Providers>
      </body>
    </html>
  )
}
