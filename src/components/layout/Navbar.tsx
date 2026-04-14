'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Sun, Moon, Monitor, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/contexts/LanguageContext'
import { type Locale, localeLabels } from '@/lib/i18n'
import { LOGIN_URL } from '@/lib/config'
import { calButtonProps } from '@/components/layout/CalProvider'

const locales: Locale[] = ['de', 'en', 'fr', 'es']

const serviceLinks = [
  { href: '/geschaeftsfeldentwicklung', label: 'Geschäftsfeldentwicklung' },
  { href: '/venture-clienting', label: 'Venture Clienting' },
  { href: '/strategische-umsetzung', label: 'Strategische Umsetzung' },
]

const projectLinks = [
  { href: '/projects#innovation-republic', label: 'Innovation Republic' },
  { href: '/projects#geopotatlas', label: 'Geopotatlas' },
  { href: '/autotodo', label: 'AutoToDo' },
  { href: '/optaimum', label: 'OptAImum' },
]

function NavDropdown({ label, allHref, allLabel, links }: {
  label: string
  allHref: string
  allLabel: string
  links: { href: string; label: string }[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors"
      >
        {label}
        <ChevronDown size={13} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-xl shadow-lg overflow-hidden z-50 min-w-[220px]">
          <Link
            href={allHref}
            onClick={() => setOpen(false)}
            className="block px-4 py-3 text-xs font-mono tracking-widest uppercase text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 border-b border-gray-100 dark:border-vencly-border transition-colors"
          >
            {allLabel}
          </Link>
          {links.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-vencly-border last:border-0"
            >
              {s.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function ServicesDropdown({ label }: { label: string }) {
  return <NavDropdown label={label} allHref="/#leistungen" allLabel="Alle Leistungen ↓" links={serviceLinks} />
}

function ProjectsDropdown({ label }: { label: string }) {
  return <NavDropdown label={label} allHref="/projects" allLabel="Alle Projekte" links={projectLinks} />
}

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-8 h-8" />

  const cycle = () => {
    if (theme === 'system') setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    else if (theme === 'dark') setTheme('light')
    else setTheme('dark')
  }

  return (
    <button
      onClick={cycle}
      className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
      aria-label="Toggle theme"
      title={theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
    >
      {theme === 'system' ? (
        <Monitor size={16} />
      ) : resolvedTheme === 'dark' ? (
        <Moon size={16} />
      ) : (
        <Sun size={16} />
      )}
    </button>
  )
}

function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Language selector"
        className="flex items-center gap-1 text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
      >
        {localeLabels[locale]}
        <ChevronDown size={11} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-xl shadow-lg overflow-hidden z-50 min-w-[72px]">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => { setLocale(l); setOpen(false) }}
              className={`w-full text-left px-3 py-2 text-xs font-mono font-semibold transition-colors
                ${l === locale
                  ? 'text-vencly-teal bg-vencly-teal/5'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
            >
              {localeLabels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.contact, href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-gray-200 dark:border-vencly-border shadow-sm dark:shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logovencly.svg"
            alt="Vencly"
            width={120}
            height={36}
            className="h-9 w-auto dark:invert"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors"
          >
            {t.nav.home}
          </Link>
          <ServicesDropdown label={t.nav.services} />
          <ProjectsDropdown label={t.nav.projects} />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors px-3 py-1.5"
          >
            {t.nav.login}
          </a>
          <button
            {...calButtonProps}
            className="inline-flex items-center gap-1.5 bg-vencly-blue hover:bg-vencly-blue-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-vencly-card border-b border-gray-200 dark:border-vencly-border">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors py-1">
              {t.nav.home}
            </Link>
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-gray-400 block mb-2">{t.nav.services}</span>
              <div className="pl-3 flex flex-col gap-2 border-l border-gray-200 dark:border-vencly-border">
                <Link href="/#leistungen" onClick={() => setMenuOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Alle Leistungen</Link>
                {serviceLinks.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">{s.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-gray-400 block mb-2">{t.nav.projects}</span>
              <div className="pl-3 flex flex-col gap-2 border-l border-gray-200 dark:border-vencly-border">
                <Link href="/projects" onClick={() => setMenuOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Alle Projekte</Link>
                {projectLinks.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">{s.label}</Link>
                ))}
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-vencly-border">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors py-1"
              >
                {t.nav.login}
              </a>
              <button
                {...calButtonProps}
                className="inline-flex items-center justify-center gap-1.5 bg-vencly-blue hover:bg-vencly-blue-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                {t.nav.cta}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
