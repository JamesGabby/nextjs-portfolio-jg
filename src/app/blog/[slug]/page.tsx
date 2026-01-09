import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/blog/mdx-components";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// 1. Generate SEO Metadata for each post
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | James Gabbitus`,
    description: post.description,
  };
}

// 2. Pre-render all posts at build time (SSG)
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="container max-w-3xl mx-auto py-12 px-4 md:px-6 pt-38 sm:pt-40">
      <Link href="/blog" className="inline-flex items-center text-sm mb-8 text-muted-foreground hover:text-primary">
        <ChevronLeft className="mr-1 h-4 w-4" /> Back to blog
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">{post.title}</h1>
        <p className="text-xl text-muted-foreground">{post.description}</p>
      </header>

      {/* RENDER MDX HERE */}
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}