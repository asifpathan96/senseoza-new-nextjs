"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export function FloatingContact() {
  const [showTop, setShowTop] = useState(false);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I%20would%20like%20to%20know%20about%20your%20services`;

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-4">
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-[#0D0D1A] shadow-lg ring-2 ring-[#0D0D1A] transition-transform hover:scale-105"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-[#0D0D1A] shadow-lg ring-2 ring-[#0D0D1A] transition-transform hover:scale-105"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-[#0D0D1A] shadow-lg ring-2 ring-[#0D0D1A] transition-transform hover:scale-105"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
