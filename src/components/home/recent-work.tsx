"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { recentWorkContent } from "@/data/homepage";
import { TiltSurface, easeOut, viewOnce } from "@/components/home/motion-effects";

export function RecentWork() {
  return (
    <section id="work" className="section-pad relative z-10 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">{recentWorkContent.label}</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
          {recentWorkContent.title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4" style={{ perspective: 1200 }}>
          {recentWorkContent.items.map((item, index) => (
            <motion.div
              key={item.client}
              initial={{ rotateY: 18, x: -20 }}
              whileInView={{ rotateY: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: easeOut }}
              style={{ transformOrigin: "left center" }}
              className="fold-card h-full"
            >
              <TiltSurface className="h-full" strength={12}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative z-[2] block h-full overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:border-primary"
                >
                  <div className="relative aspect-video overflow-hidden bg-[#0D0D1A]">
                    <Image
                      src={item.image}
                      alt={`${item.client} website`}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {item.industry}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-heading">
                      {item.client}
                    </h3>
                    <p className="mt-4 font-heading text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                      {item.metric}
                    </p>
                  </div>
                </a>
              </TiltSurface>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewOnce}
          className="mt-10"
        >
          <Link
            href={recentWorkContent.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-heading transition hover:text-primary"
          >
            {recentWorkContent.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
