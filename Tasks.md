# Tasks – Meilenstein-Planung & Tracking

## Status-Legende

- ✅ Erledigt
- 🔄 In Arbeit
- ⬜ Offen
- ❌ Blockiert

---

## Meilenstein 1: Repository & Projekt-Setup ✅

- [x] GitHub Repo erstellen (`cryptoclemens/innoacta`)
- [x] Branch anlegen (`claude/setup-innoacta-repo-Jr9Z4`)
- [x] `Brief.md`, `CLAUDE.md`, `Tasks.md` erstellen
- [x] `package.json` mit allen Dependencies
- [x] `next.config.js` (Static Export, trailingSlash, unoptimized images)
- [x] `tailwind.config.js` mit custom Vencly-Farben
- [x] `tsconfig.json`
- [x] `wrangler.toml`
- [x] `.github/workflows/deploy.yml`
- [x] `README.md`

---

## Meilenstein 2: Layout & Routing ✅

- [x] `src/app/layout.tsx` (Root Layout, Metadata, SEO)
- [x] `src/app/globals.css` (Tailwind Directives, Custom Styles)
- [x] `src/app/page.tsx` (Startseite, alle Sektionen)
- [x] `src/app/projects/page.tsx` (Projekt-Seite)
- [x] `src/app/contact/page.tsx` (Kontaktseite mit Impressum)
- [x] `src/components/layout/Navbar.tsx`
- [x] `src/components/layout/Footer.tsx`

---

## Meilenstein 3: Sektionen / Komponenten ✅

- [x] `Hero.tsx` — Rotating-Text-Animation mit Framer Motion
- [x] `FactsheetCTA.tsx` — PDF-Download Button
- [x] `ValueProp.tsx` — 5 Bullet-Points KI-Agent Vorteile
- [x] `Features.tsx` — 3 Feature-Karten (Innovation, Strategie, Einkauf)
- [x] `WhyUs.tsx` — Platzhalter-Sektion
- [x] `LogoBar.tsx` — Partner-Logo-Leiste
- [x] `References.tsx` — Referenz-Logos

---

## Meilenstein 4: Assets & SEO ⬜

- [ ] Echtes Factsheet-PDF unter `/public/factsheet.pdf` ablegen
- [ ] Echte Partner-Logos von Webflow-CDN herunterladen
- [ ] Referenz-Logos (Toll Collect, SWM, MVG) integrieren
- [ ] `og:image` und Social-Preview-Grafik erstellen
- [ ] Sitemap.xml generieren
- [ ] robots.txt konfigurieren

---

## Meilenstein 5: Deployment & DNS ⬜

- [ ] Cloudflare Pages Projekt anlegen (`vencly`)
- [ ] `CLOUDFLARE_API_TOKEN` als GitHub Secret hinterlegen
- [ ] GitHub Actions Workflow testen (Push auf `main`)
- [ ] DNS: CNAME `vencly.com` → `vencly.pages.dev`
- [ ] Custom Domain in Cloudflare Pages aktivieren
- [ ] Lighthouse Audit (Ziel: Performance > 90)

---

## Meilenstein 6: Content-Feinschliff ⬜

- [ ] WhyUs-Sektion mit echtem Content befüllen
- [ ] Projekte-Seite mit echten Referenzprojekten befüllen
- [ ] Kontaktseite: echtes Impressum & Datenschutzerklärung
- [ ] Favicon und App-Icons
- [ ] Cookie-Banner (DSGVO-konform)
- [ ] Analytics (Datenschutz-konform, z.B. Plausible)
