'use client'

import { ExternalLink, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#F8F7F4] dark:bg-vencly-bg overflow-hidden px-4">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(90deg, #14b8a6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vencly-teal/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6">
          <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase border border-vencly-teal/30 bg-vencly-teal/5 px-4 py-1.5 rounded-full">
            {t.hero.eyebrow}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
          {t.hero.h1}{' '}
          <span className="gradient-text">{t.hero.h1Highlight}</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-vencly-teal-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all teal-glow hover:scale-105 text-base"
          >
            {t.hero.ctaPrimary}
            <ExternalLink size={16} />
          </a>
          <a
            href="#referenzen"
            className="inline-flex items-center gap-2 border border-gray-300 dark:border-vencly-border hover:border-vencly-teal/50 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
