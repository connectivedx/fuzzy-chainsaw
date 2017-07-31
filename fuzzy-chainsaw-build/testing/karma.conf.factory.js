const stats = require('../webpack/lib/webpack-stats');
const webpackConfigFactory = require('../webpack/config.factory');

module.exports = (fcBuildConfig) => {
  const { directories } = fcBuildConfig.pkg;
  const { dest, source } = fcBuildConfig.pathHelpers;

  return {
    browsers: ['PhantomJS'],
    files: [
      { pattern: dest('assets/dlls/*.js'), watched: false },
      { pattern: source('**/*.test.jsx'), watched: true }
    ],
    frameworks: ['tap'],
    preprocessors: {
      [`${directories.source}/**/*`]: ['webpack']
    },
    webpack: webpackConfigFactory(fcBuildConfig)({ test: true }),
    webpackMiddleware: {
      stats
    },
    client: {
      captureConsole: false
    }
  };
};
