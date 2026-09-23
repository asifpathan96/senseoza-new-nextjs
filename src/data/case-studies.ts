export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; description: string }[];
  services: string[];
  testimonial: { quote: string; author: string; role: string };
  image: string;
  duration: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "technova-180-lead-increase",
    title: "How TechNova Increased Qualified Leads by 180%",
    client: "TechNova Solutions",
    industry: "Technology",
    challenge:
      "TechNova's outdated website failed to communicate their enterprise capabilities. Despite strong offline reputation, inbound leads were inconsistent and mostly unqualified small businesses.",
    solution:
      "We rebuilt their corporate website with conversion-focused architecture, implemented AI-powered lead scoring, and launched targeted LinkedIn campaigns targeting CTOs and IT directors at mid-market companies.",
    results: [
      { metric: "Qualified Leads", value: "+180%", description: "Increase in enterprise-grade inquiries within 90 days" },
      { metric: "Page Speed", value: "95", description: "Google PageSpeed score on mobile" },
      { metric: "Pipeline Value", value: "₹4.2Cr", description: "New pipeline generated in first quarter" },
    ],
    services: ["Corporate Website", "LinkedIn Marketing", "SEO Services"],
    testimonial: {
      quote: "Senseoza transformed our digital presence from an embarrassment into our strongest sales asset. The quality of inbound leads changed overnight.",
      author: "Vikram Singh",
      role: "CEO, TechNova Solutions",
    },
    image: "/case-studies/technova.jpg",
    duration: "3 months",
  },
  {
    slug: "medicare-local-seo-domination",
    title: "MediCare Plus: 12 Clinics, 12 Local 3-Pack Rankings",
    client: "MediCare Plus",
    industry: "Healthcare",
    challenge:
      "A growing clinic chain struggling with inconsistent online visibility. Each location had outdated Google Business Profiles, few reviews, and no local SEO strategy.",
    solution:
      "We implemented a systematic local SEO program: optimized all 12 GBP listings, built location-specific landing pages, launched a review generation system, and created health education content targeting local search queries.",
    results: [
      { metric: "Local Rankings", value: "12/12", description: "All locations in Google's local 3-pack" },
      { metric: "Appointments", value: "+340%", description: "Increase in online appointment bookings" },
      { metric: "Reviews", value: "4.8★", description: "Average rating across all locations" },
    ],
    services: ["Local SEO", "Google Business Profile Optimization", "Content Marketing"],
    testimonial: {
      quote: "We went from invisible on Google Maps to dominating local search in every city we're in. Patient acquisition has never been easier.",
      author: "Dr. Ananya Reddy",
      role: "Medical Director, MediCare Plus",
    },
    image: "/case-studies/medicare.jpg",
    duration: "6 months",
  },
  {
    slug: "greenleaf-d2c-scaling",
    title: "GreenLeaf Organics: ₹2.4Cr First-Year Revenue",
    client: "GreenLeaf Organics",
    industry: "E-commerce",
    challenge:
      "A premium organic products brand selling only through retail partners wanted to launch D2C but lacked e-commerce infrastructure and digital marketing expertise.",
    solution:
      "We built a Shopify Plus store with subscription functionality, created a full-funnel Meta Ads strategy with UGC creative, and implemented email flows for acquisition, retention, and win-back.",
    results: [
      { metric: "Revenue", value: "₹2.4Cr", description: "First-year D2C revenue from zero baseline" },
      { metric: "ROAS", value: "3.8x", description: "Return on Meta Ads spend" },
      { metric: "Repeat Rate", value: "28%", description: "Customer repeat purchase rate" },
    ],
    services: ["E-commerce Website", "Meta Ads", "Email Marketing"],
    testimonial: {
      quote: "Senseoza didn't just build us a store—they built us a growth engine. D2C is now 40% of our total revenue.",
      author: "Kavita Nair",
      role: "Founder, GreenLeaf Organics",
    },
    image: "/case-studies/greenleaf.jpg",
    duration: "12 months",
  },
  {
    slug: "eduprime-enrollment-success",
    title: "EduPrime: 95% Enrollment Before Season End",
    client: "EduPrime Academy",
    industry: "Education",
    challenge:
      "A coaching institute facing declining enrollments due to increased competition from online platforms and ineffective traditional advertising.",
    solution:
      "We designed a webinar funnel strategy with free masterclass sessions, retargeting campaigns for attendees, and an automated email nurture sequence showcasing student success stories.",
    results: [
      { metric: "Enrollment", value: "95%", description: "Capacity filled before academic season deadline" },
      { metric: "Cost/Enrollment", value: "-62%", description: "Reduction in cost per enrolled student" },
      { metric: "Webinar Attendees", value: "2,400", description: "Total masterclass registrations" },
    ],
    services: ["Landing Page", "Facebook Marketing", "Email Marketing"],
    testimonial: {
      quote: "Our enrollment numbers were declining for three years straight. Senseoza's funnel strategy reversed the trend completely.",
      author: "Prof. Rajesh Kumar",
      role: "Director, EduPrime Academy",
    },
    image: "/case-studies/eduprime.jpg",
    duration: "4 months",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
