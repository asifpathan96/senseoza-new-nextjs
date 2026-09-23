"use client";

import { motion } from "framer-motion";
import { finalCtaContent } from "@/data/homepage";
import { siteConfig } from "@/lib/seo";

export function ContactCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I'd%20like%20to%20schedule%20a%20free%20consultation`;

  return (
    <section id="contact" className="section-pad relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-hero relative z-10 mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] px-6 py-14 text-center sm:px-12"
      >
        <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">
          {finalCtaContent.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted leading-relaxed">
          {finalCtaContent.subtitle}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow mt-8 inline-flex rounded-full px-8 py-3.5 text-sm font-semibold text-[#0D0D1A] transition hover:-translate-y-0.5"
        >
          {finalCtaContent.cta}
        </a>

        <div className="glass-hero-divider mt-10 border-t pt-8">
          <h3 className="font-heading text-lg font-bold text-heading">
            {finalCtaContent.secondaryTitle}
          </h3>
          <p className="mt-2 text-sm text-muted">
            {finalCtaContent.secondarySubtitle}
          </p>
          <p className="mt-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="font-semibold text-heading hover:underline"
            >
              {siteConfig.phone}
            </a>
            <span className="mx-2 text-muted">·</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-heading hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
