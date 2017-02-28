const webpack = require('webpack');
const webpackErrorHandler = require('./webpack/lib/webpack-errorhandler');
const config = require('./webpack/webpack.config.build');

module.exports = done => {
  webpack(config).watch({ }, (err, stats) => {
    webpackErrorHandler(err, stats, { noexit: true }, () => { });
  });
}
