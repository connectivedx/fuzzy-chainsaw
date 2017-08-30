/*
  This task starts the karma test runner
  in singleRun mode.
*/

const Server = require('karma').Server;
const gutil = require('gulp-util');

// fc stuff
const { webpackStats: stats } = require('fuzzy-chainsaw-shared');
const webpackConfigFactory = require('../webpack/config.factory');


const karmaConfFactory = (testConfig) => {
  const { directories } = testConfig.pkg;
  const { dest, source } = testConfig.pathHelpers;
  const { entryFiles, outputDirectories } = testConfig.projectConfig;

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
    webpack: webpackConfigFactory(testConfig)({ test: true }),
    webpackMiddleware: {
      stats
    },
    client: {
      captureConsole: false
    }
  };
};


module.exports = (testConfig) => (factoryOptions = {}) => (done) => {
  const karmaConf = karmaConfFactory(testConfig);

  if (factoryOptions.singleRun) {
    Object.assign(karmaConf, { singleRun: true });
  }

  new Server(karmaConf)
    .on('browser_error', (browser, err) => {
      gutil.log(`Karma Run Failed: ${err.message}`);

      if (factoryOptions.singleRun) {
        throw err;
      }
    })
    .on('run_complete', (browsers, results) => {
      if (factoryOptions.singleRun) {
        if (results.failed) {
          throw new Error('Karma: Tests Failed');
        } else {
          done();
        }
      } else if (!results.failed) {
        gutil.log('Karma Run Complete: No Failures');
      }
    })
    .start();
};
