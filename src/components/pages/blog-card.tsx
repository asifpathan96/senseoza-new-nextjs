import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LiveBlogPost } from "@/data/live-blog";
import { BlogMedia } from "@/components/pages/blog-media";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function BlogCard({
  post,
  className,
}: {
  post: LiveBlogPost;
  className?: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:border-primary",
        className,
      )}
    >
      <BlogMedia
        src={post.image}
        alt={post.imageAlt}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[16/10]"
      />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <p className="section-kicker">{post.category}</p>
          {post.featured && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Featured
            </span>
          )}
        </div>
        <h3 className="mt-4 font-heading text-xl font-semibold leading-snug tracking-tight text-heading transition duration-300 group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between gap-3 text-xs text-muted">
          <span>
            {formatDate(post.publishedAt)} · {post.readTime}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-heading transition group-hover:text-primary">
            Read
            <ArrowUpRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
