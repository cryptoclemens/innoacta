'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { usePageTranslation } from '@/lib/hooks/usePageTranslation'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Clemens Pompeÿ',
  jobTitle: 'Gründer & Geschäftsführer',
  worksFor: {
    '@type': 'Organization',
    name: 'Vencly GmbH',
    url: 'https://vencly.com',
  },
  url: 'https://vencly.com/ueber-uns',
  description:
    'Clemens Pompeÿ ist Gründer von Vencly und Experte für Venture Clienting und Geschäftsfeldentwicklung mit über 40 realisierten Projekten in Energie, Infrastruktur und öffentlichem Sektor.',
  knowsAbout: [
    'Venture Clienting',
    'Geschäftsfeldentwicklung',
    'Startup-Integration',
    'Innovationsmanagement',
    'Strategische Transformation',
  ],
  sameAs: [
    'https://medium.com/@clemens.pompey',
    'https://www.linkedin.com/in/clemens-pompey',
  ],
}

export default function UeberUnsPage() {
  const p = usePageTranslation()
  const uu = p.ueberUns

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-14">
            <span className="section-eyebrow mb-4">{uu.eyebrow}</span>
            <h1 className="font-display text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mt-3 mb-6">
              {uu.h1}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              {uu.intro}
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="border-l-2 border-vencly-teal pl-5 mb-14">
            <p className="font-display text-xl md:text-2xl font-normal text-gray-800 dark:text-gray-200 leading-snug italic">
              {uu.quote}
            </p>
            <footer className="mt-3 text-sm text-vencly-teal font-mono tracking-widest uppercase">
              Clemens Pompeÿ
            </footer>
          </blockquote>

          {/* Expertise */}
          <section className="mb-14">
            <h2 className="font-display text-xl font-normal text-gray-900 dark:text-white mb-5">{uu.expertiseH2}</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {uu.expertise.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-vencly-teal flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Werdegang */}
          <section className="mb-14">
            <h2 className="font-display text-xl font-normal text-gray-900 dark:text-white mb-6">{uu.careerH2}</h2>
            <div className="space-y-6">
              {uu.stations.map((s) => (
                <div key={s.period} className="flex gap-5">
                  <div className="flex-shrink-0 w-[90px] text-xs font-mono text-vencly-teal pt-0.5">{s.period}</div>
                  <div className="border-l border-gray-200 dark:border-vencly-border pl-5 pb-2">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{s.role}</p>
                    <p className="text-xs text-vencly-teal mb-1">{s.org}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className="mb-14 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-7">
            <h2 className="font-display text-xl font-normal text-gray-900 dark:text-white mb-4">{uu.approachH2}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              {uu.approachP1}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {uu.approachP2}
            </p>
          </section>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-vencly-blue hover:bg-vencly-blue-dark text-white font-semibold px-6 py-3 rounded transition-colors text-sm blue-glow"
            >
              {uu.ctaPrimary} <ArrowRight size={15} />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-vencly-teal/40 hover:border-vencly-teal text-vencly-teal hover:bg-vencly-teal/5 font-semibold px-6 py-3 rounded transition-colors text-sm"
            >
              {uu.ctaSecondary} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
