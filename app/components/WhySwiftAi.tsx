'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Shield,
  Users,
  Lock,
  Rocket,
  TrendingUp,
} from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Production-First Mindset',
    description: 'We build systems that are battle-tested, monitoring-ready, and designed for real-world deployment from day one.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    description: 'Infrastructure designed to grow with your business, from MVP to millions of requests per day.',
  },
  {
    icon: Users,
    title: 'Human-in-the-Loop Design',
    description: 'AI systems that augment human capabilities, with proper oversight and control mechanisms.',
  },
  {
    icon: Lock,
    title: 'Privacy-Aware Systems',
    description: 'Built with data privacy and compliance at the core—GDPR, SOC 2, and security-first architecture.',
  },
  {
    icon: Rocket,
    title: 'Fast MVP Delivery',
    description: 'Get to market quickly without sacrificing quality. We focus on what matters first.',
  },
  {
    icon: Shield,
    title: 'Business-Focused Approach',
    description: 'Every feature, every decision is aligned with your business goals and ROI.',
  },
]

export default function WhySwiftAi() {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI That Is Practical, Secure, and Built for Adoption
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We don't build experiments. We build AI systems that drive real business value.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="flex flex-col"
              >
                {/* Icon */}
                <div className="mb-4 inline-block">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed flex-grow">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
