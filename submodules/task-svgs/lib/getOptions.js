const path = require('path');
const PluginName = require('../package.json').name

module.exports = function getOptions(options) {
  if (options === undefined) {
    throw new Error(PluginName + ': options is not defined');
  }

  if (options.src === undefined) {
    throw new Error(PluginName + ': options.src is not defined');
  } else {
    if (options.src.indexOf('*') !== -1) {
      options.src = options.src;
    } else {
      options.src = path.join(options.src, '**/*.svg');
    }
  }

  if (options.dest === undefined) {
    throw new Error(PluginName + ': options.dest is not defined');
  }

	if (options.meta === undefined) {
    throw new Error(PluginName + ': options.meta is not defined');
  }

  return options;
};
