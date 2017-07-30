const pick = require('lodash.pick');


// dll libraries
module.exports.dlls = {
  // modules required for regular bundle
  vendor: [
    'dom-select'
  ],

  static: [
    'react',
    'react-dom'
  ]

  // // modules required for tests
  // tests: [
  //   'tape',
  //   'enzyme'
  // ]
};


// define entry points relative to source
const entries = {
  // archive is used in build and dev mode
  // for styleguide and static site generation
  archive: 'archive.jsx',

  // dev is used in dev mode
  dev: 'dev.jsx',

  // bundle is the entry shared between all themes
  bundle: 'bundle.jsx',

  // bundle-generic is the entry used for the generic theme
  'bundle-generic': 'bundle-generic.jsx'
};

// export sets of entries for different tasks
module.exports.entries = {
  archive: pick(entries, 'archive'),
  build: pick(entries, 'archive', 'bundle', 'bundle-generic'),
  dev: pick(entries, 'dev', 'bundle', 'bundle-generic'),
  ci: pick(entries, 'bundle', 'bundle-generic')
};


// define the output directories
// for different file types
// (don't include leading or trailing slash)
module.exports.outputDirectories = {
  assets: 'assets',
  css: 'assets',
  js: 'assets',
  dll: 'assets/dlls',
  images: 'assets/images',
  favIcons: 'assets/favicons',
  fonts: 'assets/fonts',
  svgs: 'assets/svgs',
  static: 'assets/static',
  offline: 'assets/offline'
};


// define the output formats for
// different file types
module.exports.outputFormats = {
  dll: '[name]-[hash].js',
  js: '[name]-[hash].js',
  css: '[name]-[hash].css',
  fonts: '[name]-[md5:hash:hex:8].[ext]',
  images: '[name]-[md5:hash:hex:8].[ext]',
  favIconPrefix: 'favicon-[hash:8]-'
};


// This function sorts entry files before
// they are injected into the skeleton
module.exports.outputSort = (a, b) => {
  const A = a.names[0];
  const B = b.names[0];

  if (A === 'dev') return -1;
  if (A === 'bundle' && (B.indexOf('bundle-') !== -1)) return -1;
  if (A === 'bundle' && (B.indexOf('bundle-') === -1)) return 1;
  return 0;
};


// define themes and theme metadata
module.exports.themes = [{
  id: 'generic',
  name: 'Generic'
}];
