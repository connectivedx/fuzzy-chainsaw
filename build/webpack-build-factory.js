/*
  This provides a factory that returns a gulp task
  for building webpack.
*/

const webpack = require('webpack');
const handleWebpackErrors = require('./webpack/lib/handleWebpackErrors');


module.exports = (config) => (done) => (
  webpack(config, (err, stats) => (
    handleWebpackErrors(err, stats, done))
  )
);
