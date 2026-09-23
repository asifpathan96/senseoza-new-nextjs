import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Senseoza home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/brand/logo.png"
        alt="Senseoza"
        width={compact ? 160 : 220}
        height={compact ? 36 : 48}
        className={cn(
          "h-8 w-auto object-contain object-left sm:h-9",
          compact && "h-8",
        )}
        priority
      />
    </Link>
  );
}
