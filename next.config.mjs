/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        port: '',
        pathname: '/images/products/thumbnails/**',
      },
      {
        protocol: 'https',
        hostname: 'carloslantigua.s3.amazonaws.com', // Your S3 bucket
        port: '',
        pathname: '/**', // Allow all paths from the S3 bucket
      },
    ],
  },
};

export default nextConfig;