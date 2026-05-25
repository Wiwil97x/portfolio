'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

interface SkillCategory {
  icon: React.ReactNode
  title: string
  skills: string[]
}

const categories: SkillCategory[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Front-end',
    skills: ['HTML / CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 7l8 5 8-5M4 12l8 5 8-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Back-end & Outils',
    skills: ['PHP', 'MySQL / SQL', 'REST API', 'Git / GitHub', 'Vercel', 'Figma'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3c-1.5 3-3 4.5-4.5 6S4 12 4 14a8 8 0 0016 0c0-2-1-3.5-2.5-5S13.5 6 12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 17c0-1.5 1.5-3 3-3s3 1.5 3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'IA & Workflow',
    skills: ['Claude Code', 'Cursor', 'v0 by Vercel', 'OpenAI Codex', 'Prompting'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="competences" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-blue-400 tabular-nums">04</span>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Compétences
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="font-syne font-bold text-4xl md:text-5xl text-white mb-12 tracking-[-0.02em]"
        >
          Ma stack
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              whileHover={{
                borderColor: 'rgba(255,255,255,0.14)',
                transition: { duration: 0.2 },
              }}
              className="p-6 rounded-xl border border-white/[0.06] bg-[#111111] flex flex-col gap-5"
            >
              <div className="text-blue-400">{cat.icon}</div>

              <h3 className="font-syne font-bold text-lg text-white">{cat.title}</h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1.5 rounded-lg bg-zinc-800 text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
