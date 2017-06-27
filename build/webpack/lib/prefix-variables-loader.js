module.exports = function prefixVariables(content) {
  this.cacheable();
  const lineBreak = content.substr(0, 1) === '@' ? '\n' : '\n\n';
  return `@import url("../../variables/index.css");${lineBreak}${content}`;
};
