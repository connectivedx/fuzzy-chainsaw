const path = require('path');
const fs = require('fs');
const fileExists = require('file-exists');


const getDeepName = source => blob => {
  const blobPath = path.resolve(__dirname, '../..', blob);
  const rootPath = path.resolve(__dirname, '../..', source);
  const name = blobPath.substr(rootPath.length + 1);

  return name
    .substr(0, name.length - path.extname(blob).length)
    .replace(/\\/g, '/');
};

// helpers for finding render files
const getDirectories = (src) =>
  fs.readdirSync(path.resolve(__dirname, '../..', src))
    .filter(file => fs.statSync(path.join(__dirname, '../..', src, file)).isDirectory());

const componentExists = (baseSrc, name) =>
  fileExists(path.resolve(__dirname, '../..', baseSrc, name, name + '.jsx'));


module.exports = {
  getDeepName,
  getDirectories,
  componentExists
};
