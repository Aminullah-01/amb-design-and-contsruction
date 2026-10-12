# AMB Design and Construction Limited

**Website Design Guide for the AI Coding Agent**

## 0. What Changed and How to Read This Guide

| Topic | Earlier Build Pack | This guide (final) |
| --- | --- | --- |
| Colours | Navy and orange | **Colours taken from the AMB logo: sky blue, red, brick orange, black, white** |
| Hero | Static image | **Full-screen looping video** |
| Structure and style | Generic | **Follows the pattern of mshelhomes.com** (see Section 2) |
| Backend | Contact API, email service | **None. Frontend only. Static site** |
| Images | Placeholders | **The 16 images supplied by the owner** (see Section 9) |
| Logo | Text wordmark | **The real AMB logo** (see Section 3) |

Page content, service descriptions, FAQs and copy in **Build Pack Section 2** are still valid. Everything about colours, typography, hero, tech stack, contact form and AGENTS.md in the Build Pack is **overridden** by this guide.

### Priority rules for the agent

1. This guide wins over any earlier document if they disagree.
2. Never invent project facts, client names, numbers or testimonials. Use clearly marked placeholders.
3. Study the reference website for **structure, pacing and style only**. Do **not** copy its text, images, code, logo or any proprietary assets.
4. Mobile first. Most visitors will be on phones in Nigeria, often on mobile data.

---

## 1. Read This First: Issues With the Supplied Assets

The owner supplied one logo and 16 images. Before building, the agent and the owner should know the following.

### 1.1 Third-party watermarks on several images

Seven of the images carry the names or logos of **other design studios**:

| File (WhatsApp Image 2026-10-05 at ...) | Watermark seen |
| --- | --- |
| 3.59.09 PM | "E-MAX Design & Construction Ltd" |
| 3.59.13 PM and 3.59.14 PM | "@detarchitectural" and a "D" logo |
| 3.59.20 PM, 3.59.20 PM (1), 3.59.21 PM, 3.59.22 PM | "@e\_nero.designs" and a small emblem |

A company portfolio presents work as **the company's own**. If these renders were made by someone else, showing them as AMB projects can damage trust and create copyright problems. The owner must choose one of these options for each of these seven images:

- **They are AMB's own work:** re-export without the other studio's watermark, or add the AMB logo instead.
- **They are by a partner or freelancer:** get written permission, and credit the designer on the project page.
- **They are not AMB's work:** do not use them as portfolio projects. Replace them with AMB's own work.

**Agent instruction:** build the portfolio first with only the **cleared images** (Section 9 lists them). Put the seven watermarked images in a separate folder (/public/images/needs-clearance/) and **do not publish them** until the owner confirms in writing. Make this a one-line change in the content file (a "cleared": true or false field).

The three aerial and elevation renders (3.59.06 PM, 3.59.06 PM (1), 3.59.07 PM) have no studio watermark, but one shows a small AI-style sparkle mark in the corner. The owner should confirm they are AMB's work or properly licensed.

### 1.2 Logo file

- The logo is a JPEG on a white page with large empty margins (1749 x 2481 pixels). It has no transparent background.
- **Needed:** a tightly cropped version, a transparent PNG or SVG, and ideally a white (reversed) version for dark backgrounds.
- **Interim solution for the agent:** crop the JPEG to the logo artwork, save as logo.png, and place it on white or very light surfaces only. Do not place the JPEG on dark or coloured backgrounds because the white box will show. On dark areas (footer, video overlay), use a white rounded "badge" container behind the logo.
- The logo text ends with "Limited..." with three dots. Use the dots only in the logo image. In page text write "AMB Design and Construction Limited".

### 1.3 Mock-up images are not portfolio work

The helmet, cap and reflective vest images are **branding mock-ups**. Do not put them in the project portfolio. They can be used in a small "Our brand in the field" or "Safety first" strip on the About page, or left out.

The vest mock-up shows contact details: three phone numbers, an email address, and social icons for WhatsApp, TikTok, Instagram, Facebook and Pinterest. The email on it reads **Ambdesignconsructionl@gmail.com**, which looks like it may contain a spelling error ("consruction"). **The owner must confirm the correct email address** before it goes on the site. Until confirmed, the agent must use the placeholder \[CONFIRM EMAIL\].

### 1.4 The reference website could not be fully inspected

mshelhomes.com loads as a JavaScript app, so the page text and layout were not available to automated reading. This guide therefore describes the **common pattern of a modern Nigerian developer and real-estate site** (full-screen hero, stats, listing-style cards, floating chat button), which matches what is publicly known about that site, and gives the agent a step to verify against the live site (Section 2.2). The owner should supply 3 to 5 screenshots of mshelhomes.com (home page top, a middle section, footer, a listing page, mobile view) so the agent can match details exactly.

---

## 2. Reference Site Approach

### 2.1 What to borrow from the reference pattern

- A **full-screen video hero** with a dark overlay, a strong headline and two buttons.
- A **transparent header** over the hero that becomes solid after scrolling.
- **Large property or project cards** that look like listings: big image, category tag, location, short facts, "View details" button.
- **Trust signals** near the top: statistics, years, locations served, reassurance points (for AMB: licensed, supervised, on-time delivery, only if true).
- A **floating chat or contact button** (Mshel uses a live-chat widget; AMB will use a **WhatsApp** button instead because there is no backend).
- Clear, **repeated calls to action** after every major section.
- Generous white space, big imagery and short copy blocks.
- A rich footer with company details, quick links and social icons.

### 2.2 Verification step for the agent (only if it has browser access)

Open https://mshelhomes.com in a browser (desktop and mobile widths) and write a short "reference notes" file in /docs/reference-notes.md covering: header layout and behaviour, hero layout, section order, card styling, button shapes, typography feel, spacing, footer layout and mobile menu behaviour. Then apply the same **patterns** using AMB's colours and content. If the agent has no browser access, use the owner's screenshots. If neither exists, follow this guide as written.

### 2.3 What not to do

- Do not copy text, images, icons, code or the colour scheme from the reference site.
- Do not use real-estate sales language (plots, land banking, investment returns). AMB is an architecture and construction company.
- Do not add features AMB cannot support (live chat server, property payments, user logins).

---

## 3. Brand Colours (from the AMB Logo)

The logo uses **sky blue** (the "AMB" letters), **red** (the script "Design & Construction"), **brick orange-red** (the brick tower), **black** ("Limited" and outlines), and **white**, plus the grey glass and warm interior tones inside the building graphic.

The values below were sampled from the logo file. They are close approximations. **The agent must confirm them with an eyedropper on the logo and adjust if needed.**

### 3.1 Core palette

| Role | Name | Hex | Where it comes from |
| --- | --- | --- | --- |
| Brand blue | Sky Blue | #34A9FA | "AMB" lettering |
| Brand red | Signal Red | #E91C24 | "Design & Construction" script |
| Brand brick | Brick | #C73E1D | Brick tower in the logo |
| Ink | Black | #0B0B0B | "Limited" text and outlines |
| Paper | White | #FFFFFF | Logo background |

### 3.2 Accessible working shades (derived from the same hues)

The bright sky blue does not have enough contrast with white text (about 2.6 to 1). Use darker or lighter steps of the same hues for text, buttons and backgrounds.

| Token | Hex | Use |
| --- | --- | --- |
| blue-50 | #EAF6FF | Light section tint, hover backgrounds |
| blue-100 | #CFEAFE | Borders on tinted areas |
| blue-500 | #34A9FA | Brand accents, icons, large decorative shapes, highlights on dark backgrounds |
| blue-600 | #1B8CE0 | Hover states, links on dark backgrounds |
| blue-700 | #0B6FB8 | **Primary button background and text links on white** (white text contrast about 5.3 to 1) |
| red-500 | #E91C24 | Large accent text, icons, badges |
| red-600 | #D3151C | **Secondary or urgent CTA background** (white text contrast about 5.4 to 1) |
| brick-500 | #C73E1D | Small accents: stat numbers, underlines, divider marks, category tags |
| ink-900 | #0B0B0B | Headings, dark sections, footer |
| ink-800 | #151515 | Dark card surfaces |
| ink-600 | #4B5563 | Body text on white |
| ink-400 | #9CA3AF | Muted text on dark |
| line | #E5E7EB | Borders and dividers |
| surface | #F5F7FA | Alternate section background |
| white | #FFFFFF | Page background and text on dark |

The agent must run a contrast check and keep ordinary text at 4.5 to 1 or better, and large text (24px and above, or 19px bold) at 3 to 1 or better.

### 3.3 Usage proportions

- **60% white and light surface**, **25% ink black (hero overlay, footer, dark bands)**, **12% blue**, **3% red and brick**.
- Blue is the **primary action colour**. Red is used **sparingly** for one highlight per section at most (a badge, a key stat, a second strong CTA).
- Never put red text on blue or blue text on red.
- Do not use gradients of unrelated colours. A gradient from ink-900 to transparent is allowed over the video and images.

### 3.4 CSS tokens (put in globals.css or the Tailwind theme)

```css
:root {
  --blue-50:#EAF6FF; --blue-100:#CFEAFE; --blue-500:#34A9FA; --blue-600:#1B8CE0; --blue-700:#0B6FB8;
  --red-500:#E91C24; --red-600:#D3151C;
  --brick-500:#C73E1D;
  --ink-900:#0B0B0B; --ink-800:#151515; --ink-600:#4B5563; --ink-400:#9CA3AF;
  --line:#E5E7EB; --surface:#F5F7FA; --white:#FFFFFF;
  --radius:10px; --radius-lg:16px;
  --shadow-sm:0 1px 3px rgba(11,11,11,.08);
  --shadow-md:0 8px 24px rgba(11,11,11,.12);
}
```

---

## 4. Typography

The logo combines a **bold, slanted sans** (AMB) with a **brush-style script** (Design & Construction). The website should stay clean and modern, and echo the script only as a rare accent.

| Role | Font | Weight | Notes |
| --- | --- | --- | --- |
| Headings | Montserrat (or Poppins) | 700 to 800 | Tight line height 1.15 |
| Body | Inter | 400 and 500 | Line height 1.65 |
| Script accent (optional) | Lobster Two Italic or similar | 700 | **Only** for a short tagline or eyebrow, at most once per page, never for body or buttons |

| Element | Mobile | Desktop |
| --- | --- | --- |
| Hero H1 | 38px | 68px |
| H2 | 28px | 44px |
| H3 | 21px | 26px |
| Body | 16px | 18px |
| Eyebrow (small caps label) | 12px, letter-spacing 0.12em | 13px |

Load fonts self-hosted (for example with @fontsource packages). Limit to two families plus the optional accent.

---

## 5. Layout System

- Max content width **1240px**, centred. Side padding 20px on mobile, 32px on desktop.
- Section spacing: **72px mobile, 120px desktop**. Alternate section backgrounds: white, surface, white, ink-900 (dark band), white.
- 12-column grid on desktop; single column on mobile; two columns on tablet.
- Breakpoints: 480, 768, 1024, 1280.
- Radius: **10px** for buttons and inputs, **16px** for cards. Images in cards keep the top corners rounded.
- Use thin 1px line dividers and generous white space. Avoid heavy borders.
- Large imagery is the hero of every section. Text stays short.

---

## 6. Hero Section With Video

### 6.1 Layout

- Full viewport height on desktop (100svh, minimum 640px), 85svh on mobile.
- Video fills the area with object-fit: cover, centred.
- Overlay: linear gradient from rgba(11,11,11,0.75) at the bottom to rgba(11,11,11,0.35) at the top, so white text is always readable.
- Content block aligned **left**, vertically centred or bottom-weighted, max width 760px:
  1. Eyebrow: "Architecture, Design and Construction" in blue-500 (small caps).
  2. H1: **We Design. We Build. We Deliver.**
  3. Sub-text (one or two lines): "Quality, affordable and innovative design and construction for homes and businesses across Nigeria."
  4. Buttons: primary blue "Get a Free Quote" and outlined white "View Our Projects".
- **Trust strip** pinned to the bottom of the hero on desktop (frosted dark bar with 3 or 4 stats). On mobile, move it below the hero. Use real numbers only; show placeholders marked \[ADD\] until the owner supplies them.
- A small "scroll" indicator at the bottom centre.
- Header sits on top of the hero with a transparent background and the logo inside a white rounded badge (because the logo has a white background). After 40px of scroll, the header becomes solid white with a shadow, and the logo shows normally.

### 6.2 Video technical requirements

```html
<video
  autoPlay muted loop playsInline
  preload="metadata"
  poster="/images/hero-poster.jpg"
  aria-hidden="true">
  <source src="/videos/hero.webm" type="video/webm" />
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

- The video is **decorative**: no audio track, aria-hidden, no controls. Include a small "Pause" button (bottom-right, 44px) so users can stop motion.
- **Poster image** (hero-poster.jpg) shows immediately and is the fallback when the video cannot play.
- **Do not autoplay the video** when any of these is true: prefers-reduced-motion is set, the browser reports data-saver, or the connection is slow (navigator.connection.saveData or effectiveType of 2g or slow-2g). Show the poster only.
- On small phones (under 480px wide) it is acceptable to serve a lighter video file (hero-mobile.mp4, 720p, under 2 MB) or the poster only.
- Start playback only after the poster is displayed so the page never shows a black box.
- Loop length 12 to 25 seconds, seamless loop if possible.

### 6.3 What the video should show (owner guidance)

Best options, in order:

1. A smooth drone-style or camera flythrough of AMB's 3D renders or completed buildings.
2. A montage of the best renders and scale models with slow zooms, cross-fades and subtle motion (can be made in CapCut, Canva or DaVinci Resolve using the supplied images).
3. Footage of construction progress, site work and finished interiors.

Avoid shaky phone footage, text-heavy videos, audio, or footage owned by someone else. Keep the first 2 seconds visually strong because that is what loads first.

### 6.4 Compression (run on the owner's source video)

```bash
# MP4 (H.264), 1080p, no audio, optimised for web
ffmpeg -i source.mp4 -an -vf "scale=1920:-2,fps=30" -c:v libx264 -crf 28 -preset slow -movflags +faststart hero.mp4

# WebM (VP9)
ffmpeg -i source.mp4 -an -vf "scale=1920:-2,fps=30" -c:v libvpx-vp9 -crf 36 -b:v 0 hero.webm

# Lightweight mobile version
ffmpeg -i source.mp4 -an -vf "scale=960:-2,fps=24" -c:v libx264 -crf 30 -preset slow -movflags +faststart hero-mobile.mp4
```

Targets: desktop MP4 under **5 MB**, mobile MP4 under **2 MB**. If the file is larger, shorten the loop or raise the CRF number.

### 6.5 Until the video arrives

The agent must build the hero fully with the video element wired up and use a **poster image** (use the cleared image 3.59.06 PM (1), the modern duplex) so the site looks complete. When the owner drops hero.mp4 and hero.webm into /public/videos/, the video starts working with no code change.

---

## 7. Page Structure (Mshel-style pattern for AMB)

### 7.1 Home page, section by section

| # | Section | Layout and style |
| --- | --- | --- |
| 1 | **Video hero** | As in Section 6 |
| 2 | **Stats / trust bar** | 4 counters (for example Projects, Years, Services, Client satisfaction). Real numbers only. Counters animate once when scrolled into view |
| 3 | **About preview** | Two columns: large image (render) with a smaller overlapping image, text on the right with eyebrow, H2, 3 short paragraphs and a "Learn more about us" link. Include 3 tick-point highlights |
| 4 | **Services** | Surface-coloured band. 7 service cards in a 3-column grid on desktop, each with a blue icon in a tinted circle, title, one-line text and arrow link |
| 5 | **Featured projects** | Listing-style cards in a 3-column grid: image 4:3, category tag (brick-500), title, location, key facts row (for example Bedrooms, Floors, Type if known), "View details" button. A "View all projects" button below |
| 6 | **Why choose AMB** | Dark band (ink-900). Left: heading and intro. Right: 4 benefit blocks with blue icons. One red accent element only |
| 7 | **How we work** | Six numbered steps, horizontal on desktop with a connecting line, vertical on mobile |
| 8 | **3D visualization highlight** | Split section showing one 3D render beside text "See your building before it is built", with a CTA |
| 9 | **Testimonials** | Carousel of 3 cards (placeholders flagged until real quotes arrive) |
| 10 | **Call to action band** | Blue-700 background with white text, two buttons: white "Request a Free Quote" and outlined "Chat on WhatsApp" |
| 11 | **Footer** | Dark (ink-900), 4 columns: logo badge and short about, quick links, services, contact with all 3 phone numbers and email, plus social icons (WhatsApp, TikTok, Instagram, Facebook, Pinterest) |

### 7.2 Other pages

- **About:** story, mission and vision cards, values, team, brand-in-the-field strip (optional mock-ups). Use a short image-banner header (not video).
- **Services:** overview grid plus one section per service on the same page with anchor links, or separate pages if preferred.
- **Portfolio:** page banner, filter chips (All, Residential, Commercial, 3D Renders, Scale Models, Interiors), responsive grid of listing-style cards, lightbox on click.
- **Project detail:** big hero image, fact panel, overview, gallery with lightbox, related projects, CTA.
- **Process:** six steps with icons and short descriptions.
- **Contact:** see Section 8.3 (no backend).
- **Privacy policy and 404.**

Use the **copy from Build Pack Section 2** for text on all pages.

---

## 8. Technical Direction (Frontend Only)

### 8.1 Stack

| Layer | Choice |
| --- | --- |
| Framework | **React with Vite** and TypeScript, with React Router for pages and react-helmet-async for page titles and meta tags |
| Styling | Tailwind CSS using the tokens in Section 3.4 |
| Icons | lucide-react, plus brand icons for WhatsApp, TikTok, Instagram, Facebook, Pinterest |
| Animation | CSS and light Framer Motion; respect reduced motion |
| Data | Typed files in /content (no database, no CMS) |
| Hosting | Any static host: Vercel, Netlify, Cloudflare Pages, GitHub Pages or a normal cPanel host |

**Not needed anymore:** API routes, server code, email services, databases, environment secrets, rate limiting. Remove them from the plan.

### 8.2 Project structure

```
amb-website/
├─ AGENTS.md
├─ public/
│  ├─ videos/ (hero.mp4, hero.webm, hero-mobile.mp4)
│  ├─ images/
│  │  ├─ brand/ (logo.png, logo-original.jpg, favicon, og-image)
│  │  ├─ projects/ (cleared project images)
│  │  ├─ mockups/ (helmet, cap, vest)
│  │  └─ needs-clearance/ (watermarked images, not published)
├─ content/ (site.ts, services.ts, projects.ts, testimonials.ts, team.ts, faqs.ts)
└─ src/ (pages, components, content, lib, types)
```

### 8.3 Contact without a backend

The contact page and every "Get a Free Quote" button work through links the visitor's own phone handles:

1. **WhatsApp quote form (primary):** a short form (name, phone, service, location, message). On submit, build a message and open https://wa.me/2349030755246?text=\<URL-encoded message> in a new tab. The visitor sends it from WhatsApp. No data is stored by the site.
2. **Call buttons:** tel:09030755246, tel:08134343537, tel:07041771807.
3. **Email link:** mailto:\[CONFIRM EMAIL\] with a pre-filled subject.
4. **Optional later:** a third-party form service (for example Formspree or Web3Forms) can be added with just a form action URL and no server code, if the owner wants submissions by email.

Show a clear note under the form: "This opens WhatsApp with your message ready to send." Validate required fields in the browser. Add a Google Map embed or a "Get directions" link once the address is supplied.

### 8.4 Performance rules (important for mobile data)

- Total initial page weight under about 1.5 MB excluding the video; the video must never block first paint.
- Convert all images to WebP or AVIF, resized to the largest displayed size. Cards under 200 KB, hero poster under 250 KB, gallery full-size under 500 KB.
- Vite does not resize images for you, so **pre-optimise images** with a script and still set explicit width and height and lazy loading below the fold.
- Lighthouse mobile targets: Performance 85+ (the video is the main cost), Accessibility 95+, Best Practices 95+, SEO 95+.

---

## 9. Asset Manifest (the images the owner supplied)

The agent must copy these into the project and **rename them with meaningful names**. "Cleared" means no third-party watermark was seen; the owner still confirms ownership.

| # | Original file (WhatsApp Image 2026-10-05 at ...) | Rename to | What it shows | Status and use |
| --- | --- | --- | --- | --- |
| 1 | new\_logo-1\_jpg.jpeg | brand/logo-original.jpg, then crop to brand/logo.png | AMB logo | Use everywhere; needs cropping and a transparent version |
| 2 | 3.59.06 PM.jpeg | projects/villa-aerial-pool-01.jpg | Aerial render of a grey and white two-storey villa with pool, garage and landscaped compound | Cleared. Featured project, Residential |
| 3 | 3.59.06 PM (1).jpeg | projects/duplex-glass-corner-01.jpg | Modern duplex with tall glass corner, timber fins, stone cladding and paved drive | Cleared. **Hero poster**, featured project |
| 4 | 3.59.07 PM.jpeg | projects/villa-aerial-gazebo-01.jpg | Aerial render of a white and black house with pool, gazebo and carport | Cleared. Featured project |
| 5 | 3.59.09 PM.jpeg | needs-clearance/contemporary-timber-stone-01.jpg | Contemporary multi-level facade with timber and stone | **Watermark: E-MAX. Hold** |
| 6 | 3.59.13 PM.jpeg | needs-clearance/duplex-aerial-driveway-01.jpg | Aerial of a two-storey house with balcony and driveway | **Watermark: @detarchitectural. Hold** |
| 7 | 3.59.14 PM.jpeg | needs-clearance/duplex-front-view-01.jpg | Front view of the same two-storey house | **Watermark: @detarchitectural. Hold** |
| 8 | 3.59.15 PM.jpeg | projects/scale-model-compound-01.jpg | Physical scale model: building in a walled compound with road and street lamps | Cleared. Category: Scale Models |
| 9 | 3.59.16 PM.jpeg | projects/scale-model-compound-02.jpg | Second angle of the same scale model | Cleared. Gallery for the same project |
| 10 | 3.59.17 PM (1).jpeg | projects/scale-model-bungalow-estate-01.jpg | Scale model of a bungalow in a paved, walled compound with gatehouse, pools and cars | Cleared. Category: Scale Models |
| 11 | 3.59.20 PM.jpeg | needs-clearance/courtyard-pool-aerial-01.jpg | Aerial of pool, parking and courtyard | **Watermark: @e\_nero.designs. Hold** |
| 12 | 3.59.20 PM (1).jpeg | needs-clearance/bungalow-stepped-entrance-01.jpg | Modern flat-roof bungalow with floating steps | **Watermark: @e\_nero.designs. Hold** |
| 13 | 3.59.21 PM.jpeg | needs-clearance/bungalow-front-elevation-01.jpg | Front elevation of the same bungalow | **Watermark: @e\_nero.designs. Hold** |
| 14 | 3.59.22 PM.jpeg | needs-clearance/bungalow-site-aerial-01.jpg | Aerial of the bungalow within its neighbourhood | **Watermark: @e\_nero.designs. Hold** |
| 15 | 4.05.49 PM.jpeg | mockups/helmet-mockup.jpg | Safety helmet with AMB logo | Mock-up. About page strip only |
| 16 | 4.05.49 PM (1).jpeg | mockups/cap-mockup.jpg | Cap with AMB logo | Mock-up. About page strip only |
| 17 | 4.05.50 PM (1).jpeg | mockups/vest-mockup.jpg | Hi-vis vest with logo, phones, socials, email | Mock-up. Do not publish the email as shown until confirmed |

### 9.1 Launch portfolio from cleared images

With the cleared images the agent can build **5 portfolio entries** at launch:

| Project (placeholder titles; owner to rename) | Category | Images |
| --- | --- | --- |
| Modern Duplex with Glass Corner \[ADD LOCATION\] | Residential, 3D Render | #3 |
| Two-Storey Villa with Pool \[ADD LOCATION\] | Residential, 3D Render | #2 |
| Villa with Pool and Gazebo \[ADD LOCATION\] | Residential, 3D Render | #4 |
| Walled Compound Scale Model \[ADD LOCATION\] | Scale Models | #8, #9 |
| Bungalow Estate Scale Model \[ADD LOCATION\] | Scale Models | #10 |

Once the owner clears the watermarked images, add them as extra projects by flipping the cleared flag. A launch with 5 to 6 entries is fine; do not pad with fake projects.

The scale models are a **real differentiator**: many competitors show renders only. Give them their own filter chip and a short line such as "Physical scale models built to help clients visualise the project" (only if true).

### 9.2 Image treatment

- Card images 4:3, hero banners 16:9, square images may be cropped to 4:3 using object-fit: cover with a sensible focus point.
- Alt text must describe the image, for example "Aerial 3D render of a two-storey villa with swimming pool and landscaped garden".
- Add a small AMB corner mark on project images only if the owner requests it. Never leave other studios' marks visible on published images.

---

## 10. Components and Interaction Style

| Component | Design notes |
| --- | --- |
| **Header** | 80px tall; logo badge left, nav centre or right, "Get a Free Quote" blue button right. Transparent over the hero, solid white on scroll. Mobile: hamburger opens a full-height drawer from the right with large links and the call and WhatsApp buttons at the bottom |
| **Buttons** | Height 48px, radius 10px, bold 15px text. Primary: blue-700 background, white text, hover blue-600 and a 2px lift. Secondary: white outline on dark or blue-700 outline on light. Highlight: red-600, used rarely |
| **Cards** | White, 1px line border, radius 16px, soft shadow on hover, image zoom 1.05 over 400ms |
| **Category tag** | Small pill, brick-500 text on a 10% brick tint |
| **Stat counters** | Large Montserrat numbers in blue-500 on dark, or ink-900 on light, with a small label |
| **Icons** | Line icons in blue-700 on a blue-50 circle |
| **Section heading** | Eyebrow (blue-700 small caps) + H2 + optional paragraph. A short 48px blue underline bar under the eyebrow is allowed |
| **Floating WhatsApp button** | 56px circle, bottom right; WhatsApp green is allowed because it is a recognised brand mark; includes a short tooltip "Chat with us". On mobile also show a bottom action bar with Call and WhatsApp |
| **Gallery and lightbox** | Click opens full-screen viewer, arrows, swipe, ESC to close, caption, counter |
| **Filter chips** | Pill buttons; selected = blue-700 background, white text |
| **Footer** | ink-900 background, white text, blue-500 link hover, thin line above the copyright row |
| **Motion** | Fade and slide-up on scroll (about 300 ms), stagger card entrances by 60 ms, image hover zoom. Nothing flashes. Disable all with prefers-reduced-motion |

---

## 11. Accessibility and Responsiveness

- Visible focus ring on every interactive element (2px blue-600 outline with offset).
- Keyboard-operable menu, lightbox, carousel and pause button.
- Alt text on all images; decorative images get empty alt. The hero video is aria-hidden.
- Minimum tap target 44px.
- Text over images always sits on a dark overlay that meets 4.5 to 1.
- Test at 360, 390, 768, 1024 and 1440 pixels. No horizontal scrolling.

---

## 12. Design Do and Don't

**Do**

- Let big, clean project imagery lead every section.
- Keep copy short. One idea per block.
- Repeat the primary call to action after each major section.
- Keep blue as the main colour and use red and brick as small accents.
- Keep spacing generous and consistent.

**Don't**

- Don't use the logo JPEG on dark backgrounds without its white badge.
- Don't show other studios' watermarks.
- Don't make up numbers, years, clients, awards or testimonials.
- Don't use more than two font families plus the optional script accent.
- Don't autoplay heavy video on slow connections.
- Don't copy the reference website's content or assets.

---

## 13. Replacement AGENTS.md (save in the project root)

```markdown
# AGENTS.md - AMB Design and Construction Website (frontend only)

## Project
Static portfolio website for AMB Design and Construction Limited (Nigeria). Tagline: "We Design. We Build. We Deliver." No backend. Hosted on any static host.

## Source of truth
1. docs/DESIGN_GUIDE.md (this guide) wins on design, structure, assets and tech.
2. docs/BUILD_PACK.md Section 2 for page copy and Section 5 for component ideas.
If they conflict, follow the Design Guide.

## Stack
React (Vite) + TypeScript + Tailwind CSS + React Router. Content in /content typed files. No API routes, no server code, no secrets.

## Rules
1. Mobile-first. Test 360, 768 and 1280 widths.
2. Colours only from the tokens in the Design Guide Section 3 (logo-derived blue, red, brick, black, white). Do not add other brand colours.
3. Hero is a looping muted video with poster fallback, disabled for reduced motion, data saver and slow connections, with a Pause button.
4. Follow the section order and card/header/footer pattern in Design Guide Sections 7 and 10. Do not copy text, images or code from mshelhomes.com.
5. Use only images listed as "Cleared" in Design Guide Section 9. Images in /public/images/needs-clearance must not be imported or published.
6. Never invent facts, project details, numbers or testimonials. Use [ADD ...] placeholders.
7. Contact: WhatsApp deep link (wa.me/2349030755246), tel: links, mailto with [CONFIRM EMAIL]. No form backend.
8. Content lives in /content; components read from it.
9. Accessibility: semantic HTML, alt text, focus states, 4.5:1 contrast, keyboard operable.
10. Run lint, type-check and build before finishing every task and summarise changes.

## Commands
npm run dev | npm run build | npm run lint | npx tsc --noEmit
```

---

## 14. Build Prompts for the Agent (frontend only)

Give these one at a time and review in the browser after each.

**Prompt A: Setup and tokens**

```
Read AGENTS.md and docs/DESIGN_GUIDE.md fully. Create a React (Vite) + TypeScript + Tailwind project with React Router. Implement the colour tokens (Section 3), fonts (Section 4), layout rules (Section 5) and folder structure (Section 8.2). Copy the supplied images into /public/images using the rename table in Section 9 (put watermarked ones in needs-clearance, unpublished). Crop the logo JPEG to the artwork and save brand/logo.png. Show a style-guide page at /style-guide displaying colours, type scale, buttons and cards so I can approve the look. Run lint and build.
```

**Prompt B: Header, footer, hero**

```
Build the global header (transparent over hero, solid on scroll, logo in white badge, mobile drawer), the footer (Section 7.1 item 11), the floating WhatsApp button and mobile action bar, and the full-screen video hero (Section 6) with poster fallback, reduced-motion and data-saver handling, and a Pause button. Use /public/videos/hero.mp4 and hero.webm if present; otherwise show the poster image. Make everything read from /content/site.ts.
```

**Prompt C: Home page sections**

```
Build the remaining Home page sections in the order in Section 7.1 using the Build Pack copy. Create listing-style project cards from the 5 cleared projects in Section 9.1. Use placeholders marked [ADD] for any missing facts. Add scroll reveal animations that respect reduced motion.
```

**Prompt D: Portfolio, services, about, process, contact**

```
Build the Portfolio page with filter chips (All, Residential, Commercial, 3D Renders, Scale Models, Interiors) and project detail pages with a lightbox gallery. Build Services, About, Process and Contact pages. Contact uses the WhatsApp message builder, tel: and mailto links only (Section 8.3). No backend.
```

**Prompt E: SEO, performance, QA**

```
Add metadata, Open Graph tags, sitemap and robots (static), LocalBusiness JSON-LD, a custom 404, and an optional Google Analytics snippet the owner can paste in. Optimise images, audit Lighthouse mobile and accessibility, fix issues, then list every remaining [ADD] and [CONFIRM] placeholder so the owner can supply them. Write a README with how to edit /content, add a project, replace the hero video, and deploy to a static host.
```

---

## 15. What the Owner Must Still Provide

- [ ] **Hero video** (MP4, 12 to 25 seconds, no audio), or approval to build one from the cleared images
- [ ] **Transparent logo** (PNG or SVG) and a white version if possible
- [ ] **Confirmed email address** (the vest mock-up spelling looks wrong)
- [ ] **Decision on the seven watermarked images** (own work, permission, or remove)
- [ ] **Confirmation that the three unwatermarked renders and the scale models are AMB's own work**
- [ ] Project names, locations, year, size and short descriptions for each cleared project
- [ ] Office address, working hours and map location
- [ ] Links for Instagram, Facebook, TikTok, Pinterest (and WhatsApp number confirmation)
- [ ] Real numbers for the stats bar (projects, years, and so on)
- [ ] Team photos and bios, and client testimonials with permission
- [ ] 3 to 5 screenshots of mshelhomes.com (desktop and mobile) so the agent can match the pattern closely
- [ ] Domain name and hosting choice
