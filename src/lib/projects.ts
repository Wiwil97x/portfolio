export type ProjectType = 'CLIENT RÉEL' | 'PROJET PRO' | 'PROJET PERSONNEL' | 'AGENCE EN ACTIVITÉ' | 'SaaS EN PRODUCTION'

export interface ProjectData {
  slug: string
  title: string
  tagline: string
  type: ProjectType
  coverDesktop: string
  coverMobile: string
  contexte: string
  role: string
  defis: string
  stack: string[]
  siteUrl: string
  prev: { slug: string; title: string } | null
  next: { slug: string; title: string } | null
}

export const projects: ProjectData[] = [
  {
    slug: 'roven',
    title: 'ROVEN',
    tagline: 'Micro-agence web en activité | Fondateur & dev full stack | 500€ CA | Clients actifs | Modèle WaaS (abonnement mensuel)',
    type: 'AGENCE EN ACTIVITÉ',
    coverDesktop: '/assets/projects/roven/roven.png',
    coverMobile: '/assets/projects/roven/roven-mobile.png',
    contexte:
      "ROVEN est une micro-agence web martiniquaise en activité, spécialisée dans la création de sites vitrines professionnels et d'applications web sur abonnement mensuel (modèle WaaS). L'agence compte des clients actifs et génère un chiffre d'affaires de 500€.",
    role: "Fondateur et développeur full stack : conception de l'offre commerciale, identité visuelle, développement des sites clients et déploiement en production. Gestion de bout en bout des projets clients.",
    defis:
      "Construire un modèle économique viable en WaaS (Web as a Service) sur un marché martiniquais, avec acquisition de premiers clients réels et mise en place d'une offre d'abonnement mensuel récurrent.",
    stack: ['Next.js', 'HTML', 'CSS'],
    siteUrl: 'https://rovenhq.com',
    prev: null,
    next: { slug: 'roven-reservation', title: 'ROVEN Réservation' },
  },
  {
    slug: 'roven-reservation',
    title: 'ROVEN Réservation',
    tagline: 'Application SaaS de réservation en ligne, développée et déployée en production.',
    type: 'SaaS EN PRODUCTION',
    coverDesktop: '/assets/projects/roven/roven.png',
    coverMobile: '/assets/projects/roven/roven-mobile.png',
    contexte:
      "ROVEN Réservation est une application SaaS de prise de rendez-vous en ligne, conçue pour les clients de l'agence ROVEN. Déployée en production sur Vercel, elle permet aux utilisateurs de réserver des créneaux directement depuis le site de leurs prestataires.",
    role: "Développement full stack de l'application : architecture Next.js, interface client, logique de réservation et déploiement en production sur Vercel.",
    defis:
      "Concevoir un flux de réservation fluide et fiable en production, avec gestion des créneaux, validation des données et expérience mobile optimale.",
    stack: ['Next.js', 'Vercel'],
    siteUrl: 'https://reservation.rovenhq.com',
    prev: { slug: 'roven', title: 'ROVEN' },
    next: { slug: 'aren', title: 'Aren' },
  },
  {
    slug: 'aren',
    title: 'Aren',
    tagline: 'Site vitrine pour une entreprise locale',
    type: 'CLIENT RÉEL',
    coverDesktop: '/assets/projects/aren/arenag.png',
    coverMobile: '/assets/projects/aren/arenag-mobile.png',
    contexte:
      "Aren est une entreprise locale qui a fait appel à ROVEN pour créer sa présence en ligne. L'objectif : un site vitrine professionnel, lisible et performant sur mobile, pour valoriser ses services et faciliter le contact client.",
    role: "Développement complet du site vitrine en HTML/CSS/JS, de la conception graphique à la mise en production.",
    defis:
      "Adapter le design à l'identité du client tout en garantissant une expérience fluide sur tous les appareils et des temps de chargement optimaux.",
    stack: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: 'https://arenag.fr',
    prev: { slug: 'roven-reservation', title: 'ROVEN Réservation' },
    next: { slug: 'bns-transport', title: 'BNS Transport' },
  },
  {
    slug: 'bns-transport',
    title: 'BNS Transport',
    tagline: 'Site vitrine pour une entreprise de transport',
    type: 'CLIENT RÉEL',
    coverDesktop: '/assets/projects/bns-transport/bns.png',
    coverMobile: '/assets/projects/bns-transport/bns-mobile.png',
    contexte:
      "BNS Transport est une société de transport routier de marchandises basée en région parisienne. L'entreprise n'avait aucune présence en ligne et cherchait un site vitrine pour valoriser ses services et faciliter le recrutement de conducteurs.",
    role: "J'ai réalisé l'intégralité du projet : conception graphique, intégration HTML/CSS/JS et mise en ligne. Le site est entièrement responsive et optimisé pour les appareils mobiles.",
    defis: "Le principal défi a été la création d'une carte de France interactive pour visualiser les zones d'intervention de l'entreprise. J'ai également développé un formulaire de candidature pour le recrutement de conducteurs, avec validation des champs côté client.",
    stack: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: 'https://rovenhq.github.io/bns-transport',
    prev: { slug: 'aren', title: 'Aren' },
    next: { slug: 'pizza-italia', title: 'Pizza Italia' },
  },
  {
    slug: 'pizza-italia',
    title: 'Pizza Italia',
    tagline: 'Site web pour un restaurant local',
    type: 'CLIENT RÉEL',
    coverDesktop: '/assets/projects/pizza-italia/cover.jpg',
    coverMobile: '/assets/projects/pizza-italia/cover-mobile.png',
    contexte:
      "Pizza Italia est un restaurant local qui souhaitait une présence en ligne pour présenter sa carte, ses horaires et faciliter le contact client. L'objectif était un site simple, appétissant et facile à naviguer sur mobile.",
    role: "Conception et développement complet d'un site vitrine responsive en HTML/CSS/JS, livré clé en main au client.",
    defis:
      "L'enjeu principal était l'adaptation du design à tous les formats d'écran, avec une attention particulière à la lisibilité de la carte et des visuels sur mobile.",
    stack: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: '/pages/pizza_italia_update.html',
    prev: { slug: 'bns-transport', title: 'BNS Transport' },
    next: { slug: 'nova-strategie', title: 'Nova Stratégie' },
  },
  {
    slug: 'nova-strategie',
    title: 'Nova Stratégie',
    tagline: 'Design UI : agence digitale fictive',
    type: 'PROJET PERSONNEL',
    coverDesktop: '/assets/projects/nova-strategie/cover.jpg',
    coverMobile: '/assets/projects/nova-strategie/cover-mobile.png',
    contexte:
      "Projet personnel simulant le site d'une agence de conseil en stratégie digitale fictive, réalisé pour approfondir mes compétences en design UI et en intégration JavaScript.",
    role: "Design UI complet et développement front-end en HTML/CSS/JS, de la maquette à l'intégration finale.",
    defis:
      "L'enjeu était de donner de la crédibilité et du professionnalisme à une marque fictive, avec une attention particulière portée à la typographie et à la hiérarchie visuelle.",
    stack: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: '/pages/nova.html',
    prev: { slug: 'pizza-italia', title: 'Pizza Italia' },
    next: { slug: 'flowly', title: 'Flowly' },
  },
  {
    slug: 'flowly',
    title: 'Flowly',
    tagline: 'Design UI : application SaaS fictive',
    type: 'PROJET PERSONNEL',
    coverDesktop: '/assets/projects/flowly/cover.jpg',
    coverMobile: '/assets/projects/flowly/cover-mobile.png',
    contexte:
      "Projet personnel simulant la landing page d'une plateforme SaaS fictive, conçu pour reproduire les codes visuels des produits tech contemporains.",
    role: "Design UI et développement front-end en HTML/CSS/JS, de la maquette à l'intégration finale.",
    defis:
      "Reproduire les codes visuels du secteur SaaS : hiérarchie claire, call-to-action bien positionnés et animations CSS légères, dans un code propre sans dépendance externe.",
    stack: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: '/pages/flowly.html',
    prev: { slug: 'nova-strategie', title: 'Nova Stratégie' },
    next: null,
  },
]

export function getProject(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug)
}
