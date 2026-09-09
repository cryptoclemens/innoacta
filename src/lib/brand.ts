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
 * TODO(DNS-Switch): auf 'https://www.innovation.today' umstellen, sobald die
 * Zieldomain ausliefert.
 */
export const SITE_URL = 'https://www.vencly.com'

/** Zieldomain des Rebrandings. Bereits reserviert, noch nicht ausliefernd. */
export const TARGET_URL = 'https://www.innovation.today'

/** TODO(DNS-Switch): auf hello@innovation.today umstellen, sobald Postfach steht. */
export const SUPPORT_EMAIL = 'hello@vencly.com'

/** TODO(DNS-Switch): auf datenschutz@innovation.today umstellen, sobald Postfach steht. */
export const PRIVACY_EMAIL = 'datenschutz@vencly.com'

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
