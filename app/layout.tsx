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

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <FloatingCTA />
    </LanguageProvider>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <RootLayoutContent>{children}</RootLayoutContent>
      </body>
    </html>
  );
}
