# AMB Design and Construction Limited — Website

Static, frontend-only portfolio website for **AMB Design and Construction Limited** (Nigeria).
Tagline: **We Design. We Build. We Deliver.**

No backend, no server code, no secrets. The build output is the `dist/` folder and can be hosted on
any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, or a standard cPanel/Apache host).

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

## Getting started (local development)

1. Open the project folder in a terminal.
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Open the URL shown in the terminal (usually http://localhost:5173).

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Run type-check, build the app, run SEO checks and prerender routes to `dist/` |
| `npm run preview` | Preview the production build locally from `dist/` |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check with `tsc` (no output) |
| `npm run format` | Format the project with Prettier |
| `npm run check-placeholders` | Warn about outstanding placeholders |
| `npm run outstanding` | Rebuild `docs/OUTSTANDING.md` |
| `npm run optimize-images` | Optimise images in `public/images` and update `src/content/image-manifest.json` |

### Placeholders and the production gate

`npm run build` warns when placeholder markers such as `[ADD ...]`, `[CONFIRM ...]`, `[WRITE ...]` or bracket tokens `[...]` remain, listing the count and pointing to `docs/OUTSTANDING.md`. To block the build instead, set the `PRODUCTION` flag:

```bash
PRODUCTION=1 npm run build
```

When `PRODUCTION` is on (or `--production` is passed), any remaining placeholder fails the build.

## Project structure

```
public/
  videos/                     Hero video files (hero.mp4, hero.webm, hero-mobile.mp4)
  images/
    brand/                    Logo, favicon, og-image
    projects/                 Cleared project images
    mockups/                  Helmet, cap, vest mock-ups
    needs-clearance/          Watermarked images — NEVER publish or import these
  _redirects                  SPA fallback for Netlify/Cloudflare Pages
  .htaccess                  SPA fallback for Apache/cPanel
vercel.json                   SPA fallback for Vercel
src/
  pages/                      Route pages (lazy-loaded)
  components/
    layout/                   Layout, header, footer, floating buttons, scroll reset
    ui/                       Reusable UI primitives
    sections/                 Home page sections
    portfolio/                Portfolio and gallery components
    seo/                      SEO components
  content/                    Typed content (site, services, projects, testimonials, team, faqs, image-manifest)
  lib/                        Helpers (analytics, brand, placeholder, projects, seo, structured-data)
  types/                      Shared TypeScript types
  data/                       Data helpers
```

The `@/` path alias points at `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).

## How to edit content (no coding experience required)

All text and data are in `src/content`. Changes are live when `npm run dev` is running. After changes, run `npm run build` before deploying.

- `src/content/site.ts` — Company info (name, tagline, phones, WhatsApp, email, address, working hours, map URL, socials, nav, footer links, stats). Email and some fields may show `[CONFIRM ...]` until confirmed.
- `src/content/services.ts` — The 7 services, their descriptions, deliverables, process steps and FAQs.
- `src/content/projects.ts` — Portfolio projects. Each project must have `cleared: true` to appear on the live site. Set `featured: true` for projects shown on the home page.
- `src/content/testimonials.ts` — Client testimonials. Set `showTestimonials = true` to show them on the home page.
- `src/content/team.ts` — Team members. The About page shows team if any name is not a placeholder.
- `src/content/faqs.ts` — Frequently asked questions.
- `src/content/process.ts` — The “How we work” stages.

Never add images from `public/images/needs-clearance`. Only use images already in `public/images/projects`, `public/images/brand`, or `public/images/mockups`.

## How to add a project

1. Get cleared images (no third-party watermarks) and place them in `public/images/projects/`. Use meaningful names (e.g. `modern-duplex-front.webp`).
2. Run `npm run optimize-images` to generate WebP/card variants and update `src/content/image-manifest.json`.
3. Open `src/content/projects.ts`. Copy an existing project entry and paste it at the end of the `projects` array.
4. Update the fields: `slug` (URL-friendly, lowercase, hyphens), `title`, `category`/`categories`, `location`, `year`, `status`, `servicesProvided`, `overview`, `coverImage.src`/`alt`, `gallery` items (each with `src` and descriptive `alt`), `featured` (true/false), `cleared: true`.
5. For before/after comparison, optionally add `beforeAfter` (see example above). Only use cleared images.
6. In development (`npm run dev`), open `/portfolio/<slug>` to verify. Run `npm run build` to generate prerendered pages and update the sitemap.
7. Never invent facts — use `[ADD ...]` placeholders if unknown.

## How to replace the hero video

1. Prepare video files (no audio). Recommended: `hero.mp4` (H.264), `hero.webm` (VP9), `hero-mobile.mp4` (lightweight). See Design Guide Section 6 for encoding targets/commands (FFmpeg).
2. Put them in `public/videos/`: `hero.mp4`, `hero.webm`, `hero-mobile.mp4`.
3. Generate a poster (first good frame) and save as `public/images/hero-poster.webp`. The current poster is 640×360 and under ~250 KB; keep poster small and high contrast for LCP.
4. The Hero component (`src/components/sections/Hero.tsx`) respects `prefers-reduced-motion`, `navigator.connection.saveData`/slow connections and includes a Pause button. It plays client-side after the load event (prerendered HTML has no `<video>` tag).
5. Verify locally with `npm run dev`/`npm run preview`. Rebuild with `npm run build`.

## How to run the image optimiser

Run:

```bash
npm run optimize-images
```

This reads images in `public/images`, generates WebP and `-card.webp` variants, writes stats to `src/content/image-manifest.json`, and processes brand assets safely (alpha-aware for transparent logos). Do not edit the manifest manually.

## Build and output

```bash
npm run build
```

This runs type-checking, Vite build, generates the sitemap, runs placeholder checks, prerenders routes (23 routes + 404) and runs the SEO check. The final static files are written to `dist/`. If any page is missing a title/description, the build fails the SEO check.

### Single-page-app fallback (deep links / refresh)

The site uses client-side routing. To avoid 404s when refreshing or opening deep links (e.g. `/portfolio/some-project`), the build includes fallback files:

- `public/_redirects` (Netlify, Cloudflare Pages): `/* /index.html 200`
- `vercel.json` (Vercel): rewrites all paths to `/index.html`
- `public/.htaccess` (cPanel/Apache): mod_rewrite rules to serve `index.html` for non-file/non-directory paths

These are copied to `dist/` during build. If you replace `dist/` directly, ensure these files are present.

**Note on pre-rendering (T32 pipeline):** The project uses a custom SSR prerender to generate static HTML for key routes (`dist/index.html`, `dist/about/index.html`, route folders for services/portfolio, `dist/404.html`, etc.). Pre-rendering improves SEO and first paint, but it does **not** replace the SPA fallback. You still must keep the rewrite rules above so that any route not explicitly prerendered (or any future dynamic-like deep link) falls back to `index.html` if served by the host. The prerendered HTML files exist, but hosts must still route correctly for direct access.

## Deployment step-by-step

### General (upload `dist/`)

1. Run `npm run build` locally and verify no placeholder errors (or fix them).
2. Upload the entire contents of the `dist/` folder to your host’s web root. Do **not** upload `node_modules`, `src`, or the root files — only `dist/`.
3. Ensure the fallback files (`_redirects`/`vercel.json`/`.htaccess` as applicable) are in the web root (they are inside `dist/`).
4. Test deep links (e.g. `/portfolio/modern-duplex-with-glass-corner`) by opening in a new tab and refreshing.

### Vercel

1. Push the repo to GitHub/GitLab.
2. Import the project in Vercel → Framework Preset: Vite.
3. Build command: `npm run build`; Output directory: `dist`.
4. Deploy. `vercel.json` provides rewrites automatically.
5. Add custom domain in Vercel → enable HTTPS.

### Netlify

1. Drag-and-drop the `dist/` folder to Netlify, or connect the repo (Build: `npm run build`, Publish: `dist`).
2. `public/_redirects` is included and copied to `dist/`.
3. Add custom domain → HTTPS is provisioned automatically.

### Cloudflare Pages

1. Connect the repo to Cloudflare Pages (Framework: Vite).
2. Build command: `npm run build`; Build output directory: `dist`.
3. `public/_redirects` is included; Pages also accepts rewrites in `_redirects`.
4. Add custom domain → enable HTTPS.

### cPanel / Apache

1. Build locally: `npm run build`.
2. In cPanel File Manager, go to `public_html/` and delete existing files (if replacing).
3. Upload all files from `dist/` into `public_html/`.
4. Ensure `public/.htaccess` is present (mod_rewrite enabled on most hosts). This enables SPA fallback for deep links.
5. Add custom domain and SSL (Let’s Encrypt) via cPanel.

## Pre-launch checklist

- [ ] All required placeholders resolved or confirmed (check `docs/OUTSTANDING.md`; run `npm run check-placeholders`).
- [ ] Only cleared images in use; `needs-clearance/` contains nothing published (no references in `dist/`).
- [ ] Hero video in `public/videos/` with poster in `public/images/hero-poster.webp`; tested reduced-motion/data-saver/pause.
- [ ] Logo/branding assets present and used per Design Guide (transparent/white logos as needed).
- [ ] Contact details correct (phones, WhatsApp `wa.me/2349030755246`, email). No backend form.
- [ ] Sitemap and robots in `dist/` correct (`sitemap.xml`, `robots.txt`).
- [ ] SEO: all prerendered pages have title and description (build passes SEO check).
- [ ] JSON-LD present (Organization/LocalBusiness as applicable). Open Graph tags present.
- [ ] Fallback files present in `dist/` for chosen host.
- [ ] Test on mobile (360, 390), tablet (768), laptop (1024), desktop (1440); no horizontal scroll.
- [ ] Lint, type-check and build pass (`npm run lint && npm run typecheck && npm run build`).
- [ ] Deep link and refresh tested on the live host.

## Monthly maintenance

- [ ] Add new cleared projects to `src/content/projects.ts`, optimise images with `npm run optimize-images`, run `npm run build` and deploy `dist/`.
- [ ] Update stats, team, testimonials or services in `src/content` as needed.
- [ ] Keep dependencies updated responsibly (test locally and build).
- [ ] Check `docs/OUTSTANDING.md` for new placeholders.
- [ ] Verify fallback files are intact after any host changes.
- [ ] Test key pages on mobile and desktop.
