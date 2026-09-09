import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/brand'

/**
 * Einzige Quelle der robots.txt.
 *
 * Vorher existierte zusätzlich eine statische public/robots.txt mit den
 * AI-Crawler-Freigaben. Diese Route hat sie im Build überschrieben, sodass die
 * Freigaben nie ausgeliefert wurden — die Regeln sind deshalb hierher gezogen.
 * Keine zweite robots.txt unter public/ anlegen.
 */
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    'GPTBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'PerplexityBot',
    'Googlebot',
    'bingbot',
  ]

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // KI- und Suchmaschinen-Crawler ausdrücklich zugelassen (AEO).
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
