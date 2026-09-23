export type Industry = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
};

function createIndustry(
  title: string,
  shortDescription: string,
  challenges: string[],
  solutions: string[],
  services: string[]
): Industry {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return {
    slug,
    title,
    shortDescription,
    description: `Senseoza AI Digital Solutions specializes in ${title.toLowerCase()} digital marketing. ${shortDescription} We understand the unique regulatory, competitive, and customer dynamics of your sector—and build strategies that deliver measurable growth.`,
    challenges,
    solutions,
    services,
    stats: [
      { value: "3.2x", label: "Average ROI Increase" },
      { value: "65%", label: "More Qualified Leads" },
      { value: "40%", label: "Lower Acquisition Cost" },
    ],
    faqs: [
      {
        question: `Why choose Senseoza for ${title} marketing?`,
        answer: `We have deep experience in the ${title.toLowerCase()} sector. Our team understands industry-specific compliance, customer behavior, and competitive landscapes—allowing us to craft strategies that generic agencies simply cannot match.`,
      },
      {
        question: `What digital services work best for ${title}?`,
        answer: `Based on our experience, ${services.slice(0, 3).join(", ")} deliver the strongest results for ${title.toLowerCase()} businesses. We customize the mix based on your specific goals and market position.`,
      },
      {
        question: `How quickly can we see results?`,
        answer: `Paid campaigns can generate leads within weeks. SEO and content strategies typically show significant traction within 3–6 months. We set realistic milestones and report progress transparently every month.`,
      },
    ],
    keywords: [title.toLowerCase(), "digital marketing", "senseoza", "industry"],
  };
}

export const allIndustries: Industry[] = [
  createIndustry("Healthcare", "HIPAA-aware digital strategies that build patient trust and fill appointment books.", ["Strict advertising regulations", "Building patient trust online", "Competing with large hospital systems"], ["Compliant content marketing", "Local SEO for clinics", "Patient review management"], ["Local SEO", "Content Marketing", "Google Ads"]),
  createIndustry("Hospitals", "Enterprise digital presence for multi-specialty hospitals seeking regional dominance.", ["Multi-department coordination", "Emergency and specialty visibility", "Reputation management at scale"], ["Department-specific landing pages", "Healthcare SEO architecture", "Crisis communication protocols"], ["Corporate Website", "SEO Services", "PR Marketing"]),
  createIndustry("Clinics", "Local digital marketing that drives walk-ins, appointments, and specialist referrals.", ["Limited marketing budgets", "Hyper-local competition", "Online review sensitivity"], ["Google Business Profile optimization", "Targeted local ad campaigns", "Automated appointment reminders"], ["Local SEO", "Google Business Profile Optimization", "WhatsApp Marketing"]),
  createIndustry("Doctors", "Personal branding and patient acquisition for individual practitioners and specialists.", ["Building personal authority", "Managing online reputation", "Patient education content"], ["Doctor profile optimization", "Medical content marketing", "Video testimonials strategy"], ["LinkedIn Marketing", "Content Marketing", "SEO Services"]),
  createIndustry("Real Estate", "Lead generation systems that connect agents and developers with ready-to-buy prospects.", ["High competition for leads", "Long sales cycles", "Visual presentation demands"], ["Property listing SEO", "Virtual tour integration", "Retargeting ad funnels"], ["Landing Page", "Google Ads", "Photography"]),
  createIndustry("Construction", "Digital credibility for builders and contractors winning high-value projects.", ["Trust and credential proof", "Project portfolio showcase", "B2B lead generation"], ["Project case study websites", "LinkedIn B2B campaigns", "Drone showcase videos"], ["Corporate Website", "LinkedIn Marketing", "Drone Shoots"]),
  createIndustry("Hotels", "Direct booking optimization that reduces OTA dependency and increases margins.", ["OTA commission erosion", "Seasonal demand fluctuations", "Review-driven booking decisions"], ["Direct booking website optimization", "Google Hotel Ads", "Review generation campaigns"], ["E-commerce Website", "Google Ads", "Instagram Marketing"]),
  createIndustry("Restaurants", "Hyper-local marketing that fills tables and builds loyal regulars.", ["Foot traffic dependency", "Menu and offer promotion", "Delivery platform competition"], ["Google Maps dominance", "Social media food content", "Loyalty program automation"], ["Local SEO", "Instagram Marketing", "Reels Production"]),
  createIndustry("Automobile", "Digital showrooms and lead systems for dealerships and auto brands.", ["Inventory turnover pressure", "Test drive lead generation", "Multi-location management"], ["VIN-level SEO pages", "Inventory feed advertising", "Video walkaround content"], ["Performance Marketing", "Google Ads", "Product Videos"]),
  createIndustry("Transportation", "Fleet visibility and booking systems for logistics and transport companies.", ["Route and service visibility", "B2B contract acquisition", "Real-time communication needs"], ["Service area SEO pages", "Fleet showcase websites", "WhatsApp booking integration"], ["Business Website", "Local SEO", "WhatsApp Marketing"]),
  createIndustry("Education", "Enrollment marketing that connects institutions with motivated students and parents.", ["Enrollment seasonality", "Multi-program promotion", "Parent decision complexity"], ["Program-specific landing pages", "Virtual open day campaigns", "Alumni testimonial content"], ["Landing Page", "Facebook Marketing", "Content Marketing"]),
  createIndustry("Schools", "Community-building digital presence for K-12 schools and academies.", ["Parent trust building", "Admission inquiry management", "Event and achievement promotion"], ["School website redesign", "Admission funnel optimization", "Social proof campaigns"], ["Website Redesign", "SEO Services", "Social Media Marketing"]),
  createIndustry("Colleges", "Higher education marketing that drives applications and campus visits.", ["Program differentiation", "International student recruitment", "Alumni engagement"], ["Program comparison content", "Virtual campus tours", "Targeted paid campaigns"], ["Corporate Website", "YouTube Marketing", "Google Ads"]),
  createIndustry("Coaching", "Lead magnets and funnels that convert aspiring students into enrolled batches.", ["Trust in teaching quality", "Result proof requirements", "Seasonal batch cycles"], ["Free webinar funnels", "Success story content", "Retargeting ad sequences"], ["Landing Page", "Lead Generation", "Email Marketing"]),
  createIndustry("Manufacturing", "B2B digital presence that generates RFQs and distributor partnerships.", ["Long B2B sales cycles", "Technical product communication", "Global market reach"], ["Product catalog websites", "LinkedIn ABM campaigns", "Technical SEO content"], ["Corporate Website", "LinkedIn Marketing", "Technical SEO"]),
  createIndustry("Retail", "Omnichannel strategies bridging physical stores with e-commerce growth.", ["Showrooming behavior", "Inventory visibility online", "Local vs. national competition"], ["E-commerce platform setup", "Local inventory ads", "Loyalty email programs"], ["E-commerce Website", "Meta Ads", "Email Marketing"]),
  createIndustry("Ecommerce", "Full-funnel optimization for D2C brands scaling revenue profitably.", ["Rising customer acquisition costs", "Cart abandonment rates", "Platform dependency risks"], ["CRO and A/B testing", "Retention email flows", "Influencer seeding campaigns"], ["Performance Marketing", "Email Marketing", "Influencer Marketing"]),
  createIndustry("Finance", "Compliant digital marketing for financial services and fintech companies.", ["Regulatory advertising limits", "Trust and security concerns", "Complex product education"], ["Compliant content frameworks", "Thought leadership SEO", "Secure lead capture systems"], ["Content Marketing", "SEO Services", "LinkedIn Marketing"]),
  createIndustry("Insurance", "Lead generation at scale for insurance agents and policy providers.", ["High cost per lead", "Policy comparison shopping", "Renewal retention challenges"], ["Quote funnel optimization", "Comparison content SEO", "Renewal automation sequences"], ["Google Ads", "Landing Page", "Marketing Automation"]),
  createIndustry("Travel", "Inspirational content and booking systems for travel agencies and tour operators.", ["Seasonal booking patterns", "Visual destination marketing", "Review and trust factors"], ["Destination SEO pages", "Instagram travel content", "Booking engine integration"], ["Content Marketing", "Instagram Marketing", "Photography"]),
  createIndustry("Influencers", "Personal brand scaling for creators monetizing their audience.", ["Platform algorithm changes", "Brand deal acquisition", "Audience growth plateaus"], ["Media kit and portfolio sites", "Brand partnership outreach", "Multi-platform content strategy"], ["Portfolio Website", "Instagram Marketing", "Brand Identity"]),
  createIndustry("Fitness", "Member acquisition and retention marketing for gyms and fitness brands.", ["Membership churn rates", "Local competition density", "Transformation proof content"], ["Challenge funnel campaigns", "Before/after content strategy", "Local gym SEO dominance"], ["Local SEO", "Instagram Marketing", "Reels Production"]),
  createIndustry("Beauty", "Visual-first marketing for salons, spas, and beauty product brands.", ["Visual portfolio demands", "Appointment booking friction", "Trend-driven content cycles"], ["Instagram portfolio showcases", "Online booking integration", "Influencer collaboration programs"], ["Instagram Marketing", "Reels Production", "Influencer Marketing"]),
  createIndustry("Law Firms", "Authority-building digital marketing for legal practices and attorneys.", ["Ethics-compliant advertising", "Practice area specialization", "High-intent lead quality"], ["Practice area SEO pages", "Legal content marketing", "Google LSAs optimization"], ["SEO Services", "Content Marketing", "Google Ads"]),
  createIndustry("NGOs", "Mission-driven digital campaigns that amplify impact and drive donations.", ["Limited marketing budgets", "Donor trust building", "Volunteer recruitment needs"], ["Story-driven content campaigns", "Donation funnel optimization", "Grant visibility strategies"], ["Content Marketing", "Social Media Marketing", "Email Marketing"]),
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return allIndustries.find((i) => i.slug === slug);
}
