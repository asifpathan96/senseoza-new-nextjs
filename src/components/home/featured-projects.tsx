"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedPortfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const projects = getFeaturedPortfolio();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio"
          title="Featured Projects"
          description="Real results for real businesses. See how we've helped clients achieve measurable growth."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <article className="glass-card glow-hover overflow-hidden transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-heading text-4xl font-bold text-primary/30">
                        {project.client.charAt(0)}
                      </span>
                    </div>
                    <Badge className="absolute left-4 top-4" variant="secondary">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <ul className="mt-4 space-y-1">
                      {project.results.slice(0, 2).map((result) => (
                        <li key={result} className="text-xs text-success">
                          ✓ {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <Button variant="gradient" size="lg">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
