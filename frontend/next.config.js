const { i18n } = require('./next-i18next.config');
const withMDX = require('@next/mdx')()

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
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
};

module.exports = withMDX(nextConfig)
