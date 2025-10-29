import { Metadata } from 'next';

const siteUrl = 'https://breeze-villa.vercel.app';
const defaultOgImage = `${siteUrl}/og-image.jpg`;

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  path: string;
}

const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: 'Breeze Villa – Luxury Ocean View Villa in Bali',
    description: 'Exclusive ocean-view villa in Uluwatu (Bali): suites, private pools, bespoke experiences.',
    keywords: 'Breeze Villa, Bali luxury villa, Uluwatu accommodation, ocean view villa, Bali resort, private pool villa, boutique hotel Bali',
    path: '/',
  },
  about: {
    title: 'Our Story – Balinese Serenity & Modern Comfort',
    description: 'The vision and philosophy behind Breeze Villa – sustainable luxury & authentic hospitality.',
    keywords: 'Breeze Villa story, sustainable luxury Bali, authentic Balinese hospitality, eco-conscious villa',
    path: '/about',
  },
  suites: {
    title: 'Suites – Ocean Views, Private Pools, Premium Amenities',
    description: 'Discover Ocean Horizon, Garden Oasis, Sunset Pavilion & Presidential Sanctuary.',
    keywords: 'Bali luxury suites, ocean view rooms, private pool villa, presidential suite Bali, luxury accommodation Uluwatu',
    path: '/suites',
  },
  gallery: {
    title: 'Gallery – Visual Journey Through Breeze Villa',
    description: 'Explore our suites, pools & sunset views of Bali.',
    keywords: 'Bali villa photos, luxury resort gallery, ocean view images, tropical villa Bali',
    path: '/gallery',
  },
  around: {
    title: 'Around – Beaches, Temples & Experiences Nearby',
    description: 'Hand-picked local attractions and hidden gems near Breeze Villa.',
    keywords: 'Uluwatu attractions, Bali beaches, Tanah Lot Temple, things to do Bali, Bali experiences',
    path: '/around',
  },
  contact: {
    title: 'Contact – Book Your Stay at Breeze Villa',
    description: 'Send us a message to plan your stay; we reply within 24 hours.',
    keywords: 'book Breeze Villa, contact luxury villa Bali, reservations Uluwatu, Bali villa booking',
    path: '/contact',
  },
};

export function generatePageMetadata(page: keyof typeof pageMetadata): Metadata {
  const meta = pageMetadata[page];
  const url = `${siteUrl}${meta.path}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: url,
      languages: {
        'en': url,
        'fr': url,
        'x-default': url,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: url,
      siteName: 'Breeze Villa',
      images: [
        {
          url: meta.ogImage || defaultOgImage,
          width: 1200,
          height: 630,
          alt: 'Breeze Villa - Luxury Ocean View',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage || defaultOgImage],
    },
  };
}

export function getStructuredData(page: keyof typeof pageMetadata) {
  const baseSchema = {
    '@context': 'https://schema.org',
  };

  switch (page) {
    case 'home':
      return {
        '@context': 'https://schema.org',
        '@type': 'Hotel',
        name: 'Breeze Villa',
        description: 'Luxury ocean-view villa in Uluwatu, Bali.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sunset Beach Road',
          addressLocality: 'Bali',
          postalCode: '80361',
          addressCountry: 'ID',
        },
        telephone: '+62 361 847 5678',
        priceRange: '$$',
        image: 'https://breeze-villa.vercel.app/og-image.jpg',
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Ocean View' },
          { '@type': 'LocationFeatureSpecification', name: 'Private Pool' },
          { '@type': 'LocationFeatureSpecification', name: 'Concierge Service' },
        ],
        url: 'https://breeze-villa.vercel.app/',
      };

    case 'about':
      return {
        ...baseSchema,
        '@type': 'Organization',
        name: 'Breeze Villa',
        description: 'Luxury boutique villa in Bali combining sustainable practices with authentic Balinese hospitality.',
        url: `${siteUrl}/about`,
        logo: defaultOgImage,
        foundingDate: '2019',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sunset Beach Road',
          addressLocality: 'Bali',
          postalCode: '80361',
          addressCountry: 'ID',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+62 361 847 5678',
          contactType: 'reservations',
          email: 'reservations@breezevilla.com',
          availableLanguage: ['English', 'French'],
        },
      };

    case 'contact':
      return {
        ...baseSchema,
        '@type': 'ContactPage',
        name: 'Contact Breeze Villa',
        description: 'Get in touch with Breeze Villa to book your luxury stay in Bali.',
        url: `${siteUrl}/contact`,
      };

    default:
      return null;
  }
}
