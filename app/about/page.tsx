'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import { Award, Heart, Zap } from 'react-feather';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main>
        <Hero
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle title={t('about.storyTitle')} centered={false} />
                <p className="text-lg text-dark/80 font-body mb-6">
                  {t('about.storyParagraph1')}
                </p>
                <p className="text-lg text-dark/80 font-body">
                  {t('about.storyParagraph2')}
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2940"
                  alt="Breeze Villa Architecture"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <SectionTitle
              title={t('about.philosophyTitle')}
              subtitle={t('about.philosophySubtitle')}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="text-gold" size={48} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{t('about.philosophy1Title')}</h3>
                <p className="text-dark/70 font-body">
                  {t('about.philosophy1Text')}
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="text-gold" size={48} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{t('about.philosophy2Title')}</h3>
                <p className="text-dark/70 font-body">
                  {t('about.philosophy2Text')}
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="text-gold" size={48} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{t('about.philosophy3Title')}</h3>
                <p className="text-dark/70 font-body">
                  {t('about.philosophy3Text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title={t('about.teamTitle')}
              subtitle={t('about.teamSubtitle')}
            />
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-dark/80 font-body">
                {t('about.teamText')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
