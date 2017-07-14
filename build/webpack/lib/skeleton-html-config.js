/*
  shared skeleton config for HtmlWebpackPlugin
*/

const { source, dest } = require('../../lib/path-helpers');

const dllStats = require(dest('assets/dlls/dll-stats.json')); // eslint-disable-line
const { outputModes, outputSort } = require(source('fc-config')); // eslint-disable-line


module.exports = {
  dllStats,
  template: source('skeleton.html'),
  inject: true,
  chunksSortMode: outputSort
};
