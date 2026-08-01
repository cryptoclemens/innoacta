import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referenzprojekte',
  description:
    'Vencly-Projekte: Innovation Republic, Geopotatlas, AutoToDo, OptAImum, Souffleur, Kitalo und weitere KI- und Strategielösungen.',
  alternates: { canonical: 'https://vencly.com/projects' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
