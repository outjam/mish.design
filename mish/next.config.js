/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRAPI_HOST: process.env.STRAPI_HOST,
    STRAPI_TOKEN: process.env.STRAPI_TOKEN,
  }
}

module.exports = nextConfig
