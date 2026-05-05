'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section className="section-padding bg-primary border-t border-accent/10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Get in Touch</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            For serious inquiries, partnerships, or AI system development,
            reach us directly.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {/* Email */}
          <a
            href="mailto:support@swiftai.live"
            className="group glass-effect glow-card flex items-center gap-5 p-6 rounded-2xl border border-accent/20 hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
              <p className="text-white font-medium text-sm truncate group-hover:text-accent-light transition-colors">
                support@swiftai.live
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-accent ml-auto flex-shrink-0 transition-colors" />
          </a>

          {/* Phone */}
          <a
            href="tel:+917735367840"
            className="group glass-effect glow-card flex items-center gap-5 p-6 rounded-2xl border border-accent/20 hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Phone</p>
              <p className="text-white font-medium text-sm group-hover:text-accent-light transition-colors">
                +91 77353 67840
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-accent ml-auto flex-shrink-0 transition-colors" />
          </a>
        </motion.div>

        {/* Response note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          We typically respond within 24 hours on business days.
        </motion.p>
      </div>
    </section>
  )
}
