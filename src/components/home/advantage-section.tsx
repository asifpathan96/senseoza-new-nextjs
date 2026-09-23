"use client";

import { motion } from "framer-motion";
import { whyChooseContent } from "@/data/homepage";
import { TiltSurface, easeOut, viewOnce } from "@/components/home/motion-effects";

export function AdvantageSection() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewOnce}
          className="section-kicker"
        >
          {whyChooseContent.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, rotateY: -28, x: -24 }}
          whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mt-3 max-w-xl origin-left font-heading text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          {whyChooseContent.title}
        </motion.h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          A creative growth partner—not another agency that hides behind templates and dashboards.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1100 }}>
          {whyChooseContent.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, rotateY: index % 2 === 0 ? -85 : 85, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={viewOnce}
              transition={{ delay: index * 0.08, duration: 0.7, ease: easeOut }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <TiltSurface className="h-full" strength={7}>
                <article className="surface-card relative z-[2] h-full rounded-2xl border p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-xl text-accent">
                      {item.emoji}
                    </span>
                    <span className="font-heading text-sm font-semibold tracking-[0.16em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
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
