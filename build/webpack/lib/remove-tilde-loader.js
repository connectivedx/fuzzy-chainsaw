module.exports = function removeTilde(content) {
  this.cacheable();

  return content
    .replace(/@import "~/g, '@import "')
    .replace(/@import '~/g, "@import '");
};
