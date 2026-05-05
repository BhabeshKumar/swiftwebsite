'use client'

import { motion } from 'framer-motion'
import { Search, Layers, Code2, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Understand your workflows, data, and the problem AI should actually solve.',
  },
  {
    icon: Layers,
    title: 'Design',
    description: 'Architect the system — data pipelines, integrations, user flows, and failure modes.',
  },
  {
    icon: Code2,
    title: 'Build',
    description: 'Build with production standards: testing, security, monitoring, performance.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'Handle deployment, integration, and handoff so your team can start using it.',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Monitor, tune, and evolve the system as your usage and needs grow.',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-secondary/25">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Our Process</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A disciplined approach from first call to live system.
          </p>
        </motion.div>

        {/* ── Horizontal flow (desktop) ── */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative flex items-start justify-between gap-0">

            {/* Background line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-accent/10 via-accent/50 to-accent/10" />

            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center flex-1 px-4"
                >
                  {/* Step number bubble */}
                  <div className="relative z-10 mb-5">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-glow border-4 border-primary cursor-default"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    {/* Step number badge */}
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary border border-accent text-accent text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-[160px]">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── Vertical flow (mobile) ── */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-5 items-start p-5 rounded-xl border border-accent/15 bg-secondary/30"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-glow-sm">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-accent text-xs font-bold">0{i + 1}</span>
                    <h3 className="text-white font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
