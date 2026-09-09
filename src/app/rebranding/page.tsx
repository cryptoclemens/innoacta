import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aus vencly wird innovation.today',
  description:
    'Die Marke vencly heißt jetzt innovation.today. Neuer Name, gleiches Team, gleiche Leistung – Rechtsträgerin bleibt die Vencly GmbH.',
  alternates: { canonical: 'https://innovation.today/rebranding' },
  robots: { index: true, follow: true },
}

const FAQ: { question: string; answer: string }[] = [
  {
    question: 'Was ändert sich?',
    answer: 'Es ändern sich ausschließlich unser Name und unser Erscheinungsbild.',
  },
  {
    question: 'Was bleibt?',
    answer:
      'Team, Ansprechpartner und Leistungen bleiben dieselben, und Rechtsträgerin bleibt die Vencly GmbH.',
  },
  {
    question: 'Gibt es neue E-Mail-Adressen?',
    answer:
      'Ihre bestehenden Adressen funktionieren unverändert weiter; neue Adressen kündigen wir rechtzeitig an.',
  },
  {
    question: 'Gelten bestehende Verträge weiter?',
    answer:
      'Ja, bestehende Verträge gelten unverändert weiter – Rechtsträgerin und Vertragspartner bleiben die Vencly GmbH.',
  },
]

export default function RebrandingPage() {
  return (
    <div className="min-h-screen bg-brand-sky dark:bg-brand-night pt-28 pb-20 px-4 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <img
            src="/logovencly.svg"
            alt="vencly"
            className="h-6 w-auto opacity-60 grayscale dark:invert"
            width={945}
            height={317}
          />
          <svg
            className="h-3.5 w-3.5 shrink-0 text-brand-teal dark:text-brand-mint/70"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="img"
            aria-label="wird zu"
          >
            <path d="M2 8h11M9.5 4l4 4-4 4" />
          </svg>
          <img
            src="/brand/wordmark_light.svg"
            alt="innovation.today"
            className="h-8 w-auto dark:brightness-0 dark:invert"
            width={997}
            height={240}
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-0.015em] text-brand-navy dark:text-white mb-8">
          Aus vencly wird innovation.today
        </h1>

        <div className="space-y-4 text-base font-normal leading-[1.6] text-brand-ink dark:text-gray-300">
          <p>
            Neuer Name, gleiches Team, gleiche Leistung. Hinter innovation.today steht weiterhin die
            Vencly GmbH – Ihre Ansprechpartner, Verträge und Zugänge bleiben unverändert.
          </p>
          <p>
            Wir benennen ausschließlich unsere Marke und unser Erscheinungsbild um. An der
            Zusammenarbeit, den vereinbarten Leistungen und Ihren gewohnten Kontaktwegen ändert sich
            nichts.
          </p>
        </div>

        <h2 className="mt-14 mb-6 text-xl font-extrabold tracking-[-0.015em] text-brand-navy dark:text-white">
          Häufige Fragen
        </h2>

        <dl className="space-y-6">
          {FAQ.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-brand-teal/15 dark:border-brand-border bg-white dark:bg-brand-card p-6 shadow-[0_2px_12px_rgba(15,37,64,0.05)]"
            >
              <dt className="text-base font-bold text-brand-navy dark:text-white">{item.question}</dt>
              <dd className="mt-2 text-base font-normal leading-[1.6] text-brand-ink dark:text-gray-300">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 border-t border-brand-navy/10 dark:border-brand-border pt-6">
          <Link
            href="/impressum/"
            className="text-sm font-bold text-brand-teal dark:text-brand-mint underline-offset-4 hover:underline"
          >
            → Zum Impressum der Vencly GmbH
          </Link>
        </div>
      </div>
    </div>
  )
}
