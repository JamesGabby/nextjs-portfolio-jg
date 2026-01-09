import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/post-card";

export const metadata = {
  title: "Blog | James Gabbitus",
  description: "Thoughts on engineering, performance, and design.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className="container max-w-5xl mx-auto py-12 px-4 md:px-6 pt-38 sm:pt-40 pb-28 sm:pb-30">
      {/* Header Section */}
      <div className="mb-12 space-y-4 text-center md:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explorations in software engineering. Focusing on performance patterns, 
          server-side architecture, and UX design.
        </p>
      </div>

      {/* Grid Layout */}
      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No posts found.</p>
      )}
    </div>
  );
}