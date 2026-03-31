import type { Metadata } from 'next'
import { ArrowRight, Zap, RefreshCw, Terminal, FileText, Sparkles, Clock } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'OptAImum – KI-Nutzung auf das Maximum optimieren',
  description:
    'OptAImum ist das All-in-One-Tool für effiziente KI-Nutzung: Profile, Skill- & Hook-Markdowns erstellen, LLM-Anbieter in Minuten wechseln, Prompts generieren und KI-Sandboxen aufsetzen.',
  alternates: { canonical: 'https://vencly.com/optaimum' },
  openGraph: {
    title: 'OptAImum | Vencly',
    description: 'Deine KI-Nutzung. Auf das Maximum optimiert. Profile, Prompts, Provider-Wechsel – alles an einem Ort.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'OptAImum',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'Web',
  url: 'https://vencly.com/optaimum',
  description:
    'All-in-One-Tool zur Optimierung der KI-Nutzung: Profile-Markdown-Erstellung, Skill- & Hook-Generierung, LLM-Anbieterwechsel, Prompt-Generator, AI-Sandbox-Setup.',
  author: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
}

const features = [
  {
    icon: FileText,
    title: 'Profile-Markdown-Creator',
    desc: 'Erstelle in wenigen Minuten ein vollständig strukturiertes Profil-Markdown für Claude Code und andere KI-Tools. Kein manuelles Formatieren – strukturiert, wiederverwendbar, sofort einsatzbereit.',
    badge: 'Kernfunktion',
  },
  {
    icon: Sparkles,
    title: 'Skill- & Hook-Generator',
    desc: 'Generiere Skill-Markdowns und Hook-Konfigurationen für automatisierte KI-Workflows. Definiere, was dein Modell können soll – und wie es auf Events reagieren soll.',
    badge: 'Workflow',
  },
  {
    icon: RefreshCw,
    title: 'LLM-Anbieter-Wechsel in Minuten',
    desc: 'Zwischen OpenAI, Anthropic, Mistral, Google und anderen Anbietern wechseln – ohne stundenlange Konfiguration. OptAImum führt Schritt für Schritt durch den Wechsel.',
    badge: 'Flexibilität',
  },
  {
    icon: Zap,
    title: 'Prompt-Generator',
    desc: 'Strukturierte Prompts für verschiedene Anwendungsfälle generieren. Vom einfachen Assistenten-Prompt bis zum komplexen Multi-Step-Reasoning – optimiert für das jeweilige Modell.',
    badge: 'Prompting',
  },
  {
    icon: Terminal,
    title: 'KI-Sandbox-Setup',
    desc: 'Schritt-für-Schritt-Guides zum Aufsetzen lokaler KI-Sandboxen und virtueller Maschinen. Entwickle und teste KI-Anwendungen in isolierten Umgebungen.',
    badge: 'Developer',
  },
  {
    icon: Clock,
    title: 'Alles an einem Ort',
    desc: 'Kein Springen zwischen Tools, Docs und Konfigurationsdateien. OptAImum bündelt alle Werkzeuge für produktive KI-Nutzung in einer einzigen, klar strukturierten Oberfläche.',
    badge: 'Produktivität',
  },
]

const useCases = [
  { who: 'KI-Einsteiger', what: 'Schnell produktiv werden – ohne technisches Vorwissen über Konfiguration' },
  { who: 'Power User', what: 'Workflows automatisieren, Provider benchmarken, Prompts systematisch verbessern' },
  { who: 'Entwickler', what: 'Lokale Sandbox aufsetzen, Hooks konfigurieren, Modelle vergleichen' },
  { who: 'Teams', what: 'Einheitliche Profile und Skill-Sets für konsistente KI-Nutzung im Team' },
]

export default function OptAImumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="mb-20">
            <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase mb-4">
              Produkt
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              OptAImum –{' '}
              <span className="text-vencly-teal">KI-Nutzung</span> auf das Maximum optimieren.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-4">
              Profile, Skill- & Hook-Markdowns erstellen, Anbieter in Minuten wechseln,
              Prompts generieren und KI-Sandboxen aufsetzen – alles an einem Ort.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
              OptAImum richtet sich an alle, die KI-Tools nicht nur nutzen, sondern{' '}
              <strong className="text-gray-900 dark:text-white">wirklich beherrschen</strong>{' '}
              wollen – ohne stundenlange Konfiguration und Dokumentations-Dschungel.
            </p>
          </div>

          {/* Value prop */}
          <section className="mb-20">
            <blockquote className="border-l-4 border-vencly-teal pl-6 py-2 bg-gray-100 dark:bg-vencly-card rounded-r-xl">
              <p className="text-gray-900 dark:text-white text-xl font-semibold">
                „Starte mit dem MD Creator –<br className="hidden sm:block" />
                in 5 Minuten hast du dein erstes personalisiertes Profil."
              </p>
            </blockquote>
          </section>

          {/* Features */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Was OptAImum kann.</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, desc, badge }) => (
                <div key={title} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-vencly-teal/10 rounded-xl flex items-center justify-center">
                      <Icon size={20} className="text-vencly-teal" />
                    </div>
                    <span className="text-xs font-mono text-vencly-teal bg-vencly-teal/10 px-2 py-1 rounded-full">
                      {badge}
                    </span>
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-bold mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use cases */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Für wen ist OptAImum?</h2>
            <div className="space-y-3">
              {useCases.map(({ who, what }) => (
                <div key={who} className="flex items-start gap-4 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-xl p-5">
                  <span className="text-vencly-teal font-semibold text-sm shrink-0 w-28">{who}</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{what}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Community */}
          <section className="mb-20">
            <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8 text-center">
              <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase mb-3 block">Open Source</span>
              <h2 className="text-gray-900 dark:text-white font-bold text-xl mb-3">Für die KI-Community</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto">
                OptAImum ist ein Community-Projekt – kostenlos, offen und kontinuierlich weiterentwickelt.
                Feedback, Ideen und Beiträge sind willkommen.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Interesse an OptAImum für Ihr Team?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Wir zeigen Ihnen, wie OptAImum Ihre KI-Workflows beschleunigt.
            </p>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors cursor-pointer"
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
