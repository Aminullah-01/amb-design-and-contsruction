# AMB Website Task Sheet and Agent Prompts

**AMB Design and Construction Limited: frontend-only portfolio website**

This sheet breaks the whole build into small tasks. Each task has a **ready-to-paste prompt**, an **acceptance check**, and a checkbox. Give the agent **one task at a time**, review the result in the browser (phone width first), tick the box, then move on.

**Stack update:** the site now uses **React with Vite, TypeScript, Tailwind CSS and React Router** instead of Next.js. Wherever this sheet says content/, use src/content/. Replace the AGENTS.md from the Design Guide with the React version below, and use the updated T01, T32 and T40 prompts.

## How to Use

1. Put the Design Guide at docs/DESIGN\_GUIDE.md and the earlier Build Pack at docs/BUILD\_PACK.md in the project, and the AGENTS.md from Design Guide Section 13 in the project root.
2. Start every new agent session with the **Session Starter** below.
3. Run tasks in order. Tasks in the same phase can sometimes be swapped, but never skip Phase 0 and Phase 1.
4. If a result looks wrong, use the **Fix Prompts** at the end instead of restarting.
5. Anything in \[SQUARE BRACKETS\] is something you must replace or supply.

### Session Starter (paste at the start of every session)

```
You are building the AMB Design and Construction Limited website. First read AGENTS.md, docs/DESIGN_GUIDE.md and docs/BUILD_PACK.md (Section 2 for page copy). The Design Guide wins over the Build Pack. The site is frontend only (React with Vite, TypeScript, Tailwind CSS, React Router), no backend. Use only cleared images, only logo-derived colours, never invent facts (use [ADD ...] placeholders). Work only on the task I give you, keep changes small, run lint, type-check and build, then summarise what changed and which files you touched.
```

### Replacement AGENTS.md (React version)

Save this in the project root as AGENTS.md. It replaces the Next.js version in the Design Guide.

```markdown
# AGENTS.md - AMB Design and Construction Website (frontend only)

## Project
Static portfolio website for AMB Design and Construction Limited (Nigeria). Tagline: "We Design. We Build. We Deliver." No backend. Hosted on any static host.

## Source of truth
1. docs/DESIGN_GUIDE.md wins on design, structure and assets.
2. docs/BUILD_PACK.md Section 2 for page copy.
3. docs/TASK_SHEET.md for the task currently being built.
If they conflict, the Design Guide wins, except the stack: this file wins on the stack.

## Stack
React + Vite + TypeScript + Tailwind CSS + React Router. Page titles and meta tags with react-helmet-async. Content lives in src/content as typed files. No API routes, no server code, no secrets. Build output is the dist/ folder.

## Rules
1. Mobile-first. Test 360, 768 and 1280 widths.
2. Colours only from the Design Guide Section 3 tokens (logo-derived blue, red, brick, black, white).
3. Hero is a looping muted video with poster fallback, disabled for reduced motion, data saver and slow connections, with a Pause button.
4. Follow the section order and card/header/footer pattern in Design Guide Sections 7 and 10. Do not copy text, images or code from mshelhomes.com.
5. Use only images marked Cleared. Never import anything from public/images/needs-clearance.
6. Never invent facts, project details, numbers or testimonials. Use [ADD ...] placeholders.
7. Contact: WhatsApp deep link (wa.me/2349030755246), tel: links, mailto with [CONFIRM EMAIL]. No form backend.
8. Content lives in src/content; components read from it.
9. Use React Router for all pages, lazy-load page components, reset scroll on route change.
10. Use a shared Img component with explicit width and height, WebP and lazy loading below the fold.
11. Accessibility: semantic HTML, alt text, focus states, 4.5:1 contrast, keyboard operable.
12. Run lint, type-check and build before finishing every task and summarise changes.

## Commands
npm run dev | npm run build | npm run preview | npm run lint | npm run typecheck
```

### Progress Overview

| Phase | Tasks | Goal |
| --- | --- | --- |
| 0 | T01 to T03 | Project, assets and design tokens |
| 1 | T04 to T08 | Content data and global layout |
| 2 | T09 to T19 | Home page |
| 3 | T20 to T22 | Services pages |
| 4 | T23 to T26 | Portfolio and project pages |
| 5 | T27 to T31 | About, Process, Contact, FAQ and legal pages |
| 6 | T32 to T36 | Cross-site features (SEO, analytics, motion, performance) |
| 7 | T37 to T40 | QA, content swap, README and launch |

---

## Phase 0: Foundation

### T01. Project setup

- [ ] Done

```
Create a new React + TypeScript project with Vite (react-ts template) and Tailwind CSS. Add dependencies: react-router-dom, react-helmet-async (page titles and meta tags), framer-motion, lucide-react, clsx, and @fontsource packages for the fonts; add sharp as a dev dependency for the image script. Create this structure: src/pages, src/components (ui, layout, sections, portfolio), src/content (called content/ elsewhere in my docs), src/lib, src/types, public/videos, public/images/brand, projects, mockups, needs-clearance. Set up React Router with routes for /, /about, /services, /services/:slug, /portfolio, /portfolio/:slug, /process, /contact, /privacy-policy and a catch-all * route for the 404 page. Add a shared Layout (header, footer and floating buttons as empty placeholders, with an Outlet), a ScrollToTop component that resets scroll on every route change, and lazy-loaded pages using React.lazy and Suspense. Configure an @ path alias in tsconfig and vite.config. Add ESLint, Prettier and scripts: dev, build, preview, lint, typecheck. Write a short README. Confirm npm run dev and npm run build both work.
```

**Accept when:** the site builds to a dist/ folder with no errors.

### T02. Import and prepare assets

- [ ] Done

```
My source files are in raw-assets/. Read docs/DESIGN_GUIDE.md Section 9 (asset manifest). Match each file by its original name using this rule: a name like WhatsApp_Image_2026-10-05_at_3_59_06_PM__1_.jpeg is "3.59.06 PM (1)" in the table. Copy each file to its new name and folder from the table. Put the seven watermarked images in public/images/needs-clearance and never import them anywhere. Open each image to check it matches the description in the table; if one does not match, stop and tell me instead of guessing. Crop the logo to the artwork and save public/images/brand/logo.png. Keep the original as logo-original.jpg. Create a favicon and a 1200x630 og-image from the logo on a white background. Then create scripts/optimize-images.mjs (using sharp) that makes WebP versions of all cleared images (max 1600px wide, plus 800px card versions) and writes the width and height of every image into src/content/image-manifest.json. Run it and report file sizes.
```

**Accept when:** every cleared image has a WebP, a card size and recorded dimensions; no watermarked image is referenced in code.

**Before you run T02:** create a folder called raw-assets/ in the project and copy all 17 files into it with their **original WhatsApp names** (do not rename them). Copy your hero video into the same folder as hero-source.mp4.

**How the agent matches the files.** Each full name is WhatsApp\_Image\_2026-10-05\_at\_ + the code below + .jpeg.

| Code in the file name | Becomes | Folder |
| --- | --- | --- |
| 3\_59\_06\_PM | villa-aerial-pool-01 | projects (cleared) |
| 3\_59\_06\_PM\_\_1\_ | duplex-glass-corner-01 | projects (cleared) |
| 3\_59\_07\_PM | villa-aerial-gazebo-01 | projects (cleared) |
| 3\_59\_15\_PM | scale-model-compound-01 | projects (cleared) |
| 3\_59\_16\_PM | scale-model-compound-02 | projects (cleared) |
| 3\_59\_17\_PM\_\_1\_ | scale-model-bungalow-estate-01 | projects (cleared) |
| 3\_59\_09\_PM | contemporary-timber-stone-01 | needs-clearance (hold) |
| 3\_59\_13\_PM | duplex-aerial-driveway-01 | needs-clearance (hold) |
| 3\_59\_14\_PM | duplex-front-view-01 | needs-clearance (hold) |
| 3\_59\_20\_PM | courtyard-pool-aerial-01 | needs-clearance (hold) |
| 3\_59\_20\_PM\_\_1\_ | bungalow-stepped-entrance-01 | needs-clearance (hold) |
| 3\_59\_21\_PM | bungalow-front-elevation-01 | needs-clearance (hold) |
| 3\_59\_22\_PM | bungalow-site-aerial-01 | needs-clearance (hold) |
| 4\_05\_49\_PM | helmet-mockup | mockups |
| 4\_05\_49\_PM\_\_1\_ | cap-mockup | mockups |
| 4\_05\_50\_PM\_\_1\_ | vest-mockup | mockups |
| new\_logo-1\_jpg (no WhatsApp prefix) | logo-original | brand |

The Design Guide writes these as "3.59.06 PM" and "(1)". In the real file names that is 3\_59\_06\_PM and \_*1*.

### T02b. Process the hero video

- [ ] Done

```
My hero video is raw-assets/hero-source.mp4. Create public/videos/hero.mp4 (1080p, no audio, under 5 MB), public/videos/hero.webm, and public/videos/hero-mobile.mp4 (720p, under 2 MB) using ffmpeg, following the commands in docs/DESIGN_GUIDE.md Section 6.4. Extract a good first frame as public/images/hero-poster.webp (under 250 KB). Report each file size. If a file is too large, re-compress it with a higher CRF number and tell me what changed. If ffmpeg is not installed, tell me how to install it on my system before continuing.
```

**Accept when:** hero.mp4, hero.webm, hero-mobile.mp4 and hero-poster.webp exist in the right folders and are within the size limits.

### T03. Design tokens and style guide page

- [ ] Done

```
Implement the design tokens from Design Guide Sections 3, 4 and 5 in tailwind.config.ts and src/index.css: colours (blue-50/100/500/600/700, red-500/600, brick-500, ink-900/800/600/400, line, surface), radius, shadows, container width 1240px, breakpoints. Load Montserrat (headings), Inter (body) and optionally Lobster Two (accent only) self-hosted with @fontsource packages. Build reusable UI primitives in src/components/ui: Button (primary, secondary, outline-light, highlight, sizes), Container, Section (with background variants white, surface, dark, blue), SectionHeading (eyebrow, H2, intro), Badge, IconCircle, Card. Create a hidden page /style-guide that shows colours with hex values, the type scale, all buttons, a card, a badge and a section heading so I can approve the look. Check text contrast and report any pair under 4.5:1.
```

**Accept when:** /style-guide looks on-brand (blue primary, red and brick only as accents) and passes contrast.

---

## Phase 1: Content Data and Global Layout

### T04. Site and services content files

- [ ] Done

```
Create typed content files. content/site.ts: company name "AMB Design and Construction Limited", tagline "We Design. We Build. We Deliver.", mission, vision (exact text from Design Guide / Build Pack), phones 09030755246, 08134343537, 07041771807 (with tel: and international 234 forms), WhatsApp number 2349030755246 with a default prefilled message, email "[CONFIRM EMAIL]", address "[ADD ADDRESS]", working hours "[ADD HOURS]", social links (WhatsApp, TikTok, Instagram, Facebook, Pinterest as "[ADD URL]"), main nav and footer link groups, and stats (placeholders marked [ADD]). content/services.ts: the 7 services with slug, title, short description, long description, icon name, deliverables, who it is for, process steps and 3 FAQs each, using the starter copy in Build Pack Section 2.5. Add the types in src/types and helper functions (getServiceBySlug, etc.). Do not invent any facts.
```

### T05. Projects, testimonials, team, FAQ content

- [ ] Done

```
Create content/projects.ts with the 5 cleared projects from Design Guide Section 9.1. Each project needs: slug, title (placeholder, marked), category (Residential, Commercial, Interiors, 3D Render, Scale Model), location "[ADD LOCATION]", year "[ADD]", status, servicesProvided, overview (short, factual description of what the image shows; no invented client stories), cover image, gallery images with alt text, featured flag, and a cleared: true flag. Add a watermarked-images list with cleared: false that is excluded by every helper function. Create content/testimonials.ts (3 entries clearly marked as placeholders and hidden by default via a showTestimonials flag), content/team.ts (3 placeholders), and content/faqs.ts (general FAQs from Build Pack Section 2.5). Add helpers: getFeaturedProjects, getProjectBySlug, getProjectsByCategory, getRelatedProjects.
```

**Accept when:** only cleared projects are returned by every helper; placeholders are clearly marked.

### T06. Header and mobile navigation

- [ ] Done

```
Build the header per Design Guide Sections 6.1 and 10: 80px tall, logo in a white rounded badge on the left, nav links (Home, About, Services, Portfolio, Process, Contact), and a "Get a Free Quote" primary button. It is transparent over the hero on the home page and becomes solid white with a shadow after 40px of scroll; on other pages it starts solid. On screens under 1024px show a hamburger that opens a right-side drawer with large links, the three call buttons and a WhatsApp button, focus trapping, ESC to close, and scroll lock. Highlight the active page using React Router's NavLink. Add a skip-to-content link. Read all text from content/site.ts.
```

**Accept when:** works with touch and keyboard at 360px and 1280px; no layout shift on scroll.

### T07. Footer

- [ ] Done

```
Build the footer per Design Guide Section 7.1 item 11: dark ink-900 background, four columns (logo in white badge with a two-line about text; quick links; services list; contact details with all three phone numbers as tel: links, email, address and working hours), social icon row (WhatsApp, TikTok, Instagram, Facebook, Pinterest, hidden if the URL is still a placeholder), a thin divider, and a bottom row with copyright (current year, AMB Design and Construction Limited) and a Privacy Policy link. Stack to one column on mobile. All data from content/site.ts.
```

### T08. Floating WhatsApp button and mobile action bar

- [ ] Done

```
Add a floating WhatsApp button (56px circle, bottom right, tooltip "Chat with us") that opens wa.me/2349030755246 with a URL-encoded default message. On screens under 768px also add a fixed bottom action bar with Call and WhatsApp buttons (44px+ tall) and make sure the page content has bottom padding so nothing is hidden. The floating button must not overlap the action bar. Both appear on every page. Create a small helper lib/contact.ts that builds wa.me, tel: and mailto links so all components reuse it.
```

---

## Phase 2: Home Page

### T09. Video hero

- [ ] Done

```
Build the home hero per Design Guide Section 6. Full-screen (100svh, min 640px; 85svh on mobile) looping muted video using /videos/hero.webm and /videos/hero.mp4 with a poster image (the duplex render, public/images/hero-poster.webp). Dark gradient overlay. Left-aligned content: eyebrow "Architecture, Design and Construction", H1 "We Design. We Build. We Deliver.", sub-text from the guide, and two buttons ("Get a Free Quote" primary, "View Our Projects" outline-light). Behaviour: do not autoplay when prefers-reduced-motion is set, when navigator.connection.saveData is true, or when effectiveType is 2g/slow-2g; show only the poster in those cases. On screens under 480px prefer /videos/hero-mobile.mp4 if present. Add a 44px Pause/Play button bottom right with an accessible label, and a scroll-down indicator. The video must be aria-hidden with no audio. If the video files do not exist yet, the poster shows and nothing breaks. Put a trust strip (4 stats from content/site.ts) at the bottom of the hero on desktop; on mobile render it directly under the hero.
```

**Accept when:** the poster appears instantly; the video starts only after it can play; no black flash; text always readable.

### T10. Stats bar

- [ ] Done

```
Build a StatsBar component with 4 animated counters (count up once when scrolled into view, instant if reduced motion). Values and labels come from content/site.ts. Any value still marked [ADD] must render as a dash and be listed in a TODO comment, never a fake number. Use it under the hero on mobile and as the hero overlay strip on desktop (reuse from T09 if already built).
```

### T11. About preview

- [ ] Done

```
Build the About preview section: two columns on desktop. Left: a large cleared render image with a smaller overlapping second image (rounded 16px, soft shadow). Right: eyebrow "About AMB", H2, three short paragraphs using the company description from the Build Pack, a list of three tick-point highlights (design to handover under one roof; see it in 3D before it is built; quality, affordable and on time), and a "Learn more about us" link to /about. Single column on mobile with the image first.
```

### T12. Services section

- [ ] Done

```
Build the Services section on a surface-coloured band: eyebrow, H2 "What We Do", short intro, and 7 ServiceCards in a 3-column grid on desktop (2 on tablet, 1 on mobile). Each card: blue icon in a blue-50 circle (lucide-react), title, one-line description, and an arrow link to /services/[slug]. Hover lifts the card and shifts the arrow. Data from content/services.ts.
```

### T13. Featured projects (listing-style cards)

- [ ] Done

```
Build the Featured Projects section with a reusable ProjectCard (also used on the Portfolio page): 4:3 image, brick-500 category pill, title, location, a facts row (only show facts that exist), and a "View details" button. Image zooms on hover. Show the featured cleared projects in a 3-column grid (2 tablet, 1 mobile) with a "View all projects" button below. Use a reusable Img component (a plain img tag with explicit width and height from content/image-manifest.json, srcset for the 800px and 1600px WebP versions, a sizes attribute, loading="lazy" and decoding="async").
```

### T14. Why choose AMB

- [ ] Done

```
Build a dark (ink-900) Why Choose AMB section: left column with eyebrow, H2 and intro; right column with four benefit blocks (One team, start to finish; See before you build; Quality you can trust; Affordable and transparent) using the copy in Build Pack Section 2.3 and blue-500 icons. Use at most one red accent element in the section. Make sure all text passes contrast on dark.
```

### T15. How we work (process strip)

- [ ] Done

```
Build a ProcessTimeline component with the six steps from Build Pack Section 2.7 (Consultation, Design, Costing and Agreement, Construction, Quality Control, Handover). Horizontal with a connecting line on desktop, vertical on mobile, numbered circles in blue-700, icon, title and one short sentence each. Use the compact version on the home page and the full version (with extra detail) on /process, driven by one data file.
```

### T16. 3D visualization highlight

- [ ] Done

```
Build a split section highlighting the 3D visualization service: a large cleared render on one side (with a subtle frame), and on the other an eyebrow, H2 "See Your Building Before It Is Built", short text, three bullet points (exterior renders, interior renders, walkthrough views), and a "Request a 3D Design" button that opens WhatsApp with a prefilled message about 3D visualization. Add a small badge reading "3D Render" on the image.
```

### T17. Scale model showcase

- [ ] Done

```
Add a Scale Models showcase section using the cleared scale-model photos: a 3-image mosaic (one large, two stacked) with H2 "Build Models That Bring Designs to Life" [owner to confirm wording], a short factual line, and a link to /portfolio?category=Scale%20Models. Only claim what the images show; mark any claim about services as [CONFIRM] in a code comment.
```

### T18. Testimonials

- [ ] Done

```
Build a TestimonialCarousel: cards with quote, name, project type and location; swipe on mobile, arrows and dots on desktop, auto-advance every 7 seconds that pauses on hover, focus and when reduced motion is on. Render the whole section only when showTestimonials is true in content/testimonials.ts, so placeholder quotes never go live by accident.
```

### T19. CTA band and home page assembly

- [ ] Done

```
Build the CTABand (blue-700 background, white text, H2 "Ready to build your dream project?", two buttons: white "Request a Free Quote" and outline "Chat on WhatsApp"). Assemble the Home page in the order in Design Guide Section 7.1 (hero, stats, about, services, featured projects, why choose, process, 3D highlight, scale models, testimonials if enabled, CTA, footer). Alternate section backgrounds white, surface, white, dark, white. Add per-page metadata. Check the whole page at 360px, 768px and 1280px.
```

**Accept when:** the full home page matches the guide and scrolls smoothly on a phone.

---

## Phase 3: Services Pages

### T20. Services overview page

- [ ] Done

```
Build /services: a page banner (image banner with overlay, H1 "Our Services", breadcrumbs), an intro paragraph, the 7 service cards (reuse ServiceCard), a short "How we work" strip (reuse ProcessTimeline compact) and a CTABand. Add page metadata.
```

### T21. Service detail template

- [ ] Done

```
Build the /services/:slug route for all 7 services (read the slug with useParams). Layout: banner with title and one-line promise; two-column body (left: what we do and deliverables as ticked list, who it is for; right: sticky quote card with call and WhatsApp buttons); a 3 to 5 step process for the service; related projects (3 ProjectCards chosen by servicesProvided or category); FAQ accordion; CTABand. Return a proper 404 for unknown slugs. Add breadcrumbs and per-service metadata.
```

### T22. FAQ accordion component

- [ ] Done

```
Build an accessible FAQAccordion (buttons with aria-expanded and aria-controls, one open at a time, smooth height animation that respects reduced motion). Add FAQPage JSON-LD output on pages that use it. Use it on the service pages and later on the Contact page.
```

---

## Phase 4: Portfolio

### T23. Portfolio listing with filters

- [ ] Done

```
Build /portfolio: image banner header "Our Work", filter chips (All, Residential, Commercial, 3D Renders, Scale Models, Interiors) built from the categories that actually have projects, and a responsive grid of ProjectCards (3 columns desktop, 2 tablet, 1 mobile). Filtering is client-side with animated reflow and is synced to the URL query (?category=Scale%20Models) so links are shareable using React Router's useSearchParams. Show an empty-state message if a category has no projects. Only cleared projects appear.
```

### T24. Project detail page

- [ ] Done

```
Build the /portfolio/:slug route (read the slug with useParams). Layout: large hero image, title, category pill, fact panel (category, location, year, services provided, status; hide any fact still marked [ADD] or show it as "To be added" in development only), overview text, gallery grid, optional challenge and solution blocks, previous and next project links, related projects, and a CTA ("Want something similar? Let's talk") with a WhatsApp link that mentions the project title. Add per-project metadata with the cover image as the Open Graph image.
```

### T25. Gallery lightbox

- [ ] Done

```
Build an accessible Lightbox component for project galleries: click or Enter opens a full-screen viewer with dark backdrop, previous/next arrows, swipe on touch, keyboard arrows, ESC to close, focus trap, caption and counter (3 of 8), and preloading of the adjacent image. Return focus to the thumbnail on close. Use it on the project detail page and for the scale-model mosaic on the home page.
```

### T26. Before and after / render comparison (optional)

- [ ] Done

```
Build a BeforeAfterSlider component (draggable divider, keyboard operable with arrow keys, touch support, labels Before/After or Render/Built). Add it to the project template so it renders only when a project has a beforeAfter field. No project needs it yet; add a documented example in the README.
```

---

## Phase 5: About, Process, Contact and Legal

### T27. About page

- [ ] Done

```
Build /about: banner header; "Our story" (use [ADD STORY] placeholder text clearly marked, do not invent a history); Mission and Vision in two highlighted cards using the exact statements; four values (Quality, Affordability, Creativity, Professionalism) with icons; team grid from content/team.ts (hide the section if all entries are placeholders); an optional "Our brand in the field" strip using the helmet, cap and vest mock-ups (with a flag to turn it off); credentials block that shows CAC number and memberships only when provided; and a CTABand.
```

### T28. Process page

- [ ] Done

```
Build /process: banner, intro, the full six-step ProcessTimeline with expanded detail per step (what you do, what we do, what you receive), a short "What to prepare before your first meeting" checklist (plot documents, budget range, ideas and reference photos, location), a FAQ accordion and a CTABand.
```

### T29. Contact page (no backend)

- [ ] Done

```
Build /contact per Design Guide Section 8.3. Left: contact details (three click-to-call phone numbers, WhatsApp button, email link, address, hours, social icons). Right: a quote request form (name, phone, service dropdown from content/services.ts, location, budget range optional, project details, preferred contact). Validate in the browser with clear inline errors. On submit, build a clean multi-line message and open wa.me/2349030755246?text=<encoded message> in a new tab; show a confirmation panel explaining that WhatsApp has opened with the message ready to send, and offer a copy-message button for people without WhatsApp. No data is sent or stored anywhere. Add a Google Map embed or a Get directions link that only renders when an address or map URL is provided. Add the FAQ accordion below.
```

**Accept when:** the message arrives in WhatsApp correctly formatted, including special characters and line breaks.

### T30. Privacy policy

- [ ] Done

```
Build /privacy-policy in plain language: what the site collects (nothing is stored by the site; WhatsApp, phone and email use the visitor's own apps; analytics if enabled), cookies, third-party services (WhatsApp, Google Maps, analytics), the visitor's rights under the Nigeria Data Protection Act, and how to contact AMB. Add a "Last updated" date and a note that the policy should be reviewed by a legal professional before launch.
```

### T31. Custom 404 page

- [ ] Done

```
Build a branded 404 page (a catch-all * route): friendly message, the logo, buttons to Home, Portfolio and Contact, and three featured project cards. Make sure unknown URLs on the deployed host show this page (see the SPA hosting fallback in T40).
```

---

## Phase 6: Cross-Site Features

### T32. SEO

- [ ] Done

```
Implement SEO for this React single-page app. Use react-helmet-async to set a unique title and meta description per page (use the table in Build Pack Section 8.1 with a [CITY] placeholder), canonical URLs from a VITE_SITE_URL constant, and Open Graph and Twitter tags with the og-image. Add JSON-LD for LocalBusiness/GeneralContractor (name, telephones, url, logo, sameAs; only fields that are not placeholders), BreadcrumbList on inner pages and FAQPage where the FAQ accordion is used. One H1 per page. Create public/robots.txt and a script scripts/generate-sitemap.mjs that builds public/sitemap.xml from the content files (all pages, services and cleared projects) and runs before every build. A plain React app ships one empty HTML page, so add pre-rendering: set up vite-react-ssg (or another pre-render tool that works with React Router and Vite; tell me which and why) so every route is output as its own HTML file with real content and meta tags at build time. This is needed for Google and for WhatsApp and Facebook link previews. Add a build-time check that fails if any page lacks a title or description.
```

### T33. Analytics and click tracking (optional)

- [ ] Done

```
Add an optional Google Analytics 4 integration that loads only when VITE_GA_ID is set, after consent-free page load deferral (load the gtag script only after the page has loaded). Add a tiny track() helper and fire events for whatsapp_click, phone_click, quote_form_submit (when WhatsApp opens), cta_click, project_view and filter_use. Add a simple cookie/notice banner only if analytics is enabled. The site must work fully with no ID set.
```

### T34. Motion and scroll reveals

- [ ] Done

```
Add a lightweight Reveal component (fade and slide-up about 300ms, stagger 60ms) used by sections and cards. Disable all animation under prefers-reduced-motion. Add page-load fade for the hero text. Avoid layout shift and never animate above-the-fold content in a way that delays the LCP.
```

### T35. Performance pass

- [ ] Done

```
Run a performance audit on the home, portfolio and contact pages (mobile, throttled). Fix: oversized images, missing width/height, unused JS (use route-based code splitting with React.lazy), font loading, hero poster priority, video not blocking first paint, layout shift. Targets: Lighthouse mobile Performance 85+, LCP under 2.5s on the poster, CLS under 0.1, total initial weight (excluding video) under 1.5 MB. Report before and after numbers.
```

### T36. Accessibility pass

- [ ] Done

```
Audit every page for accessibility: heading order, landmarks, alt text, focus visibility, keyboard operation of header drawer, accordion, carousel, lightbox, filters and the video Pause button, colour contrast, form labels and error announcements (aria-live), tap target sizes (44px), and reduced-motion behaviour. Fix all problems and report a pass/fail list. Target Lighthouse Accessibility 95+.
```

---

## Phase 7: QA, Content Swap and Launch

### T37. Placeholder audit

- [ ] Done

```
Search the whole codebase and content for [ADD, [CONFIRM and placeholder markers. Produce docs/OUTSTANDING.md grouping every item by page with the exact file and line, and what the owner must supply. Make the build print a warning (not an error) listing the count. Add a PRODUCTION flag so that when it is on, any remaining placeholder blocks the build.
```

### T38. Content swap tasks (run when the owner supplies the items)

- [ ] Hero video added
- [ ] Transparent logo added
- [ ] Confirmed email added
- [ ] Watermarked images cleared and added
- [ ] Real project details added
- [ ] Team and testimonials added

**Add the hero video**

```
I have placed hero.mp4, hero.webm and (optionally) hero-mobile.mp4 in public/videos. Verify sizes (desktop MP4 under 5 MB, mobile under 2 MB), generate a poster frame from the first good frame into public/images/hero-poster.webp, confirm autoplay and the fallbacks work, and report anything that needs re-compression using the ffmpeg commands in Design Guide Section 6.4.
```

**Replace the logo with a transparent version**

```
I added public/images/brand/logo.svg (or logo-transparent.png) and optionally logo-white.svg. Replace the white-badge workaround: use the normal logo on light backgrounds and the white version on dark backgrounds. Update the favicon and og-image, and check every page.
```

**Update contact details**

```
Update content/site.ts with: email [EMAIL], address [ADDRESS], hours [HOURS], social links [URLS], and map link [URL]. Remove the placeholder handling for these fields, re-run the sitemap and JSON-LD, and re-test all contact links.
```

**Add cleared project images**

```
I have confirmed that the images in public/images/needs-clearance/[FILES] are cleared for use [with watermark removed / with permission from NAME]. Move them to public/images/projects with clean names, run the image optimisation script, add them to content/projects.ts as these projects: [PROJECT DETAILS: title, category, location, year, size, services, description], mark cleared: true, and add credit text where required.
```

**Add a new project later**

```
Add a new project to content/projects.ts using these details: [DETAILS]. The images are in [FOLDER]. Optimise and rename them, write descriptive alt text, set the featured flag to [true/false], and verify the project page, the portfolio filter and the sitemap.
```

**Add real testimonials and team**

```
Replace the placeholder testimonials and team members with these real entries: [DATA]. Set showTestimonials to true and show the team section. Optimise any photos.
```

### T39. Full QA run

- [ ] Done

```
Run the QA checklist in Build Pack Section 10 adapted for this frontend-only site. For every item state pass or fail with evidence, then fix all failures. Check: all links and buttons, tel: and WhatsApp links, quote form message output, filters and URL query, lightbox, accordion, carousel, drawer menu, video behaviours (reduced motion, data saver, pause), 404 page, refreshing a deep link such as /portfolio/[slug] on the live host (SPA fallback), sitemap and robots, JSON-LD, Open Graph preview, responsive layouts at 360, 390, 768, 1024 and 1440 widths, no horizontal scroll, and that nothing from public/images/needs-clearance is referenced or in the build output.
```

### T40. README and deployment

- [ ] Done

```
Write a complete README.md for a non-developer owner: how to run the site locally, how to edit text in src/content, how to add a project, how to replace the hero video, how to run the image optimiser, how to build (npm run build creates the dist/ folder), and step-by-step deployment to [Vercel / Netlify / Cloudflare Pages / cPanel] with a custom domain and HTTPS. Include the single-page-app fallback so that refreshing or opening a deep link such as /portfolio/some-project does not give a 404: add public/_redirects with the line /* /index.html 200 for Netlify and Cloudflare Pages, a vercel.json with rewrites for Vercel, and an .htaccess with rewrite rules for cPanel or Apache. If pre-rendering from T32 is used, explain how it changes this. Add a pre-launch checklist and a monthly maintenance list, and explain how to upload the dist/ folder.
```

---

## Fix Prompts (use when something looks wrong)

| Problem | Prompt |
| --- | --- |
| Colours drift from the brand | "Audit the whole site for any colour not in the Design Guide Section 3 tokens and replace it with the correct token. Report what changed." |
| Layout looks off on phones | "Test every page at 360px and 390px. List every overflow, cramped spacing, tiny tap target or unreadable text, then fix them." |
| Hero text hard to read | "Increase the hero overlay so white text has at least 4.5:1 contrast on the brightest frame of the poster, without making the video look muddy." |
| Site feels heavy | "Find the 10 heaviest assets and scripts on the home page, explain each, and reduce them without lowering visible quality." |
| Looks generic, not like the reference | "Compare the home page against my reference screenshots in docs/reference/ and list differences in spacing, typography, card style and section rhythm. Fix the top five differences. Do not copy any text or imagery from the reference site." |
| Agent invented content | "Find every sentence, number, name or claim that is not in the Design Guide, Build Pack or content files, and replace it with an \[ADD ...\] placeholder." |
| Agent changed too much | "Revert any change outside the task I gave you, list the files you reverted, and redo only the requested change." |
| Component feels inconsistent | "Make the \[component\] match the Design Guide Section 10 spec exactly: sizes, radius, colours, hover and focus states." |

---

## Final Launch Checklist

- [ ] All 40 tasks ticked
- [ ] No \[ADD\] or \[CONFIRM\] placeholders left (docs/OUTSTANDING.md is empty)
- [ ] Hero video live and tested on a real phone on mobile data
- [ ] Only cleared images in the build
- [ ] Contact links and WhatsApp message tested on Android and iPhone
- [ ] Lighthouse mobile: Performance 85+, Accessibility 95+, Best Practices 95+, SEO 95+
- [ ] Domain connected, HTTPS working, www and non-www redirect set
- [ ] Google Search Console verified and sitemap submitted
- [ ] Google Business Profile and social bios updated with the website address
