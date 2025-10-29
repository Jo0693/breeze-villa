'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  price?: string;
  buttonText?: string;
  delay?: number;
}

export default function Card({
  title,
  description,
  image,
  link,
  price,
  buttonText = 'Learn More',
  delay = 0,
}: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-display font-bold text-dark">{title}</h3>
          {price && <span className="text-gold font-body font-semibold">{price}</span>}
        </div>

        <p className="text-dark/70 font-body mb-6">{description}</p>

        {link && (
          <Link
            href={link}
            className="inline-block bg-gold hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30 text-white font-body font-semibold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
            aria-label={`${buttonText} - ${title}`}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
