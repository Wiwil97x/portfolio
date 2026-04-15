'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const
const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

interface Project {
  slug: string
  title: string
  description: string
  stack: string[]
  type: 'CLIENT RÉEL' | 'PROJET PRO' | 'PROJET PERSONNEL'
  coverSrc: string
  coverAlt: string
}

const projects: Project[] = [
  {
    slug: 'bns-transport',
    title: 'BNS Transport',
    description: 'Site vitrine pour une entreprise de transport',
    stack: ['HTML', 'CSS', 'JS'],
    type: 'CLIENT RÉEL',
    coverSrc: '/assets/projects/bns-transport/coverV2.png',
    coverAlt: 'Aperçu du site BNS Transport',
  },
  {
    slug: 'pizza-italia',
    title: 'Pizza Italia',
    description: 'Site web pour un restaurant local',
    stack: ['HTML', 'CSS', 'JS'],
    type: 'CLIENT RÉEL',
    coverSrc: '/assets/projects/pizza-italia/cover.jpg',
    coverAlt: 'Aperçu du site Pizza Italia',
  },
  {
    slug: 'roven',
    title: 'Roven',
    description: 'Mon studio freelance de création de sites vitrines professionnels',
    stack: ['HTML', 'CSS'],
    type: 'PROJET PRO',
    coverSrc: '/assets/projects/roven/cover.jpg',
    coverAlt: 'Aperçu du site Roven Studio',
  },
  {
    slug: 'nova-strategie',
    title: 'Nova Stratégie',
    description: 'Design UI — agence digitale fictive',
    stack: ['HTML', 'CSS', 'JS'],
    type: 'PROJET PERSONNEL',
    coverSrc: '/assets/projects/nova-strategie/cover.jpg',
    coverAlt: 'Aperçu du site Nova Stratégie',
  },
  {
    slug: 'flowly',
    title: 'Flowly',
    description: 'Design UI — application SaaS fictive',
    stack: ['HTML', 'CSS', 'JS'],
    type: 'PROJET PERSONNEL',
    coverSrc: '/assets/projects/flowly/cover.jpg',
    coverAlt: 'Aperçu du site Flowly',
  },
]

const typeBadge: Record<Project['type'], string> = {
  'CLIENT RÉEL': 'bg-blue-950 text-blue-400',
  'PROJET PRO': 'bg-blue-950 text-blue-400',
  'PROJET PERSONNEL': 'bg-zinc-800 text-zinc-400',
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={`/projects/${project.slug}`}
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        borderColor: 'rgba(255,255,255,0.15)',
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      className="group flex flex-col rounded-xl overflow-hidden border border-white/[0.06] bg-[#111111] cursor-pointer"
      data-cursor-hover
    >
      {/* Cover */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={`${bp}${project.coverSrc}`}
          alt={project.coverAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-2">
            <span
              className={`self-start font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-md ${typeBadge[project.type]}`}
            >
              {project.type}
            </span>
            <h3 className="font-syne font-bold text-xl text-white leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Arrow — appears on hover */}
          <div className="shrink-0 mt-1 w-8 h-8 rounded-full border border-blue-400/20 bg-blue-400/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-blue-400"
            >
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <p className="text-sm text-zinc-400 font-inter leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-1 rounded-md bg-zinc-800 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projets" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-blue-400 tabular-nums">01</span>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Projets
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="font-syne font-bold text-4xl md:text-5xl text-white mb-12 tracking-[-0.02em]"
        >
          Ce que j&apos;ai construit
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
