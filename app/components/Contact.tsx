'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="section-padding bg-secondary/50 border-t border-accent/10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Icon */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="p-4 bg-accent/10 rounded-lg">
              <Mail className="w-8 h-8 text-accent" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold"
          >
            Get in Touch
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 leading-relaxed"
          >
            For project inquiries, collaborations, or consultations, please reach out to us directly via email. We'll respond promptly and discuss how we can help bring your AI vision to life.
          </motion.p>

          {/* Email Link */}
          <motion.div variants={itemVariants}>
            <a
              href="mailto:support@swiftai.live"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-primary rounded-lg font-semibold text-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
              support@swiftai.live
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-sm pt-4"
          >
            We typically respond within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
