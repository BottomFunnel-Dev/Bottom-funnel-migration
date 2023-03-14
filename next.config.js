const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
var isProd = true;
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  distDir: "build",
  crossOrigin: "anonymous",
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
  assetPrefix: isProd ? "https://d31f03qtwl5xrx.cloudfront.net" : "",
  images: {
    path:
      (isProd ? "https://d31f03qtwl5xrx.cloudfront.net" : "") + "/_next/image",
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
      // {
      //   source: "/artificial-inteligence",
      //   destination: "/artificial-intelligence",
      //   permanent: true,
      // },
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
      // {
      //   source: "/Fintech-solution",
      //   destination: "/fintech-solution",
      //   permanent: true,
      // },
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
        destination: "/ppc-services",
        permanent: true,
      },
      {
        source: "/awards",
        destination: "/award-and-membership",
        permanent: true,
      },
      {
        source: "/engagement",
        destination: "/engagement-models",
        permanent: true,
      },
      {
        source: "/scopingsession",
        destination: "/scoping-session",
        permanent: true,
      },
      {
        source: "/businessanalysis",
        destination: "/business-analysis",
        permanent: true,
      },
      {
        source: "/productdiscovery",
        destination: "/product-discovery",
        permanent: true,
      },
      {
        source: "/productdiscovery",
        destination: "/product-discovery",
        permanent: true,
      },
      {
        source: "/ruby-development",
        destination: "/ruby-on-rails-development",
        permanent: true,
      },
      {
        source: "/android-development",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/ios-development",
        destination: "/ios-app-development",
        permanent: true,
      },
      {
        source: "/kotlin-development",
        destination: "/kotlin-app-development",
        permanent: true,
      },
      {
        source: "/flutter-development",
        destination: "/flutter-app-development",
        permanent: true,
      },
      {
        source: "/reactnative-development",
        destination: "/reactnative-app-development",
        permanent: true,
      },
      {
        source: "/xamarin-development",
        destination: "/xamarin-app-development",
        permanent: true,
      },
      {
        source: "/ionic",
        destination: "/ionic-app-development",
        permanent: true,
      },
      {
        source: "/mobile-user-experience",
        destination: "/ui-ux-app-development",
        permanent: true,
      },
      {
        source: "/ppc-services",
        destination: "/ppc-management-services",
        permanent: true,
      },
      {
        source: "/emailmarketing-services",
        destination: "/email-marketing-services",
        permanent: true,
      },
      {
        source: "/trending-technology",
        destination: "/trending-technologies",
        permanent: true,
      },
      {
        source: "/block-chain",
        destination: "/blockchain-development",
        permanent: true,
      },
      {
        source: "/machine-learning",
        destination: "/machine-learning-development",
        permanent: true,
      },
      {
        source: "/artificial-intelligence",
        destination: "/artificial-intelligence-development",
        permanent: true,
      },
      {
        source: "/data-science",
        destination: "/data-science-development",
        permanent: true,
      },
      {
        source: "/crypto-development",
        destination: "/cryptocurrency-development",
        permanent: true,
      },
      {
        source: "/custom-web-solutions",
        destination: "/custom-web-development",
        permanent: true,
      },
      {
        source: "/virtual-reality",
        destination: "/virtual-reality-development",
        permanent: true,
      },
      {
        source: "/internet-of-things",
        destination: "/iot-development",
        permanent: true,
      },
      {
        source: "/metaverse",
        destination: "/metaverse-development",
        permanent: true,
      },
      {
        source: "/business-intelligence",
        destination: "/business-intelligence-development",
        permanent: true,
      },
      {
        source: "/cloud",
        destination: "/cloud-development",
        permanent: true,
      },
      {
        source: "/salesforce",
        destination: "/salesforce-development",
        permanent: true,
      },
      {
        source: "/image-analysis-software",
        destination: "/image-analysis-software-developmnet",
        permanent: true,
      },
      // solutions page url redirections
      {
        source: "/food-delivery-app",
        destination: "/food-delivery-app-development",
        permanent: true,
      },
      {
        source: "/ondemand-homeservice",
        destination: "/on-demand-homeservice-app-development",
        permanent: true,
      },
      {
        source: "/alcoholdeliveryapp",
        destination: "/alcohol-delivery-app-development",
        permanent: true,
      },
      {
        source: "/laundary-delivery",
        destination: "/laundary-delivery-app-development",
        permanent: true,
      },
      {
        source: "/grocery",
        destination: "/grocery-app-development",
        permanent: true,
      },
      {
        source: "/beauty-and-salon",
        destination: "/beauty-and-salon-development",
        permanent: true,
      },
      {
        source: "/cannabis",
        destination: "/cannabis-delivery-app-development",
        permanent: true,
      },
      {
        source: "/marketplace",
        destination: "/marketplace-app-development",
        permanent: true,
      },
      {
        source: "/pickup-and-delivery",
        destination: "/pickup-and-delivery-app-development",
        permanent: true,
      },
      {
        source: "/pharmacy",
        destination: "/pharmacy-delivery-app-development",
        permanent: true,
      },
      {
        source: "/flower-delivery-app",
        destination: "/flower-delivery-app-development",
        permanent: true,
      },
      {
        source: "/carpooling-apps",
        destination: "/carpooling-app-development",
        permanent: true,
      },
      {
        source: "/taxi-booking",
        destination: "/taxi-booking-app-development",
        permanent: true,
      },
      {
        source: "/tool-delivery",
        destination: "/tool-delivery-app-development",
        permanent: true,
      },
      {
        source: "/icecream-deliveryapp",
        destination: "/icecream-delivery-app-development",
        permanent: true,
      },
      {
        source: "/plant-based-meat-delivery",
        destination: "/plant-based-meat-delivery-app-development",
        permanent: true,
      },
      {
        source: "/car-rentals-app",
        destination: "/car-rentals-app-development",
        permanent: true,
      },
      {
        source: "/agriculture-solution-app",
        destination: "/agriculture-app-development",
        permanent: true,
      },
      {
        source: "/car-service-app",
        destination: "/car-service-app-development",
        permanent: true,
      },
      {
        source: "/trading-app-solutions",
        destination: "/trading-app-development",
        permanent: true,
      },
      {
        source: "/real-estate",
        destination: "/real-estate-app-development",
        permanent: true,
      },
      {
        source: "/meatdeliveryapp",
        destination: "/meat-delivery-app-development",
        permanent: true,
      },
      {
        source: "/eyeweardeliverapp",
        destination: "/eyewear-delivery-app-development",
        permanent: true,
      },
      {
        source: "/baby-and-kidswear",
        destination: "/baby-and-kidswear-app-development",
        permanent: true,
      },
      {
        source: "/onlinepaymentsapp",
        destination: "/online-payment-app-development",
        permanent: true,
      },
      {
        source: "/fintech-solution",
        destination: "/fintech-app-development",
        permanent: true,
      },
      {
        source: "/website-builder-app",
        destination: "/website-builder-app-development",
        permanent: true,
      },
      {
        source: "/app-builder-solution",
        destination: "/app-builder-development",
        permanent: true,
      },
      {
        source: "/artificial-intelligence-development",
        destination: "/artificial-intelligence-app-development",
        permanent: true,
      },  
      {
        source: "/ott-app-solutions",
        destination: "/ott-app-development",
        permanent: true,
      },
      // skills page redirections
      {
        source: "/skills/nodejs",
        destination: "/skills/node-js-developer",
        permanent: true,
      },
      {
        source: "/skills/dotnet",
        destination: "/skills/dot-net-developer",
        permanent: true,
      },
      {
        source: "/skills/php",
        destination: "/skills/php-developer",
        permanent: true,
      },
      {
        source: "/skills/laravel",
        destination: "/skills/laravel-developer",
        permanent: true,
      },
      {
        source: "/skills/springboot",
        destination: "/skills/springboot-developer",
        permanent: true,
      },
      {
        source: "/skills/hibernate",
        destination: "/skills/hibernate-developer",
        permanent: true,
      },
      {
        source: "/skills/django",
        destination: "/skills/django-developer",
        permanent: true,
      },
      {
        source: "/skills/cakephp",
        destination: "/skills/cakephp-developer",
        permanent: true,
      },
      {
        source: "/skills/codeigniter",
        destination: "/skills/codeigniter-developer",
        permanent: true,
      },
      {
        source: "/skills/flask",
        destination: "/skills/flask-developer",
        permanent: true,
      },
      {
        source: "/skills/golang",
        destination: "/skills/golang-developer",
        permanent: true,
      },
      {
        source: "/skills/struts",
        destination: "/skills/struts-developer",
        permanent: true,
      },
      {
        source: "/skills/symfony",
        destination: "/skills/symfony-developer",
        permanent: true,
      },
      {
        source: "/skills/phalcon",
        destination: "/skills/phalcon-developer",
        permanent: true,
      },
      {
        source: "/skills/jsf",
        destination: "/skills/jsf-developer",
        permanent: true,
      },
      {
        source: "/skills/grails",
        destination: "/skills/grails-developer",
        permanent: true,
      },
      {
        source: "/skills/zend",
        destination: "/skills/zend-developer",
        permanent: true,
      },
      {
        source: "/skills/git",
        destination: "/skills/git-developer",
        permanent: true,
      },
      {
        source: "/skills/cherrypy",
        destination: "/skills/cherrypy-developer",
        permanent: true,
      },
      {
        source: "/skills/cuba",
        destination: "/skills/cuba-developer",
        permanent: true,
      },
      {
        source: "/skills/echo",
        destination: "/skills/echo-developer",
        permanent: true,
      },
      {
        source: "/skills/gorilla",
        destination: "/skills/gorilla-developer",
        permanent: true,
      },
      {
        source: "/skills/hanami",
        destination: "/skills/hanami-developer",
        permanent: true,
      },
      {
        source: "/skills/iris",
        destination: "/skills/iris-developer",
        permanent: true,
      },
      {
        source: "/skills/padrino",
        destination: "/skills/padrino-developer",
        permanent: true,
      },
      {
        source: "/skills/rails",
        destination: "/skills/rails-developer",
        permanent: true,
      },
      {
        source: "/skills/revel",
        destination: "/skills/revel-developer",
        permanent: true,
      },
      {
        source: "/skills/roda",
        destination: "/roda-developer",
        permanent: true,
      },
      {
        source: "/skills/sinatra",
        destination: "/skills/sinatra-developer",
        permanent: true,
      },
      // skills section frontend url's
      {
        source: "/skills/reactjs",
        destination: "/skills/reactjs-developer",
        permanent: true,
      },
      {
        source: "/skills/angularjs",
        destination: "/skills/angular-js-developer",
        permanent: true,
      },
      {
        source: "/skills/vuejs",
        destination: "/skills/vuejs-developer",
        permanent: true,
      },
      {
        source: "/skills/emberjs",
        destination: "/skills/emberjs-developer",
        permanent: true,
      },
      {
        source: "/skills/jquery",
        destination: "/skills/jquery-developer",
        permanent: true,
      },
      {
        source: "/skills/nextjs",
        destination: "/skills/next-js-developer",
        permanent: true,
      },
      {
        source: "/skills/backbonejs",
        destination: "/skills/backbone-js-developer",
        permanent: true,
      },
      {
        source: "/skills/svelte",
        destination: "/skills/svelte-developer",
        permanent: true,
      },
      {
        source: "/skills/semantic",
        destination: "/skills/semantic-developer",
        permanent: true,
      },

      //skills pages mobile section redirections
      {
        source: "/skills/mysql",
        destination: "/skills/mysql-developer",
        permanent: true,
      },
      {
        source: "/skills/microsoftsql",
        destination: "/skills/microsoft-sql-developer",
        permanent: true,
      },
      {
        source: "/skills/postgresql",
        destination: "/skills/postgresql-developer",
        permanent: true,
      },
      {
        source: "/skills/mongodb",
        destination: "/skills/mongodb-developer",
        permanent: true,
      },
      {
        source: "/skills/redis",
        destination: "/skills/redis-developer",
        permanent: true,
      },
      {
        source: "/skills/ibmdb",
        destination: "/skills/ibmdb-developer",
        permanent: true,
      },
      {
        source: "/skills/elasticsearch",
        destination: "/skills/elasticsearch-developer",
        permanent: true,
      },
      {
        source: "/skills/sqlite",
        destination: "/skills/sqlite-developer",
        permanent: true,
      },
      {
        source: "/skills/cassandra",
        destination: "/skills/sqlite-developer",
        permanent: true,
      },
      // skills pages CMS section redirections
      {
        source: "/skills/wordpress",
        destination: "/skills/wordpress-developer",
        permanent: true,
      },
      {
        source: "/skills/hubspot",
        destination: "/skills/hubspot-developer",
        permanent: true,
      },
      {
        source: "/skills/joomla",
        destination: "/skills/joomla-developer",
        permanent: true,
      },
      {
        source: "/skills/woocommerce",
        destination: "/skills/woocommerce-developer",
        permanent: true,
      },
      {
        source: "/skills/drupal",
        destination: "/skills/drupal-developer",
        permanent: true,
      },
      {
        source: "/skills/wix",
        destination: "/skills/wix-developer",
        permanent: true,
      },
      {
        source: "/skills/bigcommerce",
        destination: "/skills/bigcommerce-developer",
        permanent: true,
      },
      {
        source: "/skills/ghost",
        destination: "/skills/ghost-developer",
        permanent: true,
      },
      {
        source: "/skills/weebly",
        destination: "/skills/weebly-developer",
        permanent: true,
      },
      // redirection for the industries section
      {
        source: "/game-development",
        destination: "/game",
        permanent: true,
      },
      {
        source: "/videostreaming",
        destination: "/video-streaming",
        permanent: true,
      },
      {
        source: "/sports_betting",
        destination: "/sports-betting",
        permanent: true,
      },
      {
        source: "/iot_development",
        destination: "/internet-of-things",
        permanent: true,
      },
      {
        source: "/social_media",
        destination: "/social-media",
        permanent: true,
      },
      {
        source: "/social_media",
        destination: "/social-media",
        permanent: true,
      },
      {
        source: "/saas",
        destination: "/industries/saas",
        permanent: true,
      },
      {
        source: "/event",
        destination: "/industries/event",
        permanent: true,
      },
      {
        source: "/telecommunication",
        destination: "/industries/telecommunication",
        permanent: true,
      },
      {
        source: "/aviation",
        destination: "/industries/aviation",
        permanent: true,
      },
      {
        source: "/e-scooter",
        destination: "/industries/e-scooter",
        permanent: true,
      },
      {
        source: "/travel",
        destination: "/industries/travel",
        permanent: true,
      },
      {
        source: "/event",
        destination: "/industries/event",
        permanent: true,
      },
    ];
  },
});
