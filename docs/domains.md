# Domains und Weiterleitungen

**Stand: 09.09.2026.** Ausliefernde Domain ist **`www.innovation.today`**.

## Aufbau

Alle Domains zeigen auf dasselbe Cloudflare-Pages-Projekt **`vencly`**
(Production-Branch `main`). Der Projektname stammt aus der Zeit vor dem
Rebranding und bleibt bewusst unverändert — er ist die Deployment-Identität;
ein neuer Name würde ein separates Projekt mit eigener `pages.dev`-Adresse
erzeugen und den Deploy abreißen.

| Adresse | Verhalten |
|---|---|
| `www.innovation.today` | **liefert aus** — Custom Domain, CNAME auf `vencly.pages.dev` |
| `innovation.today` | 301 auf `www.innovation.today`, pfaderhaltend |
| `www.vencly.com` | 301 auf `www.innovation.today`, pfaderhaltend |
| `vencly.com` | 301 auf `www.innovation.today`, pfaderhaltend |

Die 18 Subdomains unter `vencly.com` (augur, geotherm, autotodo, gitlab,
traefik, supabase …) sind **nicht** betroffen und laufen unverändert weiter.

## Umsetzung der Weiterleitungen

Über **Cloudflare Page Rules**, nicht über eine `_redirects`-Datei:
Cloudflare Pages wertet in `_redirects` nur Pfade aus, kein Host-Matching.
Eine Regel wie `https://vencly.com/* …` bliebe dort wirkungslos — und da alle
Domains dasselbe Projekt bedienen, hätte eine pfadbasierte Regel die neue
Domain auf sich selbst umgeleitet.

| Zone | Muster | Ziel |
|---|---|---|
| innovation.today | `innovation.today/*` | `https://www.innovation.today/$1` |
| vencly.com | `vencly.com/*` | `https://www.innovation.today/$1` |
| vencly.com | `www.vencly.com/*` | `https://www.innovation.today/$1` |

**Wichtig:** Muster immer exakt schreiben. Ein `*vencly.com/*` würde alle 18
Subdomains mitreißen und mehrere Produktionsdienste lahmlegen. Bei genau einer
Wildcard im Muster ist der Platzhalter `$1`, bei zweien `$2`.

## Bekannte Eigenheiten

- Auf der Zone `vencly.com` existiert zusätzlich ein **Single Redirect**
  (`vencly.com` → `www.vencly.com`), der mit dem hinterlegten API-Token weder
  les- noch änderbar ist. Er ist unschädlich: Die Page Rules greifen für beide
  Schreibweisen.
- `innovation.today` ist auch als Custom Domain im Pages-Projekt eingetragen
  und bleibt dauerhaft `pending`, weil der DNS-Eintrag auf die Dummy-IP
  `192.0.2.1` zeigt. Das ist beabsichtigt — die Page Rule greift vorher.
- Die Projektübersicht der Pages-API (`/pages/projects/vencly`) liefert im Feld
  `domains` eine unvollständige Liste. Verlässlich ist nur
  `/pages/projects/vencly/domains`.

## E-Mail

Postfächer laufen über **Microsoft 365** (Tenant `prototypebiz`), Newsletter und
Transaktionsmails über **Brevo**. Adressen: `hello@innovation.today` und
`datenschutz@innovation.today`, gekapselt in `src/lib/brand.ts`.

### Authentifizierung (Stand 09.09.2026, vollständig)

| Mechanismus | Wert |
|---|---|
| MX | `innovation-today.mail.protection.outlook.com` |
| SPF | `v=spf1 include:spf.protection.outlook.com include:spf.brevo.com -all` |
| DMARC | `v=DMARC1; p=none; pct=100; rua=mailto:dmarc@huetec.net,mailto:rua@dmarc.brevo.com; ruf=mailto:dmarc@huetec.net` |
| DKIM Microsoft | `selector1`/`selector2._domainkey` → `selector{1,2}-innovation-today._domainkey.prototypebiz.e-v1.dkim.mail.microsoft` |
| DKIM Brevo | `brevo1`/`brevo2._domainkey` → `b{1,2}.innovation-today.dkim.brevo.com` |

### Vier Fallstricke

**1. `-all` ist ein Hardfail.** Jeder neue Dienst, der in unserem Namen Mails
verschickt — Newsletter-Tool, CRM, Ticketsystem, Bewerbungsplattform — muss
**vor der ersten Mail** in den SPF. Sonst verschwinden seine Nachrichten
wortlos, ohne Bounce beim Absender. Aktuell 2 von maximal 10 erlaubten
DNS-Lookups belegt.

**2. Nur ein DMARC-Record je Domain.** Mehrere machen DMARC nach RFC 7489
komplett ungültig — ohne Fehlermeldung. Weitere Berichtsempfänger gehören
kommasepariert in dasselbe `rua=`, niemals in einen zweiten TXT-Eintrag.

**3. DMARC-Berichte an fremde Domains brauchen dort eine Freigabe.** Die
Empfängerdomain muss `<unsere-domain>._report._dmarc.<ihre-domain>` mit dem
Inhalt `"v=DMARC1;"` anlegen. Brevo hat das getan, **huetec.net bislang nicht**
— dorthin werden aktuell keine Berichte zugestellt, obwohl die Adresse im
Record steht.

**4. DKIM-CNAMEs müssen bei Cloudflare auf „DNS only" stehen.** Die orange
Wolke überschreibt CNAME-Ziele und bricht damit die Signaturkette.

### Microsoft-DKIM neu einrichten

Die CNAME-Werte **nicht raten**: Microsoft nutzt für neu angelegte Domains das
Format `<tenant>.e-v1.dkim.mail.microsoft` (TLD `.microsoft`), für ältere
dagegen `<tenant>.onmicrosoft.com` — bei `vencly.com` steht noch die alte Form.
Die exakten Werte nennt das Defender-Portal im Fehlertext des ersten
Aktivierungsversuchs: `security.microsoft.com` → Policies & Rules → Threat
Policies → Email Authentication Settings → DKIM.

### Prüfen

Testmail an eine Gmail-Adresse senden, dort „Original anzeigen". Erwartet:
`SPF: PASS`, `DKIM: PASS with domain innovation.today`, `DMARC: PASS`.
