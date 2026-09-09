# Learnings – Website innovation.today

Gesammelte technische und inhaltliche Erkenntnisse aus dem Aufbau dieser Website.

---

## Cloudflare Pages & Next.js Static Export

- `output: 'export'` erfordert `images: { unoptimized: true }` — `next/image` Optimierung läuft nur serverseitig
- `trailingSlash: true` ist Pflicht für korrektes Routing auf Cloudflare Pages
- Kein `getServerSideProps`, keine API Routes, kein Node.js-Server
- `next/font/local` funktioniert mit Static Export, wurde 09/2026 aber durch ein eigenes
  `@font-face` ersetzt, um `unicode-range` steuern zu können

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

---

## Rebranding vencly → innovation.today (09/2026)

Erkenntnisse aus der Umbenennung. Ausführlich im `CHANGELOG.md` und `docs/domains.md`.

### Suchen-und-Ersetzen über eine ganze Codebasis

- **Bezeichner werden mitgetroffen.** `const venclyPath` wurde zu
  `innovation.todayPath` — syntaktisch ungültig. Nur `tsc` hat es gefunden,
  kein Test. Nach jeder mechanischen Ersetzung Typprüfung **und** Build laufen lassen.
- **Schutzmuster schützen zu viel.** Das Muster `vencly-[a-z-]+` sollte
  Tailwind-Klassen bewahren, verschonte aber auch Komposita wie „Vencly-Ansatz"
  und „Vencly-Prozess" — die als Fließtext sehr wohl ersetzt gehörten.
  Aufgefallen erst bei der abschließenden Durchsicht.
- **Ein LocalStorage-Schlüssel sieht aus wie ein Design-Token.** `vencly-locale`
  wurde nur durch Zufall verschont; eine Umbenennung hätte allen Besuchern
  still die Sprachwahl zurückgesetzt. Solche Schlüssel gehören in eine benannte
  Konstante mit Warnkommentar.
- **Externe Bezeichner sind keine Markenstrings.** Der Cal.com-Benutzername im
  Pfad `cal.eu/vencly/gettoknow`, die Outlook-Postfach-ID und der
  Cloudflare-Projektname sind Identifikatoren — Ersetzen bricht die Funktion.

### `.gitignore` mit globalen Mustern

Das Repo schließt `*.png` global aus (Playwright-Screenshots). Brand-Assets und
generierte Favicons landeten dadurch **nicht** im Repo — ohne Fehlermeldung,
erst im Build wäre es aufgefallen. Negationen nicht vergessen:
`!public/brand/png/*.png`.

### Dark Mode nach einem Farbwechsel

Kontraste **rechnen**, nicht schätzen. Zwei Fälle, die im Screenshot sofort
auffielen, aber vorher niemandem:

- Navy-Button auf Nachtblau: **1,14:1** — praktisch unsichtbar
- Teal-Text auf Nachtblau: **2,82:1** — unter WCAG AA

Auf dunklem Grund gehört Mint (10,45:1). Umgekehrt gilt: Eine Komponente, die
in beiden Themes hell bleibt (das Übergangs-Modal), darf **keine**
`dark:`-Klassen tragen — dort war Mint auf Weiß bei 1,48:1 und ein
`dark:invert` machte das Logo weiß auf weiß.

### Layout bricht bei längeren Namen

„innovation.today" ist deutlich breiter als „vencly". In der Chart-Legende mit
festen SVG-Koordinaten überlappten die Einträge. Nach einer Umbenennung alle
Stellen mit fixen Breiten prüfen.

### `robots.ts` schlägt `public/robots.txt`

Beide existierten. Die Route überschreibt die statische Datei im Build — die
28-zeilige Fassung mit den AI-Crawler-Freigaben wurde **nie ausgeliefert**.
Solche Doppelungen fallen nur auf, wenn man das Ergebnis im `out/` prüft statt
die Quelldatei.

### `_redirects` bei Cloudflare Pages kann kein Host-Matching

Anders als bei Netlify werden dort nur Pfade ausgewertet. Eine Regel
`https://alt.de/* → https://neu.de/:splat` bleibt wirkungslos. Zeigen mehrere
Domains auf dasselbe Projekt, hätte eine pfadbasierte Regel die neue Domain
zudem auf sich selbst umgeleitet. Domainweiterleitungen gehören in **Page Rules**.

### Verifizieren, nicht vermuten

Mehrfach zahlte sich aus, das Ergebnis statt der Absicht zu prüfen: Der
DMARC-Freigabe-Record bei huetec.net fehlte tatsächlich, die
Pages-Projektübersicht lieferte eine unvollständige Domainliste, und die
angeblich fehlerhaften DKIM-Einträge lösten längst korrekt auf.
