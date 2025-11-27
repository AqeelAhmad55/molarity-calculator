import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  /* config options here */
};

export default nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*/",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};
