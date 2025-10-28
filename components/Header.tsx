'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/suites', label: 'Suites' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/around', label: 'Around' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-2xl font-display font-bold transition-colors duration-300 ${
              scrolled ? 'text-dark' : 'text-background'
            }`}
          >
            Breeze Villa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-body transition-colors duration-300 ${
                      scrolled
                        ? 'text-dark hover:text-gold'
                        : 'text-background hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-gray-400 pl-6">
              <button
                onClick={() => setLanguage('en')}
                className={`font-body text-sm transition-colors duration-300 ${
                  language === 'en'
                    ? 'text-gold font-semibold'
                    : scrolled
                    ? 'text-dark/70 hover:text-gold'
                    : 'text-background/70 hover:text-gold'
                }`}
              >
                🇬🇧 EN
              </button>
              <span className={scrolled ? 'text-dark/40' : 'text-background/40'}>|</span>
              <button
                onClick={() => setLanguage('fr')}
                className={`font-body text-sm transition-colors duration-300 ${
                  language === 'fr'
                    ? 'text-gold font-semibold'
                    : scrolled
                    ? 'text-dark/70 hover:text-gold'
                    : 'text-background/70 hover:text-gold'
                }`}
              >
                🇫🇷 FR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? 'text-dark' : 'text-background'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg z-50"
            >
              <ul className="flex flex-col items-center py-6 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-dark hover:text-gold transition-colors duration-300 font-body text-lg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* Mobile Language Switcher */}
                <li className="pt-4 border-t border-gray-300 w-full flex justify-center">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`font-body text-sm transition-colors duration-300 ${
                        language === 'en'
                          ? 'text-gold font-semibold'
                          : 'text-dark/70 hover:text-gold'
                      }`}
                    >
                      🇬🇧 EN
                    </button>
                    <span className="text-dark/40">|</span>
                    <button
                      onClick={() => setLanguage('fr')}
                      className={`font-body text-sm transition-colors duration-300 ${
                        language === 'fr'
                          ? 'text-gold font-semibold'
                          : 'text-dark/70 hover:text-gold'
                      }`}
                    >
                      🇫🇷 FR
                    </button>
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
