import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "gradient" | "hero";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "py-16 lg:py-24",
      gradient: "py-16 lg:py-24 bg-gradient-primary",
      hero: "py-20 lg:py-32 bg-gradient-hero",
    };

    return (
      <section
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Section };
