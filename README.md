# IAM Engineer Portfolio (Next.js)

A Next.js 15 (App Router, TypeScript) portfolio for an identity and access management professional.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build
npm start
```

## Customize

- `data/content.ts` – your name, projects, skills, certifications, contact links
- `components/AccessDemo.tsx` – the interactive access-decision demo; edit the `rules` object
- `app/globals.css` – colors are CSS variables at the top (light and dark)
- `app/layout.tsx` – fonts and page metadata

## Deploy

Push to GitHub and import the repo in Vercel, or run `npm run build` on any Node host.
