'use client'

import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { track } from '@/lib/analytics'

/** Meldepunkte für film_progress (Prozent der Laufzeit). */
const MARKEN = [25, 50, 75]

/**
 * Erklärfilm unter dem Hero (Prezi-Stil, ohne Ton, ~100 s).
 *
 * Quelle: /root/ir-erklaervideos/videos/it-landing (HyperFrames), Belege in
 * belege/it-landing.md. Nach Textänderungen auf der Startseite den Film prüfen —
 * jede Notiz zitiert die Homepage wörtlich.
 *
 * Messung: film_start, film_progress (25/50/75 %), film_complete — je mit film_lang.
 *
 * `key` erzwingt beim Sprachwechsel ein neues <video>; ohne ihn behält der Browser
 * die alte Quelle. `preload="none"`: die ~10 MB lädt erst, wer auf Play drückt.
 */
export default function Explainer() {
  const { t } = useLanguage()
  const { video } = t.explainer
  // Je Abspielvorgang jede Marke nur einmal melden; Zurückspulen setzt nichts zurück.
  const gemeldet = useRef(new Set<string>())
  const melde = (event: string, params: Record<string, string | number> = {}) => {
    const k = `${video}:${event}:${params.percent ?? ''}`
    if (gemeldet.current.has(k)) return
    gemeldet.current.add(k)
    track(event, { film_lang: video, ...params })
  }

  return (
    <section className="bg-brand-sky dark:bg-brand-night pb-24 pt-4 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-eyebrow justify-center mb-4">{t.explainer.label}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 mt-3">
            {t.explainer.h2}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">{t.explainer.subtext}</p>
        </div>
        <video
          key={video}
          className="w-full aspect-video rounded border border-gray-200 dark:border-brand-border bg-brand-sky shadow-sm"
          controls
          muted
          playsInline
          preload="none"
          poster={`/video/erklaerfilm.${video}.jpg`}
          aria-label={t.explainer.ariaLabel}
          onPlay={() => melde('film_start')}
          onTimeUpdate={(e) => {
            const v = e.currentTarget
            if (!v.duration) return
            const p = (v.currentTime / v.duration) * 100
            MARKEN.forEach((m) => { if (p >= m) melde('film_progress', { percent: m }) })
          }}
          onEnded={() => melde('film_complete')}
        >
          <source src={`/video/erklaerfilm.${video}.mp4`} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
