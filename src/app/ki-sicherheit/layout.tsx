import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI & Sicherheit – KI sicher einführen, Systeme belastbar prüfen',
  description:
    'KI-Audit, Use-Case-Analysen mit LLM-Matching, KI-Governance und EU AI Act, sichere Anbindung von KI-Systemen, DSGVO-Konformität, Angriffstests gegen KI-Anwendungen und Penetrationstests.',
  alternates: { canonical: 'https://www.innovation.today/ki-sicherheit/' },
  openGraph: {
    title: 'KI & Sicherheit | innovation.today',
    description:
      'KI sicher einführen: vom KI-Audit bis zu Angriffstests gegen KI-Anwendungen. Jedes unserer Projekte durchläuft ein Sicherheits-Audit.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
