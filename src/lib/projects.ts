export type ProjectType = 'CLIENT RÉEL' | 'PROJET PRO' | 'PROJET PERSONNEL'

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
    slug: 'bns-transport',
    title: 'BNS Transport',
    tagline: 'Site vitrine pour une entreprise de transport',
    type: 'CLIENT RÉEL',
    coverDesktop: '/assets/projects/bns-transport/cover.png',
    coverMobile: '/assets/projects/bns-transport/cover-mobile.png',
    contexte:
      "BNS Transport est une société de transport routier de marchandises basée en région parisienne. L'entreprise n'avait aucune présence en ligne et cherchait un site vitrine pour valoriser ses services et faciliter le recrutement de conducteurs.",
    role: "J'ai réalisé l'intégralité du projet : conception graphique, intégration HTML/CSS/JS et mise en ligne. Le site est entièrement responsive et optimisé pour les appareils mobiles.",
    defis: "Le principal défi a été la création d'une carte de France interactive pour visualiser les zones d'intervention de l'entreprise. J'ai également développé un formulaire de candidature pour le recrutement de conducteurs, avec validation des champs côté client.",
    stack: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: 'https://rovenhq.github.io/bns-transport',
    prev: null,
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
    next: { slug: 'roven', title: 'Roven' },
  },
  {
    slug: 'roven',
    title: 'Roven',
    tagline: 'Mon studio freelance de création de sites vitrines professionnels',
    type: 'PROJET PRO',
    coverDesktop: '/assets/projects/roven/cover-v2.png',
    coverMobile: '/assets/projects/roven/cover-mobile.png',
    contexte:
      "Roven est mon studio freelance spécialisé dans la création de sites vitrines professionnels. J'ai créé ce site pour présenter mes services, mon approche et attirer mes premiers clients.",
    role: "Conception et développement complet : identité visuelle, design UI et intégration HTML/CSS. Le site est en ligne sur rovenhq.com.",
    defis:
      "L'enjeu était de créer une identité visuelle crédible et cohérente pour un studio de design, tout en maintenant un code propre et maintenable.",
    stack: ['HTML', 'CSS'],
    siteUrl: 'https://rovenhq.com/',
    prev: { slug: 'pizza-italia', title: 'Pizza Italia' },
    next: { slug: 'nova-strategie', title: 'Nova Stratégie' },
  },
  {
    slug: 'nova-strategie',
    title: 'Nova Stratégie',
    tagline: 'Design UI — agence digitale fictive',
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
    prev: { slug: 'roven', title: 'Roven' },
    next: { slug: 'flowly', title: 'Flowly' },
  },
  {
    slug: 'flowly',
    title: 'Flowly',
    tagline: 'Design UI — application SaaS fictive',
    type: 'PROJET PERSONNEL',
    coverDesktop: '/assets/projects/flowly/cover.jpg',
    coverMobile: '/assets/projects/flowly/cover-mobile.png',
    contexte:
      "Projet personnel simulant la landing page d'une plateforme SaaS fictive, conçu pour reproduire les codes visuels des produits tech contemporains.",
    role: "Design UI et développement front-end en HTML/CSS/JS, de la maquette à l'intégration finale.",
    defis:
      "Reproduire les codes visuels du secteur SaaS — hiérarchie claire, call-to-action bien positionnés et animations CSS légères — dans un code propre, sans aucune dépendance externe.",
    stack: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: '/pages/flowly.html',
    prev: { slug: 'nova-strategie', title: 'Nova Stratégie' },
    next: null,
  },
]

export function getProject(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug)
}
