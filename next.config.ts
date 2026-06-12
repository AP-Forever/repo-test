const nextConfig = {
  images: {
    deviceSizes: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
    qualities: [75, 85, 90, 95, 100], // important for triggering qualities.sort
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "**" },
    ],
  },
  // Force more conservative rendering
  reactStrictMode: true,
};

module.exports = nextConfig;
