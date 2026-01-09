import { z } from "zod";

// Define the schema for the frontmatter
export const BlogPostSchema = z.object({
  slug: z.string(), // We will generate this from the filename
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  date: z.string().date(), // Validates YYYY-MM-DD format
  published: z.boolean().default(false),
  author: z.string().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  content: z.string() // The actual markdown body
});

// Derive the TypeScript type from the Zod schema
export type BlogPost = z.infer<typeof BlogPostSchema>;