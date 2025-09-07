import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[color:var(--primary)] text-[color:var(--primary-foreground)] hover:opacity-90",
        secondary:
          "border-transparent bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] hover:opacity-90",
        destructive:
          "border-transparent bg-[color:var(--destructive)] text-[color:var(--destructive-foreground)] hover:opacity-90",
        outline:
          "border border-[color:var(--border)] text-[color:var(--foreground)]",
        luxury:
          "border-transparent bg-gradient-primary text-[color:var(--primary-foreground)] px-4 py-1 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
