'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { Anchor, Sun, MapPin, Activity, Coffee, TrendingUp } from 'react-feather';

export default function Around() {
  const attractions = [
    {
      title: 'Sunset Beach',
      description: 'Pristine white sand meets crystal-clear waters just 50 meters from your villa. Swim, snorkel vibrant coral reefs, or simply relax beneath swaying palms while watching mesmerizing sunrises paint the horizon.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940',
      link: '',
    },
    {
      title: 'Warung Pantai',
      description: 'An authentic Balinese dining experience featuring the freshest seafood and traditional recipes passed through generations. This family-owned gem offers genuine island flavors in a charming beachfront setting.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940',
      link: '',
    },
    {
      title: 'Clifftop Viewpoint',
      description: 'A hidden sanctuary offering Bali\'s most spectacular sunset vistas. This serene spot, just 15 minutes away, provides the perfect backdrop for evening cocktails and unforgettable photographs.',
      image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=2940',
      link: '',
    },
    {
      title: 'Tanah Lot Temple & Market',
      description: 'Immerse yourself in Balinese spirituality at this iconic sea temple, then explore vibrant local markets brimming with handcrafted textiles, silver jewelry, and aromatic spices.',
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2940',
      link: '',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Explore Paradise"
          subtitle="Discover the wonders surrounding Breeze Villa"
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Nearby Treasures"
              subtitle="Authentic experiences just moments from your doorstep"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {attractions.map((attraction, index) => (
                <Card
                  key={attraction.title}
                  title={attraction.title}
                  description={attraction.description}
                  image={attraction.image}
                  buttonText="Learn More"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Curated Experiences"
              subtitle="Unforgettable adventures arranged by our concierge"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Anchor className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Diving & Snorkeling</h3>
                <p className="text-dark/70 font-body">
                  Explore thriving coral gardens teeming with tropical marine life, from graceful sea turtles to vibrant reef fish
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Activity className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Water Adventures</h3>
                <p className="text-dark/70 font-body">
                  Surfing, paddleboarding, kayaking, and sailing experiences tailored to your skill level
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Mountain Trekking</h3>
                <p className="text-dark/70 font-body">
                  Sunrise hikes to Mount Batur volcano, hidden waterfalls, and secret jungle trails
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Sun className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Wellness & Spa</h3>
                <p className="text-dark/70 font-body">
                  Traditional Balinese massage, yoga sessions, and holistic healing treatments
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Culinary Journeys</h3>
                <p className="text-dark/70 font-body">
                  Cooking classes, market tours, and private dining experiences with renowned local chefs
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Coffee className="text-gold" size={40} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Cultural Immersion</h3>
                <p className="text-dark/70 font-body">
                  Temple ceremonies, traditional dance performances, and artisan workshop visits
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <SectionTitle
              title="Let Us Craft Your Perfect Day"
              subtitle="Our expert concierge team arranges every detail"
            />
            <a
              href="/contact"
              className="inline-block bg-gold hover:bg-gold/90 text-white font-body font-semibold px-10 py-4 rounded-md transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Contact Concierge
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
