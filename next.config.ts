/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "**", // temporary broad allowance for testing
      },
    ],
  },
};

module.exports = nextConfig;
