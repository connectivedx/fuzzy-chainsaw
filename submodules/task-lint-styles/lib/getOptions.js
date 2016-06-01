'use strict';

const defaultConfig = require('stylelint-config-standard')
const ourRules = {
  'color-named': 'never',
  'indentation': 'tab'
};

module.exports = function(conf) {
  let opts = {
    lintConfig: {
      rules: {}
    }
  };

  if (conf === undefined) {
    throw new Error(PluginName + ': options are not defined');
  }

  if (conf.src === undefined) {
    throw new Error(PluginName + ': options.src is not defined');
  } else {
    opts.src = conf.src
  }

  // assign rules
  Object.assign(opts.lintConfig.rules, defaultConfig.rules, ourRules, conf.rules);

  return opts;
}
