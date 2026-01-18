# Boba Wali TODOs

## Conversion & UX

### Critical - Biggest Conversion Impact

- [ ] **Add testimonials section**
  - Pull 3-4 reviews from Google Maps listing
  - Place between Logo Carousel and Featured In
  - Include: name, event type, specific drink/detail mentioned
  - Format: short quote (1-2 sentences max) with photo if possible
  - Example: *"The gulab jamun milk tea was a hit at our Mehndi night. Professional setup and everyone loved it." — Priya S., Wedding (Mehndi)*
  - **Why:** For event services, testimonials are the #1 conversion driver. Event planners are risk-averse - they're putting their reputation on the line.

- [ ] **Add hero image**
  - Options: cart at event (best), lineup of signature drinks (good), guests enjoying drinks (good)
  - Place next to or behind hero text
  - If using background image, add subtle overlay so text remains readable
  - **Why:** You're selling an experience, not a concept. Event planners need to visualize your cart at their venue.
  - *BLOCKED: Waiting on client for animated boba cup images*

- [ ] **Enable MenuSection in page.tsx**
  - Component already built, just hidden
  - Place after testimonials, before inquiry form
  - Show 4-6 signature drinks with photos
  - Include "View Full Menu" PDF link
  - **Why:** The drinks ARE the product. "South Asian fusion boba" is intriguing but vague. Showing Gulab Jamun Milk Tea, Mango Lassi Boba creates desire.

- [ ] **Add "How It Works" section**
  - Place directly above inquiry form
  - 3 simple steps:
    1. Tell Us About Your Event → Fill out the quick form below
    2. Get Your Custom Quote → We'll respond within 24 hours
    3. Book & Celebrate → Lock in your date, we handle the rest
  - **Why:** Uncertainty creates friction. If someone doesn't know what to expect, they're more likely to abandon the form.

---

### High Impact - Trust & Clarity

- [ ] **Add specific numbers**
  - Current: "Trusted by amazing brands & organizations"
  - Better: "150+ events served across Houston" or "Trusted by 50+ brands & organizations"
  - Add to logo carousel section header or hero
  - **Why:** Specific numbers are more credible than vague claims. Even modest numbers are more trustworthy than none.

- [ ] **Add pricing signal**
  - Options:
    - "Starting at $X for small events"
    - "Custom quotes from $X-$Y depending on guest count"
    - "Events starting at $X/person"
  - If prefer not to show pricing: "Request a custom quote - we work with all budgets"
  - **Why:** Pre-qualifies leads. People with $200 budgets won't waste your time. People with $2000 budgets won't assume you're out of range.

- [ ] **Add FAQ section**
  - Place above or below inquiry form
  - Keep answers short (1-2 sentences)
  - Common questions:
    - How far in advance should I book?
    - What's included in the service?
    - Do you travel outside Houston?
    - Can you accommodate dietary restrictions?
    - What's your cancellation policy?
  - **Why:** Every unanswered question is a reason to delay inquiring.

- [ ] **Fix broken nav link**
  - File: `components/Navbar.tsx` ~line 10
  - Change `#services` → `#menu` (or `#about`, `#inquiry`)
  - **Why:** Links to section that doesn't exist.

---

### Visual & Motion Polish

- [ ] **Add hero visual interest**
  - Floating boba pearls: Subtle animated circles in background (on-brand, adds life)
  - Parallax on scroll: Hero elements move at different speeds
  - Drink preview enhancement: Colored dots could animate with liquid fill effect
  - Implementation: Low-medium complexity with existing Framer Motion

- [ ] **Upgrade to spring animations**
  - Current: `transition={{ duration: 0.8, ease: 'easeOut' }}`
  - Better: `transition={{ type: 'spring', stiffness: 100, damping: 15 }}`
  - **Why:** Spring animations mimic real-world physics. They feel "expensive" - what Apple and premium brands use.

- [ ] **Scroll-triggered section reveals**
  - Current: Sections use `whileInView` but mostly just fade-in-up
  - Enhancements:
    - Testimonials: Slide in from alternating sides
    - Menu items: Stagger with slight rotation for playfulness
    - Stats/numbers: Count-up animation when in view
  - Keep subtle - goal is polish, not distraction

- [ ] **Standardize section spacing**
  - Currently inconsistent: py-16, py-20, py-12
  - Create spacing scale and apply consistently

- [ ] **Improve FeaturedIn cards**
  - Currently plain
  - Add subtle gradients, glass effects, or better visual treatment

---

### Quick Wins (< 1 hour each)

| Task | File | Change |
|------|------|--------|
| Enable Menu section | `app/page.tsx` | Uncomment/add MenuSection |
| Fix nav link | `components/Navbar.tsx` | Change `#services` → `#menu` |
| Add event count | `components/sections/LogoCarousel.tsx` | "150+ events" in header |
| Add response time | `components/sections/InquirySection.tsx` | "We respond within 24 hours" |
| Spring animations | Various components | Replace `ease: 'easeOut'` with spring config |

- [ ] Reconsider loading screen animation (animated boba cup may not fit current design)
- [ ] Add CTA variety - ghost buttons and styled text links for secondary actions

---

## SEO & Analytics

### Technical SEO - On-Site

- [ ] **Create og-image.png (1200x630)** - CRITICAL
  - Currently referenced in metadata but file doesn't exist
  - Social sharing is broken without this

- [ ] **Update sitemap.xml lastmod**
  - Currently shows "2024-01-01" (outdated)
  - Update to current date

- [ ] **Add canonical URL to metadata**
  - In `app/layout.tsx` metadata object

- [ ] **Complete JSON-LD schema**
  - Add `telephone` (currently empty string)
  - Add `priceRange` (e.g., "$$")
  - Consider adding `openingHoursSpecification` if applicable

- [ ] **Compress images in /public**
  - Use squoosh.app or similar
  - Convert to WebP where possible

- [ ] **Add alt text to all images**
  - Audit all `<img>` and `<Image>` components

- [ ] **Test with Google Rich Results Test**
  - Validate JSON-LD schema
  - https://search.google.com/test/rich-results

---

### Local SEO - Off-Site

- [ ] **Set up/optimize Google Business Profile**
  - Complete all fields
  - Add photos, services, business hours

- [ ] **Ensure NAP consistency**
  - Name, Address, Phone must match exactly across all listings

- [ ] **Add to directories**
  - Yelp
  - Facebook Business
  - Local Houston directories
  - Wedding/event vendor directories

- [ ] **Get Google reviews**
  - Aim for 10+ reviews from past clients
  - Ask after successful events

---

### Analytics

- [ ] **Wire up PostHog**
  - Env vars already defined: `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`
  - Initialize in layout or dedicated provider

- [ ] **Add tracking events**
  - CTA clicks (Book Now, View Menu)
  - Form views and submissions
  - Social link clicks

- [ ] **Set up Google Search Console**
  - Verify domain ownership
  - Submit sitemap

---

## Content to Gather (Blocked Items)

These items require assets/info from the client:

- [ ] Hero image - cart at event or drink lineup
- [ ] 3-4 testimonials from Google Maps (name, event type, quote)
- [ ] Drink photos for menu section (6 slots)
- [ ] Event count (approximate number served)
- [ ] FAQ answers (lead time, travel radius, dietary options, cancellation policy)
- [ ] Animated boba cup images (client providing)

---

## Recommended Page Structure

**Current:**
```
Hero → Logos → Press → Form → Footer
```

**Recommended:**
```
Hero (with image) → Logos → Testimonials → How It Works → Menu → Press → FAQ → Form → Footer
```

This follows conversion-optimized flow:
1. Hook (hero)
2. Build trust (logos, testimonials, press)
3. Show product (menu)
4. Reduce friction (how it works, FAQ)
5. Convert (form)

---

## Done

- [x] Update hero section copy to be more compelling
- [x] Remove ServicesSection, add one-liner to LogoCarousel
- [x] Create robots.txt and sitemap.xml
