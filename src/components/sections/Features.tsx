'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const serviceHrefs = [
  '/geschaeftsfeldentwicklung',
  '/venture-clienting',
  '/strategische-umsetzung',
]

const icons = [
  (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect width="48" height="48" rx="12" fill="#3B82F6" fillOpacity="0.1" />
      <path d="M24 12L36 19V29L24 36L12 29V19L24 12Z" stroke="#3B82F6" strokeWidth="2" fill="none" />
      <path d="M24 18L30 21.5V28.5L24 32L18 28.5V21.5L24 18Z" fill="#3B82F6" fillOpacity="0.3" />
      <circle cx="24" cy="24" r="3" fill="#3B82F6" />
    </svg>
  ),
  (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect width="48" height="48" rx="12" fill="#3B82F6" fillOpacity="0.1" />
      <path d="M14 24H34M14 17H26M14 31H22" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      <circle cx="35" cy="31" r="5" stroke="#3B82F6" strokeWidth="2" />
      <path d="M35 29V31L36.5 32.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect width="48" height="48" rx="12" fill="#3B82F6" fillOpacity="0.1" />
      <rect x="12" y="20" width="10" height="16" rx="2" stroke="#3B82F6" strokeWidth="2" />
      <rect x="26" y="14" width="10" height="22" rx="2" stroke="#3B82F6" strokeWidth="2" />
      <path d="M12 36H36" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 16L17 20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      <path d="M31 10L31 14" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
]

export default function Features() {
  const { t } = useLanguage()

  return (
    <section id="leistungen" className="bg-white dark:bg-vencly-card py-24 px-4 border-t border-b border-gray-200 dark:border-vencly-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-vencly-teal text-xs font-mono tracking-widest uppercase mb-4">
            {t.features.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.features.h2}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            {t.features.subtext}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {t.features.items.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-[#F8F7F4] dark:bg-vencly-bg border border-gray-200 dark:border-vencly-border rounded-2xl p-8 hover:border-vencly-teal/40 transition-all duration-300 group flex flex-col"
            >
              <div className="mb-6">{icons[i]}</div>
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-3 group-hover:text-vencly-teal transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {feature.desc}
              </p>
              <ul className="space-y-2 mb-6">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 bg-vencly-teal rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  href={serviceHrefs[i]}
                  className="inline-flex items-center gap-1.5 text-vencly-teal hover:text-teal-400 text-sm font-medium transition-colors"
                >
                  Mehr erfahren
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
