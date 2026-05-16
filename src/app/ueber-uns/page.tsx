import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Über uns – Clemens Pompeÿ & Vencly',
  description:
    'Clemens Pompeÿ ist Gründer von Vencly. Mit über 40 realisierten Venture-Client-Projekten und tiefer Branchenkenntnis in Energie, Infrastruktur und öffentlichem Sektor begleitet er Konzerne und Mittelstand bei der Entwicklung neuer Geschäftsfelder.',
  alternates: { canonical: 'https://vencly.com/ueber-uns' },
  openGraph: {
    title: 'Über Clemens Pompeÿ – Vencly',
    description:
      'Gründer, Unternehmer, Venture-Client-Experte. Clemens Pompeÿ überträgt Startup-Logik auf etablierte Unternehmen.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Clemens Pompeÿ',
  jobTitle: 'Gründer & Geschäftsführer',
  worksFor: {
    '@type': 'Organization',
    name: 'Vencly GmbH',
    url: 'https://vencly.com',
  },
  url: 'https://vencly.com/ueber-uns',
  description:
    'Clemens Pompeÿ ist Gründer von Vencly und Experte für Venture Clienting und Geschäftsfeldentwicklung mit über 40 realisierten Projekten in Energie, Infrastruktur und öffentlichem Sektor.',
  knowsAbout: [
    'Venture Clienting',
    'Geschäftsfeldentwicklung',
    'Startup-Integration',
    'Innovationsmanagement',
    'Strategische Transformation',
  ],
  sameAs: [
    'https://medium.com/@clemens.pompey',
    'https://www.linkedin.com/in/clemens-pompey',
  ],
}

const stations = [
  {
    period: '2022 – heute',
    role: 'Gründer & Geschäftsführer',
    org: 'Vencly GmbH',
    desc: 'Aufbau von Vencly als Beratungsunternehmen für Venture Clienting und Geschäftsfeldentwicklung. Über 40 realisierte Projekte in Energie, Infrastruktur, öffentlichem Sektor und Mittelstand.',
  },
  {
    period: '2018 – 2022',
    role: 'Venture Client & Innovation',
    org: 'Konzernumfeld Energie / Infrastruktur',
    desc: 'Aufbau und Betrieb strukturierter Venture-Client-Programme. Entwicklung und Erprobung der Methodik, die heute die Grundlage von Vencly bildet.',
  },
  {
    period: 'Früher',
    role: 'Unternehmerische Erfahrung',
    org: 'Eigene Gründungen & operative Rollen',
    desc: 'Mehrjährige Erfahrung als Gründer und in operativer Verantwortung – die Basis für den unternehmerischen Blick, den Vencly in jedes Projekt einbringt.',
  },
]

const expertise = [
  'Venture Clienting',
  'Geschäftsfeldentwicklung',
  'Marktvalidierung & Business Model Design',
  'Startup-Scouting & -Integration',
  'Regulierte Branchen (Energie, Infrastruktur, öffentlicher Sektor)',
  'KI-gestützte Marktanalyse',
  'Strategische Umsetzung & operative Projektleitung',
]

export default function UeberUnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-14">
            <span className="section-eyebrow mb-4">Über Vencly</span>
            <h1 className="font-display text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mt-3 mb-6">
              Clemens Pompeÿ
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Gründer von Vencly. Unternehmer, Venture-Client-Experte und Sparringspartner für Unternehmen,
              die neue Geschäftsfelder erschließen wollen — mit Methode, Tempo und unternehmerischer Haltung.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="border-l-2 border-vencly-teal pl-5 mb-14">
            <p className="font-display text-xl md:text-2xl font-normal text-gray-800 dark:text-gray-200 leading-snug italic">
              „Ich glaube, dass etablierte Unternehmen die Gründerlogik nicht imitieren müssen —
              sie müssen sie nur selektiv einsetzen. Genau das ist Vencly."
            </p>
            <footer className="mt-3 text-sm text-vencly-teal font-mono tracking-widest uppercase">
              Clemens Pompeÿ
            </footer>
          </blockquote>

          {/* Expertise */}
          <section className="mb-14">
            <h2 className="font-display text-xl font-normal text-gray-900 dark:text-white mb-5">Expertise</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {expertise.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-vencly-teal flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Werdegang */}
          <section className="mb-14">
            <h2 className="font-display text-xl font-normal text-gray-900 dark:text-white mb-6">Werdegang</h2>
            <div className="space-y-6">
              {stations.map((s) => (
                <div key={s.period} className="flex gap-5">
                  <div className="flex-shrink-0 w-[90px] text-xs font-mono text-vencly-teal pt-0.5">{s.period}</div>
                  <div className="border-l border-gray-200 dark:border-vencly-border pl-5 pb-2">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{s.role}</p>
                    <p className="text-xs text-vencly-teal mb-1">{s.org}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className="mb-14 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-7">
            <h2 className="font-display text-xl font-normal text-gray-900 dark:text-white mb-4">Der Vencly-Ansatz</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              Vencly ist kein klassisches Beratungshaus. Wir übernehmen operative Verantwortung, arbeiten mit
              unternehmerischer Haltung und liefern messbare Ergebnisse — keine weiteren Konzeptpapiere.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Die Kernthese: Startups bauen neue Märkte nicht durch überlegene Ressourcen, sondern durch
              überlegene Lerngeschwindigkeit. Hypothesen schnell testen, schnell entscheiden, schnell skalieren —
              das ist die Logik, die Vencly in Konzerne und den Mittelstand überträgt.
            </p>
          </section>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-vencly-blue hover:bg-vencly-blue-dark text-white font-semibold px-6 py-3 rounded transition-colors text-sm blue-glow"
            >
              Erstgespräch vereinbaren <ArrowRight size={15} />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-vencly-teal/40 hover:border-vencly-teal text-vencly-teal hover:bg-vencly-teal/5 font-semibold px-6 py-3 rounded transition-colors text-sm"
            >
              Artikel von Clemens lesen <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
