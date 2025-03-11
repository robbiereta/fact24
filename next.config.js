/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optimize image handling
  images: {
    domains: [], // Add any image domains you need
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Add any environment variables you need to expose to the browser
  env: {
    // Add your public environment variables here
  },
  // Enable static exports if needed
  // output: 'export', // Uncomment if you need static exports
}

module.exports = nextConfig
