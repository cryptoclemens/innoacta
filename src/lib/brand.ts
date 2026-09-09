/**
 * Zentrale Marken- und Rechtsträger-Konfiguration.
 *
 * Einzige Quelle für Markenname, Rechtsträger, Domain und Kontaktadressen.
 * Komponenten, Metadaten und JSON-LD lesen ausschließlich von hier — so ist der
 * spätere Domain-Wechsel ein Einzeiler statt einer Suchen-und-Ersetzen-Aktion.
 *
 * Rebranding-Kontext: Der Markenauftritt heißt seit 09/2026 innovation.today.
 * Rechtsträgerin bleibt unverändert die Vencly GmbH.
 */

/** Markenname. Immer klein, immer mit Punkt — nie „Innovation Today". */
export const BRAND_NAME = 'innovation.today'

/** Rechtsträgerin. Nicht ersetzen: erscheint in Impressum, Datenschutz, JSON-LD legalName. */
export const LEGAL_ENTITY = 'Vencly GmbH'

/** Pflichthinweis auf den Rechtsträger, einmalig je Rechtsseite. */
export const LEGAL_NOTICE = `${BRAND_NAME} ist ein Angebot der ${LEGAL_ENTITY}.`

export const TAGLINE = 'Innovatives Gründer-Denken für Unternehmen mit Tradition.'

/**
 * Kanonische Adresse der Website — steuert canonical-URLs, Sitemap, OG-URLs
 * und JSON-LD.
 *
 * WICHTIG: mit www. Die Form ohne www antwortet mit 301 auf die www-Form;
 * canonical-Angaben und Sitemap müssen deshalb direkt auf www zeigen, sonst
 * verweist jede angegebene Adresse auf eine Weiterleitung.
 *
 * Seit 09.09.2026 ist www.innovation.today die ausliefernde Domain;
 * vencly.com und innovation.today leiten dauerhaft (301) hierher.
 */
export const SITE_URL = 'https://www.innovation.today'

/** Vorherige Domain. Leitet per 301 auf SITE_URL, bleibt für Bestandslinks aktiv. */
export const LEGACY_URL = 'https://www.vencly.com'

/** Allgemeine Kontaktadresse. Seit 09.09.2026 unter innovation.today. */
export const SUPPORT_EMAIL = 'hello@innovation.today'

/** Datenschutzanfragen. Erscheint in der Datenschutzerklärung — Änderungen dort abstimmen. */
export const PRIVACY_EMAIL = 'datenschutz@innovation.today'

/** Login-Ziel der Anwendung. Bleibt bewusst unter vencly.app — kein DNS-Switch. */
export const LOGIN_URL = 'https://vencly.app/'

/**
 * Terminbuchung über Outlook Bookings.
 * Der Adressteil ist eine Microsoft-Postfach-ID, kein Anzeigename — Ändern bricht
 * die Buchungsstrecke. Nicht als Markenstring behandeln.
 */
export const BOOKING_URL =
  'https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard'

/** Ziel der Erstgesprächs-Buttons (siehe CalProvider). */
export const CONTACT_URL = `${SITE_URL}/contact/`

/** Anschrift der Rechtsträgerin — juristisch abgestimmt, nicht ändern. */
export const LEGAL_ADDRESS = {
  street: 'Leopoldstraße 31',
  postalCode: '80802',
  city: 'München',
  country: 'DE',
  register: 'HRB 290524',
  registerCourt: 'Amtsgericht München',
  managingDirector: 'Clemens Eugen Theodor Pompeÿ',
} as const
