'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function WhyUs() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#F8F7F4] dark:bg-vencly-bg py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-vencly-teal text-xs font-mono tracking-widest uppercase mb-4">
            {t.whyUs.label}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.whyUs.h2}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            {t.whyUs.subtext}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {t.whyUs.items.map((point, i) => (
            <div
              key={point.title}
              className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8"
            >
              <span className="font-mono text-vencly-teal/50 text-4xl font-bold block mb-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-3">
                {point.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
