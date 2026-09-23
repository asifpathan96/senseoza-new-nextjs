"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { coreServicesContent } from "@/data/homepage";
import { easeOut, viewOnce } from "@/components/home/motion-effects";

export function ServicesPreview() {
  const total = String(coreServicesContent.items.length).padStart(2, "0");

  return (
    <section id="services" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewOnce}
              className="section-kicker"
            >
              {coreServicesContent.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewOnce}
              transition={{ delay: 0.08, duration: 0.6, ease: easeOut }}
              className="mt-3 max-w-lg font-heading text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
            >
              {coreServicesContent.title}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewOnce}
            className="max-w-sm text-sm text-muted"
          >
            {coreServicesContent.subtitle}
          </motion.p>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {coreServicesContent.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewOnce}
              transition={{ delay: index * 0.07, duration: 0.55, ease: easeOut }}
            >
              <Link
                href={item.href}
                className="group relative grid overflow-hidden py-7 sm:grid-cols-[5.5rem_1fr_auto] sm:items-start sm:gap-8"
              >
                <span className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-primary/15 to-transparent transition-[width] duration-500 ease-out group-hover:w-full" />
                <span className="relative font-heading text-sm font-semibold tracking-[0.16em] text-accent">
                  {String(index + 1).padStart(2, "0")} / {total}
                </span>
                <div className="relative">
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-heading transition group-hover:translate-x-2 group-hover:text-primary sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight className="relative hidden h-5 w-5 text-heading/40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-heading sm:block" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
