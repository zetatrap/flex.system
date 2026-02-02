'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import ParticlesBackground from '@/components/ParticlesBackground'
import { Clock } from 'lucide-react'

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = '5491234567890' // Reemplaza con tu número de WhatsApp
    const message = encodeURIComponent('¡Hola! Estoy interesado en comprar Flex Gym por $500.000')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Main Content - Sin scroll en mobile */}
      <main className="relative z-10 w-full h-screen flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Grid Layout - Responsive sin scroll */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center h-full">
            
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full max-h-[40vh] lg:max-h-[80vh] flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-gold blur-3xl opacity-20 animate-pulse-slow" />
                
                {/* Main Image Container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotateY: [0, 5, 0, -5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative w-full max-w-md lg:max-w-lg"
                  >
                    {/* Placeholder for app image */}
                    <div className="relative aspect-[9/16] bg-gradient-to-br from-flex-gold/20 via-flex-dark to-flex-black rounded-3xl shadow-gold-lg border-2 border-flex-gold/30 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="text-6xl mb-4">🏋️</div>
                          <div className="text-2xl font-bold text-gradient-gold mb-2">FLEX GYM</div>
                          <div className="text-sm text-flex-silver">Coloca tu screenshot aquí</div>
                          <div className="text-xs text-flex-silver-dark mt-2">
                            /public/images/landing/flexgym-screenshot.png
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center space-y-3 md:space-y-6 h-full max-h-[55vh] lg:max-h-none"
            >
              {/* Title */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4"
                >
                  <span className="text-gradient-gold glow-gold">FLEX GYM</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xs md:text-sm lg:text-base text-flex-gold-light font-medium"
                >
                  Sistema Profesional de Gestión Deportiva
                </motion.p>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-2 md:space-y-3"
              >
                <p className="text-sm md:text-base lg:text-lg text-flex-silver leading-relaxed">
                  <span className="font-bold text-flex-gold">✓</span> Control total de membresías y pagos
                </p>
                <p className="text-sm md:text-base lg:text-lg text-flex-silver leading-relaxed">
                  <span className="font-bold text-flex-gold">✓</span> Check-in automático con tecnología QR
                </p>
                <p className="text-sm md:text-base lg:text-lg text-flex-silver leading-relaxed">
                  <span className="font-bold text-flex-gold">✓</span> Dashboard con métricas en tiempo real
                </p>
                <p className="text-sm md:text-base lg:text-lg text-flex-silver leading-relaxed">
                  <span className="font-bold text-flex-gold">✓</span> Gestión de clases y profesionales
                </p>
                <p className="text-sm md:text-base lg:text-lg text-flex-silver leading-relaxed">
                  <span className="font-bold text-flex-gold">✓</span> Reportes financieros completos
                </p>
              </motion.div>

              {/* Price Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-3 md:p-6 border-2 border-flex-gold/30">
                  {/* Old Price */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-base md:text-xl lg:text-2xl text-flex-silver-dark line-through decoration-2">
                      $700.000 ARS
                    </span>
                  </div>

                  {/* New Price */}
                  <div className="flex items-center justify-center gap-3 mb-2 md:mb-3">
                    <motion.span
                      animate={{ 
                        scale: [1, 1.05, 1],
                        textShadow: [
                          "0 0 10px rgba(255, 215, 0, 0.8)",
                          "0 0 20px rgba(255, 215, 0, 1)",
                          "0 0 10px rgba(255, 215, 0, 0.8)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-3xl md:text-4xl lg:text-6xl font-bold text-gradient-gold"
                    >
                      $500.000 ARS
                    </motion.span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="flex items-center justify-center gap-2 text-flex-gold-light">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Clock className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.div>
                    <span className="text-xs md:text-sm font-medium">
                      Oferta expira en: {String(timeLeft.hours).padStart(2, '0')}:
                      {String(timeLeft.minutes).padStart(2, '0')}:
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Discount Badge */}
                  <motion.div
                    animate={{ 
                      rotate: [-2, 2, -2],
                    }}
                    transition={{ 
                      duration: 0.5, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute -top-3 -right-3 md:-top-4 md:-right-4"
                  >
                    <div className="bg-gradient-gold rounded-full px-3 py-1 md:px-4 md:py-2 shadow-gold-lg">
                      <span className="text-xs md:text-sm lg:text-base font-bold text-flex-black">
                        -29% OFF
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="relative group w-full py-3 md:py-4 lg:py-5 px-6 md:px-8 bg-gradient-gold rounded-full font-bold text-base md:text-lg lg:text-2xl shadow-gold-lg hover:shadow-gold transition-all duration-300 overflow-hidden"
              >
                {/* Button glow animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                
                <span className="relative z-10 text-flex-black flex items-center justify-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl lg:text-3xl">💬</span>
                  COMPRAR YA
                </span>
              </motion.button>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center justify-center gap-3 md:gap-6 text-xs md:text-sm text-flex-silver-dark"
              >
                <div className="flex items-center gap-1 md:gap-2">
                  <span>🔒</span>
                  <span className="hidden md:inline">Compra Segura</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>⚡</span>
                  <span className="hidden md:inline">Entrega Inmediata</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span>🛡️</span>
                  <span className="hidden md:inline">Soporte 24/7</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Floating elements for extra flair */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-flex-gold/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-flex-gold/10 rounded-full blur-2xl"
      />
    </div>
  )
}
