import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/slides',
  // `bun run export` builds into .next-export so its password-free build
  // never replaces the regular .next one.
  distDir: process.env.SLIDES_DIST_DIR || '.next',
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
