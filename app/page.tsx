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
          title="Welcome to Breeze Villa"
          subtitle="Your luxury tropical escape"
          ctaText="Explore the Villa"
          ctaLink="/about"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Experience Paradise"
              subtitle="Discover the perfect blend of luxury and nature at Breeze Villa"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card
                title="Suites"
                description="Luxurious accommodations with stunning views"
                image="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2940"
                link="/suites"
                buttonText="View Suites"
                delay={0}
              />
              <Card
                title="Gallery"
                description="Explore our beautiful villa and surroundings"
                image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940"
                link="/gallery"
                buttonText="See Gallery"
                delay={0.1}
              />
              <Card
                title="Contact"
                description="Get in touch to plan your perfect stay"
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
            <SectionTitle title="Guest Testimonial" />
            <blockquote className="text-xl md:text-2xl font-body italic text-dark/80 max-w-3xl mx-auto">
              &ldquo;An absolutely unforgettable experience. The villa exceeded all our expectations with its stunning design, impeccable service, and breathtaking location.&rdquo;
            </blockquote>
            <p className="mt-6 font-body text-dark/60">— Sarah & James, London</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <SectionTitle title="Ready for Your Escape?" subtitle="Book your stay at Breeze Villa today" />
            <a
              href="/contact"
              className="inline-block bg-gold hover:bg-gold/90 text-white font-body font-semibold px-10 py-4 rounded-md transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Book Your Stay
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
