'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle2, Zap, Target, Search } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'
import { usePageTranslation } from '@/lib/hooks/usePageTranslation'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Venture Clienting',
  provider: { '@type': 'Organization', name: 'innovation.today', legalName: 'Vencly GmbH', url: 'https://www.innovation.today' },
  url: 'https://www.innovation.today/venture-clienting',
  description:
    'Strukturierter Prozess zur Identifikation und Erprobung externer Innovationspartner – Startups, Scaleups und innovative Unternehmen. Ziel: die beste Lösung für die eigene Herausforderung, nicht die coolste Entität.',
  areaServed: ['DE', 'AT', 'CH'],
  serviceType: 'Venture Clienting',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist Venture Clienting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Venture Clienting ist ein strukturierter Ansatz, bei dem etablierte Unternehmen externe Innovationspartner – Startups, Scaleups oder innovative Mittelständler – als erste zahlende Kunden einbinden. Anders als beim Corporate Venture Capital geht es nicht um Beteiligungen, sondern um echte Geschäftsbeziehungen mit klarem Testauftrag und Entscheidung innerhalb von 90 Tagen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Venture Clienting und Corporate Venture Capital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Corporate Venture Capital (CVC) bedeutet, dass ein Unternehmen Anteile an einem Startup erwirbt. Venture Clienting hingegen bedeutet, dass das Unternehmen das Startup als Dienstleister oder Lieferanten engagiert – ohne Beteiligung. Venture Clienting ist schneller, risikoärmer und näher am operativen Nutzen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert ein Venture-Clienting-Prozess bei innovation.today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'innovation.today strebt eine go/no-go Entscheidung innerhalb von 90 Tagen an. Der gesamte Prozess – von der Problemdefinition über das Scouting bis zum strukturierten Pilotprojekt – ist so konzipiert, dass er in bestehende Unternehmensstrukturen passt, ohne Jahre zu dauern.',
      },
    },
    {
      '@type': 'Question',
      name: 'Muss der beste Partner immer ein Startup sein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. innovation.today sucht nach der besten Lösung für die jeweilige Herausforderung – nicht nach der coolsten Entität. Das kann ein Startup, ein Scaleup oder ein innovativer Mittelständler sein. Am Ende zählt die Lösung, nicht das Alter des Unternehmens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Für welche Unternehmensgrößen eignet sich Venture Clienting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Venture Clienting eignet sich besonders für Konzerne und mittelständische Unternehmen ab ca. 100 Mitarbeitern, die externe Innovationen schnell und risikoarm testen wollen – insbesondere in regulierten Branchen wie Energie, Infrastruktur oder dem öffentlichen Sektor.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.innovation.today' },
    { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://www.innovation.today/#leistungen' },
    { '@type': 'ListItem', position: 3, name: 'Venture Clienting', item: 'https://www.innovation.today/venture-clienting' },
  ],
}

const differentiatorIcons = [Search, Zap, Target]

export default function VentureClientingPage() {
  const p = usePageTranslation()
  const vc = p.ventureClienting

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="min-h-screen bg-brand-sky dark:bg-brand-night pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="mb-20">
            <span className="section-eyebrow mb-4">
              {vc.eyebrow}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              {vc.h1Lead}{' '}
              <span className="text-brand-teal dark:text-brand-mint">{vc.h1Accent}</span>{vc.h1Tail}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
              {vc.intro}
            </p>
            <blockquote className="border-l-4 border-brand-teal pl-6 py-2 my-8 bg-gray-100 dark:bg-brand-card rounded-r-xl">
              <p className="text-gray-900 dark:text-white text-xl font-semibold leading-snug">
                {vc.quote}
              </p>
            </blockquote>
          </div>

          {/* USP: Not just startups */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {vc.uspH2}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              {vc.uspIntroPrefix}{' '}
              <strong className="text-gray-900 dark:text-white">{vc.uspIntroBold}</strong>{' '}
              {vc.uspIntroSuffix}
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {vc.differentiators.map(({ title, desc }, i) => {
                const Icon = differentiatorIcons[i]
                return (
                  <div key={title} className="bg-white dark:bg-brand-card border border-gray-200 dark:border-brand-border rounded p-6">
                    <div className="w-10 h-10 bg-brand-teal/10 rounded flex items-center justify-center mb-4">
                      <Icon size={20} className="text-brand-teal dark:text-brand-mint" />
                    </div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Process */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {vc.processH2}
            </h2>
            <div className="space-y-6">
              {vc.steps.map((s) => (
                <div key={s.n} className="flex gap-6 bg-white dark:bg-brand-card border border-gray-200 dark:border-brand-border rounded p-6">
                  <span className="text-brand-teal dark:text-brand-mint font-mono text-2xl font-bold shrink-0 mt-0.5">{s.n}</span>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">{s.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What you get */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{vc.whatYouGetH2}</h2>
            <ul className="space-y-3">
              {vc.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 size={18} className="text-brand-teal dark:text-brand-mint mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Medium article */}
          <section className="mb-20">
            <div className="bg-white dark:bg-brand-card border border-gray-200 dark:border-brand-border rounded p-8">
              <span className="text-brand-teal dark:text-brand-mint text-xs font-mono tracking-widest uppercase mb-3 block">
                {vc.articleTag}
              </span>
              <h2 className="text-gray-900 dark:text-white font-bold text-xl mb-3">
                {vc.articleH2}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
                {vc.articleP}
              </p>
              <a
                href="https://medium.com/@clemens.pompey/startup-zusammenarbeit-als-chance-in-wirtschaftlichen-krisenzeiten-venture-client-cb72d2e216da"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-teal dark:text-brand-mint hover:underline font-medium text-sm"
              >
                {vc.articleLink}
                <ExternalLink size={14} />
              </a>
            </div>
          </section>

          {/* Related articles */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{vc.relatedH2}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {vc.relatedArticles.map(a => (
                <Link key={a.href} href={a.href} className="block bg-white dark:bg-brand-card border border-gray-200 dark:border-brand-border rounded p-5 hover:border-brand-teal/40 transition-colors group">
                  <span className="text-xs font-mono text-brand-teal dark:text-brand-mint">{a.cat}</span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-brand-teal transition-colors mt-1 leading-snug">{a.title}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 border border-brand-teal/20 rounded p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {vc.ctaH2}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {vc.ctaP}
            </p>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded transition-colors cursor-pointer"
            >
              {vc.ctaButton}
              <ArrowRight size={16} />
            </button>
          </section>

        </div>
      </div>
    </>
  )
}
