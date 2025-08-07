/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  productionBrowserSourceMaps: false, // Menghilangkan source map agar build lebih kecil
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.bagiwebsite.com",
        pathname: "/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
