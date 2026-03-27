# CLAUDE.md – Hinweise für KI-Assistenten

## Projektüberblick

Next.js 14 Static-Export-App für die Vencly-Marketing-Website. Deployment auf Cloudflare Pages.

## Wichtige Constraints

- `output: 'export'` in `next.config.js` — **kein** Node.js-Server, kein `getServerSideProps`
- `images: { unoptimized: true }` — kein `next/image` Optimization (Cloudflare Pages kompatibel)
- `trailingSlash: true` — für korrekte Cloudflare Pages Routing
- Keine Google Fonts oder externen Font-Loads (System-Font-Stack)
- Keine Authentifizierung, kein CMS, kein Backend

## Entwicklungsregeln

1. Alle Komponenten in `src/components/` (layout/ oder sections/)
2. Seiten in `src/app/` (App Router)
3. Statische Assets in `public/`
4. TypeScript strict mode — keine `any`-Types
5. Mobile-first responsive (sm: 640px, md: 768px, lg: 1024px)
6. Tailwind CSS für alle Styles — keine inline CSS außer für Animationen

## Build

```bash
npm install
npm run build   # erzeugt /out Ordner
npm run dev     # lokale Entwicklung auf :3000
```

## Farben (Tailwind custom)

- Background: `#0d0d14` (vencly-bg)
- Card: `#161622` (vencly-card)
- Accent Teal: `#14b8a6` (vencly-teal)
- Text Primary: white
- Text Secondary: gray-400

## Bekannte Einschränkungen

- `/public/factsheet.pdf` ist ein Platzhalter — echtes PDF muss manuell ersetzt werden
- Partner-Logos sind SVG-Platzhalter — echte Assets von der Webflow-Seite übernehmen
- WhyUs-Sektion enthält Lorem-ipsum-Platzhalter
