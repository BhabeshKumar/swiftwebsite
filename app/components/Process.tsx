'use client'

import { motion } from 'framer-motion'
import {
  Lightbulb,
  Palette,
  Code,
  Rocket,
  TrendingUp,
} from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    title: 'Discover',
    description: 'We dive deep into your business, challenges, and goals to understand what AI can truly solve for you.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'We architect scalable, maintainable solutions with proper data pipelines, workflows, and system design.',
  },
  {
    icon: Code,
    title: 'Build',
    description: 'Production-grade development with testing, monitoring, security, and performance optimization from day one.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'We handle deployment, integration, and setup so your team can focus on leveraging the AI system.',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Continuous optimization, monitoring, and enhancement as your system grows and evolves.',
  },
]

export default function Process() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-xl text-slate-400">
            A proven methodology for building AI systems that deliver real value
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent-dark to-transparent transform -translate-x-1/2 z-0" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-semibold mb-3 text-white">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon circle */}
                  <motion.div
                    className="flex-shrink-0 relative z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center border-4 border-secondary shadow-glow cursor-pointer hover:shadow-lg transition-shadow">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Content for mobile */}
                  <div className="flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
