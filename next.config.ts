import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/slides',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/slides',
  },
  // The Autumn Budget 2026 webinar deck was introduction-2026 until 28 October.
  async redirects() {
    return [
      {
        source: '/introduction-2026/:path*',
        destination: '/autumn-budget-2026/:path*',
        permanent: true,
      },
    ];
  },
  // Pin the workspace root so Turbopack does not silently pick up a stray
  // lockfile from a parent directory during local development or CI.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
