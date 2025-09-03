import * as React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "primary" | "secondary" | "gradient";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { className, as = "h2", variant = "primary", size = "lg", ...props },
    ref
  ) => {
    const Component = as;

    const variants = {
      primary: "text-foreground",
      secondary: "text-muted-foreground",
      gradient:
        "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
    };

    const sizes = {
      sm: "text-lg font-medium",
      md: "text-xl font-semibold",
      lg: "text-2xl font-bold lg:text-3xl",
      xl: "text-3xl font-bold lg:text-4xl",
      "2xl": "text-4xl font-bold lg:text-5xl",
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "font-serif tracking-tight",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

export { Heading };
