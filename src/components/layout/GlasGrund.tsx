/**
 * Hintergrund des Glas-Looks: Punktraster und weiche Farbflächen in Teal,
 * Mint, Sky und Navy. Liegt fest hinter allen Seiten (fixed, -z-10), damit die
 * Glasflächen beim Scrollen etwas zum Durchscheinen haben.
 *
 * Sichtbar ist er nur dort, wo Abschnitte keinen eigenen, deckenden Grund
 * setzen — auf der Startseite überall, auf den Unterseiten noch nicht.
 */
export default function GlasGrund() {
  return (
    <div aria-hidden="true" className="glas-grund fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="glas-fleck w-[640px] h-[640px] -right-40 -top-32 bg-[var(--fleck-mint)]" />
      <div className="glas-fleck w-[520px] h-[520px] -left-48 top-[38%] bg-[var(--fleck-teal)]" />
      <div className="glas-fleck w-[480px] h-[480px] left-[30%] top-[18%] bg-[var(--fleck-navy)]" />
      <div className="glas-fleck w-[700px] h-[560px] -right-32 -bottom-40 bg-[var(--fleck-sky)]" />
    </div>
  )
}
