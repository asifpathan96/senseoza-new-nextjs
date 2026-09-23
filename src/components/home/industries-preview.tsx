"use client";

import { type PointerEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { industriesContent } from "@/data/homepage";
import { easeOut, viewOnce } from "@/components/home/motion-effects";

export function IndustriesPreview() {
  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${((event.clientX - rect.left) / rect.width) * 100}%`,
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${((event.clientY - rect.top) / rect.height) * 100}%`,
    );
  };

  return (
    <section id="industries" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          className="section-kicker"
        >
          {industriesContent.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mt-3 max-w-lg font-heading text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
        >
          {industriesContent.title}
        </motion.h2>
        <p className="mt-3 max-w-xl text-muted">{industriesContent.subtitle}</p>

        <div
          onPointerMove={handleMove}
          className="industry-grid relative mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {industriesContent.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewOnce}
              transition={{ delay: index * 0.04, duration: 0.45, ease: easeOut }}
              whileHover={{ y: -4 }}
              className="relative z-[1] overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/85 via-[#0D0D1A]/20 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 px-5 pb-5 font-heading text-lg font-semibold tracking-tight !text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
