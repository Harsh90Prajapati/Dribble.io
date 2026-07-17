# Dribbl.ai — React Clone

A React + Vite + Tailwind rebuild of the [dribbl-ai.lovable.app](https://dribbl-ai.lovable.app/) landing page: dark, editorial agency site with an animated hero, services grid, portfolio, process timeline, testimonials, FAQ accordion, and a contact form.

## Stack

- **React 18** + **Vite** — fast dev server, plain JS (no TypeScript) for easy editing
- **Tailwind CSS** — utility-first styling, theme tokens in `tailwind.config.js`
- Zero extra UI libraries — every interactive bit (accordion, marquee, count-up stats, mobile nav) is hand-rolled so there's nothing to fight when you customize it

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

Build for production:

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/       # one component per section (Navbar, Hero, Services, Work, ...)
  data/content.js    # ALL copy + numbers live here — edit this file first
  hooks/
    useInView.js      # IntersectionObserver helper for scroll-triggered reveals
    useCountUp.js      # animates stat numbers from 0 -> target
  App.jsx             # assembles the sections in order
  index.css           # Tailwind entry + a few shared utility classes (.btn-primary, .card, etc.)
```

## Customizing

- **Copy & numbers**: everything (headlines, service list, testimonials, FAQ, stats) lives in `src/data/content.js`. Edit that file and the whole site updates — no need to touch component markup.
- **Colors / fonts**: edit the `theme.extend` block in `tailwind.config.js` (colors: `base`, `ember`, `ink`; fonts: `display` / `sans`). The Google Fonts `<link>` tags are in `index.html`.
- **Images**: the hero orb, project thumbnails, and stat cards are built with CSS gradients/blur so the repo has zero binary assets to swap out blindly. Drop your own images into `src/assets/` and replace the relevant `<div>` with an `<img>` tag once you have real photography/renders.
- **Contact form**: `src/components/Contact.jsx` currently logs to the console on submit. Wire up the `handleSubmit` function to your form backend of choice (Formspree, Resend, a serverless function, etc).

## Deploying

Any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages). For GitHub Pages specifically, set `base: '/your-repo-name/'` in `vite.config.js` before building.

## License

Use it however you like — this is a personal project starter, not a redistribution of the original site's assets or code.
