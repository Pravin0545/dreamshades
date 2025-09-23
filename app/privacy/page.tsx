import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DreamShades Makeover Studio",
  description:
    "Read the Privacy Policy of DreamShades Makeover Studio & Unisex Professional Academy in Hyderabad.",
  alternates: { canonical: "https://www.dreamshadeshyd.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-[color:var(--foreground)] mt-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        DreamShades Makeover Studio (&quot;we&quot;, &quot;our&quot;, or
        &quot;us&quot;) respects your privacy and is committed to protecting the
        personal information you share with us. This Privacy Policy explains how
        we collect, use, and safeguard your information when you visit our
        website{" "}
        <a
          href="https://www.dreamshadeshyd.com"
          className="text-[color:var(--accent)] underline"
        >
          dreamshadeshyd.com
        </a>{" "}
        or use our services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal information such as your name, phone number,
        email address, and payment details when you book services, enroll in
        courses, or contact us. We also collect non-personal information such as
        browser type, IP address, and pages visited for analytics purposes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>To provide and manage our beauty services and training courses.</li>
        <li>To process bookings, payments, and inquiries.</li>
        <li>
          To send updates, promotions, and relevant communication (if you opt
          in).
        </li>
        <li>To improve our website, services, and customer experience.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Sharing of Information
      </h2>
      <p className="mb-4">
        We do not sell or rent your personal information. We may share your data
        only with trusted third-party service providers (such as payment
        processors or analytics tools) who help us operate our business, subject
        to confidentiality agreements and applicable laws.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. Cookies and Tracking
      </h2>
      <p className="mb-4">
        Our website may use cookies and similar technologies to enhance your
        browsing experience and analyze traffic. You can control cookies through
        your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We implement reasonable technical and organizational measures to protect
        your information. However, no method of transmission over the internet
        is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You may request access to, correction of, or deletion of your personal
        data by contacting us. You can also opt out of promotional emails at any
        time.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        7. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Updates will be
        posted on this page with a revised date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:
        <br />
        <span className="font-medium">DreamShades Makeover Studio</span>
        <br />
        Hyderabad, Telangana, India
        <br />
        Email: dreamshades.hyd@gmail.com
        <br />
        Phone: +91-9712366344
        <br />
        Phone: +91-8712366336
      </p>
    </main>
  );
}
