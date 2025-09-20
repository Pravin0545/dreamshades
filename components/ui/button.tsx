import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95",
        destructive:
          "bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:opacity-95",
        outline:
          "border border-[color:var(--border)] bg-[color:var(--background)] hover:bg-[color:var(--accent)] hover:text-[color:var(--accent-foreground)]",
        secondary:
          "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:opacity-90",
        ghost:
          "bg-transparent hover:bg-[color:var(--accent)] hover:text-[color:var(--accent-foreground)]",
        link: "text-[var(--primary)] underline-offset-4 hover:underline hover:text-[var(--accent-foreground)]",
        luxury:
          "btn-luxury shadow-luxury hover:scale-105 transition-transform duration-300 font-semibold",
        transparent:
          "bg-[color:var(--foreground)/10] border border-[color:var(--foreground)/20] text-[color:var(--foreground)] hover:bg-[color:var(--foreground)/12]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
