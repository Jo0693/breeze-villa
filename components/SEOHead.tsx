'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  jsonLd?: object | null;
}

export default function SEOHead({ title, description, canonical, ogImage, jsonLd }: SEOHeadProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Update OG tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: ogImage || 'https://breeze-villa.vercel.app/og-image.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Breeze Villa' },
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Update Twitter Card
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage || 'https://breeze-villa.vercel.app/og-image.jpg' },
    ];

    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Update hreflang
    const hreflangs = [
      { hreflang: 'en', href: canonical },
      { hreflang: 'fr', href: canonical },
      { hreflang: 'x-default', href: canonical },
    ];

    // Remove existing hreflang links
    document.querySelectorAll('link[rel="alternate"]').forEach(link => link.remove());

    hreflangs.forEach(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });

    // Update html lang
    document.documentElement.lang = language;

    // Inject JSON-LD if provided
    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      script.id = 'json-ld-schema';

      // Remove existing JSON-LD
      const existing = document.getElementById('json-ld-schema');
      if (existing) {
        document.head.removeChild(existing);
      }

      document.head.appendChild(script);

      return () => {
        const scriptToRemove = document.getElementById('json-ld-schema');
        if (scriptToRemove) {
          document.head.removeChild(scriptToRemove);
        }
      };
    }
  }, [title, description, canonical, ogImage, jsonLd, language]);

  return null;
}
