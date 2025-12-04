import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/julia",
        destination: "/julia.html",
      },
    ];
  },
};

export default nextConfig;
