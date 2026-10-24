'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { calButtonProps } from '@/components/layout/CalProvider'
import Explainer from '@/components/sections/Explainer'

const INNOVATION_PATH = 'M 30,170 C 55,148 70,125 95,112 C 130,93 165,78 210,68 C 255,57 295,46 340,38 L 395,32'
const KLASSISCH_PATH = 'M 30,170 C 75,166 90,163 120,160 C 160,155 195,150 240,144 C 285,136 320,124 340,118 L 395,110'

/**
 * Lernkurve im Hero.
 *
 * `stretch` streckt nur die x-Achse der Zeichenfläche. So füllt das Diagramm
 * ab sm den 1280-px-Rahmen der Sektionen darunter, ohne dass es proportional
 * höher wird — Höhe, Strichstärken und Schriftgrößen bleiben praktisch gleich.
 * Mobil läuft die ungestreckte Fassung (stretch=1): gestreckt wäre die Schrift
 * dort unlesbar klein. Die Legende bleibt bewusst ungestreckt.
 */
function LearningCurveChart({ stretch }: { stretch: number }) {
  const X = (x: number) => 30 + (x - 30) * stretch
  const scalePath = (d: string) => d.replace(/(\d+(?:\.\d+)?),(\d+(?:\.\d+)?)/g, (_, x, y) => `${X(Number(x))},${y}`)
  const width = X(400) + 30

  const innovationPath = scalePath(INNOVATION_PATH)
  const klassischPath = scalePath(KLASSISCH_PATH)

  const milestones = [
    { x: 95, y: 112, label: 'Hypothesen' },
    { x: 210, y: 68, label: 'Marktvalidierung' },
    { x: 340, y: 38, label: 'Entscheidung' },
  ]

  return (
    <svg viewBox={`0 0 ${width} 210`} className="w-full h-auto" aria-hidden="true">
        {/* Subtle grid lines */}
        {[50, 90, 130, 170].map((y) => (
          <line key={y} x1="30" y1={y} x2={X(400)} y2={y}
            stroke="#0f766e" strokeWidth="0.4" opacity="0.12" strokeDasharray="4 6" />
        ))}

        {/* X axis */}
        <line x1="30" y1="182" x2={X(400)} y2="182" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="0.8" opacity="0.4" />

        {/* X axis week labels */}
        {[
          { x: 30, label: 'W0' },
          { x: 95, label: 'W1' },
          { x: 210, label: 'W3' },
          { x: 340, label: 'W5' },
          { x: 395, label: 'W6' },
        ].map(({ x, label }) => (
          <text key={label} x={X(x)} y="198" textAnchor="middle"
            className="fill-gray-500 dark:fill-gray-400" fontSize="9.5" fontFamily="monospace">
            {label}
          </text>
        ))}

        {/* Klassisch curve — dashed */}
        <path d={klassischPath} fill="none" stroke="#8A9AAB" strokeWidth="1.5"
          strokeDasharray="6 4" opacity="0.5" />

        {/* Area under innovation.today */}
        <path d={`${innovationPath} L ${X(395)},182 L 30,182 Z`}
          fill="#0f766e" opacity="0.07" />

        {/* innovation.today curve — solid petrol */}
        <path d={innovationPath} fill="none" stroke="#0f766e" strokeWidth="2.5"
          strokeLinecap="round" />

        {/* Milestone dots */}
        {milestones.map(({ x, y, label }) => (
          <g key={label}>
            <circle cx={X(x)} cy={y} r="7" fill="#0f766e" opacity="0.15" />
            <circle cx={X(x)} cy={y} r="3.5" fill="#0f766e" />
            <text x={X(x)} y={y - 13} textAnchor="middle"
              className="fill-gray-500 dark:fill-gray-400" fontSize="8.5" fontFamily="monospace">
              {label}
            </text>
          </g>
        ))}

        {/* Legend */}
        <g>
          <line x1="30" y1="18" x2="48" y2="18" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="39" cy="18" r="3" fill="#0f766e" />
          <text x="54" y="22" className="fill-gray-600 dark:fill-gray-200" fontSize="10">innovation.today</text>

          {/* x-Werte an die Breite von „innovation.today“ angepasst —
              der Name ist deutlich länger als die frühere Wortmarke. */}
          <line x1="150" y1="18" x2="168" y2="18" stroke="#8A9AAB" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
          <text x="174" y="22" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Klassisch</text>
        </g>

        {/* Y axis label */}
        <text x={X(398)} y="11" textAnchor="end" className="fill-gray-500 dark:fill-gray-400" fontSize="8.5" fontFamily="monospace">
          Erkenntnisstand →
        </text>
      </svg>
  )
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative px-4 pt-28 md:pt-32 pb-12">
      {/* Glas-Look: kein eigener Grund, der GlasGrund (Layout) scheint durch.
          Raster: mobil Text → Film → Buttons (Film bleibt über den Buttons),
          ab lg Text und Buttons links, Film als dickes Glasfenster rechts. */}
      <div className="relative w-full max-w-7xl mx-auto grid gap-8 lg:gap-x-12 lg:gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] [grid-template-areas:'text'_'film'_'cta'] lg:[grid-template-areas:'text_film'_'cta_film'] text-center lg:text-left">
        <div className="[grid-area:text] lg:self-end">
          <div className="inline-block mb-6">
            <span className="section-eyebrow">
              {t.hero.eyebrow}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            {/* Zweifarbig wie die Wortmarke: Navy, dann Teal. */}
            <span className="text-brand-navy dark:text-white">{t.hero.h1}</span>{' '}
            <span className="text-brand-teal dark:text-brand-mint">{t.hero.h1Highlight}</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed">
            {t.hero.subline}
          </p>

          <p className="text-lg md:text-xl font-normal text-brand-teal dark:text-brand-mint">
            innovation.today steht für eines: Umsetzung von Chancen.
          </p>
        </div>

        {/* Erklärfilm als dickes Glasfenster; data-track="film" hält die GA4-Zeitreihe. */}
        <div data-track="film" className="[grid-area:film] w-full max-w-3xl mx-auto lg:max-w-none">
          <div className="glas-dick rounded-[32px] p-2.5 sm:p-3">
            <Explainer />
          </div>
        </div>

        <div className="[grid-area:cta] lg:self-start flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
          <button
            {...calButtonProps}
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-night dark:bg-brand-mint dark:hover:bg-white text-white dark:text-brand-navy font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-px text-base cursor-pointer"
          >
            {t.hero.ctaPrimary}
          </button>
          <a
            href="#referenzen"
            className="glas inline-flex items-center gap-2 rounded-full text-brand-navy dark:text-brand-mint font-semibold px-8 py-3.5 transition-all hover:-translate-y-px text-base"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Zählerleiste mit Lernkurve als Glasleiste */}
      <div className="relative w-full max-w-7xl mx-auto mt-10 glas rounded-[28px] px-6 py-6 md:px-8 grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
        <div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4">
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-3xl font-extrabold text-brand-navy dark:text-white tabular-nums">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-300 mt-1 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* SVG Learning Curve Chart — mobil schmal, ab sm gestreckt */}
        <div className="w-full">
          <div className="sm:hidden"><LearningCurveChart stretch={1} /></div>
          <div className="hidden sm:block"><LearningCurveChart stretch={1.6} /></div>
        </div>
      </div>
    </section>
  )
}
