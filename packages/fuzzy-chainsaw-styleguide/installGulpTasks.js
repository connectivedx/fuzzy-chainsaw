/* eslint global-require: 0 */

module.exports = (config) => (gulp, taskOptions) => {
  const gulpTask = require('fuzzy-chainsaw-shared').addGulpTask(gulp, taskOptions);
  const copyStyleguide = require('./gulp-tasks/copy-styleguide-factory')(config);

  // copy styleguide
  gulpTask('styleguide', copyStyleguide({}));
};
