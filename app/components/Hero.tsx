'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary section-padding">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/60 to-primary" />

        {/* Glow orbs */}
        <motion.div
          className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Floating data-flow dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/40"
            style={{
              width: i % 3 === 0 ? 4 : 2,
              height: i % 3 === 0 ? 4 : 2,
              left: `${8 + (i * 7.5) % 84}%`,
              top: `${10 + (i * 11) % 75}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.35,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          className="space-y-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent-light text-sm font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Production AI Systems
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
          >
            Build AI Systems That{' '}
            <span className="gradient-text">Actually Work</span>
            {' '}in Production
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            SwiftAi designs and deploys RAG chatbots, multilingual voice agents, and AI
            automation systems used in real business workflows.
          </motion.p>

          {/* Supporting line */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-slate-400 tracking-wide font-medium"
          >
            Built for reliability.&nbsp;&nbsp;Designed for scale.&nbsp;&nbsp;Focused on real outcomes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-accent to-accent-light text-primary font-semibold text-base shadow-glow hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-shadow"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </a>
            <a href="#services">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-accent/40 text-accent hover:bg-accent/8 font-semibold text-base transition-colors"
              >
                Explore Our Work
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </a>
          </motion.div>

          {/* Trust micro-signals */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 pt-6"
          >
            {[
              'Production-Deployed Systems',
              'Real Business Workflows',
              'Reliability First',
            ].map((label) => (
              <div key={label} className="flex items-center gap-2 text-slate-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
