'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

interface Hero3DCarouselProps {
  images: string[]
}

export default function Hero3DCarousel({ images }: Hero3DCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Efecto de resplandor de fondo */}
      <div className="absolute inset-0 bg-gradient-radial from-flex-gold/10 via-transparent to-transparent blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10"
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          effect={'coverflow'}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="hero-swiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="hero-slide">
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: activeIndex === index ? 1.1 : 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-gold rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  {/* Image container */}
                  <div className="relative bg-flex-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-flex-gold/30 shadow-gold-lg transition-all duration-500 group-hover:border-flex-gold group-hover:shadow-gold-lg">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-auto max-w-md max-h-96 object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style jsx global>{`
        .hero-swiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 80px;
        }

        .hero-slide {
          background-position: center;
          background-size: cover;
          width: 400px;
          height: 500px;
        }

        @media (max-width: 768px) {
          .hero-slide {
            width: 300px;
            height: 400px;
          }
        }

        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(192, 192, 192, 0.5);
          border: 2px solid #C0C0C0;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .custom-bullet-active {
          background: #FFD700;
          border-color: #FFD700;
          width: 14px;
          height: 14px;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
        }

        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>
    </div>
  )
}
