import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    imageAlt: z.string().optional(),
    readTime: z.number(),
    date: z.coerce.date(),
    category: z.enum(["automation", "ai-news", "analytics"]),
    featured: z.boolean().optional().default(false),
    popular: z.boolean().optional().default(false),
  }),
});

export const collections = { articles };
