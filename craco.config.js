const path = require('path')

module.exports = {
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
