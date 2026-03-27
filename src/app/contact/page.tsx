import type { Metadata } from 'next'
import { Mail, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt & Impressum',
  description:
    'Kontaktieren Sie Vencly – KI-Agenten-Plattformen für Venture Clienting und digitale Transformation. Impressum und Datenschutzinformationen.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-vencly-bg pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase mb-4">
            Kontakt
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sprechen wir
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Buchen Sie direkt eine Demo oder schreiben Sie uns – wir melden uns
            innerhalb von 24 Stunden.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <div className="bg-vencly-card border border-vencly-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-vencly-teal/10 rounded-xl flex items-center justify-center">
                <Mail size={20} className="text-vencly-teal" />
              </div>
              <h2 className="text-white font-semibold">E-Mail</h2>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Für allgemeine Anfragen und Projektgespräche:
            </p>
            <a
              href="mailto:info@vencly.com"
              className="text-vencly-teal hover:text-vencly-teal-light transition-colors"
            >
              info@vencly.com
            </a>
          </div>

          <div className="bg-vencly-card border border-vencly-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-vencly-teal/10 rounded-xl flex items-center justify-center">
                <MapPin size={20} className="text-vencly-teal" />
              </div>
              <h2 className="text-white font-semibold">Standort</h2>
            </div>
            <p className="text-gray-400 text-sm mb-1">Vencly GmbH</p>
            <p className="text-gray-400 text-sm">München, Deutschland</p>
          </div>
        </div>

        {/* Demo CTA */}
        <div className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded-2xl p-10 text-center mb-20">
          <h2 className="text-2xl font-bold text-white mb-3">
            Lieber direkt ein Gespräch?
          </h2>
          <p className="text-gray-400 mb-6">
            Buchen Sie sich einen 30-Minuten-Slot für eine persönliche Demo.
          </p>
          <a
            href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-vencly-teal-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors teal-glow"
          >
            Demo buchen
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Impressum */}
        <section className="border-t border-vencly-border pt-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Impressum</h2>
          <div className="text-gray-400 space-y-2 text-sm leading-relaxed">
            <p className="text-white font-medium">Vencly GmbH</p>
            <p>[Straße und Hausnummer – Platzhalter]</p>
            <p>[PLZ Ort – Platzhalter]</p>
            <p>Deutschland</p>
            <p className="pt-2">
              Geschäftsführer: [Name – Platzhalter]
            </p>
            <p>
              Handelsregister: [Amtsgericht – Platzhalter], HRB [Nummer –
              Platzhalter]
            </p>
            <p>USt-IdNr.: [USt-ID – Platzhalter]</p>
            <p className="pt-2">
              E-Mail:{' '}
              <a
                href="mailto:info@vencly.com"
                className="text-vencly-teal hover:underline"
              >
                info@vencly.com
              </a>
            </p>
          </div>
        </section>

        {/* Datenschutz */}
        <section className="border-t border-vencly-border pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Datenschutzhinweis
          </h2>
          <div className="text-gray-400 text-sm leading-relaxed space-y-4">
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes
              Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf
              Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>
            <p>
              Diese Website verwendet keine Tracking-Cookies ohne Ihre
              ausdrückliche Einwilligung. Für Fragen zum Datenschutz wenden Sie
              sich bitte an:{' '}
              <a
                href="mailto:datenschutz@vencly.com"
                className="text-vencly-teal hover:underline"
              >
                datenschutz@vencly.com
              </a>
            </p>
            <p className="text-xs text-gray-600">
              [Vollständige Datenschutzerklärung folgt – Platzhalter]
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
