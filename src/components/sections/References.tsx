'use client'

import Image from 'next/image'
import { Fragment } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { calButtonProps } from '@/components/layout/CalProvider'

const logos = [
  { name: 'SWM', desc: 'Stadtwerke München', category: 'Energie & Versorgung', src: '/logos/swm.svg' },
  { name: 'RWE', desc: 'Energie & Versorgung', category: 'Energie', src: '/logos/rwe.svg' },
  { name: 'SachsenEnergie', desc: 'Energie & Wärme', category: 'Energie & Versorgung', src: '/logos/sachsen-energie.svg' },
  { name: 'Plenum AG', desc: 'Strategie & Transformation', category: 'Beratung', src: '/logos/plenum.png' },
  { name: 'Toll Collect', desc: 'Mauterhebung Deutschland', category: 'Mobility & Infrastruktur', src: '/logos/toll-collect.svg' },
]

export default function References() {
  const { t } = useLanguage()

  return (
    <section id="referenzen" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-eyebrow justify-center mb-4">
            {t.references.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 mt-3">
            {t.references.h2}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            {t.references.subtext}
          </p>
        </div>

        {/* Reference cards */}
        <div className="grid gap-5 md:grid-cols-2 mb-10">
          {[
            { tag: t.references.caseTag, title: t.references.caseTitle, text: t.references.caseText, meta: t.references.caseMeta },
            { tag: t.references.case2Tag, title: t.references.case2Title, text: t.references.case2Text, meta: t.references.case2Meta },
          ].map((c) => (
            <div key={c.tag} className="glas rounded-[26px] p-8">
              <div className="mb-4">
                <span className="text-xs font-mono font-semibold tracking-widest uppercase text-brand-teal dark:text-brand-mint">
                  {c.tag}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-gray-900 dark:text-white mb-3 whitespace-pre-line">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
                {c.text}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
                {c.meta.map((m) => (
                  <Fragment key={m.label}>
                    <span className="glas-chip rounded-full px-3 py-1.5"><strong className="text-brand-navy dark:text-white">{m.label}:</strong> {m.value}</span>
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Logo grid */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-6">
          {logos.map((ref) => (
            <div
              key={ref.name}
              className="glas rounded-[22px] p-6 flex flex-col items-center text-center"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4 bg-white rounded-2xl px-4 py-2">
                <Image src={ref.src} alt={ref.name} width={120} height={48} className="object-contain max-h-12" />
              </div>
              <p className="text-gray-900 dark:text-white font-bold mb-1">{ref.name}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{ref.desc}</p>
              <span className="text-xs text-brand-teal dark:text-brand-mint bg-brand-teal/10 px-2 py-0.5 rounded-full">
                {ref.category}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-14">
          {t.references.footnote}
        </p>

        {/* Final CTA — dickes Glas */}
        <div className="glas-dick rounded-[32px] text-center px-6 py-12 sm:px-12">
          <h3 className="text-gray-900 dark:text-white font-bold text-xl md:text-2xl mb-4">
            {t.references.ctaTitle}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t.references.ctaSubtext}
          </p>
          <button
            {...calButtonProps}
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-night dark:bg-brand-mint dark:hover:bg-white text-white dark:text-brand-navy font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-px cursor-pointer"
          >
            {t.references.ctaButton}
          </button>
        </div>
      </div>
    </section>
  )
}
