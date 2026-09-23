"use client";

import { motion } from "framer-motion";
import { fitContent } from "@/data/homepage";
import {
  HomeSection,
  HomeSectionHeader,
  sectionTheme,
} from "@/components/home/home-section";

export function FitSection() {
  const theme = sectionTheme.a;

  return (
    <HomeSection variant="a">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HomeSectionHeader
            variant="a"
            emoji="🤔"
            label="Fit Check"
            title={fitContent.title}
            subtitle={fitContent.subtitle}
            titleSize="md"
            className="max-w-2xl"
          />
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="surface-card rounded-2xl p-8"
          >
            <span className="section-label mb-4">
              <span>{fitContent.forYou.emoji}</span>
              {fitContent.forYou.label}
            </span>
            <h3 className={`font-heading text-xl font-bold ${theme.heading}`}>
              {fitContent.forYou.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {fitContent.forYou.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-0.5 text-success shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="surface-card rounded-2xl p-8"
          >
            <span className="section-label mb-4">
              <span>{fitContent.notForYou.emoji}</span>
              {fitContent.notForYou.label}
            </span>
            <h3 className="font-heading text-xl font-bold text-heading">
              {fitContent.notForYou.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {fitContent.notForYou.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-0.5 text-accent shrink-0">✗</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </HomeSection>
  );
}
