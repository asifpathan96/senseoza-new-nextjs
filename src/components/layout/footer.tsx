import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import { BrandLogo } from "@/components/layout/brand-logo";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/ai-marketing", label: "AI Marketing" },
  { href: "/services/seo", label: "SEO Services" },
  { href: "/services/social-media", label: "Social Media" },
  { href: "/services/content-marketing", label: "Content Marketing" },
  { href: "/services/ppc-ads", label: "PPC & Paid Ads" },
  { href: "/services/web-design", label: "Web Design" },
];

export function Footer() {
  return (
    <footer className="site-footer relative z-10 w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo />
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We are an AI-powered digital marketing agency helping businesses
              grow through innovative strategies, data-driven insights, and
              creative excellence.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-heading">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-heading">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-heading">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-heading">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-heading">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <span className="block text-xs font-semibold uppercase text-muted">
                  Email Us
                </span>
                <a href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-heading">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase text-muted">
                  Call Us
                </span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-foreground hover:text-heading"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <p className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-muted sm:px-10">
          © {new Date().getFullYear()} Senseoza. All rights reserved. Turning
          Presence into Power.
        </p>
      </div>
    </footer>
  );
}
