import { PageHero } from "@/components/pages/page-hero";
import { ContactForm } from "@/components/pages/contact-form";
import { ContactCTA } from "@/components/home/contact-cta";
import { contactPageContent } from "@/data/site-pages";
import { generateSEO, siteConfig } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Contact",
  description: contactPageContent.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="page-ambient">
      <PageHero
        label={contactPageContent.label}
        title={contactPageContent.title}
        highlight={contactPageContent.highlight}
        description={contactPageContent.description}
        primaryCta="Schedule a Call"
        secondaryCta="View Services"
        secondaryHref="/services"
      />

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-5">
            <div className="glass-card p-6">
              <h2 className="font-heading text-lg font-extrabold text-heading">Quick Contact</h2>
              <p className="mt-4 text-sm text-muted">Email Us</p>
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-heading hover:underline">
                {siteConfig.email}
              </a>
              <p className="mt-4 text-sm text-muted">Call Us</p>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="font-semibold text-heading hover:underline"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-heading text-lg font-extrabold text-heading">Prefer a Call?</h3>
              <p className="mt-2 text-sm text-muted">
                Book a free 30-minute consultation at a time that works for you.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-heading text-lg font-extrabold text-heading">What to Expect</h3>
              <ol className="mt-4 space-y-3">
                {contactPageContent.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm text-muted">
                    <span className="font-heading font-extrabold text-heading">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
