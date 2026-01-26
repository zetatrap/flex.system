'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { useState } from 'react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

interface ApplicationSlotProps {
  appName: string
  description: string
  images: string[]
  videoUrl: string
  index: number
}

export default function ApplicationSlot({
  appName,
  description,
  images,
  videoUrl,
  index,
}: ApplicationSlotProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [showVideo, setShowVideo] = useState(false)

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full py-16 px-4 md:px-8 lg:px-16"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-flex-silver/5 via-transparent to-transparent" />
      
      <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        isEven ? '' : 'lg:grid-flow-dense'
      }`}>
        {/* Carousel Section */}
        <motion.div
          className={`relative ${isEven ? '' : 'lg:col-start-2'}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Glow background */}
            <div className="absolute -inset-4 bg-gradient-gold blur-3xl opacity-20" />
            
            <div className="relative glass-effect rounded-3xl p-6 border-2 border-flex-gold/30 shadow-gold">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 30,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                navigation={true}
                modules={[EffectCoverflow, Navigation]}
                className="app-swiper"
              >
                {images.map((image, idx) => (
                  <SwiperSlide key={idx} className="app-slide">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-silver rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                      <img
                        src={image}
                        alt={`${appName} screenshot ${idx + 1}`}
                        className="relative w-full h-auto rounded-xl border border-flex-silver/20 shadow-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </motion.div>

        {/* Description Section */}
        <div className={`relative space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold glow-gold">{appName}</span>
            </h3>
            
            <p className="text-lg md:text-xl text-flex-silver leading-relaxed mb-8">
              {description}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVideo(!showVideo)}
              className="relative group px-8 py-4 bg-gradient-gold rounded-full font-bold text-flex-black text-lg overflow-hidden shadow-gold transition-all duration-300 hover:shadow-gold-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver más
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-flex-gold-light opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: showVideo ? 1 : 0,
          height: showVideo ? 'auto' : 0,
        }}
        transition={{ duration: 0.5 }}
        className="relative mt-12 overflow-hidden"
      >
        {showVideo && (
          <div className="relative glass-effect rounded-3xl p-6 border-2 border-flex-silver/30">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-silver">
              <video
                src={videoUrl}
                controls
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        )}
      </motion.div>

      <style jsx global>{`
        .app-swiper {
          width: 100%;
          padding: 40px 20px;
        }

        .app-slide {
          background-position: center;
          background-size: cover;
          width: 320px;
          height: 400px;
        }

        @media (max-width: 768px) {
          .app-slide {
            width: 250px;
            height: 320px;
          }
        }

        .app-swiper .swiper-button-next,
        .app-swiper .swiper-button-prev {
          color: #FFD700;
          background: rgba(10, 10, 10, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #FFD700;
        }

        .app-swiper .swiper-button-next:hover,
        .app-swiper .swiper-button-prev:hover {
          background: rgba(255, 215, 0, 0.2);
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
        }

        .app-swiper .swiper-button-next::after,
        .app-swiper .swiper-button-prev::after {
          font-size: 18px;
        }
      `}</style>
    </motion.div>
  )
}
