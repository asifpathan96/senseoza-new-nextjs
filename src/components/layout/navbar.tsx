"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/layout/brand-logo";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I%20would%20like%20to%20get%20started%20with%20Senseoza`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 site-header-nav sm:px-5 sm:py-3",
          isScrolled && "shadow-lg",
        )}
      >
        <BrandLogo />

        <div className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-heading"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow hidden rounded-full px-5 py-2 text-sm font-semibold text-[#0D0D1A] sm:inline-flex"
          >
            Get Started
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-heading lg:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMobileOpen && (
        <div className="site-header-nav mx-auto mt-2 max-w-6xl rounded-3xl p-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-heading hover:bg-surface"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow mt-2 inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-[#0D0D1A]"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
