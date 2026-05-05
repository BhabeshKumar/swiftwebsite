'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Mic, Zap, Boxes, FileText, GitBranch } from 'lucide-react'

const services = [
  {
    icon: MessageSquare,
    title: 'RAG-Based AI Chatbots',
    description:
      'Chatbots that answer from your own documents, policies, or knowledge base — with source-cited, accurate responses.',
  },
  {
    icon: Mic,
    title: 'Multilingual Voice Agents',
    description:
      'Voice AI systems that handle calls, support, and operations in multiple languages with real-time processing.',
  },
  {
    icon: Zap,
    title: 'AI Automation Tools',
    description:
      'Automate repetitive business processes by connecting AI to your existing APIs, tools, and workflows.',
  },
  {
    icon: Boxes,
    title: 'AI SaaS Platforms',
    description:
      'Scalable AI-powered SaaS products built to handle real users, real data, and real-world load.',
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    description:
      'Extract structured data, classify, and process large volumes of documents automatically and accurately.',
  },
  {
    icon: GitBranch,
    title: 'AI Agents & Workflow Systems',
    description:
      'Custom AI agents that connect to your business systems, execute tasks, and operate within defined workflows.',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">What We Build</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            AI systems designed for deployment — not for demos.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((s) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                variants={card}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group glass-effect glow-card p-7 rounded-xl border border-accent/15 hover:border-accent/45 cursor-default transition-all duration-300"
              >
                <div className="mb-5 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/18 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-light transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
