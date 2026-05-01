'use client'

import { motion } from 'framer-motion'

const techCategories = [
  {
    category: 'LLMs & AI',
    techs: ['OpenAI', 'Anthropic', 'Gemini', 'LLaMA'],
  },
  {
    category: 'Backend',
    techs: ['Node.js', 'Python', 'FastAPI', 'Express'],
  },
  {
    category: 'Frontend',
    techs: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    category: 'Databases',
    techs: ['PostgreSQL', 'MongoDB', 'Qdrant', 'pgvector'],
  },
  {
    category: 'Voice & Audio',
    techs: ['STT Pipelines', 'TTS Engines', 'Real-time Processing', 'Audio Streaming'],
  },
  {
    category: 'Infrastructure',
    techs: ['Docker', 'Kubernetes', 'AWS', 'Cloud Computing'],
  },
]

export default function TechStack() {
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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const techVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technology Stack</h2>
          <p className="text-xl text-slate-400">
            We leverage the latest and most reliable technologies to build AI systems
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {techCategories.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="glass-effect glow-card p-8 rounded-xl border border-accent/20 hover:border-accent/50"
            >
              {/* Category title */}
              <h3 className="text-xl font-semibold text-accent mb-6">
                {group.category}
              </h3>

              {/* Tech list */}
              <div className="flex flex-wrap gap-3">
                {group.techs.map((tech) => (
                  <motion.div
                    key={tech}
                    variants={techVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-secondary rounded-lg text-slate-300 text-sm font-medium border border-accent/20 hover:border-accent/50 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
