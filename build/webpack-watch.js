const webpack = require('webpack');
const handleWebpackErrors = require('./webpack/lib/handleWebpackErrors');
const config = require('./webpack/webpack.config.build');

module.exports = () => {
  webpack(config).watch({ }, handleWebpackErrors);
};
