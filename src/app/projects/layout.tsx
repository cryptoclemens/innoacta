import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referenzprojekte',
  description:
    'innovation.today-Projekte: Innovation Republic, Geopotatlas, AutoToDo, OptAImum, Souffleur, Kitalo, Projekt Woda und weitere KI- und Strategielösungen.',
  alternates: { canonical: 'https://www.innovation.today/projects' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
