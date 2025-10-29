# Breeze Villa - Project Context Backup
**Date:** October 28, 2024
**Phase:** 2.5 Complete - Pre-i18n Full Integration

---

## 🏗️ Project Overview
**Name:** Breeze Villa
**Type:** Luxury hospitality website (boutique villa in Bali)
**Framework:** Next.js 14 (App Router)
**Purpose:** Premium villa booking website with multilingual support

---

## 📦 Tech Stack

### Core Dependencies
- **Next.js:** 14.2.33 (App Router architecture)
- **React:** ^18
- **TypeScript:** ^5
- **Tailwind CSS:** ^3.4.1
- **Framer Motion:** ^12.23.24 (animations)
- **next-intl:** ^4.4.0 (i18n - currently not fully integrated)
- **react-feather:** ^2.0.10 (icons)

### Development Tools
- ESLint with Next.js config
- PostCSS
- TypeScript strict mode

---

## 🎨 Design System

### Color Palette
```css
--background: #F8F6F1 (cream/beige)
--accent: #E6DDC6 (light beige)
--gold: #C9A45C (primary accent)
--dark: #1E1E1E (text)
```

### Typography
- **Display Font:** Playfair Display (serif, 400/700, normal/italic)
- **Body Font:** Inter (sans-serif)
- **CSS Variables:**
  - `--font-display`
  - `--font-body`

### Design Principles
- Smooth scroll behavior
- Framer Motion for all animations (fade-in, scroll-reveal, parallax)
- Fixed header with transparent → solid on scroll
- Responsive: mobile (375px), tablet (768px), desktop (1024px+)

---

## 📁 Project Structure

```
breeze-villa/
├── app/
│   ├── layout.tsx           # Root layout with fonts & LanguageProvider
│   ├── globals.css          # Global styles, Tailwind imports
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── suites/
│   │   └── page.tsx         # Suites listing
│   ├── gallery/
│   │   └── page.tsx         # Image gallery
│   ├── around/
│   │   └── page.tsx         # Local attractions
│   └── contact/
│       └── page.tsx         # Contact form
├── components/
│   ├── Header.tsx           # Fixed header with nav & language switcher
│   ├── Footer.tsx           # Footer with contact info
│   ├── Hero.tsx             # Full-screen hero sections
│   ├── SectionTitle.tsx     # Animated section titles (supports italic/gold)
│   └── Card.tsx             # Reusable card component
├── contexts/
│   └── LanguageContext.tsx  # Language state management (basic implementation)
├── data/
│   └── siteContent.json     # Static content (not currently used)
├── locales/
│   ├── en/
│   │   └── common.json      # English translations (comprehensive)
│   └── fr/
│       └── common.json      # French translations (comprehensive)
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind custom config
├── next.config.js           # Next.js config (image domains)
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

---

## 🌐 Current i18n Implementation Status

### ✅ Completed
- Language switcher UI in header (EN 🇬🇧 | FR 🇫🇷)
- localStorage persistence for language preference
- LanguageContext with basic state management
- Complete translation files (`/locales/en/common.json`, `/locales/fr/common.json`)
- Visual indication of active language (gold color)

### ❌ Not Yet Implemented
- **Pages are hardcoded in English** (not using translation keys)
- Language switcher buttons exist but **don't actually change content**
- `useTranslation()` hook not used in pages
- No automatic language detection on load
- `next-intl` installed but not configured

---

## 📄 Pages Details

### 1. Home (`/`)
**Content:**
- Hero: "Escape to Paradise" with ocean villa image
- Intro: "Where Dreams Meet Reality"
- 3 cards: Luxurious Suites, Visual Journey, Plan Your Escape
- Testimonial section with quote from Emma & Thomas Richardson
- CTA: "Begin Your Journey" → "Reserve Your Suite"

**Key Features:**
- Framer Motion animations on scroll
- Card grid (3 columns on desktop)
- Testimonial blockquote with styled quotes

### 2. About (`/about`)
**Content:**
- Hero: "Our Story"
- Story section with image + 2 paragraphs about villa founding
- Philosophy section with 3 pillars:
  - Sustainable Luxury (Zap icon)
  - Authentic Experiences (Award icon)
  - Personalized Service (Heart icon)
- Team section

**Icons:** Feather Icons (Zap, Award, Heart) in gold

### 3. Suites (`/suites`)
**Content:**
- Hero: "Luxurious Suites"
- 4 suite cards:
  1. Ocean Horizon Suite ($450/night)
  2. Garden Oasis Villa ($650/night)
  3. Sunset Pavilion ($950/night)
  4. Presidential Sanctuary ($1,800/night)
- Premium Amenities section (italic gold title):
  - 8 amenities with 20px Feather icons
  - Horizontal layout with gap-x-8

**Special Styling:**
- Section title: Playfair Display italic, gold color
- Compact icon layout (not grid)

### 4. Gallery (`/gallery`)
**Content:**
- Hero: "Visual Journey"
- 12 images in 3-column grid
- Each image has overlay on hover:
  - Background: `rgba(230,221,198,0.3)` (currently 0.3, to be increased)
  - Gold text with image title
  - Titles: Ocean Suite, Garden View, Private Pool, Dining Terrace, Bali Sunset, Lounge Area (repeated)

**Current Issue:**
- Overlay only triggers when hovering text (should be entire image)

### 5. Around (`/around`)
**Content:**
- Hero: "Explore Paradise"
- 4 attraction cards:
  1. Sunset Beach
  2. Warung Pantai (restaurant)
  3. Clifftop Viewpoint
  4. Tanah Lot Temple & Market
- 6 curated experiences with Feather icons:
  - Diving & Snorkeling (Anchor)
  - Water Adventures (Activity)
  - Mountain Trekking (MapPin)
  - Wellness & Spa (Sun)
  - Culinary Journeys (TrendingUp)
  - Cultural Immersion (Coffee)

### 6. Contact (`/contact`)
**Content:**
- Hero: "Get in Touch"
- Contact form with enhanced focus states:
  - Fields: Name, Email, Arrival Date, Departure Date, Message
  - Gold outline on focus (ring-2 ring-gold)
  - 6px border radius
  - Smooth transitions
- Contact info:
  - Address: Sunset Beach Road, Bali 80361, Indonesia
  - Phone: +62 361 847 5678
  - Email: reservations@breezevilla.com
  - Hours: Available 24/7
- Map placeholder

---

## 🧩 Components

### Header.tsx
**Features:**
- Fixed position with z-50
- Transparent at top, beige background on scroll (scrollY > 50)
- Text color adapts: light when transparent, dark when scrolled
- Desktop nav: horizontal links + language switcher
- Mobile nav: hamburger menu with dropdown
- Language switcher: EN 🇬🇧 | FR 🇫🇷 flags
  - Visual state tracking (gold when active)
  - localStorage integration
  - **Currently non-functional** (doesn't change page content)

**State:**
```tsx
const [scrolled, setScrolled] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const { language, setLanguage } = useLanguage();
```

### Footer.tsx
**Features:**
- Dark background (#1E1E1E)
- 3-column grid:
  1. Breeze Villa branding
  2. Contact information
  3. Social links (Facebook, Instagram placeholders)
- Copyright notice

### Hero.tsx
**Props:**
```tsx
interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  height?: string; // default: h-screen
}
```

**Features:**
- Full-width background image with parallax (scale animation)
- Dark overlay (black/40)
- Centered content with fade-in animations
- Optional CTA button
- Animated scroll-down arrow

### SectionTitle.tsx
**Props:**
```tsx
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean; // default: true
  italic?: boolean;   // default: false
  goldTitle?: boolean; // default: false
}
```

**Features:**
- Scroll-triggered fade-in animation
- useInView hook with margin: -100px
- Supports italic and gold styling for special sections

### Card.tsx
**Props:**
```tsx
interface CardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  price?: string;
  buttonText?: string;
  delay?: number; // for staggered animations
}
```

**Features:**
- Image with hover zoom (scale-110)
- Shadow on hover
- Optional price display
- CTA button linking to page

---

## 🎭 Animations

### Framer Motion Patterns
1. **Hero animations:**
   - Background image: scale 1.1 → 1 over 10s
   - Title: opacity 0 → 1, y: 30 → 0
   - Subtitle: delay 0.4s
   - CTA: delay 0.6s
   - Scroll arrow: delay 1s, bounce animation

2. **Scroll-reveal (SectionTitle):**
   - useInView with once: true
   - opacity 0 → 1, y: 30 → 0
   - duration: 0.6s

3. **Card stagger:**
   - Each card has `delay={index * 0.1}`
   - Fade + slide up animation

4. **Gallery images:**
   - Initial: opacity 0, y: 20
   - Animate: opacity 1, y: 0
   - Staggered by index * 0.1s

---

## 🌍 Translation Files Structure

### `/locales/en/common.json` (Comprehensive)
```json
{
  "siteName": "Breeze Villa",
  "tagline": "Where Luxury Meets Paradise",
  "header": { "home": "Home", "about": "About", ... },
  "footer": { "address": "...", "phone": "...", ... },
  "home": { "heroTitle": "...", "suitesCard": {...}, ... },
  "about": { "storyTitle": "...", "philosophy1Title": "...", ... },
  "suites": { "suite1": {...}, "amenitiesTitle": "...", ... },
  "gallery": { "title": "...", "subtitle": "..." },
  "around": { "beach": {...}, "activity1": {...}, ... },
  "contact": { "formTitle": "...", "name": "...", ... }
}
```

### `/locales/fr/common.json` (Comprehensive)
- Faithful, natural French translations
- Professional hospitality tone
- Culturally adapted (not literal translations)

---

## 🎨 Styling Conventions

### Tailwind Classes
- Container: `container mx-auto px-6`
- Sections: `py-20`
- Text: `font-body` / `font-display`
- Colors: `text-dark`, `text-gold`, `bg-background`, `bg-accent`
- Hover effects: `hover:scale-105`, `hover:text-gold`
- Transitions: `transition-all duration-300`

### Custom Styles (globals.css)
```css
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { background: #F8F6F1; color: #1E1E1E; }
```

---

## ⚙️ Configuration Files

### next.config.js
```js
module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
}
```

### tailwind.config.ts
```ts
theme: {
  extend: {
    colors: {
      background: "#F8F6F1",
      accent: "#E6DDC6",
      gold: "#C9A45C",
      dark: "#1E1E1E",
    },
    fontFamily: {
      display: ["Playfair Display", "serif"],
      body: ["Inter", "sans-serif"],
    }
  }
}
```

---

## 🐛 Known Issues

### 1. Gallery Overlay Hover
**Problem:** Overlay only activates when hovering over the text, not the entire image.
**Location:** `/app/gallery/page.tsx`
**Root Cause:** Hover trigger on wrong element (text instead of container)

### 2. Language Switcher
**Problem:** Flags visible but non-functional. Pages remain in English.
**Root Cause:**
- Pages use hardcoded English text
- No `useTranslation()` hook implementation
- LanguageContext exists but isn't connected to content
- Need to integrate `react-i18next` or use translation keys

### 3. Partial i18n Implementation
**Problem:** `next-intl` installed but not configured.
**Missing:**
- i18n configuration file
- Translation key usage in components
- Automatic language detection

---

## 🔄 State Management

### LanguageContext
**Location:** `/contexts/LanguageContext.tsx`
**Current Implementation:**
```tsx
const LanguageContext = createContext<LanguageContextType>();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    // Load from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) setLanguageState(savedLanguage);
  }, []);

  useEffect(() => {
    // Fetch translations
    fetch(`/locales/${language}/common.json`)
      .then(res => res.json())
      .then(data => setTranslations(data));
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

**Usage in Header:**
```tsx
const { language, setLanguage } = useLanguage();
// Sets language state but doesn't update page content
```

---

## 📋 Content Inventory

### Images (Unsplash)
- All images use Unsplash URLs
- Main categories: villas, pools, ocean views, tropical gardens, dining
- Gallery: 12 images with titles

### Contact Information
- **Address:** Sunset Beach Road, Bali 80361, Indonesia
- **Phone:** +62 361 847 5678
- **Email:** reservations@breezevilla.com
- **Hours:** 24/7 availability

### Social Links
- Facebook: placeholder (#)
- Instagram: placeholder (#)

---

## 🚀 Deployment

### Current Status
- GitHub repository: https://github.com/Jo0693/breeze-villa.git
- Branch: main
- Build: Successful (static generation, all pages prerendered)
- Deployment target: Vercel

### Build Output
```
Route (app)                    Size    First Load JS
┌ ○ /                          807 B   143 kB
├ ○ /about                     2.88 kB 145 kB
├ ○ /around                    3.87 kB 146 kB
├ ○ /contact                   1.5 kB  138 kB
├ ○ /gallery                   1.32 kB 143 kB
└ ○ /suites                    3.79 kB 146 kB
```

---

## 🔧 Development Commands

```bash
npm run dev      # Start dev server (port 3001 if 3000 busy)
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint check
```

---

## 📝 Next Steps (To Be Implemented)

1. **Install and configure react-i18next**
2. **Update all pages to use translation keys** instead of hardcoded text
3. **Fix gallery overlay hover** (entire image, not just text)
4. **Implement functional language switcher** that updates all content
5. **Test language persistence** across page navigation

---

## 🎯 Project Goals

- Premium, luxury aesthetic matching 5-star hospitality standards
- Seamless bilingual experience (EN/FR)
- Smooth animations without performance issues
- Responsive across all devices
- SEO-optimized with proper meta tags
- Fast loading times (<3s FCP)

---

**End of Context Backup**
This document represents the complete state of the Breeze Villa project as of Phase 2.5, before implementing full i18n functionality.
