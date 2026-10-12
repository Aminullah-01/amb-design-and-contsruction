# AMB Design and Construction Limited

**Portfolio Website – Complete Build Pack for an AI Coding Agent**

## How to Use This Pack

This document contains everything an AI coding agent (Claude Code, Cursor, Copilot, Codex, etc.) needs to design and build the AMB Design and Construction Limited portfolio website. Give the agent the sections in this order:

| Step | Section | What you do with it |
| --- | --- | --- |
| 1 | Section 1: Project Brief and PRD | Paste first so the agent understands the goal |
| 2 | Section 2: Sitemap and Page Content | Gives structure and ready-to-use copy |
| 3 | Section 3: Design System | Gives look and feel rules |
| 4 | Section 4: Technical Specification | Fixes the tech stack, folders and data model |
| 5 | Section 5: Component Specifications | Defines each reusable UI block |
| 6 | Section 6: AGENTS.md | Save as a file in the project root so the agent always follows your rules |
| 7 | Section 7: Build Plan and Prompts | Copy one prompt at a time, review, then continue |
| 8 | Sections 8 to 10: SEO, Assets Checklist, QA | Use during and after the build |

**Tips for best results**

- Build in phases. Do not ask the agent to build everything in one prompt.
- Review each phase in the browser before moving to the next.
- Anything in \[SQUARE BRACKETS\] is a placeholder you must replace with real information.
- Use real photos of your work. The site is only as strong as its portfolio images.

---

## Section 1: Project Brief and PRD

### 1.1 Business summary

| Item | Detail |
| --- | --- |
| Company | AMB Design and Construction Limited |
| Industry | Architecture, building design and construction |
| Location | Nigeria \[CITY / STATE, ADD OFFICE ADDRESS\] |
| Phones | 09030755246, 08134343537, 07041771807 |
| Email | \[ADD BUSINESS EMAIL\] |
| Tagline | We Design. We Build. We Deliver. |
| Mission | To provide quality, affordable and innovative architectural design and construction services while meeting clients' needs and delivering durable projects. |
| Vision | To become a trusted and recognized design and construction company in Nigeria, known for creativity, quality workmanship and professionalism. |

**Services:** Architectural Design, 3D Architectural Visualization, Building Construction, Renovation and Remodeling, Project Supervision, Interior and Exterior Design, Building Consultation.

### 1.2 Website purpose

The website is a **portfolio and lead-generation site**. Its job is to prove that AMB designs and builds well, build trust quickly, and make it very easy for a visitor to request a quote or start a WhatsApp chat.

### 1.3 Goals and success metrics

| Goal | Metric |
| --- | --- |
| Generate enquiries | At least 15 to 30 qualified enquiries per month within 6 months |
| Build credibility | Portfolio with at least 8 to 12 projects at launch; testimonials displayed |
| Be found online | Page 1 Google ranking for "architect / builder in \[city\]" style searches within 6 to 12 months |
| Fast on mobile | Lighthouse performance 90+ on mobile; page load under 3 seconds on 4G |
| Easy contact | WhatsApp and call buttons reachable from every page in one tap |

### 1.4 Target audience

| Audience | What they want from the site |
| --- | --- |
| First-time home builders | Reassurance, examples of finished homes, clear process, price guidance |
| Property developers and landlords | Quality designs, speed, 3D renders, repeat-project capability |
| Business owners | Commercial building examples, professionalism |
| Diaspora Nigerians | Trust, proof of real projects, remote communication, supervision service |
| Existing property owners | Before-and-after renovation examples |

**Key insight:** Most visitors will arrive on a **mobile phone**, often on a slower connection, and many will prefer **WhatsApp or a phone call** over a form. Design for this first.

### 1.5 Functional requirements (must have)

1. Responsive multi-page website (mobile-first).
2. Home page with hero, services overview, featured projects, process, testimonials and call to action.
3. Services pages (one overview page plus a section or page per service).
4. Portfolio gallery with category filters (Residential, Commercial, Renovation, Interior, 3D Visualization).
5. Individual project detail pages with image gallery, project facts and a before/after or render comparison where available.
6. About page: story, mission, vision, values, team.
7. Process page: how a project works from enquiry to handover.
8. Contact page with enquiry form, phone numbers, email, map, office hours.
9. Floating WhatsApp button and click-to-call on mobile.
10. Contact form that sends an email to the company and shows a clear success message.
11. SEO basics: meta tags, Open Graph, sitemap.xml, robots.txt, structured data.
12. Analytics and basic event tracking (form submits, WhatsApp clicks, phone clicks).

### 1.6 Nice to have (phase 2)

- Blog or "Building Tips" section for SEO.
- Free building-cost estimator or quote request wizard.
- Video walkthroughs of completed projects.
- Simple admin or CMS so the team can add projects without code.
- Client testimonial video section.

### 1.7 Out of scope for version 1

User accounts, online payments, e-commerce, client portals, multi-language support.

### 1.8 Non-functional requirements

- **Performance:** Lighthouse mobile 90+, images optimized (WebP/AVIF), lazy loading, no heavy video autoplay.
- **Accessibility:** WCAG 2.1 AA (contrast, keyboard navigation, alt text, focus states).
- **Browsers:** Latest Chrome, Safari, Firefox, Edge, plus Android Chrome and iOS Safari.
- **Security:** HTTPS, form spam protection, no secrets in the client code.
- **Maintainability:** Content stored in structured files or a CMS, not hard-coded inside components.

---

## Section 2: Sitemap and Page Content

### 2.1 Sitemap

```
/                      Home
/about                 About Us
/services              Services overview
/services/[slug]       Individual service pages (7)
/portfolio             Portfolio gallery with filters
/portfolio/[slug]      Project detail page
/process               How We Work
/testimonials          Client reviews (can be merged into Home and About)
/contact               Contact and request a quote
/privacy-policy        Privacy policy
/404                   Custom not-found page
```

**Main navigation:** Home | About | Services | Portfolio | Process | Contact (with a highlighted button: "Get a Free Quote").

**Footer:** logo, tagline, quick links, services list, phone numbers, email, address, social icons, copyright, privacy link.

### 2.2 Global elements (every page)

- Sticky header with logo, nav and "Get a Free Quote" button.
- Floating WhatsApp button (bottom right) linking to https://wa.me/2349030755246 with a pre-filled message such as "Hello AMB Design and Construction, I would like to enquire about...".
- Mobile bottom bar with Call and WhatsApp buttons.
- Footer with contact details.

*Note: Nigerian numbers in international format drop the leading zero and add 234. For example, 09030755246 becomes 2349030755246.*

### 2.3 Home page

**Section 1: Hero**

- Headline: **We Design. We Build. We Deliver.**
- Subheadline: Quality, affordable and innovative architectural design and construction for homes and businesses across Nigeria.
- Buttons: \[Get a Free Quote\] \[View Our Projects\]
- Background: best full-width photo of a completed project (or a high-quality 3D render).
- Trust strip below: "\[X\]+ Projects Completed | \[X\] Years of Experience | Design to Handover Under One Roof" (replace with real numbers).

**Section 2: Who we are (short)**

AMB Design and Construction Limited is a Nigerian architecture and construction company that takes your project from the first sketch to the final handover. We combine creative design, honest pricing and solid workmanship so you deal with one accountable team from start to finish.

**Section 3: Services overview** (cards with icon, title, one line, link)

| Service | Card text |
| --- | --- |
| Architectural Design | Building plans, floor plans, elevations and detailed drawings. |
| 3D Visualization | See your building in realistic 3D before construction begins. |
| Building Construction | Residential and commercial buildings built to last. |
| Renovation and Remodeling | Modernize and improve your existing building. |
| Project Supervision | Independent monitoring for quality and proper execution. |
| Interior and Exterior Design | Functional, attractive spaces for homes and businesses. |
| Building Consultation | Professional guidance from design through construction. |

**Section 4: Featured projects** (3 to 6 best projects, large images, category tag, location, link to detail)

**Section 5: Why choose AMB**

- **One team, start to finish:** design, build and supervision under one roof.
- **See before you build:** realistic 3D renders so there are no surprises.
- **Quality you can trust:** proper materials, skilled workers, regular inspections.
- **Affordable and transparent:** clear quotes and milestone-based payments.
- **On-time delivery:** structured schedules and regular progress updates.

**Section 6: How we work** (4 to 6 step visual: Consultation, Design, Costing and Agreement, Construction, Quality Checks, Handover)

**Section 7: Testimonials** (carousel of 3 to 5, with name, project type, location)

**Section 8: Call to action band**

"Ready to build your dream project? Talk to us today." Buttons: \[Request a Free Quote\] \[Chat on WhatsApp\]

### 2.4 About page

- Page header: "About AMB Design and Construction".
- **Our story:** \[WRITE 2 to 3 short paragraphs: how the company started, why, what drives it.\]
- **Mission** and **Vision** (use the exact statements in Section 1.1) shown in two highlighted cards.
- **Our values:** Quality, Affordability, Creativity, Professionalism (icon plus one line each).
- **Team:** photo, name, role and a short bio for each key person \[ADD REAL TEAM\].
- **Certifications and registrations:** CAC number, professional body memberships \[ADD IF AVAILABLE\].
- CTA band.

### 2.5 Services overview and detail pages

Each service detail page uses this template:

1. Hero with service title and a one-line promise.
2. "What we do" (short description plus bullet list of deliverables).
3. "Who it is for".
4. "Our process for this service" (3 to 5 steps).
5. Related projects (3 cards from the portfolio).
6. FAQ (3 to 5 questions).
7. CTA band.

**Starter copy for each service**

**Architectural Design.** We prepare building plans, floor plans, elevations, sections and detailed drawings for homes, offices, shops and mixed-use buildings. Our designs suit Nigerian climate, plot sizes and budgets, and are prepared to support your approval process and guide the builder clearly. *Deliverables:* concept sketches, floor plans, elevations, sections, working drawings, approval drawings.

**3D Architectural Visualization.** See exactly how your building will look before construction. Our realistic 3D models and renders help you make confident decisions, avoid costly changes and present your project to partners or investors. *Deliverables:* exterior renders, interior renders, 3D walkthrough views, day and night views.

**Building Construction.** We construct residential and commercial buildings with proper materials, skilled workers and careful supervision, from foundation to finishing. *Deliverables:* new homes, duplexes, apartment blocks, shops, offices and small commercial buildings.

**Renovation and Remodeling.** We improve and modernize existing buildings: layout changes, extensions, new finishes, roofing, facade upgrades and repairs, with minimal disruption. *Deliverables:* inspection, redesign, quotation, execution, handover.

**Project Supervision.** Building with another contractor, or from abroad? We monitor construction on your behalf to ensure the work is done properly and to the approved design. *Deliverables:* scheduled site visits, quality checks, material verification, photo and video progress reports.

**Interior and Exterior Design.** We create functional and attractive spaces for living and business: space planning, finishes, lighting, ceilings, landscaping, fencing and facade treatment.

**Building Consultation.** Get professional guidance before you spend. We advise on feasibility, budgeting, materials, approvals and contractor selection, from design through construction.

**Sample FAQ answers (adapt to real practice)**

- *How long does a design take?* It depends on the size and complexity. We give you a timeline during the first consultation.
- *Can you build from my existing drawings?* Yes. We will review them and advise before quoting.
- *Can you supervise remotely for me abroad?* Yes. We send regular photo and video reports and hold video calls.
- *How are payments structured?* Payments are tied to agreed project milestones, as set out in the contract.

### 2.6 Portfolio page and project detail page

**Portfolio page**

- Header: "Our Work".
- Filter chips: All | Residential | Commercial | Renovation | Interior | 3D Visualization.
- Responsive masonry or grid (1 column on mobile, 2 on tablet, 3 on desktop).
- Each card: cover image, title, category, location, hover effect, link.

**Project detail page layout**

1. Hero image and project title.
2. Fact panel: Category, Location, Year, Size, Services provided, Duration, Status.
3. Project overview (the brief, the challenge, our solution).
4. Image gallery with lightbox.
5. Optional: before and after slider, or 3D render versus completed building comparison.
6. Client testimonial (if available).
7. Next and previous project links.
8. CTA: "Want something similar? Let's talk."

### 2.7 Process page

Six steps, each with icon, title, short description and typical outputs:

1. **Consultation:** we listen to your needs, budget and plot details.
2. **Design:** concept, revisions, drawings and 3D visuals.
3. **Costing and Agreement:** itemized cost estimate, schedule, written contract.
4. **Construction:** procurement, site team, regular progress updates.
5. **Quality Control:** inspections at every stage, checked against the drawings.
6. **Handover:** final inspection, snag fixing and project documentation.

### 2.8 Contact page

- Header: "Let's Build Something Great Together".
- **Enquiry form fields:** Full name (required), Phone/WhatsApp number (required), Email, Service needed (dropdown of the 7 services), Project location, Estimated budget range (optional dropdown), Project details (textarea), Preferred contact method (Call, WhatsApp, Email).
- Hidden spam trap field and rate limiting.
- Contact details block: three phone numbers (click-to-call), WhatsApp button, email, address, working hours \[ADD\].
- Embedded Google Map \[ADD OFFICE LOCATION\].
- Success message: "Thank you. We have received your request and will contact you within 24 hours."

### 2.9 Privacy policy

Short, plain-language policy covering what personal data the form collects, why, how long it is kept, and how users can request deletion. Reference the Nigeria Data Protection Act. Have it reviewed before launch.

---

## Section 3: Design System

### 3.1 Brand personality

Professional, creative, trustworthy, modern, clean. The site should feel like an architecture studio that also builds: confident layouts, large imagery, generous white space, precise typography.

### 3.2 Colour palette

| Role | Name | Hex | Use |
| --- | --- | --- | --- |
| Primary | Deep Navy | #0F2A43 | Header, footer, headings, primary buttons |
| Accent | Burnt Orange | #E07B39 | CTAs, highlights, hover states, icons |
| Dark | Charcoal | #1C1F23 | Body text, dark sections |
| Light | Warm Off-White | #F7F5F2 | Page backgrounds, alternating sections |
| Neutral | Stone Grey | #6B7280 | Secondary text, borders |
| Success | Green | #1F9D55 | Form success |
| Error | Red | #D64545 | Form errors |

*If AMB already has a logo with brand colours, replace the primary and accent above with the logo colours and keep the same roles.* Ensure all text meets a 4.5:1 contrast ratio.

### 3.3 Typography

- **Headings:** "Poppins" or "Montserrat" (600 to 700 weight), clean and modern.
- **Body:** "Inter" or "Open Sans" (400 to 500 weight).
- Load through next/font (self-hosted) to avoid layout shift.

| Element | Mobile | Desktop |
| --- | --- | --- |
| H1 | 36px | 60px |
| H2 | 28px | 40px |
| H3 | 22px | 28px |
| Body | 16px | 18px |
| Small | 14px | 14px |

Line height 1.6 for body, 1.2 for headings.

### 3.4 Layout and spacing

- Max content width 1200px, centered, with 16px side padding on mobile and 24px on larger screens.
- Spacing scale based on 4px (4, 8, 12, 16, 24, 32, 48, 64, 96).
- Section vertical padding: 64px on mobile, 96px on desktop.
- Breakpoints: sm 640, md 768, lg 1024, xl 1280.
- Border radius: 8px for cards and buttons (keep a sharp, architectural feel; do not over-round).

### 3.5 Components styling

- **Primary button:** orange background, white text, bold, 8px radius, subtle lift on hover.
- **Secondary button:** navy outline, fills navy on hover.
- **Cards:** white background, thin border or soft shadow, image on top, hover zoom of image (scale 1.04).
- **Icons:** one consistent line-icon set (Lucide).
- **Forms:** large touch targets (minimum 44px height), visible labels, inline error messages.

### 3.6 Imagery guidelines

- Use real photos of AMB projects wherever possible. Avoid generic stock photos of foreign buildings.
- Consistent aspect ratios: hero 16:9, project cards 4:3, team photos 1:1.
- Show completed work in good daylight. Pair renders with finished photos where both exist.
- Compress to WebP; maximum 200 KB for cards, 400 KB for heroes.
- Always write descriptive alt text, for example "Three-bedroom duplex with balcony in \[Location\]".

### 3.7 Motion

Subtle only: fade and slide-up on scroll (200 to 400 ms), image hover zoom, smooth menu transitions. Respect prefers-reduced-motion. No heavy animations that hurt mobile performance.

---

## Section 4: Technical Specification

### 4.1 Recommended stack

| Layer | Choice | Reason |
| --- | --- | --- |
| Framework | Next.js (App Router) with TypeScript | Fast, SEO-friendly, image optimization, easy deployment |
| Styling | Tailwind CSS | Quick, consistent, small output |
| UI primitives | shadcn/ui (optional) | Accessible components |
| Icons | lucide-react | Consistent line icons |
| Animation | Framer Motion (light use) or CSS only | Scroll reveals |
| Content | Typed JSON or MDX files in /content (v1); optional headless CMS later | Easy updates without a database |
| Forms | React Hook Form plus Zod validation | Reliable validation |
| Email | Resend or Nodemailer via a server route | Delivers enquiries to the company inbox |
| Spam control | Honeypot field plus rate limiting (Cloudflare Turnstile optional) | Prevents junk submissions |
| Analytics | Google Analytics 4 or Plausible | Traffic and conversion tracking |
| Hosting | Vercel (or Netlify) with custom domain | Simple, fast, free tier available |

If the agent or the owner prefers a simpler option, plain HTML, CSS and JavaScript also works, but the structure and content below still apply.

### 4.2 Folder structure

```
amb-website/
├─ AGENTS.md
├─ README.md
├─ .env.example
├─ next.config.mjs
├─ tailwind.config.ts
├─ public/
│  ├─ images/ (logo, hero, projects, team)
│  ├─ favicon.ico
│  └─ og-image.jpg
├─ content/
│  ├─ site.ts          (company details, nav, social links)
│  ├─ services.ts      (7 services)
│  ├─ projects.ts      (portfolio data)
│  ├─ testimonials.ts
│  ├─ team.ts
│  └─ faqs.ts
└─ src/
   ├─ app/
   │  ├─ layout.tsx
   │  ├─ page.tsx
   │  ├─ about/page.tsx
   │  ├─ services/page.tsx
   │  ├─ services/[slug]/page.tsx
   │  ├─ portfolio/page.tsx
   │  ├─ portfolio/[slug]/page.tsx
   │  ├─ process/page.tsx
   │  ├─ contact/page.tsx
   │  ├─ privacy-policy/page.tsx
   │  ├─ api/contact/route.ts
   │  ├─ sitemap.ts
   │  ├─ robots.ts
   │  └─ not-found.tsx
   ├─ components/ (ui, layout, sections, portfolio, forms)
   ├─ lib/ (utils, validators, seo helpers)
   └─ types/
```

### 4.3 Data models

```ts
type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  deliverables: string[];
  whoItsFor: string;
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

type Project = {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Renovation" | "Interior" | "3D Visualization";
  location: string;
  year: number;
  size?: string;
  status: "Completed" | "Ongoing" | "Concept";
  servicesProvided: string[];
  overview: string;
  challenge?: string;
  solution?: string;
  coverImage: { src: string; alt: string };
  gallery: { src: string; alt: string; caption?: string }[];
  beforeAfter?: { before: string; after: string };
  featured: boolean;
  testimonialId?: string;
};

type Testimonial = {
  id: string;
  name: string;
  projectType: string;
  location: string;
  quote: string;
  photo?: string;
};

type ContactSubmission = {
  fullName: string;
  phone: string;
  email?: string;
  service: string;
  location?: string;
  budget?: string;
  message?: string;
  preferredContact: "Call" | "WhatsApp" | "Email";
  honeypot?: string;
};
```

### 4.4 Environment variables (.env.example)

```
NEXT_PUBLIC_SITE_URL=https://www.[yourdomain].com
NEXT_PUBLIC_WHATSAPP_NUMBER=2349030755246
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=
CONTACT_TO_EMAIL=[company inbox]
CONTACT_FROM_EMAIL=[verified sender]
```

### 4.5 Contact API behaviour

1. Validate input on client and server with the same Zod schema.
2. Reject if the honeypot field is filled.
3. Rate limit: maximum 5 submissions per IP per hour.
4. Send a formatted email to the company inbox (include all fields and timestamp).
5. Optionally send an auto-reply to the visitor if an email was given.
6. Return a clear JSON success or error response; show friendly messages in the UI.
7. Never expose API keys to the browser.

---

## Section 5: Component Specifications

| Component | Description and behaviour |
| --- | --- |
| Header | Sticky; logo left; nav center or right; "Get a Free Quote" button; collapses to a hamburger menu under 1024px with a full-screen slide-in menu; gains a shadow after scrolling. |
| Footer | Four columns (about and tagline, quick links, services, contact); social icons; copyright with current year. |
| FloatingWhatsApp | Fixed bottom-right circle, links to wa.me with a pre-filled message; hides when the mobile bottom bar is visible, or sits above it. |
| MobileActionBar | Fixed bottom bar on mobile with Call and WhatsApp buttons (44px+ height). |
| Hero | Full-width image with dark overlay, headline, subheadline, two buttons, optional trust strip. |
| SectionHeading | Small orange eyebrow text, H2 and optional paragraph; centered or left-aligned. |
| ServiceCard | Icon, title, short text, "Learn more" link; hover raises card. |
| ProjectCard | Cover image (4:3), category badge, title, location; hover zoom and "View project" overlay. |
| PortfolioGrid with Filters | Client-side category filter with animated reflow; URL query param (for example ?category=Residential) so filters are shareable. |
| ImageGallery and Lightbox | Thumbnail grid; click opens full-screen viewer with arrows, swipe on mobile, keyboard support and ESC to close. |
| BeforeAfterSlider | Draggable divider comparing two images; accessible with keyboard. |
| ProcessTimeline | Vertical on mobile, horizontal on desktop; numbered steps with icons. |
| TestimonialCarousel | Auto-advances slowly, pausable, swipe on mobile, with quote, name, project type. |
| StatsStrip | Animated counters for projects, years, clients (use only real numbers). |
| FAQAccordion | Accessible accordion (one open at a time); includes FAQ structured data. |
| ContactForm | Fields from Section 2.8; inline validation; loading state; success and error states; analytics event on submit. |
| CTABand | Full-width navy band with headline and two buttons. |
| Breadcrumbs | Shown on inner pages with structured data. |
| SEO component | Sets title, description, canonical URL, Open Graph and Twitter tags per page. |

---

## Section 6: AGENTS.md (save in the project root)

*Copy everything inside the box below into a file named AGENTS.md (for Claude Code you can also name it CLAUDE.md).*

```markdown
# AGENTS.md – AMB Design and Construction Website

## Project
Portfolio and lead-generation website for AMB Design and Construction Limited, a Nigerian architecture, design and construction company. Tagline: "We Design. We Build. We Deliver."

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS. Content lives in /content as typed files. Deploy target: Vercel.

## Rules
1. Mobile-first. Test every page at 360px, 768px and 1280px widths.
2. Never hard-code company text inside components. Read from /content.
3. Use only the design tokens defined in tailwind.config.ts (navy #0F2A43, orange #E07B39, charcoal #1C1F23, off-white #F7F5F2).
4. Use next/image for all images with width, height and descriptive alt text. Use WebP or AVIF. Lazy-load below-the-fold images.
5. Every page must have unique title, meta description, canonical URL and Open Graph tags.
6. Accessibility: semantic HTML, visible focus states, 4.5:1 contrast, labels on all form fields, alt text everywhere, keyboard-operable menus and lightbox.
7. Keep JavaScript light. Prefer server components; use client components only when needed (menu, filters, lightbox, carousel, forms).
8. Phone numbers must be click-to-call (tel:) links. WhatsApp links use https://wa.me/2349030755246 with a URL-encoded message.
9. Do not invent facts, project names, testimonials, numbers or certifications. Use clearly marked placeholders such as [ADD REAL VALUE] when information is missing.
10. Secrets only in environment variables. Never commit .env files.
11. Run lint, type-check and build before saying a task is finished. Fix all errors and warnings.
12. Work in small steps. After each task summarize what changed and which files were touched.

## Commands
npm run dev | npm run build | npm run lint | npx tsc --noEmit

## Definition of done
Builds with no errors; responsive; accessible; Lighthouse mobile 90+ for performance, accessibility, best practices and SEO; content matches the Build Pack.
```

---

## Section 7: Build Plan and Agent Prompts

Give the agent **one phase at a time**. Before Phase 1, upload or paste Sections 1 to 6 (or place this document in the project as /docs/BUILD\_PACK.md so the agent can read it). After each phase, run the site, check it on your phone, then move on.

| Phase | Goal | Result you should see |
| --- | --- | --- |
| 0 | Project setup | Empty site runs locally with brand colours and fonts |
| 1 | Content and data files | All company, service, project and testimonial data in /content |
| 2 | Layout and global components | Header, footer, WhatsApp button, mobile bar |
| 3 | Home page | Complete home page with all sections |
| 4 | Services pages | Overview and 7 detail pages |
| 5 | Portfolio | Filterable gallery and project detail pages |
| 6 | About, Process, Contact | Remaining pages and working form |
| 7 | SEO, analytics, performance | Meta tags, sitemap, schema, speed fixes |
| 8 | QA and launch | Checklists passed, site live on domain |

### Phase 0 prompt: Project setup

```
Read AGENTS.md and the Build Pack. Create a new Next.js (App Router) + TypeScript + Tailwind CSS project for AMB Design and Construction Limited.

Tasks:
1. Initialize the project and the folder structure from Section 4.2 of the Build Pack.
2. Configure tailwind.config.ts with the colour tokens (navy #0F2A43, orange #E07B39, charcoal #1C1F23, off-white #F7F5F2, stone #6B7280, success #1F9D55, error #D64545), the container width (1200px) and the font families.
3. Load Poppins (headings) and Inter (body) with next/font.
4. Install lucide-react, react-hook-form, zod and framer-motion.
5. Create .env.example with the variables in Section 4.4.
6. Create a placeholder home page that shows the company name, tagline and the colour palette so I can verify the setup.
7. Run lint, type-check and build. Fix any problems.

When done, list the files you created and the commands to run the site.
```

### Phase 1 prompt: Content and data

```
Using Sections 1, 2 and 4.3 of the Build Pack, create the typed content files in /content: site.ts, services.ts, projects.ts, testimonials.ts, team.ts and faqs.ts, plus the TypeScript types in src/types.

- site.ts: company name, tagline, mission, vision, phones (09030755246, 08134343537, 07041771807), WhatsApp number (2349030755246), email placeholder, address placeholder, nav links, footer links and social links (placeholders).
- services.ts: all 7 services with the starter copy, deliverables, who-it's-for, process steps and 3 FAQs each.
- projects.ts: create 6 SAMPLE projects clearly marked as placeholders (title "Sample Project 1" etc.) covering each category, using placeholder images in /public/images/projects. Do NOT invent real client names or facts.
- testimonials.ts: 3 clearly marked placeholder testimonials.
- team.ts: 3 placeholder team members.

Add helper functions (getServiceBySlug, getProjectBySlug, getFeaturedProjects, getProjectsByCategory). Run type-check.
```

### Phase 2 prompt: Layout and global components

```
Build the global layout following Sections 2.2, 3 and 5 of the Build Pack:
- Header (sticky, logo/wordmark, nav, "Get a Free Quote" button, mobile slide-in menu with focus trapping and ESC to close).
- Footer (four columns, reading from /content/site.ts).
- FloatingWhatsApp button and MobileActionBar (Call + WhatsApp).
- Reusable UI components: Button (primary, secondary, ghost), SectionHeading, Container, CTABand.

Use a text wordmark "AMB" with "Design and Construction" until a logo file is provided in /public/images/logo.
Ensure all interactive elements are keyboard accessible with visible focus rings. Test at 360px, 768px and 1280px. Run lint and build.
```

### Phase 3 prompt: Home page

```
Build the Home page exactly as specified in Section 2.3: Hero, Who We Are, Services overview, Featured projects, Why Choose AMB, How We Work, Testimonials carousel, and the CTA band.

- Use ServiceCard, ProjectCard, ProcessTimeline, TestimonialCarousel and StatsStrip components from Section 5.
- Pull all text and data from /content.
- Add subtle scroll-reveal animation that respects prefers-reduced-motion.
- Use next/image with priority on the hero image only.
- Stats strip must use clearly marked placeholder numbers I can edit in /content/site.ts.

Check mobile layout carefully and run lint and build.
```

### Phase 4 prompt: Services pages

```
Build /services (overview with 7 service cards) and /services/[slug] using generateStaticParams, following the template in Section 2.5: hero, what we do, who it's for, process steps, related projects (filtered by service), FAQ accordion with FAQ structured data, and CTA band. Add breadcrumbs. Add per-page metadata using each service's title and description. Return a proper 404 for unknown slugs.
```

### Phase 5 prompt: Portfolio

```
Build /portfolio and /portfolio/[slug] following Section 2.6:
- Filter chips for All, Residential, Commercial, Renovation, Interior and 3D Visualization. Sync the selected filter with the ?category= URL parameter.
- Responsive grid (1/2/3 columns) of ProjectCards.
- Project detail page with hero, fact panel, overview/challenge/solution, image gallery with an accessible lightbox (arrows, swipe, ESC), optional BeforeAfterSlider, testimonial, previous/next project links and a CTA.
- Use generateStaticParams and per-project metadata with the cover image as the Open Graph image.
```

### Phase 6 prompt: About, Process and Contact

```
Build the About, Process and Contact pages per Sections 2.4, 2.7 and 2.8.

Contact form requirements:
- React Hook Form + Zod, shared schema on client and server.
- Fields as listed in 2.8, 44px+ inputs, inline errors, loading and success states.
- API route /api/contact: validate, honeypot check, simple in-memory rate limit (5 per hour per IP), send email via Resend using environment variables, return JSON.
- Fire analytics events for form submit, phone click and WhatsApp click.
- Include an embedded Google Map placeholder component I can configure.

Do not expose secrets to the client. Provide instructions for setting up the environment variables.
```

### Phase 7 prompt: SEO, analytics and performance

```
Implement Section 8 of the Build Pack: metadata for every page, Open Graph and Twitter cards, sitemap.ts, robots.ts, canonical URLs, LocalBusiness / ProfessionalService JSON-LD on the home and contact pages, BreadcrumbList and FAQPage JSON-LD where relevant, a custom 404 page, Google Analytics 4 loaded efficiently, and a favicon and og-image.

Then run a performance and accessibility audit: optimize images, remove unused code, avoid layout shift, fix any contrast issues, and report Lighthouse results for mobile on the home, portfolio and contact pages. Fix anything below 90.
```

### Phase 8 prompt: QA and launch

```
Walk through the QA checklist in Section 10 of the Build Pack. For each item, state pass or fail and fix every failure. Replace all remaining placeholder text flags with a list of items I must supply (so I can see what is outstanding). Finally, write a README.md explaining how to run, how to edit content in /content, how to add a new project, how to set environment variables and how to deploy to Vercel.
```

### Handy follow-up prompts

- "Add a new project to the portfolio using these details: \[paste details\]. Resize and optimize the images I placed in /public/images/projects/\[folder\]."
- "The mobile menu feels slow. Profile it and fix it."
- "Make the hero section use this image and adjust the overlay so the text is readable."
- "Add a blog section with MDX, a post list page, post pages and Article structured data."
- "Review the whole codebase for accessibility and SEO issues and give me a prioritized list before changing anything."

---

## Section 8: SEO, Local Search and Analytics Plan

### 8.1 On-page SEO

| Page | Suggested title (under 60 characters) | Suggested meta description (under 155 characters) |
| --- | --- | --- |
| Home | AMB Design and Construction \| Architects and Builders in \[City\], Nigeria | Architectural design, 3D visualization and building construction in Nigeria. We Design. We Build. We Deliver. Get a free quote. |
| About | About Us \| AMB Design and Construction Limited | Meet the team behind AMB: quality, affordable and innovative design and construction across Nigeria. |
| Services | Architectural Design and Building Services \| AMB | Architectural design, 3D visualization, construction, renovation, supervision, interior design and consultation. |
| Portfolio | Our Projects \| AMB Design and Construction | Browse completed homes, commercial buildings, renovations and 3D designs by AMB in Nigeria. |
| Process | How We Work \| AMB Design and Construction | From consultation to handover: see our clear, step-by-step design and build process. |
| Contact | Contact and Free Quote \| AMB Design and Construction | Call, WhatsApp or send us your project details. We respond within 24 hours. |

Replace \[City\] with the actual main city or state. Use one H1 per page that includes the main keyword naturally.

### 8.2 Target keywords (examples; refine with real search data)

- architect in \[city\], building design \[city\], house plan design Nigeria
- building contractor in \[city\], construction company in \[city\]
- 3D house design Nigeria, 3D architectural rendering Nigeria
- house renovation \[city\], building supervision Nigeria
- duplex design Nigeria, bungalow design Nigeria

Create service pages and (later) blog posts targeting these phrases with genuinely helpful content, such as "How much does it cost to build a 3-bedroom bungalow in \[city\]?" or "Steps to get a building plan approved in \[state\]". Avoid quoting specific prices unless you can keep them current.

### 8.3 Structured data (JSON-LD)

- **ProfessionalService / GeneralContractor** on home and contact: name, url, logo, telephone (all three), address, areaServed, openingHours, sameAs (social links).
- **BreadcrumbList** on inner pages.
- **FAQPage** on service pages with FAQs.
- **ImageObject or CreativeWork** on project pages (optional).

### 8.4 Local SEO checklist (outside the website)

- Create and verify a **Google Business Profile** with the same name, address and phone numbers as the site; add photos of real projects; ask satisfied clients for reviews.
- Keep the business name, address and phone number identical everywhere (NAP consistency).
- List the business on Nigerian and global directories where relevant.
- Create business pages on Instagram, Facebook, LinkedIn and TikTok; link them in the footer; post project photos regularly.
- Submit sitemap.xml to Google Search Console and Bing Webmaster Tools.

### 8.5 Analytics events to track

| Event | Trigger |
| --- | --- |
| form\_submit | Successful contact form submission |
| whatsapp\_click | Any WhatsApp button or link click |
| phone\_click | Any tel: link click |
| project\_view | Project detail page view |
| filter\_use | Portfolio filter selected |
| cta\_click | "Get a Free Quote" button clicks |

Set "form\_submit", "whatsapp\_click" and "phone\_click" as conversions in GA4.

---

## Section 9: Content and Asset Checklist (what you must prepare)

The AI agent can build the site, but it cannot invent your real work. Collect the following **before or during** the build.

### 9.1 Brand assets

- [ ] Logo (SVG or high-resolution PNG, with transparent background; a light and a dark version if possible)
- [ ] Brand colours and fonts if already defined
- [ ] Favicon source (square logo mark)
- [ ] Letterhead or business card for reference

### 9.2 Company information

- [ ] Business email address (use a domain email such as info@yourdomain.com, not a free email, for credibility)
- [ ] Office address and Google Maps location
- [ ] Working hours
- [ ] CAC registration number and any professional memberships or licenses
- [ ] Social media links
- [ ] Years in business, number of projects completed, number of satisfied clients (real numbers only)
- [ ] Company story (a short written account of how and why AMB started)

### 9.3 Portfolio material (most important)

For each project, aim to provide:

- [ ] Project title and category
- [ ] Location (area and state is enough; protect client privacy if needed)
- [ ] Year and status (completed, ongoing, concept)
- [ ] Services provided (design, construction, supervision, interiors)
- [ ] Short description: the client's need, the challenge, what you did
- [ ] 6 to 15 good photos (landscape orientation, good light, high resolution, no people's faces without permission)
- [ ] 3D renders and drawings (floor plans, elevations) where available
- [ ] Before and after photos for renovations
- [ ] Written client permission to display the project publicly

Start with **at least 6 to 8 strong projects**. If you have few completed projects, include 3D design concepts, clearly labelled as concepts, and add real projects as they finish.

### 9.4 People

- [ ] Professional photos of the principal and key team members
- [ ] Short bios (2 to 3 sentences) and roles
- [ ] Site team photos in safety gear, if available (shows professionalism)

### 9.5 Social proof

- [ ] 3 to 5 written client testimonials with permission to publish (name, project type, location)
- [ ] Optional: short phone-recorded video testimonials
- [ ] Screenshots of positive WhatsApp or Google reviews (with permission)

### 9.6 Technical accounts

- [ ] Domain name (for example ambdesignconstruction.com or a .com.ng domain)
- [ ] Hosting account (Vercel or Netlify)
- [ ] Email sending service account (Resend or similar) and a verified sender address
- [ ] Google Analytics and Google Search Console accounts
- [ ] Google Business Profile

### 9.7 Photo and render tips

- Photograph in the morning or late afternoon for soft, even light.
- Shoot exteriors from the street level and a slight angle; shoot interiors with all lights on and curtains open.
- Keep a consistent editing style across all images.
- Rename files meaningfully, for example duplex-ikeja-front-view.jpg, rather than IMG\_2034.jpg.

---

## Section 10: QA and Launch Checklist

### 10.1 Functional

- [ ] All navigation links and buttons work; no broken links or images
- [ ] Click-to-call works for all three numbers on mobile
- [ ] WhatsApp button opens a chat with the correct number and pre-filled message
- [ ] Contact form: validation errors show correctly; success message appears; email arrives in the company inbox; spam honeypot works; rate limit works
- [ ] Portfolio filters work and the URL updates; project pages load for every project
- [ ] Lightbox, carousel, accordion and before/after slider work with mouse, touch and keyboard
- [ ] Custom 404 page appears for unknown URLs

### 10.2 Responsive and browser

- [ ] Tested at 360px, 390px, 768px, 1024px and 1440px widths
- [ ] No horizontal scrolling on any page
- [ ] Tested on Chrome and Safari (iPhone), Chrome (Android), Firefox and Edge
- [ ] Text is readable and tap targets are at least 44px

### 10.3 Performance (mobile, Lighthouse)

- [ ] Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+
- [ ] Largest Contentful Paint under 2.5 seconds; Cumulative Layout Shift under 0.1
- [ ] Images in modern formats and correctly sized; no image over 500 KB
- [ ] Tested on a throttled slow 4G connection

### 10.4 Accessibility

- [ ] Every image has meaningful alt text (decorative images have empty alt)
- [ ] Colour contrast passes 4.5:1 for text
- [ ] Full keyboard navigation with visible focus; menu and lightbox trap focus and close with ESC
- [ ] Form fields have labels and error messages are announced
- [ ] Headings follow a logical order (one H1 per page)

### 10.5 SEO and content

- [ ] Unique title and description on every page
- [ ] sitemap.xml and robots.txt available; submitted to Search Console
- [ ] Structured data validates in Google's Rich Results Test
- [ ] Open Graph preview looks right when shared on WhatsApp, Facebook and LinkedIn
- [ ] No placeholder text, "Lorem ipsum", sample projects or fake testimonials remain
- [ ] All facts, numbers and phone numbers are correct
- [ ] Spelling and grammar proofread; consistent tone

### 10.6 Legal and trust

- [ ] Privacy policy published and linked in the footer; form shows a short consent note
- [ ] Permission obtained for every client project, photo and testimonial displayed
- [ ] Registration details (CAC number) displayed if available

### 10.7 Launch day

1. Push the code to a private GitHub repository.
2. Connect the repository to Vercel and add all environment variables.
3. Add the custom domain; enable HTTPS (automatic on Vercel); set the www and non-www redirect.
4. Set up the domain email and test the contact form again on the live site.
5. Verify the site in Google Search Console and submit the sitemap.
6. Confirm Google Analytics is receiving data.
7. Update the Google Business Profile, social media bios and business cards with the website address.
8. Announce the launch on social media and WhatsApp status with project highlights.

---

## Section 11: After Launch

### 11.1 Monthly routine

- Add at least one new project or update (photos from sites in progress count).
- Review analytics: top pages, enquiry sources, form conversions, WhatsApp clicks.
- Check Search Console for errors and keyword performance.
- Respond to every enquiry the same day. Speed wins projects.
- Ask each completed client for a testimonial and a Google review.
- Update dependencies and run a security and performance check.

### 11.2 Phase 2 improvements

1. Blog or "Building Tips" section for search traffic.
2. Headless CMS (such as Sanity, Contentful or Decap CMS) so the team can add projects without code.
3. Quote request wizard or rough cost estimator with disclaimers.
4. Project video walkthroughs and drone footage.
5. Downloadable company profile PDF and brochure.
6. Live chat or automated WhatsApp Business greeting and quick replies.
7. Dedicated landing pages for ads, for example "3D House Design in \[City\]" or "Diaspora Building Supervision".

### 11.3 Estimated running costs (verify current prices)

| Item | Typical cost |
| --- | --- |
| Domain name | Yearly fee (a .com or .com.ng) |
| Hosting | Free tier on Vercel or Netlify is usually enough at the start |
| Email sending service | Free tier usually enough for a contact form |
| Business email | Monthly per-mailbox fee (Google Workspace, Zoho or similar) |
| Photography and 3D renders | One-time or per-project costs; the best investment for conversions |

---

**Final reminder:** a portfolio website wins work through **real project photos, clear contact options and fast responses**. The code is the easy part. Feed the agent excellent content and review each phase carefully.
