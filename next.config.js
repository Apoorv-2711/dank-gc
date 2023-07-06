/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
          {
            hostname: 'lh3.googleusercontent.com',
          },
        ],
      },
}

module.exports = nextConfig
