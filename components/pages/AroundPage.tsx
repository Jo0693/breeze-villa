'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { Anchor, Sun, MapPin, Activity, Coffee, TrendingUp } from 'react-feather';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';

export default function AroundPage() {
  const { t } = useTranslation();

  const attractions = [
    { title: t('around.beach.title'), description: t('around.beach.description'), image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940', link: '' },
    { title: t('around.restaurant.title'), description: t('around.restaurant.description'), image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940', link: '' },
    { title: t('around.sunset.title'), description: t('around.sunset.description'), image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=2940', link: '' },
    { title: t('around.culture.title'), description: t('around.culture.description'), image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2940', link: '' },
  ];

  const activities = [
    { icon: Anchor, titleKey: 'around.activity1.title', descKey: 'around.activity1.description' },
    { icon: Activity, titleKey: 'around.activity2.title', descKey: 'around.activity2.description' },
    { icon: MapPin, titleKey: 'around.activity3.title', descKey: 'around.activity3.description' },
    { icon: Sun, titleKey: 'around.activity4.title', descKey: 'around.activity4.description' },
    { icon: TrendingUp, titleKey: 'around.activity5.title', descKey: 'around.activity5.description' },
    { icon: Coffee, titleKey: 'around.activity6.title', descKey: 'around.activity6.description' },
  ];

  return (
    <>
      <SEOHead
        title="Around – Beaches, Temples & Experiences Nearby | Breeze Villa"
        description="Hand-picked local attractions and hidden gems near Breeze Villa: Sunset Beach, Tanah Lot Temple, diving, and cultural experiences."
        canonical="https://breeze-villa.vercel.app/around"
      />
      <Header />
      <main>
        <Hero
          title={t('around.title')}
          subtitle={t('around.subtitle')}
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940"
        />

        <section data-publisher-section="attractions" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle title={t('around.attractionsTitle')} subtitle={t('around.subtitle')} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {attractions.map((attraction, index) => (
                <Card key={attraction.title} title={attraction.title} description={attraction.description} image={attraction.image} buttonText={t('gallery.subtitle')} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        <section data-publisher-section="activities" className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <SectionTitle title={t('around.activitiesTitle')} subtitle={t('around.activitiesSubtitle')} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {activities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.titleKey} className="text-center">
                    <div className="flex justify-center mb-4"><Icon className="text-gold" size={40} /></div>
                    <h3 className="text-xl font-display font-bold text-dark mb-3">{t(activity.titleKey)}</h3>
                    <p className="text-dark/70 font-body">{t(activity.descKey)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section data-publisher-section="cta" className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <SectionTitle title={t('around.ctaTitle')} subtitle={t('around.ctaSubtitle')} />
            <a href="/contact" className="inline-block bg-gold hover:bg-gold/90 text-white font-body font-semibold px-10 py-4 rounded-md transition-all duration-300 transform hover:scale-105 text-lg">{t('around.ctaCta')}</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
