# Progress Log

## Session: 2026-04-07

### Done
- Added proper custom 404 page (`src/pages/NotFound.jsx`) — label "404", serif heading, description, back link + optional home link
- Added catch-all `<Route path="*" />` in `App.jsx` to handle all unmatched routes
- Replaced inline "not found" blocks in `BlogPost.jsx` and `CaseStudyDetail.jsx` with reusable `<NotFound />` component (accepts `backTo`, `backLabel`, `message` props)
- Deep competitor pricing research (Designjoy, Clutch boutique agencies, Toptal, Upwork, productized services)
- Rebuilt Pricing.jsx with research-backed strategies:
  - Updated prices: Launchpad $2,500 / Growth $4,500 / retainer $299–$699/mo
  - Renamed tiers: Starter → Launchpad, Standard → Maintain, Growth retainer → Partner
  - Removed "50% OFF" discount badges (undermine boutique positioning)
  - New page header: "Built for business owners, not developers"
  - Added social proof strip (50+ projects, 3× lift, 2–4 wks, 100% ownership)
  - Added à la carte add-ons section (AI chatbot, e-commerce, dashboard, automation, SEO, email)
  - Added pricing-specific testimonials (ROI/worth-it angle) from real clients
  - Expanded FAQ from 5 → 8 (added Fiverr objection, AI explanation, ownership question)
  - Updated CTA to "Book a free strategy call"
- Updated Services.jsx Website Redesign price: From $3,500 → From $2,500 for consistency

### In Progress
- Nothing — all planned tasks complete

### Next
- Verify pricing page visually in browser
- Consider updating Services.jsx Full Transformation price if needed
- Optional: add responsive CSS for add-ons grid on mobile

### Notes
- `NotFound` is reusable with props — used for global catch-all (back to home) and inline dynamic-route misses (back to section)
- Pricing calibrated for U.S. SMB buyers (local gyms, nail spas, consultants) — above Fiverr but accessible
- Services.jsx Full Transformation stays at "From $6,500" (website + AI automations combined)
- Add-ons section is à la carte pricing transparency — reduces sticker shock on discovery calls

---

## Session: 2026-03-31

### Done
- Hero section typewriter effect — cycling phrases, inline cursor, badges, proof strip, CTAs, microcopy
- Fixed hero layout — all content visible above fold on desktop without scrolling
- Swapped "How it works" and "Trusted by fast-growing companies" sections
- Built full blog feature: `/blog` listing page, `/blog/:slug` detail page, nav link, footer link, routes
- Added blog CSS: grid, card, article, FAQ accordion, CTA block, responsive breakpoints
- Generated 126 SEO blog posts across 14 categories for ~125 business niches
- `npm run build` passes cleanly

## Session: 2026-04-07

### Done
- Added "Common questions" FAQ accordion to Home page — 4 objection-handling FAQs placed between the client logos and bottom CTA, reusing the `.faq-layout` grid and Pricing page accordion pattern; includes "See all FAQs on pricing →" link

### In Progress
- Nothing

### Next
- Review and test home page FAQ accordion in dev server

### Notes
- posts.js is ~606 KB which causes a Vite bundle size warning (non-breaking) — could be split later with dynamic imports if load time becomes an issue
- 126 total posts: 1 original AI automation + 125 niche-specific posts across 14 categories
- All posts follow the same shape: slug, seoTitle, metaDescription, category, date, readTime, h1, intro, 4 sections (each with h2 + body), 3 FAQ items, CTA
