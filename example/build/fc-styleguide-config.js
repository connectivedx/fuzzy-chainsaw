const path = require('path');
const ReactDom = require('react-dom/server');
const styleguideConfig = require('fuzzy-chainsaw-styleguide');

const pkg = require('../package.json');
const fcConfig = require('./fc-config');


module.exports = styleguideConfig({
  pkg,
  fcConfig,
  baseUrl: pkg.baseUrl,
  directories: {
    root: path.resolve(__dirname, '..'),
    dest: path.resolve(__dirname, '..', pkg.directories.dest)
  },
  variables: {
    colors: {
      black: '#000',
      'gray-darker': '#333',
      'gray-dark': '#666',
      gray: '#999',
      'gray-light': '#bbb',
      'gray-lighter': '#ddd',
      white: '#fff',
      link: '#369',
      background: '#eaeaea',
      'background-dark': '#333'
    }
  },
  demoRender: (component) => (
    ReactDom.renderToStaticMarkup(component)
  )
});
