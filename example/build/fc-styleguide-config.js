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
      background: '#fff',
      text: '#666',
      active: '#4925a0',
      inlineCode: '#4925a0',
      tableHeaders: '#000',
      tableRowBorder: '#999',
      headerBackground: '#fff',
      headerTitle: '#999',
      headerLinks: '#666',
      headerBorder: '#ddd',
      exampleHeaderBackground: '#222',
      exampleHeaderForeground: '#fff',
      exampleBackground: '#eee',
      exampleForeground: '#222',
      exampleDarkBackground: '#111',
      exampleDarkForeground: '#fff',
      codeHeaderBackground: '#4925a0',
      codeHeaderForeground: '#fff',
      codeBackground: '#090226'
    }
  },
  demoRender: (component) => (
    ReactDom.renderToStaticMarkup(component)
  )
});
