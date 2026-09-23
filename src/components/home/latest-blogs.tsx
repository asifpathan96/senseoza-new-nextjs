"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPreviewContent } from "@/data/homepage";
import { liveBlogPosts } from "@/data/live-blog";
import { BlogMedia } from "@/components/pages/blog-media";
import { easeOut, viewOnce } from "@/components/home/motion-effects";
import { formatDate } from "@/lib/utils";

export function LatestBlogs() {
  const posts = liveBlogPosts.slice(0, 3);
  const [featured, ...rest] = posts;

  return (
    <section id="blog" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewOnce}
              className="section-kicker"
            >
              {blogPreviewContent.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewOnce}
              className="mt-3 font-heading text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
            >
              {blogPreviewContent.title}
            </motion.h2>
          </div>
          <Link
            href="/blog"
            className="hidden text-sm font-semibold text-heading underline-offset-4 hover:underline sm:inline"
          >
            All articles
          </Link>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewOnce}
            transition={{ duration: 0.75, ease: easeOut }}
            className="group"
          >
            <Link href={`/blog/${featured.slug}`} className="block">
              <BlogMedia
                src={featured.image}
                alt={featured.imageAlt}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="aspect-[16/10] rounded-2xl"
              />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {featured.category}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold leading-snug tracking-tight text-heading transition group-hover:text-primary sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-xl text-muted">{featured.excerpt}</p>
              <p className="mt-6 text-xs text-muted">
                {formatDate(featured.publishedAt)} · {featured.readTime}
              </p>
            </Link>
          </motion.article>

          <div className="divide-y divide-border border-y border-border">
            {rest.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewOnce}
                transition={{ delay: index * 0.1, duration: 0.55, ease: easeOut }}
                className="group py-6 first:pt-6 last:pb-6"
              >
                <Link href={`/blog/${post.slug}`} className="flex gap-4">
                  <BlogMedia
                    src={post.image}
                    alt={post.imageAlt}
                    sizes="160px"
                    className="h-24 w-28 shrink-0 rounded-xl sm:h-28 sm:w-36"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {post.category}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight text-heading transition group-hover:text-primary">
                      {post.title}
                      <ArrowUpRight className="ml-1 inline h-4 w-4 shrink-0 align-text-top transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="mt-2 text-xs text-muted">
                      {formatDate(post.publishedAt)} · {post.readTime}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
