/**
 * Schlanke Hülle um gtag für eigene GA4-Ereignisse.
 *
 * GA4 lädt erst nach Zustimmung im Cookie-Banner (siehe CookieBanner.tsx). Vorher
 * landen Ereignisse nur im lokalen dataLayer und werden nie verschickt — `track`
 * darf deshalb überall bedingungslos aufgerufen werden.
 *
 * Parameter, die in GA4-Berichten auftauchen sollen, müssen dort einmalig als
 * benutzerdefinierte Dimension (Ereignisbereich) angelegt werden: section,
 * seconds, percent, film_lang, cta_text.
 */
export const GA_ID = 'G-NEDCRSRHND'

type Gtag = (...args: unknown[]) => void

export function track(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (typeof gtag === 'function') gtag('event', event, params)
}

/** Ereignis beim Verlassen der Seite: per Beacon, damit es den Seitenwechsel überlebt. */
export function trackBeacon(event: string, params: Record<string, string | number> = {}) {
  track(event, { ...params, transport_type: 'beacon' })
}

let gaGeladen = false

/** Lädt gtag.js genau einmal — nur aufrufen, wenn die Einwilligung vorliegt. */
export function ladeGoogleAnalytics() {
  if (gaGeladen || typeof document === 'undefined') return
  gaGeladen = true
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}
