/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [{source: "/", destination: "/armor", permanent: true}, {
      source: "/missing",
      destination: "/inventory",
      permanent: true
    }]
  },
}

export default nextConfig
