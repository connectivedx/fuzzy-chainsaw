const webpackMerge = require('webpack-merge');

const dllProductionWorkflow = require('./workflow/dll.production');

module.exports = webpackMerge(dllProductionWorkflow, {
  entry: {
    vendor: [
      'fuzzy-rucksack',
      'react',
      'react-dom',
      'prop-types'
    ]
  }
});
