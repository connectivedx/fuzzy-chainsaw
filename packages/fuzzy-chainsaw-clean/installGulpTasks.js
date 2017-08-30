/* eslint global-require: 0 */

module.exports = (config) => (gulp, taskOptions) => {
  const gulpTask = require('fuzzy-chainsaw-shared').addGulpTask(gulp, taskOptions);
  const cleanFactory = require('./gulp-tasks/clean-factory')(config);

  // clean certain directories and files
  // before and after builds
  gulpTask('clean:pre', cleanFactory({ pre: true }));
  gulpTask('clean:post', cleanFactory({ post: true }));
};
