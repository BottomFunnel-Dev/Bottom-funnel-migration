/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    domains: ["d1krs40fxb67ye.cloudfront.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1krs40fxb67ye.cloudfront.net",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
