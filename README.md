# Sihan Yan Personal Website

This repository is now an Astro + TypeScript + MDX static site for Sihan Yan's portfolio, research direction, writing, CV, and contact information.

## Stack

- Astro
- TypeScript
- MDX
- Astro Content Collections
- GitHub Pages deployment through GitHub Actions

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

The workflow in `.github/workflows/deploy.yml` builds the site and deploys `dist/` to GitHub Pages whenever `main` is pushed.

In GitHub repository settings, set Pages source to **GitHub Actions**.

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

Edit `src/data/profile.ts` for email, CV PDF availability, current focus, links, education, and research interests.

To enable the CV download:

1. Add `public/cv.pdf`.
2. Set `cvPdfAvailable: true` in `src/data/profile.ts`.
