import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="About Breeze Villa"
          subtitle="Where luxury meets nature"
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle title="Our Story" centered={false} />
                <p className="text-lg text-dark/80 font-body mb-6">
                  Breeze Villa was born from a dream to create the ultimate tropical sanctuary. Nestled on a pristine coastline, our villa offers an exclusive retreat where modern luxury harmonizes with natural beauty.
                </p>
                <p className="text-lg text-dark/80 font-body">
                  Every detail has been carefully curated to provide our guests with an unforgettable experience, from the architecture that embraces the landscape to the personalized service that anticipates your every need.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2940"
                  alt="About Breeze Villa"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <SectionTitle title="Our Philosophy" subtitle="Creating moments that last a lifetime" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🌴</div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Nature First</h3>
                <p className="text-dark/70 font-body">
                  We embrace sustainable practices and celebrate the natural beauty that surrounds us.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Luxury Redefined</h3>
                <p className="text-dark/70 font-body">
                  True luxury is found in the details, the service, and the memories created.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">Personal Touch</h3>
                <p className="text-dark/70 font-body">
                  Every guest receives personalized attention to ensure an exceptional stay.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle title="The Team" subtitle="Meet the people dedicated to your perfect escape" />
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-dark/80 font-body">
                Our passionate team brings together decades of experience in luxury hospitality. From our concierge to our culinary experts, every member is committed to making your stay extraordinary.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
