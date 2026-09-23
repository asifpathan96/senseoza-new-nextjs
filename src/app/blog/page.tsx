import { PageHero } from "@/components/pages/page-hero";
import { BlogIndex } from "@/components/pages/blog-index";
import { ContactCTA } from "@/components/home/contact-cta";
import { liveBlogPosts } from "@/data/live-blog";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Digital Marketing Blog",
  description:
    "Stay ahead of digital trends with insights on SEO, AI, content, and social media. Learn from our experts and grow smarter with Senseoza.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="page-ambient">
      <PageHero
        label="Marketing journal"
        title="Clear thinking on growth, search, and AI"
        description="Field notes from campaigns in Pune and beyond—SEO, AEO, GEO, ads, and content, written for teams who measure pipeline, not vanity metrics."
        primaryCta="Get Started"
        secondaryCta="Browse articles"
        secondaryHref="#articles"
      />

      <BlogIndex posts={liveBlogPosts} />

      <ContactCTA />
    </div>
  );
}
