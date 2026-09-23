"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { LiveBlogPost } from "@/data/live-blog";
import { BlogCard } from "@/components/pages/blog-card";
import { BlogMedia } from "@/components/pages/blog-media";
import { easeOut } from "@/components/home/motion-effects";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function BlogIndex({ posts }: { posts: LiveBlogPost[] }) {
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
  }, [posts]);

  const [active, setActive] = useState("All");
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const filtered = posts.filter((post) => active === "All" || post.category === active);
  const spotlight = active === "All" ? featured : filtered[0];
  const rest = filtered.filter((post) => post.slug !== spotlight?.slug);
  const side = rest.slice(0, 2);
  const grid = rest.slice(2);

  if (!spotlight) return null;

  return (
    <section id="articles" className="section-pad relative scroll-mt-28">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="section-kicker">The journal</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
              What we are seeing in the market this week
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition",
                  active === category
                    ? "border-primary bg-primary text-[#0D0D1A]"
                    : "border-border bg-card text-heading hover:border-primary",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "mt-12 grid gap-10",
            side.length > 0 && "lg:grid-cols-[1.2fr_0.8fr] lg:gap-14",
          )}
        >
          <motion.article
            key={spotlight.slug}
            initial={{ opacity: 0, x: -24, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: easeOut }}
            style={{ transformOrigin: "left center" }}
            className="fold-card"
          >
            <Link href={`/blog/${spotlight.slug}`} className="group block">
              <BlogMedia
                src={spotlight.image}
                alt={spotlight.imageAlt}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="mb-6 aspect-[16/10] rounded-2xl"
              />
              <p className="section-kicker">{spotlight.category}</p>
              <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-heading transition duration-300 group-hover:text-primary sm:text-4xl lg:text-5xl">
                {spotlight.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{spotlight.excerpt}</p>
              <p className="mt-6 text-sm text-muted">
                {spotlight.author} · {formatDate(spotlight.publishedAt)} · {spotlight.readTime}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-heading transition group-hover:text-primary">
                Read article
                <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </motion.article>

          {side.length > 0 && (
          <div className="divide-y divide-border border-y border-border">
            {side.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: easeOut }}
                className="py-6 first:pt-6 last:pb-6"
              >
                <Link href={`/blog/${post.slug}`} className="group flex gap-4">
                  <BlogMedia
                    src={post.image}
                    alt={post.imageAlt}
                    sizes="160px"
                    className="h-24 w-28 shrink-0 rounded-xl sm:h-28 sm:w-36"
                  />
                  <div className="min-w-0">
                    <p className="section-kicker">{post.category}</p>
                    <h3 className="mt-2 font-heading text-lg font-semibold leading-snug tracking-tight text-heading transition group-hover:text-primary sm:text-xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                    <p className="mt-3 text-xs text-muted">
                      {formatDate(post.publishedAt)} · {post.readTime}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          )}
        </div>

        {grid.length > 0 && (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.45, ease: easeOut }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
