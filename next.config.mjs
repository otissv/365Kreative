/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    webVitalsAttribution: ['FCP', 'CLS', 'LCP'],
    optimizeCss: true
  },
  webpack(config, { dev, isServer }) {
    // Code splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        default: false,
        vendors: false
      }
      config.optimization.splitChunks.cacheGroups.default = false
      config.optimization.splitChunks.cacheGroups.default = false

      config.optimization.splitChunks.chunks = 'async'
      config.optimization.splitChunks.minSize = 20000
      config.optimization.splitChunks.maxAsyncRequests = 5
      config.optimization.splitChunks.maxInitialRequests = 3

      //Only minimize the bundle in production
      config.optimization.minimize = true
      config.optimization.concatenateModules = true
      config.optimization.usedExports = true
    }
    return config
  }
}

export default nextConfig
