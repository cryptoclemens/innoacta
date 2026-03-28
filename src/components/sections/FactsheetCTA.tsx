import { Download, FileText } from 'lucide-react'

export default function FactsheetCTA() {
  return (
    <section className="bg-vencly-bg py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-vencly-teal/10 via-vencly-teal/5 to-transparent border border-vencly-teal/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-vencly-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText size={24} className="text-vencly-teal" />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl md:text-2xl mb-2">
                Vencly auf zwei Seiten
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Leistungsübersicht, Methodik und Referenzprojekt kompakt
                zusammengefasst – für die nächste interne Runde.
              </p>
            </div>
          </div>
          <a
            href="/factsheet.pdf"
            download
            className="flex-shrink-0 inline-flex items-center gap-2 bg-vencly-teal hover:bg-vencly-teal-dark text-white font-semibold px-7 py-3 rounded-xl transition-all teal-glow hover:scale-105 whitespace-nowrap"
          >
            <Download size={18} />
            PDF herunterladen
          </a>
        </div>
      </div>
    </section>
  )
}
