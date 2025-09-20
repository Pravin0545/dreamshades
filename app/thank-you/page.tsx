import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thank you — DreamShades Makeover Studio",
  description:
    "Thank you for booking with DreamShades Makeover Studio. Our executive will contact you soon with next steps.",
  alternates: { canonical: "https://www.dreamshadeshyd.com/thank-you" },
  themeColor: "#221a16",
};

export default function ThankYou({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const type = (searchParams?.type as string | undefined)?.toLowerCase() ?? "";

  const heading =
    type === "enroll"
      ? "Thank you for enrolling"
      : type === "book"
      ? "Thank you for your booking"
      : "Thank you";

  const sub =
    type === "enroll"
      ? "Your enrollment request has been received. Our course coordinator will contact you with details."
      : type === "book"
      ? "Your booking request has been received. Our executive will contact you to confirm the appointment."
      : "We received your request. Our team will contact you with next steps.";

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Container size="md" className="py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <Heading as="h1" size="xl" className="mb-6">
            {heading}
          </Heading>

          <p className="mb-6 text-[color:var(--muted-foreground)] leading-relaxed">
            {sub}
          </p>

          <p className="mb-6 text-[color:var(--muted-foreground)]">
            For any urgent queries call us at{" "}
            <a
              href="tel:+919712366344"
              className="font-medium text-[color:var(--accent)]"
            >
              +91 97123 66344
            </a>{" "}
            or email{" "}
            <a
              href="mailto:dreamshades.hyd@gmail.com"
              className="font-medium text-[color:var(--accent)]"
            >
              dreamshades.hyd@gmail.com
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="default" asChild>
              <Link href="/">Back to Home</Link>
            </Button>

            <Button variant="transparent" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-[color:var(--muted-foreground)]">
            Thank you for choosing DreamShades. We look forward to serving you.
          </p>
        </div>
      </Container>
    </main>
  );
}
