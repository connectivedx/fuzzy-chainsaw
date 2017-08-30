/* eslint global-require: 0 */

module.exports = (gulp, taskOptions) => {
  const sequence = require('run-sequence').use(gulp);
  const gulpTask = require('fuzzy-chainsaw-shared').addGulpTask(gulp, taskOptions);

  // duplicates gulp 4 type series api
  const series = (...task) => (done) => sequence(...task, done);


  // task sequences:

  // watch using  physical disk, instead
  // of the virtual drive used in dev
  gulpTask('watch', series(
    'clean:pre',
    'webpack:watch'
  ));


  // builds for quick publishing
  // to a static server
  gulpTask('build', series(
    'clean:pre',
    'webpack:build',
    'render',
    'clean:post',
    'test'
  ));


  // builds a production ready set
  // of static assets and html
  gulpTask('production', series(
    'clean:pre',
    'webpack:production',
    'render:production',
    'clean:post'
  ));


  // builds a minimal set of static
  // assets (only /assets folder, no html)
  // hint: this will be faster for integrators
  gulpTask('build:ci', series(
    'clean:pre',
    'webpack:build:ci',
    'clean:post'
  ));


  // builds a minimal set of minified static assets
  gulpTask('production:ci', series(
    'clean:pre',
    'webpack:production:ci',
    'clean:post'
  ));


  // full build tasks dll + build
  gulpTask('full:build', series('webpack-dll:build', 'build'));
  gulpTask('full:production', series('webpack-dll:production', 'production'));
  gulpTask('full:build:ci', series('webpack-dll:build:ci', 'build:ci'));
  gulpTask('full:production:ci', series('webpack-dll:production:ci', 'production:ci'));
};
