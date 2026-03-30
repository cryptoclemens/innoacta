import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Lightbulb, BarChart3, Rocket } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'Geschäftsfeldentwicklung – neue Märkte mit Gründer-Denken',
  description:
    'Vencly entwickelt neue Geschäftsfelder für Konzerne und Mittelstand: schnell validiert, marktgetestet und mit echter Umsetzungsverantwortung. Von der Hypothese bis zum validierten Modell.',
  alternates: { canonical: 'https://vencly.com/geschaeftsfeldentwicklung' },
  openGraph: {
    title: 'Geschäftsfeldentwicklung | Vencly',
    description:
      'Neue Märkte erschließen wie ein Gründer: schnell, validierungsgetrieben, mit klarem Fokus auf Markterfolg.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Geschäftsfeldentwicklung',
  provider: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
  url: 'https://vencly.com/geschaeftsfeldentwicklung',
  description:
    'Neue Geschäftsfelder identifizieren, Geschäftsmodelle entwickeln und am Markt validieren – von der ersten Hypothese bis zum skalierbaren Modell. Für Konzerne und Mittelstand.',
  areaServed: ['DE', 'AT', 'CH'],
  serviceType: 'Geschäftsfeldentwicklung',
}

const phases = [
  {
    icon: Lightbulb,
    phase: 'Phase 1',
    title: 'Markt- & Technologiebewertung',
    desc: 'Wir analysieren Marktgröße, Wettbewerb, Technologiereife und regulatorische Rahmenbedingungen. Schnell, fokussiert, ohne monatelange Studien.',
    points: ['Marktgröße & Segmentierung', 'Wettbewerbslandschaft', 'Regulatorik & Eintrittsbarrieren'],
  },
  {
    icon: BarChart3,
    phase: 'Phase 2',
    title: 'Geschäftsmodell-Entwicklung',
    desc: 'Aus Marktchancen werden konkrete Geschäftsmodelle – mit klaren Annahmen, die testbar sind. Kein Powerpoint-Schönwettermodell, sondern ein robustes Fundament.',
    points: ['Wertversprechen & Zielgruppen', 'Erlös- und Kostenmodell', 'Risikobewertung & Szenarien'],
  },
  {
    icon: Rocket,
    phase: 'Phase 3',
    title: 'Validierung & Markterprobung',
    desc: 'Die entscheidende Phase: Wir testen zentrale Annahmen mit echten Kunden und echten Daten. Kein Simulieren – echtes Testen.',
    points: ['Hypothesen-Priorisierung', 'Kundeninterviews & Markttest', 'Go/No-Go-Empfehlung'],
  },
]

export default function GeschaeftsfeldentwicklungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-vencly-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="mb-20">
            <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase mb-4">
              Leistung
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Geschäftsfeldentwicklung –<br />
              <span className="text-vencly-teal">neue Märkte</span> mit<br />
              Gründer-Denken erschließen.
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Konzerne und Mittelständler, die neue Geschäftsfelder erschließen wollen, stehen vor
              demselben Problem: Interne Strukturen wurden für das bestehende Kerngeschäft gebaut –
              nicht für das Neue. Vencly bringt die Agilität und Methodik von Gründern in Ihre
              Organisation, ohne die Stabilität des Kerngeschäfts zu gefährden.
            </p>
          </div>

          {/* Why startup logic */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Warum klassische Strategieprozesse hier versagen.
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl leading-relaxed">
              Strategieprojekte dauern zu lange, kosten zu viel und enden häufig mit einem Konzept,
              das niemand umsetzt. Startups machen es anders: Sie bauen einen MVP, testen ihn am
              echten Markt, iterieren und entscheiden auf Basis von Daten.
            </p>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Vencly überträgt genau diese Logik auf Ihr nächstes Geschäftsfeld –{' '}
              <strong className="text-white">mit kurzen Iterationszyklen, klaren Entscheidungspunkten
              und messbarem Output in 3–6 Monaten</strong>.
            </p>
          </section>

          {/* Phases */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              Unser Vorgehen in drei Phasen.
            </h2>
            <div className="space-y-6">
              {phases.map(({ icon: Icon, phase, title, desc, points }) => (
                <div key={phase} className="bg-vencly-card border border-vencly-border rounded-2xl p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-vencly-teal/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-vencly-teal" />
                    </div>
                    <div className="flex-1">
                      <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase">{phase}</span>
                      <h3 className="text-white font-bold text-lg mt-1 mb-2">{title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
                      <ul className="space-y-1">
                        {points.map((p) => (
                          <li key={p} className="flex items-center gap-2 text-gray-300 text-sm">
                            <CheckCircle2 size={14} className="text-vencly-teal shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sectors */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-4">Besondere Stärke: regulierte Branchen.</h2>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Energie, Infrastruktur, öffentliche Hand – Branchen, in denen Startup-Logik oft als
              nicht anwendbar gilt. Vencly hat bewiesen, dass das falsch ist. Wir kennen die
              regulatorischen Rahmenbedingungen, die Stakeholder-Strukturen und die besonderen
              Anforderungen dieser Sektoren.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Welches Geschäftsfeld wollen Sie als nächstes erschließen?
            </h2>
            <p className="text-gray-400 mb-6">
              In einem ersten Gespräch klären wir, ob und wie Vencly helfen kann.
            </p>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Erstgespräch vereinbaren
              <ArrowRight size={16} />
            </button>
          </section>

        </div>
      </div>
    </>
  )
}
