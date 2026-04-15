'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.10] bg-white/[0.04] backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Disponible en alternance&nbsp;&middot;&nbsp;Sep. 2026&nbsp;&middot;&nbsp;Paris
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap justify-center gap-x-4">
            {['Willem', 'Marchety-Concy'].map((word) => (
              <motion.span
                key={word}
                variants={wordVariants}
                className="font-syne font-bold leading-[0.92] tracking-[-0.04em] text-[#F5F5F5] block"
                style={{ fontSize: 'clamp(3.2rem, 9vw, 7.5rem)' }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={0.55}
          variants={fadeUpVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-6 text-xl text-zinc-500 font-inter"
        >
          Développeur Web &amp; Designer
        </motion.p>

        {/* Separator line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
          className="mt-8 w-full max-w-xs h-px bg-gradient-to-r from-blue-400/40 to-transparent origin-left"
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.9 }}
          className="mt-10 flex items-center gap-4 flex-wrap justify-center"
        >
          <a
            href="#projets"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projets')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center h-12 px-8 rounded-full bg-white text-black text-sm font-semibold font-inter hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center h-12 px-8 rounded-full border border-white/[0.15] text-white/70 text-sm font-inter hover:border-white/30 hover:text-white active:scale-[0.98] transition-all duration-200"
          >
            Me contacter
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#404040]">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-6 bg-blue-400/40"
        />
      </motion.div>
    </section>
  )
}
