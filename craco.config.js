const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://ergast.com/api/f1',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  webpack: {
    alias: {
      '@f1': path.resolve(__dirname, 'src/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@f1(.*)$': '<rootDir>/src$1',
      },
    },
  },
}
