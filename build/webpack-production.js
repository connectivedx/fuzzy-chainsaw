const webpack = require('webpack');
const webpackErrorHandler = require('./webpack/lib/webpack-errorhandler');
const config = require('./webpack/webpack.config.production');

module.exports = done => {
  webpack(config, (err, stats) => {
    webpackErrorHandler(err, stats, {}, done);
  });
}
