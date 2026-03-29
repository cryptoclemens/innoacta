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
    h1: 'Gründer-Denken für',
    h1Highlight: 'Ihr nächstes Geschäftsfeld.',
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
    case2Title: 'Aufbau einer Venture Client Unit\nfür einen öffentlichen Träger',
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
    cta: 'Schedule a Call',
  },
  hero: {
    eyebrow: 'Strategic Business Field Development',
    h1: 'Founder Thinking for',
    h1Highlight: 'Your Next Business Field.',
    subline:
      'We bring startup logic to your next business field. Startups build new markets by testing fast, buying smart and staying radically focused. Vencly transfers exactly this logic to corporations and mid-sized companies.',
    ctaPrimary: 'Schedule a Call',
    ctaSecondary: 'View Reference Projects',
    stats: [
      { value: '40+', label: 'Completed Projects' },
      { value: '6 mo.', label: 'Avg. Project Duration' },
      { value: '7', label: 'Focus Industries' },
    ],
  },
  valueProp: {
    label: 'What Vencly brings',
    h2: 'Think like a startup.',
    h2Highlight: 'Act like a market leader.',
    intro:
      'Building new business fields – the way founders do it: with minimal overhead, maximum speed and the courage to decide quickly. Vencly brings this mindset to your corporation or mid-sized company.',
    items: [
      {
        title: 'Validate instead of plan',
        desc: 'No months-long strategy process. We test business field hypotheses fast in the market – with real data, real customers, real results.',
      },
      {
        title: 'Buy smart instead of building everything yourself',
        desc: 'Startups buy the best provider in the market to launch fast. That\'s exactly what Venture Clienting is – and exactly what we bring to your company.',
      },
      {
        title: 'From idea to market – at startup speed',
        desc: 'No endless coordination loops. Vencly takes operational responsibility and delivers – fast, measurable, with real impact.',
      },
      {
        title: 'Works in regulated industries too',
        desc: 'Energy, infrastructure, public sector: startup logic knows no industry boundaries – if you know how to adapt it.',
      },
      {
        title: 'Honest about feasibility',
        desc: 'We also tell you when a business field is not yet ready. Trust is built through clarity, not through yes-saying.',
      },
    ],
  },
  features: {
    label: 'Services',
    h2: 'Three fields – one logic.',
    subtext:
      'All our services follow the same startup logic: first understand, then test, then scale – never the other way around.',
    items: [
      {
        title: 'Business Field Development',
        desc: 'Identify new markets, develop business models, accompany market testing – from the first hypothesis to the validated model.',
        points: ['Market & technology assessment', 'Business model development', 'Validation & market testing'],
      },
      {
        title: 'Venture Clienting',
        desc: 'Integrate external innovation partners the way a startup chooses its first service provider: targeted, fast, with a clear test mandate. Startup scouting, structured pilot projects, decision after 90 days.',
        points: ['Startup scouting & matching', 'Structured pilot projects', 'Supplier qualification'],
      },
      {
        title: 'Strategic Execution',
        desc: 'Not strategy instead of execution – but both. Vencly takes operational responsibility for projects that have no internal home: project management, stakeholder management, decision papers.',
        points: ['Project management & reporting', 'Stakeholder management', 'Workshop formats'],
      },
    ],
  },
  whyUs: {
    label: 'Why Vencly',
    h2: 'No concept carousel.',
    subtext:
      'We are not a consultant who creates concepts. We are the team that executes – with genuine implementation responsibility and an entrepreneurial perspective.',
    items: [
      {
        title: 'Entrepreneurial perspective, not consultant distance',
        desc: 'Vencly is led by a founder who has built companies, opened markets and lived through iterations. That shapes the view of your situation – and what is really achievable.',
      },
      {
        title: 'Method meets experience',
        desc: 'Over 40 completed venture client projects, business field development in the energy and infrastructure sector, innovation structures for corporations and municipalities. No generic toolbox – proven practice.',
      },
      {
        title: 'Honest about feasibility',
        desc: 'We also tell you when a business field is not yet mature – or when venture clienting is not the right instrument. Trust is built through clarity, not through yes-saying.',
      },
    ],
  },
  references: {
    label: 'References',
    h2: 'From the Field.',
    subtext:
      'Leading companies from the DACH region trust Vencly for strategic business field development and venture clienting projects.',
    caseTag: 'ENERGY · INFRASTRUCTURE',
    caseTitle: 'New Business Field: Geothermal Energy\nfor a German Energy Provider',
    caseText:
      'For a major German energy provider, we developed the strategic and economic viability of a new business field in renewable heat – from technology assessment and market analyses to stakeholder communication with municipal utilities.',
    caseMeta: [
      { label: 'Sector', value: 'Energy / Infrastructure' },
      { label: 'Duration', value: '3 months' },
      { label: 'Format', value: 'Strategic advisory mandate' },
    ],
    case2Tag: 'PUBLIC SECTOR · INNOVATION',
    case2Title: 'Building a Venture Client Unit\nfor a Public Organisation',
    case2Text:
      'For a public organisation, we built a structured Venture Client Unit – from process design and startup scouting methodology to internal anchoring. The result: a repeatable process for piloting external innovation partners within regulatory constraints.',
    case2Meta: [
      { label: 'Sector', value: 'Public Sector' },
      { label: 'Duration', value: '2 months' },
      { label: 'Format', value: 'Build mandate & process design' },
    ],
    footnote: 'Further references available on request.',
    ctaTitle: 'Ready for your next business field?',
    ctaSubtext: 'Start with a no-obligation introductory call. No pitch deck required.',
    ctaButton: 'Schedule a Meeting',
  },
  factsheet: {
    title: 'Vencly in Two Pages',
    desc: 'Service overview, methodology and reference project concisely summarised – for your next internal round.',
    button: 'Download PDF',
  },
  logoBar: {
    label: 'Trusted by leading companies',
  },
  footer: {
    tagline:
      'Vencly brings founder thinking to new business fields – for corporations and mid-sized companies that want to act faster than their competition.',
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
    eyebrow: 'Développement stratégique de nouveaux marchés',
    h1: 'La pensée entrepreneuriale pour',
    h1Highlight: 'votre prochain domaine.',
    subline:
      'Nous apportons la logique des startups à votre prochain domaine d\'activité. Les startups construisent de nouveaux marchés en testant vite, en achetant intelligemment et en restant radicalement focalisées. Vencly transfère exactement cette logique aux grandes entreprises et aux PME.',
    ctaPrimary: 'Prendre rendez-vous',
    ctaSecondary: 'Voir les projets de référence',
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
      'Construire de nouveaux domaines d\'activité – comme le font les fondateurs : avec un minimum de surcharge, une vitesse maximale et le courage de décider rapidement. Vencly apporte cette mentalité à votre groupe ou votre PME.',
    items: [
      {
        title: 'Valider plutôt que planifier',
        desc: 'Pas de processus stratégique de plusieurs mois. Nous testons rapidement les hypothèses de domaines d\'activité sur le marché – avec de vraies données, de vrais clients, de vrais résultats.',
      },
      {
        title: 'Acheter intelligemment plutôt que tout construire soi-même',
        desc: 'Les startups achètent le meilleur fournisseur du marché pour lancer rapidement. C\'est exactement ce qu\'est le Venture Clienting – et c\'est exactement ce que nous apportons à votre entreprise.',
      },
      {
        title: 'De l\'idée au marché – à la vitesse d\'une startup',
        desc: 'Pas de boucles de coordination interminables. Vencly prend la responsabilité opérationnelle et livre – vite, de façon mesurable, avec un vrai impact.',
      },
      {
        title: 'Fonctionne aussi dans les secteurs réglementés',
        desc: 'Énergie, infrastructures, secteur public : la logique startup ne connaît pas de frontières sectorielles – si on sait comment l\'adapter.',
      },
      {
        title: 'Honnêteté sur la faisabilité',
        desc: 'Nous disons aussi quand un domaine d\'activité n\'est pas encore mûr. La confiance naît de la clarté, pas du oui systématique.',
      },
    ],
  },
  features: {
    label: 'Services',
    h2: 'Trois domaines – une logique.',
    subtext:
      'Tous nos services suivent la même logique startup : d\'abord comprendre, puis tester, puis scaler – jamais dans l\'autre sens.',
    items: [
      {
        title: 'Développement de nouveaux marchés',
        desc: 'Identifier de nouveaux marchés, développer des modèles économiques, accompagner les tests de marché – de la première hypothèse au modèle validé.',
        points: ['Évaluation marché & technologie', 'Développement du modèle économique', 'Validation & tests de marché'],
      },
      {
        title: 'Venture Clienting',
        desc: 'Intégrer des partenaires d\'innovation externes comme une startup choisit son premier prestataire : de façon ciblée, rapide, avec un mandat de test clair. Scouting de startups, projets pilotes structurés, décision après 90 jours.',
        points: ['Scouting & matching de startups', 'Projets pilotes structurés', 'Qualification des fournisseurs'],
      },
      {
        title: 'Exécution stratégique',
        desc: 'Pas la stratégie au lieu de l\'exécution – mais les deux. Vencly prend la responsabilité opérationnelle de projets qui n\'ont pas de foyer interne : gestion de projet, gestion des parties prenantes, documents de décision.',
        points: ['Gestion de projet & reporting', 'Gestion des parties prenantes', 'Ateliers & formats de décision'],
      },
    ],
  },
  whyUs: {
    label: 'Pourquoi Vencly',
    h2: 'Pas de carrousel de concepts.',
    subtext:
      'Nous ne sommes pas un consultant qui crée des concepts. Nous sommes l\'équipe qui exécute – avec une vraie responsabilité de mise en œuvre et une vision entrepreneuriale.',
    items: [
      {
        title: 'Perspective entrepreneuriale, pas de distance de consultant',
        desc: 'Vencly est dirigé par un fondateur qui a lui-même créé des entreprises, ouvert des marchés et vécu des itérations. Cela façonne le regard porté sur votre situation – et sur ce qui est vraiment réalisable.',
      },
      {
        title: 'Méthode et expérience réunies',
        desc: 'Plus de 40 projets de Venture Clienting réalisés, développement de domaines d\'activité dans le secteur de l\'énergie et des infrastructures, structures d\'innovation pour des groupes et des communes. Pas de boîte à outils générique – de la pratique éprouvée.',
      },
      {
        title: 'Honnêteté sur la faisabilité',
        desc: 'Nous disons aussi quand un domaine d\'activité n\'est pas encore mûr – ou quand le Venture Clienting n\'est pas le bon outil. La confiance naît de la clarté, pas du oui systématique.',
      },
    ],
  },
  references: {
    label: 'Références',
    h2: 'Du terrain.',
    subtext:
      'Des entreprises de premier plan de la région DACH font confiance à Vencly pour le développement stratégique de nouveaux domaines d\'activité et les projets de Venture Clienting.',
    caseTag: 'ÉNERGIE · INFRASTRUCTURE',
    caseTitle: 'Nouveau domaine : géothermie\npour un fournisseur d\'énergie allemand',
    caseText:
      'Pour un grand fournisseur d\'énergie allemand, nous avons développé la viabilité stratégique et économique d\'un nouveau domaine d\'activité dans la chaleur renouvelable – de l\'évaluation technologique aux analyses de marché jusqu\'à la communication avec les services publics municipaux.',
    caseMeta: [
      { label: 'Secteur', value: 'Énergie / Infrastructure' },
      { label: 'Durée', value: '3 mois' },
      { label: 'Format', value: 'Mandat d\'accompagnement stratégique' },
    ],
    case2Tag: 'SECTEUR PUBLIC · INNOVATION',
    case2Title: 'Création d\'une Venture Client Unit\npour un organisme public',
    case2Text:
      'Pour un organisme public, nous avons mis en place une Venture Client Unit structurée – de la conception des processus et de la méthodologie de scouting de startups jusqu\'à l\'ancrage interne. Le résultat : un processus reproductible pour tester des partenaires d\'innovation externes dans un cadre réglementaire.',
    case2Meta: [
      { label: 'Secteur', value: 'Secteur public' },
      { label: 'Durée', value: '2 mois' },
      { label: 'Format', value: 'Mandat de création & conception de processus' },
    ],
    footnote: 'D\'autres références disponibles sur demande.',
    ctaTitle: 'Prêt pour votre prochain domaine d\'activité ?',
    ctaSubtext: 'Commencez par un entretien préliminaire sans engagement. Aucun pitch deck requis.',
    ctaButton: 'Prendre rendez-vous',
  },
  factsheet: {
    title: 'Vencly en deux pages',
    desc: 'Présentation des services, méthodologie et projet de référence résumés de manière concise – pour votre prochaine réunion interne.',
    button: 'Télécharger le PDF',
  },
  logoBar: {
    label: 'La confiance des grandes entreprises',
  },
  footer: {
    tagline:
      'Vencly apporte la pensée entrepreneuriale aux nouveaux domaines d\'activité – pour les grandes entreprises et les PME qui veulent agir plus vite que leur concurrence.',
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
    cta: 'Concertar una cita',
  },
  hero: {
    eyebrow: 'Desarrollo estratégico de nuevos mercados',
    h1: 'Pensamiento emprendedor para',
    h1Highlight: 'tu próximo campo de negocio.',
    subline:
      'Traemos la lógica de las startups a tu próximo campo de negocio. Las startups construyen nuevos mercados probando rápido, comprando con inteligencia y manteniéndose radicalmente enfocadas. Vencly transfiere exactamente esta lógica a grandes empresas y pymes.',
    ctaPrimary: 'Concertar una cita',
    ctaSecondary: 'Ver proyectos de referencia',
    stats: [
      { value: '40+', label: 'Proyectos realizados' },
      { value: '6 meses', label: 'Duración media' },
      { value: '7', label: 'Sectores clave' },
    ],
  },
  valueProp: {
    label: 'Lo que aporta Vencly',
    h2: 'Pensar como una startup.',
    h2Highlight: 'Actuar como líder del mercado.',
    intro:
      'Construir nuevos campos de negocio – como lo hacen los fundadores: con mínimos costes generales, máxima velocidad y el coraje de decidir rápido. Vencly trae esta mentalidad a tu empresa o grupo.',
    items: [
      {
        title: 'Validar en lugar de planificar',
        desc: 'Sin procesos estratégicos de meses. Probamos hipótesis de campos de negocio rápidamente en el mercado – con datos reales, clientes reales, resultados reales.',
      },
      {
        title: 'Comprar con inteligencia en lugar de construirlo todo',
        desc: 'Las startups compran al mejor proveedor del mercado para lanzarse rápido. Eso es exactamente el Venture Clienting – y eso es exactamente lo que traemos a tu empresa.',
      },
      {
        title: 'De la idea al mercado – a velocidad startup',
        desc: 'Sin bucles de coordinación interminables. Vencly asume la responsabilidad operativa y entrega – rápido, medible, con impacto real.',
      },
      {
        title: 'Funciona también en sectores regulados',
        desc: 'Energía, infraestructuras, sector público: la lógica startup no conoce fronteras sectoriales – si sabes cómo adaptarla.',
      },
      {
        title: 'Honestidad sobre la viabilidad',
        desc: 'También decimos cuándo un campo de negocio aún no está maduro. La confianza se construye con claridad, no con el sí fácil.',
      },
    ],
  },
  features: {
    label: 'Servicios',
    h2: 'Tres áreas – una lógica.',
    subtext:
      'Todos nuestros servicios siguen la misma lógica startup: primero entender, luego probar, luego escalar – nunca al revés.',
    items: [
      {
        title: 'Desarrollo de nuevos mercados',
        desc: 'Identificar nuevos mercados, desarrollar modelos de negocio, acompañar pruebas de mercado – desde la primera hipótesis hasta el modelo validado.',
        points: ['Evaluación de mercado y tecnología', 'Desarrollo del modelo de negocio', 'Validación y pruebas de mercado'],
      },
      {
        title: 'Venture Clienting',
        desc: 'Integrar socios de innovación externos como una startup elige a su primer proveedor: de forma selectiva, rápida, con un mandato de prueba claro. Scouting de startups, proyectos piloto estructurados, decisión tras 90 días.',
        points: ['Scouting y matching de startups', 'Proyectos piloto estructurados', 'Cualificación de proveedores'],
      },
      {
        title: 'Ejecución estratégica',
        desc: 'No estrategia en lugar de ejecución – sino ambas. Vencly asume la responsabilidad operativa en proyectos que no tienen hogar interno: gestión de proyectos, gestión de partes interesadas, documentos de decisión.',
        points: ['Gestión de proyectos y reporting', 'Gestión de partes interesadas', 'Talleres y formatos de decisión'],
      },
    ],
  },
  whyUs: {
    label: 'Por qué Vencly',
    h2: 'Sin carrusel de conceptos.',
    subtext:
      'No somos un consultor que crea conceptos. Somos el equipo que ejecuta – con verdadera responsabilidad de implementación y perspectiva emprendedora.',
    items: [
      {
        title: 'Perspectiva emprendedora, no distancia de consultor',
        desc: 'Vencly está liderado por un fundador que ha construido empresas, abierto mercados y vivido iteraciones. Eso moldea la visión de tu situación – y de lo que es realmente alcanzable.',
      },
      {
        title: 'Método y experiencia juntos',
        desc: 'Más de 40 proyectos de Venture Clienting realizados, desarrollo de campos de negocio en el sector energético e infraestructuras, estructuras de innovación para corporaciones y municipios. Sin caja de herramientas genérica – práctica demostrada.',
      },
      {
        title: 'Honestidad sobre la viabilidad',
        desc: 'También decimos cuándo un campo de negocio no está aún maduro – o cuándo el Venture Clienting no es el instrumento adecuado. La confianza se construye con claridad, no con el sí fácil.',
      },
    ],
  },
  references: {
    label: 'Referencias',
    h2: 'De la práctica.',
    subtext:
      'Empresas líderes de la región DACH confían en Vencly para el desarrollo estratégico de nuevos campos de negocio y proyectos de Venture Clienting.',
    caseTag: 'ENERGÍA · INFRAESTRUCTURA',
    caseTitle: 'Nuevo campo: geotermia\npara un proveedor de energía alemán',
    caseText:
      'Para un gran proveedor de energía alemán, desarrollamos la viabilidad estratégica y económica de un nuevo campo de negocio en calor renovable – desde la evaluación tecnológica y análisis de mercado hasta la comunicación con servicios municipales.',
    caseMeta: [
      { label: 'Sector', value: 'Energía / Infraestructura' },
      { label: 'Duración', value: '3 meses' },
      { label: 'Formato', value: 'Mandato de acompañamiento estratégico' },
    ],
    case2Tag: 'SECTOR PÚBLICO · INNOVACIÓN',
    case2Title: 'Creación de una Venture Client Unit\npara un organismo público',
    case2Text:
      'Para un organismo público, construimos una Venture Client Unit estructurada – desde el diseño de procesos y la metodología de scouting de startups hasta su implantación interna. El resultado: un proceso replicable para probar socios de innovación externos dentro de los marcos regulatorios.',
    case2Meta: [
      { label: 'Sector', value: 'Sector público' },
      { label: 'Duración', value: '2 meses' },
      { label: 'Formato', value: 'Mandato de creación y diseño de procesos' },
    ],
    footnote: 'Más referencias disponibles bajo solicitud.',
    ctaTitle: '¿Listo para tu próximo campo de negocio?',
    ctaSubtext: 'Empieza con una primera conversación sin compromiso. No se necesita pitch deck.',
    ctaButton: 'Reservar una cita',
  },
  factsheet: {
    title: 'Vencly en dos páginas',
    desc: 'Resumen de servicios, metodología y proyecto de referencia en formato compacto – para tu próxima ronda interna.',
    button: 'Descargar PDF',
  },
  logoBar: {
    label: 'La confianza de empresas líderes',
  },
  footer: {
    tagline:
      'Vencly lleva el pensamiento emprendedor a nuevos campos de negocio – para empresas y pymes que quieren actuar más rápido que su competencia.',
    navLabel: 'Navegación',
    legalLabel: 'Legal',
    impressum: 'Aviso legal',
    datenschutz: 'Política de privacidad',
    rights: 'Todos los derechos reservados.',
  },
}

export const translations: Record<Locale, Translations> = { de, en, fr, es }
