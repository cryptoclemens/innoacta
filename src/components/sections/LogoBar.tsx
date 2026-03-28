'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const partnerLogos = [
  { name: 'Partner A', width: 100 },
  { name: 'Partner B', width: 90 },
  { name: 'Partner C', width: 110 },
  { name: 'Partner D', width: 95 },
  { name: 'Partner E', width: 105 },
]

function PlaceholderLogo({ name, width }: { name: string; width: number }) {
  return (
    <div
      className="flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity"
      style={{ width }}
    >
      <svg viewBox={`0 0 ${width} 32`} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height: 32 }}>
        <rect x="1" y="1" width={width - 2} height="30" rx="4" stroke="#5eead4" strokeWidth="1" strokeDasharray="4 2" />
        <text x={width / 2} y="20" textAnchor="middle" fill="#5eead4" fontSize="9" fontFamily="monospace">
          {name}
        </text>
      </svg>
    </div>
  )
}

export default function LogoBar() {
  const { t } = useLanguage()

  return (
    <section className="bg-white dark:bg-vencly-card border-t border-b border-gray-200 dark:border-vencly-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-gray-400 dark:text-gray-600 text-xs font-mono tracking-widest uppercase mb-8">
          {t.logoBar.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partnerLogos.map((logo) => (
            <PlaceholderLogo key={logo.name} name={logo.name} width={logo.width} />
          ))}
        </div>
      </div>
    </section>
  )
}
