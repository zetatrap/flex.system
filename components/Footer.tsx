'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-flex-darker border-t border-flex-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-gradient-gold glow-gold">FLEX</span>
              <span className="text-xl font-light text-flex-silver">SYSTEMS</span>
            </div>
            <p className="text-flex-silver-dark">
              Soluciones tecnológicas de última generación para el futuro empresarial.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-flex-gold font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Aplicaciones', 'Servicios', 'Contacto'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-flex-silver-dark hover:text-flex-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-flex-gold font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-flex-silver-dark">
              <li>Email: info@flexsystems.com</li>
              <li>Tel: +1 (555) 123-4567</li>
              <li>Ubicación: Ciudad del Futuro</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-flex-gold/20 text-center"
        >
          <p className="text-flex-silver-dark">
            © {currentYear} <span className="text-flex-gold">Flex Systems</span>. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
