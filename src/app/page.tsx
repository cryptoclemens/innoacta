import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ValueProp from '@/components/sections/ValueProp'
import Features from '@/components/sections/Features'
import WhyUs from '@/components/sections/WhyUs'
import References from '@/components/sections/References'

export const metadata: Metadata = {
  title: 'Vencly – Gründer-Denken für Ihr nächstes Geschäftsfeld.',
  description:
    'Vencly überträgt Startup-Logik auf Konzerne und den Mittelstand: neue Geschäftsfelder entwickeln, validieren und launchen – mit Methode und Tempo.',
  alternates: {
    canonical: 'https://vencly.com',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was macht Vencly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vencly entwickelt neue Geschäftsfelder für Konzerne und den Mittelstand mit Startup-Methodik: schnell, validierungsgetrieben und mit klarem Fokus auf Markterfolg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist Venture Clienting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Venture Clienting ist eine Methode, bei der etablierte Unternehmen gezielt Startups als erste Kunden gewinnen, um Innovation schnell und risikoarm zu integrieren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Für wen ist Vencly geeignet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vencly arbeitet mit Konzernen und mittelständischen Unternehmen, die neue Geschäftsfelder erschließen oder Innovationsprozesse beschleunigen wollen – besonders in regulierten Branchen wie Energie, Infrastruktur und öffentlichem Sektor.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <ValueProp />
      <Features />
      <WhyUs />
      <References />
    </>
  )
}
