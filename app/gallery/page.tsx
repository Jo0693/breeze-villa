import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2940',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940',
    'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2940',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2940',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2940',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2940',
    'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2940',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2940',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2940',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2940',
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Visual Journey"
          subtitle="Discover the beauty and elegance that defines Breeze Villa"
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Explore Our Villa"
              subtitle="A curated collection showcasing the extraordinary beauty of our property"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-80 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-dark/70 font-body mb-6">
                Lightbox functionality coming soon
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
