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
      {
        source: "/django",
        destination: "/skills/django",
        permanent: true,
      },
      {
        source: "/pharmacy",
        destination: "https://service.bottomfunnel.net/pharmacy",
        permanent: true,
      },
      {
        source: "/mongodb",
        destination: "https://service.bottomfunnel.net/skills/mongodb",
        permanent: true,
      },
      {
        source: "/Social-Media",
        destination: "https://service.bottomfunnel.net/industries/social_media",
        permanent: true,
      },
      {
        source: "/user-interface",
        destination: "https://service.bottomfunnel.net/user-interface",
        permanent: true,
      },
      {
        source: "/mern-stack",
        destination: "https://service.bottomfunnel.net/mernstack-development",
        permanent: true,
      },
      {
        source: "/cannabis",
        destination: "https://service.bottomfunnel.net/cannabis",
        permanent: true,
      },
      {
        source: "/education",
        destination: "/industries/education",
        permanent: true,
      },
      {
        source: "/marketplace",
        destination: "https://service.bottomfunnel.net/marketplace",
        permanent: true,
      },
      {
        source: "/web-development",
        destination: "https://service.bottomfunnel.net/web-development",
        permanent: true,
      },
      {
        source: "/food-delivery",
        destination: "https://service.bottomfunnel.net/food-delivery-app",
        permanent: true,
      },
      {
        source: "/local-seo",
        destination: "https://service.bottomfunnel.net/local-seo-services",
        permanent: true,
      },
      {
        source: "/our-clients",
        destination: "https://service.bottomfunnel.net/our-clients",
        permanent: true,
      },
      {
        source: "/local-seo",
        destination: "https://service.bottomfunnel.net/local-seo-services",
        permanent: true,
      },
      {
        source: "/website-builder-app",
        destination: "https://service.bottomfunnel.net/website-builder-app",
        permanent: true,
      },
      {
        source: "/mobile-app-development",
        destination: "https://service.bottomfunnel.net/mobile-app-development",
        permanent: true,
      },
      {
        source: "/wearable-app-development",
        destination: "https://service.bottomfunnel.net/wearable-app-development",
        permanent: true,
      },
    ];
  },
});
