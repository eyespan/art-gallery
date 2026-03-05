/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: "/art-gallery",
  assetPrefix: "/art-gallery/"
};

module.exports = nextConfig;
