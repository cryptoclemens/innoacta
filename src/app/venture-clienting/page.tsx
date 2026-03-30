import type { Metadata } from 'next'
import { ArrowRight, ExternalLink, CheckCircle2, Zap, Target, Search } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'Venture Clienting – die smartere Art, externe Innovation einzukaufen',
  description:
    'Vencly findet automatisiert und strukturiert die beste Lösung für Ihre Herausforderung – egal ob Startup, Scaleup oder innovativer Mittelständler. Kein Berater-Bingo, sondern Ergebnisse.',
  alternates: { canonical: 'https://vencly.com/venture-clienting' },
  openGraph: {
    title: 'Venture Clienting | Vencly',
    description:
      'Die beste Lösung für Ihre Herausforderung – nicht die coolste Entität. Vencly sucht smart und automatisiert nach dem richtigen Anbieter.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Venture Clienting',
  provider: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
  url: 'https://vencly.com/venture-clienting',
  description:
    'Strukturierter Prozess zur Identifikation und Erprobung externer Innovationspartner – Startups, Scaleups und innovative Unternehmen. Ziel: die beste Lösung für die eigene Herausforderung, nicht die coolste Entität.',
  areaServed: ['DE', 'AT', 'CH'],
  serviceType: 'Venture Clienting',
}

const steps = [
  {
    n: '01',
    title: 'Herausforderung schärfen',
    desc: 'Bevor wir suchen, verstehen wir genau, was Sie wirklich brauchen – nicht welche Art von Anbieter, sondern welches Problem gelöst werden muss.',
  },
  {
    n: '02',
    title: 'Smarte Anbietersuche',
    desc: 'Automatisiertes Screening von Startups, Scaleups und innovativen Unternehmen aus relevanten Märkten weltweit. Wir suchen nach der besten Lösung – nicht nach dem bekanntesten Namen.',
  },
  {
    n: '03',
    title: 'Strukturiertes Matching',
    desc: 'Die Kandidaten werden nach Lösungsfit, Skalierbarkeit, Risiko und kulturellem Match bewertet. Sie erhalten eine qualifizierte Shortlist statt einer Excel-Tabelle mit 200 Einträgen.',
  },
  {
    n: '04',
    title: 'Pilotprojekt in 90 Tagen',
    desc: 'Kein endloser Auswahlprozess. Wir starten ein konkretes Pilotprojekt mit klarem Testauftrag, messbaren KPIs und einer Entscheidung nach spätestens 90 Tagen.',
  },
]

const differentiators = [
  {
    icon: Search,
    title: 'Nicht nur Startups',
    desc: 'Wir suchen unter Startups, Scaleups und innovativen Mittelständlern. Am Ende zählt die beste Lösung – nicht die coolste Entität.',
  },
  {
    icon: Zap,
    title: 'Automatisiert & strukturiert',
    desc: 'Statt manueller Recherche: systematisches Screening mit klaren Kriterien. Effizienz, die Beraterhäuser nicht abbilden können.',
  },
  {
    icon: Target,
    title: 'Ergebnis, nicht Prozess',
    desc: 'Wir denken wie MyHammer, nicht wie ein klassisches Beratungshaus. Sie brauchen den richtigen Anbieter – wir bringen ihn zu Ihnen.',
  },
]

export default function VentureClientingPage() {
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
              Venture Clienting –<br />
              <span className="text-vencly-teal">die smartere Art</span>, externe<br />
              Innovation einzukaufen.
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
              Etablierte Unternehmen kämpfen mit demselben Problem: Der Markt bewegt sich schnell,
              aber der eigene Innovationsprozess nicht. Venture Clienting löst das – indem Sie externe
              Anbieter so einbinden, wie ein Startup seinen ersten strategischen Partner wählt:
              gezielt, schnell, mit klarem Testauftrag.
            </p>
            <blockquote className="border-l-4 border-vencly-teal pl-6 py-2 my-8 bg-vencly-card rounded-r-xl">
              <p className="text-white text-xl font-semibold leading-snug">
                „Am Ende interessiert die beste Lösung<br className="hidden sm:block" /> für die eigene Herausforderung –<br className="hidden sm:block" /> nicht die coolste Entität."
              </p>
            </blockquote>
          </div>

          {/* USP: Not just startups */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-3">
              Wir suchen überall. Nicht nur bei Startups.
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Die meisten Venture-Clienting-Ansätze fokussieren sich auf Startups. Das ist zu eng.
              Vencly sucht automatisiert und strukturiert unter{' '}
              <strong className="text-white">Startups, Scaleups und innovativen Unternehmen</strong>{' '}
              aller Größen – denn der beste Anbieter für Ihre Herausforderung sitzt nicht
              zwingend in einem Berliner Co-Working-Space.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {differentiators.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-vencly-card border border-vencly-border rounded-2xl p-6">
                  <div className="w-10 h-10 bg-vencly-teal/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-vencly-teal" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              Der Vencly-Prozess: von der Herausforderung zur Entscheidung.
            </h2>
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-6 bg-vencly-card border border-vencly-border rounded-2xl p-6">
                  <span className="text-vencly-teal font-mono text-2xl font-bold shrink-0 mt-0.5">{s.n}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What you get */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6">Was Sie bekommen.</h2>
            <ul className="space-y-3">
              {[
                'Qualifizierte Shortlist passender Anbieter – mit Bewertung statt roher Liste',
                'Strukturierter Pilotrahmen mit klaren KPIs und Entscheidungskriterien',
                'Begleitung der Pilotphase durch Vencly',
                'Entscheidungsvorlage für Ihr Management nach 90 Tagen',
                'Optional: Aufbau eines wiederholbaren internen Venture-Client-Prozesses',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 size={18} className="text-vencly-teal mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Medium article */}
          <section className="mb-20">
            <div className="bg-vencly-card border border-vencly-border rounded-2xl p-8">
              <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase mb-3 block">
                Weiterführend
              </span>
              <h2 className="text-white font-bold text-xl mb-3">
                Startup-Zusammenarbeit als Chance in wirtschaftlichen Krisenzeiten
              </h2>
              <p className="text-gray-400 text-sm mb-5">
                Warum Venture Clienting gerade jetzt das richtige Instrument ist – und wie
                Unternehmen externe Partner strategisch einsetzen können, statt Innovation zu delegieren.
              </p>
              <a
                href="https://medium.com/@clemens.pompey/startup-zusammenarbeit-als-chance-in-wirtschaftlichen-krisenzeiten-venture-client-cb72d2e216da"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-vencly-teal hover:underline font-medium text-sm"
              >
                Artikel auf Medium lesen
                <ExternalLink size={14} />
              </a>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Bereit, den besten Anbieter für Ihre Herausforderung zu finden?
            </h2>
            <p className="text-gray-400 mb-6">
              Kein Pitch-Deck nötig. Erzählen Sie uns, welches Problem Sie lösen wollen.
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
