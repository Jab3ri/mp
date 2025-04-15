/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Enable image optimization with new configuration
  images: {
    unoptimized: false, // Allow Next.js to optimize images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummycloudflare.com', // Cloudflare domain for CDN images
        pathname: '/images/**', // Path for images
      },
    ],
  },

  reactStrictMode: true,

  trailingSlash: true,

  output: "standalone", // Ensure this is properly handled in the start script

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },

  compress: true, // Ensure gzip compression is enabled

  // Set security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
