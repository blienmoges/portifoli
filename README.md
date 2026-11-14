# Portfolio

A minimal, clean personal portfolio built with Next.js (App Router), with light/dark mode.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Make it yours

All content lives in **`data/portfolio.ts`** — name, tagline, about, projects, experience, education, skills and social links. Edit that file and the page updates.

- Add a résumé: drop `resume.pdf` into `public/` and set `resumeUrl: "/resume.pdf"`.
- Colors and spacing: CSS variables at the top of `app/globals.css`.

## Deploy

Push to GitHub, then import the repo at https://vercel.com/new — no configuration needed.
