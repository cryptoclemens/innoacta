import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Clock, Layers, Shuffle } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'OptAImum – KI-Nutzung auf das Maximum optimieren',
  description:
    'OptAImum ist das kostenlose All-in-One-Tool für effiziente KI-Nutzung: Profile, Skill- & Hook-Markdowns erstellen, LLM-Anbieter wechseln, Prompts generieren und KI-Sandboxen aufsetzen.',
  alternates: { canonical: 'https://vencly.com/optaimum' },
  openGraph: {
    title: 'OptAImum | Vencly',
    description: 'Deine KI-Nutzung. Auf das Maximum optimiert. Kostenlos, ohne Installation, funktioniert mit Claude, ChatGPT, Gemini & Co.',
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
    'Kostenloses Browser-Tool zur Optimierung der KI-Nutzung. Profile-MD, Skill-MD, Hook-MD erstellen, LLM-Anbieter wechseln, Prompts generieren, VM-Sandbox aufsetzen.',
  author: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  license: 'https://opensource.org/licenses/MIT',
}

const whyItems = [
  {
    icon: Clock,
    title: 'Minuten statt Stunden',
    desc: 'Prozessautomatisierung ersetzt manuelle Recherche und Trial-and-Error. Was bisher Stunden dauerte, ist in wenigen Minuten erledigt.',
  },
  {
    icon: Layers,
    title: 'Personalisiert',
    desc: 'Keine generischen Templates – jedes Ergebnis ist auf deinen Kommunikationsstil, dein Erfahrungslevel und deinen Anwendungsfall zugeschnitten.',
  },
  {
    icon: Shuffle,
    title: 'Kein Lock-in',
    desc: 'Alle erstellten Dateien funktionieren plattformübergreifend: Claude, ChatGPT, Gemini. Du entscheidest, welches Modell du nutzt.',
  },
]

const features = [
  {
    n: '01',
    badge: 'Starter-Tipp',
    title: 'Profil-MD Creator',
    subtitle: 'Persönlicher Kontext über dich – wer du bist, wie du kommunizierst, was du vermeidest.',
    desc: 'Ein geführter Wizard erfasst deine Sprachpräferenz, dein Erfahrungslevel, deinen Kommunikationsstil und deine Anwendungsfälle. Das Ergebnis: ein strukturiertes Profil-Markdown, das du direkt in Claude.ai, ChatGPT oder als PROFILE.md in Claude Code einsetzen kannst.',
    points: ['Sprach- & Stilpräferenzen', 'Hauptanwendungsfälle definieren', 'Dinge, die die KI vermeiden soll', 'Platzierungsanleitung für alle Plattformen'],
  },
  {
    n: '02',
    badge: 'Workflow',
    title: 'Skill-MD Generator',
    subtitle: 'Fachlicher Kontext für einen spezifischen Use-Case oder eine Aufgabe.',
    desc: 'Definiere Output-Formate (Fließtext, Bullet Points, Code, Tabellen, JSON), das technische Level und deine eingesetzten Tools und Frameworks. Optionale Einschränkungen wie DSGVO-Konformität oder maximale Wortanzahl werden automatisch eingebettet.',
    points: ['Output-Format-Auswahl', 'Technisches Level konfigurieren', 'Tools & Frameworks angeben', 'Constraints automatisch einbetten'],
  },
  {
    n: '03',
    badge: 'Automatisierung',
    title: 'Hook-MD Creator',
    subtitle: 'Verhaltensregeln & Automatisierungen – was die KI immer/nie tun soll.',
    desc: 'Lege fest, was die KI immer oder nie tun soll, welche Antwortformate bevorzugt werden und wann eine Bestätigung angefordert werden muss (Dateioperationen, API-Calls, permanente Änderungen). Automatisierungsregeln wie "Nach jeder Aufgabe eine kurze Zusammenfassung ausgeben" werden direkt generiert.',
    points: ['Always/Never-Regeln', 'Bestätigungs-Trigger definieren', 'Antwortformat festlegen', 'Automatisierungsregeln generieren'],
  },
  {
    n: '04',
    badge: 'Flexibilität',
    title: 'LLM-Wechsel in Minuten',
    subtitle: 'Wechsle deinen KI-Anbieter ohne Datenverlust. Deine Einstellungen, dein Stil und dein Kontext kommen mit.',
    desc: 'OptAImum generiert einen individuellen Schritt-für-Schritt-Migrationsplan für jeden Anbieterwechsel (ChatGPT ↔ Claude ↔ Gemini ↔ Copilot) – inklusive Zeitschätzung, Schwierigkeitsgrad und einem herunterladbaren Kontext-Export-Template.',
    points: ['Alle Richtungen: ChatGPT ↔ Claude ↔ Gemini', 'Zeitschätzung & Schwierigkeitsgrad', 'Kontext-Export-Template (.md)', '~18 Min. für einen vollständigen Wechsel'],
  },
  {
    n: '05',
    badge: 'Anfänger-freundlich',
    title: 'Prompt-Generator',
    subtitle: 'Sofort einsetzbare Prompts für deine KI-Agenten – auch ohne Vorkenntnisse.',
    desc: '12 Quick-Start-Templates (E-Mails, Code-Debugging, Präsentationen, Recherche, Gehaltsverhandlung u.v.m.), ein Level-Slider von Beginner bis Pro und optionale Gemini-KI-Unterstützung. Funktioniert für Claude Cowork, claude.ai, ChatGPT, Gemini, GitHub Copilot und Cursor AI.',
    points: ['12 Quick-Start-Templates', 'Level-Slider: Beginner / Standard / Pro', 'Alle großen KI-Plattformen', 'Prompt-Tipps für Einsteiger eingebaut'],
  },
  {
    n: '06',
    badge: 'Developer',
    title: 'VM & Sandbox Setup',
    subtitle: 'Vergleiche Anbieter, finde das beste Preis-Leistungs-Verhältnis und setze deine KI-Sandbox in Minuten auf.',
    desc: 'Anbietervergleich (Oracle Cloud free tier, Hetzner ab €4,50/mo, DigitalOcean ab ~$12/mo) mit Empfehlungen nach Use-Case. Inkl. fertigem Setup-Script für Ubuntu 22.04 LTS und Post-Setup-Anleitung für Anthropic API Key und Claude Code.',
    points: ['Oracle Cloud: 2 OCPU, 12 GB RAM – kostenlos', 'Hetzner CX22 ab €4,50/mo', 'Fertige Setup-Scripts', 'Anleitung für Claude Code / OpenClaw'],
  },
]

const llmComparison = [
  { feature: 'Kontextfenster', claude: '200k Tokens', chatgpt: '128k Tokens' },
  { feature: 'Agent-Plattformen', claude: 'Claude Code / Cowork', chatgpt: 'GPTs / Assistants API' },
  { feature: 'EU-Datenschutz', claude: '✓ Anthropic', chatgpt: '⚠ OpenAI US' },
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
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase">
                Produkt · Open Source · Kostenlos
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              OptAImum –{' '}
              <span className="text-vencly-teal">KI-Nutzung</span>{' '}
              auf das Maximum optimiert.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-4">
              Profile, Skill- & Hook-Markdowns erstellen, Anbieter in Minuten wechseln,
              Prompts generieren und KI-Sandboxen aufsetzen – alles an einem Ort.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
              Kostenlos, ohne Installation, vollständig im Browser – und kompatibel mit
              Claude, ChatGPT, Gemini, Copilot und Cursor AI.
            </p>
          </div>

          {/* CTA quote */}
          <section className="mb-20">
            <blockquote className="border-l-4 border-vencly-teal pl-6 py-2 bg-gray-100 dark:bg-vencly-card rounded-r-xl">
              <p className="text-gray-900 dark:text-white text-xl font-semibold">
                „Starte mit dem MD-Creator –{' '}
                in 5 Minuten hast du dein erstes personalisiertes Profil."
              </p>
            </blockquote>
          </section>

          {/* Why */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Warum OptAImum?</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {whyItems.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-6">
                  <div className="w-10 h-10 bg-vencly-teal/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-vencly-teal" />
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Die 6 Tools im Detail.</h2>
            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.n} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-vencly-teal font-mono text-lg font-bold">{f.n}</span>
                    <span className="text-xs font-mono text-vencly-teal bg-vencly-teal/10 px-2 py-1 rounded-full">{f.badge}</span>
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{f.title}</h3>
                  <p className="text-vencly-teal text-sm mb-3 italic">{f.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{f.desc}</p>
                  <ul className="grid grid-cols-2 gap-1">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-xs">
                        <CheckCircle2 size={12} className="text-vencly-teal shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* LLM comparison */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Claude vs. ChatGPT – Quick Reference.</h2>
            <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-vencly-border">
                    <th className="text-left px-6 py-3 text-gray-500 dark:text-gray-400 font-mono text-xs uppercase tracking-wider">Feature</th>
                    <th className="text-left px-6 py-3 text-vencly-teal font-semibold">Claude</th>
                    <th className="text-left px-6 py-3 text-gray-600 dark:text-gray-400 font-semibold">ChatGPT</th>
                  </tr>
                </thead>
                <tbody>
                  {llmComparison.map((row, i) => (
                    <tr key={row.feature} className={i < llmComparison.length - 1 ? 'border-b border-gray-100 dark:border-vencly-border' : ''}>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{row.feature}</td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">{row.claude}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{row.chatgpt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Open source */}
          <section className="mb-20">
            <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8 text-center">
              <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase mb-3 block">MIT License · v0.1.5</span>
              <h2 className="text-gray-900 dark:text-white font-bold text-xl mb-3">Für die KI-Community</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto mb-2">
                OptAImum ist ein Open-Source-Community-Projekt – kostenlos, ohne externe Abhängigkeiten,
                vollständig offline-fähig. Entwickelt von Clemens Pompey, powered by Innovation Republic.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs">Feedback, Ideen und Beiträge sind willkommen.</p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              OptAImum für Ihr Team einführen?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Wir zeigen Ihnen, wie OptAImum KI-Workflows im Unternehmenskontext beschleunigt.
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
