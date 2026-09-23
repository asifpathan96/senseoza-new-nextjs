export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  results: string[];
  services: string[];
  image: string;
  featured: boolean;
};

export const portfolioCategories = [
  "All",
  "Web Development",
  "Branding",
  "Digital Marketing",
  "Mobile App",
  "Video",
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "technova-corporate-platform",
    title: "TechNova Corporate Platform",
    client: "TechNova Solutions",
    category: "Web Development",
    description:
      "A complete corporate website redesign with AI-powered lead scoring, resulting in 180% more qualified inquiries within 90 days.",
    results: ["180% increase in qualified leads", "2.1s average load time", "95 PageSpeed score"],
    services: ["Corporate Website", "SEO Services", "Content Marketing"],
    image: "/portfolio/technova.jpg",
    featured: true,
  },
  {
    slug: "medicare-plus-healthcare-seo",
    title: "MediCare Plus Local SEO Domination",
    client: "MediCare Plus Clinics",
    category: "Digital Marketing",
    description:
      "Multi-location local SEO strategy that placed all 12 clinic locations in Google's local 3-pack within 6 months.",
    results: ["12/12 locations in local 3-pack", "340% increase in appointment bookings", "4.8★ average review rating"],
    services: ["Local SEO", "Google Business Profile Optimization", "Content Marketing"],
    image: "/portfolio/medicare.jpg",
    featured: true,
  },
  {
    slug: "urbanbuild-brand-identity",
    title: "UrbanBuild Brand Identity System",
    client: "UrbanBuild Construction",
    category: "Branding",
    description:
      "Complete brand identity overhaul including logo, guidelines, and marketing collateral for a premium construction firm.",
    results: ["Won 3 major contracts post-rebrand", "Unified brand across 5 offices", "Featured in industry publication"],
    services: ["Brand Identity", "Logo Design", "Brochure Design"],
    image: "/portfolio/urbanbuild.jpg",
    featured: true,
  },
  {
    slug: "eduprime-enrollment-funnel",
    title: "EduPrime Enrollment Funnel",
    client: "EduPrime Academy",
    category: "Digital Marketing",
    description:
      "Full-funnel digital marketing campaign that filled 95% of seats for the academic year ahead of schedule.",
    results: ["95% enrollment capacity reached", "62% lower cost per enrollment", "2,400 webinar attendees"],
    services: ["Landing Page", "Facebook Marketing", "Email Marketing"],
    image: "/portfolio/eduprime.jpg",
    featured: false,
  },
  {
    slug: "autodrive-dealer-platform",
    title: "AutoDrive Dealer Platform",
    client: "AutoDrive Motors",
    category: "Web Development",
    description:
      "Inventory-integrated dealership website with VIN-level SEO pages and integrated test drive booking system.",
    results: ["250+ test drive bookings/month", "45% increase in organic traffic", "Integrated 800+ vehicle listings"],
    services: ["Business Website", "SEO Friendly Website", "Google Ads"],
    image: "/portfolio/autodrive.jpg",
    featured: false,
  },
  {
    slug: "fitcore-app-launch",
    title: "FitCore Mobile App Launch",
    client: "FitCore Gym Chain",
    category: "Mobile App",
    description:
      "Cross-platform fitness app with workout tracking, class booking, and membership management for 20 gym locations.",
    results: ["50,000+ downloads in 3 months", "4.7★ App Store rating", "35% reduction in front-desk workload"],
    services: ["Cross Platform App Development", "UI/UX Design", "Marketing Automation"],
    image: "/portfolio/fitcore.jpg",
    featured: true,
  },
  {
    slug: "greenleaf-ecommerce",
    title: "GreenLeaf D2C E-commerce",
    client: "GreenLeaf Organics",
    category: "Web Development",
    description:
      "Shopify Plus store with custom theme, subscription model, and integrated performance marketing campaigns.",
    results: ["₹2.4Cr revenue in first year", "28% repeat purchase rate", "3.8x ROAS on Meta Ads"],
    services: ["E-commerce Website", "Meta Ads", "Email Marketing"],
    image: "/portfolio/greenleaf.jpg",
    featured: false,
  },
  {
    slug: "finsecure-thought-leadership",
    title: "FinSecure Thought Leadership",
    client: "FinSecure Advisors",
    category: "Digital Marketing",
    description:
      "Content marketing and LinkedIn strategy that positioned founders as industry authorities and generated B2B leads.",
    results: ["15,000+ LinkedIn followers gained", "80 qualified B2B leads/month", "Featured in 4 industry publications"],
    services: ["LinkedIn Marketing", "Content Marketing", "Podcast Production"],
    image: "/portfolio/finsecure.jpg",
    featured: false,
  },
  {
    slug: "travelwise-video-campaign",
    title: "TravelWise Video Campaign",
    client: "TravelWise Agency",
    category: "Video",
    description:
      "Destination video series with drone footage and social-first editing that drove 400% increase in booking inquiries.",
    results: ["2M+ video views across platforms", "400% increase in booking inquiries", "Viral Reel with 500K views"],
    services: ["Drone Shoots", "Reels Production", "Instagram Marketing"],
    image: "/portfolio/travelwise.jpg",
    featured: false,
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((p) => p.slug === slug);
}

export function getFeaturedPortfolio(): PortfolioItem[] {
  return portfolioItems.filter((p) => p.featured);
}
