// @ts-check
const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  images: {
    domains: [],
  },
  headers: async () => [{
    source: '/:path*',
    headers: [
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      { key: 'Cross-Origin-Embedder-Policy', value: 'same-origin' },
    ],
  }],
  basePath: '/docs',
})
