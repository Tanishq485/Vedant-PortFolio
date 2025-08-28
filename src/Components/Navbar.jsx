import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  // Lock background scroll when menu is open (mobile friendliness)
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalOverflow || ''
    }
    return () => {
      document.body.style.overflow = originalOverflow || ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (path) => {
    // Delay to let tap animation play
    setTimeout(() => {
      navigate(path)
      setIsMenuOpen(false)
    }, 170)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
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
    hidden: { scaleY: 0, opacity: 0, transformOrigin: 'top' },
    visible: (i) => ({
      scaleY: 1,
      opacity: 1,
      transformOrigin: 'top',
      transition: {
        delay: (4 - i) * 0.15, // Right to left delay (reverse index)
        duration: 0.6,
        ease: 'easeOut'
      }
    }),
    exit: (i) => ({
      scaleY: 0,
      opacity: 0,
      transformOrigin: 'top',
      transition: {
        delay: i * 0.1, // Left to right exit
        duration: 0.6,
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
  <nav className="fixed top-0 left-0 w-full z-50 text-white pointer-events-none">
        <div className="flex items-center justify-end px-4 sm:px-6 md:px-10 lg:px-16 h-16 sm:h-20 md:h-[18vh] lg:h-[20vh]">
          {/* Hamburger Menu Button - positioned to align with Hero's right navigation */}
          <motion.button
            onClick={toggleMenu}
            className="pointer-events-auto p-2 sm:p-3 rounded-lg/none sm:rounded-lg hover:bg-black/60 active:bg-black/70 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/70"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="text-white w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32" />
              ) : (
                <Menu className="text-white w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Full-Page Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
      className="fixed inset-0 z-40 flex touch-none"
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
                  // background: `linear-gradient(180deg, hsl(${220 + i * 8} 40% ${20 - i * 2}%), hsl(${240 + i * 6} 28% ${10 - i}%))`
                  backgroundColor: 'black'
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
    <nav className="space-y-6 sm:space-y-7 md:space-y-8 px-4 sm:px-0">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      custom={index}
                      variants={linkVariants}
                    >
                      <motion.button
                        onClick={() => handleNavClick(link.path)}
      className="group relative block text-white text-3xl sm:text-4xl md:text-6xl font-light w-full text-left focus:outline-none"
                        whileHover={{ scale: 1.04, x: -6 }}
                        whileTap={{ scale: 0.86, rotate: -6, x: -4 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                      >
                        <span className="inline-block relative">
                          <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-200">
                            {link.name}
                          </span>
                          {/* Animated underline / highlight */}
                          <span
                            className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 rounded group-hover:w-full transition-all duration-500"
                          />
                        </span>
                      </motion.button>
                    </motion.div>
                  ))}
                </nav>

                {/* Social Links or Additional Info */}
                <motion.div
                  className="mt-12 sm:mt-14 md:mt-16 space-x-4 sm:space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-gray-400 text-xs sm:text-sm tracking-wide uppercase">Follow me</span>
                  <div className="flex justify-center space-x-3 sm:space-x-4 mt-4">
          {['LinkedIn', 'GitHub', 'Twitter'].map((social, index) => (
                      <motion.a
                        key={social}
                        href="#"
            className="text-gray-400 hover:text-orange-400 text-xs sm:text-sm transition-colors duration-200"
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