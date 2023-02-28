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
      {
        source: "/seo-guest-post",
        destination: "/guest-posting-services",
        permanent: true,
      },
      {
        source: "/emailservices",
        destination: "/emailmarketing-services",
        permanent: true,
      },
      {
        source: "/iconic",
        destination: "/ionic",
        permanent: true,
      },
      {
        source: "/asp-net-development",
        destination: "/asp.net-development",
        permanent: true,
      },
      {
        source: "/artificial-inteligence",
        destination: "/artificial-intelligence",
        permanent: true,
      },
      {
        source: "/seo",
        destination: "/seo-services",
        permanent: true,
      },
      {
        source: "/mean-stack-development",
        destination: "/meanstack-development",
        permanent: true,
      },
      {
        source: "/digitalmarketing",
        destination: "/digital_marketing",
        permanent: true,
      },
      {
        source: "/Fintech-solution",
        destination: "/fintech-solution",
        permanent: true,
      },
      {
        source: "/Social-Media",
        destination: "/industries/social_media",
        permanent: true,
      },
      {
        source: "/food-delivery",
        destination: "/food-delivery-app",
        permanent: true,
      },
      {
        source: "/reactNative",
        destination: "/reactnative-development",
        permanent: true,
      },
      {
        source: "/xamarin-Development",
        destination: "/xamarin-development",
        permanent: true,
      },
      {
        source: "/Logistics",
        destination: "/industries/logistics",
        permanent: true,
      },
      {
        source: "/beautycareapp",
        destination: "/beauty-and-salon",
        permanent: true,
      },
      {
        source: "/ios",
        destination: "/ios-development",
        permanent: true,
      },
      {
        source: "/mern-stack",
        destination: "/mernstack-development",
        permanent: true,
      },
      {
        source: "/android",
        destination: "/android-development",
        permanent: true,
      },
      {
        source: "/flutter",
        destination: "/flutter-development",
        permanent: true,
      },
    ];
  },
});
