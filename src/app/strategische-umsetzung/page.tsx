import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Users, FileText, PresentationIcon, TrendingUp, Building2, Target, BarChart3 } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'Strategische Umsetzung – operativ, nicht nur konzeptionell',
  description:
    'Vencly übernimmt operative Verantwortung in neuen Geschäftsfeldern: Go-to-Market, Geschäftsmodell-Festlegung, Organisationsdesign, Ausgründung, Pilotkunden-Akquise und Steuerungs-KPIs.',
  alternates: { canonical: 'https://vencly.com/strategische-umsetzung' },
  openGraph: {
    title: 'Strategische Umsetzung | Vencly',
    description:
      'Nicht Strategie statt Umsetzung – sondern beides. Vencly liefert operative Verantwortung wo interne Strukturen fehlen.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Strategische Umsetzung',
  provider: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
  url: 'https://vencly.com/strategische-umsetzung',
  description:
    'Operative Verantwortung für Projekte ohne interne Heimat: Projektsteuerung, Stakeholder-Management, Entscheidungsvorlagen und Workshop-Formate – mit unternehmerischem Blick.',
  areaServed: ['DE', 'AT', 'CH'],
  serviceType: 'Strategische Umsetzung',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was bedeutet strategische Umsetzung bei Vencly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vencly übernimmt operative Verantwortung in neuen Geschäftsfeldern – von der Go-to-Market-Planung über Stakeholder-Management bis zur Pilotkunden-Akquise. Wir liefern nicht nur Empfehlungen, sondern arbeiten aktiv im Projekt mit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wann ist strategische Umsetzung mit Vencly sinnvoll?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wenn ein neues Geschäftsfeld oder Innovationsprojekt intern keine ausreichenden Ressourcen oder Strukturen hat. Vencly übernimmt in solchen Fällen temporär operative Verantwortung und schafft damit die Grundlage für eine spätere Übergabe ins Unternehmen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert ein typisches Umsetzungsmandat mit Vencly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typische Mandate laufen 2–4 Monate, abhängig von Komplexität und Reifegrad des Projekts. Vencly arbeitet in kurzen Sprints mit klaren Meilensteinen und Übergabepunkten.',
      },
    },
  ],
}

const services = [
  {
    icon: FileText,
    title: 'Projektsteuerung & Reporting',
    desc: 'Wir übernehmen die operative Leitung von Projekten: Meilensteinplanung, Statusreporting, Eskalationsmanagement. Sie bekommen einen Partner, der liefert – nicht nur empfiehlt.',
  },
  {
    icon: TrendingUp,
    title: 'Go-to-Market & Geschäftsmodell-Festlegung',
    desc: 'Von der validierten Idee zur Markteinführung: Wir entwickeln das Go-to-Market-Konzept, legen Geschäftsmodellvarianten verbindlich fest und begleiten die Entscheidung für den richtigen Ansatz – mit Blick auf Skalierbarkeit und Ressourceneffizienz.',
  },
  {
    icon: Building2,
    title: 'Organisationsdesign & Ausgründung',
    desc: 'Neue Geschäftsfelder brauchen neue Strukturen. Wir prüfen, ob eine eigenständige Ausgründung sinnvoll ist, gestalten das Organisationsdesign und begleiten die Umsetzung – von der Holdingstruktur bis zur operativen Einheit.',
  },
  {
    icon: Target,
    title: 'Pilotkunden-Akquise',
    desc: 'Der erste zahlende Kunde ist der härteste Beweis. Wir unterstützen aktiv bei der Identifikation und Ansprache von Pilotkunden – mit einem strukturierten Ansatz, der Lernen und Umsatz von Anfang an verbindet.',
  },
  {
    icon: BarChart3,
    title: 'Steuerungs-KPIs',
    desc: 'Was nicht gemessen wird, wächst nicht. Wir leiten die richtigen Steuerungskennzahlen für das neue Geschäftsfeld ab – passend zur Reifephase, verständlich für Management und Board.',
  },
  {
    icon: Users,
    title: 'Stakeholder-Management',
    desc: 'Komplexe Projekte scheitern selten am Konzept, sondern an internen Widerständen. Vencly navigiert Stakeholder-Landschaften mit Erfahrung aus Konzernen, Kommunen und öffentlichen Trägern.',
  },
  {
    icon: PresentationIcon,
    title: 'Workshop-Formate & Entscheidungsvorlagen',
    desc: 'Vom Kick-off bis zur Go/No-Go-Entscheidung: Wir gestalten strukturierte Formate, die Klarheit schaffen und interne Entscheidungsprozesse beschleunigen.',
  },
]

export default function StrategischeUmsetzungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vencly.com' },
          { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://vencly.com/#leistungen' },
          { '@type': 'ListItem', position: 3, name: 'Strategische Umsetzung', item: 'https://vencly.com/strategische-umsetzung' },
        ],
      }) }} />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="mb-20">
            <span className="section-eyebrow mb-4">
              Leistung
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-normal text-gray-900 dark:text-white mb-6 leading-tight">
              Strategische Umsetzung –{' '}
              <span className="text-vencly-teal">operativ</span>, nicht nur konzeptionell.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-6">
              Die beste Strategie ist wertlos, wenn sie nicht umgesetzt wird. Viele
              Innovationsprojekte scheitern nicht am Konzept, sondern daran, dass intern niemand
              die operative Verantwortung übernimmt – weil das Tagesgeschäft dominiert und das
              Neue keine Heimat hat.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
              Vencly füllt genau diese Lücke:{' '}
              <strong className="text-gray-900 dark:text-white">Wir übernehmen operative Verantwortung</strong>{' '}
              in Projekten, die strategisch wichtig, aber intern strukturell schwierig zu verankern sind.
            </p>
          </div>

          {/* Not strategy vs execution */}
          <section className="mb-16">
            <blockquote className="border-l-4 border-vencly-teal pl-6 py-2 bg-gray-100 dark:bg-vencly-card rounded-r-xl">
              <p className="text-gray-900 dark:text-white text-xl font-semibold">
                „Nicht Strategie <em>statt</em> Umsetzung – sondern beides."
              </p>
            </blockquote>
          </section>

          {/* Services */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Was wir konkret übernehmen.</h2>
            <div className="grid gap-6">
              {services.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-vencly-teal/10 rounded flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-vencly-teal" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* When it fits */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Wann passt dieses Leistungsbild?</h2>
            <ul className="space-y-3">
              {[
                'Sie haben ein strategisches Projekt, das intern keine klare Heimat hat',
                'Das Tagesgeschäft lässt keinen Raum für das Neue – aber das Neue ist zu wichtig zum Warten',
                'Sie brauchen jemanden, der mit Managementblick steuert, aber auch operativ anpackt',
                'Externe Berater liefern Konzepte – Sie brauchen jemanden, der die Umsetzung verantwortet',
                'Ihr Projekt hat regulatorische Komplexität oder viele Stakeholder',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 size={18} className="text-vencly-teal mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Related articles */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Weiterführende Artikel</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { href: '/blog/geschaeftsfeldentwicklung-methoden', cat: 'Geschäftsfeldentwicklung', title: 'Geschäftsfeldentwicklung: Methoden, Phasen und häufige Fehler' },
                { href: '/blog/ki-beratung-mittelstand', cat: 'KI & Strategie', title: 'KI-Beratung im Mittelstand: Geschäftsfeldentwicklung und -validierung mit KI' },
              ].map(a => (
                <Link key={a.href} href={a.href} className="block bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-5 hover:border-vencly-teal/40 transition-colors group">
                  <span className="text-xs font-mono text-vencly-teal">{a.cat}</span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-vencly-teal transition-colors mt-1 leading-snug">{a.title}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Welches Projekt braucht eine verlässliche operative Hand?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Erzählen Sie uns, was liegt – wir sagen Ihnen ehrlich, wie wir helfen können.
            </p>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded transition-colors cursor-pointer"
            >
              Erstgespräch vereinbaren
              <ArrowRight size={16} />
            </button>
          </section>

        </div>
      </div>
    </>
  )
}
