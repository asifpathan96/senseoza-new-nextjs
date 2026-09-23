"use client";

import { motion } from "framer-motion";
import { problemContent } from "@/data/homepage";
import {
  HomeSection,
  HomeSectionHeader,
  sectionTheme,
} from "@/components/home/home-section";

export function ProblemSection() {
  const theme = sectionTheme.a;

  return (
    <HomeSection variant="a" id="problem">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <HomeSectionHeader
            variant="a"
            emoji={problemContent.emoji}
            label={problemContent.label}
            title={problemContent.title}
            className="max-w-3xl"
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="mt-4 text-lg text-muted">{problemContent.intro}</p>
            <p className={`mt-4 text-lg font-semibold ${theme.heading}`}>
              {problemContent.highlight}
            </p>
            <p className="mt-4 text-muted leading-relaxed">{problemContent.body}</p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {problemContent.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-elevated bg-surface p-6 text-center"
            >
              <span className="text-3xl">{stat.emoji}</span>
              <p className={`mt-3 font-heading text-4xl font-black ${theme.heading}`}>
                {stat.value}
              </p>
              <p className={`mt-1 font-heading text-lg font-bold ${theme.heading}`}>
                {stat.label}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </HomeSection>
  );
}
