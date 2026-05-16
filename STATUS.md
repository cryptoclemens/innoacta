# Status – Vencly Website (innoacta)

**Stand: 2026-05-16**

## Live
- **URL:** https://vencly.com (Cloudflare Pages, Auto-Deploy auf `main`)
- **Framework:** Next.js 14 Static Export
- **Deployment:** Cloudflare Pages (`cryptoclemens/innoacta` → main)

## Zuletzt geliefert (2026-05-16) — SEO/AEO-Sprint — Commit `4b279b3`
- `layout.tsx`: SVG-OG-Image entfernt → Next.js nutzt automatisch `opengraph-image.tsx` (PNG 1200×630)
- `sitemap.ts`: fehlerhafte Same-URL-hreflang-Einträge entfernt; Duplikate bereinigt (60 → 15 Einträge)
- `ueber-uns/page.tsx`: LinkedIn `sameAs` für Clemens Pompeÿ ergänzt
- Blog (6 Artikel): `dateModified` auf 2026-05-16 aktualisiert
- `blog/innovation-republic-kmu-innovation/`: neuer Artikel über IR-Plattform + KMU-Innovation (Opus 4.7, ~850 Wörter, FAQPage + Article + BreadcrumbList JSON-LD)
- Vorher (2026-05-16): AVV-PDFs unter `/public/legal/`, Datenschutzerklärung Abschnitt 10

## Offene Punkte
- [ ] Factsheet PDF (`/public/factsheet.pdf`) — Platzhalter ersetzen
- [ ] Logos visuell prüfen (SWM, Toll Collect, RWE, Plenum AG)
- [ ] Lighthouse-Audit
- [ ] Cookie-Banner / Analytics (optional)
- [ ] Hash-Routing in IR Landing Page → echte URL-Pfade (SEO-Verbesserung, größere Aufgabe)
- [ ] Babel Standalone in IR → Build-Schritt (Vite/esbuild) für echtes statisches HTML
