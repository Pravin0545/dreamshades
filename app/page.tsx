import Index from "@/components/Index";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DreamShades Makeover Studio — Bridal Makeup & Professional Courses in Hyderabad",
  description:
    "DreamShades Makeover Studio | Premium makeup, bridal services and certified makeup courses in Hyderabad. Book your makeover or enroll in professional training.",
  metadataBase: new URL("https://www.dreamshadeshyd.com"),
  alternates: { canonical: "https://www.dreamshadeshyd.com" },
  openGraph: {
    title: "DreamShades Makeover Studio",
    description:
      "Premium makeup services and certified makeup academy in Hyderabad. Bridal, party and professional courses.",
    url: "https://www.dreamshadeshyd.com",
    siteName: "DreamShades Makeover Studio",
    images: [
      {
        url: "https://www.dreamshadeshyd.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DreamShades Makeover Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamShades Makeover Studio",
    description:
      "Premium makeup services & professional makeup academy in Hyderabad.",
    images: ["https://www.dreamshadeshyd.com/og-image.jpg"],
  },
  themeColor: "#221a16",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "DreamShades Makeover Studio",
  url: "https://www.dreamshadeshyd.com",
  telephone: "+919712366344",
  email: "dreamshades.hyd@gmail.com",
  image: ["https://www.dreamshadeshyd.com/og-image.jpg"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bhagya Laxmi Residence, 1st floor Manikonda Rd",
    addressLocality: "Shaikpet, Hyderabad",
    postalCode: "500008",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.3939",
    longitude: "78.4291",
  },
  openingHours: ["Mo-Sa 09:00-20:00"],
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/yourpage",
    "https://www.instagram.com/yourpage",
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured data for LocalBusiness */}
      <Script
        id="ld-json-localbusiness"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessJsonLd)}
      </Script>

      <div className="min-h-screen" role="main">
        <Index />
      </div>
    </>
  );
}
