'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ShieldCheck, Lock, Users, Database, FileSpreadsheet, Network, Filter, KeyRound } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'
import { SUPPORT_EMAIL } from '@/lib/brand'
import { usePageTranslation } from '@/lib/hooks/usePageTranslation'

// Markenfrage offen (siehe PR): Wessen Produkt Projekt Woda ist, entscheidet
// über author im JSON-LD und die Byline (i18n-pages → woda.byline). Bis zur
// Entscheidung: innovation.today als Entwickler.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Projekt Woda',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web (offline im Browser)',
  url: 'https://www.innovation.today/woda',
  description:
    'Brunnenmanagement für Wasserwerke: Ampel je Brunnen und Pumpe, offline aus vorhandenen Tabellen, Auswertung durch Ingenieure über verschlüsselte Dateien. Betriebsdaten verlassen das Haus nicht.',
  author: { '@type': 'Organization', name: 'innovation.today', legalName: 'Vencly GmbH', url: 'https://www.innovation.today' },
  publisher: { '@type': 'Organization', name: 'innovation.today', legalName: 'Vencly GmbH', url: 'https://www.innovation.today' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.innovation.today' },
    { '@type': 'ListItem', position: 2, name: 'Projekte', item: 'https://www.innovation.today/projects' },
    { '@type': 'ListItem', position: 3, name: 'Projekt Woda', item: 'https://www.innovation.today/woda' },
  ],
}

const trustIcons = [ShieldCheck, Lock, Users, Database]
const einordnungIcons = [Network, Filter, KeyRound]

const card = 'bg-white dark:bg-brand-card border border-gray-200 dark:border-brand-border rounded'

export default function WodaPage() {
  const b = usePageTranslation().woda

  // Statischer Export liefert die deutschen Metadaten aus layout.tsx. Beim
  // Sprachwechsel werden Titel, Description und OpenGraph clientseitig
  // nachgezogen — derselbe Weg, den die übrigen übersetzten Seiten gehen
  // müssten; hier erstmals umgesetzt.
  useEffect(() => {
    document.title = `${b.meta.title} | innovation.today`
    const set = (selector: string, value: string) => {
      const el = document.head.querySelector<HTMLMetaElement>(selector)
      if (el) el.setAttribute('content', value)
    }
    set('meta[name="description"]', b.meta.description)
    set('meta[property="og:title"]', b.meta.ogTitle)
    set('meta[property="og:description"]', b.meta.ogDescription)
  }, [b])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="min-h-screen bg-brand-sky dark:bg-brand-night pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-brand-teal transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> {b.back}
          </Link>

          {/* Hero */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block text-brand-teal dark:text-brand-mint text-sm font-mono tracking-widest uppercase">{b.eyebrow}</span>
              <span className="text-xs bg-brand-teal/15 text-brand-teal dark:text-brand-mint px-2 py-1 rounded-full font-medium">{b.status}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {b.h1Lead}{' '}
              <span className="text-brand-teal dark:text-brand-mint">{b.h1Accent}</span>{' '}
              {b.h1Tail}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-4">{b.intro}</p>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">{b.intro2}</p>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded transition-colors text-base shadow-lg shadow-teal-500/20 cursor-pointer"
            >
              {b.ctaHero} <ArrowRight size={18} />
            </button>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">{b.byline}</p>
          </div>

          {/* Kennzahlen-Strip */}
          <section className="mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {b.stats.map(({ value, label }) => (
                <div key={value} className={`${card} p-4 text-center`}>
                  <div className="text-xl font-bold text-brand-teal dark:text-brand-mint mb-1">{value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{b.problemH2}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">{b.problemIntro}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {b.problemCards.map((c) => (
                <div key={c.title} className={`${card} p-6`}>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-teal dark:text-brand-mint">{c.tag}</span>
                  <h3 className="text-gray-900 dark:text-white font-semibold mt-1 mb-1">{c.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ampel-Übersicht (Bild) */}
          <section className="mb-16">
            <figure className={`${card} p-4 sm:p-6`}>
              <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-brand-teal dark:text-brand-mint mb-3 px-2">
                <span>{b.ampelLegend[0]}</span>
                <span>{b.ampelLegend[1]}</span>
              </div>
              <div className="bg-white rounded overflow-hidden">
                <Image src="/woda/ampel.svg" alt={b.ampelAlt} width={640} height={300} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500 dark:text-gray-400">{b.ampelCaption}</figcaption>
            </figure>
          </section>

          {/* Workflow */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{b.workflowH2}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {b.workflow.map((w) => (
                <div key={w.n} className={`${card} p-6 flex gap-4`}>
                  <span className="text-brand-teal dark:text-brand-mint font-mono text-xl font-bold shrink-0">{w.n}</span>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">{w.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dateiweg (Bild) */}
          <section className="mb-16">
            <figure className={`${card} p-4 sm:p-6`}>
              <div className="bg-white rounded overflow-hidden">
                <Image src="/woda/dateiweg.svg" alt={b.dateiwegAlt} width={640} height={260} className="w-full h-auto" />
              </div>
              <figcaption className="mt-4 grid gap-3 sm:grid-cols-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="sm:text-left">{b.dateiwegLeft}</span>
                <span className="sm:text-center">{b.dateiwegMid}</span>
                <span className="sm:text-right">{b.dateiwegRight}</span>
              </figcaption>
            </figure>
          </section>

          {/* Datenhoheit */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{b.trustH2}</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {b.trust.map((f, i) => {
                const Icon = trustIcons[i] ?? ShieldCheck
                return (
                  <div key={f.title} className={`${card} p-6`}>
                    <div className="w-10 h-10 bg-brand-teal/10 rounded flex items-center justify-center mb-4">
                      <Icon size={20} className="text-brand-teal dark:text-brand-mint" />
                    </div>
                    <h3 className="text-gray-900 dark:text-white font-bold mb-2">{f.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Einordnung */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{b.einordnungH2}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">{b.einordnungIntro}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {b.einordnung.map((e, i) => {
                const Icon = einordnungIcons[i] ?? ShieldCheck
                return (
                  <div key={e.title} className={`${card} p-6`}>
                    <div className="w-10 h-10 bg-brand-teal/10 rounded flex items-center justify-center mb-4">
                      <Icon size={20} className="text-brand-teal dark:text-brand-mint" />
                    </div>
                    <h3 className="text-gray-900 dark:text-white font-bold mb-2">{e.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{e.desc}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Vier Stufen */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{b.levelsH2}</h2>
            <figure className={`${card} p-4 sm:p-6 mb-6`}>
              <div className="bg-white rounded overflow-hidden">
                <Image src="/woda/stufen.svg" alt={b.levelsAlt} width={640} height={260} className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 flex justify-between text-xs font-mono uppercase tracking-widest text-brand-teal dark:text-brand-mint px-2">
                <span>{b.levelsTool}</span>
                <span>{b.levelsService}</span>
              </figcaption>
            </figure>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {b.levels.map((l) => (
                <div key={l.name} className={`${card} p-5 flex flex-col`}>
                  <span className="text-gray-900 dark:text-white font-semibold">{l.name}</span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 flex-1">{l.gets}</p>
                  <span className="mt-3 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded self-start">{l.who}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{b.levelsNote}</p>
          </section>

          {/* Daten / Formate */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{b.dataH2}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-5">{b.dataP}</p>
            <div className="flex flex-wrap gap-2">
              {b.formats.map((f) => (
                <span key={f} className="inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full">
                  <FileSpreadsheet size={13} className="text-brand-teal dark:text-brand-mint" /> {f}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 border border-brand-teal/20 rounded p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{b.ctaH2}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">{b.ctaP}</p>
            <button
              {...calButtonProps}
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded transition-colors cursor-pointer"
            >
              {b.ctaButton} <ArrowRight size={16} />
            </button>
            <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
              {b.ctaMail}{' '}
              <a href={`mailto:${SUPPORT_EMAIL}?subject=Projekt%20Woda`} className="text-brand-teal dark:text-brand-mint hover:underline">{SUPPORT_EMAIL}</a>{' '}
              {b.ctaMailSubject}
            </p>
          </section>

        </div>
      </div>
    </>
  )
}
