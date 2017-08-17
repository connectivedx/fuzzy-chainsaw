const webpackConfigFactory = require('../webpack/config.factory');
const stats = require('../webpack/lib/webpack-stats');

module.exports = (fcBuildConfig) => {
  const { directories } = fcBuildConfig.pkg;
  const { dest, source } = fcBuildConfig.pathHelpers;
  const { entryFiles, outputDirectories } = fcBuildConfig.fcConfig;

  return {
    browsers: ['PhantomJS'],
    files: [
      { pattern: dest(`${outputDirectories.dll}/*.js`), watched: false },
      { pattern: source(entryFiles.tests), watched: true }
    ],
    frameworks: ['tap'],
    preprocessors: {
      [`${directories.source}/${entryFiles.tests}`]: ['webpack']
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
