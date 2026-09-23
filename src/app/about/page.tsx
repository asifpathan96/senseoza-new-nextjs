import Image from "next/image";
import Link from "next/link";
import { AboutHero } from "@/components/pages/about-hero";
import { aboutPageContent } from "@/data/site-pages";
import { generateSEO, siteConfig } from "@/lib/seo";

export const metadata = generateSEO({
  title: "About Senseoza | Leading AI-Powered Marketing Agency in Pune",
  description: aboutPageContent.description,
  path: "/about",
  keywords: ["about senseoza", "AI marketing agency Pune"],
});

export default function AboutPage() {
  const content = aboutPageContent;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I%20would%20like%20to%20get%20a%20free%20marketing%20audit`;

  return (
    <div className="page-ambient">
      <AboutHero />

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={content.story.image}
              alt={content.story.imageAlt}
              fill
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="section-kicker mb-4">{content.story.label}</p>
            <h2 className="max-w-xl font-heading text-2xl font-semibold tracking-tight text-heading sm:text-4xl">
              {content.story.title}
            </h2>
            {content.story.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-4 max-w-xl text-muted leading-relaxed">
                {p}
              </p>
            ))}
            <ol className="mt-8 space-y-4 border-l border-border pl-5">
              {content.story.timeline.map((item) => (
                <li key={item.year}>
                  <p className="font-heading text-sm font-semibold text-heading">{item.year}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="section-kicker mb-4">What we stand for</p>
          <h2 className="max-w-2xl font-heading text-2xl font-semibold tracking-tight text-heading sm:text-4xl">
            Principles we actually use on retainers
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {content.values.map((value) => (
              <article key={value.title} className="surface-card rounded-2xl border p-6 sm:p-8">
                <h3 className="font-heading text-lg font-semibold tracking-tight text-heading">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="section-kicker mb-4">{content.staffing.label}</p>
          <h2 className="max-w-2xl font-heading text-2xl font-semibold tracking-tight text-heading sm:text-4xl">
            {content.staffing.title}
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">{content.staffing.subtitle}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.staffing.steps.map((step, index) => (
              <div key={step.title} className="border-t border-border pt-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-heading sm:text-4xl">
            {content.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted leading-relaxed">{content.cta.body}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow mt-8 inline-flex rounded-full px-8 py-3.5 text-sm font-semibold text-[#0D0D1A]"
          >
            {content.cta.primary}
          </a>
          <p className="mt-8 text-sm text-muted">
            <Link href="/contact" className="font-medium text-heading hover:underline">
              Or write to us
            </Link>
            <span className="mx-2">·</span>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="font-medium text-heading hover:underline">
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
