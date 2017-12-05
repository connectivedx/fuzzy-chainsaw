const postcss = require('postcss');

module.exports = postcss.plugin('postcss-extract-root-variables', () => {
  function plugin(file) {
    file.walkRules(':root', (rule) => {
      rule.walkDecls(/^--color/, (decl) => {
        console.log(decl.prop, decl.value);
      });
    });
  }

  return plugin;
});
