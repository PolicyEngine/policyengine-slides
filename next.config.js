/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/slides',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/slides',
  },
}

module.exports = nextConfig
