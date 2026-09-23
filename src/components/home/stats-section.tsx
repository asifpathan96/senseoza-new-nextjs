"use client";

import { motion } from "framer-motion";
import { resultsContent } from "@/data/homepage";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { TiltSurface, easeOut, viewOnce } from "@/components/home/motion-effects";

const accents = [
  "bg-[#5CCFB6]",
  "bg-[#5CCFB6]",
  "bg-[#5CCFB6]",
  "bg-[#5CCFB6]",
];

export function StatsSection() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          className="section-kicker"
        >
          {resultsContent.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewOnce}
          transition={{ duration: 0.55, ease: easeOut }}
          className="mt-3 max-w-xl origin-left font-heading text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
        >
          {resultsContent.title}
        </motion.h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          {resultsContent.subtitle}
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resultsContent.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, rotateX: 18 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={viewOnce}
              transition={{ delay: index * 0.1, duration: 0.6, ease: easeOut }}
              style={{ perspective: 800 }}
            >
              <TiltSurface className="h-full" strength={12}>
                <article className="surface-card relative z-[2] h-full rounded-2xl border p-6">
                  <div className={`h-1.5 w-12 rounded-full ${accents[index]}`} />
                  <p className="mt-5 font-heading text-5xl font-bold tracking-tight text-heading">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <h3 className="mt-3 font-heading text-base font-semibold text-heading">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {stat.detail}
                  </p>
                </article>
              </TiltSurface>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
