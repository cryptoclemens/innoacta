import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Mic, Shield, FileText, Brain } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'Souffleur – Privacy-first KI-Verhandlungs-Coach für macOS',
  description:
    'Souffleur transkribiert Verhandlungen lokal per Whisper, gleicht Gesprächspunkte in Echtzeit mit Ihrem Spickzettel ab und erstellt anonymisierte Summaries – ohne Cloud, DSGVO-konform, BYOK.',
  alternates: { canonical: 'https://vencly.com/souffleur' },
  openGraph: {
    title: 'Souffleur | Vencly',
    description: 'Live-Coaching für Verhandlungen auf macOS: lokal, privat, cheat-sheet-gesteuert. Kein Cloud-Recording, BYOK, DSGVO-first.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Souffleur',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'macOS',
  description: 'Privacy-first, BYOK Live-Verhandlungs-Coach für macOS. Lokale Transkription, Echtzeit-Spickzettel-Abgleich, DSGVO-konform.',
  author: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
}

const features = [
  {
    icon: Mic,
    title: 'Lokale Transkription via Whisper',
    desc: 'Audio wird ausschließlich auf Ihrem Mac verarbeitet – kein Cloud-Recording, keine Audiodateien auf der Festplatte. Whisper läuft vollständig lokal, unterstützt Apple Silicon und Intel.',
  },
  {
    icon: Brain,
    title: 'Echtzeit-Spickzettel-Abgleich',
    desc: 'Laden Sie Ihre Verhandlungsagenda oder Checkliste vorab hoch. Souffleur verfolgt live, welche Punkte angesprochen, vereinbart, geparkt oder abgelehnt wurden.',
  },
  {
    icon: FileText,
    title: 'Strukturiertes Meeting-Summary',
    desc: 'Nach dem Gespräch: anonymisiertes Transkript, strukturierte Zusammenfassung und optionaler Follow-up-Prompt für Claude for Word – um vereinbarte Änderungen direkt in Vertragsdokumente zu übertragen.',
  },
  {
    icon: Shield,
    title: 'BYOK · DSGVO-first · Kein Tracking',
    desc: 'Ihr Anthropic API-Key bleibt auf Ihrem Gerät, verschlüsselt im macOS Keychain. Keine Telemetrie, keine Cloud-Speicherung, keine Weitergabe von Gesprächsinhalten. EU-API-Endpunkte wo verfügbar.',
  },
]

const workflow = [
  { n: '01', title: 'Spickzettel vorbereiten', desc: 'Agenda, Checkliste oder Verhandlungspunkte als XLSX, CSV oder Markdown hochladen.' },
  { n: '02', title: 'Meeting starten', desc: 'Souffleur hört über den System-Audio-Stream mit (BlackHole) – kein separates Mikrofon nötig.' },
  { n: '03', title: 'Live-Status im Blick', desc: 'Echtzeit-Anzeige: welche Punkte sind offen, besprochen, vereinbart oder abgelehnt.' },
  { n: '04', title: 'Summary exportieren', desc: 'Anonymisiertes Transkript + strukturierte Zusammenfassung nach dem Gespräch – optional mit Vertrags-Prompt.' },
]

const stack = [
  'Tauri 2 (Rust backend, macOS-nativ)',
  'React + Vite + shadcn/ui (Frontend)',
  'Whisper (lokale Transkription, whisper-rs)',
  'Anthropic Claude via BYOK (Coaching-Loop)',
  'SQLite + macOS Keychain (lokaler Speicher)',
]

export default function SouffleurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vencly.com' },
          { '@type': 'ListItem', position: 2, name: 'Projekte', item: 'https://vencly.com/projects' },
          { '@type': 'ListItem', position: 3, name: 'Souffleur', item: 'https://vencly.com/souffleur' },
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
              <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase">KI-Verhandlungs-Coach · macOS</span>
              <span className="text-xs bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full font-medium">In Entwicklung</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Souffleur –{' '}
              <span className="text-vencly-teal">Verhandlungs-Coach</span> der auf Ihrer Seite sitzt.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-4">
              Souffleur hört live in Online-Meetings zu, transkribiert lokal via Whisper und gleicht
              das Gespräch in Echtzeit mit Ihrem Verhandlungs-Spickzettel ab – welche Punkte sind noch
              offen, was wurde vereinbart, was abgelehnt?
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
              Strikt lokal, kein Cloud-Recording, BYOK, DSGVO-konform. Der einzige KI-Verhandlungsassistent
              für die <strong className="text-gray-800 dark:text-gray-200">Käuferseite</strong>.
            </p>
          </div>

          {/* Differentiator callout */}
          <section className="mb-16">
            <blockquote className="border-l-4 border-vencly-teal pl-6 py-2 bg-gray-100 dark:bg-vencly-card rounded-r-xl">
              <p className="text-gray-900 dark:text-white text-lg font-semibold">
                „Clari, Gong und Chorus coachen Verkäufer. Souffleur coacht den, der kauft – oder den Vertrag unterschreibt."
              </p>
            </blockquote>
          </section>

          {/* Key properties */}
          <section className="mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: 'Lokal', label: 'Transkription via Whisper' },
                { value: 'BYOK', label: 'Ihr API-Key, Ihr Gerät' },
                { value: 'macOS', label: 'Apple Silicon + Intel' },
                { value: 'DSGVO', label: 'Kein Cloud-Recording' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-4 text-center">
                  <div className="text-xl font-bold text-vencly-teal mb-1">{value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Workflow */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">So funktioniert Souffleur.</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Interesse an Souffleur?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Wir befinden uns in der Early-Development-Phase. Melden Sie sich für Updates oder als Beta-Tester.
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
