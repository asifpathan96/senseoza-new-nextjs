"use client";

import { useRef, type PointerEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/seo";

type PageHeroProps = {
  label: string;
  title: string;
  highlight?: string;
  description: string;
  tags?: string[];
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
};

export function PageHero({
  label,
  title,
  description,
  tags,
  primaryCta = "Get Started",
  primaryHref,
  secondaryCta,
  secondaryHref,
}: PageHeroProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const whatsappUrl =
    primaryHref ||
    `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
      `Hi! I'd like to talk about ${title}`,
    )}`;

  const resetPointer = () => {
    const el = frameRef.current;
    if (!el) return;
    el.style.setProperty("--spot-x", "50%");
    el.style.setProperty("--spot-y", "40%");
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);
    el.style.setProperty("--tilt-x", `${(0.5 - py) * 7}deg`);
    el.style.setProperty("--tilt-y", `${(px - 0.5) * 10}deg`);
  };

  return (
    <section className="relative overflow-hidden bg-[#0D0D1A] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-mesh" />
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-purple" />
        <div className="hero-orb hero-orb-teal" />
        <div className="hero-orb hero-orb-mid" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl [perspective:1200px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          ref={frameRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          className="hero-frame"
        >
          <div className="hero-frame-inner px-6 py-14 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24">
            <div className="hero-spotlight" />
            <div className="hero-cursor-orb" />

            <p className="relative section-kicker mb-4">{label}</p>
            <h1 className="relative mx-auto max-w-5xl font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {description}
            </p>
            {tags && tags.length > 0 && (
              <p className="relative mx-auto mt-4 max-w-2xl text-sm font-medium text-white/70">
                {tags.join(" · ")}
              </p>
            )}
            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target={whatsappUrl.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#0D0D1A]"
              >
                {primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              {secondaryCta && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
                >
                  {secondaryCta}
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
