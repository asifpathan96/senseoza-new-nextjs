"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processContent } from "@/data/homepage";
import { easeOut, viewOnce } from "@/components/home/motion-effects";

export function ProcessPreview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.35"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="how-it-works" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewOnce}
          className="section-kicker"
        >
          {processContent.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mt-3 max-w-xl font-heading text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
        >
          {processContent.title}
        </motion.h2>
        <p className="mt-3 max-w-lg text-muted">{processContent.subtitle}</p>

        <div ref={trackRef} className="relative mt-14">
          <div className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-heading/15 lg:block" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-0 top-[1.15rem] hidden h-0.5 origin-left bg-gradient-to-r from-[#5CCFB6] to-[#3D9FD6] lg:block"
          />

          <ol className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {processContent.steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: 56 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewOnce}
                transition={{ delay: index * 0.12, duration: 0.6, ease: easeOut }}
                className="relative"
              >
                <span className="relative z-[1] mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-primary/50 bg-background font-heading text-xs font-bold text-accent">
                  {step.step}
                </span>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-heading">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
