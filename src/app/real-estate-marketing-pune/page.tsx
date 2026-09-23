import { PageHero } from "@/components/pages/page-hero";
import { ContactCTA } from "@/components/home/contact-cta";
import { ContactForm } from "@/components/pages/contact-form";
import { realEstatePageContent } from "@/data/site-pages";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Real Estate Marketing Agency in Pune",
  description: realEstatePageContent.description,
  path: "/real-estate-marketing-pune",
  keywords: ["real estate marketing Pune", "builder digital marketing"],
});

export default function RealEstateMarketingPage() {
  const page = realEstatePageContent;

  return (
    <div className="page-ambient">
      <PageHero
        label={page.label}
        title={page.title}
        highlight={page.highlight}
        description={page.description}
        primaryCta="Book Free Strategy Call"
        secondaryCta="Chat on WhatsApp"
      />

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {page.partners.map((partner) => (
            <div key={partner.name} className="glass-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {partner.role}
              </p>
              <h2 className="mt-2 font-heading text-lg font-extrabold text-heading">
                {partner.name}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="section-title mb-8 text-center text-2xl sm:text-3xl">
            Why Most Real Estate Projects Fail Online
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.problems.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="font-heading text-base font-extrabold uppercase text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="section-title mb-3 text-center text-2xl sm:text-3xl">
            Full-Stack Marketing for Builders & Brands
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-muted">
            From the first creative to the last qualified lead — we handle it end-to-end.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.services.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="font-heading text-base font-extrabold uppercase text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="section-title mb-8 text-center text-2xl sm:text-3xl">
            Trusted By Growing Brands
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {page.cases.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="font-heading text-lg font-extrabold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="section-title mb-8 text-center text-2xl sm:text-3xl">
            Results Focused Approach
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {page.process.map((step) => (
              <div key={step.title} className="glass-card p-5">
                <p className="font-heading text-2xl font-extrabold text-primary/80">{step.step}</p>
                <h3 className="mt-2 font-heading text-sm font-extrabold uppercase text-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="section-title mb-8 text-center text-2xl sm:text-3xl">Why Choose Senseoza</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.why.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="font-heading text-base font-extrabold uppercase text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="section-title mb-4 text-center text-2xl sm:text-3xl">
            Get Your Free Marketing Audit
          </h2>
          <p className="mb-8 text-center text-muted">
            Share your project details and we will respond within 2 business hours.
          </p>
          <ContactForm />
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
