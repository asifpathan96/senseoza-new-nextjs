export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: { name: string; role: string; avatar: string; bio: string };
  publishedAt: string;
  image: string;
  tags: string[];
};

export const blogCategories = [
  "Digital Marketing",
  "SEO",
  "Web Development",
  "AI & Automation",
  "Branding",
  "Social Media",
];

const authors = {
  priya: {
    name: "Priya Sharma",
    role: "Head of Strategy",
    avatar: "/team/priya.jpg",
    bio: "Priya leads growth strategy at Senseoza with 10+ years in performance marketing and SEO.",
  },
  arjun: {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    avatar: "/team/arjun.jpg",
    bio: "Arjun founded Senseoza to bring enterprise-grade digital marketing to ambitious businesses.",
  },
  rahul: {
    name: "Rahul Verma",
    role: "Creative Director",
    avatar: "/team/rahul.jpg",
    bio: "Rahul crafts premium brand experiences that convert across web, social, and print.",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-powered-seo-strategies-2026",
    title: "AI-Powered SEO Strategies That Actually Work in 2026",
    excerpt:
      "Discover how leading brands combine AI tools with human expertise to dominate search rankings without sacrificing quality.",
    category: "SEO",
    author: authors.priya,
    publishedAt: "2026-07-15",
    image: "/blog/ai-seo.jpg",
    tags: ["SEO", "AI", "Content Strategy"],
    content: `Search engine optimization has entered a new era. AI tools can generate content at scale, analyze competitor gaps in minutes, and predict ranking opportunities—but the brands winning in 2026 aren't replacing strategists with algorithms. They're amplifying human expertise with intelligent tooling.

## The Hybrid SEO Model

The most effective SEO programs in 2026 follow a hybrid model: AI handles research, clustering, and draft generation while experienced strategists refine intent mapping, E-E-A-T signals, and brand voice. This combination delivers 3x more content velocity without the quality penalties that pure AI content farms face.

## Technical Foundations Still Matter

Google's Core Web Vitals, structured data, and crawl efficiency remain non-negotiable. AI can't fix a site that loads in 8 seconds or lacks proper schema markup. Start with technical audits, then layer AI-enhanced content on a solid foundation.

## Content Clusters Over Keyword Stuffing

Modern SEO is about topical authority. Use AI to map semantic clusters around your core offerings, then build comprehensive hub pages with supporting articles that interlink strategically. This approach signals expertise to both users and search engines.

## Local SEO at Scale

For multi-location businesses, AI-powered local page generation—with human review for accuracy—allows you to dominate geo-specific searches without manual page creation bottlenecks.

## Measuring What Matters

Track organic revenue, not just rankings. Connect Google Analytics 4 with your CRM to understand which keywords and pages actually drive qualified leads and closed deals.

## Key Takeaways

- Use AI for speed; use humans for strategy and quality control
- Invest in technical SEO before scaling content
- Build topical clusters, not isolated keyword pages
- Measure revenue impact, not vanity metrics`,
  },
  {
    slug: "conversion-focused-landing-pages",
    title: "The Anatomy of a High-Converting Landing Page",
    excerpt:
      "Every element on your landing page should earn its place. Here's the proven framework we use for 40%+ conversion rates.",
    category: "Web Development",
    author: authors.rahul,
    publishedAt: "2026-07-08",
    image: "/blog/landing-pages.jpg",
    tags: ["CRO", "Landing Pages", "Design"],
    content: `A landing page has one job: convert visitors into leads or customers. Yet most landing pages fail because they try to do too much—multiple CTAs, navigation menus, and generic copy that speaks to everyone and resonates with no one.

## Above the Fold: Clarity Wins

Your headline should communicate the core value proposition in under 10 words. The subheadline expands with specificity. One primary CTA—no distractions. Hero images should reinforce the message, not decorate the page.

## Social Proof Placement

Testimonials, client logos, and case study snippets belong above the fold and repeated near every CTA. Trust signals reduce friction at decision points.

## The Problem-Agitate-Solution Framework

Start by naming the visitor's pain point. Agitate it with consequences of inaction. Then present your solution as the clear path forward. This narrative structure outperforms feature lists consistently.

## Mobile-First Design

Over 70% of landing page traffic is mobile. Design for thumb-friendly CTAs, readable font sizes, and fast load times. Test on actual devices, not just browser responsive modes.

## Speed Is a Conversion Factor

Every second of load time costs conversions. Optimize images, minimize JavaScript, and aim for Largest Contentful Paint under 2.5 seconds.

## A/B Testing Culture

Launch with a hypothesis, test one variable at a time, and iterate based on data. The best landing pages are never "done"—they're continuously optimized.`,
  },
  {
    slug: "meta-ads-roas-optimization",
    title: "How We Achieve 5x ROAS on Meta Ads for E-commerce Clients",
    excerpt:
      "Our performance marketing team shares the campaign structures, creative frameworks, and optimization loops behind consistent Meta Ads success.",
    category: "Digital Marketing",
    author: authors.priya,
    publishedAt: "2026-06-28",
    image: "/blog/meta-ads.jpg",
    tags: ["Meta Ads", "Performance Marketing", "E-commerce"],
    content: `Meta Ads remain one of the most powerful channels for e-commerce growth—when structured correctly. Here's the framework our team uses to consistently deliver 5x+ return on ad spend.

## Campaign Architecture

We separate campaigns by funnel stage: prospecting (broad and interest-based), retargeting (website visitors, engagers), and retention (past purchasers). Each stage gets dedicated budget and creative tailored to intent level.

## Creative Testing Velocity

The algorithm rewards fresh creative. We produce 15–20 ad variants monthly per client, testing hooks, formats (static, carousel, video, UGC), and offers. Winners get scaled; losers get killed fast.

## Audience Strategy

Start broad with Advantage+ campaigns, then build custom audiences from your best customers. Lookalike audiences based on high-LTV purchasers outperform interest targeting for most e-commerce brands.

## Landing Page Alignment

Ad-to-page message match is critical. If your ad promises 30% off, the landing page headline should confirm it immediately. Mismatch kills conversion rates and increases costs.

## Conversion API Setup

Server-side tracking via Meta's Conversion API recovers 20–30% of events lost to iOS privacy changes. This data fuels better optimization and reporting accuracy.

## Weekly Optimization Ritual

Every week: review cost per purchase by ad set, pause underperformers, reallocate budget to winners, and launch new creative tests. Consistency compounds results.`,
  },
  {
    slug: "brand-identity-startup-guide",
    title: "Building a Premium Brand Identity on a Startup Budget",
    excerpt:
      "You don't need a Fortune 500 budget to look like one. Strategic brand decisions that maximize impact with limited resources.",
    category: "Branding",
    author: authors.rahul,
    publishedAt: "2026-06-20",
    image: "/blog/branding.jpg",
    tags: ["Branding", "Startups", "Design"],
    content: `Premium brand perception isn't about spending more—it's about making deliberate choices that signal quality at every touchpoint.

## Start With Strategy, Not Aesthetics

Before choosing colors or fonts, define your brand positioning: Who are you for? What do you stand for? How are you different? Strategy informs every design decision.

## Invest in Logo and Typography

Your logo and type system appear everywhere. These two elements deserve the majority of your brand budget. A strong wordmark with a refined type pairing can feel premium without complex illustration.

## Consistency Over Complexity

A simple brand applied consistently beats a complex brand applied inconsistently. Create a one-page brand guide covering logo usage, colors, typography, and tone of voice—then enforce it ruthlessly.

## Photography and Imagery

Custom photography elevates perception instantly. If budget is tight, invest in one professional shoot for hero images, then supplement with carefully curated stock that matches your color palette and mood.

## Digital-First Deliverables

Prioritize assets for where customers actually see you: website, social profiles, email templates, and pitch decks. Print collateral can come later.

## Evolve Intentionally

Brand identity isn't static. Plan quarterly reviews to assess what's working and refine based on market feedback—without losing core recognition elements.`,
  },
  {
    slug: "whatsapp-marketing-india-guide",
    title: "WhatsApp Marketing in India: Complete Playbook for 2026",
    excerpt:
      "With 500M+ users in India, WhatsApp is the highest-engagement marketing channel. Here's how to use it compliantly and effectively.",
    category: "Digital Marketing",
    author: authors.arjun,
    publishedAt: "2026-06-12",
    image: "/blog/whatsapp.jpg",
    tags: ["WhatsApp", "Marketing Automation", "India"],
    content: `WhatsApp isn't just a messaging app in India—it's the primary communication channel for businesses and consumers alike. Open rates exceed 90%, making it the most efficient direct marketing channel available.

## WhatsApp Business API vs. App

The free WhatsApp Business app works for small operations. For marketing at scale—with automation, broadcasts, and CRM integration—the Business API is essential. We help clients set up API access through approved providers.

## Compliance First

India's TRAI regulations and WhatsApp's commerce policies require explicit opt-in before messaging. Build opt-in flows on your website, during checkout, and via QR codes. Never purchase contact lists.

## Message Types That Convert

- Order confirmations and shipping updates (utility messages)
- Abandoned cart reminders with product images
- Exclusive offers for opted-in subscribers
- Customer support with quick reply buttons

## Automation Workflows

Connect WhatsApp to your CRM and e-commerce platform. Trigger messages based on customer actions: welcome sequences for new subscribers, re-engagement for inactive customers, feedback requests post-purchase.

## Measuring Success

Track delivery rates, read rates, click-through rates, and conversion attribution. Compare WhatsApp campaign ROI against email and SMS to optimize channel mix.

## Integration With Other Channels

WhatsApp works best as part of an omnichannel strategy. Use it alongside email nurture sequences, retargeting ads, and SMS for time-sensitive alerts.`,
  },
  {
    slug: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization: A Practical Guide",
    excerpt:
      "How we consistently achieve 95+ PageSpeed scores on client websites built with Next.js App Router.",
    category: "Web Development",
    author: authors.arjun,
    publishedAt: "2026-06-05",
    image: "/blog/nextjs.jpg",
    tags: ["Next.js", "Performance", "Web Development"],
    content: `Performance isn't a nice-to-have—it's a ranking factor, a conversion factor, and a brand perception factor. Here's how we optimize Next.js sites for elite performance scores.

## Image Optimization

Use next/image for automatic WebP/AVIF conversion, lazy loading, and responsive sizing. Define explicit width and height to prevent layout shift. For hero images, use priority loading.

## Font Loading Strategy

Use next/font to self-host Google Fonts with zero layout shift. Subset fonts to only include needed characters. Limit to 2 font families maximum.

## Code Splitting and Dynamic Imports

Lazy load below-the-fold components, modals, and heavy libraries. Use dynamic imports with loading states for components that aren't immediately visible.

## Server Components by Default

Leverage React Server Components to reduce client-side JavaScript. Reserve "use client" for interactive elements only.

## Third-Party Script Management

Load analytics and chat widgets after page interaction using next/script with strategy="lazyOnload". Every third-party script is a performance tax.

## Caching and CDN

Configure proper cache headers. Use ISR (Incremental Static Regeneration) for content that updates periodically. Deploy on edge networks for global latency reduction.

## Monitoring

Set up Core Web Vitals monitoring in Google Search Console and real-user monitoring tools. Performance regressions should trigger alerts, not discoveries during audits.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}
