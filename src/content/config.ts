// src/content/config.ts
import { defineCollection, z } from "astro:content";

// Definimos la colección "blog"
const blogCollection = defineCollection({
    type: "content", // "content" para Markdown/MDX
    schema: z.object({
        title: z.string(),       // título obligatorio
        date: z.date(),          // fecha obligatoria
        author: z.string().optional(),
        description: z.string().optional(),
        keywords: z.array(z.string()),
        category: z.string().optional()
    }),
});

// Exportamos todas las colecciones
export const collections = {
    blog: blogCollection,
};

