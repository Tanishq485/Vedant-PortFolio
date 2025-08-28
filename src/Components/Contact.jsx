import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.14 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
const card = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 18 } }
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const socials = [
    { label: 'GitHub', href: 'https://github.com/Tanish6738', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/tanishq-chouhan', icon: Linkedin },
    { label: 'Twitter', href: 'https://twitter.com', icon: Twitter }
  ]

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'Tanishq485@gmail.com', href: 'mailto:Tanishq485@gmail.com' },
    { icon: Phone, title: 'Phone', value: '+91 81039 42742', href: 'tel:+918103942742' },
    { icon: MapPin, title: 'Location', value: 'Indore, India' }
  ]

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Required'
    if (!form.email.trim()) next.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Invalid email'
    if (!form.subject.trim()) next.subject = 'Required'
    if (!form.message.trim()) next.message = 'Required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(err => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    // Simulate async send (replace with real endpoint integration later)
    setTimeout(() => {
      // Simple random fail simulation can be added; keep success for now
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1100)
  }

  return (
    <motion.section
      id='contact'
      variants={container}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      className='relative overflow-hidden w-full py-24 px-6 md:px-10 lg:px-14 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200'
    >
      {/* Ambient glows */}
      <div className='pointer-events-none absolute -top-28 -left-32 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl' />
      <div className='pointer-events-none absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-fuchsia-500/10 blur-3xl' />
      <div className='pointer-events-none absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl' />

      <motion.header variants={fadeUp} className='relative z-10 max-w-3xl'>
        <h2 className='text-4xl md:text-5xl font-bold tracking-tight gradient-text'>Get In Touch</h2>
        <p className='mt-3 text-sm md:text-base text-teal-200/90 max-w-xl'>Open to collaboration, freelance/contract builds & hackathon teaming. Drop a line and I&apos;ll respond swiftly.</p>
      </motion.header>

      {/* Grid Layout */}
      <motion.div variants={fadeUp} className='relative z-10 mt-14 grid gap-10 lg:gap-14 lg:grid-cols-3'>
        {/* Contact Info & Socials */}
        <div className='space-y-8 lg:col-span-1'>
          <motion.div variants={card} className='group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-gray-600/20 via-gray-700/10 to-gray-800/40'>
            <div className='relative h-full rounded-2xl bg-gray-900/70 border border-gray-700/70 backdrop-blur-sm p-6'>
              <h3 className='text-lg font-semibold tracking-wide mb-4 text-white/95'>Contact Details</h3>
              <ul className='space-y-5 text-sm'>
                {contactInfo.map(info => {
                  const Icon = info.icon
                  return (
                    <li key={info.title} className='flex items-start gap-4'>
                      <span className='inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gray-800/70 border border-gray-700/60 text-teal-300'>
                        <Icon size={20} />
                      </span>
                      <div className='flex-1'>
                        <p className='text-[0.7rem] font-semibold uppercase tracking-wide text-teal-300/80'>{info.title}</p>
                        {info.href ? (
                          <a href={info.href} className='text-gray-300 hover:text-white transition-colors break-words'>{info.value}</a>
                        ) : (
                          <p className='text-gray-300'>{info.value}</p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
              <span className='block mt-6 h-px w-full bg-gradient-to-r from-transparent via-gray-600/40 to-transparent' />
              <div className='mt-6'>
                <p className='text-[0.7rem] font-semibold uppercase tracking-wide text-teal-300/80 mb-3'>Social</p>
                <div className='flex flex-wrap gap-3'>
                  {socials.map((s, i) => {
                    const Icon = s.icon
                    return (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        variants={card}
                        whileHover={{ y: -4, rotate: 2 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ transitionDelay: `${i * 60}ms` }}
                        className='relative inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-700/60 bg-gray-800/40 text-sm text-gray-300 hover:text-white hover:border-teal-400/50 hover:bg-gray-800/70 transition-colors overflow-hidden'
                        aria-label={s.label}
                      >
                        <Icon size={16} /> {s.label}
                        <span className='absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-teal-300/10 transition-opacity' />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={card} className='relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-indigo-400/10 via-fuchsia-400/10 to-pink-300/10'>
            <div className='relative rounded-2xl bg-gray-900/70 border border-gray-700/70 backdrop-blur-sm p-6'>
              <h4 className='text-base font-semibold tracking-wide mb-4 text-white/95'>Response Time</h4>
              <p className='text-sm leading-relaxed text-gray-300'>I usually reply within <span className='text-teal-300 font-medium'>24 hours</span>. For urgent matters, email is the fastest channel. Let me know scope, timelines & any constraints for quicker collaboration.</p>
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div variants={card} className='lg:col-span-2 group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-gray-600/20 via-gray-700/10 to-gray-800/40'>
          <form onSubmit={handleSubmit} className='relative rounded-2xl bg-gray-900/70 border border-gray-700/70 backdrop-blur-sm p-6 md:p-8 flex flex-col gap-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='name' className='text-xs font-semibold uppercase tracking-wide text-teal-300/80'>Name</label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={form.name}
                  onChange={handleChange}
                  placeholder='Your name'
                  className={`px-4 py-3 rounded-lg bg-gray-800/60 border ${errors.name ? 'border-rose-500/70 focus:ring-rose-400/40' : 'border-gray-700/60 focus:ring-teal-400/40'} focus:outline-none focus:ring-2 text-sm text-gray-200 placeholder-gray-400 transition`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <span id='name-error' className='text-[0.7rem] text-rose-400 font-medium'>{errors.name}</span>}
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='text-xs font-semibold uppercase tracking-wide text-teal-300/80'>Email</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='you@example.com'
                  className={`px-4 py-3 rounded-lg bg-gray-800/60 border ${errors.email ? 'border-rose-500/70 focus:ring-rose-400/40' : 'border-gray-700/60 focus:ring-teal-400/40'} focus:outline-none focus:ring-2 text-sm text-gray-200 placeholder-gray-400 transition`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <span id='email-error' className='text-[0.7rem] text-rose-400 font-medium'>{errors.email}</span>}
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='subject' className='text-xs font-semibold uppercase tracking-wide text-teal-300/80'>Subject</label>
              <input
                id='subject'
                name='subject'
                type='text'
                value={form.subject}
                onChange={handleChange}
                placeholder='Project idea / Collaboration / Inquiry'
                className={`px-4 py-3 rounded-lg bg-gray-800/60 border ${errors.subject ? 'border-rose-500/70 focus:ring-rose-400/40' : 'border-gray-700/60 focus:ring-teal-400/40'} focus:outline-none focus:ring-2 text-sm text-gray-200 placeholder-gray-400 transition`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && <span id='subject-error' className='text-[0.7rem] text-rose-400 font-medium'>{errors.subject}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='message' className='text-xs font-semibold uppercase tracking-wide text-teal-300/80'>Message</label>
              <textarea
                id='message'
                name='message'
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder='Briefly outline context, goals & any constraints...'
                className={`resize-none px-4 py-3 rounded-lg bg-gray-800/60 border ${errors.message ? 'border-rose-500/70 focus:ring-rose-400/40' : 'border-gray-700/60 focus:ring-teal-400/40'} focus:outline-none focus:ring-2 text-sm text-gray-200 placeholder-gray-400 transition`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <span id='message-error' className='text-[0.7rem] text-rose-400 font-medium'>{errors.message}</span>}
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center gap-4 pt-2'>
              <motion.button
                type='submit'
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.92 }}
                disabled={status === 'submitting' || status === 'success'}
                className='relative inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-teal-500/50 bg-gradient-to-br from-teal-500/20 via-cyan-500/20 to-teal-400/20 text-teal-200 font-medium text-sm tracking-wide hover:text-white hover:from-teal-500/30 hover:to-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm overflow-hidden'
              >
                <Send size={16} className='relative z-10' />
                <span className='relative z-10'>{status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}</span>
                <span className='absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-teal-300/10 transition-opacity' />
              </motion.button>
              {status === 'success' && (
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='text-sm font-medium text-teal-300'
                >Message sent. I&apos;ll reply shortly.</motion.span>
              )}
              {status === 'error' && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-sm font-medium text-rose-400'>Failed. Try again.</motion.span>
              )}
              <span className='text-[0.65rem] text-gray-500 flex-1'>No spam. Your details are not stored server‑side in this demo.</span>
            </div>
          </form>
        </motion.div>
      </motion.div>

      {/* Decorative lines */}
      <div className='pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700/40 to-transparent' />
        <div className='absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gray-700/40 to-transparent' />
        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-700/40 to-transparent' />
      </div>
    </motion.section>
  )
}

export default Contact