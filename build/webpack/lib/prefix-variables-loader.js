const loaderUtils = require('loader-utils');

const defaultOptions = {
  path: 'Vars/index.css'
};


module.exports = function prefixVariables(content) {
  const options = Object.assign(
    {},
    defaultOptions,
    loaderUtils.getOptions(this)
  );

  this.cacheable();
  const lineBreak = content.substr(0, 1) === '@' ? '\n' : '\n\n';
  return `@import url("${options.path}");${lineBreak}${content}`;
};
