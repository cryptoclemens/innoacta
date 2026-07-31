import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  CheckCircle2, ArrowLeft, ArrowRight, ExternalLink,
  Zap, Shield, ShieldCheck, Code2, CreditCard, Shuffle, Layers, Sparkles,
  Rocket, Users, Bell, Lock, Globe, Cpu, Database, type LucideIcon,
} from 'lucide-react'
import { projects, type Project } from '@/lib/projects'

// lucide icon names allowed in project feature cards (extend as needed)
const ICONS: Record<string, LucideIcon> = {
  Zap, Shield, ShieldCheck, Code2, CreditCard, Shuffle, Layers, Sparkles,
  Rocket, Users, Bell, Lock, Globe, Cpu, Database,
}

// Only projects WITHOUT a bespoke page get an auto-generated detail page here.
// Add a project to src/lib/projects.ts without `href` (+ content fields) and its
// page appears automatically at /<slug> — no new file needed.
const autoProjects = projects.filter((p) => !p.href)

export const dynamicParams = false

export function generateStaticParams() {
  return autoProjects.map((p) => ({ slug: p.slug }))
}

function getProject(slug: string): Project | undefined {
  return autoProjects.find((p) => p.slug === slug)
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug)
  if (!p) return {}
  const description = p.seoDescription ?? p.description
  return {
    title: `${p.name} – ${p.category}`,
    description,
    alternates: { canonical: `https://vencly.com/${p.slug}` },
    openGraph: { title: `${p.name} | Vencly`, description },
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug)
  if (!p) notFound()

  const { hero, cta } = p
  const description = p.seoDescription ?? p.description

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'SoftwareApplication',
        name: p.name, applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
        url: `https://vencly.com/${p.slug}`, description,
        author: { '@type': 'Organization', name: 'Vencly GmbH', url: 'https://vencly.com' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vencly.com' },
          { '@type': 'ListItem', position: 2, name: 'Projekte', item: 'https://vencly.com/projects' },
          { '@type': 'ListItem', position: 3, name: p.name, item: `https://vencly.com/${p.slug}` },
        ],
      }) }} />
      <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back */}
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-vencly-teal transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Zurück zu Projekten
          </Link>

          {/* Hero */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase">{hero?.eyebrow ?? p.category}</span>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                p.status === 'Live'
                  ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                  : 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
              }`}>{p.status}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {hero ? (
                <>{hero.titleLead}{' '}<span className="text-vencly-teal">{hero.titleAccent}</span>{hero.titleTail ? ` ${hero.titleTail}` : ''}</>
              ) : p.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">{hero?.intro ?? description}</p>
            {cta && (cta.external ? (
              <a href={cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded transition-colors text-base shadow-lg shadow-teal-500/20">
                {cta.label} <ExternalLink size={18} />
              </a>
            ) : (
              <Link href={cta.href} className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded transition-colors text-base shadow-lg shadow-teal-500/20">
                {cta.label} <ArrowRight size={18} />
              </Link>
            ))}
          </div>

          {/* Workflow */}
          {p.workflow && p.workflow.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{p.workflowHeading ?? `So funktioniert ${p.name}.`}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {p.workflow.map((w) => (
                  <div key={w.n} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-6 flex gap-4">
                    <span className="text-vencly-teal font-mono text-xl font-bold shrink-0">{w.n}</span>
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-semibold mb-1">{w.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Features */}
          {p.features && p.features.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{p.featuresHeading ?? 'Features im Detail.'}</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {p.features.map((f) => {
                  const Icon = ICONS[f.icon] ?? Sparkles
                  return (
                    <div key={f.title} className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-6">
                      <div className="w-10 h-10 bg-vencly-teal/10 rounded flex items-center justify-center mb-4">
                        <Icon size={20} className="text-vencly-teal" />
                      </div>
                      <h3 className="text-gray-900 dark:text-white font-bold mb-2">{f.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* Tech stack */}
          {p.stack && p.stack.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
              <ul className="space-y-2">
                {p.stack.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    <CheckCircle2 size={16} className="text-vencly-teal shrink-0" /> {s}
                  </li>
                ))}
              </ul>
              {p.stackNote && <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{p.stackNote}</p>}
            </section>
          )}

          {/* CTA bottom */}
          {cta && (
            <section className="bg-gradient-to-r from-vencly-teal/10 to-vencly-teal/5 border border-vencly-teal/20 rounded p-10 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{cta.heading}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{cta.text}</p>
              {cta.external ? (
                <a href={cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded transition-colors">
                  {cta.label} <ExternalLink size={16} />
                </a>
              ) : (
                <Link href={cta.href} className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded transition-colors">
                  {cta.label} <ArrowRight size={16} />
                </Link>
              )}
            </section>
          )}

        </div>
      </div>
    </>
  )
}
