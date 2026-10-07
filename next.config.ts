import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/music",
        destination: "/projects",
        permanent: false,
      },
      {
        source: "/reading",
        destination: "/education",
        permanent: false,
      },
      {
        source: "/blogs",
        destination: "/projects",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
