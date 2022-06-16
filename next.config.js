/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
