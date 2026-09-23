"use client";

import Link from "next/link";
import { faqs } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FAQSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with Senseoza. Still have questions? We're one call away."
        />

        <FadeIn>
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0, 6).map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-heading text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8 text-center">
          <Link href="/faq">
            <Button variant="ghost">
              View all FAQs →
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
