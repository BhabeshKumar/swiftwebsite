'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    title: 'Production-ready from day one',
    body: 'Every system we build is designed to handle real traffic, real users, and real failure conditions — not just pass a demo.',
  },
  {
    title: 'We focus on workflows, not experiments',
    body: 'We integrate AI into your actual operations, not alongside them. The result is adoption, not a tool that sits unused.',
  },
  {
    title: 'Designed for people, not engineers',
    body: "AI is only valuable when teams use it. We design for adoption — simple interfaces, clear outputs, sensible defaults.",
  },
  {
    title: 'Reliability and clarity over hype',
    body: 'We don\'t over-promise. We scope carefully, build cleanly, and deliver systems that behave predictably.',
  },
  {
    title: 'Human-in-the-loop by design',
    body: 'Critical decisions stay with your team. Our systems are built with appropriate oversight, escalation paths, and fallbacks.',
  },
  {
    title: 'Privacy and security built in',
    body: 'Data handling, access controls, and compliance considerations are part of the architecture — not an afterthought.',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
}

const item = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function WhySwiftAi() {
  return (
    <section className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: header copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Why SwiftAi
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Practical. Secure.{' '}
              <span className="gradient-text">Built to Last.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We don't build AI to impress. We build it to operate — reliably, day after day, inside
              real business environments.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-accent/20" />
              <span className="text-slate-500 text-sm italic">No hype. Just working systems.</span>
              <div className="h-px flex-1 bg-accent/20" />
            </div>
          </motion.div>

          {/* Right: reasons grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {reasons.map((r) => (
              <motion.div
                key={r.title}
                variants={item}
                className="group p-5 rounded-xl border border-accent/10 hover:border-accent/35 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <h3 className="text-white font-semibold text-sm leading-snug">{r.title}</h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed pl-7">{r.body}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
