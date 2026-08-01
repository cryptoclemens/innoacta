'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Lightbulb, BarChart3, Rocket } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'
import { usePageTranslation } from '@/lib/hooks/usePageTranslation'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Geschäftsfeldentwicklung',
  provider: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
  url: 'https://vencly.com/geschaeftsfeldentwicklung',
  description:
    'Neue Geschäftsfelder identifizieren, Geschäftsmodelle entwickeln und am Markt validieren – von der ersten Hypothese bis zum skalierbaren Modell. Für Konzerne und Mittelstand.',
  areaServed: ['DE', 'AT', 'CH'],
  serviceType: 'Geschäftsfeldentwicklung',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was versteht man unter Geschäftsfeldentwicklung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geschäftsfeldentwicklung bezeichnet den strukturierten Prozess, mit dem Unternehmen neue Märkte oder Geschäftsbereiche identifizieren, entwickeln und am Markt validieren. Ziel ist es, neue Umsatzquellen zu erschließen – systematisch, schnell und mit minimiertem Risiko. Vencly wendet dabei Startup-Methoden auf Konzerne und Mittelstand an.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie unterscheidet sich Geschäftsfeldentwicklung von klassischer Strategieberatung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Klassische Strategieberatung endet oft mit einem Konzeptpapier. Geschäftsfeldentwicklung nach Vencly-Methodik endet mit einem validierten Marktmodell – getestet mit echten Kunden und echten Daten. Wir übernehmen operative Verantwortung statt nur Empfehlungen zu liefern.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert eine Geschäftsfeldentwicklung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein typisches Geschäftsfeldentwicklungs-Projekt bei Vencly dauert 3 bis 6 Monate. Phase 1 (Analyse & Hypothesen) dauert 4–6 Wochen, Phase 2 (Marktvalidierung) 6–10 Wochen, Phase 3 (Skalierungsvorbereitung) weitere 4–8 Wochen – je nach Komplexität und Branche.',
      },
    },
    {
      '@type': 'Question',
      name: 'Für welche Branchen eignet sich Geschäftsfeldentwicklung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vencly hat Geschäftsfeldentwicklung erfolgreich in regulierten Branchen wie Energie, Infrastruktur und dem öffentlichen Sektor durchgeführt. Startup-Logik kennt keine Branchengrenzen – entscheidend ist die richtige Adaption der Methoden an den jeweiligen regulatorischen und kulturellen Kontext.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet Geschäftsfeldentwicklung mit Vencly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten hängen vom Umfang und der Komplexität des Projekts ab. Vencly arbeitet in der Regel auf Basis eines Begleitmandats mit monatlichen Tagessätzen. Für eine individuelle Einschätzung empfehlen wir ein unverbindliches Erstgespräch.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vencly.com' },
    { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://vencly.com/#leistungen' },
    { '@type': 'ListItem', position: 3, name: 'Geschäftsfeldentwicklung', item: 'https://vencly.com/geschaeftsfeldentwicklung' },
  ],
}

const phaseIcons = [Lightbulb, BarChart3, Rocket]

export default function GeschaeftsfeldentwicklungPage() {
  const p = usePageTranslation()
  const gf = p.geschaeftsfeldentwicklung

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="mb-20">
            <span className="section-eyebrow mb-4">
              {gf.eyebrow}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-normal text-gray-900 dark:text-white mb-6 leading-tight break-words hyphens-auto">
              {gf.h1Lead}{' '}
              <span className="text-vencly-teal">{gf.h1Accent}</span>{gf.h1Tail}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
              {gf.intro}
            </p>
          </div>

          {/* Why startup logic */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {gf.whyH2}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl leading-relaxed">
              {gf.whyP1}
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              {gf.whyP2Prefix}{' '}
              <strong className="text-gray-900 dark:text-white">{gf.whyP2Bold}</strong>{gf.whyP2Suffix}
            </p>
          </section>

          {/* Phases */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {gf.phasesH2}
            </h2>
            <div className="space-y-6">
              {gf.phases.map(({ phase, title, desc, points, ventureClientingHint }, i) => {
                const Icon = phaseIcons[i]
                return (
                  <div key={phase} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 bg-vencly-teal/10 rounded flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-vencly-teal" />
                      </div>
                      <div className="flex-1">
                        <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase">{phase}</span>
                        <h3 className="text-gray-900 dark:text-white font-bold text-lg mt-1 mb-2">{title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
                        <ul className="space-y-1 mb-4">
                          {points.map((pt) => (
                            <li key={pt} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                              <CheckCircle2 size={14} className="text-vencly-teal shrink-0" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                        {ventureClientingHint && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-vencly-border pt-4 mt-2">
                            {gf.ventureClientingHintPrefix}{' '}
                            <Link href="/venture-clienting" className="text-vencly-teal hover:underline font-medium">
                              {gf.ventureClientingHintLinkText}
                            </Link>{' '}
                            {gf.ventureClientingHintSuffix}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Sectors */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{gf.sectorsH2}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              {gf.sectorsP}
            </p>
          </section>

          {/* Related articles */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{gf.relatedH2}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {gf.relatedArticles.map(a => (
                <Link key={a.href} href={a.href} className="block bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-5 hover:border-vencly-teal/40 transition-colors group">
                  <span className="text-xs font-mono text-vencly-teal">{a.cat}</span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-vencly-teal transition-colors mt-1 leading-snug">{a.title}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {gf.ctaH2}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {gf.ctaP}
            </p>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded transition-colors cursor-pointer"
            >
              {gf.ctaButton}
              <ArrowRight size={16} />
            </button>
          </section>

        </div>
      </div>
    </>
  )
}
