'use client'

import { motion } from 'framer-motion'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-1 gradient-text">SwiftAi</h3>
            <p className="text-slate-500 text-sm mb-4">AI Solutions Studio</p>
            <p className="text-slate-600 text-xs leading-relaxed max-w-xs">
              We design and deploy production-grade AI systems for businesses that need results, not prototypes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-3">
              SwiftAi operates under{' '}
              <span className="text-slate-400">Mishra Tiles and Sanitary</span>{' '}
              for taxation purposes.
            </p>
            <p className="text-slate-500 text-sm">
              GSTIN:{' '}
              <span className="text-slate-400 font-mono">21ABKPM7707M1ZE</span>
            </p>
          </div>
        </motion.div>

        <div className="border-t border-accent/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
          <p>© {new Date().getFullYear()} SwiftAi. All rights reserved.</p>
          <p>Built with intent. Deployed with purpose.</p>
        </div>
      </div>
    </footer>
  )
}
