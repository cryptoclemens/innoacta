import { CheckCircle2 } from 'lucide-react'

const bullets = [
  {
    title: 'Innovation ohne eigene Abteilung',
    desc: 'Bezahlbare Innovation für den Mittelstand – ohne Dedicated Innovation Labs oder teure Berater.',
  },
  {
    title: '~70 % geringere Prozesskosten',
    desc: 'Automatisierung von Routineaufgaben in Ausschreibungen, Startup-Scouting und Projektsteuerung.',
  },
  {
    title: 'Skalierbare Innovationszyklen',
    desc: 'Von einem Piloten zur konzernweiten Plattform – Vencly wächst mit Ihren Anforderungen.',
  },
  {
    title: 'Compliance-ready',
    desc: 'Vollständig konform mit UVgO, DSGVO und individuellen SLA-Anforderungen.',
  },
  {
    title: 'Mitarbeiter als Innovationstreiber',
    desc: 'Ideen aus dem Team werden systematisch erfasst, bewertet und in Prototypen überführt.',
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
              Ihr Vorteil
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              Ihr persönlicher{' '}
              <span className="gradient-text">KI-Agent</span> für
              Venture Clienting
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Vencly automatisiert den gesamten Prozess – von der
              Marktbeobachtung über die Startup-Auswahl bis hin zur
              Vertragsgestaltung und Projektumsetzung.
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
