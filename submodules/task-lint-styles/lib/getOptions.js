'use strict';

const defaultConfig = require('stylelint-config-standard')
const ourRules = {
  'color-named': 'never',
  'indentation': 'tab'
};

module.exports = function(options) {
  let opts = {
    lintConfig: {
      rules: {}
    }
  };

  if (options === undefined) {
    throw new Error(PluginName + ': options are not defined');
  }

  if (options.src === undefined) {
    throw new Error(PluginName + ': options.src is not defined');
  } else {
    opts.src = options.src
  }

  // assign rules
  Object.assign(opts.lintConfig.rules, defaultConfig.rules, ourRules, options.rules);

  return opts;
}
