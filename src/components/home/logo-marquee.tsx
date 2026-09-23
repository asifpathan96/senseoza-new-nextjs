"use client";

import { motion } from "framer-motion";
import { clientsContent } from "@/data/homepage";
import { easeOut, viewOnce } from "@/components/home/motion-effects";

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof clientsContent.logos;
  reverse?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max items-center gap-10 pr-10 hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {loop.map((client, i) => (
          <span
            key={`${client.name}-${i}`}
            className="shrink-0 font-heading text-lg font-semibold tracking-tight text-heading/55 transition hover:text-heading sm:text-xl"
          >
            {client.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  const midpoint = Math.ceil(clientsContent.logos.length / 2);
  const rowOne = clientsContent.logos.slice(0, midpoint);
  const rowTwo = clientsContent.logos.slice(midpoint);

  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          className="section-kicker"
        >
          {clientsContent.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mt-2 font-heading text-2xl font-semibold tracking-tight text-heading sm:text-3xl"
        >
          {clientsContent.title}
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewOnce}
        transition={{ duration: 0.6 }}
        className="relative mt-8 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="space-y-5">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
        </div>
      </motion.div>
    </section>
  );
}
