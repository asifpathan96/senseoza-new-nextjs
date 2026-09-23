"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg"
        >
          <div className="glass-card flex items-start gap-4 p-4 shadow-2xl sm:p-6">
            <Cookie className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">We value your privacy</p>
              <p className="mt-1 text-xs text-muted-foreground">
                We use cookies to enhance your experience and analyze site traffic.{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Learn more
                </Link>
              </p>
              <div className="mt-3 flex gap-2">
                <Button size="sm" onClick={accept}>
                  Accept
                </Button>
                <Button size="sm" variant="outline" onClick={decline}>
                  Decline
                </Button>
              </div>
            </div>
            <button
              onClick={decline}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Close cookie banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
