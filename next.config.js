const path = require('path')


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.resolve.modules.push(path.resolve('./src'))

    return config
  }
}

module.exports = nextConfig
