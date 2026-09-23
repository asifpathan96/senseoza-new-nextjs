import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ContactCTA } from "@/components/home/contact-cta";
import { BlogCard } from "@/components/pages/blog-card";
import { BlogMedia } from "@/components/pages/blog-media";
import { BlogShare } from "@/components/pages/blog-share";
import { getBlogPost, getBlogSlugs, liveBlogPosts } from "@/data/live-blog";
import { formatDate } from "@/lib/utils";
import { generateSEO, siteConfig } from "@/lib/seo";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return generateSEO({ title: "Blog", path: "/blog" });
  return generateSEO({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.image,
    keywords: [post.category, "Senseoza blog"],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = liveBlogPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => {
      const sameCategory = Number(b.category === post.category) - Number(a.category === post.category);
      if (sameCategory !== 0) return sameCategory;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, 3);

  const [lead, ...body] = post.paragraphs;
  const quoteAfter = Math.min(1, body.length - 1);

  return (
    <div className="page-ambient">
      <section className="relative overflow-hidden bg-[#0D0D1A] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="hero-mesh" />
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-purple" />
          <div className="hero-orb hero-orb-teal" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All articles
            </Link>
          </div>
          <p className="section-kicker mt-8">{post.category}</p>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <span>{post.author}</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readTime}</span>
          </div>
          <BlogMedia
            src={post.image}
            alt={post.imageAlt}
            sizes="(min-width: 768px) 48rem, 100vw"
            priority
            className="mt-10 aspect-[16/9] rounded-2xl border border-white/10"
          />
        </div>
      </section>

      <article className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-2xl">
          {lead && (
            <p className="font-heading text-xl leading-relaxed text-heading sm:text-2xl">{lead}</p>
          )}

          <figure className="my-10">
            <BlogMedia
              src={post.figure}
              alt={post.figureAlt}
              sizes="(min-width: 768px) 42rem, 100vw"
              className="aspect-[16/10] rounded-2xl border border-border"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-muted">
              {post.figureCaption}
            </figcaption>
          </figure>

          <div className="mt-10 space-y-6 text-base leading-[1.8] text-muted sm:text-lg">
            {body.map((paragraph, index) => (
              <div key={paragraph.slice(0, 48)}>
                <p>{paragraph}</p>
                {post.quote && index === quoteAfter && (
                  <blockquote className="my-10 border-l-4 border-primary pl-5 font-heading text-xl leading-snug text-heading sm:text-2xl">
                    {post.quote}
                  </blockquote>
                )}
              </div>
            ))}
            {post.quote && body.length === 0 && (
              <blockquote className="border-l-4 border-primary pl-5 font-heading text-xl leading-snug text-heading">
                {post.quote}
              </blockquote>
            )}
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-sm font-semibold text-heading">Share this insight</p>
            <div className="mt-4">
              <BlogShare url={`${siteConfig.url}/blog/${post.slug}`} />
            </div>
          </div>
        </div>
      </article>

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="section-kicker">Keep reading</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-heading">
            Related notes from the journal
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
