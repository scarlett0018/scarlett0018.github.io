# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a static personal portfolio site for Scarlett Xiao, deployed to GitHub Pages at `https://scarlett0018.github.io/`. There is no build step, bundler, or package manager — all files are served directly.

The working site lives in `porfolio/` (note the typo in the directory name — do not rename it without updating the GitHub Pages source setting).

## File structure

```
porfolio/
  index.html          # Single-page site; all sections live here
  styles.css          # All styles; uses CSS custom properties defined in :root
  script.js           # Minimal JS: footer year, nav scroll border, reveal-on-scroll
  robots.txt
  sitemap.xml         # Update lastmod date when content changes
  assets/
    scarlett.jpg
    Scarlett_Xiao_Resume.pdf
```

## Design system

Defined entirely in `styles.css` via CSS custom properties at `:root`:

- **Colors**: `--bg`, `--bg-alt`, `--ink`, `--ink-soft`, `--ink-faint`, `--line`, `--accent` (terracotta `#b4541f`), `--accent-soft`, `--card`
- **Typography**: `--ff-display` (Fraunces, serif) for headings, `--ff-body` (Inter) for body text
- **Layout**: `--maxw: 1080px` container, `--radius: 16px`

## Key page sections

`index.html` is a single HTML file with these sections (nav anchor IDs): `#about`, `#experience`, `#skills`, `#writing`, `#contact`.

Experience entries use `<details>`/`<summary>` for expand/collapse — no JS needed.

Scroll-reveal animations use the `.reveal` class; `script.js` adds `.is-visible` via `IntersectionObserver`.

## SEO considerations

The site has structured data (JSON-LD `Person` schema), Open Graph, Twitter Card meta, canonical URL, sitemap, and robots.txt. When updating content, keep `sitemap.xml`'s `<lastmod>` in sync and verify the canonical URL and OG image URL still point to `https://scarlett0018.github.io/`.

## Deployment

Push to the `main` branch. GitHub Pages serves from `porfolio/` (configured in repo settings). No CI pipeline.
