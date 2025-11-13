/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes
  // For FastComet: Use Next.js server mode or deploy API routes separately
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rvlcpygatguvxhuliand.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
