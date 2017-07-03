const testWorkflow = require('./build/webpack/workflow/tests');
const { source, dest } = require('./build/lib/path-helpers');
const { directories } = require('./package.json');

const { hash } = require(dest('assets/dlls/dll-stats.json')); // eslint-disable-line

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: dest(`assets/dlls/vendor-${hash}.dll.js`), watched: false },
      { pattern: dest(`assets/dlls/styleguide-${hash}.dll.js`), watched: false },
      { pattern: dest(`assets/dlls/tests-${hash}.dll.js`), watched: false },
      { pattern: source('tests.jsx'), watched: true }
    ],
    frameworks: ['tap'],
    preprocessors: {
      [`${directories.source}/tests.jsx`]: ['webpack']
    },
    webpack: testWorkflow,
    webpackMiddleware: {
      stats: {
        chunks: false
      }
    },
    client: {
      captureConsole: false
    }
  });
};
