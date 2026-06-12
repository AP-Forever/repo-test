/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],

    // ← ADD THIS
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "**", // Allow all domains (for testing only!)
      },
    ],
  },
};

module.exports = nextConfig;
