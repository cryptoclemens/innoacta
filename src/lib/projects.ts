// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all Vencly projects.
//
// Add a project here ONCE and it appears automatically in:
//   • the "Projekte" dropdown in the navbar (src/components/layout/Navbar.tsx)
//   • the project overview grid (src/app/projects/page.tsx)
//   • a detail subpage
//
// Detail page: set `href` to an existing bespoke page (e.g. '/autotodo') OR leave
// it out and fill the content fields below — then a detail page is generated
// automatically at /<slug> from the shared template (src/app/[slug]/page.tsx).
// No new file needed per project.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStatus = 'Live' | 'In Entwicklung'

/** `icon` is a lucide-react icon name resolved in the detail template. */
export interface ProjectFeature {
  icon: string
  title: string
  desc: string
}

export interface ProjectStep {
  n: string
  title: string
  desc: string
}

export interface Project {
  slug: string
  name: string
  category: string
  description: string
  tags: string[]
  status: ProjectStatus
  /** Bespoke page path (e.g. '/autotodo'). Omit to auto-generate at /<slug>. */
  href?: string

  // ── Content below is used only by the auto-generated detail template ──
  hero?: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    titleTail?: string
    intro: string
  }
  workflowHeading?: string
  workflow?: ProjectStep[]
  featuresHeading?: string
  features?: ProjectFeature[]
  stack?: string[]
  stackNote?: string
  cta?: { heading: string; text: string; label: string; href: string; external?: boolean }
  seoDescription?: string
}

/** Where a project's card / nav entry points. Bespoke page if `href` is set,
 *  otherwise the auto-generated top-level detail page at /<slug>. */
export function projectPath(p: Project): string {
  return p.href ?? `/${p.slug}`
}

export const projects: Project[] = [
  {
    slug: 'innovation-republic',
    name: 'Innovation Republic',
    category: 'Venture Clienting Plattform',
    description:
      'Eine KI-gestützte Plattform zur automatisierten Startup-Identifikation und -Matching für mittelständische Unternehmen. Reduzierung des Scouting-Aufwands um bis zu 70 %.',
    tags: ['KI-Agenten', 'Startup-Matching', 'Automatisierung'],
    status: 'Live',
    href: '/innovation-republic',
  },
  {
    slug: 'geopotatlas',
    name: 'Geopotatlas',
    category: 'Geodaten-Intelligence',
    description:
      'Intelligente Auswertung von Geodaten für strategische Standortentscheidungen und Marktanalysen. Integration mit bestehenden ERP-Systemen.',
    tags: ['Geodaten', 'Business Intelligence', 'ERP-Integration'],
    status: 'Live',
    href: '/geopotatlas',
  },
  {
    slug: 'autotodo',
    name: 'AutoToDo',
    category: 'KI-gestütztes LOP-Management',
    description:
      'Meeting-Transkript hochladen, KI extrahiert automatisch alle Aufgaben und Statusänderungen, Vorschläge prüfen und als Excel exportieren. Multi-Tenant SaaS mit BYOK.',
    tags: ['KI-Extraktion', 'LOP-Management', 'SaaS'],
    status: 'Live',
    href: '/autotodo',
  },
  {
    slug: 'optaimum',
    name: 'OptAImum',
    category: 'KI-Produktivitätstool',
    description:
      'Profile, Skill- & Hook-Markdowns erstellen, LLM-Anbieter in Minuten wechseln, Prompts generieren und KI-Sandboxen aufsetzen – alles an einem Ort. Für alle, die KI-Tools wirklich beherrschen wollen.',
    tags: ['KI-Optimierung', 'Prompt Engineering', 'Developer Tools'],
    status: 'Live',
    href: '/optaimum',
  },
  {
    slug: 'souffleur',
    name: 'Souffleur',
    category: 'KI-Verhandlungs-Coach',
    description:
      'Privacy-first Live-Coaching für Verhandlungen auf macOS: lokale Transkription per Whisper, Echtzeit-Abgleich mit eigenem Spickzettel, strukturiertes Meeting-Summary – vollständig DSGVO-konform, kein Cloud-Recording, BYOK.',
    tags: ['Whisper', 'BYOK', 'macOS', 'Datenschutz'],
    status: 'In Entwicklung',
    href: '/souffleur',
  },
  {
    slug: 'kitalo',
    name: 'Kitalo',
    category: 'Betriebssystem für Kitas',
    description:
      'Das digitale Betriebssystem für Kitas: faire Dienst- und Ausfallplanung, Eltern zeitgemäß digital eingebunden, Leitung von wiederkehrender Verwaltung entlastet. Open-Source-Kern (AGPL) mit gehostetem Freemium – gewachsen aus der live erprobten Zappels-App.',
    tags: ['Open Core', 'Multi-Tenant', 'Kita', 'DSGVO'],
    status: 'In Entwicklung',
    // No `href` → detail page auto-generated at /kitalo from the fields below.
    seoDescription:
      'Kitalo entlastet Kita-Leitungen von wiederkehrender Verwaltung und bindet Eltern digital ein: faire Dienst- und Ausfallplanung, Open-Source-Kern (AGPL) mit gehostetem Freemium. Gewachsen aus der live erprobten Zappels-App.',
    hero: {
      eyebrow: 'Produkt · Kita-Betriebssystem · Open Core',
      titleLead: 'Kitalo –',
      titleAccent: 'das digitale Betriebssystem',
      titleTail: 'für Kitas.',
      intro:
        'Kitalo entlastet Kita-Leitungen von wiederkehrender Verwaltung und bindet Eltern zeitgemäß digital ein: faire Dienst- und Ausfallplanung, automatische Notfall-Eskalation, quelloffener Kern mit gehostetem Freemium. Gewachsen aus der live erprobten Zappels-App.',
    },
    workflowHeading: 'So funktioniert Kitalo.',
    workflow: [
      { n: '01', title: 'Kita einrichten', desc: 'Self-service-Onboarding: eigene Instanz mit Name, Admin und Leitung in Minuten.' },
      { n: '02', title: 'Eltern digital einbinden', desc: 'Mobile Eltern-App (PWA), Erinnerungen und Termine automatisch per Telegram und E-Mail.' },
      { n: '03', title: 'Dienste fair planen', desc: 'Transparentes Losverfahren und Fairness-Ranking statt Excel und WhatsApp-Diskussionen.' },
      { n: '04', title: 'Ausfälle automatisch auffangen', desc: 'Kind oder Erzieher krank? Gestaffelte, faire Notfall-Eskalation statt Rundruf.' },
    ],
    featuresHeading: 'Was Kitalo besonders macht.',
    features: [
      { icon: 'Shuffle', title: 'Faire Dienst- & Ausfallplanung', desc: 'Algorithmisches Losverfahren, Fairness-Ranking und automatische Notfall-Eskalation bei Krankheit. Genau das, was reine Kommunikations-Apps nicht leisten – die Kernkompetenz von Kitalo.' },
      { icon: 'ShieldCheck', title: 'Open Source & Datensouveränität', desc: 'Quelloffener Kern (AGPL), self-hostbar, EU-Hosting, keine US-Cloud, kein Tracking. Telefonnummern anwendungsseitig verschlüsselt – personenbezogene Daten bleiben unter Kontrolle des Trägers.' },
      { icon: 'Layers', title: 'Multi-Kita-Plattform', desc: 'Jede Kita erhält eine eigene, isolierte Instanz aus einem gemeinsamen Kern (Silo-Prinzip). Verbesserungen wirken beim nächsten Deploy auf alle Einrichtungen.' },
      { icon: 'Sparkles', title: 'Freemium, fair bepreist', desc: 'Voll funktionsfähiger Gratis-Kern mit Telegram + E-Mail. WhatsApp-Integration, eigene Domain und White-Label als bezahlte Add-ons – gestaffelt nach Kita-Größe.' },
    ],
    stack: [
      'Next.js 14 + TypeScript',
      'PostgreSQL + Prisma',
      'BullMQ + Redis (Job-Queue)',
      'Meta WhatsApp Cloud API · Telegram · E-Mail',
      'AGPL-3.0 Open-Source-Kern (in Vorbereitung)',
      'EU-Hosting (Hetzner, Deutschland)',
    ],
    stackNote:
      'Der freie Kern soll unter der AGPL-3.0 veröffentlicht und self-hostbar sein; das gehostete Kitalo trägt WhatsApp-Integration, Onboarding und Abrechnung.',
    cta: {
      heading: 'Interesse an Kitalo?',
      text: 'Kita-Träger, Elterninitiative oder Partner – wir freuen uns über einen Austausch.',
      label: 'Frühzugang anfragen',
      href: '/contact',
    },
  },
]
