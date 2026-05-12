# Sawaa Enterprise

> Global Engineering & Digital Ventures.

A single-file static website for **www.sawaaenterprise.com**.

## Files (upload these to your host)

```
index.html               # the site
logo.svg                 # silver W logo (scalable)

favicon-16.png           # browser tab
favicon-32.png           # browser tab (retina)
favicon-48.png           # Google Search

apple-touch-icon.png     # iOS 180×180 (home screen)
apple-touch-icon-120.png # iPhone legacy
apple-touch-icon-152.png # iPad legacy
apple-touch-icon-ipad.png# iPad 167×167

icon-192.png             # Android / PWA
icon-512.png             # Android high-res / OpenGraph

site.webmanifest         # PWA install
sitemap.xml              # SEO sitemap
robots.txt               # crawler rules
CNAME                    # www.sawaaenterprise.com
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages** → Source: `main` branch / `/ (root)`.
3. The `CNAME` file already sets the custom domain to `www.sawaaenterprise.com`.
4. Point your DNS `CNAME` record from your registrar to `<your-username>.github.io`.

## Deploy to Netlify / Vercel / Cloudflare Pages

Drag the entire folder onto **https://app.netlify.com/drop** — done.

## Deploy on your own server

Drop every file into your web root (e.g. `/var/www/html/`). Serve `index.html` as the default document.

## Sections

1. Hero (animated wireframe-globe canvas)
2. Services — process + 6 capabilities
3. Logos marquee
4. One Council (about)
5. Vision & Mission
6. Ventures (Qalb Digital, Euphoria, Noorehayat)
7. Leadership — Management + Development teams
8. Letters from the Board (Founder & CEO + Director cards)
9. Tech stack
10. Engagement models
11. Stats
12. Contact (form opens email client → `sawaaenterprise@gmail.com`)
13. Footer

## Tech

- Tailwind CSS (Play CDN)
- Lucide icons (CDN)
- Google Fonts: Plus Jakarta Sans, Playfair Display
- Vanilla JavaScript — no build step required

© Sawaa Enterprise. All rights reserved.
