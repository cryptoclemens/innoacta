import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'KI-Beratung im Mittelstand: Geschäftsfeldentwicklung & -validierung mit KI',
  description:
    'Wie mittelständische Unternehmen KI konkret für Geschäftsfeldentwicklung und Geschäftsfeldvalidierung einsetzen – mit Tools, Prozess, DSGVO-Hinweisen und Praxisbeispiel.',
  alternates: { canonical: 'https://vencly.com/blog/ki-beratung-mittelstand' },
  openGraph: {
    title: 'KI-Beratung im Mittelstand: Geschäftsfeldentwicklung & -validierung mit KI',
    description:
      'KI verändert, wie Unternehmen neue Geschäftsfelder entwickeln und validieren. Was das konkret für mittelständische Unternehmen bedeutet – und wie man es umsetzt.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'KI-Beratung im Mittelstand: Geschäftsfeldentwicklung und -validierung mit KI',
  description:
    'Wie mittelständische Unternehmen KI konkret für Geschäftsfeldentwicklung, Marktvalidierung und Geschäftsfeldvalidierung einsetzen – mit Tools, DSGVO und Praxisbeispiel.',
  author: { '@type': 'Person', name: 'Clemens Pompeÿ', url: 'https://vencly.com' },
  publisher: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
  url: 'https://vencly.com/blog/ki-beratung-mittelstand',
  datePublished: '2025-05-01',
  dateModified: '2025-05-01',
  inLanguage: 'de',
  about: [
    { '@type': 'Thing', name: 'Künstliche Intelligenz' },
    { '@type': 'Thing', name: 'Mittelstand' },
    { '@type': 'Thing', name: 'Geschäftsfeldentwicklung' },
    { '@type': 'Thing', name: 'Marktvalidierung' },
    { '@type': 'Thing', name: 'Geschäftsfeldvalidierung' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie kann KI bei der Geschäftsfeldentwicklung im Mittelstand helfen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KI beschleunigt konkret drei Phasen: Marktanalyse (Signale aus tausenden Quellen in Stunden statt Wochen), Kundenvalidierung (Interviewauswertung, Mustererkennung in Feedbackdaten) und Wettbewerbsanalyse (kontinuierliches Monitoring von Marktveränderungen). Konkrete Tools: LLMs wie Claude oder GPT-4 für Interview-Auswertung, automatisierte Web-Pipelines für Markt-Monitoring, Vektor-Datenbanken für Dokumentenanalyse.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist Geschäftsfeldvalidierung und wie unterstützt KI dabei?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geschäftsfeldvalidierung bezeichnet den Prozess, mit dem ein Unternehmen prüft, ob ein neues Marktfeld tatsächlich erschließbar ist – bevor größere Ressourcen investiert werden. KI-Tools für die Marktvalidierung: automatisierte Marktgrößenschätzung aus öffentlichen Daten, LLM-gestützte Auswertung von Kundeninterviews, Analogieanalyse vergleichbarer Märkte, Risikosimulation durch strukturierte Szenarioanalyse.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist KI-gestützte Geschäftsfeldentwicklung DSGVO-konform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wenn die richtigen Maßnahmen getroffen werden. Für DACH-Unternehmen empfehlen sich: Verarbeitung personenbezogener Daten (z.B. aus Interviews) ausschließlich mit EU-Hosting oder auf eigener Infrastruktur, Einsatz von DSGVO-konformen API-Anbietern mit Auftragsverarbeitungsvertrag, keine Weitergabe vertraulicher Unternehmensdaten an Consumer-KI-Produkte ohne Datenschutzprüfung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet KI-Beratung für Geschäftsfeldentwicklung im Mittelstand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KI-gestützte Geschäftsfeldentwicklung kostet typischerweise weniger als klassische Strategieberatung, weil Analysen schneller durchgeführt werden. Ein strukturierter Prozess von der Marktanalyse bis zur go/no-go Entscheidung dauert 8–12 Wochen. Das Ergebnis ist keine Präsentation, sondern eine Entscheidung: Weitermachen, pivotieren oder stoppen.',
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
    { '@type': 'ListItem', position: 3, name: 'KI-Beratung im Mittelstand', item: 'https://vencly.com/blog/ki-beratung-mittelstand' },
  ],
}

const selfCheckItems = [
  'Wir haben eine konkrete Idee für ein neues Geschäftsfeld, aber keine Zeit für monatelange Analyse.',
  'Wir wissen nicht, ob der Markt groß genug ist – oder ob Kunden wirklich zahlen würden.',
  'Wir haben intern keine Ressourcen, die sich dem Thema vollständig widmen können.',
  'Wir wollen eine fundierte go/no-go Entscheidung – kein weiteres Konzeptpapier.',
  'Datenschutz und Vertraulichkeit sind für uns nicht verhandelbar.',
]

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
              <span className="text-xs font-mono text-vencly-teal bg-vencly-teal/10 px-3 py-1 rounded-full">KI & Strategie</span>
              <span className="text-xs text-gray-500 dark:text-gray-500">1. Mai 2025 · 9 Min. Lesezeit</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              KI-Beratung im Mittelstand: Geschäftsfeldentwicklung und -validierung mit KI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              KI verändert, wie Unternehmen neue Märkte erschließen. Für mittelständische Unternehmen bedeutet das nicht mehr Komplexität – sondern schnellere Entscheidungen mit besserer Datenbasis.
            </p>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-h2:text-xl prose-h2:mt-10 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed prose-a:text-vencly-teal prose-strong:text-gray-800 dark:prose-strong:text-white prose-blockquote:border-vencly-teal dark:prose-blockquote:text-gray-300">

            <h2>Das Problem mit klassischer Strategieberatung im Mittelstand</h2>
            <p>
              Wenn ein mittelständisches Unternehmen ein neues Geschäftsfeld erschließen will, stehen typischerweise zwei Wege zur Verfügung: monatelange Eigenrecherche durch überbelastete Mitarbeitende – oder der Einkauf einer teuren Strategieberatung, die am Ende ein Konzeptpapier liefert, das niemand umsetzt.
            </p>
            <p>
              Beide Wege haben dasselbe Problem: Sie dauern zu lang, kosten zu viel und liefern zu wenig belastbare Entscheidungsgrundlagen für eine echte Marktvalidierung. KI verändert diese Gleichung grundlegend.
            </p>

            <h2>Was KI konkret macht – und welche Tools dabei zum Einsatz kommen</h2>
            <p>
              KI ist kein Ersatz für unternehmerisches Urteil. Aber sie ist ein außerordentlich leistungsfähiges Werkzeug für die drei zeitintensivsten Phasen jeder Geschäftsfeldentwicklung:
            </p>
            <ul>
              <li>
                <strong>Marktanalyse und Signalerfassung.</strong> Automatisierte Pipelines durchsuchen Branchenberichte, Patentdatenbanken, Stellenanzeigen der Wettbewerber, Förderbekanntmachungen und Fachpublikationen – und verdichten die Ergebnisse in Stunden statt Wochen. Konkrete Tools: Web-Scraping-Pipelines kombiniert mit LLMs (Claude, GPT-4) für die inhaltliche Auswertung und Mustererkennung.
              </li>
              <li>
                <strong>Kundenvalidierung.</strong> Interviews mit potenziellen Kunden sind der wertvollste Input jeder Marktvalidierung. LLMs werten Transkripte strukturiert aus: Kaufsignale von Höflichkeiten trennen, wiederkehrende Schmerzpunkte identifizieren, Hypothesen gegen das gesammelte Feedback prüfen. Zehn Interviews in einem Tag auswerten statt in einer Woche.
              </li>
              <li>
                <strong>Wettbewerbsbeobachtung.</strong> Wer betritt gerade dasselbe Feld? Welche Startups haben zuletzt Finanzierungen bekommen? Was kommunizieren etablierte Wettbewerber über ihre Roadmap? KI-Agenten monitoring kontinuierlich relevante Quellen und liefern wöchentliche Zusammenfassungen.
              </li>
            </ul>

            <h2>Vorher / Nachher: Ein Praxisbeispiel</h2>
          </article>

          {/* Before/After visual - outside prose for full control */}
          <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <div className="text-xs font-mono font-semibold text-red-500 uppercase tracking-widest mb-3">Ohne KI-gestützte Methoden</div>
              <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">Maschinenbauer, ~200 MA, neues Servicegeschäft</div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>⏱ 6 Monate interne Analyse</li>
                <li>📄 80-seitiges Strategiepapier</li>
                <li>❌ Kein Kundenfeedback vor Entscheidung</li>
                <li>💶 ~40.000 € Beraterkosten</li>
                <li>🔄 Projekt nach 8 Monaten gestoppt</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-6">
              <div className="text-xs font-mono font-semibold text-green-600 uppercase tracking-widest mb-3">Mit KI-gestützten Methoden</div>
              <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">Vergleichbarer Maschinenbauer, ~180 MA</div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>⏱ 4 Wochen Marktanalyse + 3 Wochen Interviews</li>
                <li>📋 12 Kundeninterviews, KI-ausgewertet</li>
                <li>✅ go/no-go nach 7 Wochen</li>
                <li>💶 ~18.000 € Gesamtkosten</li>
                <li>🚀 Pivot in validiertes Nachbarfeld, heute im Markt</li>
              </ul>
            </div>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-h2:text-xl prose-h2:mt-10 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed prose-a:text-vencly-teal prose-strong:text-gray-800 dark:prose-strong:text-white prose-blockquote:border-vencly-teal dark:prose-blockquote:text-gray-300">

            <h2>Geschäftsfeldvalidierung: Hypothesen schneller töten</h2>
            <p>
              Das Ziel der Validierung ist nicht, zu beweisen, dass eine Idee funktioniert. Das Ziel ist, so schnell wie möglich herauszufinden, ob sie es <em>nicht</em> tut – bevor größere Ressourcen investiert werden.
            </p>
            <ol>
              <li>
                <strong>Marktgrößenschätzung:</strong> KI leitet aus Branchenstatistiken, Unternehmensregistern und Ausschreibungsdatenbanken belastbare Größenordnungen ab – als Grundlage für die erste Plausibilitätsprüfung, lange bevor ein Berater eine Folie dazu erstellt hätte.
              </li>
              <li>
                <strong>Annahmenprüfung:</strong> Jedes neue Geschäftsfeld basiert auf Annahmen. LLMs helfen, diese explizit zu machen und systematisch gegen verfügbare Daten zu prüfen – vor dem ersten Interview.
              </li>
              <li>
                <strong>Analogieanalyse:</strong> Wo wurde dieses Modell in anderen Märkten oder Ländern bereits realisiert? KI findet relevante Analogien in Minuten, die ein Analyst in Tagen finden würde. Ein unterschätztes Tool für die frühe Validierungsphase.
              </li>
              <li>
                <strong>Risikosimulation:</strong> Was sind die drei wahrscheinlichsten Gründe, warum dieses Feld scheitert? Strukturierte KI-Szenarioanalysen decken blinde Flecken auf – bevor das Pilotprojekt beginnt.
              </li>
            </ol>

            <blockquote>
              <p>„KI macht Hypothesen nicht wahr. Sie macht sie schneller testbar."</p>
            </blockquote>

            <h2>Datenschutz und DSGVO: Was DACH-Unternehmen wissen müssen</h2>
            <p>
              Der häufigste Einwand bei KI-gestützten Projekten im Mittelstand: „Was passiert mit unseren Daten?" Das ist eine berechtigte Frage – und eine lösbare.
            </p>
            <p>
              Für die Geschäftsfeldentwicklung gibt es zwei Datenkategorien mit unterschiedlichem Schutzbedarf:
            </p>
            <ul>
              <li><strong>Öffentliche Marktdaten</strong> (Branchenberichte, Patente, Stellenanzeigen): Kein Datenschutzproblem. Diese können uneingeschränkt mit KI-Tools verarbeitet werden.</li>
              <li><strong>Interne oder personenbezogene Daten</strong> (Kundeninterviews, Umsatzdaten, Strategie-Dokumente): Hier gelten DSGVO-Anforderungen. Empfehlung: ausschließlich Verarbeitung über API-Anbieter mit EU-Hosting und Auftragsverarbeitungsvertrag (AVV), keine Weitergabe an Consumer-KI-Produkte (ChatGPT Free, Copilot ohne Enterprise-Lizenz) ohne Datenschutzprüfung.</li>
            </ul>
            <p>
              In der Praxis bedeutet das: Anonymisierung von Interviewtranskripten vor der KI-Auswertung, Nutzung von Enterprise-APIs statt Consumer-Produkte, und eine klare Datenverarbeitungsvereinbarung mit dem Beratungspartner. Das ist kein Showstopper – es ist eine Checkliste.
            </p>

            <h2>KI als Berater-Verstärker – nicht als Berater-Ersatz</h2>
            <p>
              KI ersetzt nicht die Erfahrung, die hundert ähnliche Projekte geben, oder das Branchenurteil nach Jahrzehnten im Markt. Was KI tut: Sie hebt das Niveau der Informationsbasis auf ein Niveau, das früher nur mit großen Teams erreichbar war.
            </p>
            <ul>
              <li><strong>Iterativ statt linear.</strong> Klassische Beratung liefert am Ende ein Ergebnis. KI-gestützte Beratung arbeitet in Schleifen: Hypothese, Test, Verfeinerung. Das Ergebnis ist robuster.</li>
              <li><strong>Datenbasiert statt meinungsbasiert.</strong> Weniger „wir glauben, dass der Markt X groß ist" – mehr „auf Basis dieser Quellen schätzen wir X mit dieser Unsicherheit".</li>
              <li><strong>Transparent statt opak.</strong> Welche Quellen? Welche Annahmen? Welche Grenzen? Das ermöglicht eigene Urteilsbildung statt Abhängigkeit vom Berater.</li>
              <li><strong>Schnell statt langwierig.</strong> Was früher 12 Wochen dauerte, ist in 4–6 Wochen erreichbar.</li>
            </ul>

            <h2>Konkrete Anwendungsfälle: KI-Marktvalidierung nach Branche</h2>
            <ul>
              <li><strong>Maschinenbau & Automobilzulieferer:</strong> Neue Servicegeschäfte rund um Predictive Maintenance oder Remote Monitoring. KI analysiert Kundenbedarf und Preisbereitschaft aus öffentlichen Datenquellen – als Grundlage für Geschäftsfeldvalidierung vor dem ersten Kundengespräch.</li>
              <li><strong>Energie & Infrastruktur:</strong> Neue Felder in erneuerbarer Wärme, Energieeffizienz-Services oder Netzdigitalisierung. KI wertet Förderlandschaft und regulatorische Entwicklungen systematisch aus – ein entscheidender Vorteil für die Marktvalidierung in regulierten Märkten.</li>
              <li><strong>Handel & Dienstleistung:</strong> Expansion in angrenzende Segmente. KI-gestützte Marktanalysen ersetzen aufwendige manuelle Recherchen und liefern Entscheidungsgrundlagen in Tagen statt Monaten.</li>
              <li><strong>Produzierendes Gewerbe:</strong> Validierung neuer Zielgruppen oder Produktinnovationen. KI analysiert Kundenrezensionen und Wettbewerber-Support-Anfragen auf unerfüllte Bedürfnisse – klassische Geschäftsfeldentwicklung mit KI-Werkzeugen.</li>
            </ul>

            <h2>Wie ein KI-gestützter Validierungsprozess aussieht</h2>
            <ol>
              <li><strong>Hypothesenworkshop (1 Tag):</strong> Gemeinsame Definition des Suchfeldes, der zentralen Annahmen und der Erfolgskriterien. Was muss wahr sein, damit dieses Feld funktioniert?</li>
              <li><strong>KI-gestützte Marktanalyse (1–2 Wochen):</strong> Automatisierte Analyse von Marktgröße, Wettbewerb, regulatorischem Umfeld und Kundenverhalten. Toolset: Web-Pipelines, LLM-Auswertung, Analogieanalyse.</li>
              <li><strong>Kundeninterviews (2–3 Wochen):</strong> 12–15 strukturierte Gespräche mit potenziellen Kunden. KI-gestützte Transkript-Auswertung auf Kaufsignale und Muster.</li>
              <li><strong>Synthese und Entscheidungsvorlage (1 Woche):</strong> Klare Empfehlung: Weitermachen, pivotieren oder stoppen – mit vollständiger Begründung und Risikobewertung. DSGVO-konformes Datenhandling dokumentiert.</li>
            </ol>

            <h2>Vencly: KI-gestützte Geschäftsfeldentwicklung in der Praxis</h2>
            <p>
              Vencly setzt KI-gestützte Methoden in jedem Geschäftsfeldentwicklungsprojekt ein – nicht als Technologie-Showcase, sondern weil es bessere Entscheidungen in kürzerer Zeit ermöglicht. Das beginnt bei der datengestützten Suchfeldanalyse, geht über LLM-gestützte Auswertung von Kundeninterviews bis zur systematischen Wettbewerbsbeobachtung während des Pilotprojekts – alles DSGVO-konform und auf Basis klar definierter Datenverarbeitungsverträge.
            </p>

            <h2>Fazit: Weniger Konzept, mehr Entscheidung</h2>
            <p>
              Das Versprechen von KI-gestützter Beratung im Mittelstand ist nicht, dass KI die Arbeit übernimmt. Es ist, dass Entscheidungen über neue Geschäftsfelder schneller, günstiger und auf einer besseren Informationsbasis getroffen werden können.
            </p>
            <p>
              Wer heute noch sechs Monate für eine Marktanalyse braucht, die mit KI-Unterstützung in vier Wochen möglich wäre, verschenkt Zeit – die wertvollste Ressource jedes mittelständischen Unternehmers.
            </p>
          </article>

          <div className="mt-12 mb-12">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">Weitere Artikel</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { href: '/blog/geschaeftsfeldentwicklung-methoden', cat: 'Geschäftsfeldentwicklung', title: 'Geschäftsfeldentwicklung: Methoden, Phasen und häufige Fehler' },
                { href: '/blog/venture-client-mittelstand', cat: 'Mittelstand', title: 'Venture Client im Mittelstand: Chancen, Hürden und wie es gelingt' },
                { href: '/blog/was-ist-venture-clienting', cat: 'Venture Clienting', title: 'Was ist Venture Clienting? Definition, Prozess und Praxisbeispiele' },
                { href: '/blog/startup-zusammenarbeit-venture-client', cat: 'Venture Clienting', title: 'Startup-Zusammenarbeit als Chance in wirtschaftlichen Krisenzeiten' },
              ].map(a => (
                <Link key={a.href} href={a.href} className="block bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-xl p-4 hover:border-vencly-teal/40 transition-colors group">
                  <span className="text-xs font-mono text-vencly-teal">{a.cat}</span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-vencly-teal transition-colors mt-1 leading-snug">{a.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Author */}
          <div className="pt-8 border-t border-gray-200 dark:border-vencly-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-vencly-teal/20 flex items-center justify-center text-vencly-teal font-bold text-lg">C</div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Clemens Pompeÿ</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Gründer, Vencly GmbH · KI-gestützte Geschäftsfeldentwicklung im Mittelstand</div>
              </div>
            </div>
          </div>

          {/* Self-Check CTA */}
          <div className="mt-12 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ist Ihr Geschäftsfeld bereit zur Validierung?</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Wenn Sie mindestens 3 der folgenden Aussagen mit Ja beantworten, lohnt sich ein Gespräch:</p>
            <ul className="space-y-3 mb-8">
              {selfCheckItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 size={18} className="text-vencly-teal shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                {...calButtonProps}
                className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Kostenlos besprechen <ArrowRight size={16} />
              </button>
              <Link href="/geschaeftsfeldentwicklung" className="inline-flex items-center gap-2 text-vencly-teal hover:text-teal-400 font-medium transition-colors text-sm">
                Unsere Leistung: Geschäftsfeldentwicklung <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
