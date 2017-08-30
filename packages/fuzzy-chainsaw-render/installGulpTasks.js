/* eslint global-require: 0 */

module.exports = (config) => (gulp, taskOptions) => {
  const gulpTask = require('fuzzy-chainsaw-shared').addGulpTask(gulp, taskOptions);
  const renderFactory = require('./gulp-tasks/render-factory')(config);

  // static rendering with create static html from
  // source pages and automatically constructs
  // a component library for tags and components
  gulpTask('render', renderFactory({ production: false }));
  gulpTask('render:production', renderFactory({ production: true }));
};
