"use client";

import { motion } from "framer-motion";
import { ContactCTA } from "@/components/home/contact-cta";
import { PageHero } from "@/components/pages/page-hero";
import type { ServicePageContent } from "@/data/service-pages";

export function ServicePageView({ page }: { page: ServicePageContent }) {
  return (
    <div className="page-ambient">
      <PageHero
        label={page.label}
        title={page.title}
        highlight={page.highlight}
        description={page.description}
        tags={page.tags}
        primaryCta={page.ctaLabel}
        secondaryCta="View All Services"
        secondaryHref="/services"
      />

      {page.stats.length > 0 && (
        <section className="section-pad relative">
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="glass-panel grid grid-cols-2 gap-6 rounded-[2rem] px-6 py-10 lg:grid-cols-4">
              {page.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-extrabold text-heading sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.intro && (
        <section className="section-pad relative">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="section-title text-2xl sm:text-3xl">{page.intro.title}</h2>
            <p className="mt-4 text-muted leading-relaxed">{page.intro.body}</p>
          </div>
        </section>
      )}

      {page.cards.length > 0 && (
        <section className="section-pad relative">
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="section-title text-2xl sm:text-3xl">{page.cardsTitle}</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {page.cards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-6"
                >
                  <h3 className="font-heading text-base font-extrabold uppercase tracking-wide text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.included.length > 0 && (
        <section className="section-pad relative">
          <div className="relative z-10 mx-auto max-w-6xl">
            <h2 className="section-title mb-8 text-center text-2xl sm:text-3xl">
              {page.includedTitle}
            </h2>
            <div className="glass-panel grid gap-3 rounded-[2rem] p-8 sm:grid-cols-2">
              {page.included.map((item) => (
                <p key={item} className="text-sm text-muted">
                  <span className="mr-2 text-primary">✓</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.process.length > 0 && (
        <section className="section-pad relative">
          <div className="relative z-10 mx-auto max-w-6xl">
            <h2 className="section-title mb-8 text-center text-2xl sm:text-3xl">
              {page.processTitle}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {page.process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="glass-card p-6"
                >
                  <p className="font-heading text-3xl font-extrabold text-primary/80">
                    {step.step}
                  </p>
                  <h3 className="mt-3 font-heading text-base font-extrabold uppercase tracking-wide text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.faqs.length > 0 && (
        <section className="section-pad relative">
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="section-title mb-8 text-center text-2xl sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="glass-card p-6">
                  <h3 className="font-heading text-base font-bold text-heading">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </div>
  );
}
