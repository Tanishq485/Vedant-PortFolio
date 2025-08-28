import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Cpu, Wrench, Sparkles } from 'lucide-react'

// Data model
const skillGroups = [
  { title: 'Core Stack', icon: Layers, accent: 'from-orange-600 via-orange-500 to-amber-400', items: ['MongoDB', 'Express.js', 'React.js', 'Node.js'] },
  { title: 'Languages & Styling', icon: Cpu, accent: 'from-amber-500 via-orange-500 to-amber-300', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS', 'TailwindCSS', 'SCSS'] },
  { title: 'Tools & Platforms', icon: Wrench, accent: 'from-orange-700 via-orange-600 to-amber-500', items: ['VS Code', 'GitHub', 'Clerk', 'MongoDB Atlas', 'Postman'] },
  { title: 'Soft / Complementary', icon: Sparkles, accent: 'from-amber-600 via-orange-500 to-amber-400', items: ['Prompt Engineering', 'AI Integration', 'Power BI', 'Excel'] }
]

// Animations
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.12 } }
}
const card = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 160, damping: 18 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
}

const Skills = () => {
  return (
    <motion.section
      id='skills'
      variants={container}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
  className='relative overflow-hidden w-full py-24 px-6 md:px-10 lg:px-14 bg-black'
    >
      {/* Ambient blur elements */}
  <div className='pointer-events-none absolute -top-20 -left-24 w-72 h-72 rounded-full bg-orange-600/10 blur-3xl' />
  <div className='pointer-events-none absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-orange-500/10 blur-3xl' />

      <motion.header variants={fadeUp} className='relative z-10 max-w-4xl'>
  <h2 className='text-4xl md:text-5xl font-bold tracking-tight text-white'>Skills & Stack</h2>
  <p className='mt-3 text-sm md:text-base text-orange-300/90 max-w-2xl'>Production‑minded full stack capability with a focus on performance, secure integration, DX tooling and pragmatic AI adoption.</p>
      </motion.header>

      <motion.div variants={fadeUp} className='relative z-10 mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4'>
        {skillGroups.map(g => {
          const Icon = g.icon
          return (
            <motion.div
              key={g.title}
              variants={card}
              whileHover={{ y: -8, rotateX: 8, rotateY: -8 }}
              whileTap={{ scale: 0.96 }}
        className='group relative rounded-2xl p-[1px] bg-gradient-to-br from-neutral-700/30 via-neutral-800/20 to-neutral-900/40'
            >
        <div className='relative h-full flex flex-col rounded-2xl bg-neutral-950/70 border border-neutral-800/70 backdrop-blur-sm p-5 overflow-hidden shadow-sm'>
                <div className={`pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${g.accent} mix-blend-overlay`} />
                <div className='relative flex items-center gap-3 mb-4'>
          <span className='inline-flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-900/70 border border-neutral-700/60 text-orange-400 group-hover:text-white transition-colors'>
                    <Icon size={22} />
                  </span>
          <h3 className='text-sm font-semibold tracking-wide uppercase text-gray-200'>{g.title}</h3>
                </div>
                <ul className='relative z-10 grid grid-cols-1 gap-2 text-[0.78rem] leading-snug font-medium text-gray-300'>
                  {g.items.map(i => (
                    <li key={i} className='flex items-center gap-2'>
            <span className='h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400'></span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <span className='mt-5 block h-px w-full bg-gradient-to-r from-transparent via-gray-600/40 to-transparent' />
                <div className='relative mt-3 flex-1 text-xs text-gray-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  <p>Focused usage patterns, performance profiling & code quality practices embedded.</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div variants={fadeUp} className='relative z-10 mt-16 max-w-4xl text-sm md:text-base leading-relaxed text-gray-300'>
        <p>
          Principles: modular API design, predictable state flows, observability hooks, early feedback loops, and minimal cognitive overhead. I evaluate new tools through the lens of velocity, resilience and developer clarity.
        </p>
      </motion.div>
    </motion.section>
  )
}

export default Skills