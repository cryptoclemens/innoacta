'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

const providers = [
  {
    badge: 'Bestes Free Tier',
    name: 'Oracle Cloud',
    specs: 'VM.Standard.A1.Flex – 2 OCPU, 12 GB RAM',
    price: 'Kostenlos (Always Free)',
    priceClass: 'text-green-600 dark:text-green-400',
    bestFor: 'Claude Code CLI, einfache Skripte, Einsteiger',
    highlight: true,
  },
  {
    badge: 'Bestes Preis-Leistungs-Verhältnis',
    name: 'Hetzner Cloud',
    specs: 'CX22 – 2 vCPU, 4 GB RAM / CX32 – 4 vCPU, 8 GB RAM',
    price: 'ab €4,50/mo (CX22)',
    priceClass: 'text-gray-900 dark:text-white',
    bestFor: 'Cowork, Browser-Automation, mittlere Projekte',
    highlight: false,
  },
  {
    badge: 'Beste Docs & Einsteiger-freundlich',
    name: 'DigitalOcean',
    specs: '2 vCPU, 4 GB RAM Droplet',
    price: 'ab ~$12/mo · $200 Guthaben für Neukunden',
    priceClass: 'text-gray-900 dark:text-white',
    bestFor: 'Parallele Agents, einfache Deployments',
    highlight: false,
  },
]

const tiers = [
  { tier: 'Basic', specs: '1 vCPU, 1 GB RAM', useCase: 'Claude Code CLI, einfache Skripte' },
  { tier: 'Standard', specs: '2 vCPU, 2–4 GB RAM', useCase: 'Cowork, Browser-Automation, mittlere Projekte' },
  { tier: 'Advanced', specs: '4+ vCPU, 8+ GB RAM', useCase: 'Parallele Agents, lokale LLMs, schwere Workloads' },
]

const setupScript = `# Ubuntu 22.04 LTS – Setup Script
# Als root oder mit sudo ausführen

apt update && apt upgrade -y
apt install -y curl git nodejs npm

# Node.js 20 (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Claude Code installieren
npm install -g @anthropic-ai/claude-code

# API Key setzen
export ANTHROPIC_API_KEY="your_api_key_here"
echo 'export ANTHROPIC_API_KEY="your_api_key_here"' >> ~/.bashrc

# Claude Code starten
claude`

export default function VmSetupPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/optaimum" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors mb-8 text-sm">
          <ArrowLeft size={16} /> Zurück zu OptAImum
        </Link>
        <div className="mb-8">
          <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase">OptAImum Tool · Stand März 2026</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">VM & Sandbox Setup</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Anbietervergleich, Tier-Empfehlung und fertiges Setup-Script für Claude Code.</p>
        </div>

        {/* Tier comparison */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Welcher Tier passt zu dir?</h2>
          <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-vencly-border bg-gray-50 dark:bg-vencly-bg">
                  <th className="text-left px-5 py-3 text-gray-500 font-mono text-xs uppercase">Tier</th>
                  <th className="text-left px-5 py-3 text-gray-500 font-mono text-xs uppercase">Specs</th>
                  <th className="text-left px-5 py-3 text-gray-500 font-mono text-xs uppercase">Ideal für</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t, i) => (
                  <tr key={t.tier} className={i < tiers.length - 1 ? 'border-b border-gray-100 dark:border-vencly-border' : ''}>
                    <td className="px-5 py-4 font-semibold text-gray-900 dark:text-white">{t.tier}</td>
                    <td className="px-5 py-4 text-gray-600 dark:text-gray-400 font-mono text-xs">{t.specs}</td>
                    <td className="px-5 py-4 text-gray-600 dark:text-gray-400 text-xs">{t.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Provider comparison */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Anbietervergleich</h2>
          <div className="space-y-4">
            {providers.map(p => (
              <div key={p.name} className={`bg-white dark:bg-vencly-card rounded-2xl p-6 border ${p.highlight ? 'border-vencly-teal/40' : 'border-gray-200 dark:border-vencly-border'}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`text-xs font-mono px-2 py-1 rounded-full ${p.highlight ? 'bg-vencly-teal/10 text-vencly-teal' : 'bg-gray-100 dark:bg-vencly-bg text-gray-500'}`}>{p.badge}</span>
                    <h3 className="text-gray-900 dark:text-white font-bold text-lg mt-2">{p.name}</h3>
                  </div>
                  <span className={`font-semibold text-sm ${p.priceClass}`}>{p.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-mono mb-2">{p.specs}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 size={14} className="text-vencly-teal shrink-0" />
                  {p.bestFor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Setup Script */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Setup-Script für Ubuntu 22.04 LTS</h2>
          <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 bg-gray-50 dark:bg-vencly-bg border-b border-gray-200 dark:border-vencly-border">
              <span className="text-xs font-mono text-gray-500">bash</span>
              <button
                onClick={async () => { await navigator.clipboard.writeText(setupScript) }}
                className="text-xs text-vencly-teal hover:underline"
              >
                Kopieren
              </button>
            </div>
            <pre className="p-5 text-xs text-gray-800 dark:text-gray-300 overflow-auto font-mono leading-relaxed">{setupScript}</pre>
          </div>
        </section>

        {/* Post setup */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nach dem Setup</h2>
          <ul className="space-y-3">
            {[
              'API Key hinterlegen: export ANTHROPIC_API_KEY="sk-..."',
              'Claude Code starten: claude',
              'Profil-MD anlegen: ~/.claude/PROFILE.md',
              'Optional: claude --dangerously-skip-permissions für autonome Workflows',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                <CheckCircle2 size={16} className="text-vencly-teal mt-0.5 shrink-0" />
                <code className="font-mono text-xs bg-gray-100 dark:bg-vencly-bg px-2 py-1 rounded">{item}</code>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-vencly-teal/5 border border-vencly-teal/20 rounded-xl text-sm text-gray-700 dark:text-gray-300">
            Erstelle danach dein{' '}
            <Link href="/optaimum/profil-md" className="text-vencly-teal hover:underline font-medium">Profil-Markdown</Link>
            {' '}– so ist Claude Code von Anfang an auf deinen Stil abgestimmt.
          </div>
        </section>
      </div>
    </div>
  )
}
