'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  href?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  href,
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center whitespace-nowrap'

  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent to-accent-light text-primary hover:shadow-glow hover:scale-105',
    secondary: 'border border-accent/50 text-accent hover:bg-accent/10 hover:border-accent',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
