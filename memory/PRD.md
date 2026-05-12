# PRD — Sawaa Enterprise (Single index.html)

## Original Problem Statement
> Take the code from https://github.com/syedabdulwahab9/sawaaenterprise and make it in an `index.html` file and it should upload on a domain.

## Outcome
A single self-contained `index.html` (`/app/index.html`, also copied to `/app/frontend/public/sawaa.html`) that mirrors the full Next.js website from the GitHub repo. No build step required — just upload to any static host.

## Architecture
- **Framework**: None — single HTML file, vanilla JS
- **Styling**: Tailwind CSS via Play CDN + custom CSS (glass, hairline, marquee, underline accent)
- **Fonts**: Plus Jakarta Sans, Playfair Display, Amiri (Google Fonts)
- **Icons**: Lucide via UMD CDN
- **Animations**:
  - Hero canvas wireframe globe — vanilla `<canvas>` (lat/lng grid + Fibonacci dots, mouse-reactive)
  - Scroll reveals via IntersectionObserver (replaces Framer Motion)
  - Logos marquee — CSS keyframes
- **Contact form**: Opens user's mail client via `mailto:` (no backend needed for static deploy)
- **Preview wiring**: React `App.js` now redirects `/` → `/sawaa.html` so the Emergent preview URL serves the static site

## Sections (mirrors original)
1. Hero (obsidian wireframe globe)
2. Services — Process + 6 Capabilities
3. Logos marquee
4. One Council (about)
5. Vision & Mission
6. Ventures (Qalb Digital, Euphoria, Noorehayat)
7. Leadership — Management + Development teams
8. Director's Message
9. Tech stack (21 technologies)
10. Engagement Models (T&M, Fixed, Outcome)
11. Stats
12. Contact (email + form + Arabic closing)
13. Footer

## How to upload to a domain
1. **Download** `/app/index.html` (or `/app/frontend/public/sawaa.html`).
2. **Pick any static host**:
   - **GitHub Pages**: push `index.html` to a repo, enable Pages, point your CNAME (`www.sawaaenterprise.com`) at it.
   - **Netlify / Vercel / Cloudflare Pages**: drag-and-drop the single file, then configure custom domain.
   - **Your own server**: drop into `/var/www/html/index.html` behind nginx/Apache.
3. **CNAME** record (`www`) → host's edge IP / target hostname. The original repo already includes `CNAME: www.sawaaenterprise.com`.

## Status — What's been implemented (2026-01)
- ✅ Single-file static site at `/app/index.html` (and `/app/frontend/public/sawaa.html`)
- ✅ All 13 sections from the source repo recreated faithfully
- ✅ Wireframe globe canvas animation (mouse-reactive)
- ✅ Scroll-reveal animations
- ✅ Email copy-to-clipboard with toast
- ✅ Contact form that opens user's email client with structured body
- ✅ Header scroll color transition (dark on hero, light on body)
- ✅ Back-to-top, smooth in-page anchor scrolling
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Preview URL renders the site (root redirects to /sawaa.html)

## Backlog / Future
- P1: Hook the contact form to a real form-handler (Formspree, Web3Forms, SendGrid) so submissions land in the inbox without opening Mail
- P2: Replace 2-letter colored tech badges with real brand SVG icons (Simple Icons CDN)
- P2: Add `<link rel="canonical">` and JSON-LD organization schema for stronger SEO once the domain is live
- P2: Pre-build Tailwind (replace Play CDN with a tiny pre-compiled stylesheet) to shave ~150KB and avoid the FOUC on slow networks

## Smart Enhancement Idea
Since this is a high-end agency/portfolio site, consider adding a **"Book a 30-min discovery call"** Calendly embed inline next to the Contact section. Most agency sites lose qualified leads at the "email me" step — a one-click booking flow can lift conversion significantly without changing the look or feel.
