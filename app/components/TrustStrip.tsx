'use client'

import { motion } from 'framer-motion'

const capabilities = [
  'RAG Chatbots',
  'Voice Agents',
  'AI Automation',
  'AI SaaS Products',
  'Workflow Intelligence',
  'Document Intelligence',
]

export default function TrustStrip() {
  return (
    <section className="border-y border-accent/10 bg-secondary/40 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Trust statement */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-slate-200 text-base md:text-lg font-medium mb-2"
        >
          We build AI systems that are{' '}
          <span className="text-accent-light">deployed, used, and trusted</span>
          {' '}— not just prototypes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-slate-500 text-sm mb-10"
        >
          Designed for real-world environments, not lab demos.
        </motion.p>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-slate-300 text-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {cap}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
