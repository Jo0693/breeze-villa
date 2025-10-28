'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  italic?: boolean;
  goldTitle?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  italic = false,
  goldTitle = false
}: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className={centered ? 'text-center mb-12' : 'mb-12'}
    >
      <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${
        italic ? 'italic' : ''
      } ${
        goldTitle ? 'text-gold' : 'text-dark'
      }`}>
        {title}
      </h2>
      {subtitle && <p className="text-lg text-dark/70 font-body max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
