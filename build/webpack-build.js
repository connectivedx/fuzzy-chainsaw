const webpack = require('webpack');
const handleWebpackErrors = require('./webpack/lib/handleWebpackErrors');
const config = require('./webpack/webpack.config.build');

module.exports = done => (
  webpack(config, (err, stats) => (
    handleWebpackErrors(err, stats, done))
  )
);
