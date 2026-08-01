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

import type { Locale } from '@/lib/i18n'

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

export interface ProjectCard {
  tag?: string
  title: string
  desc: string
}

export interface ProjectPlan {
  name: string
  price: string
  per?: string
  desc: string
  highlight?: boolean
}

export interface Project {
  slug: string
  name: Record<Locale, string>
  category: Record<Locale, string>
  description: Record<Locale, string>
  tags: string[]
  status: ProjectStatus
  /** Bespoke page path (e.g. '/autotodo'). Omit to auto-generate at /<slug>. */
  href?: string

  // ── Content below is used only by the auto-generated detail template ──
  /** Optional wordmark/logo shown in the hero (path under /public). */
  logo?: { src: string; alt: string }
  hero?: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    titleTail?: string
    intro: string
  }
  problem?: { heading: string; intro?: string; cards: ProjectCard[] }
  workflowHeading?: string
  workflow?: ProjectStep[]
  featuresHeading?: string
  features?: ProjectFeature[]
  plans?: { heading: string; intro?: string; tiers: ProjectPlan[]; addons?: string[]; note?: string }
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
    name: { de: 'Innovation Republic', en: 'Innovation Republic', fr: 'Innovation Republic', es: 'Innovation Republic' },
    category: {
      de: 'Venture Clienting Plattform',
      en: 'Venture Clienting Platform',
      fr: 'Plateforme de Venture Clienting',
      es: 'Plataforma de Venture Clienting',
    },
    description: {
      de: 'Eine KI-gestützte Plattform zur automatisierten Startup-Identifikation und -Matching für mittelständische Unternehmen. Reduzierung des Scouting-Aufwands um bis zu 70 %.',
      en: 'An AI-powered platform for automated startup identification and matching for mid-market companies. Reduces scouting effort by up to 70%.',
      fr: "Une plateforme propulsée par l'IA pour l'identification et le matching automatisés de startups pour les ETI. Réduit l'effort de scouting jusqu'à 70 %.",
      es: 'Una plataforma impulsada por IA para la identificación y el matching automatizado de startups para pymes. Reduce el esfuerzo de scouting hasta un 70 %.',
    },
    tags: ['KI-Agenten', 'Startup-Matching', 'Automatisierung'],
    status: 'Live',
    href: '/innovation-republic',
  },
  {
    slug: 'geopotatlas',
    name: { de: 'Geopotatlas', en: 'Geopotatlas', fr: 'Geopotatlas', es: 'Geopotatlas' },
    category: {
      de: 'Geodaten-Intelligence',
      en: 'Geodata Intelligence',
      fr: 'Intelligence géodonnées',
      es: 'Inteligencia geodatos',
    },
    description: {
      de: 'Intelligente Auswertung von Geodaten für strategische Standortentscheidungen und Marktanalysen. Integration mit bestehenden ERP-Systemen.',
      en: 'Intelligent analysis of geodata for strategic location decisions and market analyses. Integration with existing ERP systems.',
      fr: 'Analyse intelligente des géodonnées pour les décisions stratégiques de localisation et les analyses de marché. Intégration avec les systèmes ERP existants.',
      es: 'Análisis inteligente de geodatos para decisiones estratégicas de ubicación y análisis de mercado. Integración con sistemas ERP existentes.',
    },
    tags: ['Geodaten', 'Business Intelligence', 'ERP-Integration'],
    status: 'Live',
    href: '/geopotatlas',
  },
  {
    slug: 'autotodo',
    name: { de: 'AutoToDo', en: 'AutoToDo', fr: 'AutoToDo', es: 'AutoToDo' },
    category: {
      de: 'KI-gestütztes LOP-Management',
      en: 'AI-Powered Action Item Management',
      fr: "Gestion IA des points d'action",
      es: 'Gestión IA de puntos de acción',
    },
    description: {
      de: 'Meeting-Transkript hochladen, KI extrahiert automatisch alle Aufgaben und Statusänderungen, Vorschläge prüfen und als Excel exportieren. Multi-Tenant SaaS mit BYOK.',
      en: 'Upload a meeting transcript, AI automatically extracts all action items and status changes, review suggestions and export as Excel. Multi-tenant SaaS with BYOK.',
      fr: "Téléchargez un transcript de réunion, l'IA extrait automatiquement toutes les tâches et modifications de statut, vérifiez les suggestions et exportez en Excel. SaaS multi-tenant avec BYOK.",
      es: 'Sube una transcripción de reunión, la IA extrae automáticamente todos los puntos de acción y cambios de estado, revisa las sugerencias y exporta a Excel. SaaS multi-tenant con BYOK.',
    },
    tags: ['KI-Extraktion', 'LOP-Management', 'SaaS'],
    status: 'Live',
    href: '/autotodo',
  },
  {
    slug: 'optaimum',
    name: { de: 'OptAImum', en: 'OptAImum', fr: 'OptAImum', es: 'OptAImum' },
    category: {
      de: 'KI-Produktivitätstool',
      en: 'AI Productivity Tool',
      fr: 'Outil de productivité IA',
      es: 'Herramienta de productividad IA',
    },
    description: {
      de: 'Profile, Skill- & Hook-Markdowns erstellen, LLM-Anbieter in Minuten wechseln, Prompts generieren und KI-Sandboxen aufsetzen – alles an einem Ort. Für alle, die KI-Tools wirklich beherrschen wollen.',
      en: 'Create profile, skill & hook markdowns, switch LLM providers in minutes, generate prompts and set up AI sandboxes — all in one place. For everyone who wants to truly master AI tools.',
      fr: "Créez des markdowns de profil, compétences et hooks, changez de fournisseur LLM en quelques minutes, générez des prompts et configurez des bacs à sable IA — tout en un seul endroit. Pour ceux qui veulent vraiment maîtriser les outils IA.",
      es: 'Crea markdowns de perfil, habilidades y hooks, cambia de proveedor LLM en minutos, genera prompts y configura sandboxes de IA — todo en un solo lugar. Para quienes quieren dominar de verdad las herramientas de IA.',
    },
    tags: ['KI-Optimierung', 'Prompt Engineering', 'Developer Tools'],
    status: 'Live',
    href: '/optaimum',
  },
  {
    slug: 'souffleur',
    name: { de: 'Souffleur', en: 'Souffleur', fr: 'Souffleur', es: 'Souffleur' },
    category: {
      de: 'KI-Verhandlungs-Coach',
      en: 'AI Negotiation Coach',
      fr: 'Coach de négociation IA',
      es: 'Coach de negociación IA',
    },
    description: {
      de: 'Privacy-first Live-Coaching für Verhandlungen auf macOS: lokale Transkription per Whisper, Echtzeit-Abgleich mit eigenem Spickzettel, strukturiertes Meeting-Summary – vollständig DSGVO-konform, kein Cloud-Recording, BYOK.',
      en: 'Privacy-first live coaching for negotiations on macOS: local transcription via Whisper, real-time matching against your own cheat sheet, structured meeting summary — fully GDPR-compliant, no cloud recording, BYOK.',
      fr: "Coaching en direct centré sur la confidentialité pour les négociations sur macOS : transcription locale via Whisper, correspondance en temps réel avec votre propre fiche mémo, résumé de réunion structuré — entièrement conforme au RGPD, sans enregistrement cloud, BYOK.",
      es: 'Coaching en directo centrado en la privacidad para negociaciones en macOS: transcripción local vía Whisper, comparación en tiempo real con tu propia chuleta, resumen de reunión estructurado — totalmente conforme al RGPD, sin grabación en la nube, BYOK.',
    },
    tags: ['Whisper', 'BYOK', 'macOS', 'Datenschutz'],
    status: 'In Entwicklung',
    href: '/souffleur',
  },
  {
    slug: 'kitalo',
    name: { de: 'Kitalo', en: 'Kitalo', fr: 'Kitalo', es: 'Kitalo' },
    category: {
      de: 'Betriebssystem für Kitas',
      en: 'Operating System for Childcare',
      fr: 'Système d\'exploitation pour crèches',
      es: 'Sistema operativo para guarderías',
    },
    description: {
      de: 'Das digitale Betriebssystem für Kitas: faire Dienst- und Ausfallplanung, Eltern zeitgemäß digital eingebunden, Leitung von wiederkehrender Verwaltung entlastet. Open-Source-Kern (AGPL) mit gehostetem Freemium – gewachsen aus der live erprobten Zappels-App.',
      en: 'The digital operating system for childcare centres: fair duty and absence scheduling, parents engaged digitally, management relieved of recurring admin. Open-source core (AGPL) with hosted freemium — grown from the live-tested Zappels app.',
      fr: "Le système d'exploitation numérique pour les crèches : planification équitable des services et absences, parents impliqués digitalement, direction déchargée de l'administration récurrente. Noyau open-source (AGPL) avec freemium hébergé — issu de l'application Zappels testée en production.",
      es: 'El sistema operativo digital para guarderías: planificación equitativa de turnos y ausencias, padres integrados digitalmente, dirección liberada de la administración recurrente. Núcleo open-source (AGPL) con freemium alojado — desarrollado a partir de la app Zappels probada en producción.',
    },
    tags: ['Open Core', 'Multi-Tenant', 'Kita', 'DSGVO'],
    status: 'In Entwicklung',
    // No `href` → detail page auto-generated at /kitalo from the fields below.
    logo: { src: '/kitalo-wordmark.png', alt: 'Kitalo' },
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
    problem: {
      heading: 'Warum Kitalo?',
      intro: 'Kita-Leitungen versinken in wiederkehrender, betriebskritischer Verwaltung — mit Papier, Excel und unsicheren E-Mails.',
      cards: [
        { tag: 'Alltag', title: 'Kind krank, Erzieher krank', desc: 'Ausfälle müssen sofort aufgefangen werden — kritisch für einen reibungslosen Kita-Tag.' },
        { tag: 'Aufwand', title: 'Immer dieselben Aufgaben', desc: 'Wiederkehrende Abläufe fressen täglich die Zeit der Leitung — planen, nachfassen, abstimmen.' },
        { tag: 'Werkzeuge', title: 'Papier, Excel, unsichere E-Mail', desc: 'Ein Flickenteppich, der nicht ineinandergreift — inklusive DSGVO-Risiko.' },
        { tag: 'Eltern', title: 'Kaum digital eingebunden', desc: 'Elternkommunikation läuft analog und zerstreut, statt zeitgemäß an einem Ort.' },
      ],
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
    plans: {
      heading: 'Frei starten, mitwachsen.',
      intro: 'Der Kern ist offen und kostenlos – bezahlt wird nur der Komfort. Preise gestaffelt nach Kita-Größe.',
      tiers: [
        { name: 'Frei', price: '0 €', desc: 'Voller Planungs-Kern, Telegram + E-Mail, 1 Admin. Self-hostbar als Open-Source-Kern.', highlight: true },
        { name: 'Plus · S', price: '9,99 €', per: '/ Monat', desc: 'bis 20 Familien. Schaltet WhatsApp + Multi-Admin frei.' },
        { name: 'Plus · M', price: '18,99 €', per: '/ Monat', desc: 'bis 40 Familien.' },
        { name: 'Plus · L', price: '29,99 €', per: '/ Monat', desc: 'über 40 Familien.' },
      ],
      addons: ['Eigene Domain', 'White-Label', 'Prioritäts-Support'],
      note: 'Preise vorläufig; Zahlungsabwicklung über Mollie ab v2.',
    },
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
