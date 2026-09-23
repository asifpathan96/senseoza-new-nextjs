"use client";

import { useState } from "react";
import { Link2 } from "lucide-react";

export function BlogShare({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-heading transition hover:border-primary"
      >
        <Link2 className="h-3.5 w-3.5" />
        {copied ? "Link copied" : "Copy link"}
      </button>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-heading transition hover:border-primary"
      >
        Share on LinkedIn
      </a>
    </div>
  );
}
