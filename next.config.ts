///// The following is for using on local dev environment only /////
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
//////////////////////////////////////////////////////

////////////// The following code is for creating docker image //////////////

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',  // This creates the 'out/' directory
//   images: {
//     unoptimized: true,  // Required for static export
//   },
//   // Optional: if you have trailing slashes
//   trailingSlash: true,
// }

// module.exports = nextConfig
//////////////////////////////////////////////////////////////////////////////////