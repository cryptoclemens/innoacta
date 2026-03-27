import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-vencly-card border-t border-vencly-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-vencly-teal rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">V</span>
              </div>
              <span className="text-white font-bold">Vencly</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              KI-Agenten-Plattformen für Venture Clienting und digitale
              Transformation im Mittelstand.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Projekte', href: '/projects' },
                { label: 'Kontakt', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-vencly-teal text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact#impressum"
                  className="text-gray-500 hover:text-vencly-teal text-sm transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#datenschutz"
                  className="text-gray-500 hover:text-vencly-teal text-sm transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <a
                  href="mailto:datenschutz@vencly.com"
                  className="text-gray-500 hover:text-vencly-teal text-sm transition-colors"
                >
                  datenschutz@vencly.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-vencly-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Vencly GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://vencly.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-vencly-teal text-xs transition-colors"
            >
              Login →
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
