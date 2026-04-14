'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Copy, Check, Sparkles } from 'lucide-react'

const agents = ['Claude (claude.ai)', 'Claude Code', 'ChatGPT', 'Google Gemini', 'GitHub Copilot', 'Cursor AI']
const templates = [
  { label: 'E-Mail verfassen', task: 'Schreibe eine professionelle E-Mail an einen Kunden bezüglich', context: 'Ton: freundlich aber bestimmt. Länge: max. 150 Wörter.' },
  { label: 'Code debuggen', task: 'Analysiere den folgenden Code und identifiziere den Fehler:', context: 'Erkläre die Ursache und liefere eine korrigierte Version.' },
  { label: 'Text zusammenfassen', task: 'Fasse den folgenden Text in 3 Bullet Points zusammen:', context: 'Fokus auf Kernaussagen, keine Details weglassen die für Entscheidungen wichtig sind.' },
  { label: 'Recherche', task: 'Recherchiere und erkläre das Thema:', context: 'Strukturiere die Antwort mit Überschriften. Nenne die wichtigsten Quellen.' },
  { label: 'Präsentation planen', task: 'Erstelle eine Gliederung für eine 10-Minuten-Präsentation über:', context: 'Zielgruppe: Management. Fokus auf Business-Relevanz.' },
  { label: 'Gehaltsverhandlung', task: 'Helfe mir, meine Position für eine Gehaltsverhandlung vorzubereiten. Mein aktuelles Gehalt ist X, ich möchte Y erreichen.', context: 'Liefere Argumente, mögliche Einwände und Gegenargumente.' },
  { label: 'Social Media Post', task: 'Schreibe einen LinkedIn-Post über:', context: 'Ton: professionell, aber persönlich. Max. 200 Wörter. Mit Hashtag-Vorschlägen.' },
  { label: 'Prozess optimieren', task: 'Analysiere folgenden Prozess und schlage Verbesserungen vor:', context: 'Fokus auf Zeitersparnis und Fehlerreduktion.' },
  { label: 'Lernplan erstellen', task: 'Erstelle einen 4-Wochen-Lernplan für:', context: 'Täglich 30 Minuten verfügbar. Mit konkreten Ressourcen und Meilensteinen.' },
  { label: 'Meeting-Agenda', task: 'Erstelle eine strukturierte Meeting-Agenda für:', context: 'Dauer: 60 Minuten. Ziel: Entscheidung treffen über...' },
  { label: 'Analyse erstellen', task: 'Führe eine SWOT-Analyse durch für:', context: 'Berücksichtige aktuelle Markttrends und Wettbewerber.' },
  { label: 'Checkliste', task: 'Erstelle eine vollständige Checkliste für:', context: 'Priorisiert nach Wichtigkeit. Mit Zeitschätzungen.' },
]

function generatePrompt(agent: string, task: string, context: string, level: number) {
  const agentName = agent.split(' ')[0]
  const prefix = level === 0
    ? `Bitte hilf mir bei folgender Aufgabe:\n\n`
    : level === 1
    ? `Du bist ein erfahrener Experte. Ich brauche deine Hilfe bei:\n\n`
    : `Du bist ein Weltklasse-Experte${agent ? ` und optimal konfiguriert für ${agentName}` : ''}. Deine Aufgabe:\n\n`

  const suffix = level === 0
    ? ''
    : level === 1
    ? `\n\nBitte strukturiere deine Antwort klar und liefere konkrete, umsetzbare Ergebnisse.`
    : `\n\nVorgehensweise:\n1. Analysiere die Aufgabe sorgfältig\n2. Identifiziere alle relevanten Faktoren\n3. Liefere eine strukturierte, vollständige Antwort\n4. Nenne konkrete nächste Schritte\n\nQualitätsstandard: Professionell, präzise, actionable.`

  return `${prefix}${task}${context ? `\n\nKontext:\n${context}` : ''}${suffix}`
}

export default function PromptGeneratorPage() {
  const [agent, setAgent] = useState('')
  const [task, setTask] = useState('')
  const [context, setContext] = useState('')
  const [level, setLevel] = useState(1)
  const [copied, setCopied] = useState(false)

  const prompt = generatePrompt(agent, task, context, level)
  const canGenerate = task.trim().length > 5

  const copy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const applyTemplate = (t: typeof templates[0]) => {
    setTask(t.task)
    setContext(t.context)
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Link href="/optaimum" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors mb-8 text-sm">
          <ArrowLeft size={16} /> Zurück zu OptAImum
        </Link>
        <div className="mb-8">
          <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase">OptAImum Tool</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">Prompt-Generator</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Sofort einsetzbare Prompts – auch ohne Vorkenntnisse.</p>
        </div>

        {/* Quick templates */}
        <div className="mb-6">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">Quick-Start Templates</p>
          <div className="flex flex-wrap gap-2">
            {templates.map(t => (
              <button key={t.label} onClick={() => applyTemplate(t)}
                className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-vencly-border text-gray-600 dark:text-gray-400 hover:border-vencly-teal hover:text-vencly-teal transition-colors">
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8 space-y-6">
          <div>
            <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-2">Ziel-KI (optional)</label>
            <select value={agent} onChange={e => setAgent(e.target.value)}
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-white dark:bg-vencly-bg text-gray-900 dark:text-white focus:outline-none focus:border-vencly-teal">
              <option value="">Allgemein (alle KIs)</option>
              {agents.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>

          <div>
            <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-2">Aufgabe *</label>
            <textarea value={task} onChange={e => setTask(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-vencly-teal resize-none h-24"
              placeholder="Was soll die KI tun? Beschreibe die Aufgabe..." />
          </div>

          <div>
            <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-2">Kontext & Regeln (optional)</label>
            <textarea value={context} onChange={e => setContext(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-vencly-teal resize-none h-20"
              placeholder="Ton, Länge, Zielgruppe, Einschränkungen..." />
          </div>

          <div>
            <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-3">Komplexitätslevel</label>
            <div className="flex gap-2">
              {['Einsteiger', 'Standard', 'Pro'].map((l, i) => (
                <button key={l} onClick={() => setLevel(i)}
                  className={`flex-1 py-2 rounded-lg text-sm border transition-colors ${level === i ? 'bg-vencly-teal text-white border-vencly-teal' : 'border-gray-200 dark:border-vencly-border text-gray-700 dark:text-gray-300 hover:border-vencly-teal/60'}`}>
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {canGenerate && (
          <div className="mt-6 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-vencly-teal" />
                <h2 className="text-gray-900 dark:text-white font-bold">Generierter Prompt</h2>
              </div>
              <button onClick={copy} className="inline-flex items-center gap-1.5 text-sm text-vencly-teal hover:text-teal-500 transition-colors">
                {copied ? <><Check size={14} /> Kopiert!</> : <><Copy size={14} /> Kopieren</>}
              </button>
            </div>
            <pre className="bg-gray-50 dark:bg-vencly-bg rounded-xl p-4 text-sm text-gray-800 dark:text-gray-300 whitespace-pre-wrap font-mono border border-gray-200 dark:border-vencly-border">{prompt}</pre>
          </div>
        )}
      </div>
    </div>
  )
}
