# Agent Notes

## Project Summary

This project is a small React + Vite single-page portfolio site.

- Runtime: React 19 + Vite 8
- Entry point: `src/main.jsx`
- Main UI implementation: `src/App.jsx`
- Global styling: `src/index.css`
- App/section styling: `src/App.css`
- Static assets: `src/assets/`

There is no router, no backend integration, no data fetching, and no client state beyond rendering static content.

## Current Goal

The goal is to make this website match the layout and overall presentation of the reference site as closely as practical while replacing its content with Adam Abbadusky's information.

- Reference site: `https://andrewodom.net/`
- Local live preview during development: `http://localhost:5173/`
- Production site: `https://www.adamabbadusky.com/`

Important working context:

- This matching effort has already been started but is not finished.
- Future work should continue from the current partial implementation instead of restarting the design from scratch.
- Changes should be made incrementally, one step at a time, so each edit can be checked live after saving.

## Current Architecture

The app is intentionally simple and mostly flat:

1. `src/main.jsx` mounts `<App />` inside `#root` using `createRoot`.
2. `src/App.jsx` defines the entire page.
3. The top nav uses hash links (`#about`, `#experience`, `#projects`, `#skills`, `#contact`) that scroll to sections in the same page.
4. Styling is split between:
   - `src/index.css` for global page defaults, background, typography base, and scroll behavior
   - `src/App.css` for layout and component-level styles

## Content Organization

`src/App.jsx` mixes two kinds of content:

- Structured data arrays rendered with `.map()`:
  - `experienceItems`
  - `skillGroups`
- Direct hardcoded JSX blocks:
  - hero
  - about
  - projects
  - contact

That means future edits usually fall into one of two buckets:

- Update an array item when changing experience or skills
- Edit JSX directly when changing hero copy, about text, project cards, or contact details

## Section Map

The page is composed in this order:

1. Fixed top navigation
2. Hero header
3. About
4. Experience
5. Projects
6. Skills
7. Contact

The nav anchors depend on matching `id` attributes on those sections. If a section ID changes, the corresponding nav link must change too.

## Asset Handling

Assets are imported from `src/assets/` at the top of `src/App.jsx`.

Patterns currently in use:

- Images imported as standard module assets
- Video imported as a standard asset
- The C++ executable imported with `?url` so Vite returns a file URL for download

If adding new media to a project card, keep using Vite asset imports instead of hardcoded relative strings.

## Styling Conventions

The site uses plain CSS classes, not CSS modules or a component library.

Important styling patterns:

- dark theme with gradient background from `src/index.css`
- card-based layout for experience, projects, skills, and contact
- reusable button/link styling through `.project-link-button`
- responsive adjustments are minimal and currently handled by one mobile breakpoint in `src/App.css`

When changing layout or visual tone:

- prefer extending existing class patterns over adding one-off styles
- keep card spacing, border radius, and border colors visually consistent
- check the fixed nav spacing against the top page padding so content does not hide under the header

## Practical Change Guidance

For routine work on this project:

- Use `src/App.jsx` for content and structure changes
- Use `src/App.css` for section layout, cards, grids, and button styling
- Use `src/index.css` for global typography, page background, and browser-wide defaults
- Use `index.html` only for document-level metadata such as title, favicon, and viewport settings

## Likely Refactor Boundary

If the site grows, the first clean refactor is to split `src/App.jsx` into components such as:

- `components/Nav`
- `components/Hero`
- `components/ExperienceSection`
- `components/ProjectsSection`
- `components/SkillsSection`
- `components/ContactSection`

For now, that refactor is optional. The current app is small enough that a single file is still manageable.

## Commands

Run from the project root: `adam-portfolio/`

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

## Important Constraints

- This is a static single-page portfolio, so avoid introducing routing or unnecessary state unless the feature clearly requires it.
- Keep section IDs stable because the navigation depends on them.
- Keep imports at the top of `src/App.jsx` organized because all media dependencies currently enter through that file.
- Preserve Vite-compatible asset imports when adding downloadable files or screenshots.
