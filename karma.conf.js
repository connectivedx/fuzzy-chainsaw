const testWorkflow = require('./build/webpack/workflow/tests');
const { dest } = require('./build/lib/path-helpers');
const { directories } = require('./package.json');

const { hash } = require(dest('assets/dlls/dll-stats.json')); // eslint-disable-line

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      `${directories.dest}/assets/dlls/vendor-${hash}.dll.js`,
      `${directories.dest}/assets/dlls/styleguide-${hash}.dll.js`,
      `${directories.source}/tags/Brand/Brand.test.jsx`
    ],
    frameworks: ['tap'],
    preprocessors: {
      '**/*.test.jsx': ['webpack']
    },
    webpack: testWorkflow,
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
