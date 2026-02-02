/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  productionBrowserSourceMaps: false, // Menghilangkan source map agar build lebih kecil
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-e2818d6b83cf4b299e69ec9187084345.r2.dev",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "cdn.bagiwebsite.com",
        pathname: "/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
