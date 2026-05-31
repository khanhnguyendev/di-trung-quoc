---
id: 5u1p5i
title: Build Next.js 16 interactive travel guide — Guangzhou + Shenzhen trip
status: done
priority: high
labels:
  - nextjs
  - vercel
  - travel-guide
createdAt: '2026-05-31T06:42:04.615Z'
updatedAt: '2026-05-31T06:53:08.987Z'
timeSpent: 0
---
# Build Next.js 16 interactive travel guide — Guangzhou + Shenzhen trip

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Turn the China trip CSV data into a Next.js 16 web app deployable on Vercel. App helps users interactively explore day-by-day itinerary, tips (payment, transport, apps), and trip logistics for Guangzhou + Shenzhen. No auth required. MongoDB available if needed.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Next.js 16 app scaffolded with TypeScript + Tailwind + App Router
- [x] #2 CSV data parsed into typed TypeScript data file
- [x] #3 All 3 main sections navigable: Home / Itinerary / Tips
- [x] #4 Itinerary shows day-by-day breakdown per city
- [x] #5 Tips section covers payment (Alipay steps), transport, apps
- [x] #6 MongoDB connection util exists and is importable but not active
- [x] #7 App deploys to Vercel with zero config changes
- [x] #8 Mobile-responsive layout
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. Scaffold Next.js 16 project — `create-next-app` with TypeScript, Tailwind CSS, App Router, ESLint in repo root
2. Parse CSV → typed static data — create `data/trip.ts` with trip overview, itinerary by city/day, tips (payment/transport/apps), references
3. Build root layout + nav — responsive shell, Vietnamese-first, mobile-friendly (sidebar on desktop, bottom nav on mobile)
4. Home page (`/`) — trip overview card: cities, dates, group size, summary text, quick-nav to sections
5. Itinerary pages (`/itinerary`, `/itinerary/guangzhou`, `/itinerary/shenzhen`) — day-by-day timeline UI with activities, transport notes, highlights
6. Tips section (`/tips`, `/tips/payment`, `/tips/transport`, `/tips/apps`) — card/accordion layout per category; Alipay setup steps, transport options table, app install checklist
7. MongoDB infrastructure — `lib/mongodb.ts` connection util + env var template `.env.local.example`; not wired to any page yet, ready to activate
8. Vercel deployment config — `next.config.ts`, `vercel.json` if needed, `.env.local.example` with all env vars documented
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Build clean: 9 routes all static. Next.js 16.2.6, TypeScript, Tailwind v4, App Router. MongoDB util in lib/mongodb.ts (inactive). All pages: /, /itinerary, /itinerary/guangzhou, /itinerary/shenzhen, /tips, /tips/payment, /tips/transport, /tips/apps.
<!-- SECTION:NOTES:END -->

