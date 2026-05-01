'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Sun, Moon, Monitor, ChevronDown, CheckCircle2, Circle, ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/contexts/LanguageContext'
import { type Locale, localeLabels } from '@/lib/i18n'
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

const checkItems = [
  'Wir wollen ein neues Geschäftsfeld erschließen, haben aber keinen klaren Fahrplan.',
  'Wir wissen nicht, ob der Markt groß genug ist – oder ob Kunden wirklich zahlen würden.',
  'Wir haben intern keine Kapazität, das Thema strukturiert anzugehen.',
  'Wir stehen unter Zeitdruck – monatelange Konzeptphasen sind keine Option.',
  'Wir brauchen eine fundierte go/no-go-Entscheidung, kein weiteres Konzeptpapier.',
  'Wir wollen externes Know-how einbinden, ohne langen Onboarding-Prozess.',
]

function ValidationCheckModal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const [checked, setChecked] = useState<boolean[]>(Array(checkItems.length).fill(false))

  const score = checked.filter(Boolean).length
  const fits = score >= 3

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', keyHandler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', keyHandler)
    }
  }, [onClose])

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 pb-8 overflow-y-auto"
      style={{ background: 'rgba(11, 26, 23, 0.75)', backdropFilter: 'blur(6px)' }}
    >
      <div
        ref={ref}
        className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded shadow-2xl w-full max-w-lg my-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-gray-100 dark:border-vencly-border">
          <div>
            <span className="section-eyebrow text-xs">Schnell-Check</span>
            <h2 className="font-display text-lg font-normal text-gray-900 dark:text-white mt-1">
              Passt Vencly zu Ihnen?
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">Haken Sie an, was auf Ihr Unternehmen zutrifft.</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Schließen"
            className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors p-1 mt-0.5 flex-shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Checklist */}
        <ul className="px-6 py-5 space-y-3">
          {checkItems.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start gap-3 text-left group"
              >
                <span className="mt-0.5 flex-shrink-0">
                  {checked[i]
                    ? <CheckCircle2 size={18} className="text-vencly-teal" />
                    : <Circle size={18} className="text-gray-300 dark:text-gray-600 group-hover:text-vencly-teal/50 transition-colors" />
                  }
                </span>
                <span className={`text-sm leading-snug transition-colors ${
                  checked[i]
                    ? 'text-gray-900 dark:text-white font-medium'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {item}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Result */}
        <div className={`mx-6 mb-6 rounded p-4 transition-all ${
          score === 0
            ? 'bg-gray-50 dark:bg-vencly-bg border border-gray-100 dark:border-vencly-border'
            : fits
            ? 'bg-vencly-teal/8 border border-vencly-teal/30'
            : 'bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/40'
        }`}>
          {score === 0 && (
            <p className="text-xs text-gray-400 text-center">Wählen Sie die Punkte aus, die auf Sie zutreffen.</p>
          )}
          {score > 0 && !fits && (
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-amber-700 dark:text-amber-400">{score} von 6 Punkten.</span>{' '}
              Vielleicht noch kein akuter Bedarf – aber sprechen Sie uns gerne an.
            </p>
          )}
          {fits && (
            <div>
              <p className="text-sm font-semibold text-vencly-teal mb-1">
                {score} von 6 – Vencly könnte sehr gut passen.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Das klingt nach einem Projekt, das wir gemeinsam angehen können.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="px-6 pb-6 flex gap-3">
          <button
            {...calButtonProps}
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-vencly-blue hover:bg-vencly-blue-dark text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors cursor-pointer blue-glow"
          >
            Erstgespräch vereinbaren <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

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
        <div className="absolute left-0 top-full mt-2 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded shadow-lg overflow-hidden z-50 min-w-[220px]">
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
      className="w-8 h-8 flex items-center justify-center rounded text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
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
        className="flex items-center gap-1 text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-white/10"
      >
        {localeLabels[locale]}
        <ChevronDown size={11} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded shadow-lg overflow-hidden z-50 min-w-[72px]">
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
  const [checkOpen, setCheckOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { label: 'Blog', href: '/blog' },
    { label: t.nav.contact, href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {checkOpen && <ValidationCheckModal onClose={() => setCheckOpen(false)} />}

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
            <button
              onClick={() => setCheckOpen(true)}
              className="text-gray-500 dark:text-gray-400 hover:text-vencly-teal dark:hover:text-vencly-teal text-sm font-medium transition-colors px-3 py-1.5"
            >
              {t.nav.login}
            </button>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-1.5 bg-vencly-blue hover:bg-vencly-blue-dark text-white text-sm font-semibold px-4 py-2 rounded transition-colors cursor-pointer"
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
                <button
                  onClick={() => { setMenuOpen(false); setCheckOpen(true) }}
                  className="text-left text-vencly-teal text-sm font-medium transition-colors py-1"
                >
                  {t.nav.login}
                </button>
                <button
                  {...calButtonProps}
                  className="inline-flex items-center justify-center gap-1.5 bg-vencly-blue hover:bg-vencly-blue-dark text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors cursor-pointer"
                >
                  {t.nav.cta}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
