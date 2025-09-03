/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Index from "@/components/Index";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <Index />
    </div>
  );
}
