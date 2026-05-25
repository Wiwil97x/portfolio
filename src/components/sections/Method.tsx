'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    number: '01',
    title: 'Brief & découpe',
    description:
      "Comprendre le besoin, identifier les composants, choisir la stack. Un cadrage précis est ce qui permet à l'IA de produire quelque chose d'utile — pas de prompt vague, pas de résultat bancal.",
  },
  {
    number: '02',
    title: 'Build avec l\'IA',
    description:
      "Claude Code et Cursor au centre du workflow. Je pilote, je relis, je corrige. L'IA exécute : moi je valide. Chaque itération est revue avant de passer à la suivante.",
  },
  {
    number: '03',
    title: 'Livraison rapide',
    description:
      'Déploiement Vercel, tests sur mobile, vérification finale. Un site complet en 2 à 4 heures : sans sacrifier la qualité ni la maintenabilité.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export default function Method() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="methode" ref={ref} className="py-24 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-blue-400 tabular-nums">02</span>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Ma méthode
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="font-syne font-bold text-4xl md:text-5xl text-white mb-4 tracking-[-0.02em]"
        >
          Comment je travaille
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.18 }}
          className="text-base text-zinc-500 font-inter max-w-[55ch] mb-12"
        >
          L&apos;IA ne remplace pas le développeur : elle amplifie sa productivité. Mon workflow
          combine jugement humain et puissance des outils IA pour livrer plus vite, sans dette
          technique.
        </motion.p>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className="relative p-6 rounded-xl border border-white/[0.06] bg-[#111111] flex flex-col gap-4"
            >
              {/* Number */}
              <span className="font-mono text-[11px] text-blue-400 uppercase tracking-widest">
                {step.number}
              </span>

              {/* Connector line (between cards, desktop only) */}
              <div className="absolute top-[2.6rem] -right-3 w-6 h-px bg-blue-400/20 hidden md:block last:hidden" />

              <h3 className="font-syne font-bold text-lg text-white leading-snug">
                {step.title}
              </h3>

              <p className="text-sm text-zinc-400 font-inter leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          className="mt-8 font-mono text-xs text-[#404040] uppercase tracking-widest"
        >
          Claude Code&nbsp;&middot;&nbsp;Cursor&nbsp;&middot;&nbsp;Vercel&nbsp;&middot;&nbsp;v0
        </motion.p>
      </div>
    </section>
  )
}
