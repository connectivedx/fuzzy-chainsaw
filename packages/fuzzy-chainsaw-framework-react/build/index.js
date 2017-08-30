module.exports.webpackLoaders = [{
  test: /\.(jsx|js)$/,
  exclude: /node_modules/, // (?!(FcUtils)\/)/,
  enforce: 'pre',
  loader: 'eslint-loader' // linting
}, {
  test: /\.(jsx|js)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true
  }
}];


module.exports.extensions = ['.js', '.jsx'];
