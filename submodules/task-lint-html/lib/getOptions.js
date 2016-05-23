const path = require('path');
const PluginName = require('../package.json').name

module.exports = function getOptions(opts) {
  if (opts === undefined) {
    throw new Error(PluginName + ': options is not defined');
  }

  if (opts.src === undefined) {
    throw new Error(PluginName + ': options.src is not defined');
  }

  opts.lintOpts = Object.assign({
    'tagname-lowercase': true,
    'attr-lowercase': true,
    'attr-value-double-quotes': true,
    'attr-value-not-empty': true,
    'attr-no-duplication': true,
    'doctype-first': true,
    'tag-pair': true,
    'tag-self-close': true,
    'spec-char-escape': true,
    'id-unique': true,
    'src-not-empty': true,
    'title-require': true,
    'alt-require': true,
    'doctype-html5': true,
    'inline-style-disabled': true,
    'space-tab-mixed-disabled': true
  }, opts.lintOpts)

  return opts;
};
