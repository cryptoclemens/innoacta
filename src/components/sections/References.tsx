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
  {
    name: 'RWE',
    desc: 'Energie & Versorgung',
    category: 'Energie',
    logo: '/logos/rwe.svg',
  },
]

export default function References() {
  return (
    <section className="bg-vencly-card border-t border-vencly-border py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-vencly-teal text-xs font-mono tracking-widest uppercase mb-4">
            Referenzen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Unsere Kunden
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Namhafte Unternehmen aus der DACH-Region vertrauen auf Vencly für
            ihre Venture-Clienting- und Innovationsprozesse.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-14">
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

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-white font-bold text-xl md:text-2xl mb-4">
            Werden Sie Teil des Netzwerks
          </h3>
          <p className="text-gray-400 mb-6 text-sm">
            Starten Sie noch heute mit einer kostenlosen Demo.
          </p>
          <a
            href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-vencly-teal-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all teal-glow hover:scale-105"
          >
            Demo buchen
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
