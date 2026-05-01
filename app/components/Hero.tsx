'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from './Button'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-ai section-padding">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, 0.05) 25%, rgba(6, 182, 212, 0.05) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.05) 75%, rgba(6, 182, 212, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.05) 25%, rgba(6, 182, 212, 0.05) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.05) 75%, rgba(6, 182, 212, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent via-accent-dark to-transparent rounded-full blur-3xl opacity-20"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-dark via-accent to-transparent rounded-full blur-3xl opacity-20"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-block px-4 py-2 rounded-full bg-secondary border border-accent/30 text-accent-light text-sm font-medium">
              ✨ AI Systems for Enterprise
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            Build AI Systems That{' '}
            <span className="gradient-text">Actually Work</span> in Production
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            SwiftAi designs and develops AI chatbots, multilingual voice agents, automation tools, and AI SaaS platforms that help businesses move faster and operate smarter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <a href="#contact" className="inline-block">
              <Button variant="primary" size="lg">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#services" className="inline-block">
              <Button variant="secondary" size="lg">
                Explore Our Work
              </Button>
            </a>
          </motion.div>

          {/* Floating cards - optional enhancement */}
          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <p className="text-sm text-slate-400 mb-6">Trusted by forward-thinking businesses</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {['Production Ready', 'Secure & Scalable', 'Business Focused'].map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
