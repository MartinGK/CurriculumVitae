const path = require('path')


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: config => {
    config.resolve.modules.push(path.resolve('./src'))

    return config
  }
}

module.exports = nextConfig
