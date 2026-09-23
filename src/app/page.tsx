import { HeroSection } from "@/components/home/hero-section";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { RecentWork } from "@/components/home/recent-work";
import { ServicesPreview } from "@/components/home/services-preview";
import { StatsSection } from "@/components/home/stats-section";
import { ProcessPreview } from "@/components/home/process-preview";
import { IndustriesPreview } from "@/components/home/industries-preview";
import { AdvantageSection } from "@/components/home/advantage-section";
import { LatestBlogs } from "@/components/home/latest-blogs";
import { HomeStudioCta } from "@/components/home/home-studio-cta";
import { SchemaScript } from "@/components/shared/schema-script";
import { generateFAQSchema } from "@/lib/seo";
import { faqs } from "@/data/testimonials";

export default function Home() {
  return (
    <div className="page-ambient">
      <SchemaScript data={generateFAQSchema(faqs.slice(0, 4))} />
      <HeroSection />
      <LogoMarquee />
      <WhyChooseUs />
      <RecentWork />
      <ServicesPreview />
      <StatsSection />
      <ProcessPreview />
      <IndustriesPreview />
      <AdvantageSection />
      <LatestBlogs />
      <HomeStudioCta />
    </div>
  );
}
