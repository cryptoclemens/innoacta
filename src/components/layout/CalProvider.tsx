'use client'

import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'
import { CAL_LINK, CAL_ORIGIN } from '@/lib/config'

export default function CalProvider() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi(`${CAL_ORIGIN}/embed.js`)
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return null
}

// Convenience: typed props for booking buttons
export const calButtonProps = {
  'data-cal-link': CAL_LINK,
  'data-cal-origin': CAL_ORIGIN,
  'data-cal-config': '{"layout":"month_view"}',
} as const
