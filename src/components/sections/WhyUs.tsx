const whyPoints = [
  {
    number: '01',
    title: 'Unternehmerische Perspektive, keine Berater-Distanz',
    desc: 'Vencly wird von einem Gründer geführt, der selbst Unternehmen aufgebaut, gescheitert und erfolgreich repositioniert hat. Das prägt den Blick auf Ihre Situation.',
  },
  {
    number: '02',
    title: 'Methode trifft Erfahrung',
    desc: 'Über 40 realisierte Venture-Client-Projekte, Transformationsarbeit in der Energie- und Infrastrukturbranche, Aufbau von Innovationsstrukturen in Konzernen und Kommunen. Keine generische Toolbox.',
  },
  {
    number: '03',
    title: 'Ehrlichkeit über Machbarkeit',
    desc: 'Wir sagen auch, wenn ein Geschäftsfeld noch nicht reif ist – oder wenn Venture Clienting nicht das richtige Instrument ist. Vertrauen entsteht durch Klarheit, nicht durch Ja-Sagen.',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-vencly-bg py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-vencly-teal text-xs font-mono tracking-widest uppercase mb-4">
            Warum Vencly
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kein Konzept-Karussell.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Wir sind kein Berater, der Konzepte erstellt. Wir sind das Team,
            das umsetzt – mit echter Umsetzungsverantwortung und unternehmerischem Blick.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {whyPoints.map((point) => (
            <div
              key={point.number}
              className="bg-vencly-card border border-vencly-border rounded-2xl p-8"
            >
              <span className="font-mono text-vencly-teal/50 text-4xl font-bold block mb-4">
                {point.number}
              </span>
              <h3 className="text-white font-bold text-lg mb-3">
                {point.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
