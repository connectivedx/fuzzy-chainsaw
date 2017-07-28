/* eslint global-require: 0 */
const path = require('path');
const sequence = require('run-sequence');

// duplicates gulp 4 type series api
const series = (...task) => (done) => sequence(...task, done);


module.exports = (fcBuildConfig, webpackConfigs) => (gulp) => {
  const cleanPreTask = require('./tasks/clean-pre')(fcBuildConfig);
  const cleanPostTask = require('./tasks/clean-post')(fcBuildConfig);
  const karmaTestTask = require('./tasks/karma-test')(fcBuildConfig);
  const scaffoldFactory = require('./tasks/scaffold-factory');
  const staticRender = require('./tasks/static-render-factory')(fcBuildConfig);
  const webpackBuild = require('./tasks/webpack-build-factory');
  const webpackWatch = require('./tasks/webpack-watch-factory');

  const { source } = fcBuildConfig.pathHelpers;


  // clean certain directories and files
  // before and after builds
  gulp.task('clean:pre', cleanPreTask);
  gulp.task('clean:post', cleanPostTask);

  // build tasks
  gulp.task('webpack:build', webpackBuild(webpackConfigs.build));
  gulp.task('webpack:build:ci', webpackBuild(webpackConfigs.buildCi));
  gulp.task('webpack:production', webpackBuild(webpackConfigs.production));
  gulp.task('webpack:production:ci', webpackBuild(webpackConfigs.productionCi));

  // watch is a minimal watcher for intergration
  // not requiring page rendering (only /assets)
  gulp.task('webpack:watch', webpackWatch(webpackConfigs.productionCi));
  gulp.task('watch', series('clean:pre', 'webpack:watch'));

  // static rendering with create static html from
  // source pages and automatically constructs
  // a component library for tags and components
  gulp.task('static:render', staticRender({ production: false }));
  gulp.task('static:render:production', staticRender({ production: true }));

  // test code using karma
  gulp.task('test', karmaTestTask);

  // builds for quick publishing
  // to a static server
  gulp.task('build', series(
    'clean:pre',
    'webpack:build',
    'static:render',
    'clean:post',
    'test'
  ));

  // builds a production ready set
  // of static assets and html
  gulp.task('production', series(
    'clean:pre',
    'webpack:production',
    'static:render:production',
    'clean:post'
  ));

  // builds a minimal set of static
  // assets (only /assets folder, no html)
  // hint: this will be faster for integrators
  gulp.task('build:ci', series(
    'clean:pre',
    'webpack:build:ci',
    'clean:post'
  ));

  // builds a minimal set of minified static assets
  gulp.task('production:ci', series(
    'clean:pre',
    'webpack:production:ci',
    'clean:post'
  ));


  // scaffolding tasks
  // tasks here require cli arguments

  // gulp scaffold:tag --name [name]
  gulp.task('scaffold:tag', scaffoldFactory({
    src: path.resolve(__dirname, 'scaffolding/stateless-component'),
    dest: source('elements/tags')
  }));

  // gulp scaffold:component --name [name]
  gulp.task('scaffold:component', scaffoldFactory({
    src: path.resolve(__dirname, 'scaffolding/stateless-component'),
    dest: source('elements/components')
  }));

  // gulp scaffold:composition --name [name]
  gulp.task('scaffold:composition', scaffoldFactory({
    src: path.resolve(__dirname, 'scaffolding/stateless-component'),
    dest: source('elements/composition')
  }));

  // gulp scaffold:component:stateful --name [name]
  gulp.task('scaffold:component:stateful', scaffoldFactory({
    src: path.resolve(__dirname, 'scaffolding/stateful-component'),
    dest: source('elements/components')
  }));
};
