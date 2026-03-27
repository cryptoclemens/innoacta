'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown } from 'lucide-react'

const rotatingPhrases = [
  'in 7 Tagen zum Prototypen!',
  'Kosten senken statt Slides bauen!',
  'Innovation die wirklich wirkt!',
  'KMUs fit für die Zukunft machen!',
  'Ausschreibungen auf Autopilot!',
  'neue Talente & Partner finden!',
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingPhrases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-vencly-bg overflow-hidden px-4">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(90deg, #14b8a6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vencly-teal/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6">
          <span className="text-vencly-teal text-xs font-mono tracking-widest uppercase border border-vencly-teal/30 bg-vencly-teal/5 px-4 py-1.5 rounded-full">
            KI-Agenten-Plattform
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2">
          Venture Clienting:
        </h1>

        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-4 leading-relaxed">
          Große Unternehmen kaufen Startups als externe Innovationseinheit – ohne
          Risiko, ohne Beteiligung. Fail fast, learn faster. Kosten runter, Tempo rauf.
        </p>

        {/* Rotating text */}
        <div className="h-28 sm:h-32 md:h-40 lg:h-48 flex items-center justify-center overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text block"
            >
              Jetzt {rotatingPhrases[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Vencly automatisiert Ihren gesamten Venture-Clienting-Prozess – von
          der Startup-Suche über DSGVO-konforme Ausschreibungen bis hin zum
          funktionsfähigen Prototypen. Für KMUs und öffentliche Träger.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-vencly-teal-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all teal-glow hover:scale-105 text-base"
          >
            Kostenlose Demo buchen
            <ExternalLink size={16} />
          </a>
          <a
            href="/public/factsheet.pdf"
            download
            className="inline-flex items-center gap-2 border border-vencly-border hover:border-vencly-teal/50 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
          >
            Factsheet laden
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
