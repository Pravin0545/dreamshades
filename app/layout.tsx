import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import "./globals.css";
import NavigationClient from "@/lib/NavigationClient";
import FooterClient from "@/lib/FooterClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // avoids FOIT
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DreamShades Makeover Studio",
  description:
    "DreamShades Makeover Studio & Unisex Professional Academy - Premium beauty services and certified makeup training courses in Hyderabad",
  keywords: [
    "DreamShades",
    "Makeover Studio",
    "Beauty Salon Hyderabad",
    "Unisex Salon",
    "Makeup Academy",
    "Bridal Makeup Hyderabad",
    "Hair Styling",
    "Skincare",
  ],
  authors: [{ name: "DreamShades Makeover Studio" }],
  creator: "DreamShades Makeover Studio",
  publisher: "DreamShades Makeover Studio",
  metadataBase: new URL("https://dreamshades.com"), // ✅ replace with live domain
  alternates: {
    canonical: "https://dreamshades.com",
  },
  openGraph: {
    type: "website",
    url: "https://dreamshades.com",
    title: "DreamShades Makeover Studio",
    description:
      "Premium unisex salon & professional makeup academy in Hyderabad. Explore beauty, skincare, hair styling & certified training courses.",
    siteName: "DreamShades Makeover Studio",
    images: [
      {
        url: "https://dreamshades.com/og-image.jpg", // ✅ replace with real OG image
        width: 1200,
        height: 630,
        alt: "DreamShades Makeover Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dreamshades", // ✅ replace with real handle
    title: "DreamShades Makeover Studio",
    description:
      "Premium beauty services & professional makeup academy in Hyderabad.",
    images: ["https://dreamshades.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff", // adjust if dark branding
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationClient />
          {children}
          <FooterClient />
        </ThemeProvider>
      </body>
    </html>
  );
}
