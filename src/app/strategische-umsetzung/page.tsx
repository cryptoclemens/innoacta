import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Users, FileText, PresentationIcon } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'Strategische Umsetzung – operativ, nicht nur konzeptionell',
  description:
    'Vencly übernimmt operative Verantwortung in Projekten, die intern keine Heimat haben. Projektsteuerung, Stakeholder-Management, Entscheidungsvorlagen – mit Gründer-Blick.',
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

const services = [
  {
    icon: FileText,
    title: 'Projektsteuerung & Reporting',
    desc: 'Wir übernehmen die operative Leitung von Projekten: Meilensteinplanung, Statusreporting, Eskalationsmanagement. Sie bekommen einen Partner, der liefert – nicht nur empfiehlt.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-vencly-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="mb-20">
            <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase mb-4">
              Leistung
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Strategische Umsetzung –<br />
              <span className="text-vencly-teal">operativ</span>, nicht<br />
              nur konzeptionell.
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-6">
              Die beste Strategie ist wertlos, wenn sie nicht umgesetzt wird. Viele
              Innovationsprojekte scheitern nicht am Konzept, sondern daran, dass intern niemand
              die operative Verantwortung übernimmt – weil das Tagesgeschäft dominiert und das
              Neue keine Heimat hat.
            </p>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Vencly füllt genau diese Lücke:{' '}
              <strong className="text-white">Wir übernehmen operative Verantwortung</strong>{' '}
              in Projekten, die strategisch wichtig, aber intern strukturell schwierig zu verankern sind.
            </p>
          </div>

          {/* Not strategy vs execution */}
          <section className="mb-16">
            <blockquote className="border-l-4 border-vencly-teal pl-6 py-2 bg-vencly-card rounded-r-xl">
              <p className="text-white text-xl font-semibold">
                „Nicht Strategie <em>statt</em> Umsetzung – sondern beides."
              </p>
            </blockquote>
          </section>

          {/* Services */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">Was wir konkret übernehmen.</h2>
            <div className="grid gap-6 sm:grid-cols-1">
              {services.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-vencly-card border border-vencly-border rounded-2xl p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-vencly-teal/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-vencly-teal" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* When it fits */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6">Wann passt dieses Leistungsbild?</h2>
            <ul className="space-y-3">
              {[
                'Sie haben ein strategisches Projekt, das intern keine klare Heimat hat',
                'Das Tagesgeschäft lässt keinen Raum für das Neue – aber das Neue ist zu wichtig zum Warten',
                'Sie brauchen jemanden, der mit Managementblick steuert, aber auch operativ anpackt',
                'Externe Berater liefern Konzepte – Sie brauchen jemanden, der die Umsetzung verantwortet',
                'Ihr Projekt hat regulatorische Komplexität oder viele Stakeholder',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 size={18} className="text-vencly-teal mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Welches Projekt braucht eine verlässliche operative Hand?
            </h2>
            <p className="text-gray-400 mb-6">
              Erzählen Sie uns, was liegt – wir sagen Ihnen ehrlich, wie wir helfen können.
            </p>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors cursor-pointer"
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
