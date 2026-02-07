# Pedals & Gears

Website for **Pedals & Gears** — Hero & Firefox cycle dealer in Sector 104, Noida.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React** (icons)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start dev server         |
| `npm run build` | Production build      |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint             |

## Features

- Bilingual (English / Hindi) via in-app toggle
- Responsive layout with mobile menu
- Per-route SEO metadata and Open Graph
- Sitemap and `robots.txt` for search engines
- Skip-to-main-content link for accessibility
- Animated sections and smooth scrolling

## Project structure

- `src/app/` — Routes and layouts (home, about, products, services, gallery, contact)
- `src/components/` — UI: layout (Header, Footer, AppShell), home sections, shared UI
- `src/i18n/` — Translation context and EN/HI strings
- `src/lib/` — Constants (store info, nav), image config.
