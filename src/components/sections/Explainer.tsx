'use client'

import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Erklärfilm unter dem Hero (Prezi-Stil, ohne Ton, ~100 s).
 *
 * Quelle: /root/ir-erklaervideos/videos/it-landing (HyperFrames), Belege in
 * belege/it-landing.md. Nach Textänderungen auf der Startseite den Film prüfen —
 * jede Notiz zitiert die Homepage wörtlich.
 *
 * `key` erzwingt beim Sprachwechsel ein neues <video>; ohne ihn behält der Browser
 * die alte Quelle. `preload="none"`: die ~10 MB lädt erst, wer auf Play drückt.
 */
export default function Explainer() {
  const { t } = useLanguage()
  const { video } = t.explainer

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
        >
          <source src={`/video/erklaerfilm.${video}.mp4`} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
