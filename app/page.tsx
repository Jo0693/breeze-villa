import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Escape to Paradise"
          subtitle="Experience unparalleled luxury in our exclusive beachfront sanctuary"
          ctaText="Discover Our Suites"
          ctaLink="/suites"
          backgroundImage="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Where Dreams Meet Reality"
              subtitle="Nestled along Bali's pristine coastline, Breeze Villa offers an intimate luxury experience where contemporary elegance harmonizes with tropical beauty. Each moment here is crafted to perfection."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card
                title="Luxurious Suites"
                description="Immerse yourself in spacious accommodations featuring panoramic ocean views, private terraces, and world-class amenities designed for ultimate comfort."
                image="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2940"
                link="/suites"
                buttonText="View Suites"
                delay={0}
              />
              <Card
                title="Visual Journey"
                description="Explore our stunning property through a curated collection of images showcasing the beauty and elegance that awaits you."
                image="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2940"
                link="/gallery"
                buttonText="See Gallery"
                delay={0.1}
              />
              <Card
                title="Plan Your Escape"
                description="Our dedicated concierge team is ready to craft your perfect tropical getaway with personalized service and attention to detail."
                image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940"
                link="/contact"
                buttonText="Contact Us"
                delay={0.2}
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6 text-center">
            <SectionTitle title="Guest Experiences" />
            <blockquote className="text-xl md:text-2xl font-body italic text-dark/80 max-w-3xl mx-auto">
              &ldquo;Breeze Villa redefined luxury for us. From the breathtaking architecture to the impeccable service, every detail exceeded our highest expectations. The sunset views from our suite were simply unforgettable.&rdquo;
            </blockquote>
            <p className="mt-6 font-body text-dark/60">— Emma & Thomas Richardson, London, United Kingdom</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <SectionTitle
              title="Begin Your Journey"
              subtitle="Discover why Breeze Villa is Bali's most exclusive retreat"
            />
            <a
              href="/contact"
              className="inline-block bg-gold hover:bg-gold/90 text-white font-body font-semibold px-10 py-4 rounded-md transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Reserve Your Suite
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
