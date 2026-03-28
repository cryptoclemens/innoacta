# Learnings – Vencly Website Projekt

Gesammelte technische und inhaltliche Erkenntnisse aus dem Aufbau dieser Website.

---

## Cloudflare Pages & Next.js Static Export

- `output: 'export'` erfordert `images: { unoptimized: true }` — `next/image` Optimierung läuft nur serverseitig
- `trailingSlash: true` ist Pflicht für korrektes Routing auf Cloudflare Pages
- Kein `getServerSideProps`, keine API Routes, kein Node.js-Server
- `next/font/local` funktioniert problemlos mit Static Export — Fonts werden build-time eingebettet

## CI/CD: Logo-Download in GitHub Actions

- Wikimedia-SVGs blockieren Requests ohne `User-Agent` → `--user-agent "VenclyBuild/1.0 ..."` erforderlich
- Placeholder-Dateien im Repo müssen entfernt werden wenn das Asset in CI heruntergeladen wird (sonst schlägt die SVG-Validierung fehl)
- SVG-Validierung per `grep -qE '<svg|<?xml'` fängt fehlerhafte Downloads (HTML-Fehlerseiten) ab
- `continue-on-error: true` beim Cloudflare Pages Project Create verhindert Fehler wenn Projekt bereits existiert

## Git / Branch-Workflow

- Lokaler Proxy (`origin`) erlaubt keinen Push → `direct` Remote (echtes GitHub) als Pushziel
- `git branch --set-upstream-to=direct/main main` verhindert falsch-positive "unpushed commits"-Meldungen
- Beim Merge von divergierten Branches: Datei-Konflikte gezielt auflösen statt Force-Push

## Dark Mode

- `next-themes` mit `darkMode: 'class'` in Tailwind — `suppressHydrationWarning` auf `<html>` ist Pflicht
- SVG-Logos mit dunklen Elementen: `dark:invert` als einfachste Lösung für helle Darstellung auf dunklem Hintergrund
- Komponenten die Theme-State lesen müssen `mounted`-Guard verwenden (vermeidet Hydration-Mismatch)

## Typografie

- Variable Fonts (`.woff2`) via `next/font/local` sind die beste Self-Hosting-Lösung
- Fontshare Download-API: `https://api.fontshare.com/v2/fonts/download/{font-name}` liefert ZIP mit WEB-Fonts
- Serif (Zodiak) + Sans-serif (Satoshi) Pairing: Serif nur für H1/H2, Sans für alles andere — klar und exklusiv
- Tailwind `fontFamily.display` als eigenes Token für `font-display` Utility-Klasse

## i18n ohne Bibliothek

- Statisches Objekt in `i18n.ts` mit `Translations`-Typ (abgeleitet vom `de`-Objekt via `typeof de`)
- `LanguageContext` + `localStorage` für Persistenz — kein Server nötig
- TypeScript erzwingt Vollständigkeit aller Übersetzungen durch den abgeleiteten Typ

## Design

- Navy-Blue (`#2563EB` / `#3B82F6`) als dominante Akzentfarbe wirkt autoritärer als Teal für B2B-Kontext
- Enterprise Gateway Muster: Grid-Hintergrund + Radial-Glow + Stats-Strip erhöhen wahrgenommene Professionalität
- Hero H1 `max-w-3xl` verhindert ungünstige Zeilenumbrüche bei langen deutschen Titeln
- Fixed Navbar (h-16 = 64px) → Hero-Content braucht `pt-20 md:pt-24` damit Eyebrow-Label nicht überlappt
