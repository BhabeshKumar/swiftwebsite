'use client'

import { motion } from 'framer-motion'
import {
  Headphones,
  Lightbulb,
  Users,
  Mic,
  FileText,
  Target,
} from 'lucide-react'

const useCases = [
  {
    icon: Headphones,
    title: 'Customer Support Automation',
    description: 'AI-powered support agents that handle common inquiries 24/7, reducing support costs while improving response times.',
  },
  {
    icon: Lightbulb,
    title: 'Internal Knowledge Assistants',
    description: 'AI systems that help your team access institutional knowledge, policies, and documentation instantly.',
  },
  {
    icon: Users,
    title: 'Workforce Intelligence Systems',
    description: 'Tools that analyze workflows, optimize processes, and help teams work more effectively with AI assistance.',
  },
  {
    icon: Mic,
    title: 'Voice-Based Operations',
    description: 'Voice interfaces for hands-free operations, perfect for field teams and environments where typing isn\'t practical.',
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    description: 'Automated document processing, classification, and extraction at enterprise scale.',
  },
  {
    icon: Target,
    title: 'Lead Qualification Automation',
    description: 'AI-driven lead scoring and qualification that helps sales teams focus on the right opportunities.',
  },
]

export default function UseCases() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Real-World Use Cases</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            AI solutions that solve concrete business problems
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {useCases.map((useCase) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={useCase.title}
                variants={itemVariants}
                className="group glass-effect glow-card p-8 rounded-xl border border-accent/20 hover:border-accent/50 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-block">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
