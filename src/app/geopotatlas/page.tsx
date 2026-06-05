import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Map, Database, GitMerge, TrendingUp } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'Geopotatlas – Geodaten-Intelligence für strategische Entscheidungen',
  description:
    'Geopotatlas wertet Geodaten intelligent aus: strategische Standortentscheidungen, Marktanalysen und ERP-Integration für mittelständische Unternehmen.',
  alternates: { canonical: 'https://vencly.com/geopotatlas' },
  openGraph: {
    title: 'Geopotatlas | Vencly',
    description: 'Intelligente Geodaten-Auswertung für Standortentscheidungen und Marktanalysen. Integration mit bestehenden ERP-Systemen.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Geopotatlas',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Intelligente Auswertung von Geodaten für strategische Standortentscheidungen und Marktanalysen mit ERP-Integration.',
  author: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
}

const features = [
  {
    icon: Map,
    title: 'Strategische Standortanalyse',
    desc: 'Kombiniert Geodaten mit Markt-, Wettbewerbs- und Infrastrukturdaten. Visualisierung von Einzugsgebieten, Kundenpotenzialen und Wettbewerbsdichte auf interaktiven Karten.',
  },
  {
    icon: TrendingUp,
    title: 'Marktanalyse & Potenzialmodelle',
    desc: 'Datengetriebene Einschätzung von Marktpotenzialen auf Basis von Geodaten, Demografiedaten und wirtschaftlichen Kennzahlen. Vergleiche zwischen Standorten auf einen Blick.',
  },
  {
    icon: Database,
    title: 'Datenfusion aus mehreren Quellen',
    desc: 'Verknüpft OpenStreetMap, amtliche Geobasisdaten, Zensus- und Handelsdaten in einer einheitlichen Analyseplattform – ohne manuelle Datenpflege.',
  },
  {
    icon: GitMerge,
    title: 'ERP-Integration',
    desc: 'Nahtlose Anbindung an bestehende ERP-Systeme (SAP, Microsoft Dynamics u.a.) via REST-API. Geodaten angereichert mit Ihren Bestandsdaten für maximale Relevanz.',
  },
]

const workflow = [
  { n: '01', title: 'Fragestellung definieren', desc: 'Standortevaluation, Marktanalyse oder Wettbewerbsbeobachtung – Geopotatlas passt sich Ihrem Use-Case an.' },
  { n: '02', title: 'Daten automatisch laden', desc: 'Relevante Geodaten und externe Quellen werden automatisch aggregiert und aufbereitet.' },
  { n: '03', title: 'Visualisieren & analysieren', desc: 'Interaktive Karten, Scoring-Modelle und Vergleichsansichten für Entscheider.' },
  { n: '04', title: 'Export & ERP-Übergabe', desc: 'Ergebnisse als Bericht oder direkt in Ihr ERP-System – vollständig dokumentiert.' },
]

const stack = [
  'Next.js 14 + TypeScript (Frontend & API)',
  'PostGIS / PostgreSQL (räumliche Datenbank)',
  'OpenStreetMap + amtliche Geobasisdaten',
  'Mapbox GL JS (interaktive Kartendarstellung)',
  'REST-API für ERP-Integration (SAP, Dynamics)',
]

export default function GeopotatlasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vencly.com' },
          { '@type': 'ListItem', position: 2, name: 'Projekte', item: 'https://vencly.com/projects' },
          { '@type': 'ListItem', position: 3, name: 'Geopotatlas', item: 'https://vencly.com/geopotatlas' },
        ],
      }) }} />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Zurück zu Projekten
          </Link>

          {/* Hero */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase">Geodaten · Business Intelligence</span>
              <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full font-medium">Live</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Geopotatlas –{' '}
              <span className="text-vencly-teal">Geodaten</span> als Entscheidungsgrundlage.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
              Intelligente Auswertung von Geodaten für strategische Standortentscheidungen und Marktanalysen.
              Verbindet räumliche Daten mit Ihrem ERP-System – für Entscheidungen auf Datenbasis statt Bauchgefühl.
            </p>
          </div>

          {/* Key metrics */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: 'GIS', label: 'Räumliche Analysen' },
                { value: 'API', label: 'ERP-Integration' },
                { value: 'DSGVO', label: 'konform, EU-Daten' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-6 text-center">
                  <div className="text-3xl font-bold text-vencly-teal mb-1">{value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Workflow */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">So funktioniert Geopotatlas.</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features im Detail.</h2>
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
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Geodaten-Intelligence für Ihr Unternehmen?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Wir zeigen Ihnen, wie Geopotatlas Ihre Standort- und Marktentscheidungen verbessert.
            </p>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded transition-colors cursor-pointer"
            >
              Gespräch vereinbaren
              <ArrowRight size={16} />
            </button>
          </section>

        </div>
      </div>
    </>
  )
}
