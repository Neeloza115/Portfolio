import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com", // Medium images
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com", // Vecteezy images
      },
    ],
  },
};

export default nextConfig;
