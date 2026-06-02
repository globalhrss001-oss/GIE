# Global Infrastructure Engineering (GIE) Website

Public company website for **Global Infrastructure Engineering** — built with [Astro](https://astro.build) and deployed to GitHub Pages.

**Live site:** [https://antthein.github.io/GIE/](https://antthein.github.io/GIE/)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321/GIE/](http://localhost:4321/GIE/)

## Build & Preview

```bash
npm run build
npm run preview
```

## Updating Content

Most site content lives in TypeScript data files — no page rewrites needed:

| File | Contents |
|------|----------|
| `src/data/company.ts` | Company name, tagline, navigation |
| `src/data/services.ts` | 11 engineering services |
| `src/data/industries.ts` | 5 industry sectors |
| `src/data/offices.ts` | Singapore, Malaysia, Myanmar offices |
| `src/data/gallery.ts` | Gallery image list and alt text |

Images are stored in `public/images/`. Source photos remain in `Photos/` (not deployed).

## Deployment

Pushing to the `main` branch triggers GitHub Actions (`.github/workflows/deploy.yml`) to build and deploy automatically.

**GitHub Pages settings:** Source must be set to **GitHub Actions**.

## Custom Domain (Future)

When ready to use `giesg.com`:

1. Add custom domain in GitHub repo **Settings → Pages**
2. Update DNS at Hostgator (CNAME for `www`, A records for apex)
3. In `astro.config.mjs`: set `site: 'https://giesg.com'` and remove `base`

## Contact Form

The contact form is a sample (client-side validation only). To enable real submissions, add a Formspree endpoint in `src/components/ContactForm.astro`.

## Project Structure

```
src/
├── components/   # Reusable UI (Header, Footer, cards, form)
├── data/         # Editable content
├── layouts/      # BaseLayout with SEO meta tags
├── pages/        # Route pages (7 pages)
└── styles/       # Global CSS + Tailwind
public/
└── images/       # Logo and gallery photos
```
