const path = require('path');
const PluginName = require('../package.json').name

module.exports = function getOptions(opts) {
  if (opts === undefined) {
    throw new Error(PluginName + ': options is not defined');
  }

  if (opts.src === undefined) {
    throw new Error(PluginName + ': options.src is not defined');
  } else {
    if (opts.src.indexOf('*') !== -1) {
      opts.src = opts.src;
    } else {
      opts.src = path.join(opts.src, '**/*');
    }
  }

  if (opts.dest === undefined) {
    throw new Error(PluginName + ': options.dest is not defined');
  }

  return opts;
};
