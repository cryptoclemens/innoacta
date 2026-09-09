# Status – Website (innoacta)

**Stand: 2026-09-09**

## Live
- **URL:** https://vencly.com (Cloudflare Pages, Auto-Deploy auf `main`)
- **Framework:** Next.js 14 Static Export
- **Deployment:** Cloudflare Pages (`cryptoclemens/innoacta` → main)

## Laufend: Rebranding Vencly → innovation.today (seit 2026-09-09)

- **Firmierung:** bleibt **Vencly GmbH** — nur Marke/Website werden umbenannt
- **Zieldomain:** `innovation.today` wird zentrale Homepage; `vencly.com` leitet danach dorthin weiter
- **Brand-Assets:** Wortmarke (Nunito Sans Bold, in Pfade konvertiert), geliefert 2026-09-09
  - Navy `#14304A` · Teal `#0F766E` · auf dunkel: Weiß + Mint `#5EEAD4` · Nachtblau `#0F2540`
  - Quelle: `public/brand-assets.zip` auf Branch `claude/setup-innoacta-repo-Jr9Z4`

### 🔒 Backup des Vencly-Standes (jederzeit wiederherstellbar)

Vollständige Sicherung vor Beginn des Rebrandings, Commit `a59ca06`:

| Ebene | Referenz |
|---|---|
| Git-Tag | `pre-rebrand-innovation-today` (GitHub) |
| Git-Branch | `backup/pre-rebrand-innovation-today` (GitHub) |
| Server-Archiv | `/root/backups/innoacta/innoacta-pre-rebrand-20260909-2024.tar.gz` (4,3 MB) |

Rückweg: `git reset --hard pre-rebrand-innovation-today`

Tag und Branch bleiben erhalten, bis das Rebranding final abgenommen ist.

## Zuletzt geliefert (2026-06-05) — Souffleur-Sprint — Commits `95d11b3`–`586de6b`
- `projects/page.tsx`: Souffleur als 5. Projekt ergänzt; alle 5 Karten jetzt klickbar (href gesetzt)
- `Navbar.tsx`: Souffleur im Projekt-Dropdown; alle Links auf direkte Routen (kein `#anchor` mehr)
- `app/innovation-republic/page.tsx`: neue Unterseite mit Workflow, Features, Metriken, Tech Stack, CTA
- `app/geopotatlas/page.tsx`: neue Unterseite mit Workflow, Features, Metriken, Tech Stack, CTA
- `app/souffleur/page.tsx`: neue Unterseite mit Workflow, Features, Zitat, Tech Stack, CTA
- `blog/souffleur-ki-verhandlungscoach/page.tsx`: neuer Blog-Artikel (~8 Min., Article + FAQPage + BreadcrumbList JSON-LD)
- `sitemap.ts`: 5 neue Einträge (innovation-republic, geopotatlas, souffleur, Blog-Artikel)

## Zuletzt geliefert (2026-05-16) — SEO/AEO-Sprint — Commit `4b279b3`
- `layout.tsx`: SVG-OG-Image entfernt → Next.js nutzt automatisch `opengraph-image.tsx` (PNG 1200×630)
- `sitemap.ts`: fehlerhafte Same-URL-hreflang-Einträge entfernt; Duplikate bereinigt (60 → 15 Einträge)
- `ueber-uns/page.tsx`: LinkedIn `sameAs` für Clemens Pompeÿ ergänzt
- Blog (6 Artikel): `dateModified` auf 2026-05-16 aktualisiert
- `blog/innovation-republic-kmu-innovation/`: neuer Artikel über IR-Plattform + KMU-Innovation
- Vorher (2026-05-16): AVV-PDFs unter `/public/legal/`, Datenschutzerklärung Abschnitt 10

## Offene Punkte
- [ ] Factsheet PDF (`/public/factsheet.pdf`) — Platzhalter ersetzen
- [ ] Logos visuell prüfen (SWM, Toll Collect, RWE, Plenum AG)
- [ ] Lighthouse-Audit
- [ ] Cookie-Banner / Analytics (optional)
- [ ] Hash-Routing in IR Landing Page → echte URL-Pfade (SEO-Verbesserung, größere Aufgabe)
- [ ] Babel Standalone in IR → Build-Schritt (Vite/esbuild) für echtes statisches HTML
