'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Copy, Check, ChevronRight } from 'lucide-react'

const formatOptions = ['Fließtext', 'Bullet Points', 'Code', 'Tabellen', 'JSON', 'Markdown', 'Strukturierter Bericht']
const constraintOptions = ['DSGVO-konform', 'Nur Deutsch', 'Quellen immer angeben', 'Keine externen Links', 'Immer Beispiele liefern']

function generateSkillMd(data: { formats: string[]; level: string; tools: string; constraints: string[]; customConstraint: string; useCase: string }) {
  const constraintsAll = [...data.constraints, ...(data.customConstraint ? [data.customConstraint] : [])]
  return `# Skill-Kontext${data.useCase ? `: ${data.useCase}` : ''}

## Output-Formate
${data.formats.map(f => `- ${f}`).join('\n')}

## Technisches Level der Antworten
${data.level}

${data.tools ? `## Eingesetzte Tools & Frameworks\n${data.tools}\n` : ''}${constraintsAll.length ? `\n## Einschränkungen\n${constraintsAll.map(c => `- ${c}`).join('\n')}` : ''}

---
*Erstellt mit OptAImum Skill-MD Generator*`
}

export default function SkillMdPage() {
  const [step, setStep] = useState(0)
  const [useCase, setUseCase] = useState('')
  const [formats, setFormats] = useState<string[]>([])
  const [level, setLevel] = useState('')
  const [tools, setTools] = useState('')
  const [constraints, setConstraints] = useState<string[]>([])
  const [customConstraint, setCustomConstraint] = useState('')
  const [copied, setCopied] = useState(false)

  const md = generateSkillMd({ formats, level, tools, constraints, customConstraint, useCase })

  const toggle = (arr: string[], setArr: (v: string[]) => void, val: string) =>
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  const canNext = [true, formats.length > 0, !!level, true, true][step] ?? true

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

  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Link href="/optaimum" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors mb-8 text-sm">
          <ArrowLeft size={16} /> Zurück zu OptAImum
        </Link>

        <div className="mb-8">
          <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase">OptAImum Tool</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">Skill-MD Generator</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Fachlicher Kontext für einen spezifischen Use-Case.</p>
        </div>

        <div className="flex gap-1 mb-8">
          {Array.from({ length: STEPS }).map((_, i) => (
            <div key={i} className={`flex-1 h-1 rounded-full transition-colors ${i <= step ? 'bg-vencly-teal' : 'bg-gray-200 dark:bg-vencly-border'}`} />
          ))}
        </div>

        <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8">
          {step === 0 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Für welchen Use-Case?</h2>
              <p className="text-gray-500 text-sm mb-4">Optional: Beschreibe kurz, wofür dieser Skill-Kontext genutzt wird.</p>
              <input
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-vencly-teal"
                placeholder="z.B. Code-Review, E-Mail-Drafting, Marktanalyse..."
                value={useCase}
                onChange={e => setUseCase(e.target.value)}
              />
            </>
          )}
          {step === 1 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Bevorzugte Output-Formate</h2>
              <p className="text-gray-500 text-sm mb-6">Welche Formate soll die KI verwenden? (Mehrere möglich)</p>
              <ChipGroup options={formatOptions} selected={formats} onToggle={v => toggle(formats, setFormats, v)} />
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Technisches Level</h2>
              <p className="text-gray-500 text-sm mb-6">Wie fachlich sollen die Antworten sein?</p>
              <SingleSelect
                options={['Laie – einfach und verständlich', 'Technisch – Fachbegriffe erlaubt', 'Experte – gehe tief in die Materie', 'Variabel – je nach Kontext anpassen']}
                value={level} onChange={setLevel}
              />
            </>
          )}
          {step === 3 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Tools & Frameworks</h2>
              <p className="text-gray-500 text-sm mb-4">Welche Tools oder Technologien sind relevant?</p>
              <textarea
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-vencly-teal resize-none h-24"
                placeholder="z.B. Python, Notion, Shopify, Next.js, Excel..."
                value={tools}
                onChange={e => setTools(e.target.value)}
              />
            </>
          )}
          {step === 4 && (
            <>
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Einschränkungen</h2>
              <p className="text-gray-500 text-sm mb-6">Welche Regeln gelten immer?</p>
              <ChipGroup options={constraintOptions} selected={constraints} onToggle={v => toggle(constraints, setConstraints, v)} />
              <input
                className="mt-4 w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-vencly-teal"
                placeholder="Eigene Einschränkung..."
                value={customConstraint}
                onChange={e => setCustomConstraint(e.target.value)}
              />
            </>
          )}
          {step === 5 && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-gray-900 dark:text-white font-bold text-lg">Dein Skill-Markdown</h2>
                <button onClick={copy} className="inline-flex items-center gap-1.5 text-sm text-vencly-teal hover:text-teal-500 transition-colors">
                  {copied ? <><Check size={14} /> Kopiert!</> : <><Copy size={14} /> Kopieren</>}
                </button>
              </div>
              <pre className="bg-gray-50 dark:bg-vencly-bg rounded-xl p-4 text-xs text-gray-800 dark:text-gray-300 whitespace-pre-wrap overflow-auto max-h-80 font-mono border border-gray-200 dark:border-vencly-border">{md}</pre>
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">Tipp: Speichere als <code className="text-vencly-teal">SKILL.md</code> im Projektordner oder füge den Inhalt als System-Prompt ein.</p>
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
              <button onClick={() => { setStep(0); setUseCase(''); setFormats([]); setLevel(''); setTools(''); setConstraints([]); setCustomConstraint('') }}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors">Neu starten</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
