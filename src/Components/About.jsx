import React from 'react'
import { motion } from 'framer-motion'
import { Code2, ShieldCheck, Cpu, Rocket, Award } from 'lucide-react'

// Animation helpers
const fadeContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.16 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
}
const popCard = {
  hidden: { opacity: 0, scale: 0.9, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 140, damping: 18 } }
}

const projects = [
  {
    title: 'CodeArc',
    desc: 'AI powered snippet & asset workspace: unified code blocks, editor, converter, docs generator & lightweight project ops.',
    icon: Code2,
    accent: 'from-teal-400 via-cyan-400 to-teal-300'
  },
  {
    title: 'Securo',
    desc: 'Privacy guard: 12‑year breach timeline, AI breach narratives, analytics, private vault, temp mail & repo key scanning.',
    icon: ShieldCheck,
    accent: 'from-indigo-400 via-fuchsia-400 to-pink-300'
  },
  {
    title: 'Kai‑API',
    desc: 'Service scanning public GitHub repos for compromised files / leaked API keys with actionable insights.',
    icon: Cpu,
    accent: 'from-amber-400 via-orange-400 to-yellow-300'
  },
  {
    title: 'Dhruv AI',
    desc: 'Hackathon: crowd lost & found system performing face similarity matching & auto email alerting.',
    icon: Rocket,
    accent: 'from-emerald-400 via-teal-400 to-cyan-300'
  }
]

const achievements = [
  'Winner – Udaan Hackathon 2025',
  'Top 15 – Hackmivo National 2025',
  'Participant – Innothon 36h 2025',
  'Participant – Smart India Hackathon 2024',
  'Participant – Kavach Hackathon 2023'
]

const About = () => {
  return (
    <motion.section
      id="about"
      variants={fadeContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
  className="relative overflow-hidden min-h-screen w-full py-24 px-6 md:px-10 lg:px-14 bg-gradient-to-br from-black via-neutral-900 to-black text-gray-100"
    >
      {/* Ambient gradients */}
  <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 rounded-full bg-orange-600/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-orange-500/5 blur-3xl" />
  <div className="pointer-events-none absolute top-1/2 -left-32 w-72 h-72 rounded-full bg-orange-400/10 blur-3xl" />

      <motion.header variants={fadeUp} className="relative z-10 max-w-4xl">
  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">About Me</h2>
  <p className="mt-3 text-sm md:text-base font-medium tracking-wide text-orange-400/90 uppercase">Full Stack Developer • Builder • Problem Solver</p>
      </motion.header>

      <motion.div variants={fadeUp} className="relative z-10 mt-10 max-w-4xl space-y-6 text-base md:text-lg leading-relaxed text-gray-300">
        <p>
          I'm <span className="font-semibold text-white">Tanishq Chouhan</span>, a full stack developer from Indore focused on shipping robust, scalable and DX‑friendly web products. I own the journey end‑to‑end: data modeling, API layers, secure integration, interactive React UIs and iterative refinement with instrumentation.
        </p>
        <p>
          Recent work blends AI assistance for code generation, static analysis and breach detection—used intentionally to amplify velocity rather than bypass understanding. I value clarity, testability, and measurable impact over unnecessary complexity.
        </p>
      </motion.div>

      {/* Projects grid */}
      <motion.div variants={fadeUp} className="relative z-10 mt-16">
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-6 text-white">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-500/10 ring-1 ring-orange-500/30 text-orange-400"><Code2 size={18} /></span>
          Selected Projects
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={popCard}
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-xl border border-neutral-700/60 bg-neutral-900/40 backdrop-blur-sm p-5 shadow-sm transition-all duration-500"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-400 mix-blend-overlay`} />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-neutral-950/60 border border-neutral-700/60 text-orange-400 group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </span>
                  <div className="space-y-2">
                    <h4 className="text-base font-semibold tracking-wide text-white/95">{p.title}</h4>
                    <p className="text-xs md:text-sm leading-relaxed text-gray-300/90">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Achievements timeline */}
      <motion.div variants={fadeUp} className="relative z-10 mt-20 max-w-3xl">
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-6 text-white">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-500/10 ring-1 ring-orange-500/30 text-orange-400"><Award size={18} /></span>
          Achievements
        </h3>
        <ol className="relative border-l border-gray-700/60 pl-6 space-y-6">
          {achievements.map((a, idx) => (
            <motion.li
              key={a}
              variants={popCard}
              className="relative"
            >
              <span className="absolute -left-3 top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-orange-500 to-amber-300 ring-2 ring-black" />
              <p className="text-sm md:text-[0.92rem] text-gray-300">{a}</p>
            </motion.li>
          ))}
        </ol>
      </motion.div>

      {/* Contact */}
      <motion.div variants={fadeUp} className="relative z-10 mt-20 max-w-3xl">
        <h3 className="text-xl font-semibold mb-4">Contact</h3>
        <div className="text-sm md:text-base space-y-2 text-gray-300">
          <p>Email: <a href="mailto:Tanishq485@gmail.com" className="text-orange-400 hover:text-orange-300 underline decoration-orange-500/60 decoration-2 underline-offset-4">Tanishq485@gmail.com</a></p>
          <p>Mobile: <a href="tel:+918103942742" className="hover:text-orange-300">+91 81039 42742</a></p>
          <p>Location: Indore, India</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
          <a href="#" className="group relative px-4 py-2 rounded-md border border-neutral-700/60 bg-neutral-900/40 hover:bg-neutral-800/70 transition-colors overflow-hidden">
            <span className="relative z-10">GitHub</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-600/10 via-orange-500/10 to-amber-400/10 transition-opacity" />
          </a>
          <a href="#" className="group relative px-4 py-2 rounded-md border border-neutral-700/60 bg-neutral-900/40 hover:bg-neutral-800/70 transition-colors overflow-hidden">
            <span className="relative z-10">Portfolio</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-600/10 via-orange-500/10 to-amber-400/10 transition-opacity" />
          </a>
          <a href="#" className="group relative px-4 py-2 rounded-md border border-neutral-700/60 bg-neutral-900/40 hover:bg-neutral-800/70 transition-colors overflow-hidden">
            <span className="relative z-10">LinkedIn</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-600/10 via-orange-500/10 to-amber-400/10 transition-opacity" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default About