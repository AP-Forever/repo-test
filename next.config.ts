/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524], // match your real custom sizes
    qualities: [75, 85, 90, 95], // uncomment if you use this
  },
};

module.exports = nextConfig;
