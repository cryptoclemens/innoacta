'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Copy, Check, ChevronRight } from 'lucide-react'

const STEPS = ['Sprache', 'Erfahrung', 'Stil', 'Anwendungsfälle', 'Vermeiden', 'Ergebnis']

const useCases = ['E-Mails schreiben', 'Code & Entwicklung', 'Recherche & Analyse', 'Präsentationen', 'Social Media', 'Texte zusammenfassen', 'Brainstorming', 'Übersetzungen']
const avoidOptions = ['Keine Emojis', 'Keine langen Einleitungen', 'Keine englischen Antworten', 'Kein Berater-Jargon', 'Keine unnötigen Wiederholungen', 'Kein Smalltalk']

function generateProfilMd(data: {
  language: string; level: string; style: string; uses: string[]; avoid: string[]; customAvoid: string
}) {
  const avoidAll = [...data.avoid, ...(data.customAvoid ? [data.customAvoid] : [])]
  return `# Profil

## Sprache & Kommunikation
- Bevorzugte Sprache: ${data.language}
- Kommunikationsstil: ${data.style}

## Erfahrungslevel
${data.level}

## Hauptanwendungsfälle
${data.uses.map(u => `- ${u}`).join('\n')}

## Bitte vermeiden
${avoidAll.map(a => `- ${a}`).join('\n')}

---
*Erstellt mit OptAImum MD-Creator*`
}

export default function ProfilMdPage() {
  const [step, setStep] = useState(0)
  const [language, setLanguage] = useState('Deutsch')
  const [level, setLevel] = useState('')
  const [style, setStyle] = useState('')
  const [uses, setUses] = useState<string[]>([])
  const [avoid, setAvoid] = useState<string[]>([])
  const [customAvoid, setCustomAvoid] = useState('')
  const [copied, setCopied] = useState(false)

  const md = generateProfilMd({ language, level, style, uses, avoid, customAvoid })

  const toggle = (arr: string[], setArr: (v: string[]) => void, val: string) =>
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  const canNext = [
    !!language,
    !!level,
    !!style,
    uses.length > 0,
    true,
  ][step] ?? true

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
    <div className="flex flex-wrap gap-2">
      {options.map(o => (
        <button key={o} onClick={() => onChange(o)}
          className={`px-4 py-2 rounded-lg text-sm border transition-colors ${value === o ? 'bg-vencly-teal text-white border-vencly-teal' : 'border-gray-200 dark:border-vencly-border text-gray-700 dark:text-gray-300 hover:border-vencly-teal/60'}`}>
          {o}
        </button>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Link href="/optaimum" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors mb-8 text-sm">
          <ArrowLeft size={16} /> Zurück zu OptAImum
        </Link>

        <div className="mb-8">
          <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase">OptAImum Tool</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">Profil-MD Creator</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Persönlicher Kontext für deine KI – in 5 Minuten.</p>
        </div>

        {/* Progress */}
        <div className="flex gap-1 mb-8">
          {STEPS.slice(0, -1).map((s, i) => (
            <div key={s} className={`flex-1 h-1 rounded-full transition-colors ${i <= step ? 'bg-vencly-teal' : 'bg-gray-200 dark:bg-vencly-border'}`} />
          ))}
        </div>

        <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8">
          {step === 0 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Bevorzugte Sprache</h2>
              <p className="text-gray-500 text-sm mb-6">In welcher Sprache soll die KI hauptsächlich antworten?</p>
              <SingleSelect options={['Deutsch', 'Englisch', 'Beides', 'Andere']} value={language} onChange={setLanguage} />
            </>
          )}
          {step === 1 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Dein Erfahrungslevel</h2>
              <p className="text-gray-500 text-sm mb-6">Wie soll die KI den Komplexitätsgrad ihrer Antworten einschätzen?</p>
              <SingleSelect options={['Einsteiger – erkläre alles einfach', 'Fortgeschritten – normales Niveau', 'Profi – geh gerne in die Tiefe']} value={level} onChange={setLevel} />
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Kommunikationsstil</h2>
              <p className="text-gray-500 text-sm mb-6">Wie soll die KI mit dir kommunizieren?</p>
              <SingleSelect options={['Locker & direkt', 'Professionell & präzise', 'Detailliert & ausführlich', 'Sehr kompakt & stichpunktartig']} value={style} onChange={setStyle} />
            </>
          )}
          {step === 3 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Hauptanwendungsfälle</h2>
              <p className="text-gray-500 text-sm mb-6">Wofür nutzt du KI hauptsächlich? (Mehrere möglich)</p>
              <ChipGroup options={useCases} selected={uses} onToggle={v => toggle(uses, setUses, v)} />
            </>
          )}
          {step === 4 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Was soll die KI vermeiden?</h2>
              <p className="text-gray-500 text-sm mb-6">Wähle aus oder schreib deine eigenen Regeln.</p>
              <ChipGroup options={avoidOptions} selected={avoid} onToggle={v => toggle(avoid, setAvoid, v)} />
              <input
                className="mt-4 w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-vencly-teal"
                placeholder="Eigene Regel hinzufügen..."
                value={customAvoid}
                onChange={e => setCustomAvoid(e.target.value)}
              />
            </>
          )}
          {step === 5 && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-gray-900 dark:text-white font-bold text-lg">Dein Profil-Markdown</h2>
                <button onClick={copy} className="inline-flex items-center gap-1.5 text-sm text-vencly-teal hover:text-teal-500 transition-colors">
                  {copied ? <><Check size={14} /> Kopiert!</> : <><Copy size={14} /> Kopieren</>}
                </button>
              </div>
              <pre className="bg-gray-50 dark:bg-vencly-bg rounded-xl p-4 text-xs text-gray-800 dark:text-gray-300 whitespace-pre-wrap overflow-auto max-h-80 font-mono border border-gray-200 dark:border-vencly-border">{md}</pre>
              <div className="mt-6 p-4 bg-vencly-teal/5 border border-vencly-teal/20 rounded-xl">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Wo einfügen?</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>· <strong className="text-gray-900 dark:text-white">Claude.ai:</strong> Einstellungen → Personalization → Custom Instructions</li>
                  <li>· <strong className="text-gray-900 dark:text-white">ChatGPT:</strong> Einstellungen → Personalization → Custom Instructions</li>
                  <li>· <strong className="text-gray-900 dark:text-white">Claude Code:</strong> speichern als <code className="text-vencly-teal">~/.claude/PROFILE.md</code></li>
                </ul>
              </div>
            </>
          )}

          <div className="flex justify-between mt-8">
            {step > 0 ? (
              <button onClick={() => setStep(s => s - 1)} className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">← Zurück</button>
            ) : <span />}
            {step < 5 ? (
              <button onClick={() => setStep(s => s + 1)} disabled={!canNext}
                className="inline-flex items-center gap-1.5 bg-vencly-teal hover:bg-teal-600 disabled:opacity-40 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
                Weiter <ChevronRight size={14} />
              </button>
            ) : (
              <button onClick={() => { setStep(0); setLevel(''); setStyle(''); setUses([]); setAvoid([]); setCustomAvoid('') }}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors">
                Neu starten
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
