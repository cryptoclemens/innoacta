const whyPoints = [
  {
    number: '01',
    title: 'Prototyp in 7 Tagen',
    desc: 'Kein monatelanger Evaluationsprozess, kein Pitch-Deck-Karussell. Wir liefern einen funktionsfähigen Prototypen in einer Woche – mit echten Daten, echten Ergebnissen.',
  },
  {
    number: '02',
    title: 'Fail fast – Kosten senken',
    desc: 'Venture Clienting bedeutet: Innovation testen, bevor Sie investieren. Durch die Fail-fast-Methodik sparen unsere Kunden im Schnitt 60–70 % gegenüber klassischen Innovationsprojekten.',
  },
  {
    number: '03',
    title: 'Compliance für den öffentlichen Sektor',
    desc: 'UVgO, VOB, DSGVO – Vencly wurde von Grund auf für öffentliche Auftraggeber und regulierte Branchen entwickelt. Revisionssicher, auditfähig, nachvollziehbar.',
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
            Warum Unternehmen uns wählen
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Wir sind kein Berater, der Konzepte erstellt. Wir sind das Team,
            das umsetzt – schnell, messbar, mit echtem Impact für Ihr Unternehmen.
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
