# Tasks & Meilensteine – Vencly Website

## Meilenstein 1: Grundgerüst ✅
- [x] Next.js 14 App Router mit Static Export
- [x] Tailwind CSS + Custom Color Palette
- [x] Alle Sektionen: Hero, ValueProp, Features, WhyUs, References, FactsheetCTA
- [x] Navbar + Footer
- [x] TypeScript strict mode

## Meilenstein 2: Deployment & CI/CD ✅
- [x] GitHub Repository `cryptoclemens/innoacta`
- [x] GitHub Actions Workflow (Build + Deploy)
- [x] Cloudflare Pages Projekt `vencly`
- [x] Automatischer Deploy bei jedem Push auf `main`
- [x] Logo-Download in CI (Wikimedia SVGs + S3 PNG mit User-Agent)

## Meilenstein 3: SEO & Assets ✅
- [x] `sitemap.xml` (Next.js MetadataRoute)
- [x] `robots.txt`
- [x] SVG Favicon `/public/favicon.svg`
- [x] OG-Image 1200×630 `/public/og-image.svg`
- [x] Impressum mit echten Firmendaten (vencly GmbH, HRB 290524)

## Meilenstein 4: Content & UX ✅
- [x] Hero Stats Strip: 40+ Projekte, 6 Mo. Laufzeit, 7 Fokus-Branchen
- [x] ValueProp: 5 Leistungsfelder mit Kacheln
- [x] Features: 3 Leistungsfelder mit Detail-Bullets
- [x] References: SWM, RWE, Plenum AG, Toll Collect
- [x] Build-Versionsnummer unten rechts (Git SHA)

## Meilenstein 5: Domain & Produktion ✅
- [x] DNS-Setup: Nameserver auf Cloudflare
- [x] Custom Domain `vencly.com` aktiv
- [x] SSL-Zertifikat via Cloudflare

## Meilenstein 6: Dark Mode, i18n & Redesign ✅
- [x] Dark/Light/System Mode (`next-themes`)
- [x] Mehrsprachigkeit DE/EN/FR/ES (`LanguageContext`, localStorage)
- [x] Vollständiges Rebranding zu „Strategische Geschäftsfeldentwicklung"
- [x] Bold Navy-Blue Redesign (alle Teal-Akzente → Blue)
- [x] Enterprise Gateway Design-Pattern (UI/UX Pro Max)
- [x] Neues Logo `logovencly.svg` in Navbar
- [x] Logo dark:invert für Dark-Mode-Sichtbarkeit
- [x] Hero: Navbar-Abstand, H1-Größe, Stats-Strip

## Meilenstein 7: Typografie ✅
- [x] Satoshi Variable (Body) — self-hosted via `next/font/local`
- [x] Zodiak Variable (Headlines H1/H2) — self-hosted via `next/font/local`
- [x] Beide Fonts von Fontshare, kein externer Runtime-Request

## Meilenstein 8: DSGVO-Compliance ✅
- [x] AVV-Dokumente (Anthropic, Resend, Cloudflare) unter `/public/legal/` hinterlegt
- [x] Datenschutzseite: Abschnitt 10 „Auftragsverarbeitungsverträge (Art. 28 DSGVO)" mit Download-Links
- [x] Stand Datenschutzerklärung auf Mai 2026 aktualisiert
- [x] Hetzner AVV: Portal-Akzeptanz dokumentiert (kein öffentliches PDF)

## Meilenstein 9: SEO/AEO-Sprint ✅ (2026-05-16)
- [x] OG-Image-Fix: SVG-Referenz aus `layout.tsx` entfernt → `opengraph-image.tsx` PNG wird automatisch genutzt
- [x] hreflang-Bereinigung: Same-URL-hreflang aus `sitemap.ts` entfernt, 60 → 15 Sitemap-Einträge
- [x] LinkedIn `sameAs` in Person-Schema (`ueber-uns/page.tsx`) eingetragen
- [x] `dateModified` in allen 6 Blog-Artikeln auf 2026-05-16 aktualisiert
- [x] Neuer Blog-Artikel: `blog/innovation-republic-kmu-innovation/` mit Article + FAQPage + BreadcrumbList JSON-LD

## Meilenstein 10: Souffleur-Sprint ✅ (2026-06-05)
- [x] Souffleur auf `/projects` als 5. Projekt ergänzt (Karte, Status "In Entwicklung")
- [x] Navbar-Dropdown: Souffleur ergänzt; alle Projekt-Links auf direkte Routen umgestellt
- [x] Unterseite `/innovation-republic` erstellt (Workflow, Features, Metriken, CTA)
- [x] Unterseite `/geopotatlas` erstellt (Workflow, Features, Metriken, CTA)
- [x] Unterseite `/souffleur` erstellt (Workflow, Features, Käuferseite-Zitat, CTA)
- [x] Alle 5 Projekt-Karten auf `/projects` klickbar (href gesetzt)
- [x] Blog-Artikel `/blog/souffleur-ki-verhandlungscoach` erstellt (~8 Min., Article + FAQPage + BreadcrumbList JSON-LD)
- [x] `sitemap.ts` um 5 neue Einträge erweitert

## Offen 🔄
- [ ] Echtes Factsheet PDF unter `/public/factsheet.pdf` hinterlegen
- [ ] Logos visuell prüfen: SWM, Toll Collect, RWE, Plenum AG
- [ ] Lighthouse-Audit (Performance, SEO, Accessibility)
- [ ] Cookie-Banner / Analytics (optional, z.B. Matomo)
