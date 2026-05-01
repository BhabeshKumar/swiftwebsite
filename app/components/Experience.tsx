'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  Mic,
  BarChart3,
  Zap,
} from 'lucide-react'

const experiences = [
  {
    icon: MessageSquare,
    category: 'Chat Interfaces',
    title: 'RAG-Powered Knowledge Systems',
    description: 'Building intelligent chatbots that connect to knowledge bases, documentation, and internal systems to provide accurate, context-aware responses.',
    tags: ['LLM Integration', 'Vector DBs', 'Real-time Search'],
  },
  {
    icon: Mic,
    category: 'Voice & Audio',
    title: 'Multilingual Voice Agents',
    description: 'End-to-end voice agents with speech recognition, natural language understanding, and voice synthesis across multiple languages.',
    tags: ['STT/TTS', 'Real-time Audio', 'Multilingual NLU'],
  },
  {
    icon: BarChart3,
    category: 'Dashboards & Analytics',
    title: 'AI-Powered Analytics Dashboards',
    description: 'Real-time dashboards and analytics platforms that leverage AI for insights, anomaly detection, and predictive analysis.',
    tags: ['Data Visualization', 'Real-time Processing', 'ML Insights'],
  },
  {
    icon: Zap,
    category: 'Workflow Automation',
    title: 'End-to-End Automation Systems',
    description: 'Complex workflow automation systems that integrate with your existing tools, APIs, and business processes.',
    tags: ['API Integration', 'Workflow Orchestration', 'Human-in-Loop'],
  },
]

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built Across Chat, Voice, Automation, and SaaS
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Experience building production-grade AI systems across different domains and modalities
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {experiences.map((exp) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="group glass-effect glow-card p-8 rounded-xl border border-accent/20 hover:border-accent/50"
              >
                {/* Category badge */}
                <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-xs font-semibold mb-4">
                  {exp.category}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-block">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-accent-light transition-colors">
                  {exp.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-slate-300 border border-accent/20 group-hover:border-accent/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
