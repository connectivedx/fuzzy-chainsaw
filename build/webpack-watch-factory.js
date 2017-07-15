/*
  This provides a factory that returns a gulp task
  for building webpack in watch mode.

  This is different than development mode.
*/

const webpack = require('webpack');
const handleWebpackErrors = require('./webpack/lib/handleWebpackErrors');

module.exports = (config) => () => {
  webpack(config).watch({ }, handleWebpackErrors);
};
