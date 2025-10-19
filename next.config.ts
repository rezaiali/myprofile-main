/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This creates the 'out/' directory
  images: {
    unoptimized: true,  // Required for static export
  },
  // Optional: if you have trailing slashes
  trailingSlash: true,
}

module.exports = nextConfig