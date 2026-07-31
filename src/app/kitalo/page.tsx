import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowLeft, ArrowRight, Shuffle, ShieldCheck, Layers, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kitalo – das digitale Betriebssystem für Kitas',
  description:
    'Kitalo entlastet Kita-Leitungen von wiederkehrender Verwaltung und bindet Eltern digital ein: faire Dienst- und Ausfallplanung, Open-Source-Kern (AGPL) mit gehostetem Freemium. Gewachsen aus der live erprobten Zappels-App.',
  alternates: { canonical: 'https://vencly.com/kitalo' },
  openGraph: {
    title: 'Kitalo | Vencly',
    description:
      'Das digitale Betriebssystem für Kitas – faire Dienst- und Ausfallplanung, Open Core, DSGVO-konform, EU-gehostet.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kitalo',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://vencly.com/kitalo',
  description:
    'Digitales Betriebssystem für Kitas: faire Dienst- und Ausfallplanung, Eltern-App, automatische Notfall-Eskalation. Open-Source-Kern (AGPL) mit gehostetem Freemium.',
  author: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
}

const features = [
  {
    icon: Shuffle,
    title: 'Faire Dienst- & Ausfallplanung',
    desc: 'Algorithmisches Losverfahren, Fairness-Ranking und automatische Notfall-Eskalation bei Krankheit. Genau das, was reine Kommunikations-Apps nicht leisten – die Kernkompetenz von Kitalo.',
  },
  {
    icon: ShieldCheck,
    title: 'Open Source & Datensouveränität',
    desc: 'Quelloffener Kern (AGPL), self-hostbar, EU-Hosting, keine US-Cloud, kein Tracking. Telefonnummern anwendungsseitig verschlüsselt – personenbezogene Daten bleiben unter Kontrolle des Trägers.',
  },
  {
    icon: Layers,
    title: 'Multi-Kita-Plattform',
    desc: 'Jede Kita erhält eine eigene, isolierte Instanz aus einem gemeinsamen Kern (Silo-Prinzip). Verbesserungen wirken beim nächsten Deploy auf alle Einrichtungen.',
  },
  {
    icon: Sparkles,
    title: 'Freemium, fair bepreist',
    desc: 'Voll funktionsfähiger Gratis-Kern mit Telegram + E-Mail. WhatsApp-Integration, eigene Domain und White-Label als bezahlte Add-ons – gestaffelt nach Kita-Größe.',
  },
]

const workflow = [
  { n: '01', title: 'Kita einrichten', desc: 'Self-service-Onboarding: eigene Instanz mit Name, Admin und Leitung in Minuten.' },
  { n: '02', title: 'Eltern digital einbinden', desc: 'Mobile Eltern-App (PWA), Erinnerungen und Termine automatisch per Telegram und E-Mail.' },
  { n: '03', title: 'Dienste fair planen', desc: 'Transparentes Losverfahren und Fairness-Ranking statt Excel und WhatsApp-Diskussionen.' },
  { n: '04', title: 'Ausfälle automatisch auffangen', desc: 'Kind oder Erzieher krank? Gestaffelte, faire Notfall-Eskalation statt Rundruf.' },
]

const stack = [
  'Next.js 14 + TypeScript',
  'PostgreSQL + Prisma',
  'BullMQ + Redis (Job-Queue)',
  'Meta WhatsApp Cloud API · Telegram · E-Mail',
  'AGPL-3.0 Open-Source-Kern (in Vorbereitung)',
  'EU-Hosting (Hetzner, Deutschland)',
]

export default function KitaloPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vencly.com' },
          { '@type': 'ListItem', position: 2, name: 'Projekte', item: 'https://vencly.com/projects' },
          { '@type': 'ListItem', position: 3, name: 'Kitalo', item: 'https://vencly.com/kitalo' },
        ],
      }) }} />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back */}
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Zurück zu Projekten
          </Link>

          {/* Hero */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase">Produkt · Kita-Betriebssystem · Open Core</span>
              <span className="text-xs bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full font-medium">In Entwicklung</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Kitalo –{' '}
              <span className="text-vencly-teal">das digitale Betriebssystem</span> für Kitas.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
              Kitalo entlastet Kita-Leitungen von wiederkehrender Verwaltung und bindet Eltern zeitgemäß digital ein:
              faire Dienst- und Ausfallplanung, automatische Notfall-Eskalation, quelloffener Kern mit gehostetem
              Freemium. Gewachsen aus der live erprobten Zappels-App.
            </p>

            {/* CTA prominent */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded transition-colors text-base shadow-lg shadow-teal-500/20"
            >
              Frühzugang anfragen
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Workflow */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">So funktioniert Kitalo.</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {workflow.map(w => (
                <div key={w.n} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-6 flex gap-4">
                  <span className="text-vencly-teal font-mono text-xl font-bold shrink-0">{w.n}</span>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">{w.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Was Kitalo besonders macht.</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-6">
                  <div className="w-10 h-10 bg-vencly-teal/10 rounded flex items-center justify-center mb-4">
                    <Icon size={20} className="text-vencly-teal" />
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-bold mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech stack */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
            <ul className="space-y-2">
              {stack.map(s => (
                <li key={s} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                  <CheckCircle2 size={16} className="text-vencly-teal shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Der freie Kern soll unter der AGPL-3.0 veröffentlicht und self-hostbar sein; das gehostete Kitalo trägt WhatsApp-Integration, Onboarding und Abrechnung.
            </p>
          </section>

          {/* CTA bottom */}
          <section className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Interesse an Kitalo?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Kita-Träger, Elterninitiative oder Partner – wir freuen uns über einen Austausch.</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded transition-colors">
              Kontakt aufnehmen <ArrowRight size={16} />
            </Link>
          </section>

        </div>
      </div>
    </>
  )
}
