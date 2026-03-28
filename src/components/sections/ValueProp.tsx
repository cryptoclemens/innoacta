'use client'

import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ValueProp() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#F8F7F4] dark:bg-vencly-bg py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-vencly-teal text-xs font-mono tracking-widest uppercase mb-4">
              {t.valueProp.label}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-snug">
              {t.valueProp.h2}{' '}
              <span className="gradient-text">{t.valueProp.h2Highlight}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.valueProp.intro}
            </p>
          </div>

          {/* Right: Bullets */}
          <ul className="space-y-5">
            {t.valueProp.items.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <CheckCircle2
                  size={20}
                  className="text-vencly-teal flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold text-sm mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
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
