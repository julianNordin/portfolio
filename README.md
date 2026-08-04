# Julian Nordin — Portfolio

Personal portfolio site for Julian Nordin, Computer Engineer (B.Sc., Mid Sweden University) focused on AI/ML, backend development, and databases. Built with Astro, React, and Tailwind CSS, based on the [Astro Portfolio template](https://github.com/Gothsec/Astro-portfolio) by Oscar Hernandez.

## Sections

- **Home** — intro, social links, tech stack marquee, and a "What I do" skills breakdown.
- **Projects** — links to all 6 public repositories: the federated learning thesis, restaurant order management system, MOTH surveillance system, the Maze++ C++/SFML game, C++ data structures & algorithms, and the PHP Q&A forum.
- **Contact** — location, email, and a contact form.

## Stack

Astro · React · TypeScript · Tailwind CSS

## Before you deploy — required setup

1. **Contact form**: create your own free form at [Formspree](https://formspree.io/) and replace the placeholder `action` URL in `src/components/contact.astro` (search for `YOUR_FORM_ID`).
2. **Domain**: once deployed, update the canonical URL and Open Graph `og:*` tags in `src/layouts/Layout.astro` (currently placeholder `julian-nordin.vercel.app` values) to your real domain.
3. Regenerate the lockfile on first install (see below) — it was removed since dependencies changed from the original template (Firebase and the like-counter feature were removed).

## Local development

### Prerequisites
- Node.js v20+
- pnpm v9+ (`npm i -g pnpm`)

```bash
git clone https://github.com/julianNordin/portfolio
cd portfolio
pnpm install
pnpm dev
```

## Deployment

Built with Astro — deploys cleanly to Vercel, Netlify, or GitHub Pages. Push to GitHub and import the repo directly into [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) for the simplest setup.

## Project structure

```text
public/
├── svg/          Tech stack logos
└── projects/     Project card graphics
src/
├── components/
│   ├── contact.astro
│   ├── footer.astro
│   ├── home.astro
│   ├── logoWall.astro
│   ├── nav.astro
│   └── projects.astro
├── layouts/
│   └── Layout.astro
├── React/
│   ├── LetterGlitch.tsx
│   └── SkillsList.tsx
└── pages/
    └── index.astro
```

## Credits & license

This project is built on the [Astro Portfolio template](https://github.com/Gothsec/Astro-portfolio), licensed under the [MIT License](https://opensource.org/licenses/mit). Per the license terms, the original copyright notice is retained: Copyright © 2026 Oscar Hernandez.
