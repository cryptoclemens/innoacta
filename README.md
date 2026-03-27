# Vencly Website

Statische Next.js 14 Marketing-Website für Vencly, deployed auf Cloudflare Pages.

## Lokales Setup

```bash
npm install
npm run dev
```

Die App läuft dann auf http://localhost:3000

## Build

```bash
npm run build
```

Erzeugt den statischen Export im `/out` Ordner.

## Deployment (Cloudflare Pages)

### 1. Cloudflare API Token erstellen

1. Cloudflare Dashboard → My Profile → API Tokens
2. „Create Token" → Template: „Cloudflare Pages - Edit"
3. Token kopieren

### 2. GitHub Secret hinterlegen

1. GitHub Repo → Settings → Secrets and variables → Actions
2. „New repository secret" mit Name `CLOUDFLARE_API_TOKEN` und dem Token als Wert

### 3. Cloudflare Pages Projekt anlegen

1. Cloudflare Dashboard → Pages → „Create a project"
2. Projektname: `vencly`
3. Build command: `npm run build`
4. Build output directory: `out`

### 4. Automatisches Deployment

Nach jedem Push auf `main` wird die Website automatisch via GitHub Actions deployed.

## DNS-Umzug

1. DNS-Provider öffnen
2. CNAME-Eintrag setzen:
   - Name: `@` (oder `www`)
   - Ziel: `vencly.pages.dev`
3. In Cloudflare Pages: Settings → Custom Domains → Custom Domain hinzufügen

## Projektstruktur

```
/
├── public/
│   └── factsheet.pdf       ← Factsheet PDF hier ablegen
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← Root Layout + SEO Metadata
│   │   ├── page.tsx        ← Startseite
│   │   ├── globals.css
│   │   ├── projects/
│   │   │   └── page.tsx    ← Referenzprojekte
│   │   └── contact/
│   │       └── page.tsx    ← Kontakt + Impressum
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       └── sections/
│           ├── Hero.tsx
│           ├── FactsheetCTA.tsx
│           ├── ValueProp.tsx
│           ├── Features.tsx
│           ├── WhyUs.tsx
│           ├── LogoBar.tsx
│           └── References.tsx
├── next.config.js
├── tailwind.config.js
├── wrangler.toml
└── package.json
```
