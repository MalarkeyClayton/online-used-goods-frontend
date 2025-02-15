import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // Add localhost to the list of allowed domains
  },
};

export default nextConfig;
