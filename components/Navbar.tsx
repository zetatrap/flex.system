'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-gold' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold blur-lg opacity-50" />
              <span className="relative text-3xl font-bold text-gradient-gold glow-gold">
                FLEX
              </span>
            </div>
            <span className="text-2xl font-light text-flex-silver">SYSTEMS</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Inicio', 'Aplicaciones', 'Contacto'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-flex-silver hover:text-flex-gold transition-colors duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-gold rounded-full text-flex-black font-bold shadow-gold hover:shadow-gold-lg transition-all duration-300"
          >
            Empezar
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
