'use client'

import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { calButtonProps } from '@/components/layout/CalProvider'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#F8F7F4] dark:bg-vencly-bg overflow-hidden px-4">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-vencly-blue/10 dark:bg-vencly-teal/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-20 md:pt-24">
        <div className="inline-block mb-6">
          <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase border border-vencly-teal/30 bg-vencly-teal/5 px-4 py-1.5 rounded-full">
            {t.hero.eyebrow}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-8 max-w-3xl mx-auto">
          <span className="gradient-text-orange">{t.hero.h1}</span>{' '}
          <span className="gradient-text">{t.hero.h1Highlight}</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            {...calButtonProps}
            className="inline-flex items-center gap-2 bg-vencly-blue hover:bg-vencly-blue-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all blue-glow hover:scale-105 text-base cursor-pointer"
          >
            {t.hero.ctaPrimary}
          </button>
          <a
            href="#referenzen"
            className="inline-flex items-center gap-2 border-2 border-vencly-blue/40 hover:border-vencly-blue text-vencly-blue dark:text-vencly-teal hover:bg-vencly-blue/5 font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap justify-center gap-10 mt-14 pt-10 border-t border-gray-200 dark:border-white/10">
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-vencly-blue dark:text-vencly-teal tabular-nums">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
