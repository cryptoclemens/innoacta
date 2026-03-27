'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ExternalLink } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projekte', href: '/projects' },
  { label: 'Kontakt', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-vencly-bg/90 backdrop-blur-md border-b border-vencly-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-vencly-teal rounded-lg flex items-center justify-center group-hover:bg-vencly-teal-dark transition-colors">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Vencly
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://vencly.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm font-medium transition-colors px-3 py-1.5"
          >
            Login
          </a>
          <a
            href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-vencly-teal hover:bg-vencly-teal-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Demo buchen
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-vencly-card border-b border-vencly-border">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-vencly-border">
              <a
                href="https://vencly.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors py-1"
              >
                Login
              </a>
              <a
                href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-vencly-teal hover:bg-vencly-teal-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Demo buchen
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
