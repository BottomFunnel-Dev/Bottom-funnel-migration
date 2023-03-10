const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
var isProd = true;
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  distDir: "build",
  crossOrigin: 'anonymous',
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ]
  },
  assetPrefix: isProd ?  'https://d31f03qtwl5xrx.cloudfront.net':'',
  
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
      {
        source: "/Portfolio",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/education",
        destination: "/industries/education",
        permanent: true,
      },
      {
        source: "/wellness",
        destination: "/industries/wellness",
        permanent: true,
      },
      {
        source: "/ecommerce",
        destination: "/industries/ecommerce",
        permanent: true,
      },
      {
        source: "/local-seo",
        destination: "/local-seo-services",
        permanent: true,
      },
      {
        source: "/seo-ppc",
        destination: "ppc-services",
        permanent: true,
      },
      {
        source: "/awards",
        destination: "award-and-membership",
        permanent: true,
      },
      {
        source: "/engagement",
        destination: "engagement-models",
        permanent: true,
      },
      {
        source: "/scopingsession",
        destination: "scoping-session",
        permanent: true,
      },
      {
        source: "/businessanalysis",
        destination: "business-analysis",
        permanent: true,
      },
      {
        source: "/productdiscovery",
        destination: "product-discovery",
        permanent: true,
      },
    ];
  },
});
