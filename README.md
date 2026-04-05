# RJ Molene Socias — Portfolio (React + Vite)

## Scripts

- `npm install` — install dependencies  
- `npm run dev` — local dev server (usually http://localhost:5173)  
- `npm run build` — production build to `dist/`  
- `npm run preview` — preview the production build  

## Project layout

| Path | Purpose |
|------|---------|
| `public/images/` | Project and profile images (served at `/images/...`) |
| `public/icons/` | Social SVG icons (served at `/icons/...`) |
| `src/App.jsx` | Page shell: layout + modal state |
| `src/components/` | UI sections (Navbar, HomeSection, Projects, …) |
| `src/data/` | `projects.js`, `socialLinks.js` — edit copy and URLs here |
| `src/hooks/` | Nav shadow + smooth-scroll fallback |
| `src/styles/index.css` | Global styles (same design tokens as before) |
| `legacy-static/` | Previous single-file HTML/CSS backup |

## Deploy (e.g. Vercel)

Build command: `npm run build`  
Output directory: `dist`
