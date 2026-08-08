import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: "/empresas", destination: "/servicios", permanent: true },
      { source: "/mentoria-lideres", destination: "/servicios", permanent: true },
      { source: "/mentoria-mujeres-ejecutivas", destination: "/servicios", permanent: true },
      { source: "/sobre-maria", destination: "/sobre-nosotros", permanent: true },
    ];
  },
};

export default nextConfig;
