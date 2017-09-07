const context = require.context('./', true, /^(?!.*\.(test|example)\.jsx$).*\.(jsx)$/);

context.keys().forEach((key) => {
  module.exports[key.substr(2, key.indexOf('/', 2) - 2)] = context(key).default;
});
