# AK Plumbing Co. — Implementation Plan

## Overview

Production-ready multi-page plumbing business website for **AK Plumbing Co.** (Owner: Fadilu Idris Akorede). Built with Next.js App Router, Tailwind CSS, TypeScript, and Supabase.

**Primary goals:** Phone calls, WhatsApp messages, quote requests, trust building, service/project showcase.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 4 |
| Language | TypeScript |
| Database | Supabase PostgreSQL |
| Storage | Supabase Storage (`project-images` bucket) |
| Deployment | Vercel |

---

## Brand & Design

- **Colors:** Deep blue (`#0A2463`), gold (`#D4AF37`), white, dark gray (`#1A1A2E`)
- **Style:** Premium, clean, glassmorphism cards, smooth fade-in/slide-up animations
- **Logo:** `public/images/logo.png` (from `assets/AK_plumbing-removebg-preview.png`)
- **Hero video:** `public/videos/hero.mp4`
- **Phone:** 08154037226
- **WhatsApp:** wa.me/2348154037226

---

## Supabase Setup (via MCP)

### Tables

#### `contacts`
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, default `gen_random_uuid()` |
| name | text | required |
| phone | text | required |
| email | text | optional |
| message | text | required |
| service | text | service needed |
| created_at | timestamptz | default `now()` |

#### `testimonials`
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| name | text | required |
| message | text | required |
| rating | int | 1–5 |
| location | text | optional |
| created_at | timestamptz | default `now()` |

#### `projects`
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| title | text | required |
| image_url | text | public URL |
| category | text | Bathroom, Kitchen, Pipes, Emergency Repairs |
| created_at | timestamptz | default `now()` |

### Storage

- Bucket: `project-images` (public read)
- Policies: public SELECT; authenticated INSERT (admin uploads later)

### RLS Policies

- `contacts`: INSERT for anon (form submissions), no public SELECT
- `testimonials`: SELECT for anon, no public INSERT
- `projects`: SELECT for anon, no public INSERT

### Seed Data

- 6+ testimonials with ratings and Lagos-area locations
- 12+ project images across all categories

---

## Project Structure

```
akplumbingco/
├── doc/
│   └── IMPLEMENTATION_PLAN.md
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── services/
│   │   ├── about/
│   │   └── projects/
│   └── videos/
│       └── hero.mp4
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Home
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── testimonials/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── service-areas/page.tsx
│   │   ├── sitemap.ts
│   │   └── api/                  # (optional future email hook)
│   ├── components/
│   │   ├── layout/               # Header, Footer, FloatingButtons
│   │   ├── ui/                   # Button, Card, StarRating, etc.
│   │   ├── home/                 # Hero, TrustBar, ServicesPreview, etc.
│   │   ├── forms/                # QuoteForm, ContactForm
│   │   └── shared/               # TestimonialCarousel, ProjectGallery
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   └── server.ts
│   │   ├── constants.ts
│   │   └── seo.ts
│   └── types/
│       └── database.ts
└── .env.local
```

---

## Pages Checklist

### 1. Home (`/`)
- [x] Fullscreen hero video + dark overlay + logo animation
- [x] CTA buttons: Call, WhatsApp, Get Free Quote (scroll to form)
- [x] Trust bar (5 items)
- [x] Services preview (6 cards)
- [x] Why Choose Us split layout
- [x] Project highlights grid (from Supabase)
- [x] Testimonials carousel (from Supabase)
- [x] Quote form → `contacts` table
- [x] CTA section

### 2. About (`/about`)
- [x] Company mission & vision
- [x] Owner section (Fadilu Idris Akorede)
- [x] Skills, trust highlights, professional image

### 3. Services (`/services`)
- [x] 7 detailed service cards with images & SEO content
- [x] Request Service buttons → contact

### 4. Projects (`/projects`)
- [x] Gallery from Supabase `projects` table
- [x] Category filters
- [x] Lightbox viewer
- [x] Before/after style layout

### 5. Testimonials (`/testimonials`)
- [x] Cards from Supabase
- [x] Star ratings
- [x] Auto-scroll carousel

### 6. Contact (`/contact`)
- [x] Form → `contacts` table
- [x] Call + WhatsApp buttons
- [x] Google Map embed
- [x] Business hours

### 7. Service Areas (`/service-areas`)
- [x] SEO-friendly location list (Lagos metro areas)

---

## SEO & Performance

- Per-page `metadata` (title, description, OpenGraph)
- JSON-LD `LocalBusiness` schema on home
- `sitemap.ts` for all routes
- `robots.txt`
- Next.js `Image` component with lazy loading
- Optimized static assets

---

## Mobile Features

- Sticky header with mobile menu
- Floating WhatsApp + Call buttons (fixed bottom-right)
- Mobile-first responsive breakpoints

---

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=https://vpixzsiuersxsgqosiqb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon_key>
NEXT_PUBLIC_SITE_URL=https://akplumbingco.com
NEXT_PUBLIC_PHONE=08154037226
```

---

## Deployment (Vercel)

1. Push repo to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy — automatic on push to main

---

## Future Enhancements

- [ ] Gmail/email notification on new contact (Edge Function + Resend/SMTP)
- [ ] Admin dashboard for managing projects & testimonials
- [ ] Upload project images directly to Supabase Storage via admin UI
- [ ] Google Analytics / conversion tracking

---

## Build Order (Completed Steps)

1. ✅ Supabase migrations (tables, storage, RLS, seed)
2. ✅ Next.js scaffold + dependencies
3. ✅ Copy brand assets (logo, video)
4. ✅ Generate service/about/project images
5. ✅ Shared components & layout
6. ✅ All 7 pages
7. ✅ SEO, sitemap, schema markup
8. ✅ Production build verification
