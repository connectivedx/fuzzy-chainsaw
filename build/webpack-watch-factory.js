const webpack = require('webpack');
const handleWebpackErrors = require('./webpack/lib/handleWebpackErrors');

module.exports = config => () => {
  webpack(config).watch({ }, handleWebpackErrors);
};
