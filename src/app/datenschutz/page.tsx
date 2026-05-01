import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Vencly GmbH gemäß DSGVO.',
  alternates: { canonical: 'https://vencly.com/datenschutz' },
  robots: { index: true, follow: false },
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-28 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <span className="section-eyebrow mb-4">Rechtliches</span>
        <h1 className="font-display text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mt-3 mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-10 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">1. Verantwortlicher</h2>
            <p>
              Vencly GmbH<br />
              Leopoldstraße 31, 80802 München<br />
              E-Mail:{' '}
              <a href="mailto:datenschutz@vencly.com" className="text-vencly-teal hover:underline">
                datenschutz@vencly.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">2. Hosting – Cloudflare Pages</h2>
            <p>
              Diese Website wird auf Servern von Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA
              (nachfolgend „Cloudflare") gehostet. Cloudflare verarbeitet beim Aufruf der Seite automatisch
              technische Zugriffsdaten (IP-Adresse, Browser-Typ, Datum und Uhrzeit des Zugriffs). Diese Daten
              werden ausschließlich zur Sicherstellung des Betriebs, zur Abwehr von Angriffen und zur Analyse
              von Fehlerursachen genutzt.
            </p>
            <p className="mt-2">
              Grundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und
              störungsfreien Betrieb). Cloudflare ist nach dem EU-US Data Privacy Framework zertifiziert.
              Weitere Informationen:{' '}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vencly-teal hover:underline"
              >
                cloudflare.com/privacypolicy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">3. Terminbuchung – Cal.com / Microsoft Bookings</h2>
            <p>
              Für die Buchung von Erstgesprächen nutzen wir Cal.com (Cal.com, Inc.) und Microsoft Bookings
              (Microsoft Corporation). Wenn Sie einen Termin buchen, werden die von Ihnen eingegebenen Daten
              (Name, E-Mail-Adresse, optionale Nachricht) an den jeweiligen Anbieter übermittelt und zur
              Terminverwaltung genutzt.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen).
              Die Datenschutzerklärungen der Anbieter finden Sie unter{' '}
              <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline">cal.com/privacy</a>
              {' '}bzw.{' '}
              <a href="https://privacy.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline">privacy.microsoft.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">4. Kontakt per E-Mail</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der mitgeteilten
              personenbezogenen Daten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen
              gespeichert. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung
              von Anfragen).
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">5. Cookies und lokale Speicherung</h2>
            <p>
              Diese Website setzt keine Tracking-Cookies. Zur Speicherung Ihrer Theme-Präferenz (Hell/Dunkel)
              wird ausschließlich der lokale Speicher (localStorage) Ihres Browsers verwendet. Diese Daten
              verlassen Ihr Gerät nicht und werden nicht an Dritte übermittelt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">6. Keine Analyse-Tools</h2>
            <p>
              Wir setzen derzeit keine Webanalyse-Dienste (z. B. Google Analytics, Matomo) ein.
              Es werden keine Nutzungsprofile erstellt und keine Daten zu Werbezwecken verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">7. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a href="mailto:datenschutz@vencly.com" className="text-vencly-teal hover:underline">
                datenschutz@vencly.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">8. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
              Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständige Aufsichtsbehörde für Bayern:
            </p>
            <p className="mt-2">
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 27, 91522 Ansbach<br />
              <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline">
                www.lda.bayern.de
              </a>
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200 dark:border-vencly-border">
            <Link href="/impressum" className="text-vencly-teal hover:underline text-sm">
              → Zum Impressum
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
