# Changelog

## 2026-09-09 — Rebranding: vencly → innovation.today

Der Markenauftritt heißt jetzt **innovation.today**. Rechtsträgerin bleibt
unverändert die **Vencly GmbH** — Impressum, Datenschutzerklärung, Anschrift,
Handelsregistereintrag und Geschäftsführung sind inhaltlich nicht angetastet
worden. Ergänzt wurde dort lediglich der Hinweis „innovation.today ist ein
Angebot der Vencly GmbH."

### Marke
- 208 Textstellen auf innovation.today umgestellt (durchgängig klein, mit Punkt)
- Neue Wortmarke in Navigation, Fußbereich, Social-Preview und Druckansicht
- Favicon-Set in 16/32/180/192/512 px sowie `favicon.ico`, dazu Manifest-Icons

### Schrift
- **Nunito** ist die einzige Schrift der Website; **Fraunces** wurde vollständig
  entfernt (samt der 22 `font-display`-Klassen im Markup)
- WOFF2 neu aus der gelieferten Variable-TTF erzeugt: Latin + Latin-Extended
  statt bisher nur Basic Latin — 442 statt 230 Zeichen, wichtig für FR und ES
- Self-gehostet per `@font-face` mit `unicode-range`, Preload im `<head>`,
  kein Google-Fonts-Aufruf im Client

### Farben
- Sechs Markentoken als CSS-Variablen und Tailwind-Farben (`brand-*`);
  692 bisherige `vencly-*`-Klassen darauf umgestellt
- Altfarben entfernt: warmes Beige, Amber, Dunkelgrün, Orange-Verlauf
- Alle Text- und Flächenpaare erfüllen WCAG AA (knappster Wert 4,91:1)

### Technik
- `src/lib/brand.ts` ist die einzige Quelle für Markenname, Rechtsträgerin,
  Domain und Kontaktadressen. Der Domainwechsel ist damit eine Zeile; alle
  betroffenen Stellen tragen `TODO(DNS-Switch)`
- JSON-LD: `name` = innovation.today, `legalName` = Vencly GmbH (19 Objekte)
- `public/_redirects.template` als deaktivierte 301-Vorlage für den späteren
  Umzug von vencly.com
- Unverändert: LocalStorage-Schlüssel, Cookie-Namen, Analytics-ID sowie der
  Cloudflare-Projektname `vencly` (Deployment-Identität)

### Übergangsphase
- Einmaliges Hinweis-Modal und die Seite `/rebranding` mit FAQ. Beides ist
  befristet bis **2026-12-09** und rückstandslos entfernbar

### Domain-Umstellung (09.09.2026, live)
- **`www.innovation.today` ist die ausliefernde Domain.** `vencly.com`,
  `www.vencly.com` und `innovation.today` leiten pfaderhaltend per 301 dorthin
- Umgesetzt über Cloudflare Page Rules mit exakten Mustern — die 18 Subdomains
  unter vencly.com (augur, geotherm, autotodo, gitlab, traefik …) laufen
  unverändert weiter
- Details in `docs/domains.md`

### Nebenbefund behoben
- `src/app/robots.ts` überschrieb `public/robots.txt`, wodurch die
  AI-Crawler-Freigaben (GPTBot, ClaudeBot, PerplexityBot u. a.) **nie**
  ausgeliefert wurden. Die Regeln liegen jetzt in `robots.ts`

### Rückweg
Der Stand vor dem Rebranding ist gesichert und jederzeit wiederherstellbar:

```bash
git reset --hard pre-rebrand-innovation-today
```
