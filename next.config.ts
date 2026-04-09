import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Smaller slug + reliable Node entrypoint for Heroku / Docker. */
  output: "standalone",
};

export default nextConfig;
