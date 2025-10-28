'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import { Award, Heart, Zap } from 'react-feather';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Our Story"
          subtitle="A sanctuary born from passion and purpose"
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle title="The Vision Behind Breeze Villa" centered={false} />
                <p className="text-lg text-dark/80 font-body mb-6">
                  Breeze Villa emerged from a dream to create an extraordinary sanctuary where architectural brilliance meets natural splendor. Founded in 2019, our boutique property represents the culmination of meticulous design, sustainable luxury, and a deep respect for Balinese culture.
                </p>
                <p className="text-lg text-dark/80 font-body">
                  Every element of Breeze Villa has been thoughtfully curated to offer discerning travelers an intimate escape. From locally-sourced teak wood to handcrafted Balinese furnishings, we blend contemporary sophistication with authentic island heritage to create an experience that transcends ordinary hospitality.
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
              title="Our Philosophy"
              subtitle="Three pillars that define our commitment to excellence"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="text-gold" size={48} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Sustainable Luxury</h3>
                <p className="text-dark/70 font-body">
                  We believe true luxury respects the environment. Our eco-conscious practices, from solar energy to organic gardens, ensure your stay leaves minimal impact while maximizing comfort.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="text-gold" size={48} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Authentic Experiences</h3>
                <p className="text-dark/70 font-body">
                  Beyond accommodation, we curate meaningful connections with Balinese culture, local artisans, and natural wonders, creating memories that last a lifetime.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="text-gold" size={48} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Personalized Service</h3>
                <p className="text-dark/70 font-body">
                  Your desires shape your experience. Our dedicated staff anticipates your needs, offering bespoke services that transform your stay into something truly extraordinary.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="The Team"
              subtitle="Passionate professionals dedicated to your perfect escape"
            />
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-dark/80 font-body">
                Our international team brings together hospitality veterans, local cultural experts, and wellness specialists. United by a passion for excellence, they ensure every guest receives personalized care that exceeds expectations. From our award-winning chef to our certified wellness practitioners, each member contributes to the magic of Breeze Villa.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
