'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { calButtonProps } from '@/components/layout/CalProvider'
import { projects, projectPath } from '@/lib/projects'
import { usePageTranslation } from '@/lib/hooks/usePageTranslation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectsPage() {
  const p = usePageTranslation()
  const pr = p.projects
  const { locale } = useLanguage()

  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-vencly-bg pt-24 pb-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="section-eyebrow mb-4">
            {pr.eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {pr.h1}{' '}
            <span className="text-vencly-teal">{pr.h1Highlight}</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {pr.subtitle}
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} id={project.slug} href={projectPath(project)}>
              <div className="bg-white dark:bg-vencly-card border border-gray-200 dark:border-vencly-border rounded p-8 hover:border-vencly-teal/40 transition-all duration-300 group h-full flex flex-col cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-vencly-teal bg-vencly-teal/10 px-3 py-1 rounded-full">
                    {project.category[locale]}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    project.status === 'Live'
                      ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                      : 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {project.status === 'Live' ? pr.statusLive : pr.statusInDev}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-vencly-teal transition-colors">
                  {project.name[locale]}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description[locale]}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-vencly-teal text-sm font-medium mt-auto">
                  {pr.learnMore} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {pr.ctaP}
          </p>
          <button
            {...calButtonProps}
            className="inline-flex items-center gap-2 bg-vencly-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded transition-colors cursor-pointer"
          >
            {pr.ctaButton}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
