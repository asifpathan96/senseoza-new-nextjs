import { PageHero } from "@/components/pages/page-hero";
import { ContactCTA } from "@/components/home/contact-cta";
import { liveCaseStudies } from "@/data/site-pages";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Case Studies",
  description: liveCaseStudies.description,
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <div className="page-ambient">
      <PageHero
        label={liveCaseStudies.label}
        title={liveCaseStudies.title}
        description={liveCaseStudies.description}
        primaryCta="Start Your Project"
        secondaryCta="Contact Us"
        secondaryHref="/contact"
      />

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-6xl space-y-6">
          {liveCaseStudies.items.map((study) => (
            <article key={study.title} className="glass-card p-6 sm:p-8">
              <span className="section-label mb-4">{study.industry}</span>
              <h2 className="font-heading text-xl font-extrabold uppercase text-heading sm:text-2xl">
                {study.title}
              </h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-heading">
                    Challenge
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-heading">
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{study.solution}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <p className="font-heading text-xl font-extrabold text-heading">
                        {result.value}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-wide text-muted">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
