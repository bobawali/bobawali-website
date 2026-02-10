# Claude Code Rules

## Commit Messages
- Keep commit messages simple and concise
- Do NOT use fancy formatting (no emojis, no markdown, no bullet points)
- NEVER add "Co-Authored-By: Claude" or any Claude attribution
- NEVER add "Generated with Claude Code" or similar footers
- Just write a plain, descriptive commit message

---

## Project Overview

**Boba Wali** is a landing page for Houston's first South Asian fusion bubble tea cart and catering service. The site is designed to drive event bookings through an inquiry form.

### Target Audience
- Event planners and hosts in Houston, TX
- People looking for unique beverage catering for weddings, corporate events, and parties

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | Framework (App Router) |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 12.x | Animations |
| PostHog | 1.x | Analytics (configured, not yet wired) |

---

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (fonts, metadata, JSON-LD)
│   ├── page.tsx            # Home page - assembles sections
│   ├── globals.css         # Global styles, custom fonts, utilities
│   └── icon.png            # Favicon
├── components/
│   ├── HeroBackground.tsx  # Hero section with headline & CTA
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer with social links
│   ├── Preloader.tsx       # Loading screen animation
│   ├── MobileCTA.tsx       # Sticky mobile call-to-action
│   ├── DrinkCarousel.tsx   # Infinite-loop drink image carousel (peek layout)
│   └── sections/           # Page sections (barrel-exported via index.ts)
│       ├── InquirySection.tsx   # Embedded Google Form
│       ├── FeaturedInSection.tsx # Press mentions
│       ├── LogoCarousel.tsx     # Client logos carousel
│       ├── MenuSection.tsx      # Menu section with DrinkCarousel + CTA
│       ├── ReviewsSection.tsx   # Google Reviews auto-rotating carousel
│       ├── AboutSection.tsx     # (available, not currently used)
│       └── index.ts             # Barrel exports
├── content/                # Content data files (TypeScript)
│   ├── clients.ts          # Client logo data
│   ├── features.ts         # Press/features data
│   ├── menu.ts             # Menu items
│   ├── reviews.ts          # Google Reviews data
│   ├── gallery.ts          # Gallery images
│   └── services.ts         # Services data
├── public/                 # Static assets
│   ├── clients/            # Client logo images
│   ├── featured/           # Press logo images
│   └── *.png, *.ttf        # Other static files
└── assets/                 # Source assets (PDFs, docs - not served)
```

---

## Component Conventions

### Client Components
Use `'use client'` directive for components that need:
- Framer Motion animations
- Event handlers (onClick, onSubmit)
- Browser APIs (scrollIntoView, window)

### Section Components
- Located in `components/sections/`
- Export via barrel file: `components/sections/index.ts`
- Each section has an `id` attribute for anchor navigation
- Common pattern: `<section id="section-name" className="py-16 px-4">`

### Animation Pattern
Standard fade-in-up animation using Framer Motion:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}  // or use whileInView for scroll-triggered
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
```

### Content Data Pattern
Content is separated from components in `/content/*.ts` files:
```tsx
// content/clients.ts
export interface Client {
  id: string
  name: string
  logo?: string
}

export const clients: Client[] = [
  { id: 'google', name: 'Google', logo: '/clients/googlelogo.png' },
  // ...
]
```

---

## Design System

### Colors (defined in tailwind.config.js)
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#790000` | Maroon - CTAs, accents |
| `secondary` | `#EAB6C9` | Soft pink - backgrounds, highlights |
| `tertiary-dark` | `#001B2E` | Navy - text color |
| `tertiary-accent` | `#C27013` | Orange/gold - shimmer effect |
| `bg` | `#FFF7F0` | Warm cream - page background |
| `text` | `#001B2E` | Navy - body text |

### Fonts
| Token | Font | Usage |
|-------|------|-------|
| `font-display` | Radicalis | Logo, brand headings (custom font) |
| `font-sans` | Inter | Body text, UI elements (Google Font) |

### Custom CSS Utilities
- `.text-shimmer` - Animated gradient text effect (defined in globals.css)

---

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Environment Variables

Required in `.env`:
```
NEXT_PUBLIC_GOOGLE_FORM_URL=<embedded form URL>
NEXT_PUBLIC_GOOGLE_FORM_DIRECT_URL=<direct form URL>
NEXT_PUBLIC_MENU_URL=<menu PDF URL>
```

Future (not yet wired):
```
NEXT_PUBLIC_POSTHOG_KEY=<PostHog project API key>
NEXT_PUBLIC_POSTHOG_HOST=<PostHog host URL>
```

---

## Key Implementation Notes

1. **Single Page App** - The site is a single-page landing page. All sections are on `page.tsx`.

2. **Anchor Navigation** - Navigation uses smooth scroll to section IDs (e.g., `#inquiry`, `#menu`).

3. **SEO** - Metadata and JSON-LD structured data are configured in `app/layout.tsx`.

4. **Mobile-First** - The design is responsive. MobileCTA provides a sticky booking button on mobile.

5. **No Backend** - Form submissions go directly to Google Forms via embedded iframe.

6. **Assets vs Public** - `/assets/` contains source files (PDFs, docs). `/public/` contains web-served assets.

---

## Code Style Guidelines

- Use TypeScript interfaces for content data types
- Prefer named exports for content, default exports for components
- Use Tailwind utility classes; avoid custom CSS unless necessary
- Keep components focused - extract reusable pieces
- Use semantic HTML elements (`<section>`, `<nav>`, `<footer>`)
- Add `id` attributes to sections for anchor navigation
- Use mobile-first responsive values: `mobile-value md:desktop-value` (e.g. `px-5 md:px-8 text-sm md:text-lg`)
- Background color `#FFF7F0` is hardcoded in some gradient overlays (e.g. DrinkCarousel edge fades) — keep in sync with the `bg` Tailwind token
- **Section backgrounds alternate** between white (`bg-white`) and cream (default page `bg` color `#FFF7F0`). Current order: Hero (cream) → LogoCarousel (cream) → MenuSection (cream) → ReviewsSection (white) → FeaturedInSection (cream) → InquirySection (white) → Footer (maroon). When adding new sections, maintain this alternating pattern.
