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
