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
    projects: 'Projekte',
    contact: 'Kontakt',
    login: 'Login',
    cta: 'Erstgespräch vereinbaren',
  },
  hero: {
    eyebrow: 'Strategische Geschäftsfeldentwicklung',
    h1: 'Neue Geschäftsfelder entwickeln –',
    h1Highlight: 'bevor es andere tun.',
    subline:
      'Vencly begleitet Konzerne und den Mittelstand dabei, neue Märkte zu identifizieren, zu bewerten und operativ zu erschließen. Kein Konzept-Karussell. Kein Innovations-Theater. Sondern ein Partner, der selbst Unternehmer ist.',
    ctaPrimary: 'Erstgespräch vereinbaren',
    ctaSecondary: 'Referenzprojekte ansehen',
  },
  valueProp: {
    label: 'Was Vencly einbringt',
    h2: 'Drei Leistungsfelder –',
    h2Highlight: 'eine Umsetzungslogik',
    intro:
      'Wir begleiten Unternehmen von der Potenzialanalyse bis zur operativen Erschließung neuer Geschäftsfelder – mit unternehmerischem Blick und erprobter Methodik.',
    items: [
      {
        title: 'Geschäftsfeldentwicklung',
        desc: 'Neue Märkte identifizieren, Geschäftsmodelle validieren, Markterprobung begleiten – von der Hypothese zum tragfähigen Modell.',
      },
      {
        title: 'Venture Clienting',
        desc: 'Externe Innovationspartner gezielt einbinden: Startup-Scouting, strukturierte Pilotprojekte, klarer Entscheidungspunkt nach 90 Tagen.',
      },
      {
        title: 'Strategische Umsetzung',
        desc: 'Projektsteuerung, Stakeholder-Management und Workshop-Formate für Vorhaben, die intern keine Heimat haben.',
      },
      {
        title: 'Funktioniert in regulierten Branchen',
        desc: 'Energie, Infrastruktur, öffentliche Hand: Wir kennen die Rahmenbedingungen – und arbeiten innerhalb davon.',
      },
      {
        title: 'Ehrlichkeit über Machbarkeit',
        desc: 'Wir sagen auch, wenn ein Geschäftsfeld noch nicht reif ist. Vertrauen entsteht durch Klarheit, nicht durch Ja-Sagen.',
      },
    ],
  },
  features: {
    label: 'Leistungen',
    h2: 'Unsere Leistungsfelder',
    subtext:
      'Von der strategischen Analyse bis zur operativen Umsetzung – Vencly übernimmt Verantwortung über den gesamten Entwicklungsprozess.',
    items: [
      {
        title: 'Geschäftsfeldentwicklung',
        desc: 'Neue Märkte, neue Technologien, neue Wertschöpfung – von der Potenzialanalyse über das Geschäftsmodell bis zur Markterprobung. Für Konzerne, die diversifizieren wollen, und Mittelständler, die den nächsten Wachstumsschritt planen.',
        points: ['Markt- & Technologiebewertung', 'Geschäftsmodell-Entwicklung', 'Validierung & Markterprobung'],
      },
      {
        title: 'Venture Clienting & Startup-Integration',
        desc: 'Externe Innovationspartner gezielt einbinden: Startup-Scouting, strukturierte Pilotprojekte, Lieferantenqualifizierung. Schnell, risikokontrolliert, mit klarem Entscheidungspunkt.',
        points: ['Startup-Scouting & Matching', 'Strukturierte Pilotprojekte (90 Tage)', 'Lieferantenqualifizierung'],
      },
      {
        title: 'Strategische Begleitung & Umsetzung',
        desc: 'Nicht Strategie statt Umsetzung – sondern beides. Vencly übernimmt operative Verantwortung in Projekten, die intern keine Heimat haben.',
        points: ['Projektsteuerung & Reporting', 'Stakeholder-Management', 'Workshop-Formate & Entscheidungsvorlagen'],
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
        desc: 'Vencly wird von einem Gründer geführt, der selbst Unternehmen aufgebaut, gescheitert und erfolgreich repositioniert hat. Das prägt den Blick auf Ihre Situation.',
      },
      {
        title: 'Methode trifft Erfahrung',
        desc: 'Über 40 realisierte Venture-Client-Projekte, Transformationsarbeit in der Energie- und Infrastrukturbranche, Aufbau von Innovationsstrukturen in Konzernen und Kommunen. Keine generische Toolbox.',
      },
      {
        title: 'Ehrlichkeit über Machbarkeit',
        desc: 'Wir sagen auch, wenn ein Geschäftsfeld noch nicht reif ist – oder wenn Venture Clienting nicht das richtige Instrument ist. Vertrauen entsteht durch Klarheit, nicht durch Ja-Sagen.',
      },
    ],
  },
  references: {
    label: 'Referenzen',
    h2: 'Aus der Praxis',
    subtext:
      'Namhafte Unternehmen aus der DACH-Region vertrauen auf Vencly für strategische Geschäftsfeldentwicklung und Venture-Clienting-Projekte.',
    caseTag: 'ENERGIE · INFRASTRUKTUR',
    caseTitle: 'Neues Geschäftsfeld Tiefengeothermie\nfür einen deutschen Energieversorger',
    caseText:
      'Für einen großen deutschen Energieversorger haben wir die strategische und wirtschaftliche Tragfähigkeit eines neuen Geschäftsfelds im Bereich erneuerbare Wärme entwickelt – von der Technologiebewertung über Marktanalysen bis zur Stakeholder-Kommunikation mit kommunalen Versorgern.',
    caseMeta: [
      { label: 'Branche', value: 'Energie / Infrastruktur' },
      { label: 'Laufzeit', value: '6 Monate' },
      { label: 'Format', value: 'Strategisches Begleitmandat' },
    ],
    footnote: 'Weitere Referenzen auf Anfrage.',
    ctaTitle: 'Bereit für das nächste Geschäftsfeld?',
    ctaSubtext: 'Starten Sie mit einem unverbindlichen Erstgespräch.',
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
      'Vencly begleitet Unternehmen dabei, neue Geschäftsfelder zu entwickeln und zu erschließen – mit unternehmerischem Blick, erprobter Methodik und echter Umsetzungsverantwortung.',
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
    projects: 'Projects',
    contact: 'Contact',
    login: 'Login',
    cta: 'Schedule a Call',
  },
  hero: {
    eyebrow: 'Strategic Business Field Development',
    h1: 'Develop new business fields –',
    h1Highlight: 'before others do.',
    subline:
      'Vencly guides corporations and mid-sized companies in identifying, evaluating and operationally developing new markets. No concept carousel. No innovation theatre. Just a partner who is an entrepreneur themselves.',
    ctaPrimary: 'Schedule a Call',
    ctaSecondary: 'View Reference Projects',
  },
  valueProp: {
    label: 'What Vencly brings',
    h2: 'Three service areas –',
    h2Highlight: 'one execution logic',
    intro:
      'We accompany companies from potential analysis to the operational development of new business fields – with an entrepreneurial perspective and proven methodology.',
    items: [
      {
        title: 'Business Field Development',
        desc: 'Identify new markets, validate business models, accompany market testing – from hypothesis to viable model.',
      },
      {
        title: 'Venture Clienting',
        desc: 'Integrate external innovation partners strategically: startup scouting, structured pilot projects, clear decision point after 90 days.',
      },
      {
        title: 'Strategic Execution',
        desc: 'Project management, stakeholder management and workshop formats for initiatives that have no internal home.',
      },
      {
        title: 'Works in regulated industries',
        desc: 'Energy, infrastructure, public sector: we know the regulatory framework – and operate within it.',
      },
      {
        title: 'Honest about feasibility',
        desc: 'We also tell you when a business field is not yet ready. Trust is built through clarity, not through yes-saying.',
      },
    ],
  },
  features: {
    label: 'Services',
    h2: 'Our Service Areas',
    subtext:
      'From strategic analysis to operational execution – Vencly takes responsibility throughout the entire development process.',
    items: [
      {
        title: 'Business Field Development',
        desc: 'New markets, new technologies, new value creation – from potential analysis through the business model to market testing. For corporations looking to diversify and mid-sized companies planning their next growth step.',
        points: ['Market & technology assessment', 'Business model development', 'Validation & market testing'],
      },
      {
        title: 'Venture Clienting & Startup Integration',
        desc: 'Integrate external innovation partners strategically: startup scouting, structured pilot projects, supplier qualification. Fast, risk-controlled, with a clear decision point.',
        points: ['Startup scouting & matching', 'Structured pilot projects (90 days)', 'Supplier qualification'],
      },
      {
        title: 'Strategic Coaching & Execution',
        desc: 'Not strategy instead of execution – but both. Vencly takes operational responsibility for projects that have no internal home.',
        points: ['Project management & reporting', 'Stakeholder management', 'Workshop formats & decision papers'],
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
        desc: 'Vencly is led by a founder who has built companies themselves, failed and successfully repositioned. That shapes the view of your situation.',
      },
      {
        title: 'Method meets experience',
        desc: 'Over 40 completed venture client projects, transformation work in the energy and infrastructure sector, building innovation structures in corporations and municipalities. No generic toolbox.',
      },
      {
        title: 'Honest about feasibility',
        desc: 'We also tell you when a business field is not yet mature – or when venture clienting is not the right instrument. Trust is built through clarity, not through yes-saying.',
      },
    ],
  },
  references: {
    label: 'References',
    h2: 'From the Field',
    subtext:
      'Leading companies from the DACH region trust Vencly for strategic business field development and venture clienting projects.',
    caseTag: 'ENERGY · INFRASTRUCTURE',
    caseTitle: 'New Business Field: Deep Geothermal Energy\nfor a German Energy Provider',
    caseText:
      'For a major German energy provider, we developed the strategic and economic viability of a new business field in renewable heat – from technology assessment and market analyses to stakeholder communication with municipal utilities.',
    caseMeta: [
      { label: 'Sector', value: 'Energy / Infrastructure' },
      { label: 'Duration', value: '6 months' },
      { label: 'Format', value: 'Strategic advisory mandate' },
    ],
    footnote: 'Further references available on request.',
    ctaTitle: 'Ready for your next business field?',
    ctaSubtext: 'Start with a no-obligation introductory call.',
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
      'Vencly helps companies develop and open up new business fields – with an entrepreneurial perspective, proven methodology and genuine implementation responsibility.',
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
    projects: 'Projets',
    contact: 'Contact',
    login: 'Connexion',
    cta: 'Prendre rendez-vous',
  },
  hero: {
    eyebrow: 'Développement stratégique de nouveaux marchés',
    h1: 'Développez de nouveaux marchés –',
    h1Highlight: 'avant que d\'autres ne le fassent.',
    subline:
      'Vencly accompagne les grandes entreprises et les PME dans l\'identification, l\'évaluation et le développement opérationnel de nouveaux marchés. Pas de carrousel de concepts. Pas de théâtre de l\'innovation. Un partenaire qui est lui-même entrepreneur.',
    ctaPrimary: 'Prendre rendez-vous',
    ctaSecondary: 'Voir les projets de référence',
  },
  valueProp: {
    label: 'Ce que Vencly apporte',
    h2: 'Trois domaines de service –',
    h2Highlight: 'une logique d\'exécution',
    intro:
      'Nous accompagnons les entreprises de l\'analyse du potentiel jusqu\'au développement opérationnel de nouveaux domaines d\'activité – avec une vision entrepreneuriale et une méthodologie éprouvée.',
    items: [
      {
        title: 'Développement de nouveaux marchés',
        desc: 'Identifier de nouveaux marchés, valider des modèles économiques, accompagner les tests de marché – de l\'hypothèse au modèle viable.',
      },
      {
        title: 'Venture Clienting',
        desc: 'Intégrer stratégiquement des partenaires d\'innovation externes : scouting de startups, projets pilotes structurés, point de décision clair après 90 jours.',
      },
      {
        title: 'Exécution stratégique',
        desc: 'Gestion de projet, gestion des parties prenantes et formats d\'ateliers pour les initiatives sans foyer interne.',
      },
      {
        title: 'Adapté aux secteurs réglementés',
        desc: 'Énergie, infrastructures, secteur public : nous connaissons le cadre réglementaire – et travaillons à l\'intérieur.',
      },
      {
        title: 'Honnêteté sur la faisabilité',
        desc: 'Nous disons aussi quand un domaine d\'activité n\'est pas encore mûr. La confiance naît de la clarté, pas du oui systématique.',
      },
    ],
  },
  features: {
    label: 'Services',
    h2: 'Nos domaines de service',
    subtext:
      'De l\'analyse stratégique à l\'exécution opérationnelle – Vencly prend en charge l\'ensemble du processus de développement.',
    items: [
      {
        title: 'Développement de nouveaux marchés',
        desc: 'Nouveaux marchés, nouvelles technologies, nouvelle création de valeur – de l\'analyse du potentiel au modèle économique jusqu\'aux tests de marché. Pour les groupes qui souhaitent se diversifier et les PME qui planifient leur prochaine étape de croissance.',
        points: ['Évaluation marché & technologie', 'Développement du modèle économique', 'Validation & tests de marché'],
      },
      {
        title: 'Venture Clienting & intégration de startups',
        desc: 'Intégrer stratégiquement des partenaires d\'innovation externes : scouting de startups, projets pilotes structurés, qualification des fournisseurs. Rapide, contrôlé en termes de risques, avec un point de décision clair.',
        points: ['Scouting & matching de startups', 'Projets pilotes structurés (90 jours)', 'Qualification des fournisseurs'],
      },
      {
        title: 'Accompagnement stratégique & exécution',
        desc: 'Pas la stratégie au lieu de l\'exécution – mais les deux. Vencly prend la responsabilité opérationnelle de projets qui n\'ont pas de foyer interne.',
        points: ['Gestion de projet & reporting', 'Gestion des parties prenantes', 'Ateliers & documents de décision'],
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
        desc: 'Vencly est dirigé par un fondateur qui a lui-même créé des entreprises, échoué et réussi à se repositionner. Cela façonne le regard porté sur votre situation.',
      },
      {
        title: 'Méthode et expérience réunies',
        desc: 'Plus de 40 projets de Venture Clienting réalisés, travail de transformation dans le secteur de l\'énergie et des infrastructures, construction de structures d\'innovation dans des groupes et des communes. Pas de boîte à outils générique.',
      },
      {
        title: 'Honnêteté sur la faisabilité',
        desc: 'Nous disons aussi quand un domaine d\'activité n\'est pas encore mûr – ou quand le Venture Clienting n\'est pas le bon outil. La confiance naît de la clarté, pas du oui systématique.',
      },
    ],
  },
  references: {
    label: 'Références',
    h2: 'Du terrain',
    subtext:
      'Des entreprises de premier plan de la région DACH font confiance à Vencly pour le développement stratégique de nouveaux domaines d\'activité et les projets de Venture Clienting.',
    caseTag: 'ÉNERGIE · INFRASTRUCTURE',
    caseTitle: 'Nouveau domaine : géothermie profonde\npour un fournisseur d\'énergie allemand',
    caseText:
      'Pour un grand fournisseur d\'énergie allemand, nous avons développé la viabilité stratégique et économique d\'un nouveau domaine d\'activité dans la chaleur renouvelable – de l\'évaluation technologique aux analyses de marché jusqu\'à la communication avec les services publics municipaux.',
    caseMeta: [
      { label: 'Secteur', value: 'Énergie / Infrastructure' },
      { label: 'Durée', value: '6 mois' },
      { label: 'Format', value: 'Mandat d\'accompagnement stratégique' },
    ],
    footnote: 'D\'autres références disponibles sur demande.',
    ctaTitle: 'Prêt pour votre prochain domaine d\'activité ?',
    ctaSubtext: 'Commencez par un entretien préliminaire sans engagement.',
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
      'Vencly aide les entreprises à développer et à explorer de nouveaux domaines d\'activité – avec une vision entrepreneuriale, une méthodologie éprouvée et une vraie responsabilité d\'exécution.',
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
    projects: 'Proyectos',
    contact: 'Contacto',
    login: 'Acceder',
    cta: 'Concertar una cita',
  },
  hero: {
    eyebrow: 'Desarrollo estratégico de nuevos mercados',
    h1: 'Desarrolla nuevos mercados –',
    h1Highlight: 'antes que los demás.',
    subline:
      'Vencly acompaña a grandes empresas y pymes en la identificación, evaluación y desarrollo operativo de nuevos mercados. Sin carrusel de conceptos. Sin teatro de innovación. Un socio que es él mismo empresario.',
    ctaPrimary: 'Concertar una cita',
    ctaSecondary: 'Ver proyectos de referencia',
  },
  valueProp: {
    label: 'Lo que aporta Vencly',
    h2: 'Tres áreas de servicio –',
    h2Highlight: 'una lógica de ejecución',
    intro:
      'Acompañamos a las empresas desde el análisis de potencial hasta el desarrollo operativo de nuevos campos de negocio – con una perspectiva emprendedora y una metodología probada.',
    items: [
      {
        title: 'Desarrollo de nuevos mercados',
        desc: 'Identificar nuevos mercados, validar modelos de negocio, acompañar pruebas de mercado – desde la hipótesis al modelo viable.',
      },
      {
        title: 'Venture Clienting',
        desc: 'Integrar socios de innovación externos de forma estratégica: scouting de startups, proyectos piloto estructurados, punto de decisión claro tras 90 días.',
      },
      {
        title: 'Ejecución estratégica',
        desc: 'Gestión de proyectos, gestión de partes interesadas y formatos de taller para iniciativas que no tienen hogar interno.',
      },
      {
        title: 'Funciona en sectores regulados',
        desc: 'Energía, infraestructuras, sector público: conocemos el marco regulatorio – y trabajamos dentro de él.',
      },
      {
        title: 'Honestidad sobre la viabilidad',
        desc: 'También decimos cuándo un campo de negocio aún no está maduro. La confianza se construye con claridad, no con el sí fácil.',
      },
    ],
  },
  features: {
    label: 'Servicios',
    h2: 'Nuestras áreas de servicio',
    subtext:
      'Del análisis estratégico a la ejecución operativa – Vencly asume la responsabilidad a lo largo de todo el proceso de desarrollo.',
    items: [
      {
        title: 'Desarrollo de nuevos mercados',
        desc: 'Nuevos mercados, nuevas tecnologías, nueva creación de valor – del análisis de potencial al modelo de negocio y las pruebas de mercado. Para grupos que quieren diversificarse y pymes que planifican su próximo paso de crecimiento.',
        points: ['Evaluación de mercado y tecnología', 'Desarrollo del modelo de negocio', 'Validación y pruebas de mercado'],
      },
      {
        title: 'Venture Clienting e integración de startups',
        desc: 'Integrar socios de innovación externos de forma estratégica: scouting de startups, proyectos piloto estructurados, cualificación de proveedores. Rápido, con riesgo controlado y un punto de decisión claro.',
        points: ['Scouting y matching de startups', 'Proyectos piloto estructurados (90 días)', 'Cualificación de proveedores'],
      },
      {
        title: 'Acompañamiento estratégico y ejecución',
        desc: 'No estrategia en lugar de ejecución – sino ambas. Vencly asume la responsabilidad operativa en proyectos que no tienen hogar interno.',
        points: ['Gestión de proyectos y reporting', 'Gestión de partes interesadas', 'Talleres y documentos de decisión'],
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
        desc: 'Vencly está liderado por un fundador que ha construido empresas, fracasado y reposicionado con éxito. Eso moldea la visión de tu situación.',
      },
      {
        title: 'Método y experiencia juntos',
        desc: 'Más de 40 proyectos de Venture Clienting realizados, trabajo de transformación en el sector energético e infraestructuras, creación de estructuras de innovación en corporaciones y municipios. Sin caja de herramientas genérica.',
      },
      {
        title: 'Honestidad sobre la viabilidad',
        desc: 'También decimos cuándo un campo de negocio no está aún maduro – o cuándo el Venture Clienting no es el instrumento adecuado. La confianza se construye con claridad, no con el sí fácil.',
      },
    ],
  },
  references: {
    label: 'Referencias',
    h2: 'De la práctica',
    subtext:
      'Empresas líderes de la región DACH confían en Vencly para el desarrollo estratégico de nuevos campos de negocio y proyectos de Venture Clienting.',
    caseTag: 'ENERGÍA · INFRAESTRUCTURA',
    caseTitle: 'Nuevo campo: geotermia profunda\npara un proveedor de energía alemán',
    caseText:
      'Para un gran proveedor de energía alemán, desarrollamos la viabilidad estratégica y económica de un nuevo campo de negocio en calor renovable – desde la evaluación tecnológica y análisis de mercado hasta la comunicación con servicios municipales.',
    caseMeta: [
      { label: 'Sector', value: 'Energía / Infraestructura' },
      { label: 'Duración', value: '6 meses' },
      { label: 'Formato', value: 'Mandato de acompañamiento estratégico' },
    ],
    footnote: 'Más referencias disponibles bajo solicitud.',
    ctaTitle: '¿Listo para tu próximo campo de negocio?',
    ctaSubtext: 'Empieza con una primera conversación sin compromiso.',
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
      'Vencly acompaña a las empresas en el desarrollo y la apertura de nuevos campos de negocio – con perspectiva emprendedora, metodología probada y verdadera responsabilidad de ejecución.',
    navLabel: 'Navegación',
    legalLabel: 'Legal',
    impressum: 'Aviso legal',
    datenschutz: 'Política de privacidad',
    rights: 'Todos los derechos reservados.',
  },
}

export const translations: Record<Locale, Translations> = { de, en, fr, es }
