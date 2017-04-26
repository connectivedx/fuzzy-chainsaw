const webpackMerge = require('webpack-merge');

const webpack = require('webpack');
const dllProductionWorkflow = require('./workflow/dll.production');

module.exports = webpackMerge(dllProductionWorkflow, {
  entry: {
    vendor: [
      'fuzzy-rucksack',
      'react',
      'react-dom',
      'prop-types'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.CI_MODE': true
    })
  ]
});
