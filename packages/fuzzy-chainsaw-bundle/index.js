/* eslint global-require: 0 */
module.exports = (config) => {
  config.pathHelpers = require('fuzzy-chainsaw-shared').pathHelpers(config);

  const webpackConfigFactory = require('./webpack/config.factory')(config);
  const webpackDllFactory = require('./webpack/dll.factory')(config);

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

    shared: webpackConfigFactory(),

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

    archive: webpackConfigFactory({
      archive: true
    })
  };

  return {
    webpackConfigs,
    webpackConfigFactory,
    webpackDllFactory,
    installGulpTasks: require('./installGulpTasks')(config, webpackConfigs)
  };
};
