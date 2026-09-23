"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroContent, recentWorkContent } from "@/data/homepage";
import { siteConfig } from "@/lib/seo";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I%20would%20like%20to%20get%20a%20free%20marketing%20audit`;
  const [primaryShot, secondaryShot] = recentWorkContent.items;

  return (
    <section className="relative overflow-hidden bg-[#0D0D1A] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-mesh" />
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-teal" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-kicker"
          >
            {heroContent.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-xl font-heading text-3xl font-bold tracking-tight !text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]"
          >
            {heroContent.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#0D0D1A]"
            >
              {heroContent.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href={heroContent.secondaryHref}
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              {heroContent.secondaryCta}
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46 }}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8"
          >
            {heroContent.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-heading text-xl font-semibold text-white sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative min-h-[17rem] sm:min-h-[22rem] lg:min-h-[26rem]">
            {primaryShot && (
              <a
                href={primaryShot.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-0 top-0 z-10 w-[86%] overflow-hidden rounded-2xl border border-white/15 bg-[#0D0D1A] transition hover:border-primary"
                style={{ transform: "rotate(-2.5deg)" }}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={primaryShot.image}
                    alt={`${primaryShot.client} website`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
                <span className="absolute bottom-3 left-3 rounded-full bg-[#0D0D1A]/80 px-3 py-1 text-[11px] font-semibold text-white">
                  {primaryShot.client}
                </span>
              </a>
            )}
            {secondaryShot && (
              <a
                href={secondaryShot.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 right-0 z-20 w-[74%] overflow-hidden rounded-2xl border border-white/15 bg-[#0D0D1A] transition hover:border-primary"
                style={{ transform: "rotate(4deg)" }}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={secondaryShot.image}
                    alt={`${secondaryShot.client} website`}
                    fill
                    sizes="(min-width: 1024px) 32vw, 70vw"
                    className="object-cover object-top"
                  />
                </div>
                <span className="absolute bottom-3 left-3 rounded-full bg-[#0D0D1A]/80 px-3 py-1 text-[11px] font-semibold text-white">
                  {secondaryShot.client}
                </span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
