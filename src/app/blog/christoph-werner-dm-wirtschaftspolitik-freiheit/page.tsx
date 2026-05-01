import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'Fußball und Wirtschaft: Was Christoph Werner (dm) der Politik ins Stammbuch schreibt',
  description:
    'Beim Mittelstands-Tag des Ludwig Erhard Preises brachte dm-Chef Christoph Werner die Sache auf den Punkt: Fußball funktioniert, weil die Spielzüge frei sind – nicht weil sie reglementiert werden. Ein Plädoyer für Ordnungspolitik statt Detailregulierung.',
  alternates: { canonical: 'https://vencly.com/blog/christoph-werner-dm-wirtschaftspolitik-freiheit' },
  openGraph: {
    title: 'Fußball und Wirtschaft: Christoph Werner (dm) beim Ludwig Erhard Preis',
    description:
      'dm-Chef Christoph Werner beim Mittelstands-Tag: Warum Überregulierung den Wettbewerb genauso tötet wie ein Fußballspiel, in dem auch die Spielzüge per Regelwerk vorgegeben wären.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Fußball und Wirtschaft: Was Christoph Werner (dm) der Politik ins Stammbuch schreibt',
  description:
    'dm-Chef Christoph Werner beim Mittelstands-Tag des Ludwig Erhard Preises: Über Fußball, Freiheit und was die Politik daraus lernen sollte.',
  author: { '@type': 'Person', name: 'Clemens Pompeÿ', url: 'https://vencly.com/ueber-uns' },
  publisher: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
  url: 'https://vencly.com/blog/christoph-werner-dm-wirtschaftspolitik-freiheit',
  datePublished: '2026-04-30',
  dateModified: '2026-04-30',
  inLanguage: 'de',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vencly.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vencly.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Christoph Werner (dm): Fußball und Wirtschaftsfreiheit', item: 'https://vencly.com/blog/christoph-werner-dm-wirtschaftspolitik-freiheit' },
  ],
}

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link href="/blog" className="inline-flex items-center gap-2 text-vencly-teal hover:text-teal-400 text-sm mb-10 transition-colors">
            <ArrowLeft size={16} /> Alle Artikel
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-vencly-teal bg-vencly-teal/10 px-3 py-1 rounded-full">Wirtschaftspolitik</span>
              <span className="text-xs text-gray-500 dark:text-gray-500">30. April 2026 · 5 Min. Lesezeit</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Fußball und Wirtschaft: Was Christoph Werner (dm) der Politik ins Stammbuch schreibt
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Beim Mittelstands-Tag des Ludwig Erhard Preises brachte dm-Chef Christoph Werner eine der klarsten Diagnosen zur Lage des deutschen Unternehmertums — verpackt in eine Fußballanalogie, die jeder sofort versteht.
            </p>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-h2:text-xl prose-h2:mt-10 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed prose-a:text-vencly-teal prose-strong:text-gray-800 dark:prose-strong:text-white prose-blockquote:border-vencly-teal dark:prose-blockquote:text-gray-300">

            <p>
              Es gibt Momente auf Veranstaltungen, in denen ein einziger Satz mehr transportiert als eine ganze Keynote. Beim diesjährigen Mittelstands-Tag des Ludwig Erhard Preises war das für mich der Moment, als Christoph Werner, Vorsitzender der Geschäftsführung von dm, über Fußball sprach.
            </p>

            <h2>Die Analogie, die sitzt</h2>
            <p>
              Werner beschrieb es in etwa so: Fußball wird selbstverständlich nach Regeln gespielt. Klare, verbindliche Regeln — kein Handspiel, kein Foulspiel, kein Abseits. Das ist der Rahmen. Innerhalb dieses Rahmens aber sind die Spielzüge vollständig frei. Welcher Pass, welche Laufwege, welches System — das entscheiden die Spieler und Trainer selbst, in Echtzeit, situativ, kreativ.
            </p>

            <blockquote>
              „Wenn auch die Spielzüge reglementiert würden, wäre Fußball langweilig. Genau daran sollte sich die Politik wieder besinnen."
            </blockquote>

            <p>
              Der Applaus im Saal kam sofort. Zu Recht. Denn der Satz trifft den Kern dessen, was in Deutschland in den letzten Jahren systematisch aus dem Gleichgewicht geraten ist.
            </p>

            <h2>Was Ludwig Erhard dazu gesagt hätte</h2>
            <p>
              Der Rahmen des Abends war kein Zufall. Der Ludwig Erhard Preis wird an Persönlichkeiten vergeben, die unternehmerisches Denken, Eigenverantwortung und marktwirtschaftliche Prinzipien verkörpern. Ludwig Erhard selbst war der Architekt der Sozialen Marktwirtschaft — und sein Kerngedanke war genau dieser: Der Staat setzt den Rahmen (Wettbewerbsordnung, Eigentumsrechte, Vertragsfreiheit), aber er spielt nicht selbst. Er greift nicht in die Spielzüge ein.
            </p>
            <p>
              Der Ordoliberalismus, den Erhard vertrat, war kein Plädoyer für Chaos. Im Gegenteil: Stabile, verlässliche Spielregeln sind die Voraussetzung dafür, dass Unternehmer überhaupt langfristig investieren und riskieren. Was Erhard — und heute Werner — ablehnen, ist die schleichende Ausweitung staatlicher Vorgaben von der Regelebene auf die Spielzugebene.
            </p>

            <h2>Wo genau der Übergriff stattfindet</h2>
            <p>
              Das Problem in Deutschland heute ist nicht, dass es Regeln gibt. Es ist, dass aus Regeln immer häufiger Vorschriften werden — Vorschriften, die nicht mehr das „Was" (verboten, erlaubt) definieren, sondern das „Wie" und „Womit" und „In welchem Format dokumentiert".
            </p>
            <ul>
              <li>Ein Mittelständler mit 250 Mitarbeitern, der heute Lieferkettensorgfaltspflichten dokumentieren muss, hat dafür weder die Compliance-Abteilung noch die Rechtsabteilung, die ein DAX-Konzern vorhält.</li>
              <li>Ein Gründer, der ein neues Geschäftsmodell in einer regulierten Branche ausprobieren will, braucht heute Genehmigungen für Dinge, die in anderen Ländern als Selbstverständlichkeit gelten.</li>
              <li>Ein Unternehmen, das seine Produktion digitalisieren will, trifft auf Datenschutzauslegungen, die den Einsatz von KI-Werkzeugen faktisch unmöglich machen — obwohl die DSGVO das gar nicht vorschreibt.</li>
            </ul>
            <p>
              Das sind keine Regeln. Das sind Spielzugvorschriften. Und wie Werner sagt: Das macht das Spiel langweilig. Genauer: Es macht es für viele schlicht unspielbar.
            </p>

            <h2>Was das mit Mittelstand und Innovation zu tun hat</h2>
            <p>
              Ich beschäftige mich täglich mit Unternehmen, die neue Geschäftsfelder erschließen wollen — im Mittelstand, in Konzernen, in regulierten Branchen. Was mich in Gesprächen immer wieder trifft: Die Frage ist selten, ob eine Idee gut ist. Die Frage ist, ob man sie angesichts regulatorischer Unklarheit überhaupt wagen kann.
            </p>
            <p>
              Das ist eine fundamentale Verschiebung. Früher war die Kernfrage: „Zahlt der Markt dafür?" Heute ist sie oft: „Dürfen wir das überhaupt, und wenn ja — können wir das in drei Jahren noch zu denselben Bedingungen?" Diese Unsicherheit ist ein Innovationshemmer, der in keiner offiziellen Statistik auftaucht — aber in jedem unternehmerischen Gespräch präsent ist.
            </p>

            <h2>Was sich ändern müsste</h2>
            <p>
              Werners Analogie ist kein Ruf nach Deregulierung um jeden Preis. Fußball ohne Regeln ist kein Fußball — es wäre Chaos. Kein verantwortungsvoller Unternehmer will einen rechtsfreien Raum. Was gefordert wird, ist Unterscheidungsvermögen:
            </p>
            <ul>
              <li><strong>Rahmenregeln</strong> — Wettbewerb, Vertragsfreiheit, Haftung, Arbeitnehmerrechte — müssen klar und verlässlich sein.</li>
              <li><strong>Prozessvorschriften</strong> — wie genau ein Unternehmen seine internen Abläufe gestaltet, welche Tools es nutzt, wie es dokumentiert — sollten dem Unternehmen überlassen bleiben.</li>
            </ul>
            <p>
              Der Staat, der vorschreibt, wie gespielt werden muss, produziert keine besseren Unternehmen. Er produziert Compliance-Abteilungen, die Energie und Kapital binden, das anderswo fehlt.
            </p>

            <h2>Ein Satz, der bleibt</h2>
            <p>
              Veranstaltungen wie der Mittelstands-Tag des Ludwig Erhard Preises haben genau dann Wert, wenn jemand auf der Bühne steht, der nicht redet, um zu gefallen — sondern um etwas zu sagen. Christoph Werner hat das gestern getan.
            </p>
            <p>
              Seine Fußballanalogie ist deshalb so wirksam, weil sie keiner langen Erklärung bedarf. Jeder, der einmal Fußball gespielt hat, versteht sofort, was gemeint ist. Und wer ein Unternehmen führt, versteht noch etwas mehr: dass das Spiel dann am schönsten ist — und am erfolgreichsten — wenn man innerhalb klarer Regeln wirklich frei agieren kann.
            </p>
            <p>
              Das wäre eine Wirtschaftspolitik im Geiste Ludwig Erhards. Und offenbar wird sie in Teilen der deutschen Unternehmenslandschaft noch immer vermisst.
            </p>

          </article>

          <div className="mt-12 mb-12">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">Weitere Artikel</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { href: '/blog/venture-client-mittelstand', cat: 'Mittelstand', title: 'Venture Client im Mittelstand: Chancen, Hürden und wie es gelingt' },
                { href: '/blog/geschaeftsfeldentwicklung-methoden', cat: 'Geschäftsfeldentwicklung', title: 'Geschäftsfeldentwicklung: Methoden, Phasen und häufige Fehler' },
                { href: '/blog/ki-beratung-mittelstand', cat: 'KI & Strategie', title: 'KI-Beratung im Mittelstand: Geschäftsfeldentwicklung und -validierung mit KI' },
                { href: '/blog/venture-clienting-regulierte-branchen', cat: 'Praxis', title: 'Venture Clienting in regulierten Branchen: Energie, Infrastruktur, öffentlicher Sektor' },
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
                <div className="text-sm text-gray-500 dark:text-gray-400">Gründer, Vencly GmbH · Mittelstands-Tag des Ludwig Erhard Preises, April 2026</div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Neue Geschäftsfelder trotz regulatorischer Unsicherheit?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Wir kennen den Spielraum — und helfen Ihnen, ihn zu nutzen.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                {...calButtonProps}
                className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded transition-colors cursor-pointer"
              >
                Erstgespräch vereinbaren <ArrowRight size={16} />
              </button>
              <Link href="/geschaeftsfeldentwicklung" className="inline-flex items-center gap-2 text-vencly-teal hover:text-teal-400 font-medium transition-colors">
                Unsere Leistungen <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
