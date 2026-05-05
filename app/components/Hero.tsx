'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'

export default function Hero() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  // ── AetherFlow particle network — re-themed to SwiftAi cyan/navy ──
  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const mouse = { x: null as number | null, y: null as number | null, radius: 180 }

    class Particle {
      x: number
      y: number
      directionX: number
      directionY: number
      size: number
      color: string

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string,
      ) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        if (!canvas) return
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < mouse.radius + this.size) {
            const force = (mouse.radius - distance) / mouse.radius
            this.x -= (dx / distance) * force * 5
            this.y -= (dy / distance) * force * 5
          }
        }

        this.x += this.directionX
        this.y += this.directionY
        this.draw()
      }
    }

    let particles: Particle[] = []

    function init() {
      if (!canvas) return
      particles = []
      const count = (canvas.height * canvas.width) / 9000
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 0.8
        const x = Math.random() * (canvas.width - size * 4) + size * 2
        const y = Math.random() * (canvas.height - size * 4) + size * 2
        const dirX = (Math.random() * 0.4) - 0.2
        const dirY = (Math.random() * 0.4) - 0.2
        // Cyan palette — matches SwiftAi accent colors
        const alpha = (Math.random() * 0.4 + 0.5).toFixed(2)
        const color = `rgba(6,182,212,${alpha})`
        particles.push(new Particle(x, y, dirX, dirY, size, color))
      }
    }

    function connect() {
      if (!canvas || !ctx) return
      const threshold = (canvas.width / 7) * (canvas.height / 7)
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const dist2 = dx * dx + dy * dy
          if (dist2 < threshold) {
            const opacity = 1 - dist2 / threshold

            // Near mouse → brighter cyan; default → dim cyan
            const nearMouse =
              mouse.x !== null &&
              mouse.y !== null &&
              Math.sqrt((particles[a].x - mouse.x) ** 2 + (particles[a].y - mouse.y) ** 2) <
                mouse.radius

            ctx.strokeStyle = nearMouse
              ? `rgba(34,211,238,${(opacity * 0.85).toFixed(2)})`   // accent-light
              : `rgba(6,182,212,${(opacity * 0.35).toFixed(2)})`    // accent dim
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      if (!canvas || !ctx) return
      animationFrameId = requestAnimationFrame(animate)

      // Dark navy fill — matches #0f172a (primary bg)
      ctx.fillStyle = 'rgba(15,23,42,0.18)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => p.update())
      connect()
    }

    function resizeCanvas() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onMouseOut  = () => { mouse.x = null; mouse.y = null }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseout', onMouseOut)

    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // ── Framer Motion variants ──
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary section-padding">

      {/* ── Canvas particle network (full-bleed background) ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: '#0f172a' }}
      />

      {/* ── Subtle vignette so edges fade into navy ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(15,23,42,0.75) 100%)',
        }}
      />

      {/* ── Fine grid overlay (sits above canvas) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Glow orbs (atmospheric depth) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-52 -right-52 w-[580px] h-[580px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-52 -left-52 w-[480px] h-[480px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.10, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          className="space-y-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8 backdrop-blur-sm text-accent-light text-sm font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Production AI Systems
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
          >
            Build AI Systems That{' '}
            <span className="gradient-text">Actually Work</span>
            {' '}in Production
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            SwiftAi designs and deploys RAG chatbots, multilingual voice agents, and AI
            automation systems used in real business workflows.
          </motion.p>

          {/* Supporting line */}
          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base text-slate-400 tracking-wide font-medium"
          >
            Built for reliability.&nbsp;&nbsp;Designed for scale.&nbsp;&nbsp;Focused on real outcomes.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-accent to-accent-light text-primary font-semibold text-base shadow-glow hover:shadow-[0_0_44px_rgba(6,182,212,0.55)] transition-shadow"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </a>
            <a href="#services">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-accent/40 bg-white/[0.03] backdrop-blur-sm text-accent hover:bg-accent/10 font-semibold text-base transition-colors"
              >
                Explore Our Work
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </a>
          </motion.div>

          {/* Trust micro-signals */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 pt-6"
          >
            {['Production-Deployed Systems', 'Real Business Workflows', 'Reliability First'].map(
              (label) => (
                <div key={label} className="flex items-center gap-2 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                  {label}
                </div>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
