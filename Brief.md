# Projektbeschreibung – Vencly Website (Next.js)

## Ziel

Dieses Repository enthält den Quellcode der **Vencly-Marketing-Website**, aufgebaut als statische Next.js 14-App und gehostet auf **Cloudflare Pages** unter `vencly.com`. Sie löst die frühere Webflow-Seite ab und ist vollständig SEO-optimiert.

## Firma & Positionierung

Vencly ist spezialisiert auf **Strategische Geschäftsfeldentwicklung** für Konzerne und den Mittelstand:
- Neue Märkte identifizieren, bewerten und operativ erschließen
- Venture Clienting & Startup-Integration
- Strategische Begleitung & Umsetzung
- Fokus auf regulierte Branchen: Energie, Infrastruktur, öffentliche Hand

Kernbotschaft: _"Kein Konzept-Karussell. Kein Innovations-Theater. Sondern ein Partner, der selbst Unternehmer ist."_

## Technischer Stack

| Technologie | Zweck |
|---|---|
| Next.js 14 (App Router) | Framework, Static Export (`output: 'export'`) |
| Tailwind CSS | Styling, Custom Color Tokens |
| Lucide React | Icons |
| next-themes | Dark/Light/System Mode |
| next/font/local | Self-hosted Fonts (Satoshi + Zodiak) |
| Cloudflare Pages | Hosting |
| GitHub Actions | CI/CD (Build + Logo-Download + Deploy) |

## Design-System

- **Primärfarbe:** Navy Blue `#2563EB` / `#3B82F6`
- **Hintergrund Light:** `#F8F7F4` / Dark: `#0F172A`
- **Body-Font:** Satoshi Variable (self-hosted, Fontshare)
- **Display-Font (H1/H2):** Zodiak Variable (self-hosted, Fontshare)
- **Muster:** Enterprise Gateway (Trust & Authority)

## Seiten & Sektionen

- `/` — Hero, ValueProp (5 Leistungsfelder), Features, WhyUs, References, FactsheetCTA, Footer
- `/projects` — Referenzprojekte
- `/contact` — Kontakt, Impressum, Datenschutz

## Mehrsprachigkeit

Statisches i18n via `LanguageContext` (localStorage): **DE / EN / FR / ES**
Inhalte in `/src/lib/i18n.ts`

## Wichtige Links

- Live: https://vencly.com
- Demo-Booking: https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard
- Login: https://vencly.app/
- Factsheet: `/public/factsheet.pdf` (Platzhalter — echtes PDF ausstehend)

## Deployment

Push auf `main` → GitHub Actions → Cloudflare Pages (automatisch).
CI lädt Partner-Logos herunter (Wikimedia, S3) und validiert sie vor dem Build.
`NEXT_PUBLIC_BUILD_VERSION` = Git SHA, sichtbar als Mini-Badge unten rechts.
