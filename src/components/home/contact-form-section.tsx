"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactFormContent } from "@/data/homepage";
import { siteConfig } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  HomeSection,
  HomeSectionHeader,
} from "@/components/home/home-section";

export function ContactFormSection() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const defaultMessage =
    message ||
    `Hi! I'm ${name || "interested"} and I'd like to know about ${service || "your services"}.`;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <HomeSection variant="b" id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HomeSectionHeader
            variant="b"
            emoji={contactFormContent.emoji}
            label={contactFormContent.label}
            title={contactFormContent.title}
            subtitle={contactFormContent.subtitle}
            titleSize="md"
            className="max-w-2xl"
          />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 card-elevated mx-auto max-w-xl bg-surface p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappUrl, "_blank");
          }}
        >
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-heading">
                Your Name
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="rounded-xl"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-heading">
                What do you need?
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-heading-b"
              >
                <option value="">Select a service</option>
                {contactFormContent.services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-heading">
                Monthly Ad Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-heading-b"
              >
                <option value="">Select your budget range</option>
                {contactFormContent.budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-heading">
                Your Message
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                rows={4}
                className="rounded-xl"
              />
              <p className="mt-1 text-xs text-muted">
                Leave empty to use our suggested message
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full font-semibold bg-heading-b hover:bg-heading-b/90"
            >
              Let&apos;s Connect on WhatsApp
            </Button>
            <p className="text-center text-xs text-muted">
              Opens WhatsApp with your message ready to send
            </p>
          </div>
        </motion.form>
      </div>
    </HomeSection>
  );
}
