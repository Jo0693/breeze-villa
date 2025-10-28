import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Breeze Villa - Luxury Tropical Escape",
  description: "Experience paradise at Breeze Villa, your luxury tropical sanctuary with stunning ocean views, premium suites, and exceptional service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
