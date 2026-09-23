"use client";

import { useRef, type PointerEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { finalCtaContent } from "@/data/homepage";
import { siteConfig } from "@/lib/seo";
import { easeOut, viewOnce } from "@/components/home/motion-effects";

export function HomeStudioCta() {
  const cardRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I'd%20like%20to%20schedule%20a%20free%20consultation`;

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--cx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--cy", `${event.clientY - rect.top}px`);
  };

  return (
    <section id="contact" className="section-pad relative">
      <motion.div
        ref={cardRef}
        onPointerMove={handleMove}
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={viewOnce}
        transition={{ duration: 0.65, ease: easeOut }}
        className="surface-card group relative mx-auto max-w-6xl overflow-hidden rounded-2xl border text-center"
        style={{ ["--cx" as string]: "50%", ["--cy" as string]: "40%" }}
      >
        <Image
          src="/home/hero.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 72rem, 100vw"
          className="object-cover opacity-25"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#0D0D1A]/55"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--cx) var(--cy), rgba(92,207,182,0.22), transparent 62%)",
          }}
        />
        <div className="relative z-[1] px-6 py-16 sm:px-16 sm:py-20">
          <p className="section-kicker">Start a project</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-heading sm:text-5xl">
            {finalCtaContent.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            {finalCtaContent.subtitle}
          </p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-glow mt-8 inline-flex rounded-full px-8 py-3.5 text-sm font-semibold text-[#0D0D1A]"
          >
            {finalCtaContent.cta}
          </motion.a>
          <p className="mt-10 text-sm text-muted">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="font-medium text-heading hover:underline"
            >
              {siteConfig.phone}
            </a>
            <span className="mx-2">·</span>
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-heading hover:underline">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
