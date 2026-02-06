# yreh.studio

Solo software studio portfolio — build, ship, repeat.

## Tech Stack

- [Astro](https://astro.build/) — Static site generator
- Vanilla CSS with CSS custom properties
- Google Fonts (Instrument Serif, DM Mono)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Astro components
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Philosophy.astro
│   ├── ProjectGrid.astro
│   ├── ProjectCard.astro
│   ├── Principles.astro
│   ├── Contact.astro
│   └── Footer.astro
├── data/             # JSON content
│   ├── content.json  # Site copy, SEO, nav
│   ├── projects.json # Project cards
│   └── principles.json
├── layouts/
│   └── Base.astro    # HTML wrapper, meta tags
├── pages/
│   └── index.astro   # Main page
└── styles/
    ├── global.css    # Variables, base styles
    └── animations.css
public/
├── favicon.svg
├── og-image.png      # Social sharing image
├── robots.txt
└── [project logos]
```

## Content Updates

All content lives in `src/data/`:

- **projects.json** — Add/edit projects (name, tag, description, url, mrr, logo)
- **principles.json** — Edit principles
- **content.json** — Site copy, SEO metadata, nav links, footer

## Deployment

Static output, deploy anywhere:

```bash
npm run build
# Output in dist/
```

Works with Vercel, Netlify, Cloudflare Pages, etc.

## License

MIT
