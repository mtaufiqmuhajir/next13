/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.tokopedia.net',
          },
          {
            protocol: 'https',
            hostname: 'cianjur.jabarekspres.com',
          },
        ],
      },
}

module.exports = nextConfig
