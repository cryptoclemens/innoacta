'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Search, GitCompare, Scale, Plug, Lock, Bug, ShieldCheck, ClipboardCheck } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'
import { usePageTranslation } from '@/lib/hooks/usePageTranslation'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'KI & Sicherheit',
  provider: { '@type': 'Organization', name: 'innovation.today', legalName: 'Vencly GmbH', url: 'https://www.innovation.today' },
  url: 'https://www.innovation.today/ki-sicherheit/',
  description:
    'KI-Audit, Use-Case-Analysen mit LLM-Matching, KI-Governance und EU AI Act, sichere Anbindung von KI-Systemen, DSGVO-Konformität, Angriffstests gegen KI-Anwendungen und Penetrationstests.',
  areaServed: ['DE', 'AT', 'CH'],
  serviceType: 'KI-Beratung und IT-Sicherheit',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was umfasst das Leistungsfeld KI & Sicherheit bei innovation.today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KI-Audit, Use-Case-Analysen mit LLM-Matching, KI-Governance und EU AI Act, sichere Anbindung von KI-Systemen, DSGVO-Konformität sowie Angriffstests gegen KI-Anwendungen (Prompt Injection, Datenabfluss) und Penetrationstests.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wer führt die Penetrationstests durch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'innovation.today führt Penetrationstests als Firma selbst durch – auf Kundenwunsch verstärkt durch international ausgewiesene Spezialistinnen und Spezialisten mit Branchenerfahrung, etwa in KRITIS oder mit sensiblen Gesundheits- und Bankdaten.',
      },
    },
  ],
}

const serviceIcons = [Search, GitCompare, Scale, Plug, Lock, Bug, ShieldCheck, ClipboardCheck]

export default function KiSicherheitPage() {
  const p = usePageTranslation()
  const su = p.kiSicherheit

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.innovation.today' },
          { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://www.innovation.today/#leistungen' },
          { '@type': 'ListItem', position: 3, name: 'KI & Sicherheit', item: 'https://www.innovation.today/ki-sicherheit/' },
        ],
      }) }} />
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="mb-20">
            <span className="section-eyebrow mb-4">
              {su.eyebrow}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              {su.h1Lead}{' '}
              <span className="text-brand-teal dark:text-brand-mint">{su.h1Accent}</span>{su.h1Tail}
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

          {/* Leitsatz */}
          <section className="mb-16">
            <blockquote className="border-l-4 border-brand-teal pl-6 py-2 glas rounded-r-[22px]">
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
                  <div key={title} className="glas rounded-[22px] p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 bg-brand-teal/10 rounded flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-brand-teal dark:text-brand-mint" />
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
                  <CheckCircle2 size={18} className="text-brand-teal dark:text-brand-mint mt-0.5 shrink-0" />
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
                <Link key={a.href} href={a.href} className="block glas rounded-[22px] p-5 transition-transform hover:-translate-y-0.5 group">
                  <span className="text-xs font-mono text-brand-teal dark:text-brand-mint">{a.cat}</span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-brand-teal transition-colors mt-1 leading-snug">{a.title}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="glas-dick rounded-[28px] p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {su.ctaH2}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {su.ctaP}
            </p>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded transition-colors cursor-pointer"
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
