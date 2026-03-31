import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'

export const metadata: Metadata = {
  title: 'Referenzprojekte',
  description:
    'Vencly-Projekte: Innovation Republic, Geopotatlas, AutoToDo, OptAImum und weitere KI- und Strategielösungen.',
  alternates: { canonical: 'https://vencly.com/projects' },
}

const projects = [
  {
    id: 'innovation-republic',
    name: 'Innovation Republic',
    category: 'Venture Clienting Plattform',
    description:
      'Eine KI-gestützte Plattform zur automatisierten Startup-Identifikation und -Matching für mittelständische Unternehmen. Reduzierung des Scouting-Aufwands um bis zu 70 %.',
    tags: ['KI-Agenten', 'Startup-Matching', 'Automatisierung'],
    status: 'Live',
    href: null,
  },
  {
    id: 'geopotatlas',
    name: 'Geopotatlas',
    category: 'Geodaten-Intelligence',
    description:
      'Intelligente Auswertung von Geodaten für strategische Standortentscheidungen und Marktanalysen. Integration mit bestehenden ERP-Systemen.',
    tags: ['Geodaten', 'Business Intelligence', 'ERP-Integration'],
    status: 'Live',
    href: null,
  },
  {
    id: 'autotodo',
    name: 'AutoToDo',
    category: 'Smartes Projektmanagement',
    description:
      'KI-basiertes Task-Management-System, das aus E-Mails, Meetings und Dokumenten automatisch Aufgaben ableitet und priorisiert.',
    tags: ['Taskmanagement', 'NLP', 'Produktivität'],
    status: 'Beta',
    href: null,
  },
  {
    id: 'optaimum',
    name: 'OptAImum',
    category: 'KI-Produktivitätstool',
    description:
      'Profile, Skill- & Hook-Markdowns erstellen, LLM-Anbieter in Minuten wechseln, Prompts generieren und KI-Sandboxen aufsetzen – alles an einem Ort. Für alle, die KI-Tools wirklich beherrschen wollen.',
    tags: ['KI-Optimierung', 'Prompt Engineering', 'Developer Tools'],
    status: 'Live',
    href: '/optaimum',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase mb-4">
            Referenzprojekte
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Unsere{' '}
            <span className="text-vencly-teal">Projekte</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Von der Idee bis zur produktiven Lösung – hier sehen Sie, was wir gebaut haben.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const card = (
              <div
                className={`bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded-2xl p-8 hover:border-vencly-teal/40 transition-all duration-300 group h-full flex flex-col ${project.href ? 'cursor-pointer' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-vencly-teal bg-vencly-teal/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    project.status === 'Live'
                      ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                      : 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-vencly-teal transition-colors">
                  {project.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.href && (
                  <span className="inline-flex items-center gap-1.5 text-vencly-teal text-sm font-medium mt-auto">
                    Mehr erfahren <ArrowRight size={14} />
                  </span>
                )}
              </div>
            )

            return project.href ? (
              <Link key={project.id} id={project.id} href={project.href}>
                {card}
              </Link>
            ) : (
              <div key={project.id} id={project.id}>
                {card}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Haben Sie ein ähnliches Projekt in mind?
          </p>
          <button
            {...calButtonProps}
            className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors cursor-pointer"
          >
            Gespräch vereinbaren
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
