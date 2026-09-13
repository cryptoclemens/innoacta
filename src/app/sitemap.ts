import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/brand'

/**
 * Sitemap.
 *
 * URLs enden auf "/" — das Projekt nutzt trailingSlash: true, die Form ohne
 * Schrägstrich antwortet mit 308. Jede Sitemap-URL muss exakt dem canonical
 * ihrer Seite entsprechen, sonst meldet die Search Console
 * „Seite mit Weiterleitung" bzw. „Duplikat".
 *
 * lastModified nur bei inhaltlicher Änderung der Seite anpassen. Google wertet
 * lastmod aus, solange die Angaben verlässlich sind — pauschal aktualisierte
 * Daten führen dazu, dass es sie ignoriert.
 *
 * Bewusst nicht enthalten: /impressum und /datenschutz (Pflichtseiten ohne
 * Suchrelevanz) sowie /404.
 *
 * Achtung: Projekte ohne `href` in src/lib/projects.ts erzeugen über die Route
 * [slug] eine eigene Seite. Neue Projekte dieser Art hier ergänzen.
 */

const BASE = SITE_URL

function page(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  lastModified: string,
): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}/`, lastModified: new Date(lastModified), changeFrequency, priority }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Kernseiten
    page('',                           1.0, 'weekly',  '2026-09-09'),
    page('/venture-clienting',         0.9, 'monthly', '2026-09-09'),
    page('/geschaeftsfeldentwicklung', 0.9, 'monthly', '2026-09-09'),
    page('/strategische-umsetzung',    0.9, 'monthly', '2026-09-09'),
    page('/ueber-uns',                 0.8, 'monthly', '2026-09-09'),
    page('/contact',                   0.7, 'monthly', '2026-09-09'),

    // Projekte
    page('/projects',            0.8, 'monthly', '2026-09-09'),
    page('/innovation-republic', 0.8, 'monthly', '2026-09-09'),
    page('/geopotatlas',         0.8, 'monthly', '2026-09-09'),
    page('/optaimum',            0.8, 'monthly', '2026-09-09'),
    page('/souffleur',           0.8, 'monthly', '2026-09-09'),
    page('/kitalo',              0.8, 'monthly', '2026-09-09'),
    page('/brunniq',             0.8, 'monthly', '2026-09-13'),
    page('/autotodo',            0.7, 'monthly', '2026-09-09'),

    // OptAImum-Werkzeuge
    page('/optaimum/prompt-generator', 0.7, 'monthly', '2026-09-09'),
    page('/optaimum/profil-md',        0.7, 'monthly', '2026-09-09'),
    page('/optaimum/skill-md',         0.7, 'monthly', '2026-09-09'),
    page('/optaimum/hook-md',          0.7, 'monthly', '2026-09-09'),
    page('/optaimum/llm-wechsel',      0.7, 'monthly', '2026-09-09'),
    page('/optaimum/vm-setup',         0.7, 'monthly', '2026-09-09'),

    // Blog
    page('/blog', 0.85, 'weekly', '2026-09-09'),
    page('/blog/souffleur-ki-verhandlungscoach',                  0.75, 'monthly', '2026-09-09'),
    page('/blog/innovation-republic-kmu-innovation',               0.75, 'monthly', '2026-09-09'),
    page('/blog/christoph-werner-dm-wirtschaftspolitik-freiheit', 0.75, 'monthly', '2026-09-09'),
    page('/blog/ki-beratung-mittelstand',                          0.75, 'monthly', '2026-09-09'),
    page('/blog/venture-client-mittelstand',                       0.75, 'monthly', '2026-09-09'),
    page('/blog/was-ist-venture-clienting',                        0.75, 'monthly', '2026-09-09'),
    page('/blog/geschaeftsfeldentwicklung-methoden',               0.75, 'monthly', '2026-09-09'),
    page('/blog/startup-zusammenarbeit-venture-client',            0.75, 'monthly', '2026-09-09'),
    page('/blog/venture-clienting-regulierte-branchen',            0.75, 'monthly', '2026-09-09'),

    // Namenswechsel — genau die Seite, die Bestandskontakte beim Umzug suchen
    page('/rebranding', 0.6, 'yearly', '2026-09-09'),
  ]
}
