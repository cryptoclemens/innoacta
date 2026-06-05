import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Zap, BarChart3, Search } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'Innovation Republic – Venture-Clienting-Plattform',
  description:
    'Innovation Republic: KI-gestützte Plattform zur automatisierten Startup-Identifikation und -Matching für mittelständische Unternehmen. Scouting-Aufwand um bis zu 70 % reduziert.',
  alternates: { canonical: 'https://vencly.com/innovation-republic' },
  openGraph: {
    title: 'Innovation Republic | Vencly',
    description: 'KI-Agenten identifizieren und matchen Startups für Mittelständler – vollautomatisiert, transparent, skalierbar.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Innovation Republic',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'KI-gestützte Venture-Clienting-Plattform zur automatisierten Startup-Identifikation und -Matching für mittelständische Unternehmen.',
  author: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
}

const features = [
  {
    icon: Search,
    title: 'Automatisiertes Startup-Scouting',
    desc: 'KI-Agenten durchsuchen kontinuierlich Datenbanken, Acceleratoren und Netzwerke nach passenden Startups – anhand von Technologie, Reifegrad und strategischem Fit.',
  },
  {
    icon: Zap,
    title: 'Intelligentes Matching',
    desc: 'Mehrdimensionaler Abgleich zwischen Unternehmensbedarfen und Startup-Profilen. Scoring-Algorithmus berücksichtigt technologischen Reifegrad, Marktrelevanz und Integrationspotenzial.',
  },
  {
    icon: Users,
    title: 'Kollaborative Pipeline',
    desc: 'Strukturierter Workflow für alle Beteiligten: von der ersten Identifikation über den Erstkontakt bis hin zum Pilotprojekt. Vollständige Audit-Trail-Dokumentation.',
  },
  {
    icon: BarChart3,
    title: 'Reporting & Transparenz',
    desc: 'Dashboards für Entscheider: Scouting-Aktivität, Pipeline-Status, Conversion-Raten und ROI-Kennzahlen – exportierbar für Vorstands-Reporting.',
  },
]

const workflow = [
  { n: '01', title: 'Bedarfsprofil definieren', desc: 'Technologiefelder, strategische Ziele und Ausschlusskriterien werden einmalig konfiguriert.' },
  { n: '02', title: 'KI-Scouting läuft kontinuierlich', desc: 'Agenten monitoren Quellen rund um die Uhr und befüllen die Pipeline automatisch.' },
  { n: '03', title: 'Matches prüfen & priorisieren', desc: 'Kuratierte Vorschläge mit Begründung – Ihr Team entscheidet, KI bereitet vor.' },
  { n: '04', title: 'Kontakt & Pilotprojekt', desc: 'Strukturierter Onboarding-Prozess für ausgewählte Startups bis zum ersten Piloten.' },
]

const stack = [
  'Next.js 14 + TypeScript (Frontend & API Routes)',
  'Supabase (PostgreSQL + Row Level Security)',
  'Anthropic Claude (Scouting-Agenten & Matching)',
  'Cloudflare Pages / Workers (Hosting)',
  'Resend (E-Mail-Benachrichtigungen)',
]

export default function InnovationRepublicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vencly.com' },
          { '@type': 'ListItem', position: 2, name: 'Projekte', item: 'https://vencly.com/projects' },
          { '@type': 'ListItem', position: 3, name: 'Innovation Republic', item: 'https://vencly.com/innovation-republic' },
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
              <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase">Venture Clienting · Plattform</span>
              <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full font-medium">Live</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Innovation Republic –{' '}
              <span className="text-vencly-teal">Startup-Matching</span> auf Knopfdruck.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
              KI-Agenten übernehmen das Scouting, Bewerten und Matchen von Startups für mittelständische
              Unternehmen. Scouting-Aufwand um bis zu 70 % reduziert – bei deutlich höherer Trefferquote.
            </p>
          </div>

          {/* Key metric */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: '−70 %', label: 'Scouting-Aufwand' },
                { value: '24/7', label: 'KI-Monitoring aktiv' },
                { value: 'DSGVO', label: 'konform, EU-Hosting' },
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">So funktioniert Innovation Republic.</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Venture Clienting für Ihr Unternehmen?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Wir zeigen Ihnen, wie Innovation Republic in Ihre Innovationsstrategie passt.
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
