import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/brand'

// Die Seite ist eine Client Component und kann kein eigenes metadata exportieren.
// Ohne dieses Layout erbte sie früher das canonical der Startseite und galt für
// Google als deren Duplikat.
export const metadata: Metadata = {
  title: 'VM- und Sandbox-Setup für Claude Code',
  description:
    'Anbietervergleich, Empfehlung für den passenden Tarif und ein fertiges Setup-Script, um Claude Code sicher in einer VM oder Sandbox zu betreiben. Teil von OptAImum.',
  alternates: { canonical: `${SITE_URL}/optaimum/vm-setup/` },
  openGraph: {
    title: 'VM & Sandbox Setup | innovation.today',
    description: 'Anbietervergleich und fertiges Setup-Script für Claude Code.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
