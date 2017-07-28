const testWorkflow = require('./build/webpack/workflow/tests');

module.exports = ({ directories, pathHelpers }) =>
  (config) => {
    const { dest, source } = pathHelpers;

    config.set({
      browsers: ['PhantomJS'],
      files: [
        { pattern: dest('assets/dlls/*.js'), watched: false },
        { pattern: source('tests.jsx'), watched: true }
      ],
      frameworks: ['tap'],
      preprocessors: {
        [`${directories.source}/tests.jsx`]: ['webpack']
      },
      webpack: testWorkflow,
      webpackMiddleware: {
        stats: testWorkflow.stats
      },
      client: {
        captureConsole: false
      }
    });
  };
