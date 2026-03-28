import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const references = [
  {
    name: 'SWM',
    desc: 'Stadtwerke München',
    category: 'Energie & Versorgung',
    logo: '/logos/swm.svg',
  },
  {
    name: 'MVG',
    desc: 'Münchner Verkehrsgesellschaft',
    category: 'ÖPNV & Smart City',
    logo: '/logos/mvg.svg',
  },
  {
    name: 'Toll Collect',
    desc: 'Mauterhebung Deutschland',
    category: 'Mobility & Infrastruktur',
    logo: '/logos/toll-collect.svg',
  },
]

export default function References() {
  return (
    <section id="referenzen" className="bg-vencly-card border-t border-vencly-border py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-vencly-teal text-xs font-mono tracking-widest uppercase mb-4">
            Referenzen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Aus der Praxis
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Namhafte Unternehmen aus der DACH-Region vertrauen auf Vencly für
            strategische Geschäftsfeldentwicklung und Venture-Clienting-Projekte.
          </p>
        </div>

        {/* Anonymous reference card */}
        <div className="mb-10 rounded-2xl border p-8 md:p-10" style={{ backgroundColor: '#EEF2F8', borderColor: '#B5C8E4' }}>
          <div className="mb-4">
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: '#1A2B4A' }}>
              Energie · Infrastruktur
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#1A2B4A' }}>
            Neues Geschäftsfeld Tiefengeothermie<br />
            für einen deutschen Energieversorger
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#3A4A6A' }}>
            Für einen großen deutschen Energieversorger haben wir die strategische und
            wirtschaftliche Tragfähigkeit eines neuen Geschäftsfelds im Bereich erneuerbare
            Wärme entwickelt – von der Technologiebewertung über Marktanalysen bis zur
            Stakeholder-Kommunikation mit kommunalen Versorgern.
          </p>
          <div className="flex flex-wrap gap-4 text-xs" style={{ color: '#3A4A6A' }}>
            <span><strong>Branche:</strong> Energie / Infrastruktur</span>
            <span>·</span>
            <span><strong>Laufzeit:</strong> 6 Monate</span>
            <span>·</span>
            <span><strong>Format:</strong> Strategisches Begleitmandat</span>
          </div>
        </div>

        {/* Logo grid */}
        <div className="grid gap-6 sm:grid-cols-3 mb-6">
          {references.map((ref) => (
            <div
              key={ref.name}
              className="bg-vencly-bg border border-vencly-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-vencly-teal/30 transition-colors"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4 bg-white rounded-xl px-4 py-2">
                <Image
                  src={ref.logo}
                  alt={ref.name}
                  width={120}
                  height={48}
                  className="object-contain max-h-12"
                />
              </div>
              <p className="text-white font-bold mb-1">{ref.name}</p>
              <p className="text-gray-500 text-sm mb-2">{ref.desc}</p>
              <span className="text-xs text-vencly-teal bg-vencly-teal/10 px-2 py-0.5 rounded-full">
                {ref.category}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mb-14">
          Weitere Referenzen auf Anfrage.
        </p>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-white font-bold text-xl md:text-2xl mb-4">
            Bereit für das nächste Geschäftsfeld?
          </h3>
          <p className="text-gray-400 mb-6 text-sm">
            Starten Sie mit einem unverbindlichen Erstgespräch.
          </p>
          <a
            href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-vencly-teal-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all teal-glow hover:scale-105"
          >
            Jetzt Termin vereinbaren
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
