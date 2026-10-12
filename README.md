# RJ Molene Socias | Personal Portfolio

A responsive personal portfolio for RJ Molene Socias, an Information Technology student at Western Institute of Technology with a focus on back end development, server-side logic, databases, and APIs.

Built with React, Vite, and plain CSS.

## Design and features

- Minimalist palette using `#fefefe` and `#0e0e0e`.
- White home section with an outlined Back End headline and a transparent portrait with softened edges.
- Portrait displayed behind the hero on desktop and within the layout on smaller screens.
- Sticky navigation with links to Home, Projects, About, and Contact.
- Numbered project index with original-color previews and technology tags.
- Project detail modals with contribution summaries and links to live applications or Figma designs.
- About section covering development skills, systems, and tooling.
- Dark contact section with a direct email link and social profiles.
- Responsive layouts for desktop, tablet, and phone screens.

## Featured projects

| Project | Type |
| --- | --- |
| Awesometodos: Task Manager | Web application deployed on Render |
| Mustang Website Design | Figma interface design |
| Music Player Interface | Figma interface design |
| Rest n Buds: Earbuds App Concept | Figma app prototype |
| Personal Portfolio Design | Figma portfolio design |
| Tradetime: Platform Prototype | Figma web prototype |

## Run locally

Install Node.js and npm before running these commands from the project folder.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173`.

## Production build

```sh
npm run build
npm run preview
```

The build is generated in `dist/`. The preview command serves that build locally.

For static hosting, use `npm run build` as the build command and `dist` as the output directory. The current asset paths assume the site is hosted at the domain root.

## Project structure

```text
public/
  icons/                  Social icons
  images/                 Portraits and project previews
src/
  components/             Navigation, page sections, project cards, modal, footer
  data/
    projects.js           Project content and links
    socialLinks.js        Social profiles and icon paths
  hooks/
    useSmoothAnchorFallback.js
  styles/
    index.css             Theme, layout, responsive styles, portrait fade
  App.jsx                 Page composition and project modal state
  main.jsx                React entry point
index.html                HTML entry point and page title
vite.config.js            Vite configuration
```

## Customize the portfolio

| Change | File |
| --- | --- |
| Home headline and introduction | `src/components/HomeSection.jsx` |
| Project order, titles, tags, descriptions, contributions, and links | `src/data/projects.js` |
| About text and skills | `src/components/AboutSection.jsx` |
| Contact email and message | `src/components/ContactSection.jsx` |
| Social profile links | `src/data/socialLinks.js` |
| Colors, button corners, spacing, responsive layout, and portrait fade | `src/styles/index.css` |
| Page title | `index.html` |

Add image files to `public/images/` and reference them as `/images/filename`. The home portrait currently uses `imageportfolio-cutout.png` in both the component and the desktop CSS background; update both references when replacing it.

Each project needs a unique `slug`. To add a source-code button to its detail modal, set its optional `sourceUrl` to the repository URL.

## Contact

- Email: [rjmolenesepidasocias@gmail.com](mailto:rjmolenesepidasocias@gmail.com)
- GitHub: [rjqwer12](https://github.com/rjqwer12)
