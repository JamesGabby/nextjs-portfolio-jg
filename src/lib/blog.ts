import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { BlogPostSchema, type BlogPost } from "./types";

// 1. Define where the content lives
const POSTS_PATH = path.join(process.cwd(), "content/blog");

// 2. Read a single file by slug
export const getPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    // 3. Validate metadata using Zod (Ensures Type Safety)
    const parsedData = BlogPostSchema.safeParse({
      ...data,
      slug,
      content,
    });

    if (!parsedData.success) {
      console.error(`Error parsing post ${slug}:`, parsedData.error);
      return null;
    }

    return parsedData.data;
  } catch (error) {
    return null;
  }
});

// 4. Get all posts (Sorted & Filtered)
export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  try {
    const files = await fs.readdir(POSTS_PATH);
    
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const slug = file.replace(/\.mdx$/, "");
          return await getPostBySlug(slug);
        })
    );

    // Filter out nulls (failed parsing) and unpublished posts
    const validPosts = posts
      .filter((post): post is BlogPost => post !== null && post.published)
      // Sort by date descending (newest first)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return validPosts;
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return [];
  }
});