'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const GA_ID = 'G-NEDCRSRHND'

function updateConsent(granted: boolean) {
  if (typeof window === 'undefined') return
  const dl = (window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void })
  if (typeof dl.gtag === 'function') {
    dl.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
    })
    if (granted) {
      dl.gtag('config', GA_ID)
    }
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (!stored) {
      setVisible(true)
    } else if (stored === 'accepted') {
      updateConsent(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    updateConsent(true)
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    updateConsent(false)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] px-4 pb-4 pointer-events-none">
      <div className="max-w-xl mx-auto bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded shadow-2xl p-5 pointer-events-auto">
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Wir nutzen <strong className="text-gray-900 dark:text-white">Google Analytics</strong>, um zu verstehen,
          wie unsere Website genutzt wird — nur mit Ihrer Zustimmung und ohne personenbezogenes Tracking.{' '}
          <Link href="/datenschutz" className="text-vencly-teal hover:underline whitespace-nowrap">
            Datenschutzerklärung →
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 bg-vencly-blue hover:bg-vencly-blue-dark text-white text-sm font-semibold py-2.5 rounded transition-colors"
          >
            Akzeptieren
          </button>
          <button
            onClick={reject}
            className="flex-1 border border-gray-200 dark:border-vencly-border text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium py-2.5 rounded transition-colors hover:border-gray-400 dark:hover:border-gray-500"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  )
}
