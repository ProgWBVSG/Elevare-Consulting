import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 only honours quality values declared here; 95 is used for the
    // cutout portrait so it stays crisp over the shader background.
    qualities: [75, 95],
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
