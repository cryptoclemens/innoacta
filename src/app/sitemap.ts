import type { MetadataRoute } from 'next'

const BASE = 'https://vencly.com'
const locales = ['de', 'en', 'fr', 'es'] as const

function entry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']): MetadataRoute.Sitemap[number][] {
  const url = `${BASE}${path}`
  return locales.map((lang) => ({
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, url])) as Record<string, string>,
    },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entry('', 1, 'weekly'),
    ...entry('/venture-clienting', 0.9, 'monthly'),
    ...entry('/geschaeftsfeldentwicklung', 0.9, 'monthly'),
    ...entry('/strategische-umsetzung', 0.9, 'monthly'),
    ...entry('/projects', 0.8, 'monthly'),
    ...entry('/contact', 0.6, 'monthly'),
  ]
}
