'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  Mic,
  Zap,
  Boxes,
  FileText,
  Brain,
} from 'lucide-react'

const services = [
  {
    icon: MessageSquare,
    title: 'RAG-Based AI Chatbots',
    description: 'Intelligent chatbots that access your knowledge base, documents, and data sources to provide accurate, contextual answers.',
  },
  {
    icon: Mic,
    title: 'Multilingual Voice Agents',
    description: 'Voice-enabled AI agents that understand and respond in multiple languages, perfect for global operations.',
  },
  {
    icon: Zap,
    title: 'AI Automation Tools',
    description: 'End-to-end workflow automation that integrates with your existing systems and processes.',
  },
  {
    icon: Boxes,
    title: 'AI SaaS Platforms',
    description: 'Build scalable, production-grade AI products with proper infrastructure, monitoring, and performance.',
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    description: 'Extract, analyze, and process documents at scale using AI-powered document understanding.',
  },
  {
    icon: Brain,
    title: 'Custom AI Agents',
    description: 'Purpose-built AI agents that can reason, plan, and execute complex business tasks.',
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Build</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to automate operations and enhance your business capabilities.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group glass-effect glow-card p-8 rounded-xl border border-accent/20 hover:border-accent/50 cursor-pointer"
              >
                {/* Icon with background */}
                <div className="mb-6 inline-block p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-accent-light transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <span className="ml-2 inline-block transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
