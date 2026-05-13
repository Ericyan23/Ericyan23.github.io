import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectCategories = ["Research", "Engineering", "Data Science"] as const;
const projectLink = z.union([z.url(), z.string().regex(/^\/(?!\/)/)]);

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(projectCategories),
    type: z.array(z.string()),
    time: z.string(),
    tech: z.array(z.string()),
    highlights: z.array(z.string()),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string()
    })).default([]),
    github: projectLink.optional(),
    demo: projectLink.optional(),
    paper: projectLink.optional(),
    featured: z.boolean().default(false),
    order: z.number().optional()
  })
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const reading = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/reading" }),
  schema: z.object({
    title: z.string(),
    paperTitle: z.string(),
    authors: z.array(z.string()).default([]),
    venue: z.string().optional(),
    year: z.number().optional(),
    date: z.coerce.date(),
    area: z.string(),
    summary: z.string(),
    link: z.url().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { projects, writing, reading };
