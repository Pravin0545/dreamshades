"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export default function ActiveLink({
  children,
  href,
  className,
  activeClassName = "text-primary font-semibold",
  ...props
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(className, isActive && activeClassName)}
      prefetch={true}
      {...props}
    >
      {children}
    </Link>
  );
}
