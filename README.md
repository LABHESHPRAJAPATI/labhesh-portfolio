# Labhesh Prajapati — Portfolio

A clean, classic, and modern personal developer portfolio built with React 19, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** — UI library
- **Vite 5** — Build tool and dev server
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Scroll reveal animations
- **Lucide React** — Consistent icon set

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/
    animation/   # Reusable animation wrappers
    common/      # Shared helpers (SEO, loading fallback)
    layout/      # Header, vertical nav, scroll indicator
  context/       # Theme provider
  hooks/         # Custom React hooks
  data/          # Content data files
  sections/      # Page sections
  styles/        # Global styles and theme tokens
```

## Content Source

All content is sourced directly from real experience. No fake companies, projects, or experience are included.

## Before Deploying

1. Add your professional photo to `public/images/labesh-prajapati.webp`.
2. Add your resume PDF to `public/resume/labesh-prajapati-resume.pdf`.
3. Update the domain in:
   - `src/data/seo.js`
   - `public/robots.txt`
   - `public/sitemap.xml`
   - `index.html` (if needed)
4. Replace placeholder OG image with a real one at `public/og-image.png` (recommended 1200×630px).
5. Add real project screenshots to `public/images/projects/` if available.

## Accessibility

- Semantic HTML throughout
- WCAG-compliant color contrast
- Keyboard-navigable components
- ARIA labels and live regions
- `prefers-reduced-motion` respected
- Skip-to-content link

## License

© 2026 Labhesh Prajapati. All rights reserved.
