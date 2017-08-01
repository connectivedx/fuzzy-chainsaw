/*
  This task starts the karma test runner
  in singleRun mode.
*/

const Server = require('karma').Server;
const gutil = require('gulp-util');

const karmaConfFactory = require('../testing/karma.conf.factory.js');


module.exports = (buildConfig) => (factoryOptions = {}) => (done) => {
  const karmaConf = karmaConfFactory(buildConfig);

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
