"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const featured = testimonials.slice(0, 2);

  return (
    <section id="testimonials" className="section-pad relative">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-10 text-center text-2xl sm:text-3xl"
        >
          Testimonials
        </motion.h2>

        <div className="glass-panel mx-auto max-w-3xl overflow-hidden px-6 py-10 sm:px-10">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <div className="flex -space-x-4">
              {featured.map((item, i) => (
                <div
                  key={item.author}
                  className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#0D0D1A] bg-primary text-lg font-bold text-[#0D0D1A] shadow-md sm:h-24 sm:w-24"
                  style={{ zIndex: featured.length - i }}
                >
                  {item.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="font-heading text-xl font-extrabold uppercase tracking-wide text-heading sm:text-2xl">
                {featured[0]?.author}
              </p>
              <p className="mt-1 text-sm text-muted">{featured[0]?.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted italic sm:text-base">
                &ldquo;{featured[0]?.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {testimonials.slice(1, 3).map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <p className="text-sm leading-relaxed text-muted italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-4 font-heading text-sm font-bold uppercase text-heading">
                {item.author}
              </p>
              <p className="text-xs text-muted">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
