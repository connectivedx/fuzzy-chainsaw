/* eslint global-require: 0 */
// const path = require('path');


module.exports = (fcBuildConfig, webpackConfigs) => (gulp, taskOptions = { skip: [] }) => {
  const sequence = require('run-sequence').use(gulp);

  const cleanFactory = require('./gulp-tasks/clean-factory')(fcBuildConfig);
  const karmaTestFactory = require('./gulp-tasks/karma-test-factory')(fcBuildConfig);
  // const scaffoldFactory = require('./gulp-tasks/scaffold-factory');
  // const staticRenderFactory = require('./gulp-tasks/static-render-factory')(fcBuildConfig);
  const webpackFactory = require('./gulp-tasks/webpack-factory');

  // duplicates gulp 4 type series api
  const series = (...task) => (done) => sequence(...task, done);

  // wrapper around gulp.task to provide install
  // option to skip certain
  const gulpTask = (name, fn) => {
    if (taskOptions.skip.indexOf(name) < 0) {
      gulp.task(name, fn);
    }
  };

  // const { source } = fcBuildConfig.pathHelpers;

  // clean certain directories and files
  // before and after builds
  gulpTask('clean:pre', cleanFactory({ pre: true }));
  gulpTask('clean:post', cleanFactory({ post: true }));

  // build tasks
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

  // static rendering with create static html from
  // source pages and automatically constructs
  // a component library for tags and components
  // gulpTask('static:render', staticRenderFactory({ production: false }));
  // gulpTask('static:render:production', staticRenderFactory({ production: true }));

  // test code using karma
  gulpTask('test', karmaTestFactory({ singleRun: true }));
  gulpTask('test:dev', karmaTestFactory());


  gulpTask('watch', series(
    'clean:pre',
    'webpack:watch'
  ));

  // builds for quick publishing
  // to a static server
  gulpTask('build', series(
    'clean:pre',
    'webpack:build',
    // 'static:render',
    'clean:post',
    'test'
  ));

  // builds a production ready set
  // of static assets and html
  gulpTask('production', series(
    'clean:pre',
    'webpack:production',
    // 'static:render:production',
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


  // scaffolding tasks
  // tasks here require cli arguments

  // gulp scaffold:tag --name [name]

  // gulpTask('scaffold:tag', scaffoldFactory({
  //   src: path.resolve(__dirname, 'scaffolding/stateless-component'),
  //   dest: source('elements/tags')
  // }));

  // // gulp scaffold:component --name [name]
  // gulpTask('scaffold:component', scaffoldFactory({
  //   src: path.resolve(__dirname, 'scaffolding/stateless-component'),
  //   dest: source('elements/components')
  // }));

  // // gulp scaffold:composition --name [name]
  // gulpTask('scaffold:composition', scaffoldFactory({
  //   src: path.resolve(__dirname, 'scaffolding/stateless-component'),
  //   dest: source('elements/composition')
  // }));

  // // gulp scaffold:component:stateful --name [name]
  // gulpTask('scaffold:component:stateful', scaffoldFactory({
  //   src: path.resolve(__dirname, 'scaffolding/stateful-component'),
  //   dest: source('elements/components')
  // }));
};
