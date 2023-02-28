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
  async redirects() {
    return [
      {
        source: "/seo-sem",
        destination: "/sem-services",
        permanent: true,
      },
      {
        source: "/seo-link-building",
        destination: "/link-building-services",
        permanent: true,
      },
    ];
  },
});
