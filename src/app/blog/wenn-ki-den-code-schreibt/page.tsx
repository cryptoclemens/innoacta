import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

const URL = 'https://www.innovation.today/blog/wenn-ki-den-code-schreibt/'
const TITLE = 'Wenn KI den Code schreibt: Leitplanken gegen die neue Wartungslast'
const DESCRIPTION =
  'KI-Assistenten machen Software schneller – und erzeugen Code, den niemand mehr ganz versteht. Wie man bestehende Systeme mit KI wieder beweglich macht, ohne neue Wartungslast aufzubauen.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  author: { '@type': 'Person', name: 'Clemens Pompeÿ', url: 'https://www.innovation.today/ueber-uns/' },
  publisher: { '@type': 'Organization', name: 'innovation.today', legalName: 'Vencly GmbH', url: 'https://www.innovation.today' },
  url: URL,
  datePublished: '2026-10-05',
  dateModified: '2026-10-05',
  inLanguage: 'de',
  about: [
    { '@type': 'Thing', name: 'Künstliche Intelligenz' },
    { '@type': 'Thing', name: 'Softwaremodernisierung' },
    { '@type': 'Thing', name: 'Softwarequalität' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist Wartungslast in der Software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wartungslast ist alles, was jede künftige Änderung an einem System teurer macht: Code, den niemand mehr versteht, fehlende Tests, veraltete Komponenten und Wissen, das nur in einzelnen Köpfen steckt. Sie zeigt sich daran, dass auch kleine Änderungen lange dauern und häufig Folgefehler auslösen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Erzeugen KI-Assistenten mehr Wartungslast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sie können es. KI-Assistenten erzeugen Code schneller, als ein Team ihn prüfen und verstehen kann. Ohne automatische Prüfungen im Build, ohne Tests und ohne festgehaltene Projektregeln wächst die Wartungslast deshalb schneller als früher. Mit diesen Leitplanken senken dieselben Werkzeuge sie dagegen spürbar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Neu bauen oder schrittweise erneuern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In den meisten Fällen schrittweise: Neue Teile übernehmen nach und nach die Aufgaben der alten, beide laufen eine Zeit lang parallel, und die Ergebnisse werden verglichen. KI-Assistenten machen einen Neubau zwar günstiger als früher, das Risiko eines Stichtags, an dem alles auf einmal wechselt, bleibt aber bestehen.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.innovation.today/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.innovation.today/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Wenn KI den Code schreibt', item: URL },
  ],
}

const selfCheckItems = [
  'Eine kleine Änderung braucht vom Auftrag bis zum Betrieb mehrere Wochen.',
  'An bestimmte Teile des Systems trauen sich nur noch ein oder zwei Personen heran.',
  'Ihr Team nutzt KI-Assistenten, aber niemand prüft systematisch, was sie erzeugen.',
  'Sie wissen nicht genau, welche Fremdkomponenten in Ihrer Software stecken und wie alt sie sind.',
  'Ein Käufer, Prüfer oder Investor wird bald nach dem Zustand Ihrer Software fragen.',
]

const prose =
  'prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-h2:text-xl prose-h2:mt-10 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed prose-a:text-brand-teal dark:prose-a:text-brand-mint prose-strong:text-gray-800 dark:prose-strong:text-white prose-blockquote:border-brand-teal dark:prose-blockquote:text-gray-300'

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="min-h-screen bg-brand-sky dark:bg-brand-night pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-teal dark:text-brand-mint hover:text-teal-400 text-sm mb-10 transition-colors">
            <ArrowLeft size={16} /> Alle Artikel
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-brand-teal dark:text-brand-mint bg-brand-teal/10 px-3 py-1 rounded-full">KI & Software</span>
              <span className="text-xs text-gray-500 dark:text-gray-500">5. Oktober 2026 · 8 Min. Lesezeit</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Wenn KI den Code schreibt: Leitplanken gegen die neue Wartungslast
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              KI-Assistenten schreiben in Minuten, wofür Teams früher Tage brauchten. Das macht Software schneller – und erzeugt Code, den im Team niemand mehr ganz versteht. Wer beides beherrschen will, braucht Leitplanken, die nicht verhandeln.
            </p>
          </div>

          <article className={prose}>

            <h2>Was wir mit Wartungslast meinen</h2>
            <p>
              Wartungslast ist alles, was jede künftige Änderung an einem System teurer macht: Code, den niemand mehr überblickt, fehlende Tests, veraltete Komponenten und Wissen, das nur in einzelnen Köpfen steckt. Sie entsteht nicht durch schlechte Arbeit, sondern durch Tempo. Wer unter Zeitdruck liefert, verschiebt das Aufräumen auf später – und später kommt selten.
            </p>
            <p>
              Neu ist, wie stark KI-Assistenten diese Rechnung in beide Richtungen verschieben:
            </p>
            <ul>
              <li><strong>Sie senken die Kosten, Bestehendes zu verstehen und umzubauen.</strong> Alten Code erklären lassen, fehlende Tests nachziehen, Dokumentation rekonstruieren, Module in eine neue Sprache übertragen – was früher Monate dauerte, ist heute in Wochen machbar.</li>
              <li><strong>Sie erhöhen das Tempo, mit dem neue Last entsteht.</strong> Ein Assistent erzeugt mehr Code, als ein Team sorgfältig prüfen kann. Ohne Gegenmaßnahmen wächst die Wartungslast damit schneller als je zuvor.</li>
            </ul>
            <p>
              Beides gilt gleichzeitig. Deshalb entscheidet nicht das Werkzeug über das Ergebnis, sondern das Vorgehen drumherum.
            </p>

            <h2>Messen, bevor man urteilt</h2>
            <p>
              Ob ein System träge geworden ist, lässt sich messen statt erfragen. Die Forschung hinter dem Buch „Accelerate“ hat vier Kennzahlen etabliert, die sich direkt aus Versionsverwaltung und Build-System ablesen lassen:
            </p>
            <ul>
              <li><strong>Lieferzeit:</strong> Wie lange dauert es, bis eine Änderung im Betrieb ankommt?</li>
              <li><strong>Häufigkeit:</strong> Wie oft wird ausgeliefert?</li>
              <li><strong>Fehlerquote:</strong> Wie viele Auslieferungen verursachen eine Störung?</li>
              <li><strong>Wiederherstellungszeit:</strong> Wie schnell ist eine Störung behoben?</li>
            </ul>
            <p>
              Dazu kommt die Frage, wo es hakt. Adam Tornhill hat dafür ein einfaches Prinzip beschrieben: Brennpunkte sind Stellen, die zugleich oft geändert werden und schwer verständlich sind. Beides steht in der Änderungsgeschichte. KI-Assistenten helfen anschließend, diese Stellen in Klartext zu erklären – die Bewertung bleibt beim Menschen.
            </p>

            <h2>Verhalten festhalten, bevor man ändert</h2>
            <p>
              Der gefährlichste Moment ist die erste Änderung an Code, den niemand mehr versteht. Michael Feathers hat dafür sogenannte Charakterisierungstests beschrieben: Tests, die nicht prüfen, was das System tun <em>sollte</em>, sondern festhalten, was es heute <em>tut</em>. Danach fällt jede ungewollte Abweichung sofort auf.
            </p>
            <p>
              Früher war das mühsame Handarbeit. Heute erzeugen KI-Assistenten solche Tests in großer Zahl. Die menschliche Aufgabe verschiebt sich: nicht mehr schreiben, sondern entscheiden, ob das festgehaltene Verhalten wirklich gewollt ist – oder ob es ein alter Fehler ist, auf den sich inzwischen jemand verlässt.
            </p>

            <h2>Schritt für Schritt ablösen statt alles neu bauen</h2>
            <p>
              Der große Neubau mit Stichtag ist verlockend und riskant. Martin Fowler hat das Gegenmodell beschrieben: Neue Teile übernehmen nach und nach die Aufgaben der alten, bis das Altsystem nichts mehr zu tun hat. Beide laufen eine Zeit lang parallel, und ihre Ergebnisse werden verglichen.
            </p>
            <p>
              KI-Assistenten machen jeden einzelnen Schritt günstiger: Ein Modul nach dem anderen wird übertragen, und der Vergleich der Ergebnisse zeigt, ob das neue Teil dasselbe leistet wie das alte. Ein Neubau ist dadurch weniger teuer als früher – das Risiko eines Stichtags, an dem alles auf einmal wechselt, bleibt aber.
            </p>

            <h2>Leitplanken, die nicht verhandeln</h2>
            <p>
              Die wichtigste Gegenmaßnahme gegen neue Wartungslast ist unspektakulär: automatische Prüfungen, die bei jedem Build laufen und im Zweifel abbrechen. Was eine Regel ist, gehört in eine Prüfung – nicht in ein Wiki, das niemand liest.
            </p>
            <p>Zwei Beispiele aus unserer eigenen Arbeit:</p>
            <ul>
              <li>
                <strong>Eine Umbenennung über mehr als tausend Stellen.</strong> Beim Wechsel unseres eigenen Markennamens hat eine mechanische Ersetzung einen Variablennamen im Code zerstört. Gefunden hat das kein Mensch, sondern die Typprüfung im Build – bevor die Änderung live ging.
              </li>
              <li>
                <strong>Eine Regel, die sich selbst durchsetzt.</strong> In einem unserer Projekte darf die Anwendung keine Verbindung nach draußen aufbauen, weil die verarbeiteten Daten zur kritischen Infrastruktur gehören. Diese Regel steht nicht nur in der Dokumentation: Eine Prüfung durchsucht bei jeder Änderung den Code und bricht ab, wenn jemand – Mensch oder Assistent – eine solche Verbindung einbaut.
              </li>
            </ul>
            <p>
              Gerade wenn ein Assistent Code erzeugt, sind solche Prüfungen der Unterschied zwischen Tempo und Wildwuchs.
            </p>

            <blockquote>
              <p>„KI macht Hypothesen nicht wahr. Sie macht sie schneller testbar.“ Für Software gilt dasselbe: KI macht Code nicht richtig – sie macht ihn schneller prüfbar, wenn man die Prüfungen gebaut hat.</p>
            </blockquote>

            <h2>Wissen in Dateien, nicht in Köpfen</h2>
            <p>
              Ein Teil jeder Wartungslast ist Wissen, das nur bei einzelnen Personen liegt: warum etwas so gebaut ist, welche Abkürzung gefährlich ist, welcher Fehler schon zweimal passiert ist. Wir halten dieses Wissen in Dateien direkt im Projekt fest – Regeln, Entscheidungen, Fallstricke. Jede neue Arbeitssitzung liest sie zuerst, ob ein Mensch oder ein KI-Assistent sie beginnt.
            </p>
            <p>
              Der Nebeneffekt ist für Unternehmen oft der wichtigste: Das System hängt nicht mehr an einer Person. Das zählt bei jedem Personalwechsel – und spätestens, wenn ein Käufer oder Investor nach dem Zustand der Software fragt.
            </p>

            <h2>Warum das Thema dringlicher wird</h2>
            <p>
              Veraltete Komponenten sind nicht mehr nur ein technisches Ärgernis. Mit der deutschen Umsetzung der NIS2-Richtlinie müssen deutlich mehr Unternehmen ihre Lieferkette absichern, und der Cyber Resilience Act verpflichtet Hersteller digitaler Produkte seit September 2026, ausgenutzte Schwachstellen zu melden. Wer nicht weiß, welche Fremdkomponenten in seiner Software stecken, kann diese Pflichten kaum erfüllen.
            </p>

            <h2>Was das für Entscheider heißt</h2>
            <ul>
              <li><strong>Erst messen, dann entscheiden.</strong> Die vier Kennzahlen und die Brennpunkte zeigen in wenigen Tagen, wo ein System wirklich bremst.</li>
              <li><strong>Ehrlich bleiben.</strong> Nicht jedes System muss erneuert werden. Manchmal ist es klüger, einen Teil stabil zu halten und das Neue daneben zu bauen. Wir sagen das auch, wenn es gegen ein Projekt spricht.</li>
              <li><strong>KI einsetzen, aber nicht ungeprüft.</strong> Die Werkzeuge sind stark genug, um Erneuerungen in Wochen statt in Jahren zu schaffen – wenn Tests und Prüfungen mitwachsen.</li>
              <li><strong>Leitplanken übergeben, nicht nur Code.</strong> Ein erneuertes System bleibt nur dann beweglich, wenn die Prüfungen weiterlaufen, nachdem das Projekt vorbei ist.</li>
            </ul>

            <h2>Fazit</h2>
            <p>
              KI-Assistenten haben die Kosten verschoben: Bestehende Systeme zu verstehen und zu erneuern ist so günstig wie nie. Gleichzeitig entsteht neue Wartungslast schneller als je zuvor. Wer beides zusammenbringt – messen, Verhalten festhalten, schrittweise ablösen und Regeln automatisch durchsetzen –, gewinnt die Geschwindigkeit, ohne sie mit dem nächsten Stillstand zu bezahlen.
            </p>
          </article>

          <div className="mt-12 mb-12">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">Weitere Artikel</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { href: '/blog/ki-beratung-mittelstand', cat: 'KI & Strategie', title: 'KI-Beratung im Mittelstand: Geschäftsfeldentwicklung und -validierung mit KI' },
                { href: '/blog/venture-clienting-regulierte-branchen', cat: 'Venture Clienting', title: 'Venture Clienting in regulierten Branchen' },
              ].map(a => (
                <Link key={a.href} href={a.href} className="block bg-white dark:bg-brand-card border border-gray-200 dark:border-brand-border rounded p-4 hover:border-brand-teal/40 transition-colors group">
                  <span className="text-xs font-mono text-brand-teal dark:text-brand-mint">{a.cat}</span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-brand-teal transition-colors mt-1 leading-snug">{a.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Autor */}
          <div className="pt-8 border-t border-gray-200 dark:border-brand-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal dark:text-brand-mint font-bold text-lg">C</div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Clemens Pompeÿ</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Gründer, Vencly GmbH · Umsetzung mit KI-Assistenten</div>
              </div>
            </div>
          </div>

          {/* Selbstcheck */}
          <div className="mt-12 bg-white dark:bg-brand-card border border-gray-200 dark:border-brand-border rounded p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bremst Ihre Software das Neue aus?</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Wenn Sie mindestens zwei der folgenden Aussagen mit Ja beantworten, lohnt sich ein Gespräch:</p>
            <ul className="space-y-3 mb-8">
              {selfCheckItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 size={18} className="text-brand-teal dark:text-brand-mint shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                {...calButtonProps}
                className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-night dark:bg-brand-mint dark:hover:bg-white text-white dark:text-brand-navy font-semibold px-6 py-3 rounded transition-colors cursor-pointer"
              >
                Kostenlos besprechen <ArrowRight size={16} />
              </button>
              <Link href="/strategische-umsetzung" className="inline-flex items-center gap-2 text-brand-teal dark:text-brand-mint hover:text-teal-400 font-medium transition-colors text-sm">
                Unsere Leistung: Strategische Umsetzung <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
