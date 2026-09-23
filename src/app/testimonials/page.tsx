import { PageHero } from "@/components/pages/page-hero";
import { ContactCTA } from "@/components/home/contact-cta";
import { liveTestimonials } from "@/data/site-pages";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Client Testimonials",
  description: liveTestimonials.description,
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <div className="page-ambient">
      <PageHero
        label={liveTestimonials.label}
        title={liveTestimonials.title}
        description={liveTestimonials.description}
        primaryCta="Get Started Today"
        secondaryCta="View Case Studies"
        secondaryHref="/case-studies"
      />

      <section className="section-pad relative">
        <div className="glass-hero relative z-10 mx-auto max-w-3xl rounded-[2.5rem] px-6 py-12 text-center sm:px-12">
          <span className="section-label mb-4">Featured Client Review</span>
          <p className="text-lg leading-relaxed text-heading">
            “{liveTestimonials.featured.quote}”
          </p>
          <p className="mt-6 font-heading font-bold text-heading">
            {liveTestimonials.featured.name}
          </p>
          <p className="text-sm text-muted">{liveTestimonials.featured.role}</p>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="section-title mb-8 text-center text-2xl sm:text-3xl">
            What Our Clients Say
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {liveTestimonials.items.map((item) => (
              <article key={item.name} className="glass-card p-6">
                <p className="text-sm leading-relaxed text-muted">“{item.quote}”</p>
                <p className="mt-4 font-heading text-sm font-bold text-heading">
                  {item.name}
                </p>
                <p className="text-xs text-muted">{item.company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
