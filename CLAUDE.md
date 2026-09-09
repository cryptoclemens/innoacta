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
- Keine Google Fonts oder externen Font-Loads. **Nunito** ist die einzige
  Schrift, self-gehostet per `@font-face` in `globals.css` (WOFF2 unter
  `public/fonts/`), Preload im `<head>`. Keine zweite Schrift ergänzen.
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

## Farben (Markenpalette innovation.today)

Verbindliche Werte aus `public/brand/README.md`. Als Tailwind-Token `brand-*`
und als CSS-Variablen in `globals.css`. **Keine weiteren Farben ergänzen.**

| Token | Wert | Einsatz |
|---|---|---|
| `brand-navy` | `#14304A` | Primärtext, Headlines, Buttons |
| `brand-teal` | `#0F766E` | Akzent, Links, CTAs, „today" |
| `brand-mint` | `#5EEAD4` | Akzent auf dunklem Grund |
| `brand-night` | `#0F2540` | dunkle Flächen, Footer, Dark-Mode-Grund |
| `brand-sky` | `#EAF4FC` | helle Akzentflächen, Seitengrund |
| `brand-ink` | `#1E293B` | Fließtext |

Abgeleitet für Flächen und Rahmen: `brand-teal-dark`, `brand-card`, `brand-border`.

**Dark Mode:** Teal auf Nachtblau erreicht nur 2,8:1 und Navy sogar 1,1:1 —
auf dunklem Grund gehört deshalb immer `dark:*-brand-mint` bzw. eine
Mint-Fläche mit Navy-Text. Kontraste vor dem Commit nachrechnen (WCAG AA, 4,5:1).

## Typografie

- Headlines h1–h3: 800, h4–h6 und Buttons/Navigation: 700, Fließtext: 400
- Laufweite der Headlines −0.015em, Zeilenhöhen 1.15 (Headlines) / 1.6 (Text)
- Wortmarke im Text: `innovation.` in Navy, `today` in Teal, Gewicht 700

## Marke und Domains

- Markenname **immer klein mit Punkt**: `innovation.today` — nie „Innovation Today"
- Rechtsträgerin bleibt die **Vencly GmbH**; Impressum und Datenschutz nicht
  inhaltlich ändern
- Ausliefernde Domain ist `www.innovation.today`, siehe `docs/domains.md`
- Nicht umbenennen: Cloudflare-Projekt `vencly`, LocalStorage-Schlüssel
  `vencly-locale`, die Outlook-Booking-ID und `vencly.app` als Login-Ziel

## Bekannte Einschränkungen

- `/public/factsheet.pdf` ist ein Platzhalter — echtes PDF muss manuell ersetzt werden
- Partner-Logos sind SVG-Platzhalter — echte Assets von der Webflow-Seite übernehmen
- WhyUs-Sektion enthält Lorem-ipsum-Platzhalter
