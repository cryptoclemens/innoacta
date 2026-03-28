import { CheckCircle2 } from 'lucide-react'

const bullets = [
  {
    title: 'Geschäftsfeldentwicklung',
    desc: 'Neue Märkte identifizieren, Geschäftsmodelle validieren, Markterprobung begleiten – von der Hypothese zum tragfähigen Modell.',
  },
  {
    title: 'Venture Clienting',
    desc: 'Externe Innovationspartner gezielt einbinden: Startup-Scouting, strukturierte Pilotprojekte, klarer Entscheidungspunkt nach 90 Tagen.',
  },
  {
    title: 'Strategische Umsetzung',
    desc: 'Projektsteuerung, Stakeholder-Management und Workshop-Formate für Vorhaben, die intern keine Heimat haben.',
  },
  {
    title: 'Funktioniert in regulierten Branchen',
    desc: 'Energie, Infrastruktur, öffentliche Hand: Wir kennen die Rahmenbedingungen – und arbeiten innerhalb davon.',
  },
  {
    title: 'Ehrlichkeit über Machbarkeit',
    desc: 'Wir sagen auch, wenn ein Geschäftsfeld noch nicht reif ist. Vertrauen entsteht durch Klarheit, nicht durch Ja-Sagen.',
  },
]

export default function ValueProp() {
  return (
    <section className="bg-vencly-bg py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-vencly-teal text-xs font-mono tracking-widest uppercase mb-4">
              Was Vencly einbringt
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              Drei Leistungsfelder –{' '}
              <span className="gradient-text">eine Umsetzungslogik</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Wir begleiten Unternehmen von der Potenzialanalyse bis zur
              operativen Erschließung neuer Geschäftsfelder – mit
              unternehmerischem Blick und erprobter Methodik.
            </p>
          </div>

          {/* Right: Bullets */}
          <ul className="space-y-5">
            {bullets.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <CheckCircle2
                  size={20}
                  className="text-vencly-teal flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">
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
