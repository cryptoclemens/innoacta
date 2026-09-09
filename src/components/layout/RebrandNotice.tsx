'use client'

/* -------------------------------------------------------------------------
 * RebrandNotice — TEMPORÄRER ÜBERGANGS-HINWEIS (Marke: vencly → innovation.today)
 * -------------------------------------------------------------------------
 *
 * Zweck
 *   Einmaliger, freundlicher Hinweis auf die Markenumbenennung. Die
 *   Rechtsträgerin bleibt die Vencly GmbH — der Hinweis ist reine
 *   Kommunikation, keine rechtliche Information.
 *
 * GEPLANTE ENTFERNUNG: 2026-12-09 (90 Tage nach Go-Live)
 *
 * Entfernbarkeit — bewusst rückstandslos:
 *   Diese Datei ist vollständig autark. Sie ändert nichts Globales:
 *   keine Einträge in i18n.ts, keine Regeln in globals.css, keine Tokens in
 *   tailwind.config.js. Alle Texte, Styles und Animationen leben in dieser
 *   Datei. Body-Scroll-Sperre und Fokus werden beim Schliessen exakt
 *   zurückgesetzt.
 *
 *   Zum Entfernen genügt:
 *     1. `<RebrandNotice />` und den Import aus src/app/layout.tsx löschen
 *     2. diese Datei löschen
 *     3. (optional) src/app/rebranding/page.tsx löschen bzw. stehen lassen
 *
 *   Kein weiterer Code hängt daran. Der LocalStorage-Schlüssel
 *   "it_rebrand_notice_dismissed" bleibt in Besucher-Browsern zurück, ist
 *   aber funktionslos und wird von nichts anderem gelesen.
 *
 *   Notausschalter ohne Deployment-Änderung an anderen Dateien:
 *   REBRAND_NOTICE_ENABLED = false setzen.
 * ------------------------------------------------------------------------- */

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'

/** Globaler Schalter. Auf `false` setzen, um den Hinweis sofort stillzulegen. */
export const REBRAND_NOTICE_ENABLED = true

/** Letzter Tag, an dem der Hinweis erscheinen darf (ISO, inklusive). */
export const REBRAND_NOTICE_UNTIL = '2026-12-09'

/** LocalStorage-Schlüssel; Wert = ISO-Datum des Schliessens. */
const STORAGE_KEY = 'it_rebrand_notice_dismissed'

/** Erneut zeigen frühestens nach so vielen Tagen. */
const DISMISS_DAYS = 30

/** Verzögerung bis zum Einblenden — LCP soll nicht darunter leiden. */
const SHOW_DELAY_MS = 600

/** Pfade, auf denen der Hinweis nicht stört (Rechtliches + Zielseite). */
const EXCLUDED_PATHS = ['/impressum', '/datenschutz', '/agb', '/rebranding']

type Copy = {
  headline: string
  body: string
  button: string
  link: string
  close: string
  arrow: string
}

const COPY: Record<'de' | 'en' | 'fr' | 'es', Copy> = {
  de: {
    headline: 'Aus vencly wird innovation.today',
    body:
      'Neuer Name, gleiches Team, gleiche Leistung. Hinter innovation.today steht weiterhin die Vencly GmbH – Ihre Ansprechpartner, Verträge und Zugänge bleiben unverändert.',
    button: 'Verstanden',
    link: 'Mehr erfahren',
    close: 'Hinweis schließen',
    arrow: 'wird zu',
  },
  en: {
    headline: 'vencly is now innovation.today',
    body:
      'New name, same team, same service. innovation.today is operated by Vencly GmbH – your contacts, contracts and logins remain unchanged.',
    button: 'Got it',
    link: 'Learn more',
    close: 'Close notice',
    arrow: 'becomes',
  },
  fr: {
    headline: 'vencly devient innovation.today',
    body:
      "Nouveau nom, même équipe, même prestation. innovation.today est exploité par Vencly GmbH – vos interlocuteurs, contrats et accès restent inchangés.",
    button: "J'ai compris",
    link: 'En savoir plus',
    close: "Fermer l'avis",
    arrow: 'devient',
  },
  es: {
    headline: 'vencly ahora es innovation.today',
    body:
      'Nuevo nombre, el mismo equipo, el mismo servicio. innovation.today es operado por Vencly GmbH: sus personas de contacto, contratos y accesos permanecen sin cambios.',
    button: 'Entendido',
    link: 'Más información',
    close: 'Cerrar aviso',
    arrow: 'pasa a ser',
  },
}

/** Auswählbare Elemente innerhalb der Karte (für den Fokus-Trap). */
const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

function isWithinCampaignWindow(): boolean {
  // Vergleich rein auf Datumsebene, damit der letzte Tag vollständig zählt.
  const until = new Date(`${REBRAND_NOTICE_UNTIL}T23:59:59`)
  if (Number.isNaN(until.getTime())) return false
  return Date.now() <= until.getTime()
}

function wasRecentlyDismissed(): boolean {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return false
    const at = new Date(stored)
    if (Number.isNaN(at.getTime())) return false
    const ageDays = (Date.now() - at.getTime()) / 86_400_000
    // Negatives Alter (verstellte Uhr) wie „frisch geschlossen" behandeln.
    return ageDays < DISMISS_DAYS
  } catch {
    // Private Mode o. Ä.: lieber einmal zu oft zeigen als crashen.
    return false
  }
}

function rememberDismissal(): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, new Date().toISOString())
  } catch {
    // LocalStorage nicht verfügbar — Hinweis erscheint beim nächsten Besuch erneut.
  }
}

function cameFromNewDomain(): boolean {
  try {
    if (!document.referrer) return false
    return new URL(document.referrer).hostname.includes('innovation.today')
  } catch {
    return false
  }
}

export default function RebrandNotice() {
  const pathname = usePathname()
  const { locale } = useLanguage()

  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [entered, setEntered] = useState(false)

  const cardRef = useRef<HTMLDivElement | null>(null)
  const primaryRef = useRef<HTMLButtonElement | null>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)
  const scrollYRef = useRef(0)

  const copy = COPY[(locale as keyof typeof COPY) in COPY ? (locale as keyof typeof COPY) : 'de']

  const isExcludedPath =
    !pathname ||
    EXCLUDED_PATHS.some((p) => pathname === p || pathname === `${p}/` || pathname.startsWith(`${p}/`))

  // Erst nach der Hydration und mit Verzögerung einblenden — kein Layout-Shift,
  // keine Konkurrenz zum LCP.
  useEffect(() => {
    setMounted(true)
    if (!REBRAND_NOTICE_ENABLED) return
    // Beim Navigieren auf eine ausgeschlossene Seite ein offenes Modal schliessen.
    if (isExcludedPath) {
      setOpen(false)
      return
    }
    if (!isWithinCampaignWindow()) return
    if (wasRecentlyDismissed()) return
    if (cameFromNewDomain()) return

    // Der Cookie-Banner hat Vorrang: Er erfüllt eine Rechtspflicht und liegt auf
    // Mobilgeräten als Bottom-Sheet genau über den Schaltflächen dieses Modals.
    // Deshalb warten, bis eine Entscheidung getroffen wurde — danach in Ruhe zeigen.
    let timer = 0
    let poll = 0

    const consentGiven = () => {
      try {
        return localStorage.getItem('cookie-consent') !== null
      } catch {
        // Kein Zugriff (Private Mode): Banner erscheint dann ebenfalls nicht
        // zuverlässig — Modal nicht dauerhaft blockieren.
        return true
      }
    }

    const show = () => {
      timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS)
    }

    if (consentGiven()) {
      show()
    } else {
      poll = window.setInterval(() => {
        if (consentGiven()) {
          window.clearInterval(poll)
          poll = 0
          show()
        }
      }, 400)
    }

    return () => {
      if (timer) window.clearTimeout(timer)
      if (poll) window.clearInterval(poll)
    }
  }, [isExcludedPath])

  const close = useCallback(() => {
    rememberDismissal()
    setOpen(false)
  }, [])

  // Body-Scroll sperren, Position exakt wiederherstellen.
  useEffect(() => {
    if (!open) return
    const body = document.body
    scrollYRef.current = window.scrollY
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    }
    body.style.position = 'fixed'
    body.style.top = `-${scrollYRef.current}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'

    return () => {
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.left = prev.left
      body.style.right = prev.right
      body.style.width = prev.width
      body.style.overflow = prev.overflow
      // globals.css setzt `html { scroll-behavior: smooth }`. Ohne 'instant'
      // würde die Wiederherstellung sichtbar von oben nach unten scrollen,
      // statt die Position einfach zu halten.
      window.scrollTo({ top: scrollYRef.current, left: 0, behavior: 'instant' })
    }
  }, [open])

  // Fokus setzen, Einblend-Animation starten, Fokus beim Schliessen zurückgeben.
  useEffect(() => {
    if (!open) return
    restoreFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null

    const raf = window.requestAnimationFrame(() => {
      setEntered(true)
      primaryRef.current?.focus()
    })

    return () => {
      window.cancelAnimationFrame(raf)
      setEntered(false)
      restoreFocusRef.current?.focus?.()
    }
  }, [open])

  // Escape schliesst, Tab bleibt im Dialog gefangen.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }
      if (event.key !== 'Tab') return

      const card = cardRef.current
      if (!card) return
      const items = Array.from(card.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement
      )
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement

      // Der Fokus kann auch ausserhalb der Karte liegen — etwa wenn der
      // Cookie-Banner geschlossen wurde und der Fokus auf <body> zurückfiel.
      // Dann in beide Richtungen zurück in die Karte holen.
      const outside = !card.contains(active)

      if (event.shiftKey && (active === first || outside)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (active === last || outside)) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown, true)
    return () => document.removeEventListener('keydown', onKeyDown, true)
  }, [open, close])

  if (!REBRAND_NOTICE_ENABLED) return null
  if (!mounted || !open) return null

  return (
    <>
      {/* Scoped Styles: Backdrop-Fallback, Safe-Area, Reduced-Motion, Druck.
          Alles unter .it-rebrand-* — kollidiert mit nichts im Projekt. */}
      <style>{`
        .it-rebrand-overlay {
          background-color: rgba(20, 48, 74, 0.55);
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
        }
        @supports not ((backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))) {
          .it-rebrand-overlay { background-color: rgba(20, 48, 74, 0.85); }
        }
        .it-rebrand-card {
          padding-bottom: calc(24px + env(safe-area-inset-bottom, 0px));
        }
        @media (min-width: 640px) {
          .it-rebrand-card { padding-bottom: 40px; }
        }
        .it-rebrand-anim {
          transition: opacity 200ms ease-out, transform 200ms ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .it-rebrand-anim {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
        @media print {
          .it-rebrand-overlay { display: none !important; }
        }
      `}</style>

      <div
        className={`it-rebrand-overlay it-rebrand-anim fixed inset-0 z-[150] flex items-end justify-center print:hidden sm:items-center sm:p-4 ${
          entered ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) close()
        }}
      >
        <div
          ref={cardRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="it-rebrand-headline"
          aria-describedby="it-rebrand-body"
          /* Karte bleibt in beiden Themes weiss — deshalb tragen ihre Kinder
             bewusst KEINE dark:-Varianten. */
          className={`it-rebrand-card it-rebrand-anim relative w-full max-w-[520px] rounded-t-2xl bg-white px-6 pt-6 font-sans shadow-[0_12px_40px_rgba(15,37,64,0.18)] sm:rounded-2xl sm:px-10 sm:pt-10 ${
            entered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={close}
            aria-label={copy.close}
            className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-lg text-brand-navy/50 transition-colors hover:bg-brand-sky hover:text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal sm:right-4 sm:top-4"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>

          {/* Logo-Übergang: mobil untereinander, ab sm nebeneinander */}
          <div className="mb-6 flex flex-col items-center gap-3 pr-10 sm:flex-row sm:justify-start sm:gap-4 sm:pr-12">
            <img
              src="/logovencly.svg"
              alt="vencly"
              className="h-6 w-auto opacity-60 grayscale"
              width={945}
              height={317}
            />
            <svg
              className="h-4 w-4 shrink-0 text-brand-teal sm:h-3.5 sm:w-3.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="img"
              aria-label={copy.arrow}
            >
              {/* mobil: Pfeil nach unten */}
              <g className="sm:hidden">
                <path d="M8 2v11M4 9.5L8 13.5l4-4" />
              </g>
              {/* ab sm: Pfeil nach rechts */}
              <g className="hidden sm:inline">
                <path d="M2 8h11M9.5 4l4 4-4 4" />
              </g>
            </svg>
            <img
              src="/brand/wordmark_light.svg"
              alt="innovation.today"
              className="h-8 w-auto"
              width={997}
              height={240}
            />
          </div>

          <h2
            id="it-rebrand-headline"
            className="text-[22px] font-extrabold leading-snug tracking-[-0.015em] text-brand-navy"
          >
            {copy.headline}
          </h2>

          <p id="it-rebrand-body" className="mt-3 text-base font-normal leading-[1.6] text-brand-ink">
            {copy.body}
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:items-start">
            <button
              ref={primaryRef}
              type="button"
              onClick={close}
              className="w-full rounded-lg bg-brand-navy px-6 py-3 text-base font-bold text-white transition-colors hover:bg-brand-night focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 sm:w-auto"
            >
              {copy.button}
            </button>
            <Link
              href="/rebranding/"
              onClick={close}
              className="rounded text-sm font-bold text-brand-teal underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              {copy.link}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
