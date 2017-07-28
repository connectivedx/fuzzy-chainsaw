const testWorkflow = require('./build/webpack/workflow/tests');

module.exports = ({ fcConfig, pathHelpers }) =>
  (config) => {
    const { pkg } = fcConfig;
    const { dest, source } = pathHelpers;

    config.set({
      browsers: ['PhantomJS'],
      files: [
        { pattern: dest('assets/dlls/*.js'), watched: false },
        { pattern: source('**/*.test.*'), watched: true }
      ],
      frameworks: ['tap'],
      preprocessors: {
        [`${pkg.directories.source}/**/*`]: ['webpack']
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
