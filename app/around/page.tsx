import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';

export default function Around() {
  const attractions = [
    {
      title: 'Beach',
      description: 'Pristine white sand beach just steps away from the villa. Perfect for swimming, snorkeling, and watching spectacular sunrises.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940',
      link: '',
    },
    {
      title: 'Local Restaurant',
      description: 'Authentic coastal cuisine featuring fresh seafood and local specialties. Experience the flavors of the island.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940',
      link: '',
    },
    {
      title: 'Sunset Spot',
      description: 'A hidden gem offering breathtaking sunset views over the ocean. The perfect place for an evening cocktail.',
      image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=2940',
      link: '',
    },
    {
      title: 'Temple & Market',
      description: 'Immerse yourself in local culture at the historic temple and vibrant market. Discover traditional crafts and fresh produce.',
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2940',
      link: '',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Discover Around Breeze Villa"
          subtitle="Explore the beauty and culture of our surroundings"
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Local Attractions"
              subtitle="Experience the best of what our island paradise has to offer"
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
            <SectionTitle title="Activities & Experiences" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🤿</div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Diving & Snorkeling</h3>
                <p className="text-dark/70 font-body">
                  Explore vibrant coral reefs teeming with marine life
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚣</div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Water Sports</h3>
                <p className="text-dark/70 font-body">
                  Kayaking, paddleboarding, and sailing adventures
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🥾</div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Hiking Trails</h3>
                <p className="text-dark/70 font-body">
                  Discover hidden waterfalls and panoramic viewpoints
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🧘</div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Wellness & Spa</h3>
                <p className="text-dark/70 font-body">
                  Rejuvenate with yoga sessions and spa treatments
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Culinary Tours</h3>
                <p className="text-dark/70 font-body">
                  Taste authentic local cuisine and cooking classes
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Photography Tours</h3>
                <p className="text-dark/70 font-body">
                  Capture stunning landscapes with a local photographer
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <SectionTitle
              title="Plan Your Adventure"
              subtitle="Our concierge team can arrange all activities and experiences"
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
