'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Copy, Check, ChevronRight } from 'lucide-react'

const alwaysOptions = ['Aufgabe vor Ausführung zusammenfassen', 'Code-Änderungen erklären', 'Alternativen nennen', 'Am Ende eine kurze Zusammenfassung ausgeben', 'Risiken hervorheben']
const neverOptions = ['Dateien ohne Bestätigung löschen', 'Englisch antworten wenn Deutsch verwendet wird', 'Code ohne Erklärung einfügen', 'Annahmen ohne Rückfrage treffen']
const triggerOptions = ['Dateioperationen', 'API-Calls', 'Permanente Änderungen', 'Alles Wichtige', 'Produktiv-Deployments']

function generateHookMd(data: {
  always: string[]; customAlways: string; never: string[]; customNever: string;
  format: string; triggers: string[]; automation: string
}) {
  return `# Hook-Konfiguration

## Immer ausführen
${[...data.always, ...(data.customAlways ? [data.customAlways] : [])].map(r => `- ${r}`).join('\n') || '- (keine)'}

## Nie ausführen
${[...data.never, ...(data.customNever ? [data.customNever] : [])].map(r => `- ${r}`).join('\n') || '- (keine)'}

## Bevorzugtes Antwortformat
${data.format}

## Bestätigung erforderlich bei
${data.triggers.length ? data.triggers.map(t => `- ${t}`).join('\n') : '- (keine)'}
${data.automation ? `\n## Automatisierungsregeln\n${data.automation}` : ''}

---
*Erstellt mit OptAImum Hook-MD Creator*`
}

export default function HookMdPage() {
  const [step, setStep] = useState(0)
  const [always, setAlways] = useState<string[]>([])
  const [customAlways, setCustomAlways] = useState('')
  const [never, setNever] = useState<string[]>([])
  const [customNever, setCustomNever] = useState('')
  const [format, setFormat] = useState('')
  const [triggers, setTriggers] = useState<string[]>([])
  const [automation, setAutomation] = useState('')
  const [copied, setCopied] = useState(false)

  const md = generateHookMd({ always, customAlways, never, customNever, format, triggers, automation })
  const toggle = (arr: string[], setArr: (v: string[]) => void, val: string) =>
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  const copy = async () => {
    await navigator.clipboard.writeText(md)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const ChipGroup = ({ options, selected, onToggle }: { options: string[]; selected: string[]; onToggle: (v: string) => void }) => (
    <div className="flex flex-wrap gap-2">
      {options.map(o => (
        <button key={o} onClick={() => onToggle(o)}
          className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${selected.includes(o) ? 'bg-vencly-teal text-white border-vencly-teal' : 'border-gray-200 dark:border-vencly-border text-gray-700 dark:text-gray-300 hover:border-vencly-teal/60'}`}>
          {o}
        </button>
      ))}
    </div>
  )

  const SingleSelect = ({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) => (
    <div className="flex flex-col gap-2">
      {options.map(o => (
        <button key={o} onClick={() => onChange(o)}
          className={`text-left px-4 py-3 rounded-lg text-sm border transition-colors ${value === o ? 'bg-vencly-teal text-white border-vencly-teal' : 'border-gray-200 dark:border-vencly-border text-gray-700 dark:text-gray-300 hover:border-vencly-teal/60'}`}>
          {o}
        </button>
      ))}
    </div>
  )

  const STEPS = 5
  const canNext = [true, true, !!format, true, true][step] ?? true

  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Link href="/optaimum" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors mb-8 text-sm">
          <ArrowLeft size={16} /> Zurück zu OptAImum
        </Link>
        <div className="mb-8">
          <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase">OptAImum Tool</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">Hook-MD Creator</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Verhaltensregeln & Automatisierungen für deine KI.</p>
        </div>

        <div className="flex gap-1 mb-8">
          {Array.from({ length: STEPS }).map((_, i) => (
            <div key={i} className={`flex-1 h-1 rounded-full transition-colors ${i <= step ? 'bg-vencly-teal' : 'bg-gray-200 dark:bg-vencly-border'}`} />
          ))}
        </div>

        <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8">
          {step === 0 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Immer-Regeln</h2>
              <p className="text-gray-500 text-sm mb-6">Was soll die KI bei jeder Antwort tun?</p>
              <ChipGroup options={alwaysOptions} selected={always} onToggle={v => toggle(always, setAlways, v)} />
              <input className="mt-4 w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-vencly-teal"
                placeholder="Eigene Regel..." value={customAlways} onChange={e => setCustomAlways(e.target.value)} />
            </>
          )}
          {step === 1 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Nie-Regeln</h2>
              <p className="text-gray-500 text-sm mb-6">Was soll die KI niemals tun?</p>
              <ChipGroup options={neverOptions} selected={never} onToggle={v => toggle(never, setNever, v)} />
              <input className="mt-4 w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-vencly-teal"
                placeholder="Eigene Regel..." value={customNever} onChange={e => setCustomNever(e.target.value)} />
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Antwortformat</h2>
              <p className="text-gray-500 text-sm mb-6">Wie sollen Antworten strukturiert sein?</p>
              <SingleSelect options={['Strukturiert mit Überschriften', 'Kompakt & direkt', 'Adaptiv – je nach Aufgabe', 'Code-first – Code vor Erklärung']} value={format} onChange={setFormat} />
            </>
          )}
          {step === 3 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Bestätigungs-Trigger</h2>
              <p className="text-gray-500 text-sm mb-6">Bei welchen Aktionen soll die KI nachfragen?</p>
              <ChipGroup options={triggerOptions} selected={triggers} onToggle={v => toggle(triggers, setTriggers, v)} />
            </>
          )}
          {step === 4 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Automatisierungsregeln</h2>
              <p className="text-gray-500 text-sm mb-4">Optional: Eigene Automatisierungen beschreiben.</p>
              <textarea className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-vencly-teal resize-none h-28"
                placeholder="z.B. Nach jeder Aufgabe eine kurze Zusammenfassung ausgeben. Bei Codeänderungen immer einen Test vorschlagen."
                value={automation} onChange={e => setAutomation(e.target.value)} />
            </>
          )}
          {step === 5 && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-gray-900 dark:text-white font-bold text-lg">Dein Hook-Markdown</h2>
                <button onClick={copy} className="inline-flex items-center gap-1.5 text-sm text-vencly-teal hover:text-teal-500 transition-colors">
                  {copied ? <><Check size={14} /> Kopiert!</> : <><Copy size={14} /> Kopieren</>}
                </button>
              </div>
              <pre className="bg-gray-50 dark:bg-vencly-bg rounded-xl p-4 text-xs text-gray-800 dark:text-gray-300 whitespace-pre-wrap overflow-auto max-h-80 font-mono border border-gray-200 dark:border-vencly-border">{md}</pre>
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">Tipp: Speichere als <code className="text-vencly-teal">HOOKS.md</code> oder füge in deinen System-Prompt ein.</p>
            </>
          )}

          <div className="flex justify-between mt-8">
            {step > 0 ? (
              <button onClick={() => setStep(s => s - 1)} className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">← Zurück</button>
            ) : <span />}
            {step < STEPS ? (
              <button onClick={() => setStep(s => s + 1)} disabled={!canNext}
                className="inline-flex items-center gap-1.5 bg-vencly-teal hover:bg-teal-600 disabled:opacity-40 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
                Weiter <ChevronRight size={14} />
              </button>
            ) : (
              <button onClick={() => { setStep(0); setAlways([]); setCustomAlways(''); setNever([]); setCustomNever(''); setFormat(''); setTriggers([]); setAutomation('') }}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors">Neu starten</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
