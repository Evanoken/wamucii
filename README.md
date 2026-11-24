# Lydiah Wamucii Mwanu — Portfolio

Personal tech portfolio built with **React 18, TypeScript, Vite and Three.js** — an animated orbital background (Earth, starfield and a satellite) behind a single-page resume site.

**Live:** https://evanoken.github.io/wamucii/

## Stack

- React 18 + TypeScript, bundled with Vite
- Three.js for the 3D background (`src/components/Background3D.tsx`)
- Custom hooks: typewriter effect, scroll-reveal (IntersectionObserver), scroll progress
- Respects `prefers-reduced-motion`

## Structure

```
src/
  main.tsx              entry
  App.tsx               page layout
  data.ts               profile + journey content
  index.css             design system & styles
  hooks/index.ts        useTypewriter, useReveal, useScrollProgress
  components/           Nav, Hero, About, Experience, Skills, Contact,
                        Background3D, Reveal
```

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the app and publishes `dist/` to the `gh-pages` branch (served by GitHub Pages). On Vercel, import the repo and it builds with zero config.
