export type Service = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
};

const categoryMeta: Record<
  string,
  { slug: string; description: string; icon: string }
> = {
  "Web Development": {
    slug: "web-development",
    description:
      "High-performance websites built for speed, SEO, and conversions.",
    icon: "Globe",
  },
  "Mobile App": {
    slug: "mobile-app",
    description:
      "Native and cross-platform mobile apps that users love to open.",
    icon: "Smartphone",
  },
  "Digital Marketing": {
    slug: "digital-marketing",
    description:
      "Data-driven campaigns that turn attention into revenue.",
    icon: "TrendingUp",
  },
  Branding: {
    slug: "branding",
    description:
      "Distinctive brand identities that command premium positioning.",
    icon: "Palette",
  },
  Video: {
    slug: "video",
    description:
      "Cinematic content that tells your story and drives engagement.",
    icon: "Video",
  },
  Other: {
    slug: "other",
    description:
      "Advanced solutions including AI automation and influencer marketing.",
    icon: "Zap",
  },
};

function createService(
  title: string,
  category: string,
  shortDescription: string,
  features: string[],
  benefits: string[]
): Service {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const categorySlug = categoryMeta[category].slug;

  return {
    slug,
    title,
    category,
    categorySlug,
    shortDescription,
    description: `At Senseoza AI Digital Solutions, our ${title} service combines strategic thinking with AI-enhanced execution to deliver measurable results. ${shortDescription} We work as an extension of your team—understanding your market, refining your message, and building systems that scale.`,
    features,
    benefits,
    faqs: [
      {
        question: `How long does a typical ${title} project take?`,
        answer: `Timeline varies by scope, but most ${title.toLowerCase()} projects launch within 4–8 weeks. We provide a detailed roadmap during discovery with clear milestones and delivery dates.`,
      },
      {
        question: `What makes Senseoza's ${title} different?`,
        answer: `We blend premium design standards with AI-powered workflows and conversion-focused strategy. Every deliverable is optimized for performance, accessibility, and long-term ROI—not just aesthetics.`,
      },
      {
        question: `Do you offer ongoing support after ${title}?`,
        answer: `Yes. We offer maintenance retainers, performance monitoring, and optimization packages to ensure your investment continues delivering results month after month.`,
      },
    ],
    keywords: [
      title.toLowerCase(),
      category.toLowerCase(),
      "senseoza",
      "digital agency",
    ],
  };
}

const webDevServices = [
  createService(
    "Corporate Website",
    "Web Development",
    "Enterprise-grade websites that establish authority and convert high-value leads.",
    [
      "Custom design aligned with brand guidelines",
      "Multi-page architecture with CMS integration",
      "Investor and stakeholder-ready presentation",
      "Advanced analytics and conversion tracking",
      "Enterprise security and compliance",
    ],
    [
      "Strengthen corporate credibility online",
      "Attract enterprise clients and partners",
      "Streamline internal content management",
    ]
  ),
  createService(
    "Business Website",
    "Web Development",
    "Professional websites that turn local and national visitors into paying customers.",
    [
      "Mobile-first responsive design",
      "Lead capture forms and CRM integration",
      "Google Business Profile alignment",
      "Fast load times under 2 seconds",
      "SEO-optimized page structure",
    ],
    [
      "Generate consistent qualified leads",
      "Outrank competitors in search",
      "Build trust with professional presence",
    ]
  ),
  createService(
    "Landing Page",
    "Web Development",
    "High-converting single-page experiences designed for campaigns and product launches.",
    [
      "A/B test-ready layouts",
      "Persuasive copy and social proof sections",
      "Pixel-perfect mobile optimization",
      "Integration with ad platforms",
      "Heatmap and analytics setup",
    ],
    [
      "Maximize campaign ROI",
      "Reduce cost per acquisition",
      "Launch products with impact",
    ]
  ),
  createService(
    "Portfolio Website",
    "Web Development",
    "Stunning showcase websites for creatives, agencies, and professionals.",
    [
      "Gallery and case study layouts",
      "Smooth animations and transitions",
      "Contact and inquiry systems",
      "Personal branding integration",
      "Social media embed support",
    ],
    [
      "Win more clients with visual proof",
      "Stand out in competitive markets",
      "Present work with premium polish",
    ]
  ),
  createService(
    "E-commerce Website",
    "Web Development",
    "Scalable online stores with seamless checkout and inventory management.",
    [
      "Shopify, WooCommerce, or custom builds",
      "Payment gateway integration",
      "Product filtering and search",
      "Abandoned cart recovery",
      "Multi-currency and shipping rules",
    ],
    [
      "Increase average order value",
      "Reduce cart abandonment",
      "Scale sales across channels",
    ]
  ),
  createService(
    "Website Redesign",
    "Web Development",
    "Transform outdated sites into modern, high-performing digital experiences.",
    [
      "UX audit and competitor analysis",
      "Content migration and SEO preservation",
      "Modern design system implementation",
      "Performance optimization",
      "Accessibility compliance (WCAG AA)",
    ],
    [
      "Revitalize brand perception",
      "Improve conversion rates significantly",
      "Future-proof your digital presence",
    ]
  ),
  createService(
    "SEO Friendly Website",
    "Web Development",
    "Websites built from the ground up with technical SEO baked into every layer.",
    [
      "Semantic HTML and schema markup",
      "Optimized URL structure and sitemaps",
      "Core Web Vitals optimization",
      "Internal linking architecture",
      "Mobile-first indexing ready",
    ],
    [
      "Rank faster in search results",
      "Reduce ongoing SEO costs",
      "Build sustainable organic traffic",
    ]
  ),
];

const mobileServices = [
  createService(
    "Android App Development",
    "Mobile App",
    "Native Android applications optimized for the Google Play ecosystem.",
    [
      "Kotlin and Java development",
      "Material Design 3 UI",
      "Push notifications and deep linking",
      "Google Play Store optimization",
      "Offline functionality support",
    ],
    [
      "Reach India's largest mobile audience",
      "Deliver native performance",
      "Integrate with Google services seamlessly",
    ]
  ),
  createService(
    "iOS App Development",
    "Mobile App",
    "Premium iOS apps crafted for iPhone and iPad with Apple-grade polish.",
    [
      "Swift and SwiftUI development",
      "App Store optimization (ASO)",
      "Apple Pay and HealthKit integration",
      "TestFlight beta distribution",
      "Accessibility compliance",
    ],
    [
      "Access high-value iOS users",
      "Meet Apple's quality standards",
      "Build brand prestige on iOS",
    ]
  ),
  createService(
    "Cross Platform App Development",
    "Mobile App",
    "Single codebase apps that run beautifully on iOS and Android.",
    [
      "React Native or Flutter frameworks",
      "Shared business logic and UI",
      "Native module integration",
      "CI/CD pipeline setup",
      "Unified analytics dashboard",
    ],
    [
      "Cut development costs by 40%",
      "Launch on both platforms simultaneously",
      "Maintain one codebase long-term",
    ]
  ),
  createService(
    "React Native Development",
    "Mobile App",
    "JavaScript-powered mobile apps with near-native performance.",
    [
      "Expo and bare workflow support",
      "Reusable component libraries",
      "Over-the-air updates",
      "Third-party SDK integration",
      "Performance profiling and optimization",
    ],
    [
      "Leverage existing web team skills",
      "Rapid iteration and deployment",
      "Large ecosystem of packages",
    ]
  ),
  createService(
    "Flutter App Development",
    "Mobile App",
    "Google's UI toolkit for building natively compiled multi-platform apps.",
    [
      "Custom widget development",
      "Smooth 60fps animations",
      "Firebase backend integration",
      "Platform channel customization",
      "Desktop and web expansion ready",
    ],
    [
      "Stunning custom UI across platforms",
      "Consistent experience everywhere",
      "Future-proof with Google's backing",
    ]
  ),
];

const marketingServices = [
  createService("SEO Services", "Digital Marketing", "Comprehensive search engine optimization that drives sustainable organic growth.", ["Keyword research and mapping", "On-page and technical SEO", "Content strategy and creation", "Link building campaigns", "Monthly ranking reports"], ["Increase organic traffic 3x", "Reduce dependency on paid ads", "Build long-term brand authority"]),
  createService("Local SEO", "Digital Marketing", "Dominate local search results and Google Maps for location-based businesses.", ["Google Business Profile optimization", "Local citation building", "Review generation strategy", "Local content creation", "Geo-targeted landing pages"], ["Appear in the local 3-pack", "Drive foot traffic and calls", "Beat local competitors"]),
  createService("Technical SEO", "Digital Marketing", "Fix crawlability, indexing, and site architecture issues holding back rankings.", ["Site speed optimization", "Schema markup implementation", "Crawl budget optimization", "JavaScript SEO fixes", "Core Web Vitals improvement"], ["Unlock hidden ranking potential", "Improve user experience metrics", "Future-proof search visibility"]),
  createService("On Page SEO", "Digital Marketing", "Optimize every page element for maximum search relevance and click-through rates.", ["Title tag and meta optimization", "Header hierarchy structuring", "Internal linking strategy", "Image alt text and compression", "Content gap analysis"], ["Improve page-level rankings", "Increase organic CTR", "Align content with search intent"]),
  createService("Off Page SEO", "Digital Marketing", "Build authoritative backlinks and brand mentions that boost domain authority.", ["Guest posting campaigns", "Digital PR outreach", "Broken link building", "Competitor backlink analysis", "Brand mention monitoring"], ["Strengthen domain authority", "Earn trusted referral traffic", "Outrank established competitors"]),
  createService("Google Business Profile Optimization", "Digital Marketing", "Maximize visibility on Google Search and Maps with a fully optimized GBP listing.", ["Profile completeness audit", "Category and attribute optimization", "Photo and video uploads", "Q&A management", "Post scheduling and offers"], ["Increase map pack visibility", "Generate more phone calls", "Build local trust signals"]),
  createService("Social Media Marketing", "Digital Marketing", "Strategic social presence that builds community and drives conversions.", ["Platform strategy and planning", "Content calendar management", "Community engagement", "Paid social amplification", "Analytics and reporting"], ["Grow engaged follower base", "Drive social commerce revenue", "Build brand loyalty"]),
  createService("Instagram Marketing", "Digital Marketing", "Visual storytelling and Reels strategy that turns followers into customers.", ["Reels and Stories production", "Influencer collaborations", "Hashtag and trend research", "Instagram Shopping setup", "DM automation workflows"], ["Increase brand discoverability", "Boost engagement rates", "Convert social traffic to sales"]),
  createService("Facebook Marketing", "Digital Marketing", "Targeted Facebook campaigns that reach your ideal audience at scale.", ["Audience segmentation", "Ad creative development", "Retargeting funnel setup", "Lead form optimization", "Lookalike audience building"], ["Lower cost per lead", "Scale proven ad formats", "Retarget website visitors"]),
  createService("LinkedIn Marketing", "Digital Marketing", "B2B lead generation and thought leadership on the world's professional network.", ["Company page optimization", "Executive personal branding", "LinkedIn Ads campaigns", "Content marketing strategy", "Lead gen form integration"], ["Generate qualified B2B leads", "Establish industry authority", "Connect with decision makers"]),
  createService("YouTube Marketing", "Digital Marketing", "Video content strategy and optimization for the world's second-largest search engine.", ["Channel setup and branding", "SEO-optimized video production", "Thumbnail and title testing", "YouTube Ads campaigns", "Analytics and growth tracking"], ["Build a video content library", "Rank videos in search", "Monetize through ads and leads"]),
  createService("Content Marketing", "Digital Marketing", "Strategic content that educates, engages, and converts at every funnel stage.", ["Content audit and strategy", "Blog and article writing", "Ebooks and whitepapers", "Email nurture sequences", "Content distribution planning"], ["Establish thought leadership", "Nurture leads through the funnel", "Support SEO and social efforts"]),
  createService("Performance Marketing", "Digital Marketing", "ROI-focused campaigns where every rupee spent is tracked, tested, and optimized.", ["Multi-channel attribution", "Conversion rate optimization", "Landing page testing", "Budget allocation modeling", "Real-time performance dashboards"], ["Maximize return on ad spend", "Scale winning campaigns fast", "Eliminate wasteful ad spend"]),
  createService("Google Ads", "Digital Marketing", "Precision-targeted search and display campaigns on Google's advertising network.", ["Search campaign setup", "Shopping and Performance Max", "Remarketing audiences", "Bid strategy optimization", "Quality Score improvement"], ["Capture high-intent search traffic", "Generate immediate leads", "Control costs with smart bidding"]),
  createService("Meta Ads", "Digital Marketing", "Facebook and Instagram advertising that reaches billions with surgical targeting.", ["Campaign structure design", "Creative testing frameworks", "Audience research and building", "Conversion API setup", "ROAS optimization"], ["Reach massive audiences affordably", "Retarget across Meta ecosystem", "Drive e-commerce sales"]),
  createService("Lead Generation", "Digital Marketing", "Systematic pipelines that deliver qualified leads directly to your sales team.", ["Lead magnet creation", "Multi-channel capture funnels", "Lead scoring and qualification", "CRM integration and routing", "Nurture email sequences"], ["Fill your sales pipeline consistently", "Improve lead quality scores", "Reduce sales cycle length"]),
  createService("Email Marketing", "Digital Marketing", "Personalized email campaigns that nurture relationships and drive repeat revenue.", ["List segmentation strategy", "Automated drip sequences", "Newsletter design and copy", "A/B testing and optimization", "Deliverability monitoring"], ["Increase customer lifetime value", "Recover abandoned carts", "Drive repeat purchases"]),
  createService("WhatsApp Marketing", "Digital Marketing", "Direct, high-open-rate messaging campaigns on India's most-used platform.", ["WhatsApp Business API setup", "Broadcast and drip campaigns", "Chatbot integration", "Catalog and payment features", "Compliance and opt-in management"], ["Achieve 90%+ open rates", "Enable conversational commerce", "Provide instant customer support"]),
  createService("Marketing Automation", "Digital Marketing", "Intelligent workflows that automate repetitive marketing tasks and personalize at scale.", ["Platform setup (HubSpot, ActiveCampaign)", "Lead nurturing workflows", "Behavioral trigger campaigns", "Scoring and segmentation", "Cross-channel orchestration"], ["Save 20+ hours per week", "Personalize at scale", "Never miss a follow-up"]),
];

const brandingServices = [
  createService("Logo Design", "Branding", "Memorable logos that capture your brand essence and work across every touchpoint.", ["Multiple concept directions", "Vector and raster deliverables", "Brand color palette", "Usage guidelines document", "Social media avatar variants"], ["Create instant brand recognition", "Professional first impression", "Consistent visual identity"]),
  createService("Brand Identity", "Branding", "Complete visual systems that define how your brand looks, feels, and communicates.", ["Logo and mark design", "Typography and color systems", "Brand voice guidelines", "Stationery and collateral", "Digital asset library"], ["Unified brand experience", "Premium market positioning", "Scalable design foundation"]),
  createService("Graphic Design", "Branding", "Eye-catching visuals for digital and print that elevate your marketing materials.", ["Social media graphics", "Presentation decks", "Infographics and data viz", "Print advertisements", "Digital banner ads"], ["Increase engagement on visuals", "Maintain brand consistency", "Professional marketing collateral"]),
  createService("Brochure Design", "Branding", "Compelling print and digital brochures that tell your story persuasively.", ["Tri-fold and bi-fold layouts", "Product catalog design", "Corporate profile brochures", "Print-ready PDF exports", "Interactive digital versions"], ["Impress at meetings and events", "Communicate complex offerings simply", "Leave lasting physical impressions"]),
  createService("Business Cards", "Branding", "Premium business cards that make networking memorable.", ["Multiple design concepts", "Premium paper and finish options", "QR code integration", "Digital business card versions", "Bulk print coordination"], ["Stand out in networking events", "Reinforce brand professionalism", "Enable instant digital connection"]),
  createService("Packaging Design", "Branding", "Shelf-ready packaging that attracts attention and communicates product value.", ["Structural design concepts", "Label and box artwork", "Mockup and 3D visualization", "Regulatory compliance review", "Print production files"], ["Increase shelf appeal", "Communicate product benefits instantly", "Build brand loyalty through unboxing"]),
  createService("Creative Design", "Branding", "Bold, original creative work that breaks through the noise and captures attention.", ["Campaign concept development", "Visual storytelling", "Motion graphics elements", "Art direction", "Creative asset production"], ["Differentiate from competitors", "Create shareable brand moments", "Elevate campaign impact"]),
];

const videoServices = [
  createService("Corporate Videos", "Video", "Professional video production that communicates your company vision and values.", ["Scriptwriting and storyboarding", "Multi-camera production", "Professional voiceover", "Motion graphics integration", "Multi-format delivery"], ["Build corporate credibility", "Engage stakeholders and investors", "Enhance website and presentations"]),
  createService("Product Videos", "Video", "Showcase videos that highlight features, benefits, and use cases compellingly.", ["Product demo filming", "360° and close-up shots", "Feature callout animations", "Testimonial integration", "E-commerce ready formats"], ["Increase product page conversions", "Reduce return rates", "Support sales team efforts"]),
  createService("Reels Production", "Video", "Trend-driven short-form video content optimized for Instagram and Facebook Reels.", ["Trend research and scripting", "Fast-paced editing", "Music and sound design", "Caption and hashtag strategy", "Batch production packages"], ["Viral potential on social platforms", "Grow follower count rapidly", "Drive traffic to offers"]),
  createService("Short Videos", "Video", "Snackable video content for ads, social, and website embeds.", ["15-60 second formats", "Platform-specific optimization", "Subtitle and caption inclusion", "CTA end cards", "A/B test variants"], ["Maximize ad engagement", "Communicate quickly and clearly", "Repurpose across channels"]),
  createService("Drone Shoots", "Video", "Aerial cinematography that adds cinematic scale to your visual content.", ["Licensed drone operators", "4K aerial footage", "Real estate and event coverage", "Post-production color grading", "Safety compliance"], ["Showcase properties and venues", "Create wow-factor content", "Stand out in competitive markets"]),
  createService("Photography", "Video", "Professional photography for products, events, teams, and brand campaigns.", ["Studio and on-location shoots", "Product photography", "Team and headshot sessions", "Event coverage", "Retouching and editing"], ["Premium visual assets for all channels", "Consistent brand imagery", "High-quality marketing materials"]),
  createService("Podcast Production", "Video", "End-to-end podcast creation from concept to published episodes.", ["Format and branding design", "Recording studio setup", "Editing and mastering", "Show notes and transcripts", "Distribution to all platforms"], ["Build thought leadership", "Reach new audiences", "Repurpose content across channels"]),
];

const otherServices = [
  createService("Influencer Marketing", "Other", "Strategic partnerships with creators who authentically amplify your brand.", ["Influencer identification and vetting", "Campaign brief development", "Contract and compliance management", "Performance tracking and ROI", "Long-term ambassador programs"], ["Reach targeted audiences authentically", "Generate user-generated content", "Build social proof at scale"]),
  createService("PR Marketing", "Other", "Media relations and press coverage that builds credibility and brand awareness.", ["Press release writing and distribution", "Media list building", "Journalist outreach", "Crisis communication planning", "Award and recognition submissions"], ["Earn trusted third-party coverage", "Manage brand reputation", "Increase domain authority through mentions"]),
  createService("CRM Development", "Other", "Custom CRM systems tailored to your sales process and customer journey.", ["Requirements analysis", "Custom workflow design", "Third-party integrations", "Dashboard and reporting", "Team training and onboarding"], ["Centralize customer data", "Automate sales follow-ups", "Improve team productivity"]),
  createService("AI Automation", "Other", "Intelligent automation that eliminates manual work and scales operations.", ["Process mapping and analysis", "AI tool integration", "Workflow automation (Zapier, Make)", "Custom AI model deployment", "ROI tracking and optimization"], ["Reduce operational costs", "Eliminate human error", "Scale without adding headcount"]),
  createService("Chatbot Development", "Other", "AI-powered chatbots that qualify leads and support customers 24/7.", ["Conversation flow design", "NLP and AI training", "Multi-platform deployment", "CRM and helpdesk integration", "Analytics and improvement loops"], ["Provide instant customer support", "Qualify leads automatically", "Reduce support ticket volume"]),
  createService("Business Automation", "Other", "End-to-end business process automation for marketing, sales, and operations.", ["Process audit and mapping", "Tool selection and integration", "Custom automation scripts", "Documentation and SOPs", "Ongoing optimization"], ["Reclaim hours every week", "Ensure consistent processes", "Enable scalable growth"]),
];

export const allServices: Service[] = [
  ...webDevServices,
  ...mobileServices,
  ...marketingServices,
  ...brandingServices,
  ...videoServices,
  ...otherServices,
];

export const serviceCategories = Object.entries(categoryMeta).map(
  ([name, meta]) => ({
    name,
    ...meta,
    services: allServices.filter((s) => s.category === name),
  })
);

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getServicesByCategory(categorySlug: string): Service[] {
  return allServices.filter((s) => s.categorySlug === categorySlug);
}
