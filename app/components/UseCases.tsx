'use client'

import { motion } from 'framer-motion'
import { Headphones, BookOpen, Users, Mic, FileText, Filter } from 'lucide-react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

const cases = [
  {
    icon: Headphones,
    title: 'Customer Support Automation',
    description: 'AI agents that handle common queries 24/7 — reducing ticket volume and response times without replacing human support.',
  },
  {
    icon: BookOpen,
    title: 'Internal Knowledge Assistants',
    description: 'Employees ask questions; the AI answers from your policies, SOPs, and internal docs — accurately, instantly.',
  },
  {
    icon: Users,
    title: 'Workforce Intelligence',
    description: 'AI that surfaces patterns in operations data, helping managers make faster, better-informed decisions.',
  },
  {
    icon: Mic,
    title: 'Voice-Based Operations',
    description: "Voice interfaces for field teams, call centres, or customer touchpoints where typing isn't practical.",
  },
  {
    icon: FileText,
    title: 'Document Processing',
    description: 'Extract, classify, and route information from invoices, contracts, and forms — at volume, without manual effort.',
  },
  {
    icon: Filter,
    title: 'Lead Qualification',
    description: 'AI that qualifies inbound leads based on your criteria and routes them to the right person at the right time.',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const card = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

// Shared card inner
function CaseCard({ c }: { c: typeof cases[0] }) {
  const Icon = c.icon
  return (
    <div className="bg-secondary rounded-2xl border border-accent/25 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
      <div className="mb-4 inline-flex p-3 rounded-xl bg-accent/12 border border-accent/20">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <h3 className="text-white font-semibold text-base mb-2">{c.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{c.description}</p>
    </div>
  )
}

export default function UseCases() {
  return (
    <section className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Use Cases</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Where It Gets Deployed</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Concrete applications that solve real operational problems.
          </p>
        </motion.div>

        {/* ── Mobile: ScrollStack ── */}
        <div className="md:hidden pb-32">
          <ScrollStack
            itemDistance={70}
            itemStackDistance={20}
            baseScale={0.88}
            itemScale={0.025}
            stackPosition="22%"
            scaleEndPosition="8%"
          >
            {cases.map((c) => (
              <ScrollStackItem key={c.title}>
                <CaseCard c={c} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* ── Desktop: Grid ── */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cases.map((c) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                variants={card}
                whileHover={{ scale: 1.02, y: -3 }}
                className="group glass-effect glow-card p-7 rounded-xl border border-accent/15 hover:border-accent/40 relative overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-transparent group-hover:from-accent/5 rounded-xl transition-all duration-500" />
                <div className="relative z-10">
                  <div className="mb-5 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/18 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-3">{c.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
