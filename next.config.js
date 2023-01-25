/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  beforeFiles: [
    // if the host is `acme.com`,
    // this rewrite will be applied
    {
        source: '/:php-development*',
        has: [
            {
                type: 'host',
                value: 'acme.com',
            },
        ],
        destination: 'app.acme.com/:php-development*',
    },
]
};

module.exports = nextConfig;
