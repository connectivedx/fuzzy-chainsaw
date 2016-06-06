module.exports = function getFilename(data, file) {
  return file.path.substr(file.path.lastIndexOf('/') + 1).split('.')[0];
};
