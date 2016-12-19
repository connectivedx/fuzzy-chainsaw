const webpack = require('webpack');
const config = require('./webpack/webpack.config');
const webpackWatch = require('./webpack/lib/webpack-watch');

module.exports = done => {
  webpackWatch(config, {
    // port: 8080
  });
}
