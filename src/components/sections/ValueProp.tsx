'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function ValueProp() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: Text — bleibt beim Scrollen der Karten stehen */}
          <div className="md:sticky md:top-28">
            <span className="section-eyebrow mb-4">
              {t.valueProp.label}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug mt-3">
              {t.valueProp.h2}{' '}
              {/* Zwei eigenständige Sätze: der zweite beginnt immer in neuer Zeile,
                  sonst bricht die breitere 1280-px-Spalte mitten im Satz um. */}
              <span className="gradient-text block">{t.valueProp.h2Highlight}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.valueProp.intro}
            </p>
          </div>

          {/* Right: Bullets */}
          <ul className="space-y-3">
            {t.valueProp.items.map((item, i) => (
              <li key={item.title} className="glas rounded-[22px] flex items-start gap-4 px-6 py-5">
                <span className="glas-chip flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold text-brand-teal dark:text-brand-mint tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
