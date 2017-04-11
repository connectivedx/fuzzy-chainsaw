const webpackMerge = require('webpack-merge');

const dllProductionWorkflow = require('./workflow/dll.production');

module.exports = webpackMerge(dllProductionWorkflow, {
  entry: {
    vendor: [
      'fuzzy-rucksack',
      'react',
      'react-dom'
    ],
    styleguide: [
      'react-dom/server',
      'react-modal',
      'pretty-data',
      'react-element-to-jsx-string',
      'react-syntax-highlighter', // this is erroring on windows
      'slugify',
      'lodash.startcase'
    ],
    tests: [
      'tape',
      'enzyme'
    ]
  }
});
