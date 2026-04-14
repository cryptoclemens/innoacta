import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, CheckCircle2, ArrowLeft, Zap, Shield, Code2, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AutoToDo – KI-gestütztes LOP-Management',
  description:
    'AutoToDo automatisiert die Pflege von Maßnahmenlisten aus Meeting-Transkripten: Aufgaben per KI extrahieren, überprüfen und als Excel exportieren.',
  alternates: { canonical: 'https://vencly.com/autotodo' },
  openGraph: {
    title: 'AutoToDo | Vencly',
    description: 'Meeting-Transkript hochladen, KI extrahiert Aufgaben und Statusänderungen, exportieren als Excel. Multi-Tenant SaaS mit BYOK.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AutoToDo',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://autotodo.vencly.com',
  description: 'KI-gestütztes LOP-Management: Meeting-Transkript hochladen, Aufgaben automatisch extrahieren, überprüfen und als Excel exportieren.',
  author: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
}

const features = [
  {
    icon: Zap,
    title: 'KI-gestützte Aufgabenextraktion',
    desc: 'Lade ein Meeting-Transkript hoch – AutoToDo extrahiert automatisch alle Aufgaben und Statusänderungen. KI-Vorschläge prüfen, bearbeiten, akzeptieren und als Excel exportieren.',
  },
  {
    icon: Shield,
    title: 'Multi-Tenant & sichere BYOK-Integration',
    desc: 'Vollständige Datentrennung zwischen Workspaces durch Row-Level Security. Eigene API-Keys für Anthropic Claude, OpenAI GPT und Azure OpenAI – verschlüsselt mit AES-256-GCM.',
  },
  {
    icon: Code2,
    title: 'REST-API & Automatisierung',
    desc: 'Public REST API (/api/v1/) mit Bearer-Token-Authentifizierung und bereichsbasierten Berechtigungen für nahtlose Integration in bestehende Workflows.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Pläne',
    desc: 'Von Beta/Free bis Business – abgestimmt auf die Anforderungen von Einzelpersonen bis hin zu Teams. Zahlungsabwicklung über Mollie.',
  },
]

const workflow = [
  { n: '01', title: 'Meeting-Aufzeichnung hochladen', desc: 'Unterstützt Transkripte in gängigen Formaten.' },
  { n: '02', title: 'KI extrahiert Aufgaben', desc: 'Automatische Identifikation von Aufgaben und Statusänderungen aus dem Transkript.' },
  { n: '03', title: 'Vorschläge prüfen & bearbeiten', desc: 'Review der KI-Vorschläge, Anpassungen vornehmen, Aufgaben akzeptieren oder ablehnen.' },
  { n: '04', title: 'Als Excel exportieren', desc: 'Fertige LOP (Liste offener Punkte) als Excel-Datei herunterladen.' },
]

const stack = ['Next.js 14 + TypeScript', 'Supabase (PostgreSQL + Auth + Storage)', 'Anthropic Claude / OpenAI GPT / Azure OpenAI', 'Mollie Payments', 'Docker / Coolify Self-Hosted']

export default function AutoTodoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back */}
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Zurück zu Projekten
          </Link>

          {/* Hero */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase">Produkt · SaaS · v0.1.78</span>
              <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full font-medium">Live</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              AutoToDo –{' '}
              <span className="text-vencly-teal">KI-gestütztes</span> LOP-Management.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
              Meeting-Transkript hochladen, KI extrahiert automatisch alle Aufgaben und Statusänderungen,
              Vorschläge prüfen und als Excel exportieren. Schluss mit manuellem Nacharbeiten nach jedem Meeting.
            </p>

            {/* CTA prominent */}
            <a
              href="https://autotodo.vencly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base shadow-lg shadow-teal-500/20"
            >
              AutoToDo öffnen
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Workflow */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">So funktioniert AutoToDo.</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {workflow.map(w => (
                <div key={w.n} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-xl p-6 flex gap-4">
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
                <div key={title} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-6">
                  <div className="w-10 h-10 bg-vencly-teal/10 rounded-xl flex items-center justify-center mb-4">
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
              Self-Hosting über Docker/Coolify möglich.{' '}
              <a href="https://github.com/cryptoclemens/AutoToDo" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline inline-flex items-center gap-1">
                GitHub Repository <ExternalLink size={12} />
              </a>
            </p>
          </section>

          {/* CTA bottom */}
          <section className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Jetzt ausprobieren</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Kostenlos starten – kein Kreditkarte erforderlich.</p>
            <a href="https://autotodo.vencly.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              AutoToDo öffnen <ExternalLink size={16} />
            </a>
          </section>

        </div>
      </div>
    </>
  )
}
