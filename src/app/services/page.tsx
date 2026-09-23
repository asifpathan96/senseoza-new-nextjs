import { PageHero } from "@/components/pages/page-hero";
import { ServicesCatalog } from "@/components/pages/services-catalog";
import { ContactCTA } from "@/components/home/contact-cta";
import { serviceOverview } from "@/data/service-pages";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Digital Marketing Services",
  description: serviceOverview.description,
  path: "/services",
  keywords: ["digital marketing services", "SEO", "PPC", "AI marketing"],
});

export default function ServicesPage() {
  return (
    <div className="page-ambient">
      <PageHero
        label={serviceOverview.label}
        title={serviceOverview.title}
        highlight={serviceOverview.highlight}
        description={serviceOverview.description}
        primaryCta="Get Started Today"
        secondaryCta="View Case Studies"
        secondaryHref="/case-studies"
      />

      <ServicesCatalog items={serviceOverview.items} />

      <ContactCTA />
    </div>
  );
}
