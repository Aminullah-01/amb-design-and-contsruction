<<<<<<< HEAD
# AMB Design and Construction Limited — Website

Static, frontend-only portfolio website for **AMB Design and Construction Limited** (Nigeria).
Tagline: **We Design. We Build. We Deliver.**

No backend, no server code, no secrets. The build output is the `dist/` folder and can be hosted on
any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages or a standard cPanel host).

## Stack

- React + TypeScript, built with Vite
- React Router for pages
- react-helmet-async for page titles and meta tags
- Tailwind CSS (v4, via `@tailwindcss/vite`)
- framer-motion for motion, lucide-react for icons
- Self-hosted fonts via `@fontsource` (Montserrat, Inter, Lobster Two)
- Typed content files under `src/content` (no CMS, no database)

## Requirements

- Node.js 20+ (developed on Node 24)
- npm

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                     |
| `npm run build`     | Type-check and build to `dist/`               |
| `npm run preview`   | Preview the production build locally          |
| `npm run lint`      | Run ESLint                                    |
| `npm run typecheck` | Type-check with `tsc` (no output)             |
| `npm run format`    | Format the project with Prettier              |

## Project structure

```
public/
  videos/                     Hero video files (hero.mp4, hero.webm, hero-mobile.mp4)
  images/
    brand/                    Logo, favicon, og-image
    projects/                 Cleared project images
    mockups/                  Helmet, cap, vest mock-ups
    needs-clearance/          Watermarked images — NEVER publish or import these
src/
  pages/                      Route pages (lazy-loaded)
  components/
    layout/                   Layout, header, footer, floating buttons, scroll reset
    ui/                       Reusable UI primitives
    sections/                 Home page sections
    portfolio/                Portfolio and gallery components
  content/                    Typed content (site, services, projects, ...)
  lib/                        Helpers (e.g. WhatsApp link builder)
  types/                      Shared TypeScript types
```

The `@/` path alias points at `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).

## Content and assets

- Page copy comes from the Build Pack (Section 2).
- Design tokens and rules come from the Design Guide (Sections 3–5).
- Only images marked **Cleared** may be used. Nothing in `public/images/needs-clearance` may be
  imported or published.
- Never invent facts, project details, numbers or testimonials — use `[ADD ...]` placeholders.

## Deployment

Run `npm run build` and deploy the `dist/` folder to any static host. Ensure the host rewrites
unknown paths to `index.html` so client-side routes (for example `/portfolio`) resolve correctly.

## Status

Task **T01 (project setup)** complete: scaffolding, routing, tooling and placeholder pages.
Page content and design tokens are added in later tasks.
=======
# amb-design-and-contsruction
>>>>>>> 0899de32ca3f180d50dd863c007269a1993bd0f0
