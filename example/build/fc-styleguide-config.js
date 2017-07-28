const path = require('path');
const ReactDom = require('react-dom/server');
const styleguideConfig = require('fuzzy-chainsaw-styleguide');

const { baseUrl, directories } = require('./package.json');

const fcConfigPath = path.resolve(__dirname, '..', directories.source, 'fc-config.js');
const fcConfig = require(fcConfigPath); // eslint-disable-line

module.exports = styleguideConfig({
  fcConfig,
  fcConfigPath,
  baseUrl,
  directories: {
    root: path.resolve(__dirname, '..'),
    dest: path.resolve(__dirname, '..', directories.dest)
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
  demoRender: (component) => {
    ReactDom.render(component);
  }
});
