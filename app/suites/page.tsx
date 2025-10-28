import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';

export default function Suites() {
  const suites = [
    {
      title: 'Ocean View Suite',
      description: 'Spacious suite with panoramic ocean views, private terrace, and modern amenities.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2940',
      price: '$450/night',
    },
    {
      title: 'Garden Villa',
      description: 'Private villa surrounded by tropical gardens with outdoor shower and pool access.',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2940',
      price: '$550/night',
    },
    {
      title: 'Sunset Pavilion',
      description: 'Exclusive pavilion with breathtaking sunset views and private infinity pool.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2940',
      price: '$750/night',
    },
    {
      title: 'Presidential Suite',
      description: 'Ultimate luxury with multiple rooms, private chef service, and panoramic views.',
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2940',
      price: '$1200/night',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Our Suites"
          subtitle="Luxury accommodations designed for your comfort"
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Choose Your Perfect Suite"
              subtitle="Each suite offers unique features and stunning views"
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
            <SectionTitle title="Suite Amenities" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl mb-3">🛏️</div>
                <h4 className="font-display font-semibold text-dark">King-Size Beds</h4>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌊</div>
                <h4 className="font-display font-semibold text-dark">Ocean Views</h4>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📺</div>
                <h4 className="font-display font-semibold text-dark">Smart TV</h4>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">☕</div>
                <h4 className="font-display font-semibold text-dark">Minibar</h4>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">❄️</div>
                <h4 className="font-display font-semibold text-dark">Air Conditioning</h4>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🛁</div>
                <h4 className="font-display font-semibold text-dark">Luxury Bathroom</h4>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📶</div>
                <h4 className="font-display font-semibold text-dark">High-Speed WiFi</h4>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🧖</div>
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
