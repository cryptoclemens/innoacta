# Tasks – Meilenstein-Planung & Tracking

## Status-Legende

- ✅ Erledigt
- 🔄 In Arbeit
- ⬜ Offen
- ❌ Blockiert

---

## Meilenstein 1: Repository & Projekt-Setup ✅

- [x] GitHub Repo erstellen (`cryptoclemens/innoacta`)
- [x] Branch anlegen und nach `main` gemergt
- [x] `Brief.md`, `CLAUDE.md`, `Tasks.md` erstellt
- [x] `package.json` mit allen Dependencies
- [x] `next.config.js` (Static Export, trailingSlash, unoptimized images)
- [x] `tailwind.config.js` mit custom Vencly-Farben
- [x] `tsconfig.json`, `wrangler.toml`
- [x] `README.md`

---

## Meilenstein 2: Layout & Routing ✅

- [x] Root Layout, Metadata, SEO-Tags
- [x] Startseite `/`
- [x] Projektseite `/projects`
- [x] Kontaktseite `/contact` inkl. echtem Impressum (HRB 290524)
- [x] Navbar (sticky, blur, mobile Hamburger-Menü)
- [x] Footer

---

## Meilenstein 3: Sektionen / Komponenten ✅

- [x] Hero mit Framer-Motion Rotating-Text (Höhe gefixt)
- [x] FactsheetCTA, ValueProp, Features, WhyUs
- [x] LogoBar (Partner-Platzhalter)
- [x] References mit echten Logos (SWM, MVG, Toll Collect, RWE)

---

## Meilenstein 4: Assets & SEO 🔄

- [x] Referenz-Logos via GitHub Actions CI heruntergeladen (SWM URL fix in Arbeit)
- [ ] Echtes Factsheet-PDF unter `/public/factsheet.pdf` ablegen ← **du**
- [ ] Sitemap.xml generieren ← Claude
- [ ] robots.txt konfigurieren ← Claude
- [ ] `og:image` Social-Preview-Grafik ← Claude
- [ ] Favicon / App-Icons ← Claude

---

## Meilenstein 5: Deployment & DNS 🔄

- [x] Cloudflare Pages Projekt `vencly` angelegt
- [x] `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` als GitHub Secrets
- [x] GitHub Actions Workflow funktioniert (Deploy läuft durch)
- [ ] DNS: `vencly.com` → Cloudflare verbinden ← **du** (gerade in Arbeit)
- [ ] Custom Domain in Cloudflare Pages aktivieren ← **du**
- [ ] Lighthouse Audit (Ziel: Performance > 90) ← Claude danach

---

## Meilenstein 6: Content-Feinschliff ⬜

- [ ] WhyUs-Sektion mit echtem Content befüllen ← Texte von dir
- [ ] Projekte-Seite mit echten Inhalten (Innovation Republic, Geopotatlas, AutoToDo)
- [ ] Vollständige DSGVO-Datenschutzerklärung ← rechtliche Prüfung
- [ ] Cookie-Banner (DSGVO-konform)
- [ ] Analytics (datenschutzkonform, z.B. Plausible)
