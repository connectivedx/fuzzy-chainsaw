/* eslint global-require: 0 */
module.exports = (config) => {
  config.pathHelpers = require('fuzzy-chainsaw-shared').pathHelpers(config);

  return {
    installGulpTasks: require('./installGulpTasks')(config)
  };
};
