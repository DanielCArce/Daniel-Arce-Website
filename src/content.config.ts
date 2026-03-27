import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Definimos la colección "blog" usando el Content Layer API
const blogCollection = defineCollection({
    // Eliminamos 'type: "content"' y usamos el loader:
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/blog"
    }),
    schema: z.object({
        title: z.string(),       // título obligatorio
        date: z.date(),          // fecha obligatoria
        author: z.string().optional(),
        description: z.string().optional(),
        keywords: z.array(z.string()),
        category: z.string().optional(),
        slug: z.string()
    }),
});

// Exportamos todas las colecciones
export const collections = {
    blog: blogCollection,
};