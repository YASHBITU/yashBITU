/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  // IGNORE ERRORS DURING BUILD
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // OPTIMIZE IMAGES
  images: {
    unoptimized: true,
  },
  // experimental: { optimizeCss: true }
};

export default nextConfig;