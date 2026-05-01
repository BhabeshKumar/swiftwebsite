'use client'

import { motion } from 'framer-motion'

export default function TrustStrip() {
  const capabilities = [
    'RAG Chatbots',
    'Voice Agents',
    'AI Automation',
    'AI SaaS Products',
    'Workflow Intelligence',
  ]

  return (
    <section className="bg-secondary/50 border-t border-b border-accent/10 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-xl text-slate-300 mb-12 font-medium"
        >
          Built for businesses that need reliable AI, not experiments.
        </motion.h2>

        {/* Capabilities grid/carousel */}
        <div className="flex flex-wrap justify-center gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent-light" />
              <span className="text-slate-300 font-medium">{capability}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
