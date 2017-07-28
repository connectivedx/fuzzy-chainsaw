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
    karmaConfig: require('./karma.conf')(fcBuildConfig),
    installBuildTasks: require('./gulp/installBuildTasks')(fcBuildConfig, webpackConfigs),
    tasks: {
      cleanPre: require('./gulp/tasks/clean-pre')(fcBuildConfig),
      cleanPost: require('./gulp/tasks/clean-post')(fcBuildConfig),
      karmaTest: require('./gulp/tasks/karma-test')(fcBuildConfig),
      scaffoldFactory: require('./gulp/tasks/scaffold-factory')(fcBuildConfig),
      staticRenderFactory: require('./gulp/tasks/static-render-factory')(fcBuildConfig),
      webpackBuildFactory: require('./gulp/tasks/webpack-build-factory')(fcBuildConfig),
      webpackWatchFactory: require('./gulp/tasks/webpack-watch-factory')(fcBuildConfig)
    },
    fcUtils: require('./lib/fc-utilities'),
    renderHelpers: require('./lib/render-helpers'),
    pathHelpers,
    webpackConfigFactory,
    webpackDllFactory,
    webpackConfigs
  };
};
