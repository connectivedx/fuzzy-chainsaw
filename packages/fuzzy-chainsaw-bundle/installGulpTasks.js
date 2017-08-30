/* eslint global-require: 0 */

module.exports = (fcBuildConfig, webpackConfigs) => (gulp, taskOptions) => {
  const gulpTask = require('fuzzy-chainsaw-shared').addGulpTask(gulp, taskOptions);
  const webpackFactory = require('./gulp-tasks/webpack-factory');


  // dll tasks
  gulpTask('webpack-dll:build', webpackFactory(webpackConfigs.dll));
  gulpTask('webpack-dll:build:ci', webpackFactory(webpackConfigs.dllCi));
  gulpTask('webpack-dll:production', webpackFactory(webpackConfigs.dllProduction));
  gulpTask('webpack-dll:production:ci', webpackFactory(webpackConfigs.dllProductionCi));


  // build tasks
  gulpTask('webpack:build', webpackFactory(webpackConfigs.build));
  gulpTask('webpack:build:ci', webpackFactory(webpackConfigs.buildCi));
  gulpTask('webpack:production', webpackFactory(webpackConfigs.production));
  gulpTask('webpack:production:ci', webpackFactory(webpackConfigs.productionCi));


  // watch is a minimal watcher for intergration
  // not requiring page rendering (only /assets)
  gulpTask('webpack:watch', webpackFactory(webpackConfigs.productionCi, { watch: true }));
};
