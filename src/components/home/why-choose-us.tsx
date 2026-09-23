"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { differentiatorsContent } from "@/data/homepage";

const accents = [
  "bg-[#5CCFB6]",
  "bg-[#5CCFB6]",
  "bg-[#5CCFB6]",
  "bg-[#5CCFB6]",
];

type StackingCardProps = {
  item: (typeof differentiatorsContent.items)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  canFold: boolean;
};

function StackingCard({
  item,
  index,
  total,
  scrollYProgress,
  canFold,
}: StackingCardProps) {
  const start = index / total;
  const end = index === total - 1 ? 1 : Math.min((index + 0.7) / total, 1);
  const targetScale = 1 - (total - index) * 0.03;
  const scale = useTransform(scrollYProgress, [start, 1], [1, targetScale]);
  const unfoldRange = index === 0 ? [0, 0.12] : [start, end];
  const fold = useTransform(scrollYProgress, unfoldRange, index === 0 ? [10, 0] : [26, 0]);

  return (
    <div className={canFold ? "h-[64vh] min-h-[360px]" : "mb-4"}>
      <div
        className={canFold ? "sticky top-36" : "static"}
        style={{ zIndex: index + 1, perspective: canFold ? 1400 : undefined }}
      >
        <motion.article
          style={
            canFold
              ? { scale, rotateY: fold, transformOrigin: "left center" }
              : undefined
          }
          className="surface-card fold-card mx-auto w-full rounded-2xl border px-5 py-6 shadow-lg sm:px-10 sm:py-8"
        >
          <div className={`h-1.5 w-16 rounded-full ${accents[index % accents.length]}`} />
          <div className="mt-6 grid items-center gap-6 sm:grid-cols-[1fr_14rem] lg:grid-cols-[1fr_18rem]">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
              <h3 className="mt-4 max-w-xl font-heading text-2xl font-semibold tracking-tight text-heading sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1024px) 18rem, (min-width: 640px) 14rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canFold, setCanFold] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const cards = differentiatorsContent.items;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setCanFold(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section id="why-us" className="section-pad relative z-0">
      <div className="mx-auto max-w-5xl">
        <p className="section-kicker">{differentiatorsContent.label}</p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
          {differentiatorsContent.title}
        </h2>
        <p className="mt-3 max-w-xl text-muted">{differentiatorsContent.subtitle}</p>
      </div>
      <div ref={containerRef} className="relative z-0 mx-auto mt-8 max-w-5xl">
        {cards.map((item, index) => (
          <StackingCard
            key={item.title}
            item={item}
            index={index}
            total={cards.length}
            scrollYProgress={scrollYProgress}
            canFold={canFold}
          />
        ))}
      </div>
    </section>
  );
}
