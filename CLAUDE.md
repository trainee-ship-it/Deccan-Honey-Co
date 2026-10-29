# Hivewild – Learning Project

Fictional honey brand e-commerce frontend, built to learn React and responsive layout.

## Originality rules (always apply)
- A reference website may be used for LAYOUT REFERENCE ONLY (section order, layout
  patterns, responsive behaviour, interactions).
- Never copy its text, logo, images, product names, brand name, colour values, fonts
  or source code. All content and code must be original to Hivewild.
- The site must never be mistakable for the reference site or any real brand.
- When browsing the reference site: no logins, no adding to cart, no form submissions,
  no account creation. Dismiss popups only.

## Stack
- Vite + React (JavaScript, functional components, hooks)
- CSS Modules per component + global tokens in src/styles/tokens.css
- No UI component libraries; icons as hand-written inline SVG components
- Placeholder images: https://placehold.co

## Commands
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview build

## Structure
src/
  components/<Name>/<Name>.jsx + <Name>.module.css
  context/      CartContext.jsx
  data/         products.js, categories.js
  styles/       tokens.css, global.css
  pages/        (added later, with React Router)

## Conventions
- Mobile-first CSS; breakpoints 640 / 768 / 1024 / 1280px
- Use design tokens (CSS variables) — no hard-coded colours or spacing in components
- Semantic HTML, visible focus styles, alt text on all images, keyboard accessible
- Respect prefers-reduced-motion; lazy-load below-the-fold images
- No horizontal scroll from 320px up
- Comment only non-obvious code

## Working style
- I am learning: after each section, explain the key technique in 2–4 sentences.
- Build one section at a time and wait for my OK before moving on.
- Before large changes, outline the plan first.
- Check layouts at 390px, 768px and 1440px before calling a section done.

## Agent skills

### Issue tracker

Issues and specs are tracked as markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Code Review Standards
After completing any implementation, review the code for:
- Functions longer than 30 lines (likely doing too much)
- Logic duplicated more than twice (extract to utility)
- Any `any` type usage in TypeScript (replace with real types)
- Components with more than 3 props that could be grouped into an object
- Missing error handling on async operations

Run /simplify before presenting code to the user.