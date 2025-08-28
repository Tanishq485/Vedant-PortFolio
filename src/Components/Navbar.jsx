import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  // Animation variants for the step-like overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: 'easeInOut'
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  // Animation for step sections (strips coming from top to bottom, right to left)
  const stepVariants = {
    hidden: { scaleY: 0, transformOrigin: 'top' },
    visible: (i) => ({
      scaleY: 1,
      transformOrigin: 'top',
      transition: {
        delay: (4 - i) * 0.15, // Right to left delay (reverse index)
        duration: 0.6,
        ease: 'easeOut'
      }
    }),
    exit: (i) => ({
      scaleY: 0,
      transformOrigin: 'top',
      transition: {
        delay: i * 0.1, // Left to right exit
        duration: 0.4,
        ease: 'easeIn'
      }
    })
  }

  // Animation for navigation links
  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1, // Wait for strips animation to complete
        duration: 0.5,
        ease: 'easeOut'
      }
    }),
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.3 }
    }
  }

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[20vh] flex items-center justify-center ">
          <div className="flex justify-between items-center h-16 w-full ">
            {/* Logo/Brand */}
            <div className="flex-1 flex justify-center sm:justify-start">
              <motion.h1 
                className="text-5xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                
              </motion.h1>
            </div>

            {/* Hamburger Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-black transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="w-32 h-32 text-white hober" />
                ) : (
                  <Menu className="w-32 h-32 text-white hober" />
                )}
              </motion.div>
            </motion.button>

            {/* Desktop Navigation Links */}
            {/* <div className="hidden md:flex space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div> */}
          </div>
        </div>
      </nav>

      {/* Full-Page Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Step-like background sections - vertical strips from right to left */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={stepVariants}
                className="flex-1 h-full"
                style={{
                  // background: `linear-gradient(180deg, 
                  //   hsl(${220 + i * 10}, 30%, ${15 - i * 2}%), 
                  //   hsl(${240 + i * 5}, 25%, ${10 - i * 1}%))`
                  backgroundColor:'black'
                }}
              />
            ))}

            {/* Navigation Content */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              variants={overlayVariants}
            >
              <div className="text-center">
                {/* Navigation Links */}
                <nav className="space-y-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      custom={index}
                      variants={linkVariants}
                    >
                      <a
                        href={link.href}
                        onClick={toggleMenu}
                        className="block text-white text-4xl md:text-6xl font-light hover:text-gray-300 transition-colors duration-300"
                      >
                        <motion.span
                          whileHover={{ 
                            scale: 1.05,
                            textShadow: '0 0 20px rgba(255,255,255,0.3)'
                          }}
                          className="inline-block"
                        >
                          {link.name}
                        </motion.span>
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* Social Links or Additional Info */}
                <motion.div
                  className="mt-16 space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-gray-400 text-sm">Follow me</span>
                  <div className="flex justify-center space-x-4 mt-4">
                    {['LinkedIn', 'GitHub', 'Twitter'].map((social, index) => (
                      <motion.a
                        key={social}
                        href="#"
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                        whileHover={{ y: -2 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                      >
                        {social}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar