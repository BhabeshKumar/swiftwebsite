'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Mic, GitBranch, BarChart3 } from 'lucide-react'

const builds = [
  {
    icon: MessageSquare,
    tag: 'Knowledge Systems',
    title: 'RAG Chatbot Systems',
    points: [
      'Document-based AI chatbots connected to internal knowledge',
      'Source-cited responses — reduces hallucination',
      'Deployed as internal assistants or customer-facing tools',
    ],
  },
  {
    icon: Mic,
    tag: 'Voice AI',
    title: 'Multilingual Voice Agents',
    points: [
      'Conversational IVR and support agents',
      'Multi-language support — real-time processing',
      'Integrated into call flows and business operations',
    ],
  },
  {
    icon: GitBranch,
    tag: 'Automation',
    title: 'AI Workflow Automation',
    points: [
      'AI connected to APIs, CRMs, and business tools',
      'Business process automation that reduces manual work',
      'Reliable orchestration with human-in-the-loop controls',
    ],
  },
  {
    icon: BarChart3,
    tag: 'Operational Intelligence',
    title: 'AI Dashboards & Systems',
    points: [
      'Real-time operational dashboards with AI-powered insights',
      'Decision-support systems built for teams',
      'Monitoring and alerting for business-critical data',
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WhatWeBuilt() {
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
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Proof of Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">What We've Built</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Systems designed, built, and delivered for real business operations.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {builds.map((b) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                variants={card}
                whileHover={{ scale: 1.02, y: -3 }}
                className="group relative glass-effect glow-card rounded-2xl border border-accent/15 hover:border-accent/45 p-8 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent rounded-2xl transition-all duration-500" />

                <div className="relative z-10">
                  {/* Tag + icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent/80 border border-accent/25 px-3 py-1 rounded-full">
                      {b.tag}
                    </span>
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-accent-light transition-colors">
                    {b.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-3">
                    {b.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-slate-400 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
