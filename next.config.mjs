/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [25, 50, 75, 100],
  },
  async redirects() {
    return [
      { source: "/", destination: "/armor", permanent: true },
      {
        source: "/missing",
        destination: "/inventory",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
