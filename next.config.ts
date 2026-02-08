import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    forceSwcTransforms: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
