// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   distDir: "build",
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  beforeFiles: [
    // if the host is `acme.com`,
    // this rewrite will be applied
    {
      source: "/:php-development*",
      has: [
        {
          type: "host",
          value: "bottomfunnel.net",
        },
      ],
      destination: "sample.bottomfunnel.net/:php-development*",
    },
  ],
};

module.exports = nextConfig;
