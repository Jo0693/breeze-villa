'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940',
      title: 'Ocean Suite',
    },
    {
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2940',
      title: 'Garden View',
    },
    {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940',
      title: 'Private Pool',
    },
    {
      url: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2940',
      title: 'Dining Terrace',
    },
    {
      url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2940',
      title: 'Bali Sunset',
    },
    {
      url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2940',
      title: 'Lounge Area',
    },
    {
      url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2940',
      title: 'Ocean Suite',
    },
    {
      url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2940',
      title: 'Garden View',
    },
    {
      url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2940',
      title: 'Private Pool',
    },
    {
      url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2940',
      title: 'Dining Terrace',
    },
    {
      url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940',
      title: 'Bali Sunset',
    },
    {
      url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2940',
      title: 'Lounge Area',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          title={t('gallery.title')}
          subtitle={t('gallery.subtitle')}
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title={t('around.title')}
              subtitle={t('gallery.subtitle')}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-80 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                >
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay with title - triggers on entire image hover */}
                  <div className="absolute inset-0 bg-[rgba(230,221,198,0)] group-hover:bg-[rgba(230,221,198,0.55)] backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 ease-in-out flex items-center justify-center">
                    <h3 className="text-2xl font-display font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.35)' }}>
                      {image.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-dark/70 font-body mb-6">
                {t('gallery.lightboxNote')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
