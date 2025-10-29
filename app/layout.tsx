import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FloatingCTA from "@/components/FloatingCTA";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Breeze Villa - Luxury Ocean View Villa in Bali",
  description: "Experience paradise at Breeze Villa, your luxury tropical sanctuary in Uluwatu, Bali. Stunning ocean views, premium suites, exceptional service, and authentic Balinese hospitality.",
  keywords: "Breeze Villa, Bali luxury villa, Uluwatu accommodation, ocean view villa, Bali resort, luxury tropical escape, boutique hotel Bali",
  openGraph: {
    title: "Breeze Villa - Luxury Ocean View Villa in Bali",
    description: "Experience paradise at Breeze Villa, your luxury tropical sanctuary in Uluwatu, Bali.",
    url: "https://breeze-villa.vercel.app",
    siteName: "Breeze Villa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2940",
        width: 1200,
        height: 630,
        alt: "Breeze Villa - Luxury Ocean View",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breeze Villa - Luxury Ocean View Villa in Bali",
    description: "Experience paradise at Breeze Villa, your luxury tropical sanctuary in Uluwatu, Bali.",
    images: ["https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2940"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Breeze Villa",
              "description": "Luxury ocean-view villa in Uluwatu, Bali offering premium suites, exceptional service, and authentic Balinese hospitality.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sunset Beach Road",
                "addressLocality": "Bali",
                "postalCode": "80361",
                "addressCountry": "ID"
              },
              "telephone": "+62 361 847 5678",
              "email": "reservations@breezevilla.com",
              "priceRange": "$$-$$$",
              "image": "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2940",
              "url": "https://breeze-villa.vercel.app",
              "starRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Ocean View" },
                { "@type": "LocationFeatureSpecification", "name": "Private Pool" },
                { "@type": "LocationFeatureSpecification", "name": "Free WiFi" },
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning" },
                { "@type": "LocationFeatureSpecification", "name": "Spa" },
                { "@type": "LocationFeatureSpecification", "name": "Restaurant" }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <FloatingCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
