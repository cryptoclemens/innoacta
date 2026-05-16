import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'Was ist Venture Clienting? Definition, Prozess & Beispiele',
  description:
    'Venture Clienting einfach erklärt: Definition, Unterschied zu Corporate Venture Capital, der 90-Tage-Prozess und Praxisbeispiele aus Energie, Infrastruktur und Mittelstand.',
  alternates: { canonical: 'https://vencly.com/blog/was-ist-venture-clienting' },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Was ist Venture Clienting? Definition, Prozess und Praxisbeispiele',
  description: 'Venture Clienting einfach erklärt: Definition, Unterschied zu CVC, der 90-Tage-Prozess und Praxisbeispiele.',
  author: { '@type': 'Person', name: 'Clemens Pompeÿ', url: 'https://vencly.com/ueber-uns' },
  publisher: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
  url: 'https://vencly.com/blog/was-ist-venture-clienting',
  datePublished: '2025-02-10',
  dateModified: '2026-05-16',
  inLanguage: 'de',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist Venture Clienting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Venture Clienting ist ein Ansatz, bei dem ein etabliertes Unternehmen gezielt externe Innovationspartner – Startups, Scaleups oder innovative Mittelständler – als zahlende Kunden einbindet, um konkrete Herausforderungen schnell und risikoarm zu lösen. Das Unternehmen wird zum "Venture Client" – also zum ersten oder frühen Kunden des Innovationspartners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Venture Clienting und Corporate Venture Capital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Corporate Venture Capital (CVC) bedeutet, dass ein Unternehmen Kapital in ein Startup investiert und Anteile erwirbt. Venture Clienting hingegen bedeutet, dass das Unternehmen das Startup als Dienstleister kauft – ohne Beteiligung, ohne Kapitaleinsatz über das Pilotbudget hinaus und mit einer klaren go/no-go Entscheidung nach 90 Tagen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wer hat Venture Clienting erfunden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das Modell wurde maßgeblich von Gregor Gimmy und der BMW Startup Garage geprägt, die als erste Venture Client Unit gilt. Heute setzen Unternehmen weltweit – von DAX-Konzernen bis zu mittelständischen Unternehmen und öffentlichen Institutionen – auf Venture Clienting als strukturierten Innovationsansatz.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vencly.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vencly.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Was ist Venture Clienting?', item: 'https://vencly.com/blog/was-ist-venture-clienting' },
  ],
}

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link href="/blog" className="inline-flex items-center gap-2 text-vencly-teal hover:text-teal-400 text-sm mb-10 transition-colors">
            <ArrowLeft size={16} /> Alle Artikel
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-vencly-teal bg-vencly-teal/10 px-3 py-1 rounded-full">Venture Clienting</span>
              <span className="text-xs text-gray-500 dark:text-gray-500">10. Februar 2025 · 6 Min. Lesezeit</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Was ist Venture Clienting? Definition, Prozess und Praxisbeispiele
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Venture Clienting ist mehr als ein Buzzword. Hier erklären wir, wie der Prozess wirklich funktioniert, was ihn von CVC unterscheidet und wie ein 90-Tage-Pilotprojekt aussieht.
            </p>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-h2:text-xl prose-h2:mt-10 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed prose-a:text-vencly-teal prose-strong:text-gray-800 dark:prose-strong:text-white prose-blockquote:border-vencly-teal dark:prose-blockquote:text-gray-300">

            <h2>Venture Clienting: Die Definition</h2>
            <p>
              Venture Clienting bezeichnet den strukturierten Ansatz, bei dem ein etabliertes Unternehmen gezielt externe Innovationspartner als zahlende Kunden einbindet. Das Unternehmen wird zum <strong>„Venture Client"</strong> – also zum ersten oder frühen Kunden eines Startups, Scaleups oder innovativen Mittelständlers.
            </p>
            <p>
              Das Ziel ist nicht, Startups zu fördern oder Beteiligungen aufzubauen. Das Ziel ist, konkrete Herausforderungen des etablierten Unternehmens schneller und günstiger zu lösen – indem man die beste verfügbare externe Lösung kauft, anstatt sie selbst zu entwickeln.
            </p>

            <h2>Venture Clienting vs. Corporate Venture Capital: Der Unterschied</h2>
            <p>
              Die häufigste Verwechslung: Venture Clienting und Corporate Venture Capital (CVC) klingen ähnlich, funktionieren aber grundlegend anders.
            </p>
            <ul>
              <li><strong>Corporate Venture Capital (CVC):</strong> Das Unternehmen investiert Kapital in ein Startup und erhält Unternehmensanteile. Ziel ist Rendite und strategischer Zugang. Typischer Zeithorizont: 5–10 Jahre.</li>
              <li><strong>Venture Clienting:</strong> Das Unternehmen kauft eine Dienstleistung oder ein Produkt. Kein Kapitaleinsatz über das Pilotbudget hinaus, keine Anteile, keine langfristige Bindung. Entscheidung nach 90 Tagen.</li>
            </ul>
            <p>
              Venture Clienting ist der schnellere, risikoärmere und operativ nützlichere Ansatz für Unternehmen, die konkrete Probleme lösen wollen – nicht für solche, die einen Investitionsportfolio aufbauen möchten.
            </p>

            <h2>Der Venture-Clienting-Prozess: 4 Phasen in 90 Tagen</h2>
            <p>
              Ein strukturierter Venture-Clienting-Prozess folgt vier Phasen:
            </p>
            <ol>
              <li>
                <strong>Problemdefinition (1–2 Wochen):</strong> Was genau soll gelöst werden? Welche messbaren Erfolgskriterien gibt es? Wer sind die internen Entscheider? Ohne scharfe Problemdefinition führt jedes Scouting ins Leere.
              </li>
              <li>
                <strong>Strukturiertes Scouting (3–4 Wochen):</strong> Systematische Suche nach Anbietern – über Datenbanken, Netzwerke, Branchenrecherche. Nicht nur Startups, sondern alle relevanten Anbieter. Kurzliste von 5–10 Kandidaten.
              </li>
              <li>
                <strong>Pilotprojekt (6–8 Wochen):</strong> Klarer Testauftrag mit definierten Kriterien. Ein echter Auftrag – nicht ein unverbindliches „Proof of Concept". Der Anbieter liefert, das Unternehmen zahlt und bewertet.
              </li>
              <li>
                <strong>go/no-go Entscheidung (1–2 Wochen):</strong> Basierend auf den Pilotdaten: Weitermachen, Konditionen anpassen oder beenden. Diese Disziplin schützt vor dem häufigsten Fehler – dem „Piloten, der nie endet".
              </li>
            </ol>

            <h2>Praxisbeispiele: Wo Venture Clienting funktioniert</h2>
            <p>
              Venture Clienting ist kein Konzept für Tech-Unternehmen allein. Die interessantesten Anwendungsfälle liegen in traditionellen Branchen:
            </p>
            <ul>
              <li><strong>Energie & Infrastruktur:</strong> Aufbau von Venture Client Units bei Energieversorgern, die neue Dienstleister für erneuerbare Wärme, Netzdigitalisierung oder Kundenservice-Automatisierung suchen.</li>
              <li><strong>Öffentlicher Sektor:</strong> Kommunen und Behörden nutzen Venture Clienting, um digitale Lösungen im Rahmen des Vergaberechts zu testen – strukturiert, nachvollziehbar, compliant.</li>
              <li><strong>Produzierendes Gewerbe:</strong> Maschinenbauer und Automobilzulieferer nutzen Venture Clienting für Predictive-Maintenance-Lösungen, KI-basierte Qualitätskontrolle und Prozessautomatisierung.</li>
            </ul>

            <h2>Die wichtigste Erkenntnis: Es muss kein Startup sein</h2>
            <p>
              Der häufigste Fehler beim Aufbau eines Venture-Client-Programms: Man sucht ausschließlich nach Startups. Das schränkt den Suchraum unnötig ein.
            </p>
            <p>
              Die relevante Frage ist: <strong>Wer hat die beste Lösung für unser Problem?</strong> Das kann ein zwei Jahre altes Startup sein. Oder ein Scaleup mit 200 Mitarbeitern. Oder ein mittelständischer Nischenanbieter, der das Problem seit zehn Jahren löst. Wer nur nach Startups sucht, findet nicht zwingend die beste Lösung – sondern nur die jüngste.
            </p>

            <h2>Wie Vencly den Prozess begleitet</h2>
            <p>
              Vencly übernimmt den vollständigen Venture-Clienting-Prozess für Unternehmen, die keine eigene Venture-Client-Unit aufbauen wollen oder können. Das beginnt mit der Problemdefinition – gemeinsam mit dem internen Team –, geht über ein strukturiertes Scouting über alle relevanten Anbietertypen hinweg bis zur Vorbereitung und Begleitung des Pilotprojekts.
            </p>
            <p>
              Aus über 40 Projekten in Energie, Infrastruktur und Mittelstand hat Vencly einen Prozess entwickelt, der für schnelle Ergebnisse optimiert ist: von der ersten Problemdefinition bis zur go/no-go Entscheidung in 90 Tagen. Kein Overhead, kein Konzeptpapier – sondern ein Anbieter, der liefert, und eine Entscheidung, die auf echten Daten basiert.
            </p>
          </article>

          <div className="mt-12 mb-12">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">Weitere Artikel</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { href: '/blog/venture-client-mittelstand', cat: 'Mittelstand', title: 'Venture Client im Mittelstand: Chancen, Hürden und wie es gelingt' },
                { href: '/blog/startup-zusammenarbeit-venture-client', cat: 'Venture Clienting', title: 'Startup-Zusammenarbeit als Chance in wirtschaftlichen Krisenzeiten' },
                { href: '/blog/venture-clienting-regulierte-branchen', cat: 'Praxis', title: 'Venture Clienting in regulierten Branchen: Energie, Infrastruktur, öffentlicher Sektor' },
                { href: '/blog/geschaeftsfeldentwicklung-methoden', cat: 'Geschäftsfeldentwicklung', title: 'Geschäftsfeldentwicklung: Methoden, Phasen und häufige Fehler' },
              ].map(a => (
                <Link key={a.href} href={a.href} className="block bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-4 hover:border-vencly-teal/40 transition-colors group">
                  <span className="text-xs font-mono text-vencly-teal">{a.cat}</span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-vencly-teal transition-colors mt-1 leading-snug">{a.title}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-vencly-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-vencly-teal/20 flex items-center justify-center text-vencly-teal font-bold text-lg">C</div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Clemens Pompeÿ</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Gründer, Vencly GmbH · Über 40 Venture-Clienting-Projekte</div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Venture Clienting konkret umsetzen?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Sprechen Sie mit uns – unverbindlich, ohne Pitch-Deck.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                {...calButtonProps}
                className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded transition-colors cursor-pointer"
              >
                Erstgespräch vereinbaren <ArrowRight size={16} />
              </button>
              <Link href="/venture-clienting" className="inline-flex items-center gap-2 text-vencly-teal hover:text-teal-400 font-medium transition-colors">
                Unsere Venture-Clienting-Leistung <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
