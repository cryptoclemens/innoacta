# SEO & GEO Guide – Wiederverwendbare Checkliste für Homepage-Projekte

Gesammelte Erkenntnisse aus der Entwicklung einer Next.js Static-Export-Website (DACH-Markt, B2B).
Gültig für Next.js App Router, sinngemäß übertragbar auf andere Frameworks.

---

## 1. Technisches Fundament

### Canonical URLs
- Jede Seite bekommt eine explizite Canonical-URL – auch die Startseite.
- In Next.js über `metadata.alternates.canonical` setzen.
- Bei Static Export: `trailingSlash: true` in `next.config.js` → URLs enden auf `/`, Canonical entsprechend setzen.

```ts
// page.tsx
export const metadata: Metadata = {
  alternates: { canonical: 'https://example.com/seitenname' },
}
```

### hreflang — Wann weglassen
- hreflang nur setzen, wenn für jede Sprache eine **eigene URL** existiert (z. B. `/de/`, `/en/`).
- Wenn Sprachsteuerung client-seitig per JS passiert (alle Sprachen auf derselben URL), **kein hreflang** — Google wertet identische URLs mit unterschiedlichen hreflang-Attributen als Fehler.

### robots.txt & sitemap.xml
- Next.js App Router generiert beide automatisch über `app/robots.ts` und `app/sitemap.ts`.
- Rechtliche Seiten (Impressum, Datenschutz) in der Sitemap belassen, aber mit `robots: { index: true, follow: false }` auf der jeweiligen Page-Ebene markieren.

```ts
export const metadata: Metadata = {
  robots: { index: true, follow: false },
}
```

### OG Image
- Kein SVG als OG Image — Facebook, LinkedIn und WhatsApp rendern SVG nicht zuverlässig.
- In Next.js: `app/opengraph-image.tsx` mit `ImageResponse` erzeugt zur Build-Zeit ein statisches PNG (1200×630).
- Wichtig bei `@vercel/og` / `ImageResponse`:
  - **Kein `rgba()` in `backgroundImage`-CSS** → wirft einen Render-Fehler. Stattdessen Solid-Colors oder separate Overlay-Divs.
  - **Jedes `<div>` braucht `display: 'flex'`** — auch wenn es nur ein Kind hat.
  - Keine externen Fonts laden, es sei denn explizit als Buffer übergeben.

```tsx
// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#0b1a17' }}>
      {/* alle Kind-Elemente ebenfalls display: flex */}
    </div>,
    { ...size }
  )
}
```

### Theme Color
```html
<meta name="theme-color" content="#0f766e" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#0f766e" media="(prefers-color-scheme: dark)" />
```

---

## 2. Metadata-Vorlage pro Seite

```ts
export const metadata: Metadata = {
  title: 'Seitentitel – max. 60 Zeichen',
  description: 'Beschreibung – max. 155 Zeichen, enthält primäres Keyword.',
  alternates: { canonical: 'https://example.com/slug' },
  openGraph: {
    title: 'OG-Titel (darf leicht vom page title abweichen)',
    description: 'OG-Beschreibung',
    type: 'website',          // oder 'article' für Blog-Beiträge
    url: 'https://example.com/slug',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Alt-Text' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '...',
    description: '...',
    images: ['/og-image.png'],
  },
}
```

**Root-Layout zusätzlich:**
```ts
title: { default: 'Firmenname – Claim', template: '%s | Firmenname' }
metadataBase: new URL('https://example.com')
authors: [{ name: 'Firmenname GmbH' }]
```

---

## 3. Strukturierte Daten (Schema.org JSON-LD)

### Grundregel
- JSON-LD als `<script type="application/ld+json">` direkt in der Page-Komponente — nicht im Layout (außer globale Org-Daten).
- Nie dasselbe Schema doppelt auf einer Seite ausgeben.

### Organisation / ProfessionalService (Root-Layout)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Firmenname GmbH",
  "url": "https://example.com",
  "logo": "https://example.com/logo.svg",
  "description": "...",
  "areaServed": ["DE", "AT", "CH"],
  "serviceType": ["Leistung 1", "Leistung 2"]
}
```

### Article (Blog-Beiträge)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titel",
  "description": "...",
  "author": { "@type": "Person", "name": "Name", "url": "https://example.com/ueber-uns" },
  "publisher": { "@type": "Organization", "name": "Firmenname GmbH", "url": "https://example.com" },
  "url": "https://example.com/blog/slug",
  "datePublished": "2025-01-01",
  "dateModified": "2025-06-01",
  "inLanguage": "de"
}
```

**Hinweis:** `dateModified` bei jedem inhaltlichen Update aktualisieren — Google nutzt es für Freshness-Ranking.

### FAQPage (Leistungsseiten)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Frage?",
      "acceptedAnswer": { "@type": "Answer", "text": "Antwort in vollständigen Sätzen." }
    }
  ]
}
```
- Mindestens 3 Fragen, Antworten vollständige Sätze (kein Stichpunkt-Stil).
- Fragen sollen echte Nutzerfragen widerspiegeln (auch: „Wann sinnvoll?", „Wie lange dauert?", „Was kostet?").

### BreadcrumbList (alle Unterseiten)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com" },
    { "@type": "ListItem", "position": 2, "name": "Leistungen", "item": "https://example.com/leistungen" },
    { "@type": "ListItem", "position": 3, "name": "Seitenname", "item": "https://example.com/leistungen/seitenname" }
  ]
}
```

### Person (Über-uns-Seite)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vorname Nachname",
  "jobTitle": "Funktion",
  "worksFor": { "@type": "Organization", "name": "Firmenname GmbH" },
  "url": "https://example.com/ueber-uns",
  "sameAs": ["https://www.linkedin.com/in/..."]
}
```

### Service (Leistungsseiten)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Leistungsname",
  "provider": { "@type": "Organization", "name": "Firmenname GmbH", "url": "https://example.com" },
  "url": "https://example.com/leistungen/slug",
  "areaServed": ["DE", "AT", "CH"],
  "serviceType": "Leistungstyp"
}
```

---

## 4. GEO – Generative Engine Optimization

GEO = Sichtbarkeit in KI-generierten Antworten (ChatGPT, Perplexity, Google AI Overviews, Claude).

### Prinzipien
- **Zitierbare Einheiten schaffen**: Jeder Abschnitt sollte eine klar abgegrenzte, für sich stehende Aussage enthalten, die eine KI direkt zitieren kann.
- **Faktizität vor Rhetorik**: Zahlen, Zeitrahmen, Ortsangaben, Namen — KI-Systeme bevorzugen belegbare Inhalte gegenüber Marketingsprache.
- **Autoritätssignale**: Autorenname mit verlinktem Profil, `datePublished`/`dateModified`, Publisher-Schema. KI bewertet EEAT (Experience, Expertise, Authoritativeness, Trustworthiness).
- **FAQ-Schema**: Eine der wirksamsten Strukturen für AI Overviews — Fragen und Antworten werden direkt in generative Antworten eingebettet.
- **Blockquotes / Pull Quotes**: Klar abgesetzte Zitate oder Kernthesen erhöhen die Wahrscheinlichkeit, dass eine KI genau diese Formulierung aufgreift.

### Strukturelle GEO-Empfehlungen
- H2-Überschriften als vollständige Fragen formulieren: „Was ist X?" statt „X"
- Einleitungssatz jedes Abschnitts fasst den Kerninhalt zusammen (Inverted-Pyramid-Prinzip)
- Interne Links zwischen thematisch verwandten Seiten — KI-Crawler folgen dem Linknetz
- Keine Informationen hinter JavaScript-Lazy-Loading verstecken — statisches HTML bevorzugen

### Was KI-Suchmaschinen besonders gut indexieren
| Element | Warum |
|---|---|
| `FAQPage` Schema | Direkte Q&A-Extraktion |
| `Article` + `dateModified` | Freshness-Signal |
| `Person` + `sameAs` LinkedIn | Expertise-Verifikation |
| Klare H2/H3-Hierarchie | Semantische Struktur |
| Vollständige Sätze in Listen | Besser zitierfähig als Stichpunkte |
| Statisches HTML (kein SSR-only) | Vollständige Indexierung |

---

## 5. Content-Struktur & On-Page SEO

### Seitenarchitektur
- **1 primäres Keyword pro Seite** — in Title, H1, erster Paragraph, mindestens einer H2.
- Sekundäre Keywords in H2s und natürlich im Fließtext verteilen.
- Title-Tag: primäres Keyword möglichst vorne, max. 60 Zeichen.
- Meta-Description: Handlungsaufforderung enthalten, max. 155 Zeichen.

### Blog-Artikel-Checkliste
- [ ] `Article` JSON-LD mit `author.url` → interne Über-uns-Seite (nicht externe Domain)
- [ ] `BreadcrumbList` JSON-LD
- [ ] `FAQPage` JSON-LD wenn Artikel Fragen beantwortet
- [ ] `datePublished` und `dateModified` korrekt gesetzt
- [ ] Autor-Bio-Block am Ende mit internem Link zum Autorenprofil
- [ ] 2–4 Verlinkungen zu verwandten Artikeln
- [ ] Primäres Keyword im H1, in mind. einer H2 und im ersten Satz

### Interne Verlinkung
- Jede Leistungsseite verlinkt zu 2+ thematisch verwandten Blog-Artikeln.
- Blog-Artikel verlinken zu der passenden Leistungsseite (Cross-linking).
- Über-uns-Seite als Autorenprofil für alle Blog-Artikel verwenden — baut Autorität für die Person auf.

---

## 6. Google Analytics 4 + Consent Mode v2 (DSGVO-konform)

### Reihenfolge beachten
Das Consent-Default-Script **muss im `<head>` stehen, bevor das GA-Script lädt**.

```tsx
// layout.tsx — im <head>
<script dangerouslySetInnerHTML={{ __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
`.trim() }} />
```

```tsx
// layout.tsx — im <body>, nach Providers
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
<Script id="ga-config" strategy="afterInteractive">
  {`gtag('config', 'G-XXXXXXXXXX', { send_page_view: true });`}
</Script>
```

### Cookie-Banner-Logik
```ts
// Consent updaten nach Nutzerentscheidung
function updateConsent(granted: boolean) {
  const dl = window as unknown as { gtag?: (...a: unknown[]) => void }
  if (typeof dl.gtag === 'function') {
    dl.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
    })
    if (granted) dl.gtag('config', 'G-XXXXXXXXXX')
  }
}
```

- Entscheidung in `localStorage` persistieren (`cookie-consent: 'accepted' | 'rejected'`).
- Beim nächsten Seitenaufruf prüfen: wenn `accepted`, Consent direkt updaten ohne Banner.
- **Keine Cookies setzen** bevor Consent erteilt — GA4 in Consent Mode v2 hält sich daran.

---

## 7. Rechtliche Pflichtseiten (DACH / Deutschland)

### Impressum (§ 5 TMG)
Pflichtangaben:
- Vollständiger Firmenname + Rechtsform
- Ladungsfähige Anschrift (kein Postfach)
- Vertretungsberechtigte Person (Geschäftsführer/Vorstand)
- E-Mail-Adresse (Telefon empfohlen, nicht zwingend)
- Handelsregisternummer + Registergericht
- Umsatzsteuer-ID (§ 27a UStG)
- EU-Streitschlichtungshinweis (Pflicht nach ODR-VO): Link zu https://ec.europa.eu/consumers/odr + Angabe ob bereit zur Teilnahme

```ts
// Kein Follow für Suchmaschinen nötig
robots: { index: true, follow: false }
```

### Datenschutzerklärung (DSGVO)
Pflichtabschnitte für eine typische B2B-Website:

| Abschnitt | Inhalt |
|---|---|
| Verantwortlicher | Name, Adresse, E-Mail; DPO-Hinweis (oder: kein DPO nach Art. 37 DSGVO) |
| Hosting | Anbieter, Zweck, Rechtsgrundlage (Art. 6 I lit. f), Drittlandtransfer + Zertifizierung (DPF) |
| Terminbuchung | Cal.com / MS Bookings / Calendly: Daten, Zweck, Rechtsgrundlage (Art. 6 I lit. b), Drittlandtransfer |
| E-Mail-Kontakt | Speicherdauer: 3 Jahre (Verjährung) / 10 Jahre (§ 147 AO bei steuerlicher Relevanz) |
| Cookies / localStorage | Theme-Präferenz o. ä. explizit nennen; klarstellen was kein Tracking ist |
| Analytics | GA4: Zweck, IP-Masking, Art. 6 I lit. a (Einwilligung), EU-US DPF, 14 Monate Retention, Opt-out-Add-on |
| Art. 22 DSGVO | Ausdrücklich: keine automatisierte Entscheidungsfindung |
| Betroffenenrechte | Art. 15–21 einzeln auflisten, Art. 21 Widerspruchsrecht hervorheben |
| Beschwerderecht | Zuständige Aufsichtsbehörde nennen (Bayern: BayLDA; BW: LfDI; NRW: LDI etc.) |

**Häufige Fehler:**
- Alte österreichische Referenzen (TKG 2003) auf deutschen Seiten → entfernen, gilt nicht in DE
- Keine Speicherdauer → Pflicht nach Art. 13 Abs. 2 lit. a DSGVO
- Cal.com / MS Bookings vergessen → beides US-Anbieter, Drittlandtransfer muss dokumentiert werden
- „Kein DPO bestellt" nicht erwähnen → sollte explizit stehen (Art. 37 DSGVO)

---

## 8. Next.js-spezifische SEO-Hinweise

| Thema | Empfehlung |
|---|---|
| `output: 'export'` | Kein `getServerSideProps`, kein ISR — alles statisch. Sitemap und robots.ts funktionieren trotzdem. |
| Fonts | `next/font/google` lädt Fonts zur Build-Zeit herunter — keine externen Font-Requests im Browser, kein CLS. |
| `next/image` auf Static Export | `images: { unoptimized: true }` in `next.config.js` setzen, sonst Build-Fehler. |
| `trailingSlash: true` | Für Cloudflare Pages und viele andere Static-Hosts empfohlen — verhindert doppelte Canonicals. |
| Metadata-Vererbung | `template: '%s | Firmenname'` im Root-Layout erspart doppeltes Suffix auf jeder Page. |
| `next/script strategy` | `beforeInteractive` für Consent-Defaults, `afterInteractive` für Analytics-Skripte. |

---

## 9. Schnell-Checkliste vor Go-Live

### Technisch
- [ ] Alle Seiten haben Canonical-URL
- [ ] OG Image ist PNG (nicht SVG), 1200×630
- [ ] Title < 60 Zeichen, Description < 155 Zeichen auf allen Seiten
- [ ] robots.txt erreichbar unter `/robots.txt`
- [ ] sitemap.xml erreichbar unter `/sitemap.xml`, alle Seiten enthalten
- [ ] Keine doppelten H1s
- [ ] hreflang nur wenn separate URLs pro Sprache vorhanden

### Strukturierte Daten
- [ ] Organisation/ProfessionalService im Root-Layout
- [ ] Article-Schema auf allen Blog-Artikeln
- [ ] FAQPage auf mind. den wichtigsten Leistungsseiten
- [ ] BreadcrumbList auf allen Unterseiten
- [ ] Validierung: https://validator.schema.org

### Analytics & Consent
- [ ] GA4 Consent Mode v2: Default `denied` im `<head>` vor GA-Script
- [ ] Cookie-Banner mit Accept/Reject
- [ ] Consent-Update-Logik korrekt verdrahtet
- [ ] localStorage-Persistenz getestet (Banner erscheint nicht wieder nach Accept)

### Rechtliches (DACH)
- [ ] Impressum vollständig (TMG §5): Handelsregister, USt-ID, EU-Streitschlichtung
- [ ] Datenschutz: alle genutzten Drittdienste dokumentiert (Hosting, Analytics, Buchung, E-Mail)
- [ ] Datenschutz: Speicherdauern für alle Verarbeitungen angegeben
- [ ] Datenschutz: Art. 22 DSGVO explizit adressiert
- [ ] Footer-Links zu Impressum und Datenschutz auf jeder Seite sichtbar

### GEO
- [ ] H2-Überschriften auf Leistungs- und Blog-Seiten als vollständige Fragen formuliert
- [ ] FAQ-Schema enthält echte Nutzerfragen (nicht nur Marketing-Fragen)
- [ ] Autor-Schema mit `url` → internes Profil
- [ ] `datePublished` und `dateModified` korrekt gesetzt
- [ ] Kein wichtiger Content hinter JS-Walls versteckt
