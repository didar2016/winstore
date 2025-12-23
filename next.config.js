/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com', 'via.placeholder.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig