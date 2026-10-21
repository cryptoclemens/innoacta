'use client'

import { useEffect } from 'react'
import { track, trackBeacon } from '@/lib/analytics'

/** Ab diesem Anteil im Bild gilt ein Abschnitt als „angesehen“. */
const SICHTBAR_AB = 0.4
/** So lange muss er am Stück sichtbar sein, bevor `section_view` feuert (ms). */
const MINDESTDAUER = 1000

/**
 * Misst auf der Startseite, welche Abschnitte gesehen werden und wie lange.
 *
 * Jeder Abschnitt trägt `data-track="<name>"` (siehe app/page.tsx; „film“ sitzt im Hero).
 * - `section_view` einmal pro Abschnitt und Seitenaufruf → Trichter: wie weit kommen Besucher?
 * - `section_time` beim Verlassen der Seite mit den Sekunden je Abschnitt → wo verweilen sie?
 * - `page_exit_section` beim Verlassen: der zuletzt sichtbare Abschnitt → wo ist der Absprung?
 */
export default function SectionTracker() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-track]'))
    if (!els.length || !('IntersectionObserver' in window)) return

    const seit = new Map<string, number>()    // Abschnitt → sichtbar seit (ms)
    const summe = new Map<string, number>()   // Abschnitt → aufsummierte Sichtzeit (ms)
    const gesehen = new Set<string>()
    const timer = new Map<string, number>()
    let zuletzt = ''

    const stoppe = (name: string, jetzt: number) => {
      const s = seit.get(name)
      if (s !== undefined) {
        summe.set(name, (summe.get(name) ?? 0) + (jetzt - s))
        seit.delete(name)
      }
      window.clearTimeout(timer.get(name))
    }

    const io = new IntersectionObserver(
      (eintraege) => {
        const jetzt = performance.now()
        for (const e of eintraege) {
          const name = (e.target as HTMLElement).dataset.track ?? ''
          const fuelltBild = e.intersectionRect.height >= window.innerHeight * 0.5
          if (e.isIntersecting && (e.intersectionRatio >= SICHTBAR_AB || fuelltBild)) {
            if (seit.has(name)) continue
            seit.set(name, jetzt)
            zuletzt = name
            if (!gesehen.has(name)) {
              timer.set(name, window.setTimeout(() => {
                gesehen.add(name)
                track('section_view', { section: name })
              }, MINDESTDAUER))
            }
          } else {
            stoppe(name, jetzt)
          }
        }
      },
      // Hohe Abschnitte (z. B. der Hero) erreichen auf kleinen Bildschirmen nie 40 %;
      // deshalb zählt zusätzlich, wenn ein Abschnitt den halben Bildschirm füllt.
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] },
    )
    els.forEach((el) => io.observe(el))

    let gesendet = false
    const abschluss = () => {
      if (gesendet) return
      gesendet = true
      const jetzt = performance.now()
      Array.from(seit.keys()).forEach((n) => stoppe(n, jetzt))
      summe.forEach((ms, name) => {
        const seconds = Math.round(ms / 1000)
        if (seconds > 0) trackBeacon('section_time', { section: name, seconds })
      })
      if (zuletzt) trackBeacon('page_exit_section', { section: zuletzt })
    }
    // pagehide statt unload: feuert auch auf iOS und beim Wechsel in den Hintergrund-Cache.
    window.addEventListener('pagehide', abschluss)

    return () => {
      abschluss()
      window.removeEventListener('pagehide', abschluss)
      io.disconnect()
      timer.forEach((t) => window.clearTimeout(t))
    }
  }, [])

  return null
}
