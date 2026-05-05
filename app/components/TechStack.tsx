'use client'

import { motion } from 'framer-motion'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

const stack = [
  {
    category: 'LLMs & AI Models',
    techs: ['OpenAI GPT-4o', 'Anthropic Claude', 'Google Gemini', 'Open-source LLMs'],
  },
  {
    category: 'Backend',
    techs: ['Node.js', 'Python / FastAPI', 'Express', 'REST & WebSockets'],
  },
  {
    category: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Data & Vector DBs',
    techs: ['PostgreSQL', 'MongoDB', 'Qdrant', 'pgvector'],
  },
  {
    category: 'Voice & Audio',
    techs: ['STT Pipelines', 'TTS Engines', 'Real-time Audio', 'IVR Integration'],
  },
  {
    category: 'Infrastructure',
    techs: ['Docker', 'Cloud Deployments', 'CI/CD Pipelines', 'Monitoring & Logging'],
  },
]

// Shared card inner
function StackCard({ group }: { group: typeof stack[0] }) {
  return (
    <div className="bg-secondary rounded-2xl border border-accent/25 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
      <h3 className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.techs.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 bg-primary rounded-lg text-slate-300 text-xs font-medium border border-accent/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="section-padding bg-secondary/25">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Built On Reliable Technology</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Proven tools — chosen for reliability, not novelty.
          </p>
        </motion.div>

        {/* ── Mobile: ScrollStack ── */}
        <div className="md:hidden pb-32">
          <ScrollStack
            itemDistance={60}
            itemStackDistance={18}
            baseScale={0.88}
            itemScale={0.025}
            stackPosition="22%"
            scaleEndPosition="8%"
          >
            {stack.map((group) => (
              <ScrollStackItem key={group.category}>
                <StackCard group={group} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* ── Desktop: Grid ── */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {stack.map((group) => (
            <motion.div
              key={group.category}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect glow-card p-6 rounded-xl border border-accent/15 hover:border-accent/40 transition-all duration-300"
            >
              <h3 className="text-accent font-semibold text-sm uppercase tracking-wide mb-5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary rounded-lg text-slate-300 text-xs font-medium border border-accent/15 hover:border-accent/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
