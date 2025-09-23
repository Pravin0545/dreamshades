import type { NextConfig } from "next";

const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://*.googleapis.com https://www.googletagmanager.com",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
          { key: "Content-Security-Policy", value: ContentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
