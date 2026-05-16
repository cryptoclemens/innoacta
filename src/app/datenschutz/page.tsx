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
        <h1 className="font-display text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mt-3 mb-2">
          Datenschutzerklärung
        </h1>
        <p className="text-xs text-gray-400 mb-10">Stand: Mai 2026</p>

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
            <p className="mt-3">
              <strong className="text-gray-900 dark:text-white">Datenschutzbeauftragter:</strong>{' '}
              Es ist kein Datenschutzbeauftragter bestellt (keine Verpflichtung nach Art. 37 DSGVO).
              Bei datenschutzbezogenen Anfragen wenden Sie sich direkt an die oben genannte E-Mail-Adresse.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">2. Hosting – Cloudflare Pages</h2>
            <p>
              Diese Website wird auf Servern von Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA
              (nachfolgend „Cloudflare") gehostet. Cloudflare verarbeitet beim Aufruf der Seite automatisch
              technische Zugriffsdaten (IP-Adresse, Browser-Typ, Datum und Uhrzeit des Zugriffs, aufgerufene Seite).
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Zweck und Rechtsgrundlage:</strong> Sicherstellung
              des Betriebs, Abwehr von Angriffen, Fehleranalyse — Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Drittlandtransfer:</strong> Cloudflare ist nach
              dem EU-US Data Privacy Framework (DPF) zertifiziert, das von der EU-Kommission als angemessenes
              Datenschutzniveau anerkannt ist (Angemessenheitsbeschluss vom 10. Juli 2023).
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Speicherdauer:</strong> Serverlogs werden
              typischerweise bis zu 30 Tage gespeichert. Weitere Informationen:{' '}
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline">
                cloudflare.com/privacypolicy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">3. Terminbuchung – Cal.com / Microsoft Bookings</h2>
            <p>
              Für die Buchung von Erstgesprächen nutzen wir Cal.com (Cal.com, Inc., 2261 Market Street #4737,
              San Francisco, CA 94114, USA) und Microsoft Bookings (Microsoft Corporation, One Microsoft Way,
              Redmond, WA 98052, USA). Wenn Sie einen Termin buchen, werden die von Ihnen eingegebenen Daten
              (Name, E-Mail-Adresse, optionale Nachricht) an den jeweiligen Anbieter übermittelt und zur
              Terminverwaltung genutzt.
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b
              DSGVO (Durchführung vorvertraglicher Maßnahmen).
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Drittlandtransfer:</strong> Beide Anbieter sind
              nach dem EU-US Data Privacy Framework (DPF) zertifiziert.
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Speicherdauer:</strong> Buchungsdaten werden
              gelöscht, sobald der Zweck der Terminverwaltung entfällt und keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen. Datenschutzerklärungen:{' '}
              <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline">cal.com/privacy</a>
              {' '}|{' '}
              <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline">privacy.microsoft.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">4. Kontakt per E-Mail</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der mitgeteilten
              personenbezogenen Daten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.
              Eine Weitergabe dieser Daten ohne Ihre Einwilligung erfolgt nicht.
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen); bei vorvertraglichem Bezug
              Art. 6 Abs. 1 lit. b DSGVO.
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Speicherdauer:</strong> E-Mails werden für die
              Dauer der Geschäftsbeziehung sowie darüber hinaus bis zu 3 Jahren nach Ablauf des letzten Kontakts
              gespeichert (reguläre Verjährungsfrist). Bei steuerrechtlich relevanter Korrespondenz gilt die
              10-jährige Aufbewahrungspflicht nach § 147 AO.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">5. Cookies und lokale Speicherung</h2>
            <p>
              Diese Website setzt keine Tracking-Cookies und keine Analyse-Cookies. Zur Speicherung Ihrer
              Theme-Präferenz (Hell/Dunkel-Modus) wird ausschließlich der lokale Speicher (localStorage) Ihres
              Browsers verwendet. Diese Daten verlassen Ihr Gerät nicht und werden nicht an Dritte übermittelt.
              Sie können den lokalen Speicher jederzeit über die Einstellungen Ihres Browsers löschen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">6. Google Analytics 4</h2>
            <p>
              Diese Website nutzt Google Analytics 4 (GA4), einen Webanalysedienst der Google LLC,
              1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (innerhalb der EU betrieben
              durch Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).
              GA4 wird nur aktiviert, wenn Sie Ihre Einwilligung über das Cookie-Banner erteilen.
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Zweck:</strong> Analyse der Websitenutzung
              (Seitenaufrufe, Verweildauer, Einstiegs-/Ausstiegsseiten) zur Verbesserung unseres Angebots.
              Es werden keine personenbezogenen Daten für Werbezwecke verarbeitet und kein Retargeting
              durchgeführt. IP-Adressen werden vor der Speicherung anonymisiert (IP-Masking).
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1
              lit. a DSGVO (Einwilligung). Ihre Einwilligung können Sie jederzeit mit Wirkung für die
              Zukunft widerrufen, indem Sie den lokalen Speicher Ihres Browsers löschen oder uns unter{' '}
              <a href="mailto:datenschutz@vencly.com" className="text-vencly-teal hover:underline">
                datenschutz@vencly.com
              </a>{' '}
              kontaktieren.
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Drittlandtransfer:</strong> Google LLC ist
              nach dem EU-US Data Privacy Framework (DPF) zertifiziert (Angemessenheitsbeschluss der
              EU-Kommission vom 10. Juli 2023). Weitere Informationen:{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline">
                policies.google.com/privacy
              </a>
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Speicherdauer:</strong> Analysedaten werden
              in Google Analytics standardmäßig für 14 Monate gespeichert. Cookies werden für die Dauer
              der Browsersitzung bzw. maximal 2 Jahre gesetzt.
            </p>
            <p className="mt-2">
              <strong className="text-gray-900 dark:text-white">Opt-out:</strong> Zusätzlich können Sie
              die Erfassung durch GA4 für alle Websites mit dem{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline">
                Google Analytics Opt-out Browser-Add-on
              </a>{' '}
              dauerhaft deaktivieren.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">7. Automatisierte Entscheidungsfindung</h2>
            <p>
              Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von
              Art. 22 DSGVO statt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">8. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>
                Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO) — insbesondere
                bei Verarbeitungen auf Basis berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO)
              </li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a href="mailto:datenschutz@vencly.com" className="text-vencly-teal hover:underline">
                datenschutz@vencly.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">9. Beschwerderecht</h2>
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

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">10. Auftragsverarbeitungsverträge (Art. 28 DSGVO)</h2>
            <p>
              Mit allen Dienstleistern, die personenbezogene Daten in unserem Auftrag verarbeiten,
              haben wir Auftragsverarbeitungsverträge (AVV) gemäß Art. 28 DSGVO abgeschlossen.
              Die archivierten Dokumente können hier eingesehen werden:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="/legal/avv-anthropic-2026.pdf" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline">
                  Anthropic, Inc. – Data Processing Addendum (DPA)
                </a>
              </li>
              <li>
                <a href="/legal/avv-resend-2026.pdf" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline">
                  Resend, Inc. – Data Processing Addendum (DPA)
                </a>
              </li>
              <li>
                <a href="/legal/avv-cloudflare-2026.pdf" target="_blank" rel="noopener noreferrer" className="text-vencly-teal hover:underline">
                  Cloudflare, Inc. – Data Processing Addendum v6.4 (April 2026)
                </a>
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Hetzner Online GmbH – AVV über Kundenportal (Robot/Cloud Console) akzeptiert
              </li>
            </ul>
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
