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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-md bg-gray-950  text-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="font-display font-bold text-xl bg-clip-text ">
            DreamShades Makeover Studio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <ActiveLink
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium hover:scale-110"
              activeClassName="text-emerald-300 font-semibold"
            >
              {item.name}
            </ActiveLink>
          ))}
          <Button variant="default" size="sm" asChild>
            <Link href="/book-now">Book Now</Link>
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-card hover:bg-muted transition-colors"
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
        <div className="flex flex-col space-y-3 pt-4">
          {navItems.map((item) => (
            <ActiveLink
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium hover:scale-y-120"
              activeClassName="text-emerald-300 font-semibold"
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
