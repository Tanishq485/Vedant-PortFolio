import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Slider from '../Elements/Slider'
import XO from '../Elements/XO'
import Loader1 from '../Elements/Loader1'

const Hero = () => {
  const navigate = useNavigate()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Tanish6738', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/tanishq-chouhan', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:tanishq@example.com', label: 'Email' }
  ]

  const navigationButtons = [
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ]

  const handleNavClick = (path) => {
    navigate(path)
  }

  return (
    <div className='bg-gray-900 h-screen w-full flex items-center justify-between px-8 md:px-16 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50'></div>
      
      {/* Left side - Social Media Icons */}
      <motion.div 
        className='flex flex-col gap-6 z-10 relative'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className='w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all duration-300 hover:scale-110'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <IconComponent size={20} />
            </motion.a>
          )
        })}
      </motion.div>

      {/* Center - Main Content */}
      <motion.div 
        className='flex-1 flex flex-col items-center justify-center text-center z-10 max-w-2xl mx-8'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.h1 
          className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Hey, I am Tanishq
        </motion.h1>
        <motion.h2 
          className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Chouhan
        </motion.h2>
        
        {/* Optional: Add a subtitle or description */}
        <motion.p 
          className='text-lg md:text-xl text-gray-400 max-w-lg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Full Stack Developer & Creative Designer
        </motion.p>
      </motion.div>

      {/* Right side - Navigation Buttons */}
      <motion.div 
        className='flex flex-col gap-4 z-10 relative'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {navigationButtons.map((nav, index) => (
          <motion.button
            key={nav.name}
            onClick={() => handleNavClick(nav.path)}
            className='px-8 py-3 border-2 border-gray-400 text-gray-300 font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-center min-w-[120px] hover:border-white'
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {nav.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Optional: Add some decorative elements using your custom components */}
      <div className='absolute top-10 right-10 opacity-20'>
        {/* You can uncomment and position these as needed */}
        {/* <XO /> */}
      </div>
      <div className='absolute bottom-10 left-10 opacity-20'>
        {/* <Loader1 /> */}
      </div>
    </div>
  )
}

export default Hero