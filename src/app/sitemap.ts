import type { MetadataRoute } from 'next'

const BASE = 'https://vencly.com'

function entry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }
}

function blogEntry(path: string): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry('', 1, 'weekly'),
    entry('/venture-clienting', 0.9, 'monthly'),
    entry('/geschaeftsfeldentwicklung', 0.9, 'monthly'),
    entry('/strategische-umsetzung', 0.9, 'monthly'),
    entry('/projects', 0.8, 'monthly'),
    entry('/innovation-republic', 0.8, 'monthly'),
    entry('/geopotatlas', 0.8, 'monthly'),
    entry('/optaimum', 0.85, 'monthly'),
    entry('/autotodo', 0.8, 'monthly'),
    entry('/souffleur', 0.75, 'monthly'),
    entry('/contact', 0.6, 'monthly'),
    blogEntry('/blog'),
    blogEntry('/blog/ki-beratung-mittelstand'),
    blogEntry('/blog/venture-client-mittelstand'),
    blogEntry('/blog/was-ist-venture-clienting'),
    blogEntry('/blog/geschaeftsfeldentwicklung-methoden'),
    blogEntry('/blog/startup-zusammenarbeit-venture-client'),
    blogEntry('/blog/venture-clienting-regulierte-branchen'),
    blogEntry('/blog/innovation-republic-kmu-innovation'),
  ]
}
