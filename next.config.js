/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["i.imgur.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
