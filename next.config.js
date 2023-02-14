const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
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
});
