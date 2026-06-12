const nextConfig = {
  images: {
    deviceSizes: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
    qualities: [75, 85, 90, 95], // ← add this
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "**" },
    ],
  },
};

module.exports = nextConfig;
