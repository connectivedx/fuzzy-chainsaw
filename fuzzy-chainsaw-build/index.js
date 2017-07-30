/* eslint global-require: 0 */

module.exports = (fcBuildConfig) => {
  const pathHelpers = require('./lib/path-helpers')(fcBuildConfig);

  Object.assign(fcBuildConfig, { pathHelpers });

  const webpackConfigFactory = require('./webpack/config.factory')(fcBuildConfig);
  const webpackDllFactory = require('./webpack/dll.factory')(fcBuildConfig);

  const webpackConfigs = {
    dll: webpackDllFactory(),

    dllCi: webpackDllFactory({
      ci: true
    }),

    dllProduction: webpackDllFactory({
      production: true
    }),

    dllProductionCi: webpackDllFactory({
      production: true,
      ci: true
    }),

    dev: webpackConfigFactory({
      dev: true
    }),

    build: webpackConfigFactory({
      build: true
    }),

    buildCi: webpackConfigFactory({
      build: true,
      ci: true
    }),

    production: webpackConfigFactory({
      build: true,
      production: true
    }),

    productionCi: webpackConfigFactory({
      build: true,
      production: true,
      ci: true
    }),

    test: webpackConfigFactory({
      test: true
    }),

    archive: webpackConfigFactory({
      archive: true
    })
  };

  return {
    fcBuildConfig,
    pathHelpers,
    webpackConfigFactory,
    webpackDllFactory,
    webpackConfigs,
    karmaConfigFactory: require('./testing/karma.conf.factory')(fcBuildConfig),
    installBuildTasks: require('./installBuildTasks')(fcBuildConfig, webpackConfigs),
    tasks: {
      cleanFactory: require('./gulp-tasks/clean-factory')(fcBuildConfig),
      karmaTestFactory: require('./gulp-tasks/karma-test-factory')(fcBuildConfig),
      scaffoldFactory: require('./gulp-tasks/scaffold-factory')(fcBuildConfig),
      // staticRenderFactory: require('./gulp-tasks/static-render-factory')(fcBuildConfig),
      webpackFactory: require('./gulp-tasks/webpack-factory')(fcBuildConfig)
    }
  };
};
