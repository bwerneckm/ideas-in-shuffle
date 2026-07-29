import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    tag: z.enum(['Fintech', 'AI', 'Business', 'Endurance']),
    lang: z.enum(['en', 'pt']).default('en'),
    excerpt: z.string().optional(),
    cover: z.enum(['darlington', 'beeswax', 'grenadine', 'cafelatte', 'seafoam', 'bone']).default('darlington'),
    translationSlug: z.string().optional(),
    readMinutes: z.number().optional(),
  }),
});

export const collections = { posts };
