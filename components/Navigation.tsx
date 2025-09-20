import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ActiveLink from "./ActiveLinks";
import { navItems } from "@/constant/constant";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 navbar-backdrop border-border"
      aria-label="Primary"
    >
      <div className="site-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3"
          aria-label="Home"
        >
          <Sparkles className="h-8 w-8" style={{ color: "var(--primary)" }} />
          <span className="font-display font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            DreamShades Makeover Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <ActiveLink
              key={item.name}
              href={item.href}
              className="nav-link font-medium transition-colors duration-300"
              activeClassName="font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              {item.name}
            </ActiveLink>
          ))}

          <Button variant="luxury" size="sm" asChild>
            <Link href="/book-now">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((s) => !s)}
          className="md:hidden p-2 rounded-lg bg-[color:var(--muted)] hover:bg-[color:var(--accent)]/20 text-[color:var(--foreground)] transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden transition-[max-height] duration-300 overflow-hidden",
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
              onClick={() => setIsOpen(false)}
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
