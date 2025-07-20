import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    domains: ['img.clerk.com', 'images.clerk.dev'], // allow Clerk image domains
  },
};

export default nextConfig;
