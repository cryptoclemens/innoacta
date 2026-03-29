'use client'

import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const logos = [
  { name: 'SWM', desc: 'Stadtwerke München', category: 'Energie & Versorgung', src: '/logos/swm.svg' },
  { name: 'Plenum AG', desc: 'Strategie & Transformation', category: 'Beratung', src: '/logos/plenum.png' },
  { name: 'Toll Collect', desc: 'Mauterhebung Deutschland', category: 'Mobility & Infrastruktur', src: '/logos/toll-collect.svg' },
]

export default function References() {
  const { t } = useLanguage()

  return (
    <section id="referenzen" className="bg-white dark:bg-vencly-card border-t border-gray-200 dark:border-vencly-border py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-vencly-teal text-xs font-mono tracking-widest uppercase mb-4">
            {t.references.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.references.h2}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm">
            {t.references.subtext}
          </p>
        </div>

        {/* Reference cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          {[
            { tag: t.references.caseTag, title: t.references.caseTitle, text: t.references.caseText, meta: t.references.caseMeta },
            { tag: t.references.case2Tag, title: t.references.case2Title, text: t.references.case2Text, meta: t.references.case2Meta },
          ].map((c) => (
            <div key={c.tag} className="rounded-2xl border p-8" style={{ backgroundColor: '#EEF2F8', borderColor: '#B5C8E4' }}>
              <div className="mb-4">
                <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: '#1A2B4A' }}>
                  {c.tag}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 whitespace-pre-line" style={{ color: '#1A2B4A' }}>
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#3A4A6A' }}>
                {c.text}
              </p>
              <div className="flex flex-wrap gap-4 text-xs" style={{ color: '#3A4A6A' }}>
                {c.meta.map((m, i) => (
                  <>
                    {i > 0 && <span key={`sep-${i}`}>·</span>}
                    <span key={m.label}><strong>{m.label}:</strong> {m.value}</span>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Logo grid */}
        <div className="grid gap-6 sm:grid-cols-3 mb-6">
          {logos.map((ref) => (
            <div
              key={ref.name}
              className="bg-[#F8F7F4] dark:bg-vencly-bg border border-gray-200 dark:border-vencly-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-vencly-teal/30 transition-colors"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4 bg-white rounded-xl px-4 py-2">
                <Image src={ref.src} alt={ref.name} width={120} height={48} className="object-contain max-h-12" />
              </div>
              <p className="text-gray-900 dark:text-white font-bold mb-1">{ref.name}</p>
              <p className="text-gray-500 text-sm mb-2">{ref.desc}</p>
              <span className="text-xs text-vencly-teal bg-vencly-teal/10 px-2 py-0.5 rounded-full">
                {ref.category}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mb-14">
          {t.references.footnote}
        </p>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-gray-900 dark:text-white font-bold text-xl md:text-2xl mb-4">
            {t.references.ctaTitle}
          </h3>
          <p className="text-gray-500 mb-6 text-sm">
            {t.references.ctaSubtext}
          </p>
          <a
            href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vencly-blue hover:bg-vencly-blue-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all blue-glow hover:scale-105"
          >
            {t.references.ctaButton}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
