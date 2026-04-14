export type Locale = 'de' | 'en' | 'fr' | 'es'

export const localeLabels: Record<Locale, string> = {
  de: 'DE',
  en: 'EN',
  fr: 'FR',
  es: 'ES',
}

export type Translations = typeof de

const de = {
  nav: {
    home: 'Home',
    services: 'Leistungen',
    projects: 'Projekte',
    contact: 'Kontakt',
    login: 'Login',
    cta: 'Erstgespräch vereinbaren',
  },
  hero: {
    eyebrow: 'Strategische Geschäftsfeldentwicklung',
    h1: 'Innovatives Gründer-Denken für',
    h1Highlight: 'Unternehmen mit Tradition.',
    subline:
      'Wir bringen Startup-Logik in Ihr nächstes Geschäftsfeld. Denn Startups bauen neue Märkte, indem sie schnell testen, klug einkaufen und radikal fokussiert bleiben. Vencly überträgt genau diese Logik auf Konzerne und den Mittelstand.',
    ctaPrimary: 'Erstgespräch vereinbaren',
    ctaSecondary: 'Referenzprojekte ansehen',
    stats: [
      { value: '40+', label: 'Realisierte Projekte' },
      { value: '6 Mo.', label: 'Ø Projektlaufzeit' },
      { value: '7', label: 'Fokus-Branchen' },
    ],
  },
  valueProp: {
    label: 'Was Vencly einbringt',
    h2: 'Denken wie ein Startup.',
    h2Highlight: 'Handeln wie ein Marktführer.',
    intro:
      'Neue Geschäftsfelder bauen – so wie Gründer es tun: mit minimalem Overhead, maximaler Geschwindigkeit und dem Mut, schnell zu entscheiden. Vencly bringt diese Haltung in Ihren Konzern oder Ihr mittelständisches Unternehmen.',
    items: [
      {
        title: 'Validieren statt planen',
        desc: 'Kein monatelanger Strategieprozess. Wir testen Geschäftsfeld-Hypothesen schnell am Markt – mit echten Daten, echten Kunden, echten Ergebnissen.',
      },
      {
        title: 'Klug einkaufen statt alles selbst bauen',
        desc: 'Startups kaufen den besten Anbieter am Markt, um schnell zu launchen. Genau das ist Venture Clienting – und genau das bringen wir in Ihr Unternehmen.',
      },
      {
        title: 'Von der Idee zum Markt – in Startup-Geschwindigkeit',
        desc: 'Keine endlosen Abstimmungsschleifen. Vencly übernimmt operative Verantwortung und liefert – schnell, messbar, mit echtem Impact.',
      },
      {
        title: 'Funktioniert auch in regulierten Branchen',
        desc: 'Energie, Infrastruktur, öffentliche Hand: Startup-Logik kennt keine Branchengrenzen – wenn man weiß, wie man sie anpasst.',
      },
      {
        title: 'Ehrlichkeit über Machbarkeit',
        desc: 'Wir sagen auch, wenn ein Geschäftsfeld noch nicht reif ist. Vertrauen entsteht durch Klarheit, nicht durch Ja-Sagen.',
      },
    ],
  },
  features: {
    label: 'Leistungen',
    h2: 'Drei Felder – eine Logik.',
    subtext:
      'Alle unsere Leistungen folgen derselben Startup-Logik: erst verstehen, dann testen, dann skalieren – nie umgekehrt.',
    items: [
      {
        title: 'Geschäftsfeldentwicklung',
        desc: 'Neue Märkte identifizieren, Geschäftsmodelle entwickeln, Markterprobung begleiten – von der ersten Hypothese bis zum validierten Modell.',
        points: ['Markt- & Technologiebewertung', 'Geschäftsmodell-Entwicklung', 'Validierung & Markterprobung'],
      },
      {
        title: 'Venture Clienting',
        desc: 'Externe Innovationspartner so einbinden wie ein Startup seinen ersten Dienstleister wählt: gezielt, schnell, mit klarem Testauftrag. Startup-Scouting, strukturierte Pilotprojekte, Entscheidung nach 90 Tagen.',
        points: ['Startup-Scouting & Matching', 'Strukturierte Pilotprojekte', 'Lieferantenqualifizierung'],
      },
      {
        title: 'Strategische Umsetzung',
        desc: 'Nicht Strategie statt Umsetzung – sondern beides. Vencly übernimmt operative Verantwortung in Projekten, die intern keine Heimat haben: Projektsteuerung, Stakeholder-Management, Entscheidungsvorlagen.',
        points: ['Projektsteuerung & Reporting', 'Stakeholder-Management', 'Workshop-Formate'],
      },
    ],
  },
  whyUs: {
    label: 'Warum Vencly',
    h2: 'Kein Konzept-Karussell.',
    subtext:
      'Wir sind kein Berater, der Konzepte erstellt. Wir sind das Team, das umsetzt – mit echter Umsetzungsverantwortung und unternehmerischem Blick.',
    items: [
      {
        title: 'Unternehmerische Perspektive, keine Berater-Distanz',
        desc: 'Vencly wird von einem Gründer geführt, der selbst Unternehmen aufgebaut, Märkte erschlossen und Iterationen durchlebt hat. Das prägt den Blick auf Ihre Situation – und auf das, was wirklich umsetzbar ist.',
      },
      {
        title: 'Methode trifft Erfahrung',
        desc: 'Über 40 realisierte Venture-Client-Projekte, Geschäftsfeldentwicklung in der Energie- und Infrastrukturbranche, Innovationsstrukturen für Konzerne und Kommunen. Keine generische Toolbox – sondern erprobte Praxis.',
      },
      {
        title: 'Ehrlichkeit über Machbarkeit',
        desc: 'Wir sagen auch, wenn ein Geschäftsfeld noch nicht reif ist – oder wenn Venture Clienting nicht das richtige Instrument ist. Vertrauen entsteht durch Klarheit, nicht durch Ja-Sagen.',
      },
    ],
  },
  references: {
    label: 'Referenzen',
    h2: 'Aus der Praxis.',
    subtext:
      'Namhafte Unternehmen aus der DACH-Region vertrauen auf Vencly für strategische Geschäftsfeldentwicklung und Venture-Clienting-Projekte.',
    caseTag: 'ENERGIE · INFRASTRUKTUR',
    caseTitle: 'Neues Geschäftsfeld Geothermie\nfür einen deutschen Energieversorger',
    caseText:
      'Für einen großen deutschen Energieversorger haben wir die strategische und wirtschaftliche Tragfähigkeit eines neuen Geschäftsfelds im Bereich erneuerbare Wärme entwickelt – von der Technologiebewertung über Marktanalysen bis zur Stakeholder-Kommunikation mit kommunalen Versorgern.',
    caseMeta: [
      { label: 'Branche', value: 'Energie / Infrastruktur' },
      { label: 'Laufzeit', value: '3 Monate' },
      { label: 'Format', value: 'Strategisches Begleitmandat' },
    ],
    case2Tag: 'ÖFFENTLICHER SEKTOR · INNOVATION',
    case2Title: 'Aufbau einer Venture Client Unit für einen öffentlichen Träger',
    case2Text:
      'Für einen öffentlichen Träger haben wir eine strukturierte Venture Client Unit aufgebaut – von der Prozessgestaltung über die Startup-Scouting-Methodik bis zur internen Verankerung. Das Ergebnis: ein wiederholbarer Prozess für die Erprobung externer Innovationspartner innerhalb regulatorischer Rahmenbedingungen.',
    case2Meta: [
      { label: 'Branche', value: 'Öffentlicher Sektor' },
      { label: 'Laufzeit', value: '2 Monate' },
      { label: 'Format', value: 'Aufbaumandat & Prozessdesign' },
    ],
    footnote: 'Weitere Referenzen auf Anfrage.',
    ctaTitle: 'Bereit für das nächste Geschäftsfeld?',
    ctaSubtext: 'Starten Sie mit einem unverbindlichen Erstgespräch. Kein Pitch-Deck erforderlich.',
    ctaButton: 'Jetzt Termin vereinbaren',
  },
  factsheet: {
    title: 'Vencly auf zwei Seiten',
    desc: 'Leistungsübersicht, Methodik und Referenzprojekt kompakt zusammengefasst – für die nächste interne Runde.',
    button: 'PDF herunterladen',
  },
  logoBar: {
    label: 'Vertrauen von führenden Unternehmen',
  },
  footer: {
    tagline:
      'Vencly bringt Gründer-Denken in neue Geschäftsfelder – für Konzerne und den Mittelstand, die schneller handeln wollen als ihre Konkurrenz.',
    navLabel: 'Navigation',
    legalLabel: 'Rechtliches',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    rights: 'Alle Rechte vorbehalten.',
  },
}

const en: Translations = {
  nav: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    login: 'Login',
    cta: 'Book a Call',
  },
  hero: {
    eyebrow: 'Strategic New Market Development',
    h1: 'Entrepreneurial Thinking for',
    h1Highlight: 'Your Next Market Move.',
    subline:
      'We bring startup rigour to your next growth opportunity. Startups build new markets by testing fast, procuring smart and staying radically focused. Vencly transfers exactly this logic to corporations and mid-market companies — without the chaos.',
    ctaPrimary: 'Book a Call',
    ctaSecondary: 'View Case Studies',
    stats: [
      { value: '40+', label: 'Completed Projects' },
      { value: '6 months', label: 'Avg. Project Duration' },
      { value: '7', label: 'Focus Industries' },
    ],
  },
  valueProp: {
    label: 'What Vencly Delivers',
    h2: 'Think like a startup.',
    h2Highlight: 'Execute like a market leader.',
    intro:
      'Building new business lines the way founders do — with minimal overhead, maximum velocity and the conviction to make decisions quickly. Vencly brings this mindset to corporations and mid-market companies that need to move faster than their competition.',
    items: [
      {
        title: 'Validate before you scale',
        desc: 'No months-long strategy processes. We test market hypotheses directly in the field — with real data, real customers and results that inform decisions.',
      },
      {
        title: 'Buy smart rather than build everything in-house',
        desc: 'Startups choose the best external partner to launch fast. That\'s precisely what Venture Clienting is — a structured way to access external innovation and bring it inside your organisation.',
      },
      {
        title: 'From concept to market — at startup pace',
        desc: 'No endless steering committees. Vencly takes operational ownership and delivers — quickly, measurably, with tangible impact.',
      },
      {
        title: 'Built for regulated industries',
        desc: 'Energy, infrastructure, public sector: startup logic has no industry boundaries — provided you know how to adapt it. We do.',
      },
      {
        title: 'Straight talk on feasibility',
        desc: 'We will tell you when a market opportunity isn\'t yet viable. Real trust is built through honest counsel, not telling clients what they want to hear.',
      },
    ],
  },
  features: {
    label: 'Services',
    h2: 'Three practices. One logic.',
    subtext:
      'Every service we offer follows the same startup-derived principle: understand first, test next, then scale — never the other way around.',
    items: [
      {
        title: 'New Market Development',
        desc: 'Identify adjacent markets, develop business models, run structured market tests — from the first hypothesis to a validated, investment-ready model.',
        points: ['Market & technology assessment', 'Business model development', 'Validation & market testing'],
      },
      {
        title: 'Venture Clienting',
        desc: 'Integrate external innovation partners the way a founder chooses their first supplier: targeted, fast and with a clear test mandate. Startup scouting, structured pilots, go/no-go decision in 90 days.',
        points: ['Startup scouting & matching', 'Structured pilot projects', 'Supplier qualification'],
      },
      {
        title: 'Strategic Execution',
        desc: 'Strategy and execution — together. Vencly takes operational ownership of high-priority projects that lack an internal home: project management, stakeholder alignment and decision-ready documentation.',
        points: ['Project management & reporting', 'Stakeholder management', 'Workshop facilitation'],
      },
    ],
  },
  whyUs: {
    label: 'Why Vencly',
    h2: 'No slide decks and goodbyes.',
    subtext:
      'We don\'t produce strategy documents and leave. We\'re the team that rolls up its sleeves and delivers — with genuine accountability and an entrepreneurial perspective that comes from having been there.',
    items: [
      {
        title: 'Entrepreneurial instinct, not consultant detachment',
        desc: 'Vencly is led by a founder who has built companies from scratch, opened new markets and lived through the pivots. That shapes how we read your situation — and what we honestly believe is achievable.',
      },
      {
        title: 'Methodology grounded in practice',
        desc: 'More than 40 completed venture client projects, new market development in energy and infrastructure, innovation structures for corporations and public bodies. No generic frameworks — applied experience that has been tested in the field.',
      },
      {
        title: 'Honest when it matters most',
        desc: 'We will also tell you when a market opportunity isn\'t ready — or when Venture Clienting isn\'t the right instrument for your situation. We\'d rather have a short, honest conversation than a long, expensive project going nowhere.',
      },
    ],
  },
  references: {
    label: 'Case Studies',
    h2: 'Work that speaks for itself.',
    subtext:
      'Leading organisations trust Vencly for strategic new market development and Venture Clienting engagements.',
    caseTag: 'ENERGY · INFRASTRUCTURE',
    caseTitle: 'New Business Line: Geothermal Energy\nfor a Major German Energy Provider',
    caseText:
      'For a leading German energy provider, we developed the strategic and commercial viability of a new business line in renewable heat — covering technology assessment, market analysis and stakeholder engagement with municipal utilities.',
    caseMeta: [
      { label: 'Sector', value: 'Energy / Infrastructure' },
      { label: 'Duration', value: '3 months' },
      { label: 'Format', value: 'Strategic advisory mandate' },
    ],
    case2Tag: 'PUBLIC SECTOR · INNOVATION',
    case2Title: 'Building a Venture Client Unit\nfor a Public Sector Organisation',
    case2Text:
      'For a public sector organisation, we designed and built a structured Venture Client Unit — from process architecture and startup scouting methodology through to internal embedding. The outcome: a repeatable, compliance-ready process for piloting external innovation partners.',
    case2Meta: [
      { label: 'Sector', value: 'Public Sector' },
      { label: 'Duration', value: '2 months' },
      { label: 'Format', value: 'Build mandate & process design' },
    ],
    footnote: 'Further case studies available on request.',
    ctaTitle: 'Ready to explore your next market opportunity?',
    ctaSubtext: 'Start with a no-obligation introductory call. No pitch deck needed.',
    ctaButton: 'Book a Meeting',
  },
  factsheet: {
    title: 'Vencly in Two Pages',
    desc: 'Service overview, methodology and a reference case — concisely packaged for your next internal discussion.',
    button: 'Download PDF',
  },
  logoBar: {
    label: 'Trusted by leading organisations',
  },
  footer: {
    tagline:
      'Vencly brings entrepreneurial thinking to new market development — for corporations and mid-market companies that need to move faster than their competition.',
    navLabel: 'Navigation',
    legalLabel: 'Legal',
    impressum: 'Legal Notice',
    datenschutz: 'Privacy Policy',
    rights: 'All rights reserved.',
  },
}

const fr: Translations = {
  nav: {
    home: 'Accueil',
    services: 'Services',
    projects: 'Projets',
    contact: 'Contact',
    login: 'Connexion',
    cta: 'Prendre rendez-vous',
  },
  hero: {
    eyebrow: 'Développement stratégique de nouveaux relais de croissance',
    h1: 'L\'approche entrepreneuriale pour',
    h1Highlight: 'votre prochain axe de développement.',
    subline:
      'Nous apportons la rigueur des startups à votre prochain relais de croissance. Les startups construisent de nouveaux marchés en testant vite, en achetant intelligemment et en restant radicalement focalisées. Vencly transfère exactement cette logique aux grandes entreprises et aux ETI — sans perdre en exigence.',
    ctaPrimary: 'Prendre rendez-vous',
    ctaSecondary: 'Voir les cas clients',
    stats: [
      { value: '40+', label: 'Projets réalisés' },
      { value: '6 mois', label: 'Durée moy. de projet' },
      { value: '7', label: 'Secteurs prioritaires' },
    ],
  },
  valueProp: {
    label: 'Ce que Vencly apporte',
    h2: 'Penser comme une startup.',
    h2Highlight: 'Agir comme un leader du marché.',
    intro:
      'Ouvrir de nouveaux axes de développement comme le font les fondateurs : avec un minimum de structure, une vitesse maximale et la conviction de décider vite. Vencly apporte ce mindset entrepreneurial à votre groupe ou votre ETI.',
    items: [
      {
        title: 'Valider avant de déployer',
        desc: 'Pas de processus stratégique sur plusieurs mois. Nous testons rapidement les hypothèses de marché sur le terrain — avec de vraies données, de vrais clients, des résultats qui éclairent les décisions.',
      },
      {
        title: 'Acheter le meilleur plutôt que tout développer en interne',
        desc: 'Les startups s\'appuient sur le meilleur partenaire externe pour aller vite. C\'est précisément le principe du Venture Clienting — une approche structurée pour intégrer l\'innovation externe dans votre organisation.',
      },
      {
        title: 'De l\'idée au marché — à la vitesse d\'une startup',
        desc: 'Pas de comités de pilotage interminables. Vencly prend en charge la responsabilité opérationnelle et livre — rapidement, de façon mesurable, avec un impact concret.',
      },
      {
        title: 'Éprouvé dans les secteurs réglementés',
        desc: 'Énergie, infrastructures, secteur public : la logique startup ne connaît pas de frontières sectorielles — à condition de savoir l\'adapter. C\'est notre spécialité.',
      },
      {
        title: 'Une parole franche sur ce qui est faisable',
        desc: 'Nous vous disons aussi quand un axe de développement n\'est pas encore mûr. La confiance se construit par la transparence, pas par la complaisance.',
      },
    ],
  },
  features: {
    label: 'Services',
    h2: 'Trois périmètres. Une seule logique.',
    subtext:
      'Chacun de nos services suit le même principe issu de la culture startup : comprendre d\'abord, tester ensuite, puis passer à l\'échelle — jamais dans l\'ordre inverse.',
    items: [
      {
        title: 'Développement de nouveaux marchés',
        desc: 'Identifier de nouveaux marchés adjacents, développer des modèles économiques, piloter des tests de marché structurés — de la première hypothèse au modèle validé et finançable.',
        points: ['Évaluation marché & technologie', 'Développement du modèle économique', 'Validation & tests de marché'],
      },
      {
        title: 'Venture Clienting',
        desc: 'Intégrer des partenaires d\'innovation externes comme un fondateur choisit son premier prestataire : de façon ciblée, rapide et avec un mandat de test précis. Détection de startups, projets pilotes structurés, décision go/no-go en 90 jours.',
        points: ['Détection & mise en relation de startups', 'Projets pilotes structurés', 'Qualification des fournisseurs'],
      },
      {
        title: 'Exécution stratégique',
        desc: 'Pas la stratégie à la place de l\'exécution — les deux ensemble. Vencly prend en charge la responsabilité opérationnelle de projets sans portage interne clair : pilotage de projet, gestion des décideurs, documents d\'arbitrage.',
        points: ['Pilotage de projet & reporting', 'Gestion des décideurs et équipes', 'Animation d\'ateliers stratégiques'],
      },
    ],
  },
  whyUs: {
    label: 'Pourquoi Vencly',
    h2: 'Fini les stratégies de tiroir.',
    subtext:
      'Nous ne produisons pas de livrables que personne ne lit. Nous sommes l\'équipe qui retrousse ses manches et qui livre — avec une vraie responsabilité sur les résultats et un regard d\'entrepreneur, pas de consultant.',
    items: [
      {
        title: 'Le regard d\'un entrepreneur, pas la distance d\'un conseil',
        desc: 'Vencly est dirigé par un fondateur qui a lui-même créé des entreprises, ouvert de nouveaux marchés et traversé les itérations. Ce vécu façonne notre lecture de votre situation — et ce que nous estimons réellement atteignable.',
      },
      {
        title: 'Méthode et expérience terrain réunies',
        desc: 'Plus de 40 projets de Venture Clienting menés à terme, développement de nouveaux marchés dans l\'énergie et les infrastructures, structuration de l\'innovation pour des groupes et des collectivités. Aucune boîte à outils générique — de l\'expérience opérationnelle ancrée dans la réalité.',
      },
      {
        title: 'Transparents quand cela compte le plus',
        desc: 'Nous vous disons aussi quand un axe de développement n\'est pas encore mûr — ou quand le Venture Clienting n\'est pas le bon levier pour votre situation. Mieux vaut un échange court et honnête qu\'un long projet coûteux qui tourne à vide.',
      },
    ],
  },
  references: {
    label: 'Cas clients',
    h2: 'Des résultats concrets.',
    subtext:
      'Des organisations de premier plan font confiance à Vencly pour le développement stratégique de nouveaux marchés et leurs projets de Venture Clienting.',
    caseTag: 'ÉNERGIE · INFRASTRUCTURE',
    caseTitle: 'Nouveau relais de croissance : géothermie\npour un grand fournisseur d\'énergie allemand',
    caseText:
      'Pour un grand fournisseur d\'énergie allemand, nous avons étudié la viabilité stratégique et économique d\'un nouveau domaine dans la chaleur renouvelable — de l\'évaluation technologique et des analyses de marché jusqu\'à la concertation avec les services publics municipaux.',
    caseMeta: [
      { label: 'Secteur', value: 'Énergie / Infrastructure' },
      { label: 'Durée', value: '3 mois' },
      { label: 'Format', value: 'Mandat d\'accompagnement stratégique' },
    ],
    case2Tag: 'SECTEUR PUBLIC · INNOVATION',
    case2Title: 'Création d\'une Venture Client Unit\npour un organisme public',
    case2Text:
      'Pour un organisme public, nous avons conçu et mis en place une Venture Client Unit structurée — de l\'architecture des processus et de la méthodologie de détection de startups jusqu\'à l\'ancrage interne. Le résultat : un processus reproductible et conforme aux contraintes réglementaires pour tester des partenaires d\'innovation externes.',
    case2Meta: [
      { label: 'Secteur', value: 'Secteur public' },
      { label: 'Durée', value: '2 mois' },
      { label: 'Format', value: 'Mandat de création & conception de processus' },
    ],
    footnote: 'D\'autres cas clients disponibles sur demande.',
    ctaTitle: 'Prêt à explorer votre prochain relais de croissance ?',
    ctaSubtext: 'Commencez par un échange préliminaire sans engagement. Aucun pitch deck requis.',
    ctaButton: 'Prendre rendez-vous',
  },
  factsheet: {
    title: 'Vencly en deux pages',
    desc: 'Présentation des services, méthodologie et cas client — condensés pour votre prochain arbitrage interne.',
    button: 'Télécharger le PDF',
  },
  logoBar: {
    label: 'La confiance d\'organisations de premier plan',
  },
  footer: {
    tagline:
      'Vencly apporte l\'approche entrepreneuriale au développement de nouveaux marchés — pour les groupes et les ETI qui veulent agir plus vite que la concurrence.',
    navLabel: 'Navigation',
    legalLabel: 'Mentions légales',
    impressum: 'Mentions légales',
    datenschutz: 'Politique de confidentialité',
    rights: 'Tous droits réservés.',
  },
}

const es: Translations = {
  nav: {
    home: 'Inicio',
    services: 'Servicios',
    projects: 'Proyectos',
    contact: 'Contacto',
    login: 'Acceder',
    cta: 'Solicitar una llamada',
  },
  hero: {
    eyebrow: 'Desarrollo estratégico de nuevas líneas de negocio',
    h1: 'Mentalidad emprendedora para',
    h1Highlight: 'tu próxima línea de negocio.',
    subline:
      'Llevamos la lógica de las startups a tu próxima oportunidad de crecimiento. Las startups construyen nuevos mercados probando rápido, comprando con inteligencia y manteniéndose radicalmente enfocadas. Vencly transfiere exactamente esta lógica a grandes empresas y pymes — sin perder rigor.',
    ctaPrimary: 'Solicitar una llamada',
    ctaSecondary: 'Ver casos de éxito',
    stats: [
      { value: '40+', label: 'Proyectos realizados' },
      { value: '6 meses', label: 'Duración media' },
      { value: '7', label: 'Sectores clave' },
    ],
  },
  valueProp: {
    label: 'Lo que aporta Vencly',
    h2: 'Pensar como una startup.',
    h2Highlight: 'Ejecutar como líder del mercado.',
    intro:
      'Abrir nuevas líneas de negocio como lo hacen los fundadores: con la mínima estructura, la máxima velocidad y la convicción de tomar decisiones rápidas. Vencly lleva este mindset emprendedor a tu empresa o grupo.',
    items: [
      {
        title: 'Validar antes de escalar',
        desc: 'Sin procesos estratégicos de meses. Probamos hipótesis de mercado directamente sobre el terreno — con datos reales, clientes reales y resultados que orientan las decisiones.',
      },
      {
        title: 'Comprar al mejor en lugar de desarrollarlo todo internamente',
        desc: 'Las startups se apoyan en el mejor socio externo para lanzarse rápido. Eso es exactamente el Venture Clienting — una forma estructurada de integrar innovación externa en tu organización.',
      },
      {
        title: 'De la idea al mercado — a velocidad startup',
        desc: 'Sin reuniones interminables ni procesos eternos. Vencly asume la responsabilidad operativa y entrega — rápido, de forma medible, con impacto tangible.',
      },
      {
        title: 'Diseñado para sectores regulados',
        desc: 'Energía, infraestructuras, sector público: la lógica startup no tiene fronteras sectoriales — si sabes cómo adaptarla. Eso es lo que hacemos.',
      },
      {
        title: 'Claridad sobre lo que es viable',
        desc: 'También te decimos cuándo una línea de negocio no está aún madura. La confianza se construye con honestidad, no diciéndote lo que quieres oír.',
      },
    ],
  },
  features: {
    label: 'Servicios',
    h2: 'Tres áreas. Una sola lógica.',
    subtext:
      'Cada servicio que ofrecemos sigue el mismo principio de la cultura startup: entender primero, probar después, escalar al final — nunca al revés.',
    items: [
      {
        title: 'Desarrollo de nuevas líneas de negocio',
        desc: 'Identificar mercados adyacentes, desarrollar modelos de negocio, ejecutar pruebas de mercado estructuradas — desde la primera hipótesis hasta el modelo validado y listo para invertir.',
        points: ['Análisis de mercado y tecnología', 'Desarrollo del modelo de negocio', 'Validación y pruebas de mercado'],
      },
      {
        title: 'Venture Clienting',
        desc: 'Integrar socios de innovación externos como un fundador elige a su primer proveedor: de forma selectiva, ágil y con un mandato de prueba claro. Búsqueda de startups, proyectos piloto estructurados, decisión go/no-go en 90 días.',
        points: ['Búsqueda y selección de startups', 'Proyectos piloto estructurados', 'Homologación de proveedores'],
      },
      {
        title: 'Ejecución estratégica',
        desc: 'No estrategia en lugar de ejecución — sino las dos cosas a la vez. Vencly asume la responsabilidad operativa en proyectos sin un responsable interno claro: dirección de proyecto, gestión de stakeholders y documentos de decisión.',
        points: ['Dirección de proyecto y reporting', 'Gestión de stakeholders', 'Dinamización de talleres estratégicos'],
      },
    ],
  },
  whyUs: {
    label: 'Por qué Vencly',
    h2: 'Nada de estrategias de papel.',
    subtext:
      'No somos la consultora que entrega un informe y desaparece. Somos el equipo que se arremanga y ejecuta — con responsabilidad real sobre los resultados y una perspectiva de emprendedor, no de consultor.',
    items: [
      {
        title: 'Visión de emprendedor, no distancia de consultor',
        desc: 'Vencly está liderado por un fundador que ha construido empresas desde cero, abierto nuevos mercados y vivido en primera persona las iteraciones. Eso moldea cómo leemos tu situación — y qué creemos que es realmente alcanzable.',
      },
      {
        title: 'Metodología respaldada por experiencia real',
        desc: 'Más de 40 proyectos de Venture Clienting completados, desarrollo de nuevas líneas de negocio en el sector energético y de infraestructuras, estructuración de la innovación para corporaciones y organismos públicos. Sin marcos genéricos — experiencia operativa contrastada en el terreno.',
      },
      {
        title: 'Honestos cuando más importa',
        desc: 'También te decimos cuándo una línea de negocio no está aún madura — o cuándo el Venture Clienting no es el instrumento adecuado para tu caso. Preferimos una conversación corta y honesta a un proyecto largo y costoso que no lleva a ningún sitio.',
      },
    ],
  },
  references: {
    label: 'Casos de éxito',
    h2: 'Resultados que hablan por sí solos.',
    subtext:
      'Organizaciones líderes confían en Vencly para el desarrollo estratégico de nuevas líneas de negocio y sus proyectos de Venture Clienting.',
    caseTag: 'ENERGÍA · INFRAESTRUCTURA',
    caseTitle: 'Nueva línea de negocio: geotermia\npara un gran proveedor energético alemán',
    caseText:
      'Para un gran proveedor de energía alemán, analizamos la viabilidad estratégica y económica de una nueva línea de negocio en calor renovable — desde la evaluación tecnológica y el análisis de mercado hasta la interlocución con los servicios municipales.',
    caseMeta: [
      { label: 'Sector', value: 'Energía / Infraestructura' },
      { label: 'Duración', value: '3 meses' },
      { label: 'Formato', value: 'Colaboración estratégica' },
    ],
    case2Tag: 'SECTOR PÚBLICO · INNOVACIÓN',
    case2Title: 'Creación de una Venture Client Unit\npara un organismo público',
    case2Text:
      'Para un organismo público, diseñamos y construimos una Venture Client Unit estructurada — desde la arquitectura de procesos y la metodología de búsqueda de startups hasta su implantación interna. El resultado: un proceso replicable y adaptado al marco regulatorio para probar socios de innovación externos.',
    case2Meta: [
      { label: 'Sector', value: 'Sector público' },
      { label: 'Duración', value: '2 meses' },
      { label: 'Formato', value: 'Mandato de creación y diseño de procesos' },
    ],
    footnote: 'Más casos de éxito disponibles a petición.',
    ctaTitle: '¿Listo para explorar tu próxima línea de negocio?',
    ctaSubtext: 'Empieza con una primera conversación sin compromiso. Sin pitch deck.',
    ctaButton: 'Reservar una reunión',
  },
  factsheet: {
    title: 'Vencly en dos páginas',
    desc: 'Resumen de servicios, metodología y caso de éxito — en formato compacto para tu próxima reunión interna.',
    button: 'Descargar PDF',
  },
  logoBar: {
    label: 'La confianza de organizaciones líderes',
  },
  footer: {
    tagline:
      'Vencly lleva el pensamiento emprendedor al desarrollo de nuevas líneas de negocio — para empresas y pymes que necesitan moverse más rápido que su competencia.',
    navLabel: 'Navegación',
    legalLabel: 'Legal',
    impressum: 'Aviso legal',
    datenschutz: 'Política de privacidad',
    rights: 'Todos los derechos reservados.',
  },
}

export const translations: Record<Locale, Translations> = { de, en, fr, es }
