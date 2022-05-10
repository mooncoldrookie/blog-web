/* eslint-disable no-unused-vars */
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const regexEqual = (x, y) =>
  x instanceof RegExp &&
  y instanceof RegExp &&
  x.source === y.source &&
  x.global === y.global &&
  x.ignoreCase === y.ignoreCase &&
  x.multiline === y.multiline

/**
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    disableStaticImages: true,
  },
  env: {
    API_URL: 'http://127.0.0.1:3000',
  },
}

module.exports = withPlugins([[withBundleAnalyzer], withImages], nextConfig)
