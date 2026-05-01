'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

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
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-primary border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">SwiftAi</span>
            </h3>
            <p className="text-slate-400">AI Solutions Studio</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              SwiftAi operates under <span className="text-slate-300">Mishra Tiles and Sanitary</span> for taxation purposes.
            </p>
            <p className="text-slate-400 text-sm">
              <span className="text-slate-300">GSTIN: 21ABKPM7707M1ZE</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-accent/10 my-8" />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.p variants={itemVariants}>
            © {currentYear} SwiftAi. All rights reserved.
          </motion.p>
          <motion.p variants={itemVariants}>
            Building the future of AI automation.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
