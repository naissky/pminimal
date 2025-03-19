import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
  }),
});

export const collections = { blog };