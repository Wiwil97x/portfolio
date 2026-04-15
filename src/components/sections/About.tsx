'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const
const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-center">

        {/* Left column */}
        <div>
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-mono text-xs text-blue-400 tabular-nums">02</span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              À propos
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-syne font-bold text-4xl md:text-5xl text-white mb-8 tracking-[-0.02em]"
          >
            Qui suis-je&nbsp;?
          </motion.h2>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-base text-zinc-400 font-inter leading-relaxed max-w-[60ch]">
              Développeur web passionné par la création de sites modernes et performants.
              Mon parcours s&apos;est construit sur des projets concrets&nbsp;: de la maquette à la mise
              en ligne, avec une attention particulière portée à l&apos;expérience utilisateur et à
              la qualité du code.
            </p>
            <p className="text-base text-zinc-400 font-inter leading-relaxed max-w-[60ch]">
              J&apos;aborde chaque projet avec une double approche&nbsp;: un oeil orienté design pour
              créer des interfaces claires et attractives, et une logique de développeur pour
              produire un code propre, maintenable et structuré.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
            className="mt-8 font-mono text-xs text-[#404040] uppercase tracking-widest"
          >
            Disponible en alternance&nbsp;&middot;&nbsp;Paris&nbsp;&middot;&nbsp;Sep. 2026
          </motion.p>
        </div>

        {/* Right column — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
          className="relative group"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08]">
            <Image
              src={`${bp}/assets/img/photo.jpg`}
              alt="Photo de Willem Marchety-Concy"
              fill
              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              sizes="(max-width: 768px) 90vw, 35vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
