import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Referenzprojekte',
  description:
    'Entdecken Sie unsere Referenzprojekte: Innovation Republic, Geopotatlas, AutoToDo und weitere KI-Agenten-Lösungen von Vencly.',
}

const projects = [
  {
    name: 'Innovation Republic',
    category: 'Venture Clienting Plattform',
    description:
      'Eine KI-gestützte Plattform zur automatisierten Startup-Identifikation und -Matching für mittelständische Unternehmen. Reduzierung des Scouting-Aufwands um bis zu 70 %.',
    tags: ['KI-Agenten', 'Startup-Matching', 'Automatisierung'],
    status: 'Live',
  },
  {
    name: 'Geopotatlas',
    category: 'Geodaten-Intelligence',
    description:
      'Intelligente Auswertung von Geodaten für strategische Standortentscheidungen und Marktanalysen. Integration mit bestehenden ERP-Systemen.',
    tags: ['Geodaten', 'Business Intelligence', 'ERP-Integration'],
    status: 'Live',
  },
  {
    name: 'AutoToDo',
    category: 'Smartes Projektmanagement',
    description:
      'KI-basiertes Task-Management-System, das aus E-Mails, Meetings und Dokumenten automatisch Aufgaben ableitet und priorisiert.',
    tags: ['Taskmanagement', 'NLP', 'Produktivität'],
    status: 'Beta',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-vencly-bg pt-24 pb-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="inline-block text-vencly-teal text-sm font-mono tracking-widest uppercase mb-4">
            Referenzprojekte
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unsere{' '}
            <span className="gradient-text">Projekte</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Von der Idee bis zur produktiven KI-Lösung – hier sehen Sie, was wir
            für unsere Kunden gebaut haben.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-vencly-card border border-vencly-border rounded-2xl p-8 hover:border-vencly-teal/40 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono text-vencly-teal bg-vencly-teal/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    project.status === 'Live'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-vencly-teal transition-colors">
                {project.name}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Haben Sie ein ähnliches Projekt in mind?
          </p>
          <a
            href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-vencly-teal-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors teal-glow"
          >
            Demo buchen
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
