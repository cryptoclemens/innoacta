const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect width="48" height="48" rx="12" fill="#14b8a6" fillOpacity="0.1" />
        <path
          d="M24 12L36 19V29L24 36L12 29V19L24 12Z"
          stroke="#14b8a6"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M24 18L30 21.5V28.5L24 32L18 28.5V21.5L24 18Z"
          fill="#14b8a6"
          fillOpacity="0.3"
        />
        <circle cx="24" cy="24" r="3" fill="#14b8a6" />
      </svg>
    ),
    title: 'Innovation & Prozessoptimierung',
    desc: 'Systematisches Startup-Scouting, automatisiertes Matching und strukturiertes Prototypen-Management in einer Plattform.',
    points: [
      'Automatisches Startup-Scouting',
      'Intelligentes Startup-Matching',
      'Prototypen-Tracking & Reporting',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect width="48" height="48" rx="12" fill="#14b8a6" fillOpacity="0.1" />
        <path
          d="M14 24H34M14 17H26M14 31H22"
          stroke="#14b8a6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="35" cy="31" r="5" stroke="#14b8a6" strokeWidth="2" />
        <path d="M35 29V31L36.5 32.5" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Strategie, HR & Unternehmensentwicklung',
    desc: 'KI-gestützte Analyse von Markttrends, Technologie-Roadmaps und strategischer Positionierung für nachhaltiges Wachstum.',
    points: [
      'Markt- & Trendanalysen',
      'Technologie-Radar',
      'Strategische Roadmaps',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect width="48" height="48" rx="12" fill="#14b8a6" fillOpacity="0.1" />
        <rect x="12" y="20" width="10" height="16" rx="2" stroke="#14b8a6" strokeWidth="2" />
        <rect x="26" y="14" width="10" height="22" rx="2" stroke="#14b8a6" strokeWidth="2" />
        <path d="M12 36H36" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 16L17 20" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
        <path d="M31 10L31 14" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Einkauf & Entlastung',
    desc: 'Ausschreibungen nach UVgO/VOB automatisiert erstellen, veröffentlichen und auswerten – DSGVO-konform und revisionssicher.',
    points: [
      'Ausschreibungs-Automatisierung',
      'UVgO/VOB-Konformität',
      'Bieter-Kommunikation per KI',
    ],
  },
]

export default function Features() {
  return (
    <section className="bg-vencly-card py-24 px-4 border-t border-b border-vencly-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-vencly-teal text-xs font-mono tracking-widest uppercase mb-4">
            Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Drei Cluster – eine Plattform
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Vencly deckt die gesamte Wertschöpfungskette von Innovation bis
            Einkauf mit einem integrierten KI-Agenten-System ab.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-vencly-bg border border-vencly-border rounded-2xl p-8 hover:border-vencly-teal/40 transition-all duration-300 group"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-vencly-teal transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {feature.desc}
              </p>
              <ul className="space-y-2">
                {feature.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-xs text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 bg-vencly-teal rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
