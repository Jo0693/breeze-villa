'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { Home, Wifi, Tv, Coffee, Wind, Droplet, Smartphone, Star } from 'react-feather';

export default function Suites() {
  const suites = [
    {
      title: 'Ocean Horizon Suite',
      description: 'Panoramic ocean views meet contemporary elegance in this 65m² sanctuary. Floor-to-ceiling windows frame endless blue horizons while your private terrace offers the perfect vantage point for spectacular sunrises.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2940',
      price: 'From $450/night',
    },
    {
      title: 'Garden Oasis Villa',
      description: 'Surrounded by lush tropical gardens, this 85m² private villa features an outdoor rain shower and direct pool access. Experience perfect harmony between indoor luxury and outdoor tranquility.',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2940',
      price: 'From $650/night',
    },
    {
      title: 'Sunset Pavilion',
      description: 'An exclusive 120m² retreat featuring a private infinity pool perfectly aligned with Bali\'s legendary sunsets. This architectural masterpiece redefines luxury living.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2940',
      price: 'From $950/night',
    },
    {
      title: 'Presidential Sanctuary',
      description: 'The ultimate expression of luxury. Spanning 200m², this three-bedroom haven includes a private chef, butler service, infinity pool, and unobstructed 270-degree ocean panoramas.',
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2940',
      price: 'From $1,800/night',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Luxurious Suites"
          subtitle="Carefully designed sanctuaries offering uncompromising comfort and style"
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Choose Your Perfect Sanctuary"
              subtitle="Each suite offers unique features with stunning ocean or garden views"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {suites.map((suite, index) => (
                <Card
                  key={suite.title}
                  title={suite.title}
                  description={suite.description}
                  image={suite.image}
                  price={suite.price}
                  link="/contact"
                  buttonText="Book Now"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Premium Amenities"
              subtitle="Every detail considered for your ultimate comfort"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Home className="text-gold" size={32} />
                </div>
                <h4 className="font-display font-semibold text-dark">King-Size Beds</h4>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Wifi className="text-gold" size={32} />
                </div>
                <h4 className="font-display font-semibold text-dark">High-Speed WiFi</h4>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Tv className="text-gold" size={32} />
                </div>
                <h4 className="font-display font-semibold text-dark">Smart TV</h4>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Coffee className="text-gold" size={32} />
                </div>
                <h4 className="font-display font-semibold text-dark">Minibar</h4>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Wind className="text-gold" size={32} />
                </div>
                <h4 className="font-display font-semibold text-dark">Air Conditioning</h4>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Droplet className="text-gold" size={32} />
                </div>
                <h4 className="font-display font-semibold text-dark">Luxury Bathroom</h4>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Smartphone className="text-gold" size={32} />
                </div>
                <h4 className="font-display font-semibold text-dark">Concierge Service</h4>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Star className="text-gold" size={32} />
                </div>
                <h4 className="font-display font-semibold text-dark">Premium Toiletries</h4>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
