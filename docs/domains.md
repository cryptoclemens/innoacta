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

Die Adressen `hello@` und `datenschutz@` laufen weiterhin über `vencly.com`.
Sie sind in `src/lib/brand.ts` gekapselt und tragen dort ein
`TODO(DNS-Switch)`; der Wechsel ist eine Zeile, sobald die Postfächer unter
innovation.today stehen.
