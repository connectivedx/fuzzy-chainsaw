/* eslint global-require: 0 */

module.exports = (testConfig) => (gulp, taskOptions) => {
  const gulpTask = require('fuzzy-chainsaw-shared').addGulpTask(gulp, taskOptions);
  const karmaTestFactory = require('./gulp-tasks/karma-test-factory')(testConfig);

  // test code using karma
  gulpTask('test', karmaTestFactory({ singleRun: true }));
  gulpTask('test:dev', karmaTestFactory());
};
