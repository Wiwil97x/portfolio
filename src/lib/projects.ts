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
    tagline: 'Micro-agence web en activité | Fondateur & dev full stack | 879€ CA | 3 projets livrés en 1 mois via IA',
    type: 'AGENCE EN ACTIVITÉ',
    coverDesktop: '/assets/projects/roven/roven.png',
    coverMobile: '/assets/projects/roven/roven-mobile.png',
    contexte:
      "ROVEN est une micro-agence web martiniquaise en activité, spécialisée dans la création de sites vitrines professionnels et d'applications web sur abonnement mensuel (modèle WaaS). 879€ de chiffre d'affaires générés et 3 projets livrés en 1 mois grâce à un workflow IA intégré.",
    role: "Fondateur et développeur full stack : conception de l'offre commerciale, identité visuelle, développement des sites clients et déploiement en production. Intégration de Claude Code et Cursor pour réduire significativement les délais de livraison.",
    defis:
      "Construire un modèle économique viable en WaaS (Web as a Service) sur un marché martiniquais, avec acquisition de premiers clients réels et livraison de 3 projets en 1 mois grâce à l'IA.",
    stack: ['Next.js', 'HTML', 'CSS'],
    siteUrl: 'https://rovenhq.com',
    prev: null,
    next: { slug: 'swifo', title: 'Swifo' },
  },
  {
    slug: 'swifo',
    title: 'Swifo',
    tagline: 'Application SaaS de réservation en ligne, développée et déployée en production.',
    type: 'SaaS EN PRODUCTION',
    coverDesktop: '/assets/projects/swifo/swifo.png',
    coverMobile: '/assets/projects/swifo/swifo-mobile.png',
    contexte:
      "Swifo est une application SaaS de prise de rendez-vous en ligne, conçue pour les professionnels indépendants et les PME. Déployée en production sur Vercel, elle permet la réservation de créneaux en temps réel directement depuis le site du prestataire.",
    role: "Développement full stack de l'application : architecture Next.js, interface client, logique de réservation et déploiement en production sur Vercel.",
    defis:
      "Concevoir un flux de réservation fluide et fiable en production, avec gestion des créneaux, validation des données et expérience mobile optimale.",
    stack: ['Next.js', 'Vercel'],
    siteUrl: 'https://swifo.app',
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
    prev: { slug: 'swifo', title: 'Swifo' },
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
    next: null,
  },
]

export function getProject(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug)
}
