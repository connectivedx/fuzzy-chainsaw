const webpackMerge = require('webpack-merge');

const dllWorkflow = require('./workflow/dll');

module.exports = webpackMerge(dllWorkflow, {
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
