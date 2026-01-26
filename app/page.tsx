'use client'

import { motion } from 'framer-motion'
import Hero3DCarousel from '@/components/Hero3DCarousel'
import ApplicationSlot from '@/components/ApplicationSlot'
import ParticlesBackground from '@/components/ParticlesBackground'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  // Imágenes para el carrusel hero (el usuario las reemplazará con sus propias imágenes PNG)
  const heroImages = [
    '/images/hero/f1 venta.png',
    '/images/hero/venta 2.png',
    '/images/hero/VENTA 3.png',
    '/images/hero/venta ganadora.png',
    '/images/hero/f1 venta.png',
  ]

  // Datos de las 4 aplicaciones
  const applications = [
    {
      appName: 'FlexG',
      description: 'Sistema integral de gestión empresarial con interfaz intuitiva y potentes herramientas de análisis en tiempo real. Optimiza tus operaciones con tecnología de vanguardia.',
      images: [
        '/images/apps/flexg/screenshot1.png',
        '/images/apps/flexg/screenshot2.png',
        '/images/apps/flexg/screenshot3.png',
      ],
      videoUrl: '/videos/flexg-demo.mp4',
    },
    {
      appName: 'AppGym',
      description: 'Plataforma completa para la gestión de gimnasios y centros deportivos. Control de membresías, check-in automático y análisis de rendimiento en una sola aplicación.',
      images: [
        '/images/apps/appgym/screenshot1.png',
        '/images/apps/appgym/screenshot2.png',
        '/images/apps/appgym/screenshot3.png',
      ],
      videoUrl: '/videos/appgym-demo.mp4',
    },
    {
      appName: 'ToxicApp',
      description: 'Solución avanzada para laboratorios con análisis de correlación inteligente. Gestiona agentes, muestras y resultados con precisión científica.',
      images: [
        '/images/apps/toxicapp/screenshot1.png',
        '/images/apps/toxicapp/screenshot2.png',
        '/images/apps/toxicapp/screenshot3.png',
      ],
      videoUrl: '/videos/toxicapp-demo.mp4',
    },
    {
      appName: 'StockyVentas',
      description: 'Sistema de punto de venta y gestión de inventario en tiempo real. Controla tu stock, ventas y reportes financieros con tecnología cloud.',
      images: [
        '/images/apps/stockyventas/screenshot1.png',
        '/images/apps/stockyventas/screenshot2.png',
        '/images/apps/stockyventas/screenshot3.png',
      ],
      videoUrl: '/videos/stockyventas-demo.mp4',
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-8 px-4"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gradient-gold glow-gold">FLEX</span>{' '}
              <span className="text-gradient-silver glow-silver">SYSTEMS</span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-gold blur-2xl opacity-30" />
              <p className="relative text-xl md:text-2xl text-flex-silver max-w-3xl mx-auto leading-relaxed">
                Transformamos el futuro empresarial con soluciones tecnológicas de última generación
              </p>
            </motion.div>
          </motion.div>

          <Hero3DCarousel images={heroImages} />

          {/* Presentation Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto px-4 text-center mb-20"
          >
            <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-flex-gold/30 shadow-gold">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-silver mb-6">
                Innovación que Impulsa el Éxito
              </h2>
              <p className="text-lg md:text-xl text-flex-silver leading-relaxed">
                En <span className="text-flex-gold font-bold">Flex Systems</span>, creamos aplicaciones empresariales 
                que combinan diseño vanguardista con funcionalidad excepcional. Nuestras soluciones están diseñadas 
                para transformar la manera en que las empresas operan en la era digital.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: '⚡', title: 'Velocidad', desc: 'Rendimiento extremo' },
                  { icon: '🛡️', title: 'Seguridad', desc: 'Protección total' },
                  { icon: '🚀', title: 'Innovación', desc: 'Tecnología avanzada' },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-effect rounded-xl p-6 border border-flex-silver/20"
                  >
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="text-flex-gold font-bold text-xl mb-2">{feature.title}</h3>
                    <p className="text-flex-silver-dark">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-10"
          >
            <div className="w-8 h-12 border-2 border-flex-gold rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 bg-flex-gold rounded-full"
              />
            </div>
          </motion.div>
        </section>

        {/* Applications Section */}
        <section id="aplicaciones" className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient-gold glow-gold">Nuestras</span>{' '}
                <span className="text-gradient-silver">Aplicaciones</span>
              </h2>
              <p className="text-xl text-flex-silver max-w-2xl mx-auto">
                Descubre nuestro ecosistema de soluciones empresariales diseñadas para llevar tu negocio al siguiente nivel
              </p>
            </motion.div>

            {/* Application Slots */}
            <div className="space-y-32">
              {applications.map((app, index) => (
                <ApplicationSlot key={index} {...app} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="relative py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto px-4 text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold blur-3xl opacity-20" />
              <div className="relative glass-effect rounded-3xl p-12 md:p-16 border-2 border-flex-gold/50 shadow-gold-lg">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold glow-gold">
                  ¿Listo para Transformar tu Negocio?
                </h2>
                <p className="text-xl text-flex-silver mb-10 max-w-2xl mx-auto">
                  Únete a cientos de empresas que ya confían en nuestras soluciones tecnológicas
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-gradient-gold rounded-full text-flex-black font-bold text-xl shadow-gold-lg hover:shadow-gold transition-all duration-300"
                >
                  Contáctanos Ahora
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Decorative gradient overlays */}
      <div className="fixed top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-flex-gold/10 via-transparent to-transparent pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-flex-silver/10 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
