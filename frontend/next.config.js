const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
