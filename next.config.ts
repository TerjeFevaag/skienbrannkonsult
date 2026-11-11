import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Unngå duplikatinnhold: send Vercel-aliaset til produksjonsdomenet.
        // Preview-deploys (hash-URL-er) er allerede beskyttet av Vercel Authentication.
        source: '/:path*',
        has: [{ type: 'host', value: 'skienbrannkonsult.vercel.app' }],
        destination: 'https://skienbrannkonsult.no/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
