import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/slides',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/slides',
  },
  // Pin the workspace root so Turbopack does not silently pick up a stray
  // lockfile from a parent directory during local development or CI.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
