const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  webpack(config, options) {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  distDir: '../../dist/functions/next'
})
