import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'KI-Verhandlungscoaching für die Käuferseite – der Souffleur-Ansatz',
  description:
    'Gong, Clari und Co. coachen Verkäufer. Souffleur coacht die Gegenseite: lokal, DSGVO-konform, cheat-sheet-gesteuert. Warum KI-Coaching in Verhandlungen bisher einseitig war – und wie sich das ändert.',
  keywords: ['KI Verhandlung', 'Souffleur', 'Verhandlungscoach macOS', 'BYOK', 'Whisper lokal', 'DSGVO Verhandlung'],
  alternates: { canonical: 'https://vencly.com/blog/souffleur-ki-verhandlungscoach' },
  openGraph: {
    title: 'KI-Verhandlungscoaching für die Käuferseite | Vencly Blog',
    description: 'Warum KI-Coaching in Verhandlungen bisher nur Verkäufern half – und wie Souffleur die Lücke auf der Käuferseite schließt.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'KI-Verhandlungscoaching für die Käuferseite – der Souffleur-Ansatz',
  description:
    'Gong, Clari und Co. coachen Verkäufer. Souffleur coacht die Gegenseite: lokal, DSGVO-konform, cheat-sheet-gesteuert.',
  author: { '@type': 'Person', name: 'Clemens Pompeÿ', url: 'https://vencly.com/ueber-uns' },
  publisher: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
  url: 'https://vencly.com/blog/souffleur-ki-verhandlungscoach',
  datePublished: '2026-06-05',
  dateModified: '2026-06-05',
  inLanguage: 'de',
  about: [
    { '@type': 'Thing', name: 'KI Verhandlungscoach' },
    { '@type': 'Thing', name: 'Souffleur' },
    { '@type': 'Thing', name: 'Datenschutz' },
    { '@type': 'Thing', name: 'BYOK' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist Souffleur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Souffleur ist ein privacy-first KI-Verhandlungscoach für macOS. Die Desktop-App hört in Echtzeit in Online-Meetings zu, transkribiert das Gespräch vollständig lokal via Whisper und gleicht den Gesprächsverlauf mit einem vorbereiteten Spickzettel ab – ohne Cloud-Recording, ohne Audiodateien auf der Festplatte, DSGVO-konform und mit eigenem API-Key (BYOK).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie unterscheidet sich Souffleur von Gong oder Clari?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gong, Clari und Clari Copilot sind auf Verkäufer ausgerichtet: Sie helfen Vertriebsteams, Deals zu gewinnen, Pipelines zu managen und Gesprächsqualität zu messen. Souffleur richtet sich an die Gegenseite – Einkäufer, Juristen, Berater und Gründer, die Verträge, Advisoryvereinbarungen oder Term Sheets verhandeln. Souffleur läuft außerdem vollständig lokal: kein Cloud-Recording, kein geteilter Datenspeicher, keine SaaS-Subscription für das Hosting Ihrer Gesprächsinhalte.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist Souffleur DSGVO-konform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Souffleur verarbeitet Audio ausschließlich im Arbeitsspeicher des lokalen Geräts. Es werden keine Audiodaten auf Festplatte geschrieben, keine Inhalte an externe Server übertragen und keine Gesprächsdaten gespeichert oder geteilt. Der verwendete API-Key für Anthropic Claude wird verschlüsselt im macOS Keychain gespeichert. Nutzende bringen ihren eigenen Schlüssel mit (BYOK) – Vencly hat keinen Zugriff.',
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'KI-Verhandlungscoaching für die Käuferseite – der Souffleur-Ansatz',
      item: 'https://vencly.com/blog/souffleur-ki-verhandlungscoach',
    },
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
              <span className="text-xs font-mono text-vencly-teal bg-vencly-teal/10 px-3 py-1 rounded-full">KI & Verhandlung</span>
              <span className="text-xs text-gray-500 dark:text-gray-500">5. Juni 2026 · 8 Min. Lesezeit</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              KI-Verhandlungscoaching für die Käuferseite – der Souffleur-Ansatz
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Gong, Clari Copilot und Chorus haben Verkäufern KI-Coaching gebracht. Die Gegenseite – Einkäufer, Gründer,
              Berater, die Verträge verhandeln – ging bisher leer aus. Souffleur schließt diese Lücke: lokal,
              DSGVO-konform, cheat-sheet-gesteuert.
            </p>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-h2:text-xl prose-h2:mt-10 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed prose-a:text-vencly-teal prose-strong:text-gray-800 dark:prose-strong:text-white prose-blockquote:border-vencly-teal dark:prose-blockquote:text-gray-300">

            <h2>Warum KI-Coaching in Verhandlungen bisher einseitig war</h2>
            <p>
              Wenn Vertriebsteams ein Kundengespräch führen, läuft im Hintergrund oft eine Plattform wie Gong oder
              Clari Copilot mit. Die KI transkribiert, analysiert Gesprächsmuster, erkennt Einwände und schlägt dem
              Vertriebler in Echtzeit vor, wie er auf Einwände reagieren soll. Deals werden getrackt, Conversion-Raten
              optimiert, Gesprächsqualität bewertet.
            </p>
            <p>
              Das ist leistungsstarke Technologie – aber sie hat eine blinde Seite: Sie arbeitet für Verkäufer.
              Die Person auf der anderen Seite des Tisches, die einen Beratervertrag, einen Softwarelizenzvertrag oder
              eine Investorenvereinbarung verhandelt, hat kein Äquivalent. Sie sitzt dem KI-unterstützten Vertrieb
              gegenüber und ist strukturell im Nachteil.
            </p>
            <p>
              Genau hier setzt Souffleur an.
            </p>

            <h2>Was Souffleur macht – und was es bewusst nicht macht</h2>
            <p>
              Souffleur ist eine macOS-Desktop-App, die während eines Online-Meetings mitläuft. Sie hört über den
              System-Audio-Stream zu (via BlackHole), transkribiert das Gespräch vollständig lokal auf dem Gerät
              des Nutzers und gleicht den Gesprächsverlauf in Echtzeit mit einem vorbereiteten Spickzettel ab.
            </p>
            <p>
              Der Spickzettel – eine Checkliste, eine Agenda, ein Forderungskatalog – wird vor dem Meeting geladen.
              Souffleur verfolgt, welche Punkte bereits besprochen, vereinbart, geparkt oder abgelehnt wurden.
              Nicht als Erinnerungshilfe nach dem Meeting, sondern live, während das Gespräch läuft.
            </p>
            <p>
              Was Souffleur <em>nicht</em> macht: Es gibt keine unsolicited Empfehlungen, es schlägt keine
              Verhandlungstaktiken vor und es bewertet das Gespräch nicht. Souffleur ist kein Assistent, der
              mitredet – sondern ein Instrument, das den Überblick sichert, damit der Verhandelnde seinen eigenen
              Überblick behält.
            </p>

            <h2>Das Datenschutzproblem bestehender Meeting-Tools</h2>
            <p>
              Wer KI-gestützte Meeting-Assistenten wie Otter.ai, Fireflies oder Notion AI kennt, weiß: Diese Tools
              funktionieren, indem sie Audio in die Cloud übertragen, dort transkribieren und die Ergebnisse speichern.
              Das ist für interne Team-Meetings oft vertretbar. Für Vertragsverhandlungen, Compliance-Gespräche oder
              Due-Diligence-Calls ist es ein Problem.
            </p>
            <p>
              Verhandlungen enthalten vertrauliche Informationen: Preise, Konditionen, strategische Positionen,
              Kompromissbereitschaft. Die Gegenpartei hat dem Einsatz einer aufzeichnenden KI in aller Regel nicht
              zugestimmt. Und selbst wenn sie es hätte – wer kontrolliert, was der Cloud-Anbieter mit den Inhalten macht?
            </p>
            <p>
              Souffleur löst dieses Problem durch ein anderes Architekturprinzip: Es gibt keine Cloud.
              Das Audio verlässt das Gerät nicht. Whisper läuft lokal. Die einzige externe Verbindung, die
              Souffleur aufbaut, ist der API-Call an Anthropic Claude – und auch dieser geht über den eigenen
              API-Key des Nutzers, nicht über einen geteilten Souffleur-Account. Weder Vencly noch ein
              Drittanbieter sieht Gesprächsinhalte.
            </p>

            <h2>Die BYOK-Entscheidung und ihre Konsequenzen</h2>
            <p>
              BYOK – Bring Your Own Key – ist keine technische Spielerei, sondern eine Designentscheidung mit
              datenschutzrechtlicher Bedeutung. Wenn Souffleur über den eigenen Anthropic-Key des Nutzers
              operiert, ist Vencly kein Auftragsverarbeiter im Sinne der DSGVO für den KI-Inhalt des Gesprächs.
              Die Datenbeziehung besteht direkt zwischen dem Nutzer und Anthropic – und Anthropic bietet
              EU-API-Endpunkte sowie einen Auftragsverarbeitungsvertrag (AVV nach Art. 28 DSGVO) an.
            </p>
            <p>
              Für Solo-Gründer und Berater, die mit Unternehmenskunden oder Investoren verhandeln, ist das ein
              relevanter Unterschied. Sie können Souffleur einsetzen, ohne eine neue Datenverarbeitungsbeziehung
              mit einem SaaS-Anbieter zu begründen – was Procurement-Prozesse vereinfacht und
              datenschutzrechtliche Risiken minimiert.
            </p>

            <h2>Für wen ist Souffleur gedacht?</h2>
            <p>
              Die primäre Zielgruppe sind Solo-Gründer und Einzelberater, die regelmäßig komplexe Vertragsverhandlungen
              führen: Advisoryvereinbarungen, Softwarelizenzverträge, Dienstleistungsrahmenverträge, Term Sheets.
              Gespräche, bei denen viele Punkte in kurzer Zeit besprochen werden – und bei denen es darauf ankommt,
              am Ende des Calls zu wissen, was vereinbart wurde und was noch offen ist.
            </p>
            <p>
              Sekundär richtet sich Souffleur an Inhouse-Counsel, die Junior-Kollegen auf Verhandlungen vorbereiten
              oder selbst unterstützen wollen. Nicht als Ersatz für juristische Expertise, sondern als
              strukturierendes Werkzeug für den Verhandlungsablauf.
            </p>
            <p>
              Außerhalb des Scope: Verkäufer in aktiven Deal-Cycles, Konferenzteilnehmer, die nicht verhandeln,
              und Teams, die kollaborative Meeting-Analytics benötigen. Dafür gibt es bessere Werkzeuge.
            </p>

            <h2>Technische Grundlage: Tauri 2, Whisper und der Coaching-Loop</h2>
            <p>
              Souffleur basiert auf <strong>Tauri 2</strong> – einem Rust-basierten Framework für native
              macOS-Desktop-Apps mit schlankem Ressourcenverbrauch. Das Rust-Backend übernimmt den Audio-Capture
              über BlackHole (System-Audio-Routing) und leitet den Stream in Echtzeit an die lokale
              Whisper-Implementierung.
            </p>
            <p>
              Die Transkription läuft in Chunks: Souffleur übergibt kurze Audiofenster an Whisper, erhält Text
              und führt diesen in einen laufenden Gesprächspuffer zusammen. Dieser Puffer wird regelmäßig
              gegen den geladenen Spickzettel abgeglichen – durch Claude, der bewertet, welche Punkte
              adressiert wurden und wie der aktuelle Status ist.
            </p>
            <p>
              Das Frontend ist in React mit shadcn/ui aufgebaut und zeigt eine Echtzeit-Statusansicht des
              Spickzettels: welche Punkte sind offen (⬜), besprochen (🔵), vereinbart (✅), geparkt (⏸) oder
              abgelehnt (❌). Nach dem Meeting generiert Souffleur ein anonymisiertes Transkript, eine
              strukturierte Zusammenfassung und – optional – einen Prompt für den Export in ein Vertragsdokument.
            </p>

            <h2>Entwicklungsstand und Roadmap</h2>
            <p>
              Souffleur befindet sich aktuell in der frühen Entwicklungsphase. Die Monorepo-Struktur mit allen
              Core-Packages ist etabliert, die Cross-Plattform-TypeScript-Schicht (Transcription, Coach, Parser,
              Storage) ist vollständig testbar. Die native macOS-Schicht (Audio-Capture via BlackHole,
              Keychain-Integration, App-Bundle) befindet sich im Aufbau.
            </p>
            <p>
              Das MVP-Ziel: Ein einzelner Nutzer kann eine vollständige Session end-to-end auf seinem Mac
              durchführen – Spickzettel laden, Meeting führen, Status-Updates in Echtzeit sehen,
              Summary exportieren. Zielgenauigkeit beim Punkt-Matching: über 70 Prozent.
            </p>
            <p>
              Souffleur wird als <strong>Apache-2.0-lizenziertes Open-Source-Projekt</strong> entwickelt und
              ohne Apple Developer Account distribuiert – als unsigniertes App-Bundle, bei dem Nutzer einmalig
              die macOS-Quarantäne aufheben.
            </p>

            <blockquote>
              <p>
                „Die beste Verhandlung ist die, bei der man am Ende weiß, was man vereinbart hat – und
                nicht drei Tage später im E-Mail-Thread nachliest."
              </p>
            </blockquote>

            <h2>Fazit</h2>
            <p>
              KI-Coaching in Verhandlungen war bisher eine Einbahnstraße. Werkzeuge wie Gong, Clari und Chorus
              haben den Vertrieb professionalisiert – die Gegenseite blieb ohne Unterstützung.
            </p>
            <p>
              Souffleur kehrt diese Asymmetrie um: privacy-first, BYOK, lokal transkribiert, cheat-sheet-gesteuert.
              Kein Cloud-Recording, keine Datenbeziehung mit einem SaaS-Anbieter, kein Opt-in der Gegenpartei
              erforderlich. Ein Werkzeug, das für den Nutzenden arbeitet – nicht für eine Analyseplattform dahinter.
            </p>
            <p>
              Wenn Sie Souffleur testen möchten oder Feedback zur Early-Development-Phase haben,{' '}
              <Link href="/souffleur">finden Sie hier mehr Details zum Projekt</Link> oder sprechen Sie uns direkt an.
            </p>
          </article>

          <div className="mt-12 mb-12">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">Weitere Artikel</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { href: '/blog/ki-beratung-mittelstand', cat: 'KI & Strategie', title: 'KI-Beratung im Mittelstand: Geschäftsfeldentwicklung und -validierung mit KI' },
                { href: '/blog/innovation-republic-kmu-innovation', cat: 'KMU & Innovation', title: 'Innovation Republic: Strukturierte KMU-Innovation für den Mittelstand' },
                { href: '/blog/was-ist-venture-clienting', cat: 'Venture Clienting', title: 'Was ist Venture Clienting? Definition, Prozess und Praxisbeispiele' },
                { href: '/blog/venture-client-mittelstand', cat: 'Mittelstand', title: 'Venture Client im Mittelstand: Chancen, Hürden und wie es gelingt' },
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
                <div className="text-sm text-gray-500 dark:text-gray-400">Gründer, Vencly GmbH · Entwickler von Souffleur</div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Interesse an Souffleur?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Wir befinden uns in der Early-Development-Phase und freuen uns über Beta-Tester und Feedback.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                {...calButtonProps}
                className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded transition-colors cursor-pointer"
              >
                Gespräch vereinbaren <ArrowRight size={16} />
              </button>
              <Link href="/souffleur" className="inline-flex items-center gap-2 text-vencly-teal hover:text-teal-400 font-medium transition-colors">
                Projektseite ansehen <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
