# Projektbeschreibung – Vencly Website (Next.js)

## Ziel

Dieses Repository enthält den Quellcode der neuen **Vencly-Marketing-Website**, die als statische Next.js 14-App aufgebaut und auf **Cloudflare Pages** gehostet wird. Sie löst die bestehende Webflow-Seite (https://vencly.webflow.io/) ab und ist vollständig SEO-optimiert.

## Firma

Vencly ist spezialisiert auf den Aufbau von KI-Agenten-Plattformen für mittelständische Unternehmen, mit Fokus auf:
- Venture Clienting & Ausschreibungsautomatisierung
- Smartes Projekt-Management
- B2B-Prototypen-Entwicklung
- Digitale Transformation

## Technischer Stack

| Technologie | Zweck |
|---|---|
| Next.js 14 (App Router) | Framework, Static Export |
| Tailwind CSS | Styling |
| Framer Motion | Hero-Animationen |
| Lucide React | Icons |
| Cloudflare Pages | Hosting |

## Seiten

- `/` — Startseite (Hero, ValueProp, Features, LogoBar, References)
- `/projects` — Referenzprojekte (Innovation Republic, Geopotatlas, AutoToDo)
- `/contact` — Kontakt, Impressum, Datenschutz

## Wichtige Links

- Demo-Booking: https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard
- Login: https://vencly.app/
- Factsheet: `/public/factsheet.pdf`

## Deployment

Automatisches Deployment via GitHub Actions auf Cloudflare Pages bei jedem Push auf `main`.
Voraussetzung: `CLOUDFLARE_API_TOKEN` als GitHub Secret hinterlegen.
