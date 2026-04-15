'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7h10M7 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-[#0D0D0D]">
      <div className="max-w-2xl mx-auto text-center">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-blue-400 tabular-nums">04</span>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Contact
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="font-syne font-bold text-5xl md:text-6xl text-white tracking-[-0.03em] leading-[1.0] mb-6"
        >
          Travaillons ensemble
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="font-mono text-sm text-zinc-500 mb-12 leading-relaxed"
        >
          Disponible en alternance à partir de septembre 2026
          <br />
          Paris et région parisienne
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="mailto:willem.concy97x@gmail.com"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-black text-sm font-semibold font-inter hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
          >
            M&apos;envoyer un email
            <ExternalLinkIcon />
          </a>
          <a
            href="https://linkedin.com/in/willem-marchety-concy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full border border-white/15 text-white/70 text-sm font-inter hover:border-white/30 hover:text-white active:scale-[0.98] transition-all duration-200"
          >
            LinkedIn
            <ExternalLinkIcon />
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
          className="w-full h-px bg-white/[0.06] mb-10 origin-left"
        />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Wiwil97x"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-500 hover:text-blue-400 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/willem-marchety-concy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-500 hover:text-blue-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
          <p className="font-mono text-xs text-[#404040]">
            &copy; 2026 Willem Marchety-Concy
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
