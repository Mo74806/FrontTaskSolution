import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
