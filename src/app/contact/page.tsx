'use client'
import Link from 'next/link'
import { Mail, MapPin, ExternalLink, FileText, Shield } from 'lucide-react'
import { usePageTranslation } from '@/lib/hooks/usePageTranslation'

export default function ContactPage() {
  const p = usePageTranslation()
  const ct = p.contact

  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-eyebrow justify-center mb-4">{ct.eyebrow}</span>
          <h1 className="font-display text-4xl md:text-5xl font-normal text-gray-900 dark:text-white mt-3 mb-6">
            {ct.h1}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
            {ct.subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-vencly-teal/10 rounded flex items-center justify-center">
                <Mail size={20} className="text-vencly-teal" />
              </div>
              <h2 className="text-gray-900 dark:text-white font-semibold">{ct.emailLabel}</h2>
            </div>
            <p className="text-gray-500 text-sm mb-3">
              {ct.emailDesc}
            </p>
            <a
              href="mailto:hello@vencly.com"
              className="text-vencly-teal hover:text-vencly-teal-light transition-colors"
            >
              hello@vencly.com
            </a>
          </div>

          <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-vencly-teal/10 rounded flex items-center justify-center">
                <MapPin size={20} className="text-vencly-teal" />
              </div>
              <h2 className="text-gray-900 dark:text-white font-semibold">{ct.locationLabel}</h2>
            </div>
            <p className="text-gray-500 text-sm mb-1">Vencly GmbH</p>
            <p className="text-gray-500 text-sm">Leopoldstraße 31, 80802 München</p>
          </div>
        </div>

        {/* Demo CTA */}
        <div className="bg-vencly-teal/5 border border-vencly-teal/20 rounded p-10 text-center mb-20">
          <h2 className="font-display text-2xl font-normal text-gray-900 dark:text-white mb-3">
            {ct.demoH2}
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            {ct.demoP}
          </p>
          <a
            href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vencly-blue hover:bg-vencly-blue-dark text-white font-semibold px-8 py-3 rounded transition-colors blue-glow"
          >
            {ct.demoButton}
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Legal links */}
        <div className="border-t border-gray-200 dark:border-vencly-border pt-12">
          <h2 className="font-display text-xl font-normal text-gray-900 dark:text-white mb-6">{ct.legalH2}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/impressum"
              className="flex items-center gap-4 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-5 hover:border-vencly-teal/40 transition-colors group"
            >
              <div className="w-9 h-9 bg-vencly-teal/10 rounded flex items-center justify-center flex-shrink-0">
                <FileText size={17} className="text-vencly-teal" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-vencly-teal transition-colors">{ct.impressumLabel}</p>
                <p className="text-xs text-gray-400 mt-0.5">{ct.impressumNote}</p>
              </div>
            </Link>
            <Link
              href="/datenschutz"
              className="flex items-center gap-4 bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-5 hover:border-vencly-teal/40 transition-colors group"
            >
              <div className="w-9 h-9 bg-vencly-teal/10 rounded flex items-center justify-center flex-shrink-0">
                <Shield size={17} className="text-vencly-teal" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-vencly-teal transition-colors">{ct.datenschutzLabel}</p>
                <p className="text-xs text-gray-400 mt-0.5">{ct.datenschutzNote}</p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
