import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Vencly GmbH – Angaben gemäß § 5 TMG.',
  alternates: { canonical: 'https://vencly.com/impressum' },
  robots: { index: true, follow: false },
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-28 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <span className="section-eyebrow mb-4">Rechtliches</span>
        <h1 className="font-display text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mt-3 mb-10">
          Impressum
        </h1>

        <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-8">

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Angaben gemäß § 5 TMG</h2>
            <p>Vencly GmbH<br />
            Leopoldstraße 31<br />
            80802 München<br />
            Deutschland</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Vertreten durch</h2>
            <p>Clemens Eugen Theodor Pompeÿ (Geschäftsführer)</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Kontakt</h2>
            <p>
              E-Mail:{' '}
              <a href="mailto:hello@vencly.com" className="text-vencly-teal hover:underline">
                hello@vencly.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Registereintrag</h2>
            <p>
              Registergericht: Amtsgericht München<br />
              Handelsregisternummer: HRB 290524
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              DE367131457
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Clemens Eugen Theodor Pompeÿ<br />
              Leopoldstraße 31, 80802 München
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vencly-teal hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an einem Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200 dark:border-vencly-border">
            <Link href="/datenschutz" className="text-vencly-teal hover:underline text-sm">
              → Zur Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
