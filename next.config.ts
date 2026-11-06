import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/byi-events", destination: "/events", permanent: true },
      { source: "/staff", destination: "/about#board", permanent: true },
    ];
  },
};

export default nextConfig;
