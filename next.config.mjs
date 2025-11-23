/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Pozwalamy na obrazki z Sanity
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Pozwalamy na obrazki z Unsplash (dla Playground)
      }
    ]
  }
}
export default nextConfig
