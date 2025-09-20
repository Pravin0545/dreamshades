import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "gradient" | "hero" | "dark" | "soft";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "w-full";
    const paddingMap: Record<string, string> = {
      default: "py-16 lg:py-24",
      gradient: "py-16 lg:py-24",
      hero: "min-h-screen flex items-center justify-center overflow-hidden",
      dark: "py-16 lg:py-24",
      soft: "py-16 lg:py-24",
    };

    const style: React.CSSProperties | undefined =
      variant === "gradient" || variant === "hero"
        ? { backgroundImage: "var(--gradient-hero)" }
        : undefined;

    const variantClassMap: Record<string, string> = {
      default: `${base} ${paddingMap.default}`,
      gradient: `${base} ${paddingMap.gradient}`,
      hero: `${base} ${paddingMap.hero}`,
      dark: `${base} ${paddingMap.dark} bg-[color:var(--background)] text-[color:var(--foreground)]`,
      soft: `${base} ${paddingMap.soft} bg-[color:var(--muted)] text-[color:var(--muted-foreground)]`,
    };

    return (
      <section
        ref={ref}
        className={cn(variantClassMap[variant], className)}
        style={style}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Section };
