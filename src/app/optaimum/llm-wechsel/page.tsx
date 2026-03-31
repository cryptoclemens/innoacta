'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, CheckCircle2 } from 'lucide-react'

const providers = ['ChatGPT', 'Claude', 'Gemini', 'Copilot']

type Guide = { steps: { title: string; duration: string; detail: string }[]; totalMin: number; difficulty: string }

const guides: Record<string, Guide> = {
  'ChatGPT→Claude': {
    difficulty: 'Einfach', totalMin: 18,
    steps: [
      { title: 'ChatGPT-Kontext exportieren', duration: '2 min', detail: 'Einstellungen → Data Controls → Export data. Du erhältst eine ZIP mit all deinen Conversations und Custom Instructions.' },
      { title: 'Custom Instructions sichern', duration: '1 min', detail: 'Öffne die exportierte ZIP, kopiere deine Custom Instructions in eine .txt-Datei.' },
      { title: 'Claude-Account einrichten', duration: '2 min', detail: 'Registriere dich auf claude.ai. Pro-Plan empfohlen für 200k Kontext und höhere Limits.' },
      { title: 'Profil-MD zu Claude hinzufügen', duration: '3 min', detail: 'Nutze den OptAImum Profil-MD Creator und füge das Ergebnis in Einstellungen → Personalization → Custom Instructions ein.' },
      { title: 'Projektkontexte übertragen', duration: '5 min', detail: 'Lege in Claude neue Projects an. Kopiere relevante Hintergrundinfos als Project Instructions.' },
      { title: 'Claude testen', duration: '5 min', detail: 'Stelle die gleichen Fragen wie bei ChatGPT – prüfe, ob der Stil und der Kontext stimmen.' },
    ],
  },
  'Claude→ChatGPT': {
    difficulty: 'Einfach', totalMin: 15,
    steps: [
      { title: 'Claude Custom Instructions exportieren', duration: '1 min', detail: 'Kopiere deine Custom Instructions aus Einstellungen → Personalization.' },
      { title: 'ChatGPT-Account einrichten', duration: '2 min', detail: 'Registriere dich auf chatgpt.com. Plus-Plan für GPT-4o empfohlen.' },
      { title: 'Custom Instructions in ChatGPT einfügen', duration: '3 min', detail: 'Einstellungen → Personalization → Custom Instructions. Passe den Inhalt ggf. an ChatGPT-Syntax an.' },
      { title: 'GPTs für deine Use-Cases finden', duration: '4 min', detail: 'Im GPT Store gibt es vorgefertigte Assistenten für viele Anwendungsfälle.' },
      { title: 'Testen & iterieren', duration: '5 min', detail: 'Vergleiche Antwortqualität mit deinen bisherigen Claude-Prompts.' },
    ],
  },
  'ChatGPT→Gemini': {
    difficulty: 'Mittel', totalMin: 20,
    steps: [
      { title: 'ChatGPT exportieren', duration: '2 min', detail: 'Einstellungen → Data Controls → Export data.' },
      { title: 'Google-Account bereit?', duration: '1 min', detail: 'Gemini ist direkt mit deinem Google-Account verknüpft – kein separater Account nötig.' },
      { title: 'Gemini auf gemini.google.com öffnen', duration: '1 min', detail: 'Advanced-Plan (Gemini Ultra) für beste Ergebnisse.' },
      { title: 'Gems konfigurieren', duration: '5 min', detail: 'Gems sind Geminis Custom Instructions. Erstelle einen neuen Gem mit deinem Profil.' },
      { title: 'Google Workspace verbinden', duration: '6 min', detail: 'Gemini ist tief in Google Docs, Gmail und Drive integriert – verbinde deine Workspace-Apps.' },
      { title: 'Testen', duration: '5 min', detail: 'Prüfe besonders die Qualität bei langen Dokumenten – Gemini hat ein sehr großes Kontextfenster.' },
    ],
  },
  'Gemini→Claude': {
    difficulty: 'Einfach', totalMin: 16,
    steps: [
      { title: 'Gems-Konfiguration kopieren', duration: '2 min', detail: 'Öffne deine Gemini Gems und kopiere die Konfiguration.' },
      { title: 'Claude-Account', duration: '1 min', detail: 'Registriere dich auf claude.ai.' },
      { title: 'Profil-MD erstellen', duration: '5 min', detail: 'Nutze den OptAImum Profil-MD Creator für ein personalisiertes Profil.' },
      { title: 'Projects in Claude anlegen', duration: '3 min', detail: 'Lege Projects für deine wichtigsten Kontexte an – Claude merkt sich alles innerhalb eines Projects.' },
      { title: 'Testen', duration: '5 min', detail: 'Claude überzeugt besonders bei nuanciertem Schreiben und langen Dokumenten.' },
    ],
  },
}

const getGuide = (from: string, to: string): Guide | null => guides[`${from}→${to}`] ?? null

export default function LlmWechselPage() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const guide = from && to && from !== to ? getGuide(from, to) : null
  const genericGuide: Guide = {
    difficulty: 'Einfach', totalMin: 20,
    steps: [
      { title: 'Aktuellen Kontext sichern', duration: '3 min', detail: `Exportiere oder kopiere deine Custom Instructions und wichtigen Projekt-Kontexte aus ${from}.` },
      { title: `${to}-Account einrichten`, duration: '3 min', detail: `Erstelle einen Account bei ${to} und wähle den passenden Plan.` },
      { title: 'Profil-MD erstellen', duration: '5 min', detail: 'Nutze den OptAImum Profil-MD Creator für ein personalisiertes Profil – funktioniert mit allen Plattformen.' },
      { title: 'Profil in neuem Anbieter hinterlegen', duration: '3 min', detail: `Füge dein Profil-Markdown in die Custom Instructions / System Prompt von ${to} ein.` },
      { title: 'Erste Tests', duration: '5 min', detail: 'Stelle einige typische Fragen aus deinem Workflow und vergleiche die Antwortqualität.' },
      { title: 'Iterieren', duration: '1 min', detail: 'Passe dein Profil bei Bedarf an – jede Plattform reagiert leicht unterschiedlich.' },
    ],
  }

  const displayGuide = guide ?? (from && to && from !== to ? genericGuide : null)

  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Link href="/optaimum" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors mb-8 text-sm">
          <ArrowLeft size={16} /> Zurück zu OptAImum
        </Link>
        <div className="mb-8">
          <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase">OptAImum Tool</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">LLM-Wechsel in Minuten</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Wechsle den KI-Anbieter ohne Datenverlust.</p>
        </div>

        <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-end">
            <div>
              <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-2">Von</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-white dark:bg-vencly-bg text-gray-900 dark:text-white focus:outline-none focus:border-vencly-teal">
                <option value="">Auswählen...</option>
                {providers.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div className="pb-2.5 text-vencly-teal"><ArrowRight size={20} /></div>
            <div>
              <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-2">Nach</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-vencly-border bg-white dark:bg-vencly-bg text-gray-900 dark:text-white focus:outline-none focus:border-vencly-teal">
                <option value="">Auswählen...</option>
                {providers.filter(p => p !== from).map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>
          {from && to && from === to && (
            <p className="mt-4 text-sm text-yellow-600 dark:text-yellow-400">Bitte zwei verschiedene Anbieter auswählen.</p>
          )}
        </div>

        {displayGuide && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Clock size={14} className="text-vencly-teal" />
                <span>~{displayGuide.totalMin} Minuten</span>
              </div>
              <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full font-medium">{displayGuide.difficulty}</span>
            </div>
            <div className="space-y-4">
              {displayGuide.steps.map((s, i) => (
                <div key={i} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-vencly-teal/10 text-vencly-teal text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-gray-900 dark:text-white font-semibold text-sm">{s.title}</h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"><Clock size={10} />{s.duration}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{s.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-vencly-teal/5 border border-vencly-teal/20 rounded-xl flex items-center gap-3">
              <CheckCircle2 size={16} className="text-vencly-teal shrink-0" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Tipp: Erstelle zuerst dein{' '}
                <Link href="/optaimum/profil-md" className="text-vencly-teal hover:underline font-medium">Profil-Markdown</Link>
                {' '}– es funktioniert auf allen Plattformen.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
