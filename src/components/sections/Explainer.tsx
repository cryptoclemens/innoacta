'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { track } from '@/lib/analytics'

/** Stand des Films — bei jedem neuen Rendern anheben, sonst liefern Cloudflare (4 h) und
    Browser-Caches die alte Fassung unter derselben Adresse weiter aus. */
const FILM_STAND = '2026-10-24'

/** Meldepunkte für film_progress (Prozent der Laufzeit). */
const MARKEN = [25, 50, 75]

/**
 * Erklärfilm im Hero, über den beiden Buttons (Prezi-Stil, ohne Ton, ~100 s).
 *
 * Quelle: /root/ir-erklaervideos/videos/it-landing (HyperFrames), Belege in
 * belege/it-landing.md. Nach Textänderungen auf der Startseite den Film prüfen —
 * jede Notiz zitiert die Homepage wörtlich.
 *
 * Autoplay: stumm + playsInline, sonst blockieren Browser (iOS) das Abspielen.
 * Gestartet wird per play() nach dem Laden statt mit dem autoPlay-Attribut, damit
 * wer „Bewegung reduzieren“ eingestellt hat, nur das Standbild sieht. Kein loop:
 * der Film endet auf seinem Schlussbild, und nur so feuert onEnded (film_complete).
 *
 * Messung: film_start, film_progress (25/50/75 %), film_complete — je mit film_lang.
 * Seit Autoplay zählt film_start jeden Seitenaufruf mit; aussagekräftig ist ab
 * 21.10.2026 erst film_progress.
 *
 * `key` erzwingt beim Sprachwechsel ein neues <video>; ohne ihn behält der Browser
 * die alte Quelle.
 */
export default function Explainer() {
  const { t } = useLanguage()
  const { video } = t.explainer
  const ref = useRef<HTMLVideoElement>(null)
  // Je Abspielvorgang jede Marke nur einmal melden; Zurückspulen setzt nichts zurück.
  const gemeldet = useRef(new Set<string>())
  const melde = (event: string, params: Record<string, string | number> = {}) => {
    const k = `${video}:${event}:${params.percent ?? ''}`
    if (gemeldet.current.has(k)) return
    gemeldet.current.add(k)
    track(event, { film_lang: video, ...params })
  }

  useEffect(() => {
    const v = ref.current
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Abgelehntes Autoplay (Energiesparmodus o. Ä.) ist kein Fehler: Play-Knopf bleibt.
    v.play().catch(() => {})
  }, [video])

  return (
    <video
      ref={ref}
      key={video}
      className="block w-full aspect-video rounded-[22px] bg-brand-sky"
      controls
      muted
      playsInline
      preload="metadata"
      poster={`/video/erklaerfilm.${video}.jpg?v=${FILM_STAND}`}
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
      <source src={`/video/erklaerfilm.${video}.mp4?v=${FILM_STAND}`} type="video/mp4" />
    </video>
  )
}
