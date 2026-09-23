import { cn } from "@/lib/utils";

export type SectionVariant = "a" | "b";

/** Two-color homepage system: near-black (a) and off-white (b) */
export const sectionTheme = {
  a: {
    bg: "bg-[#0D0D1A]",
    heading: "text-[#F8F7FF]",
    label: "section-label",
    accent: "text-accent",
    border: "border-white/10",
  },
  b: {
    bg: "bg-[#F8F7FF]",
    heading: "text-[#0D0D1A]",
    label: "section-label",
    accent: "text-primary",
    border: "border-[#0D0D1A]/10",
  },
} as const;

type HomeSectionProps = {
  variant: SectionVariant;
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function HomeSection({
  variant,
  id,
  children,
  className,
}: HomeSectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-28", sectionTheme[variant].bg, className)}
    >
      {children}
    </section>
  );
}

type HomeSectionHeaderProps = {
  variant: SectionVariant;
  emoji?: string;
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  titleSize?: "md" | "lg";
};

export function HomeSectionHeader({
  variant,
  emoji,
  label,
  title,
  subtitle,
  className,
  titleSize = "lg",
}: HomeSectionHeaderProps) {
  const theme = sectionTheme[variant];

  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {(emoji || label) && (
        <span className={cn("section-label mb-4", theme.label)}>
          {emoji && <span>{emoji}</span>}
          {label}
        </span>
      )}
      <h2
        className={cn(
          "headline-xl",
          titleSize === "lg"
            ? "text-3xl sm:text-4xl lg:text-5xl"
            : "text-3xl sm:text-4xl",
          theme.heading
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
