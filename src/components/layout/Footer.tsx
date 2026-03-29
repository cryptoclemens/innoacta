'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white dark:bg-vencly-card border-t border-gray-200 dark:border-vencly-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logovencly.svg"
                alt="Vencly"
                width={120}
                height={36}
                className="h-9 w-auto dark:invert"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-4">
              {t.footer.navLabel}
            </h3>
            <ul className="space-y-2">
              {[
                { label: t.nav.home, href: '/' },
                { label: t.nav.projects, href: '/projects' },
                { label: t.nav.contact, href: '/contact' },
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
            <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-4">
              {t.footer.legalLabel}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact#impressum"
                  className="text-gray-500 hover:text-vencly-teal text-sm transition-colors"
                >
                  {t.footer.impressum}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#datenschutz"
                  className="text-gray-500 hover:text-vencly-teal text-sm transition-colors"
                >
                  {t.footer.datenschutz}
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

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-vencly-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Vencly GmbH. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://vencly.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-vencly-teal text-xs transition-colors"
            >
              {t.nav.login} →
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
