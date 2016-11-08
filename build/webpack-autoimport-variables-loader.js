module.exports = function(content) {
  var importStatement = '@import "../../variables/index.css";';
  return importStatement + '\n' + content;
};
