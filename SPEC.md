# VBSS Community Website — Complete Implementation Spec

## Overview
Build a complete multi-page community website for "Vaishya Bhartiya Suri Samaj" (VBSS). DEMO/PROTOTYPE — no database, no auth, no CRUD. All data hardcoded as TypeScript constants in `/src/data/`.

## Tech Stack
- Vite + React.js (TypeScript)
- ShadCN UI components (Radix primitives)
- Tailwind CSS with custom theme
- React Router DOM v6+ for routing
- Lucide React for icons
- Framer Motion for subtle page transitions
- Fonts: Plus Jakarta Sans (headings) + Poppins (body) via Google Fonts

## Design System

### Color Palette (CSS Variables)
- Primary: Deep Maroon `hsl(0 72% 41%)` — tradition/culture
- Secondary/Accent: Warm Gold `hsl(36 90% 45%)` — highlights, buttons, badges
- Background: Warm off-white `hsl(40 33% 98%)`
- Card: White with subtle warm shadows
- Custom Tailwind scales: `saffron`, `maroon`, `warmgold`

### Typography
- `font-display`: Plus Jakarta Sans — for headings
- `font-body`: Poppins — for body text

### Design Tone
Modern, minimal, culturally respectful, warm. Premium community portal. Inspired by the Innova agency template: bento grid hero, large bold typography, accent color blocks, stats counters, clean whitespace, rounded buttons.

### Mandala Background
`.mandala-bg` class: subtle SVG mandala/geometric pattern at 5% opacity for hero/footer sections.

---

## Data Files (`src/data/`)

### stats.ts
```ts
export const stats = [
  { label: "Members", value: 700, suffix: "+" },
  { label: "Cultural Events", value: 50, suffix: "+" },
  { label: "Years of Unity", value: 25, suffix: "+" },
  { label: "City Chapters", value: 15, suffix: "+" },
];
```

### events.ts
Export `Event` interface and `events` array with 8 events:
- Fields: id, title, date, time, venue, description, image (Unsplash URL), category ("Religious"|"Social"|"Cultural"), isUpcoming
- Events: Mahavir Jayanti (Religious, upcoming), Annual Samaj Gathering 2026 (Social, upcoming), Youth Cultural Meet (Cultural, upcoming), Diwali Milan Samaroh (Cultural, past), Community Health Camp (Social, past), Paryushan Mahaparv (Religious, past), Women Empowerment Seminar (Social, upcoming), Navratri Garba Night (Cultural, past)

### members.ts
Export `Member` interface and `committeeMembers` array with 10 members:
- Fields: id, name, designation, phone (masked: +91 98XXX XXXXX), image (Unsplash face), optional message (for president)
- President: Shri Ramesh Chand Shah (with message about community), Vice President, General Secretary, Joint Secretary, Treasurer, 5 Committee Members
- Use Indian names

### gallery.ts
Export `GalleryImage` interface and `galleryImages` array with 16 images:
- Fields: id, src (Unsplash), alt, category ("Events"|"Festivals"|"Gatherings")

### sandesh.ts
Export `SandeshEntry` interface and `sandeshEntries` array with 6 entries:
- Fields: id, title, date, author, category, excerpt
- Entries: Annual Report 2025-26, Mahavir Jayanti Special, Health Camp Drive, Youth Achievers, Diwali Special, Education Scholarship

---

## ShadCN UI Components (`src/components/ui/`)

Create these with Radix primitives + CVA + Tailwind:

### button.tsx
- `rounded-full` base, variants: default (primary bg, shadow, hover translate-y), outline (border-2 primary), secondary (gold), ghost, link
- Sizes: default (h-11 px-6), sm, lg, icon

### card.tsx
- `rounded-2xl`, subtle border, warm shadow, hover:shadow-md transition
- Sub-components: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter

### badge.tsx
- `rounded-full`, variants: default, secondary, religious (maroon-100/maroon-800), social (saffron-100/saffron-800), cultural (warmgold-100/warmgold-800)

### avatar.tsx
- Radix Avatar with Avatar, AvatarImage, AvatarFallback

### dialog.tsx
- For gallery lightbox. Full overlay, rounded-2xl content, close button

### tabs.tsx
- Rounded-full pill style. Active: bg-primary text-white

### sheet.tsx
- For mobile nav drawer. Slide from right.

### input.tsx, textarea.tsx, label.tsx
- rounded-xl, focus ring, transitions

---

## Layout Components (`src/components/layout/`)

### Navbar.tsx
- Fixed/sticky, transparent -> blur backdrop on scroll
- Logo: gradient box with "व" + Hindi/English text
- Desktop: nav links as rounded-full pills, active highlighted
- CTA: "Join Community" button with ArrowRight icon
- Mobile: Sheet hamburger drawer
- Links: Home(/), About(/about), Events(/events), Gallery(/gallery), Committee(/committee), Sandesh(/sandesh), Contact(/contact)

### Footer.tsx
- Dark bg (foreground color), mandala-bg overlay
- 4 columns: Brand info, Quick Links, Contact Info (Mumbai address), Social icons
- Social: Facebook, Instagram, YouTube, WhatsApp
- Bottom: copyright 2026 + "Built with ❤️"

### PageHero.tsx
- Reusable hero banner for inner pages
- Props: title, optional subtitle, optional hindiTitle
- mandala-bg, gradient overlays, decorative blur circles
- Framer Motion fade-in animations
- Decorative gradient line below

---

## Shared Components (`src/components/shared/`)

### SectionHeading.tsx
- Props: title, optional subtitle, optional hindiTitle, align (center/left)
- hindiTitle in gold/secondary color, uppercase tracking-widest
- Gradient decorative line
- Framer Motion whileInView animation

### EventCard.tsx
- Card with image (hover scale), category badge (colored by type), optional "Upcoming" badge
- Title, date/time/venue with Lucide icons, description (line-clamp-2)
- "Learn More" with ArrowRight

### MemberCard.tsx
- Centered card, circular Avatar with ring (hover effect), name, designation, phone

### NewsCard.tsx
- Card with category badge, date, title, author, excerpt, "Read More" arrow

### BackToTop.tsx
- Floating button bottom-right, appears after 400px scroll, ArrowUp icon
- Framer Motion AnimatePresence

### PageTransition.tsx
- Framer Motion wrapper: fade-in (opacity 0->1, y 16->0), exit fade-out

---

## Home Page Sections (`src/components/home/`)

### HeroSection.tsx
Inspired by Innova agency template:
- **Bento/mosaic grid layout**: asymmetric image grid with 5-6 community images from Unsplash (temples, gatherings, cultural events)
- Large bold heading: "Preserving Heritage. Building Community."
- Subheading: "Vaishya Bhartiya Suri Samaj — uniting 700+ families across India in celebration of our rich cultural legacy and shared values."
- Two CTAs: "Explore Our Community" (primary, ArrowRight) + "View Events" (outline)
- Accent decorative elements: small colored squares/blocks in the grid gaps
- Staggered Framer Motion animations on load
- Images should use object-cover and various aspect ratios for the mosaic effect

### StatsCounter.tsx
- 4 stats in a row (responsive grid)
- Large animated numbers that count up when scrolled into view
- Use useEffect + useState + IntersectionObserver for counting animation
- Gradient text for numbers (primary -> secondary)
- Label text below each number

### AboutPreview.tsx
- Two-column layout (lg:grid-cols-2)
- Left: Large bold text "We're dedicated to preserving our rich cultural heritage"
- Right: Paragraph about mission + "Learn More →" link to /about
- Below: 3 feature cards in grid:
  - Cultural Preservation (Landmark icon)
  - Community Welfare (Heart icon)
  - Youth Empowerment (GraduationCap icon)
  - Each card: icon in accent colored circle, title, short description

### EventsPreview.tsx
- SectionHeading: "Upcoming Events & Celebrations"
- Filter first 3 upcoming events from data
- Render 3 EventCard components in responsive grid
- "View All Events →" Link to /events

### SandeshPreview.tsx
- SectionHeading: "वैश्य सूरी संदेश — Latest Updates"
- First 3 sandesh entries
- 3 NewsCard components in grid
- "View All →" Link to /sandesh

### GalleryPreview.tsx
- SectionHeading: "Community Highlights"
- 6 images in a bento/masonry grid
- Each image: hover overlay with dark gradient + alt text
- "View Full Gallery →" Link to /gallery

---

## Pages (`src/pages/`)

Every page wraps content in `<PageTransition>` component.

### Home.tsx
Renders in order: HeroSection, StatsCounter, AboutPreview, EventsPreview, SandeshPreview, GalleryPreview

### About.tsx
- PageHero: title="About Our Samaj", hindiTitle="हमारे बारे में"
- History section: 2-3 paragraphs about merchant community heritage, origins, values
- Mission & Vision: two cards side by side
- Core Values: 4 cards with icons (Integrity, Unity, Service, Heritage)
- Timeline: vertical timeline with decorative line and dots:
  - 1998: Founded by visionary community leaders
  - 2001: First annual community gathering
  - 2005: Registered as a charitable trust
  - 2010: Launched women's empowerment wing
  - 2015: Youth wing established
  - 2024: Crossed 700+ active members

### Events.tsx
- PageHero: title="Events & Celebrations"
- ShadCN Tabs: All, Upcoming, Past, Religious, Social, Cultural
- Tab content: filtered event cards grid (responsive: 1/2/3 columns)
- All 8 events

### Gallery.tsx
- PageHero: title="Community Gallery"
- ShadCN Tabs: All, Events, Festivals, Gatherings
- CSS columns masonry layout (2 cols mobile, 3 cols md, 4 cols lg)
- Click opens ShadCN Dialog with large image
- 16 gallery images

### Committee.tsx
- PageHero: title="Our Leadership"
- President's message section: large Card with Avatar, name, quote/message
- Committee grid: responsive grid of MemberCard components
- 10 members total

### Sandesh.tsx
- PageHero: title="वैश्य सूरी संदेश", subtitle="Community Newsletter & Updates"
- List of 6 NewsCard components in vertical stack or 2-column grid
- Reverse chronological order

### Contact.tsx
- PageHero: title="Get In Touch"
- Two-column layout:
  - Left: Contact form with ShadCN Input, Textarea, Button (Name, Email, Phone, Message, Submit) — frontend only, no submission logic
  - Right: Contact info card (address, phone, email, office hours)
- Below: Google Map placeholder (gray box with MapPin icon and text)
- Social links row

---

## Global Requirements
1. All data in `/src/data/` — NO API calls
2. Every page wrapped in PageTransition
3. Fully responsive — mobile-first
4. Consistent spacing: `py-16 lg:py-24` sections, `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` containers
5. All images: Unsplash URLs with relevant content
6. Navbar highlights active page
7. ShadCN components everywhere
8. Framer Motion: subtle fade-in/slide-up, whileInView for sections
9. Back to top floating button
10. Clean TypeScript — proper interfaces, no `any`
