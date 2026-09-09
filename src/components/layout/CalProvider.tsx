/**
 * Erstgesprächs-Buttons.
 *
 * Historisch öffnete das Cal.com-Embed hier ein Buchungs-Popup; seit 09/2026
 * führen die Buttons stattdessen auf /contact/. Die Weiterleitung übernimmt ein
 * Delegations-Listener im Layout, der auf `data-booking="contact"` reagiert —
 * dadurch funktionieren die Buttons auch in Server Components, die keine
 * Event-Handler als Props annehmen dürfen.
 *
 * Der Zielpfad ist bewusst relativ und übersteht den Domainwechsel unverändert.
 */
export default function CalProvider() {
  return null
}

/** Auf jeden Erstgesprächs-Button spreiten: `<button {...calButtonProps}>` */
export const calButtonProps = {
  'data-booking': 'contact',
} as const
