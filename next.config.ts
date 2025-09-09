import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: ['img.clerk.com', 'images.clerk.dev'], // allow Clerk image domains
  },
};

export default nextConfig;
