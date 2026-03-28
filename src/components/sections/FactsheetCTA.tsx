'use client'

import { Download, FileText } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FactsheetCTA() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#F8F7F4] dark:bg-vencly-bg py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-vencly-blue/10 via-vencly-blue/5 to-transparent border border-vencly-blue/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-vencly-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText size={24} className="text-vencly-blue" />
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
            className="flex-shrink-0 inline-flex items-center gap-2 bg-vencly-blue hover:bg-vencly-blue-dark text-white font-semibold px-7 py-3 rounded-xl transition-all blue-glow hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <Download size={18} />
            {t.factsheet.button}
          </a>
        </div>
      </div>
    </section>
  )
}
