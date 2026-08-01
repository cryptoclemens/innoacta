'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Users, FileText, PresentationIcon, TrendingUp, Building2, Target, BarChart3 } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'
import { usePageTranslation } from '@/lib/hooks/usePageTranslation'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Strategische Umsetzung',
  provider: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
  url: 'https://vencly.com/strategische-umsetzung',
  description:
    'Operative Verantwortung für Projekte ohne interne Heimat: Projektsteuerung, Stakeholder-Management, Entscheidungsvorlagen und Workshop-Formate – mit unternehmerischem Blick.',
  areaServed: ['DE', 'AT', 'CH'],
  serviceType: 'Strategische Umsetzung',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was bedeutet strategische Umsetzung bei Vencly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vencly übernimmt operative Verantwortung in neuen Geschäftsfeldern – von der Go-to-Market-Planung über Stakeholder-Management bis zur Pilotkunden-Akquise. Wir liefern nicht nur Empfehlungen, sondern arbeiten aktiv im Projekt mit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wann ist strategische Umsetzung mit Vencly sinnvoll?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wenn ein neues Geschäftsfeld oder Innovationsprojekt intern keine ausreichenden Ressourcen oder Strukturen hat. Vencly übernimmt in solchen Fällen temporär operative Verantwortung und schafft damit die Grundlage für eine spätere Übergabe ins Unternehmen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert ein typisches Umsetzungsmandat mit Vencly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typische Mandate laufen 2–4 Monate, abhängig von Komplexität und Reifegrad des Projekts. Vencly arbeitet in kurzen Sprints mit klaren Meilensteinen und Übergabepunkten.',
      },
    },
  ],
}

const serviceIcons = [FileText, TrendingUp, Building2, Target, BarChart3, Users, PresentationIcon]

export default function StrategischeUmsetzungPage() {
  const p = usePageTranslation()
  const su = p.strategischeUmsetzung

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vencly.com' },
          { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://vencly.com/#leistungen' },
          { '@type': 'ListItem', position: 3, name: 'Strategische Umsetzung', item: 'https://vencly.com/strategische-umsetzung' },
        ],
      }) }} />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="mb-20">
            <span className="section-eyebrow mb-4">
              {su.eyebrow}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-normal text-gray-900 dark:text-white mb-6 leading-tight">
              {su.h1Lead}{' '}
              <span className="text-vencly-teal">{su.h1Accent}</span>{su.h1Tail}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-6">
              {su.intro1}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
              {su.intro2Prefix}{' '}
              <strong className="text-gray-900 dark:text-white">{su.intro2Bold}</strong>{' '}
              {su.intro2Suffix}
            </p>
          </div>

          {/* Not strategy vs execution */}
          <section className="mb-16">
            <blockquote className="border-l-4 border-vencly-teal pl-6 py-2 bg-gray-100 dark:bg-vencly-card rounded-r-xl">
              <p
                className="text-gray-900 dark:text-white text-xl font-semibold"
                dangerouslySetInnerHTML={{ __html: su.quote }}
              />
            </blockquote>
          </section>

          {/* Services */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{su.servicesH2}</h2>
            <div className="grid gap-6">
              {su.services.map(({ title, desc }, i) => {
                const Icon = serviceIcons[i]
                return (
                  <div key={title} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 bg-vencly-teal/10 rounded flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-vencly-teal" />
                      </div>
                      <div>
                        <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* When it fits */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{su.whenH2}</h2>
            <ul className="space-y-3">
              {su.whenItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 size={18} className="text-vencly-teal mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Related articles */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{su.relatedH2}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {su.relatedArticles.map(a => (
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
              {su.ctaH2}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {su.ctaP}
            </p>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded transition-colors cursor-pointer"
            >
              {su.ctaButton}
              <ArrowRight size={16} />
            </button>
          </section>

        </div>
      </div>
    </>
  )
}
