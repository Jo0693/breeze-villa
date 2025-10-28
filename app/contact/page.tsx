'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    arrival: '',
    departure: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Contact Us"
          subtitle="Let's plan your perfect getaway"
          height="h-[60vh]"
          backgroundImage="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <SectionTitle title="Get in Touch" centered={false} />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-dark font-body font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-dark font-body font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="arrival" className="block text-dark font-body font-semibold mb-2">
                        Arrival
                      </label>
                      <input
                        type="date"
                        id="arrival"
                        name="arrival"
                        value={formData.arrival}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label htmlFor="departure" className="block text-dark font-body font-semibold mb-2">
                        Departure
                      </label>
                      <input
                        type="date"
                        id="departure"
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-dark font-body font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold/90 text-white font-body font-semibold px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div>
                <SectionTitle title="Visit Us" centered={false} />

                <div className="space-y-6">
                  <div>
                    <h4 className="font-display font-semibold text-dark text-lg mb-2">Address</h4>
                    <p className="text-dark/70 font-body">
                      Breeze Villa<br />
                      Paradise Island<br />
                      Tropical Coast
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display font-semibold text-dark text-lg mb-2">Phone</h4>
                    <p className="text-dark/70 font-body">+1 (555) 123-4567</p>
                  </div>

                  <div>
                    <h4 className="font-display font-semibold text-dark text-lg mb-2">Email</h4>
                    <p className="text-dark/70 font-body">hello@breezevilla.com</p>
                  </div>

                  <div className="mt-8">
                    <div className="w-full h-80 bg-accent rounded-lg flex items-center justify-center">
                      <p className="text-dark/50 font-body">Map embed placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
