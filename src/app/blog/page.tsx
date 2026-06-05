import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog – Wissen zu Venture Clienting & Geschäftsfeldentwicklung',
  description:
    'Praxiswissen zu Venture Clienting, Geschäftsfeldentwicklung und strategischer Umsetzung. Erkenntnisse aus über 40 Projekten in Energie, Infrastruktur und Mittelstand.',
  alternates: { canonical: 'https://vencly.com/blog' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vencly.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vencly.com/blog' },
  ],
}

const articles = [
  {
    slug: 'souffleur-ki-verhandlungscoach',
    category: 'KI & Verhandlung',
    title: 'KI-Verhandlungscoaching für die Käuferseite – der Souffleur-Ansatz',
    excerpt: 'Gong, Clari und Co. coachen Verkäufer. Die Gegenseite ging bisher leer aus. Souffleur schließt diese Lücke: lokal transkribiert via Whisper, cheat-sheet-gesteuert, DSGVO-konform, BYOK.',
    readTime: '8 Min.',
    date: '5. Juni 2026',
  },
  {
    slug: 'innovation-republic-kmu-innovation',
    category: 'KMU & Innovation',
    title: 'Innovation Republic: Strukturierte KMU-Innovation für den Mittelstand',
    excerpt: 'Innovation Republic ist eine kuratierte Plattform, die mittelständische Unternehmen strukturiert mit passenden Innovationspartnern verbindet. Was die Initiative leistet und warum sie keine klassische Beratung ist.',
    readTime: '7 Min.',
    date: '16. Mai 2026',
  },
  {
    slug: 'christoph-werner-dm-wirtschaftspolitik-freiheit',
    category: 'Wirtschaftspolitik',
    title: 'Fußball und Wirtschaft: Was Christoph Werner (dm) der Politik ins Stammbuch schreibt',
    excerpt: 'Beim Ludwig Erhard Gipfel brachte dm-Chef Christoph Werner eine Fußballanalogie, die sitzt: Regeln ja — aber die Spielzüge müssen frei bleiben. Ein Plädoyer für Ordnungspolitik statt Detailregulierung.',
    readTime: '5 Min.',
    date: '30. April 2026',
  },
  {
    slug: 'ki-beratung-mittelstand',
    category: 'KI & Strategie',
    title: 'KI-Beratung im Mittelstand: Geschäftsfeldentwicklung und -validierung mit KI',
    excerpt: 'KI verändert, wie Unternehmen neue Märkte erschließen. Für mittelständische Unternehmen bedeutet das schnellere Entscheidungen mit besserer Datenbasis – statt monatelanger Konzeptarbeit.',
    readTime: '8 Min.',
    date: '1. Mai 2025',
  },
  {
    slug: 'venture-client-mittelstand',
    category: 'Mittelstand',
    title: 'Venture Client im Mittelstand: Chancen, Hürden und wie es gelingt',
    excerpt: 'Venture Clienting funktioniert nicht nur für Konzerne. Gerade mittelständische Unternehmen profitieren besonders – wenn die Methode auf ihre spezifische Situation angepasst wird.',
    readTime: '8 Min.',
    date: '1. Mai 2025',
  },
  {
    slug: 'was-ist-venture-clienting',
    category: 'Venture Clienting',
    title: 'Was ist Venture Clienting? Definition, Prozess und Praxisbeispiele',
    excerpt: 'Venture Clienting ist mehr als ein Buzzword. Hier erklären wir, wie der Prozess wirklich funktioniert, was ihn von CVC unterscheidet und wie ein 90-Tage-Pilotprojekt aussieht.',
    readTime: '6 Min.',
    date: '10. Februar 2025',
  },
  {
    slug: 'geschaeftsfeldentwicklung-methoden',
    category: 'Geschäftsfeldentwicklung',
    title: 'Geschäftsfeldentwicklung: Methoden, Phasen und häufige Fehler',
    excerpt: 'Wie entwickelt man ein neues Geschäftsfeld systematisch – ohne monatelange Strategieprozesse? Wir zeigen, welche Methoden wirklich funktionieren und wo die meisten Projekte scheitern.',
    readTime: '7 Min.',
    date: '28. März 2025',
  },
  {
    slug: 'startup-zusammenarbeit-venture-client',
    category: 'Venture Clienting',
    title: 'Startup-Zusammenarbeit als Chance in wirtschaftlichen Krisenzeiten',
    excerpt: 'Gerade wenn Budgets knapp werden und Effizienz zählt, ist Venture Clienting das unterschätzte Instrument für Unternehmen, die nicht stillstehen wollen.',
    readTime: '8 Min.',
    date: '15. Januar 2024',
  },
  {
    slug: 'venture-clienting-regulierte-branchen',
    category: 'Praxis',
    title: 'Venture Clienting in regulierten Branchen: Energie, Infrastruktur, öffentlicher Sektor',
    excerpt: 'Vergaberecht, lange Entscheidungsprozesse, konservative Strukturen – warum Venture Clienting trotzdem funktioniert und wie man die typischen Hindernisse überwindet.',
    readTime: '9 Min.',
    date: '5. April 2025',
  },
]

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-16">
            <span className="section-eyebrow mb-4">Wissen & Praxis</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              Praxiswissen zu Venture Clienting, Geschäftsfeldentwicklung und strategischer Umsetzung – aus über 40 Projekten in Energie, Infrastruktur und Mittelstand.
            </p>
          </div>

          {/* Articles */}
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-8 hover:border-vencly-teal/40 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-vencly-teal bg-vencly-teal/10 px-3 py-1 rounded-full">{article.category}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">{article.date} · {article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-vencly-teal transition-colors">{article.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-vencly-teal text-sm font-medium">
                  Artikel lesen <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
