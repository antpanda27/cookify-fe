import type { NextConfig } from "next";

const S3_HOSTNAME = process.env.NEXT_PUBLIC_S3_HOSTNAME || ''; 

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // ⬅️ Use the variable we defined
        hostname: S3_HOSTNAME, 
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
