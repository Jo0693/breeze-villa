'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <Hero
          title={t('home.heroTitle')}
          subtitle={t('home.heroSubtitle')}
          ctaText={t('home.heroCta')}
          ctaLink="/suites"
          backgroundImage="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title={t('home.introTitle')}
              subtitle={t('home.introSubtitle')}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card
                title={t('home.suitesCard.title')}
                description={t('home.suitesCard.description')}
                image="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2940"
                link="/suites"
                buttonText={t('home.suitesCard.button')}
                delay={0}
              />
              <Card
                title={t('home.galleryCard.title')}
                description={t('home.galleryCard.description')}
                image="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2940"
                link="/gallery"
                buttonText={t('home.galleryCard.button')}
                delay={0.1}
              />
              <Card
                title={t('home.contactCard.title')}
                description={t('home.contactCard.description')}
                image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940"
                link="/contact"
                buttonText={t('home.contactCard.button')}
                delay={0.2}
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6 text-center">
            <SectionTitle title={t('home.testimonialTitle')} />
            <blockquote className="text-xl md:text-2xl font-body italic text-dark/80 max-w-3xl mx-auto">
              &ldquo;{t('home.testimonialQuote')}&rdquo;
            </blockquote>
            <p className="mt-6 font-body text-dark/60">— {t('home.testimonialAuthor')}</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <SectionTitle
              title={t('home.ctaTitle')}
              subtitle={t('home.ctaSubtitle')}
            />
            <a
              href="/contact"
              className="inline-block bg-gold hover:bg-gold/90 text-white font-body font-semibold px-10 py-4 rounded-md transition-all duration-300 transform hover:scale-105 text-lg"
            >
              {t('home.ctaButton')}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
