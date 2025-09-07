/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import ActiveLink from "./ActiveLinks";
import { navItems } from "@/constant/constant";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 navbar-backdrop border-border"
      // ensure backdrop uses your CSS variable opacity
      style={{ backgroundColor: "hsl(var(--background) / 0.9)" }}
    >
      <div className="site-container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Sparkles
            className="h-8 w-8"
            // use CSS variable color for the icon
            style={{ color: "var(--primary)" }}
          />
          <span
            className="font-display font-bold text-xl bg-gradient-primary bg-clip-text text-transparent"
            // fallback color for accessibility if gradient text not supported
            aria-label="DreamShades Makeover Studio"
          >
            DreamShades Makeover Studio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <ActiveLink
              key={item.name}
              href={item.href}
              className="nav-link font-medium transition-colors duration-300"
              // Active styling uses font-weight and underline handled by .nav-link::after
              activeClassName="font-semibold"
              // set text color via CSS variable so it follows your palette
              style={{ color: "var(--foreground)" }}
            >
              {item.name}
            </ActiveLink>
          ))}

          <Button variant="luxury" size="sm" asChild>
            <Link href="/book-now" className="btn-luxury">
              Book Now
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-[color:var(--muted)] hover:bg-[color:var(--accent)]/20 text-[color:var(--foreground)] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-80 pb-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col space-y-3 pt-4 site-container">
          {navItems.map((item) => (
            <ActiveLink
              key={item.name}
              href={item.href}
              className="nav-link font-medium py-2 transition-colors duration-300"
              activeClassName="font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              {item.name}
            </ActiveLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
