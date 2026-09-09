'use client'

import { Download, FileText } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FactsheetCTA() {
  const { t } = useLanguage()

  return (
    <section className="bg-brand-sky dark:bg-brand-night py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-brand-teal/10 via-brand-teal/5 to-transparent border border-brand-teal/20 rounded p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-brand-teal/10 rounded flex items-center justify-center flex-shrink-0">
              <FileText size={24} className="text-brand-teal dark:text-brand-mint" />
            </div>
            <div>
              <h2 className="text-gray-900 dark:text-white font-bold text-xl md:text-2xl mb-2">
                {t.factsheet.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                {t.factsheet.desc}
              </p>
            </div>
          </div>
          <a
            href="/factsheet.pdf"
            download
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-night dark:bg-brand-mint dark:hover:bg-white text-white dark:text-brand-navy font-semibold px-7 py-3 rounded transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <Download size={18} />
            {t.factsheet.button}
          </a>
        </div>
      </div>
    </section>
  )
}
