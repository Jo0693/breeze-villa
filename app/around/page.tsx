'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { Anchor, Sun, MapPin, Activity, Coffee, TrendingUp } from 'react-feather';
import { useTranslation } from 'react-i18next';

export default function Around() {
  const { t } = useTranslation();

  const attractions = [
    {
      title: t('around.beach.title'),
      description: t('around.beach.description'),
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940',
      link: '',
    },
    {
      title: t('around.restaurant.title'),
      description: t('around.restaurant.description'),
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940',
      link: '',
    },
    {
      title: t('around.sunset.title'),
      description: t('around.sunset.description'),
      image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=2940',
      link: '',
    },
    {
      title: t('around.culture.title'),
      description: t('around.culture.description'),
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2940',
      link: '',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          title={t('around.title')}
          subtitle={t('around.subtitle')}
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title={t('around.attractionsTitle')}
              subtitle={t('around.subtitle')}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {attractions.map((attraction, index) => (
                <Card
                  key={attraction.title}
                  title={attraction.title}
                  description={attraction.description}
                  image={attraction.image}
                  buttonText={t('gallery.subtitle')}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <SectionTitle
              title={t('around.activitiesTitle')}
              subtitle={t('around.activitiesSubtitle')}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Anchor className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{t('around.activity1.title')}</h3>
                <p className="text-dark/70 font-body">
                  {t('around.activity1.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Activity className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{t('around.activity2.title')}</h3>
                <p className="text-dark/70 font-body">
                  {t('around.activity2.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{t('around.activity3.title')}</h3>
                <p className="text-dark/70 font-body">
                  {t('around.activity3.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Sun className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{t('around.activity4.title')}</h3>
                <p className="text-dark/70 font-body">
                  {t('around.activity4.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{t('around.activity5.title')}</h3>
                <p className="text-dark/70 font-body">
                  {t('around.activity5.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Coffee className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{t('around.activity6.title')}</h3>
                <p className="text-dark/70 font-body">
                  {t('around.activity6.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <SectionTitle
              title={t('around.ctaTitle')}
              subtitle={t('around.ctaSubtitle')}
            />
            <a
              href="/contact"
              className="inline-block bg-gold hover:bg-gold/90 text-white font-body font-semibold px-10 py-4 rounded-md transition-all duration-300 transform hover:scale-105 text-lg"
            >
              {t('around.ctaCta')}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
