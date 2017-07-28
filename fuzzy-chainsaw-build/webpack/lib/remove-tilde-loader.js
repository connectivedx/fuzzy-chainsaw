/*
  Remove tildes for dev (which denote node_modules in webpack)
  On dev, postcss-import is used instead of webpack import
*/

module.exports = function removeTilde(content) {
  this.cacheable();

  return content
    .replace(/@import "~/g, '@import "')
    .replace(/@import '~/g, "@import '");
};
