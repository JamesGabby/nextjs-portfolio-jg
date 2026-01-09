import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CalendarIcon, ArrowRight } from "lucide-react";

interface PostCardProps {
  post: BlogPost;
  className?: string;
}

export function PostCard({ post, className }: PostCardProps) {
  // Format date nicely (e.g., "Jan 09, 2026")
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link 
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <article className="space-y-4">
        {/* Header: Date & Tags */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
        </div>

        {/* Content: Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary group-hover:underline decoration-2 underline-offset-4 transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground line-clamp-3">
            {post.description}
          </p>
        </div>

        {/* Footer: Tags & Author */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex gap-2">
            {post.tags?.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 text-primary" />
        </div>
      </article>
    </Link>
  );
}