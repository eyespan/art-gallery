import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: "/art-gallery",
  assetPrefix: "/art-gallery/",
};

export default nextConfig;

