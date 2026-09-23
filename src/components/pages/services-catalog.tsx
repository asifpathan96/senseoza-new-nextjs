"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Mail,
  MapPin,
  Monitor,
  MousePointerClick,
  PenLine,
  Search,
  Share2,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { TiltSurface, easeOut } from "@/components/home/motion-effects";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  seo: Search,
  "ppc-ads": MousePointerClick,
  "social-media": Share2,
  "content-marketing": PenLine,
  "ai-marketing": Sparkles,
  "web-design": Monitor,
  "influencer-marketing": Users,
  "ai-agents-automation": Bot,
  "email-automation": Mail,
  analytics: BarChart3,
  "content-marketing-pune": MapPin,
};

type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  points?: { label: string; text: string }[];
};

export function ServicesCatalog({ items }: { items: readonly ServiceItem[] }) {
  const total = String(items.length).padStart(2, "0");
  const [canFold, setCanFold] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setCanFold(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section className="section-pad relative">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="section-kicker">Service catalog</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            Pick a channel. We run the rest of the funnel with it.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Every engagement is built as a connected system—search, ads, content, and automation
            working toward the same pipeline.
          </p>
        </div>

        <div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
          style={{ perspective: 1400 }}
        >
          {items.map((item, index) => {
            const Icon = icons[item.slug] ?? Sparkles;
            const featured = index < 2;
            const indexLabel = String(index + 1).padStart(2, "0");
            const fromLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.slug}
                initial={
                  canFold
                    ? { opacity: 0, x: fromLeft ? -20 : 20, rotateY: fromLeft ? 16 : -16 }
                    : { opacity: 0, y: 18 }
                }
                whileInView={canFold ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 1, y: 0 }}
                whileHover={canFold ? { rotateY: fromLeft ? -6 : 6 } : undefined}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.55, ease: easeOut }}
                style={{
                  transformOrigin: fromLeft ? "left center" : "right center",
                  transformStyle: "preserve-3d",
                }}
                className={cn(
                  "fold-card h-full",
                  featured ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2",
                )}
              >
                <TiltSurface className="h-full" strength={featured ? 10 : 7}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group relative z-[2] flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:border-primary sm:p-7"
                  >
                    <span className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-primary/12 to-transparent transition-[width] duration-500 ease-out group-hover:w-full" />

                    <div className="relative flex items-start justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="font-heading text-xs font-semibold tracking-[0.18em] text-muted">
                        {indexLabel} / {total}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        "relative mt-6 font-heading font-semibold tracking-tight text-heading transition duration-300 group-hover:text-primary",
                        featured ? "text-2xl sm:text-3xl" : "text-xl",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "relative mt-3 text-sm leading-relaxed text-muted",
                        featured && "sm:text-base",
                        !item.points && "flex-1",
                      )}
                    >
                      {item.description}
                    </p>

                    {item.points && item.points.length > 0 && (
                      <ul className="relative mt-5 flex-1 space-y-3">
                        {item.points.map((point) => (
                          <li key={point.label} className="flex gap-3">
                            <span className="mt-0.5 shrink-0 font-heading text-xs font-bold tracking-[0.14em] text-primary">
                              {point.label}
                            </span>
                            <span className="text-sm leading-relaxed text-muted">{point.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <ul className="relative mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold tracking-wide text-heading/80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-heading transition group-hover:text-primary">
                      Explore service
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </TiltSurface>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
