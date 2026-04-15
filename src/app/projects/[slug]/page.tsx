import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getProject, projects, type ProjectType } from '@/lib/projects'

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Willem Marchety-Concy`,
    description: project.tagline,
  }
}

const typeBadge: Record<ProjectType, string> = {
  'CLIENT RÉEL': 'bg-green-950 text-green-400',
  'PROJET PRO': 'bg-blue-950 text-blue-400',
  'PROJET PERSONNEL': 'bg-zinc-800 text-zinc-400',
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug)
  if (!project) notFound()

  const isExternal = project.siteUrl.startsWith('http')

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back link */}
        <Link
          href="/#projets"
          className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-green-400 transition-colors duration-200 mb-12 group"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M13 7H1M7 13l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Retour aux projets
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span
            className={`inline-block font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-md mb-4 ${typeBadge[project.type]}`}
          >
            {project.type}
          </span>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white tracking-[-0.03em] mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-400 font-inter">{project.tagline}</p>
        </div>

        {/* Screenshots */}
        <div className="flex gap-4 mb-16 items-start">
          {/* Desktop screenshot — large */}
          <div className="flex-1 rounded-xl overflow-hidden border border-white/[0.06] bg-[#111111]">
            <Image
              src={`${bp}${project.coverDesktop}`}
              alt={`Capture d'écran de ${project.title}`}
              width={1200}
              height={750}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          {/* Mobile screenshot — narrow */}
          <div className="w-[22%] shrink-0 rounded-xl overflow-hidden border border-white/[0.06] bg-[#111111] self-stretch flex items-center">
            <Image
              src={`${bp}${project.coverMobile}`}
              alt={`Capture mobile de ${project.title}`}
              width={390}
              height={844}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Body */}
        <div className="space-y-10 mb-12">
          <Section title="Contexte" content={project.contexte} />
          <Section title="Mon rôle" content={project.role} />
          <Section title="Défis et solutions" content={project.defis} />
        </div>

        {/* Technologies */}
        <div className="mb-10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block mb-3">
            Technologies
          </span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-16">
          <a
            href={project.siteUrl}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white text-black text-sm font-semibold font-inter hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
          >
            Voir le site
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center justify-between border-t border-white/[0.06] pt-8">
          {project.prev ? (
            <Link
              href={`/projects/${project.prev.slug}`}
              className="flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-green-400 transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M13 7H1M7 13l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {project.prev.title}
            </Link>
          ) : (
            <span />
          )}
          {project.next ? (
            <Link
              href={`/projects/${project.next.slug}`}
              className="flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-green-400 transition-colors duration-200"
            >
              {project.next.title}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/[0.06] pt-8">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <span className="font-mono text-xs text-[#404040]">© 2026 Willem Marchety-Concy</span>
          <span className="font-mono text-xs text-[#404040]">Fait avec Next.js</span>
        </div>
      </footer>
    </main>
  )
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h2 className="font-syne font-bold text-xl text-white mb-3">{title}</h2>
      <p className="text-base text-zinc-400 font-inter leading-relaxed max-w-[65ch]">{content}</p>
    </div>
  )
}
