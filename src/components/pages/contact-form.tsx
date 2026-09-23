"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactPageContent } from "@/data/site-pages";
import { siteConfig } from "@/lib/seo";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const composed =
    message ||
    `Hi! I'm ${name || "interested"} (${email || "no email yet"}). Company: ${company || "N/A"}. Website: ${website || "N/A"}. I'd like to know about ${service || "your services"}. Phone: ${phone || "N/A"}.`;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(composed)}`;

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(whatsappUrl, "_blank");
      }}
    >
      <h2 className="font-heading text-xl font-extrabold text-heading">
        Send Us a Message
      </h2>
      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-heading">
            Full Name *
          </label>
          <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your full name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-heading">
            Email Address *
          </label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@company.com" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-heading">
            Phone *
          </label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder={siteConfig.phone} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-heading">
            Company Name
          </label>
          <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-heading">
            Website URL
          </label>
          <Input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-heading">
            Services Interested In
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="flex h-11 w-full rounded-xl border border-border bg-background/50 px-4 text-sm text-foreground"
          >
            <option value="">Select a service</option>
            {contactPageContent.services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-heading">
            Tell us about your business and goals
          </label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Your goals, challenges, and timeline..."
          />
        </div>
        <button
          type="submit"
          className="btn-glow inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#0D0D1A]"
        >
          Send Message
        </button>
        <p className="text-center text-xs text-muted">
          Opens WhatsApp with your message ready to send
        </p>
      </div>
    </motion.form>
  );
}
