export type ServicePageContent = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  label: string;
  title: string;
  highlight?: string;
  description: string;
  tags: string[];
  stats: { value: string; label: string }[];
  intro?: { title: string; body: string };
  cardsTitle: string;
  cards: { title: string; description: string }[];
  includedTitle: string;
  included: string[];
  processTitle: string;
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaLabel: string;
};

export const serviceOverview = {
  label: "Our Services",
  title: "Comprehensive Digital Marketing Services That Drive Real Results",
  highlight: "Real Results",
  description:
    "At Senseoza, we offer a full suite of digital marketing services designed to work together seamlessly. Our integrated approach ensures every channel amplifies the others.",
  items: [
    {
      slug: "seo",
      emoji: "🔎",
      title: "Search Engine Optimization (SEO)",
      description:
        "Dominate search rankings with proven SEO strategies. We combine technical optimization, content excellence, and authoritative link-building to get your business found by customers actively searching for your solutions.",
      tags: ["SEO", "AEO", "GEO", "Local SEO"],
      points: [
        {
          label: "SEO",
          text: "Technical + on-page search that ranks you for high-intent Google queries.",
        },
        {
          label: "AEO",
          text: "Answer Engine Optimization for AI Overviews, featured snippets, and voice.",
        },
        {
          label: "GEO",
          text: "Generative Engine Optimization so ChatGPT, Gemini, and Perplexity cite you.",
        },
      ],
    },
    {
      slug: "ppc-ads",
      emoji: "💰",
      title: "Pay-Per-Click Advertising (PPC)",
      description:
        "Generate immediate, qualified traffic with expertly managed paid advertising campaigns. We optimize every dollar spent across Google Ads, Bing, and social platforms to maximize ROAS.",
      tags: ["Google Ads", "Meta Ads", "Display Ads", "Retargeting"],
    },
    {
      slug: "social-media",
      emoji: "📱",
      title: "Social Media Marketing",
      description:
        "Build a loyal community and drive engagement with strategic social media management. We create compelling content, foster authentic connections, and turn followers into customers.",
      tags: ["Social Strategy", "Community Management", "Content Creation", "Paid Social"],
    },
    {
      slug: "content-marketing",
      emoji: "✍️",
      title: "Content Marketing",
      description:
        "Attract, educate, and convert your ideal customers with high-quality content that establishes your authority and drives organic traffic through blogs, videos, infographics, and more.",
      tags: ["Blog Writing", "Video Content", "Infographics", "SEO Content"],
    },
    {
      slug: "ai-marketing",
      emoji: "🤖",
      title: "AI-Powered Marketing Automation",
      description:
        "Scale your marketing efforts without scaling your team. Our AI-driven automation tools streamline repetitive tasks, personalize customer experiences, and nurture leads automatically.",
      tags: ["Email Automation", "Lead Nurturing", "CRM Integration", "AI Insights"],
    },
    {
      slug: "web-design",
      emoji: "🌐",
      title: "Website Design & Development",
      description:
        "Your website is your digital storefront. We design and develop high-converting websites that not only look stunning but are optimized for performance, user experience, and search engines.",
      tags: ["Responsive Design", "UX/UI Design", "E-commerce", "Performance"],
    },
    {
      slug: "influencer-marketing",
      emoji: "⭐",
      title: "Influencer Marketing",
      description:
        "Partner with authentic creators who resonate with your target audience. We manage end-to-end influencer campaigns from discovery to reporting, driving engagement and conversions.",
      tags: ["Creator Partnerships", "Campaign Management", "Brand Ambassadors", "UGC"],
    },
    {
      slug: "ai-agents-automation",
      emoji: "⚡",
      title: "AI Agents & Workflow Automation",
      description:
        "Deploy intelligent AI agents that automate repetitive tasks, make smart decisions, and work 24/7 without breaks. Custom automation solutions that save time, reduce costs, and scale your operations.",
      tags: ["AI Agents", "Workflow Automation", "Process Automation", "24/7 Operations"],
    },
    {
      slug: "email-automation",
      emoji: "📧",
      title: "Email Automation",
      description:
        "Marketing automation that scales without adding headcount. Nurture leads, personalize experiences, and drive conversions around the clock.",
      tags: ["Email Automation", "CRM Integration", "Lead Nurturing", "AI Insights"],
    },
    {
      slug: "analytics",
      emoji: "📊",
      title: "Analytics & Reporting",
      description:
        "Transform raw data into clear, actionable insights that drive smarter decisions. Stop guessing about what works—start knowing.",
      tags: ["Real-time Dashboards", "ROI Tracking", "Performance Reports"],
    },
    {
      slug: "content-marketing-pune",
      emoji: "📍",
      title: "Content Marketing Services in Pune",
      description:
        "AI-powered content that ranks on Google, gets found in ChatGPT & Gemini, and converts Pune customers into clients.",
      tags: ["SEO Blogs", "Local Content", "EN + HI + MR"],
    },
  ],
};

function page(data: ServicePageContent): ServicePageContent {
  return data;
}

export const servicePages: Record<string, ServicePageContent> = {
  "ai-marketing": page({
    slug: "ai-marketing",
    seoTitle: "AI-Powered Marketing",
    seoDescription:
      "Harness AI to transform marketing from reactive to predictive with personalized experiences, real-time optimization, and exponential growth.",
    label: "AI-Powered Marketing",
    title: "AI-Powered Marketing",
    highlight: "AI-Powered",
    description:
      "Harness the power of artificial intelligence to transform your marketing from reactive to predictive. Our AI-driven approach delivers personalized experiences at scale, optimizes campaigns in real-time, and uncovers insights that drive exponential growth.",
    tags: ["Predictive Analytics", "AI Automation", "Smart Segmentation"],
    stats: [
      { value: "40%", label: "Higher conversion rates with AI" },
      { value: "30%", label: "Reduction in acquisition costs" },
      { value: "3x", label: "Faster campaign optimization" },
      { value: "85%", label: "More accurate audience targeting" },
    ],
    intro: {
      title: "Why AI is Revolutionizing Marketing",
      body: "AI marketing anticipates the future, automates the complex, and personalizes at a scale humans simply cannot match.",
    },
    cardsTitle: "AI Marketing in Action",
    cards: [
      { title: "Predictive Lead Scoring", description: "Automatically rank leads based on likelihood to convert, allowing your sales team to focus on the most promising opportunities." },
      { title: "Dynamic Content Optimization", description: "AI determines which content variations perform best for different audience segments and automatically serves the winning versions." },
      { title: "Churn Prediction & Prevention", description: "Identify customers at risk of leaving before they go and trigger automated retention campaigns to keep them engaged." },
      { title: "Intelligent Budget Allocation", description: "Machine learning distributes your marketing budget across channels in real-time based on performance data." },
      { title: "Sentiment Analysis", description: "Monitor brand mentions and customer feedback across platforms to understand public perception and respond appropriately." },
      { title: "Automated Reporting", description: "AI-generated insights and recommendations delivered automatically, saving hours of manual analysis time." },
    ],
    includedTitle: "What's Included",
    included: [
      "Predictive Analytics & Forecasting",
      "AI-Powered Automation",
      "Smart Customer Segmentation",
      "Personalized Campaign Delivery",
      "Machine Learning Optimization",
      "Real-time Performance Tracking",
      "Intelligent Bidding Strategies",
      "Automated A/B Testing",
    ],
    processTitle: "Our AI Implementation Process",
    process: [
      { step: "01", title: "Data Integration", description: "We connect CRM, website analytics, advertising platforms, and more into a unified view of your marketing ecosystem." },
      { step: "02", title: "AI Model Training", description: "Our systems learn from your historical data to understand unique business patterns, customer behaviors, and market dynamics." },
      { step: "03", title: "Strategy Development", description: "Based on AI insights, we develop customized marketing strategies that leverage automation and machine learning." },
      { step: "04", title: "Implementation", description: "We deploy AI-powered tools across your marketing channels with seamless integration into existing workflows." },
      { step: "05", title: "Continuous Learning", description: "Our AI systems continuously learn and improve, adapting to changing market conditions and customer preferences." },
    ],
    faqs: [],
    ctaLabel: "Book a Consultation",
  }),
  seo: page({
    slug: "seo",
    seoTitle: "SEO Services in Pune",
    seoDescription:
      "Professional SEO services that drive organic growth through technical excellence, compelling content, and authoritative signals.",
    label: "SEO Services",
    title: "Professional SEO Services That Drive Organic Growth",
    highlight: "Organic Growth",
    description:
      "Achieving top rankings on search engines isn't just about keywords—it's about creating a comprehensive strategy that combines technical excellence, compelling content, and authoritative signals. We do the work that turns searchers into customers.",
    tags: ["Technical SEO", "Keyword Research", "Link Building", "Local SEO"],
    stats: [
      { value: "93%", label: "Online experiences begin with search" },
      { value: "75%", label: "Users never scroll past page one" },
      { value: "14.6%", label: "SEO leads close rate vs 1.7% outbound" },
      { value: "5.3x", label: "ROI compared to paid advertising" },
    ],
    intro: {
      title: "Why Search Engine Optimization Matters",
      body: "When potential customers search for solutions you provide, being visible at the right moment creates opportunities that paid ads can't match over the long term.",
    },
    cardsTitle: "A Proven Process for Sustainable Rankings",
    cards: [
      { title: "Technical Foundation Analysis", description: "We evaluate site architecture, mobile responsiveness, page speed, structured data, and crawlability so search engines can index you properly." },
      { title: "Strategic Keyword Research", description: "We identify not just high-volume terms, but keywords that indicate purchase intent and align with your business goals." },
      { title: "On-Page Enhancement", description: "Title tags, meta descriptions, heading structures, and content are optimized for strategic keywords while staying natural and useful." },
      { title: "Content Strategy Development", description: "We develop content that answers customer questions throughout their journey and earns topical authority." },
      { title: "Authority Building", description: "White-hat link acquisition focused on genuine endorsements from reputable websites in your industry." },
      { title: "Local Visibility Optimization", description: "Google Business Profile optimization, consistent citations, and local content for geographic search dominance." },
    ],
    includedTitle: "What Makes Us Different",
    included: [
      "AI-enhanced insights for search trends and algorithm shifts",
      "Competitive intelligence to find gaps you can exploit",
      "Holistic SEO integrated with your broader marketing",
      "Transparent reporting in plain English",
    ],
    processTitle: "What to Expect from Your SEO Investment",
    process: [
      { step: "01", title: "Foundation", description: "Technical foundation and content development. Initial ranking improvements for less competitive terms." },
      { step: "02", title: "Momentum", description: "Noticeable organic traffic growth, typically 50–150%. More keywords reach page one with real lead impact." },
      { step: "03", title: "Growth", description: "Competitive terms strengthen, organic traffic doubles or triples, and SEO starts generating significant revenue." },
      { step: "04", title: "Dominance", description: "Sustained authority in your space, maintaining strong rankings even as competition intensifies." },
    ],
    faqs: [],
    ctaLabel: "Get Your Free SEO Audit",
  }),
  "social-media": page({
    slug: "social-media",
    seoTitle: "Social Media Marketing",
    seoDescription:
      "Social media marketing that builds communities and drives business across Instagram, Facebook, LinkedIn, TikTok, and more.",
    label: "Social Media Marketing",
    title: "Social Media Marketing That Builds Communities and Drives Business",
    highlight: "Communities",
    description:
      "With over 4.9 billion people using social platforms worldwide, your customers are already there. The question isn't whether you should be on social media, but whether you're using it strategically to grow your business.",
    tags: ["Instagram", "Facebook", "LinkedIn", "TikTok", "Twitter"],
    stats: [
      { value: "78%", label: "Consumers discover brands via social" },
      { value: "4.9B", label: "Active social media users worldwide" },
      { value: "71%", label: "More likely to buy after positive interaction" },
      { value: "2.5hr", label: "Average daily social media time" },
    ],
    intro: {
      title: "The Business Case for Strategic Social Media",
      body: "78% of consumers discover new brands through social media. Your potential customers are actively looking for solutions on the platforms they use daily.",
    },
    cardsTitle: "Our Social Media Services",
    cards: [
      { title: "Strategic Planning", description: "Platform selection, content pillars aligned with business goals, posting schedules, and competitive analysis." },
      { title: "Content Creation", description: "Graphics, Reels, copy, Stories, interactive polls, and user-generated content campaigns." },
      { title: "Community Management", description: "Prompt responses to comments and DMs, brand mention monitoring, and community building." },
      { title: "Social Advertising", description: "Paid campaigns across Facebook, Instagram, LinkedIn, TikTok, Twitter/X, and Pinterest." },
      { title: "Analytics and Reporting", description: "Follower growth, engagement, traffic, leads, paid ROI, and competitor benchmarking." },
      { title: "40-40-20 Content Framework", description: "40% educational, 40% engagement, 20% promotional—so you stay valuable without being overly salesy." },
    ],
    includedTitle: "Mastery Across Major Platforms",
    included: [
      "Instagram — visual storytelling, Reels, Stories, Shopping",
      "Facebook — Groups, Events, Marketplace, broad reach",
      "LinkedIn — B2B thought leadership and decision-makers",
      "TikTok — short-form video for Gen Z and younger millennials",
      "Twitter/X — real-time engagement and industry discussion",
      "Pinterest — long-lifespan inspiration content",
      "YouTube — tutorials, demos, and authority building",
    ],
    processTitle: "Social Media Growth Timeline",
    process: [
      { step: "01", title: "Foundation", description: "Month 1: strategy, content calendar, and initial audience growth." },
      { step: "02", title: "Engagement", description: "Months 2–3: consistent engagement, 20–50% follower growth, rising brand awareness." },
      { step: "03", title: "Acceleration", description: "Months 3–6: community building, 100%+ follower growth, measurable website traffic." },
      { step: "04", title: "Authority", description: "Month 6+: loyal community, consistent lead generation, and strong brand presence." },
    ],
    faqs: [],
    ctaLabel: "Get Your Free Social Strategy",
  }),
  "content-marketing": page({
    slug: "content-marketing",
    seoTitle: "Content Marketing",
    seoDescription:
      "Content marketing that attracts, engages, and converts with blogs, video, ebooks, and SEO-driven assets.",
    label: "Content Marketing",
    title: "Content Marketing That Attracts, Engages, and Converts",
    highlight: "Converts",
    description:
      "In today's digital landscape, customers research extensively before buying. Content marketing isn't about pushing your message—it's about being discovered when customers actively seek solutions.",
    tags: ["Blog Writing", "Video Content", "Ebooks", "Infographics"],
    stats: [
      { value: "3x", label: "More leads than traditional marketing" },
      { value: "62%", label: "Less cost than outbound marketing" },
      { value: "6x", label: "Higher conversion for content adopters" },
      { value: "434%", label: "More indexed pages boost SEO" },
    ],
    intro: {
      title: "The Strategic Value of Quality Content",
      body: "Search engines reward fresh, relevant content. Every piece creates another opportunity to rank for keywords your customers search.",
    },
    cardsTitle: "Comprehensive Content Marketing Solutions",
    cards: [
      { title: "Strategic Content Planning", description: "Personas, competitive analysis, content audits, 90-day editorial calendars, and keyword strategy." },
      { title: "Blog Writing and Optimization", description: "1,500–3,000 word articles with SEO, internal linking, and compelling CTAs." },
      { title: "Website Copywriting", description: "Homepage, services, landing pages, category copy, and career pages." },
      { title: "Video Content Production", description: "How-tos, product demos, testimonials, explainers, and YouTube content." },
      { title: "Visual Content Creation", description: "Infographics, process diagrams, comparison charts, and social graphics." },
      { title: "Long-Form Assets", description: "Guides, original research, templates, and frameworks that earn links and leads." },
    ],
    includedTitle: "How We Measure Content Marketing Success",
    included: [
      "Organic traffic growth",
      "Keyword ranking improvements",
      "Engagement metrics (time on page)",
      "Lead generation (downloads, forms)",
      "Conversion rates",
      "Social shares and backlinks earned",
      "Revenue attribution",
    ],
    processTitle: "Our Content Development Methodology",
    process: [
      { step: "01", title: "Discovery and Strategy", description: "Personas, content audit, competitor analysis, keyword ideation, and a 90-day calendar." },
      { step: "02", title: "Content Production", description: "Research, drafts by specialized writers, fact-checking, client review, and SEO polish." },
      { step: "03", title: "Publication and Promotion", description: "Scheduling, social, email, paid amplification, and influencer outreach." },
      { step: "04", title: "Performance Analysis", description: "Traffic, conversions, refreshes, and strategic refinements." },
    ],
    faqs: [],
    ctaLabel: "Start Your Content Strategy",
  }),
  "ppc-ads": page({
    slug: "ppc-ads",
    seoTitle: "PPC & Paid Ads",
    seoDescription:
      "Strategic PPC management that maximizes every advertising dollar across Google Ads, Meta, LinkedIn, and retargeting.",
    label: "PPC Advertising",
    title: "Strategic PPC Management That Maximizes Every Advertising Dollar",
    highlight: "Every Advertising Dollar",
    description:
      "When you need immediate visibility and qualified traffic, pay-per-click advertising delivers from day one. We don't just run ads—we engineer profitable customer acquisition systems.",
    tags: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting"],
    stats: [
      { value: "200%", label: "Average ROI on Google Ads" },
      { value: "65%", label: "Of clicks go to paid ads for buying intent" },
      { value: "50%", label: "More conversions than organic visitors" },
      { value: "24hr", label: "Results visible within first day" },
    ],
    intro: {
      title: "Understanding Pay-Per-Click Advertising",
      body: "PPC charges only when someone clicks your ad, making it one of the most measurable and controllable marketing channels available.",
    },
    cardsTitle: "Our PPC Services",
    cards: [
      { title: "Search Advertising", description: "Google Ads, Microsoft Advertising, Shopping ads, and Local Service Ads." },
      { title: "Social Media Advertising", description: "Facebook, Instagram, LinkedIn, TikTok, and Twitter/X for precise audience targeting." },
      { title: "Remarketing Campaigns", description: "Reconnect with visitors, cart abandoners, and video viewers; build lookalike audiences." },
      { title: "Landing Page Development", description: "Campaign-specific pages with clear value, trust signals, and continuous A/B testing." },
      { title: "Intelligent Bidding", description: "Machine learning bids in real time so you win auctions at the lowest possible cost." },
      { title: "Full Transparency", description: "24/7 dashboards showing exactly where every rupee goes and what it generates." },
    ],
    includedTitle: "Why Choose Senseoza for PPC",
    included: [
      "Intelligent bidding strategies",
      "Advanced behavioral and intent targeting",
      "In-house creative excellence",
      "Weekly optimizations and negative keywords",
      "ROAS-focused reporting",
    ],
    processTitle: "PPC Performance Timeline",
    process: [
      { step: "01", title: "Week 1", description: "Campaigns launch and we begin collecting performance data." },
      { step: "02", title: "Weeks 2–4", description: "Optimize targeting and creative based on early indicators." },
      { step: "03", title: "Months 2–3", description: "Campaigns mature with refined targeting and improved ROAS." },
      { step: "04", title: "Month 3+", description: "Consistent performance with spend concentrated on winning strategies." },
    ],
    faqs: [],
    ctaLabel: "Get Your Free PPC Audit",
  }),
  "web-design": page({
    slug: "web-design",
    seoTitle: "Web Design & Development",
    seoDescription:
      "Custom websites in Pune that convert visitors into customers—responsive, fast, and built for SEO.",
    label: "Web Design",
    title: "Web Design That Converts Visitors Into Customers",
    highlight: "Converts Visitors",
    description:
      "Your website serves as your digital storefront, 24/7 salesperson, and often the first impression potential customers form of your business. At Senseoza, we design and develop websites with a singular focus: conversion.",
    tags: ["Custom Design", "E-commerce", "WordPress", "Landing Pages"],
    stats: [
      { value: "94%", label: "First impressions are design-related" },
      { value: "60%", label: "Traffic comes from mobile devices" },
      { value: "53%", label: "Abandon sites loading over 3 seconds" },
      { value: "200%", label: "Conversion boost from great UX" },
    ],
    intro: {
      title: "The Business Impact of Website Design",
      body: "You have just 0.05 seconds to make a positive first impression. 94% of first impressions relate specifically to design.",
    },
    cardsTitle: "Comprehensive Web Solutions",
    cards: [
      { title: "Custom Website Design", description: "Brand-aligned design that guides visitors through intuitive journeys and converts." },
      { title: "Responsive & Mobile-First", description: "Flawless performance on every device with fast loads on mobile networks." },
      { title: "E-commerce Development", description: "Shopify, WooCommerce, Magento—carts, payments, inventory, and recovery flows." },
      { title: "WordPress Development", description: "Custom themes, plugins, WooCommerce, Elementor/Divi/Gutenberg, security, and speed." },
      { title: "Landing Page Design", description: "Single-purpose pages for one conversion goal, A/B ready, with strong CTAs." },
      { title: "Website Redesign", description: "Audits, modern UX, content migration, and SEO preservation." },
      { title: "UI/UX Design", description: "Research, wireframes, flows, usability testing, and WCAG accessibility." },
      { title: "Maintenance & Support", description: "Updates, security, backups, uptime monitoring, and content support." },
    ],
    includedTitle: "Our Design and Development Methodology",
    included: [
      "Discovery: goals, audience, competitors, architecture",
      "Design: mood boards, wireframes, mockups, revisions",
      "Development: frontend, backend, CMS, integrations",
      "Testing: browsers, devices, performance, SEO, analytics",
      "Launch with ongoing support",
    ],
    processTitle: "How We Build",
    process: [
      { step: "01", title: "Discovery", description: "Business goals, audience research, competitive analysis, and sitemaps." },
      { step: "02", title: "Design", description: "Style exploration, wireframes, high-fidelity mockups, and feedback loops." },
      { step: "03", title: "Development", description: "Frontend, backend, CMS, third-party integrations, and content population." },
      { step: "04", title: "Launch", description: "Cross-browser testing, speed, SEO setup, analytics, and go-live." },
    ],
    faqs: [],
    ctaLabel: "Get Your Free Website Audit",
  }),
  "email-automation": page({
    slug: "email-automation",
    seoTitle: "Email Automation",
    seoDescription:
      "Marketing automation that scales without adding headcount—email, CRM, lead nurturing, and AI insights.",
    label: "Email Automation",
    title: "Marketing Automation That Scales Without Adding Headcount",
    highlight: "Without Adding Headcount",
    description:
      "Imagine your marketing running continuously—nurturing leads, personalizing experiences, triggering timely communications, and driving conversions around the clock. That's the power of marketing automation.",
    tags: ["Email Automation", "CRM Integration", "Lead Nurturing", "AI Insights"],
    stats: [
      { value: "451%", label: "Increase in qualified leads" },
      { value: "80%", label: "More leads at lower cost" },
      { value: "77%", label: "Higher conversion rate" },
      { value: "12x", label: "ROI from email automation" },
    ],
    intro: {
      title: "Understanding Marketing Automation",
      body: "Marketing automation uses AI to automate repetitive tasks and workflows, handling processes based on predefined rules and triggers.",
    },
    cardsTitle: "Complete Marketing Automation Solutions",
    cards: [
      { title: "Email Marketing Automation", description: "Welcome series, drips, abandoned cart, re-engagement, birthday, post-purchase, and scoring." },
      { title: "CRM Integration", description: "HubSpot, Salesforce, Zoho setup, lead capture, pipeline automation, and custom fields." },
      { title: "Lead Scoring and Nurturing", description: "Behavioral, engagement, and demographic scoring with automated routing." },
      { title: "Chatbots and Conversational AI", description: "Qualification, support, scheduling, recommendations, FAQs, and multi-language." },
      { title: "Social Media Automation", description: "Scheduling, RSS posting, social listening, and performance tracking." },
      { title: "Predictive Analytics", description: "Churn prediction, send-time optimization, content recommendations, and forecasting." },
    ],
    includedTitle: "Expertise Across Leading Platforms",
    included: [
      "HubSpot, Marketo, ActiveCampaign",
      "Mailchimp, Klaviyo, Pardot (Salesforce)",
      "Zapier and Make for 5,000+ app connections",
    ],
    processTitle: "Implementation Methodology",
    process: [
      { step: "01", title: "Discovery", description: "Weeks 1–2: audit processes, define KPIs, recommend platform, map workflows." },
      { step: "02", title: "Setup", description: "Weeks 3–4: account setup, integrations, templates, workflow testing." },
      { step: "03", title: "Launch", description: "Weeks 5–8: soft launch, full deployment, A/B testing, documentation." },
      { step: "04", title: "Ongoing", description: "Monthly analysis, new automations, database hygiene, quarterly reviews." },
    ],
    faqs: [],
    ctaLabel: "Schedule Your Automation Consultation",
  }),
  analytics: page({
    slug: "analytics",
    seoTitle: "Analytics & Reporting",
    seoDescription:
      "Analytics and reporting that turn raw data into actionable insights with real-time dashboards and ROI tracking.",
    label: "Analytics & Reporting",
    title: "Analytics & Reporting",
    description:
      "In marketing, what gets measured gets improved. We transform raw data into clear, actionable insights that drive smarter decisions. Stop guessing about what works—start knowing.",
    tags: ["Real-time Dashboards", "ROI Tracking", "Performance Reports"],
    stats: [
      { value: "23x", label: "More likely to acquire customers" },
      { value: "6x", label: "More likely to retain customers" },
      { value: "126%", label: "Higher profit with data-driven strategy" },
      { value: "5–8x", label: "ROI on analytics investment" },
    ],
    intro: {
      title: "Why Marketing Analytics Matters",
      body: "Businesses that leverage data-driven marketing are 23x more likely to acquire customers. Stop guessing—start knowing.",
    },
    cardsTitle: "Our Analytics Services",
    cards: [
      { title: "Custom Dashboard Development", description: "Dashboards that display the metrics that matter, accessible anytime from any device." },
      { title: "Marketing Attribution", description: "Models that accurately credit conversions across the full customer journey." },
      { title: "Campaign Performance Tracking", description: "Real-time reach, engagement, conversions, and ROI on every campaign." },
      { title: "Conversion Rate Analysis", description: "Funnel deep-dives to find drop-off points and optimization opportunities." },
      { title: "Competitive Benchmarking", description: "Compare against industry standards and competitors to close gaps." },
      { title: "Automated Reporting", description: "Scheduled reports with insights, trends, and recommended next actions." },
    ],
    includedTitle: "Metrics That Matter",
    included: [
      "Traffic: sessions, sources, bounce rate, time on site",
      "Conversion: rate, cost per conversion, lead quality, CLV",
      "Engagement: CTR, social, email opens, video, downloads",
      "Revenue: ROAS, CAC, AOV, revenue by channel",
    ],
    processTitle: "Our Analytics Implementation Process",
    process: [
      { step: "01", title: "Audit & Discovery", description: "Assess current setup, find tracking gaps, and define KPIs." },
      { step: "02", title: "Strategy & Planning", description: "Measurement framework aligned with business and marketing goals." },
      { step: "03", title: "Implementation", description: "Tracking, data integrations, dashboards, and attribution models." },
      { step: "04", title: "Validation", description: "Confirm accuracy, then train your team and optimize continuously." },
    ],
    faqs: [],
    ctaLabel: "Get Your Free Analytics Audit",
  }),
  "influencer-marketing": page({
    slug: "influencer-marketing",
    seoTitle: "Influencer Marketing",
    seoDescription:
      "Influencer marketing that builds authentic connections with creator partnerships, campaign management, and ROI tracking.",
    label: "Influencer Marketing",
    title: "Influencer Marketing That Builds Authentic Connections",
    highlight: "Authentic Connections",
    description:
      "92% of consumers trust recommendations from individuals over brands, and influencer marketing delivers average returns of $5.78 for every dollar invested. We build strategic partnerships that align with your brand values.",
    tags: ["Creator Partnerships", "Campaign Management", "Performance Tracking", "ROI Optimization"],
    stats: [
      { value: "92%", label: "Trust influencer recommendations" },
      { value: "11x", label: "ROI vs traditional advertising" },
      { value: "49%", label: "Consumers rely on influencer advice" },
      { value: "5.2x", label: "Higher engagement than brand posts" },
    ],
    intro: {
      title: "The Power of Authentic Influence",
      body: "Influencers have invested years building loyal communities who trust their judgment. When they endorse your brand, that trust transfers to you.",
    },
    cardsTitle: "End-to-End Campaign Management",
    cards: [
      { title: "Influencer Discovery & Vetting", description: "Audience demographics, engagement authenticity, content quality, and brand safety." },
      { title: "Strategy Development", description: "Objectives, tier selection, formats, messaging, timeline, and budget." },
      { title: "Outreach & Negotiation", description: "Professional outreach, rates, contracts, usage rights, and relationships." },
      { title: "Content Collaboration", description: "Creative briefs that balance brand messaging with authentic creator voice." },
      { title: "Campaign Amplification", description: "Boost top-performing content with paid promotion beyond organic reach." },
      { title: "Performance Analytics", description: "Reach, engagement, traffic, conversions, attribution, and ROI." },
    ],
    includedTitle: "Influencer Tiers We Work With",
    included: [
      "Nano (1K–10K) — highest engagement, hyper-niche",
      "Micro (10K–100K) — authenticity and content skill",
      "Mid-tier (100K–500K) — professional content, significant reach",
      "Macro (500K–1M) — polished content and brand association",
      "Mega/Celebrity (1M+) — maximum exposure",
    ],
    processTitle: "How We Build Successful Campaigns",
    process: [
      { step: "01", title: "Strategy & Goals", description: "Objectives, audience, messages, metrics, and budget." },
      { step: "02", title: "Influencer Research", description: "Evaluate creators for alignment, authenticity, and brand fit." },
      { step: "03", title: "Outreach", description: "Negotiation, contracts, and relationship establishment." },
      { step: "04", title: "Execution", description: "Content, posting schedules, compliance, analysis, and reporting." },
    ],
    faqs: [],
    ctaLabel: "Start Your Campaign",
  }),
  "ai-agents-automation": page({
    slug: "ai-agents-automation",
    seoTitle: "AI Agents & Workflow Automation",
    seoDescription:
      "AI agents and workflow automation that work 24/7—reduce manual tasks by 70% with custom intelligent automation.",
    label: "AI Agents & Automation",
    title: "AI Agents & Workflow Automation That Work 24/7 for Your Business",
    highlight: "24/7",
    description:
      "Imagine a tireless digital workforce that handles repetitive tasks, makes intelligent decisions, and operates around the clock. AI agents automate business processes while continuously learning and adapting.",
    tags: ["24/7 Operations", "70% Task Reduction", "ROI in Months"],
    stats: [
      { value: "40–60%", label: "Faster decision-making" },
      { value: "70%", label: "Reduction in manual tasks" },
      { value: "79%", label: "Companies achieve ROI in 12 months" },
      { value: "99%+", label: "Accuracy on automated processes" },
    ],
    intro: {
      title: "Understanding AI Agents and Intelligent Automation",
      body: "AI agents combine NLP, reasoning, planning, and automation. Unlike rigid rule-based automation, they think, learn, and adapt—processing documents, answering customers, managing data, and making decisions in real time.",
    },
    cardsTitle: "Custom AI Agents Tailored to Your Business",
    cards: [
      { title: "Customer Service Automation", description: "Handle inquiries, resolve common issues, escalate complex cases, and personalize at scale." },
      { title: "Document Processing", description: "Extract data from invoices, contracts, and forms with validation and digital archives." },
      { title: "Workflow & Process Automation", description: "Coordinate multi-step workflows, approvals, and cross-system data." },
      { title: "Lead Qualification & Sales", description: "Qualify, enrich, score, schedule, and follow up automatically." },
      { title: "Email & Communication", description: "Triage inboxes, draft replies, schedule meetings, and route messages." },
      { title: "Financial & HR Automation", description: "Invoices, reconciliation, resume screening, onboarding, and analytics." },
    ],
    includedTitle: "Enterprise-Grade Security",
    included: [
      "Data encryption in transit and at rest",
      "Role-based access controls",
      "Comprehensive audit trails",
      "GDPR, HIPAA, and SOC 2 aligned implementations",
      "Integrations with Salesforce, HubSpot, Gmail, Slack, Shopify, QuickBooks, and custom APIs",
    ],
    processTitle: "From Strategy to Deployment in Weeks",
    process: [
      { step: "01", title: "Discovery", description: "Week 1: map processes, pain points, metrics, and high-impact use cases." },
      { step: "02", title: "Design", description: "Weeks 1–2: architecture, integrations, decision logic, and security." },
      { step: "03", title: "Build & Test", description: "Weeks 2–5: configure platforms, train models, test accuracy and load." },
      { step: "04", title: "Deploy & Optimize", description: "Weeks 5–6 plus ongoing: rollout, training, monitoring, and monthly reviews." },
    ],
    faqs: [
      {
        question: "Will AI agents replace my employees?",
        answer:
          "No. They take repetitive work off your team's plate so people can focus on strategy, relationships, and creative work.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Most working agents ship in 4–6 weeks using our proven methodology, often starting with a focused pilot.",
      },
      {
        question: "Do we need technical expertise?",
        answer:
          "We use no-code and low-code approaches your team can understand and manage, with ongoing Senseoza support.",
      },
    ],
    ctaLabel: "Schedule Free Consultation",
  }),
  "content-marketing-pune": page({
    slug: "content-marketing-pune",
    seoTitle: "Content Marketing Services in Pune",
    seoDescription:
      "AI-powered content marketing in Pune that ranks on Google, appears in ChatGPT & Gemini, and converts local customers.",
    label: "Pune, Maharashtra",
    title: "Content Marketing Services in Pune",
    highlight: "Pune",
    description:
      "AI-powered content that ranks on Google, gets found in ChatGPT & Gemini, and converts Pune customers into clients.",
    tags: ["SEO Blog Writing", "Local Strategy", "EN + HI + MR"],
    stats: [
      { value: "3x", label: "Average organic traffic increase in 90 days" },
      { value: "100%", label: "AI-optimised for Google, ChatGPT & Gemini" },
      { value: "EN+HI+MR", label: "Content in English, Hindi & Marathi" },
      { value: "48hrs", label: "Average content delivery time" },
    ],
    intro: {
      title: "Why Pune businesses are losing customers to competitors with better content",
      body: "Pune's digital market is growing fast — from IT parks in Hinjewadi to retail in Kothrud and Aundh. Without regular, keyword-targeted content, your website doesn't rank and you spend more on ads just to stay visible. We research what Pune customers search for, create content that ranks, and structure it to appear in AI answers.",
    },
    cardsTitle: "Our Content Marketing Services in Pune",
    cards: [
      { title: "SEO Blog Writing", description: "Long-form posts for Pune audiences targeting the queries your customers actually type." },
      { title: "Website Copywriting", description: "Conversion-focused copy that speaks to local customers and search engines." },
      { title: "Social Media Content", description: "Calendars for Instagram, LinkedIn, and Facebook designed for Pune business culture." },
      { title: "Video Scripts & Reels", description: "Short-form scripts, YouTube descriptions, and Reel concepts that convert viewers." },
      { title: "Email Newsletters", description: "Monthly newsletters that educate, build trust, and generate repeat business." },
      { title: "AI Content Strategy", description: "Competitor gap analysis, trending Pune topics, and a 90-day content roadmap." },
    ],
    includedTitle: "Why Pune businesses choose Senseoza",
    included: [
      "Pune-based agency that understands Baner, Wakad, PCMC, and Hinjewadi",
      "Content that generic Mumbai or Bangalore agencies can't localize",
      "On-page SEO, internal links, schema, and ranking tracking",
    ],
    processTitle: "How our content marketing process works",
    process: [
      { step: "01", title: "Discovery & Audit", description: "Audit existing content, competitor rankings, and keyword gaps." },
      { step: "02", title: "Content Strategy", description: "90-day calendar targeting local search terms your buyers use." },
      { step: "03", title: "AI-Assisted Creation", description: "AI research and drafts, then human experts add Pune-specific context." },
      { step: "04", title: "Publish, Report & Scale", description: "SEO publish, monthly ranking reports, and the next content wave." },
    ],
    faqs: [
      {
        question: "What content marketing services does Senseoza offer in Pune?",
        answer:
          "SEO blogs, website copy, social calendars, video scripts, newsletters, and AI-led content strategy for Pune businesses.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Most clients see meaningful organic traffic movement within 90 days when publishing consistently with technical SEO in place.",
      },
      {
        question: "Does Senseoza create content in Marathi and Hindi?",
        answer:
          "Yes. We produce English, Hindi, and Marathi content so you can reach Pune audiences in the language they prefer.",
      },
    ],
    ctaLabel: "Book Your Free Audit",
  }),
};

export function getServicePage(slug: string) {
  return servicePages[slug];
}

export function getServiceSlugs() {
  return Object.keys(servicePages);
}
