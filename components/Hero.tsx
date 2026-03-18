'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  publisherImage?: string;
  publisherImageAlt?: string;
  height?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940',
  publisherImage,
  publisherImageAlt,
  height = 'h-screen',
}: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div ref={ref} data-publisher-section="hero" className={`relative ${height} overflow-hidden`}>
      {publisherImage ? (
        <>
          <Image
            src={publisherImage}
            alt={publisherImageAlt || ''}
            fill
            className="object-cover"
            priority
            data-publisher-field="hero.image"
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      ) : (
        <motion.div
          style={{ y }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="absolute inset-0 will-change-transform"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
            data-publisher-field="hero.image"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      )}

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
            data-publisher-field="hero.title"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 font-body mb-8"
              data-publisher-field="hero.subtitle"
            >
              {subtitle}
            </motion.p>
          )}

          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href={ctaLink}
                className="inline-block bg-gold hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/50 text-white font-body font-semibold px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105"
                aria-label={ctaText}
              >
                {ctaText}
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
