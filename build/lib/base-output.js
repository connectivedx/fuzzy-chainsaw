const path = require('path');
const pkg = require('../../package.json');
const dirs = pkg.directories;


// a base objects used in every configuration
module.exports = config => Object.assign({
  outputPath: path.resolve(__dirname, '../..', dirs.output),
}, config);
