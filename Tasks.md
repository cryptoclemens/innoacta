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

## Offen 🔄
- [ ] Echtes Factsheet PDF unter `/public/factsheet.pdf` hinterlegen
- [ ] Logos visuell prüfen: SWM, Toll Collect, RWE, Plenum AG
- [ ] Lighthouse-Audit (Performance, SEO, Accessibility)
- [ ] Cookie-Banner / Analytics (optional, z.B. Matomo)
