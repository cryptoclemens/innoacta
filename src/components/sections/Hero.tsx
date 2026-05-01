'use client'

import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { calButtonProps } from '@/components/layout/CalProvider'

function LearningCurveChart() {
  const venclyPath = 'M 30,170 C 55,148 70,125 95,112 C 130,93 165,78 210,68 C 255,57 295,46 340,38 L 395,32'
  const klassischPath = 'M 30,170 C 75,166 90,163 120,160 C 160,155 195,150 240,144 C 285,136 320,124 340,118 L 395,110'

  const milestones = [
    { x: 95, y: 112, label: 'Hypothesen' },
    { x: 210, y: 68, label: 'Marktvalidierung' },
    { x: 340, y: 38, label: 'Entscheidung' },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 mb-2">
      <svg viewBox="0 0 430 210" className="w-full h-auto" aria-hidden="true">
        {/* Subtle grid lines */}
        {[50, 90, 130, 170].map((y) => (
          <line key={y} x1="30" y1={y} x2="400" y2={y}
            stroke="#0f766e" strokeWidth="0.4" opacity="0.12" strokeDasharray="4 6" />
        ))}

        {/* X axis */}
        <line x1="30" y1="182" x2="400" y2="182" stroke="#64748b" strokeWidth="0.8" opacity="0.4" />

        {/* X axis week labels */}
        {[
          { x: 30, label: 'W0' },
          { x: 95, label: 'W1' },
          { x: 210, label: 'W3' },
          { x: 340, label: 'W5' },
          { x: 395, label: 'W6' },
        ].map(({ x, label }) => (
          <text key={label} x={x} y="198" textAnchor="middle"
            fill="#94a3b8" fontSize="9.5" fontFamily="monospace">
            {label}
          </text>
        ))}

        {/* Klassisch curve — dashed amber */}
        <path d={klassischPath} fill="none" stroke="#d97706" strokeWidth="1.5"
          strokeDasharray="6 4" opacity="0.5" />

        {/* Area under Vencly */}
        <path d={`${venclyPath} L 395,182 L 30,182 Z`}
          fill="#0f766e" opacity="0.07" />

        {/* Vencly curve — solid petrol */}
        <path d={venclyPath} fill="none" stroke="#0f766e" strokeWidth="2.5"
          strokeLinecap="round" />

        {/* Milestone dots */}
        {milestones.map(({ x, y, label }) => (
          <g key={label}>
            <circle cx={x} cy={y} r="7" fill="#0f766e" opacity="0.15" />
            <circle cx={x} cy={y} r="3.5" fill="#0f766e" />
            <text x={x} y={y - 13} textAnchor="middle"
              fill="#64748b" fontSize="8.5" fontFamily="monospace">
              {label}
            </text>
          </g>
        ))}

        {/* Legend */}
        <g>
          <line x1="30" y1="18" x2="48" y2="18" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="39" cy="18" r="3" fill="#0f766e" />
          <text x="54" y="22" fill="#475569" fontSize="10">Vencly</text>

          <line x1="105" y1="18" x2="123" y2="18" stroke="#d97706" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
          <text x="129" y="22" fill="#94a3b8" fontSize="10">Klassisch</text>
        </g>

        {/* Y axis label */}
        <text x="398" y="11" textAnchor="end" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">
          Erkenntnisstand →
        </text>
      </svg>
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#F8F7F4] dark:bg-vencly-bg overflow-hidden px-4">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#0f766e 1px, transparent 1px), linear-gradient(90deg, #0f766e 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-vencly-teal/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-20 md:pt-24">
        <div className="inline-block mb-6">
          <span className="section-eyebrow">
            {t.hero.eyebrow}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 dark:text-white leading-tight mb-8 max-w-3xl mx-auto">
          <span className="gradient-text-orange font-semibold">{t.hero.h1}</span>{' '}
          <span className="gradient-text">{t.hero.h1Highlight}</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            {...calButtonProps}
            className="inline-flex items-center gap-2 bg-vencly-blue hover:bg-vencly-blue-dark text-white font-semibold px-8 py-3.5 rounded transition-all blue-glow hover:scale-105 text-base cursor-pointer"
          >
            {t.hero.ctaPrimary}
          </button>
          <a
            href="#referenzen"
            className="inline-flex items-center gap-2 border-2 border-vencly-teal/40 hover:border-vencly-teal text-vencly-teal hover:bg-vencly-teal/5 font-semibold px-8 py-3.5 rounded transition-all text-base"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* SVG Learning Curve Chart */}
        <LearningCurveChart />

        {/* Stats strip */}
        <div className="flex flex-wrap justify-center gap-10 mt-4 pt-8 border-t border-gray-200 dark:border-white/10">
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-vencly-teal tabular-nums">{stat.value}</div>
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
