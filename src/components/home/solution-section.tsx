"use client";

import { motion } from "framer-motion";
import { solutionContent } from "@/data/homepage";
import { siteConfig } from "@/lib/seo";

export function SolutionSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I%20would%20like%20to%20discuss%20the%20360%20AI%20Growth%20System`;

  return (
    <section id="solution" className="section-pad relative">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="section-label mb-4">{solutionContent.label}</span>
          <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">
            {solutionContent.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">{solutionContent.subtitle}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutionContent.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-card p-6"
            >
              <span className="text-2xl">{feature.emoji}</span>
              <h3 className="mt-3 font-heading text-base font-bold uppercase tracking-wide text-heading">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-primary"
          >
            Discuss Your Project on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
