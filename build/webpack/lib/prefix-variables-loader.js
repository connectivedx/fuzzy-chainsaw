module.exports = function prefixVariables(content) {
  this.cacheable();
  return '@import url("../../variables/index.css");\n\n' + content;
};
