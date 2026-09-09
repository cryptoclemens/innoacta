# CLAUDE.md – Hinweise für KI-Assistenten

## Projektüberblick

Next.js 14 Static-Export-App für die Marketing-Website. Deployment auf Cloudflare Pages.

**Rebranding läuft:** Vencly → **innovation.today**. Die Gesellschaft heißt weiterhin
**Vencly GmbH** (Impressum, Datenschutz, Schema.org `legalName` bleiben unverändert) —
umbenannt wird ausschließlich die Marke bzw. Website. Nach Abschluss leitet `vencly.com`
dauerhaft auf `innovation.today` weiter; `innovation.today` wird die zentrale Homepage.

## ⚠️ Backup: Wiederherstellung des Vencly-Standes

Der vollständige Stand **vor** dem Rebranding ist gesichert und jederzeit
wiederherstellbar (angelegt 2026-09-09, Commit `a59ca06`):

| Ebene | Referenz |
|---|---|
| Git-Tag | `pre-rebrand-innovation-today` (auf GitHub) |
| Git-Branch | `backup/pre-rebrand-innovation-today` (auf GitHub) |
| Server-Archiv | `/root/backups/innoacta/innoacta-pre-rebrand-20260909-2024.tar.gz` |

```bash
# Kompletten Vencly-Stand zurückholen
git reset --hard pre-rebrand-innovation-today

# Nur eine einzelne Datei zurückholen
git checkout pre-rebrand-innovation-today -- pfad/zur/datei.tsx
```

Tag und Branch **nicht löschen oder überschreiben**, solange das Rebranding nicht
final abgenommen ist.

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
