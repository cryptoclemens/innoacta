import type { MetadataRoute } from 'next'

const BASE = 'https://vencly.com'

function page(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  lastModified: string,
): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}`, lastModified: new Date(lastModified), changeFrequency, priority }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    page('',                           1.0, 'weekly',  '2026-06-05'),
    page('/venture-clienting',         0.9, 'monthly', '2025-05-01'),
    page('/geschaeftsfeldentwicklung', 0.9, 'monthly', '2025-05-01'),
    page('/strategische-umsetzung',    0.9, 'monthly', '2025-05-01'),
    page('/ueber-uns',                 0.8, 'monthly', '2025-05-01'),
    page('/contact',                   0.7, 'monthly', '2025-05-01'),

    // Projects
    page('/projects',           0.8, 'monthly', '2026-06-05'),
    page('/innovation-republic', 0.8, 'monthly', '2026-05-16'),
    page('/geopotatlas',         0.8, 'monthly', '2026-05-16'),
    page('/optaimum',            0.8, 'monthly', '2026-05-01'),
    page('/souffleur',           0.8, 'monthly', '2026-06-05'),
    page('/kitalo',              0.8, 'monthly', '2026-06-05'),
    page('/autotodo',            0.7, 'monthly', '2026-05-01'),

    // Blog index
    page('/blog', 0.85, 'weekly', '2026-06-05'),

    // Blog articles
    page('/blog/souffleur-ki-verhandlungscoach',                    0.75, 'monthly', '2026-06-05'),
    page('/blog/innovation-republic-kmu-innovation',                 0.75, 'monthly', '2026-05-16'),
    page('/blog/christoph-werner-dm-wirtschaftspolitik-freiheit',   0.75, 'monthly', '2026-04-30'),
    page('/blog/ki-beratung-mittelstand',                            0.75, 'monthly', '2025-05-01'),
    page('/blog/venture-client-mittelstand',                         0.75, 'monthly', '2025-05-01'),
    page('/blog/was-ist-venture-clienting',                          0.75, 'monthly', '2025-05-01'),
    page('/blog/geschaeftsfeldentwicklung-methoden',                 0.75, 'monthly', '2025-05-01'),
    page('/blog/startup-zusammenarbeit-venture-client',              0.75, 'monthly', '2025-05-01'),
    page('/blog/venture-clienting-regulierte-branchen',              0.75, 'monthly', '2025-05-01'),
  ]
}
