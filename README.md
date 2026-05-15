# Sihan Yan Personal Website

This repository is now an Astro + TypeScript + MDX static site for Sihan Yan's portfolio, research direction, writing, CV, and contact information.

## Stack

- Astro
- TypeScript
- MDX
- Astro Content Collections
- GitHub Pages deployment from the `main` branch root

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro, usually `http://localhost:4321`.

## Checks and Build

```bash
npm run check
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`.

## Deploy to GitHub Pages

This repository is configured for GitHub Pages branch deployment from the `main` branch root. Because the source app is Astro, the built files from `dist/` must be copied into the repository root before committing.

Recommended deploy flow:

```bash
npm run build
cp -R dist/. .
git status
git add .
git commit -m "Publish site updates"
git push origin main
```

In GitHub repository settings, Pages should use:

- Source: **Deploy from a branch**
- Branch: `main`
- Folder: `/ (root)`

The root-level generated files such as `index.html`, `cv/index.html`, `_astro/`, and `cv.pdf` are intentionally committed so GitHub Pages can serve the site directly.

## Content Model

Content is managed with Astro Content Collections in `src/content.config.ts`.

### Add a New Project

Create a file:

```text
src/content/projects/new-project.mdx
```

Use this frontmatter shape:

```mdx
---
title: "New Project"
summary: "One clear sentence about the problem, approach, and result."
category: "Engineering"
type:
  - "Full Stack"
time: "Jan 2026 - Mar 2026"
tech:
  - "Python"
  - "SQL"
highlights:
  - "Result or evidence point."
  - "Another concrete outcome."
github: "https://github.com/Ericyan23/example"
featured: true
order: 3
---

## Summary

## Problem

## My Role

## Approach

## Results

## Tech Stack

## Links

## What I Learned
```

The project will automatically appear on `/projects/`, and its detail page will be generated at `/projects/new-project/`. Set `featured: true` to show it on the homepage.

### Add a New Writing Entry

Create a file:

```text
src/content/writing/new-article.mdx
```

The `/writing/` list and `/writing/new-article/` detail page will update automatically.

### Add a New Reading Note

Create a file:

```text
src/content/reading/new-paper-note.mdx
```

The `/reading/` list and `/reading/new-paper-note/` detail page will update automatically.

## Personal Data to Update

Edit `src/data/profile.ts` for email, CV PDF availability, current focus, links, education, and interests.

To enable the CV download:

1. Add `public/cv.pdf`.
2. Set `cvPdfAvailable: true` in `src/data/profile.ts`.
3. Run the deploy flow above so the generated root-level `cv.pdf` is updated.
