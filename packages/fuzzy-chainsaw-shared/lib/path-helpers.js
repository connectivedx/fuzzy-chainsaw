
/*
  This provides a standard way to reference
  project files from the build files without
  hardcoding too much into config
*/

const path = require('path');

module.exports = (config) => {
  const baseUrl = process.env.BASE_URL || config.baseUrl || '/';

  const rootPath = (...paths) => path.resolve(config.directories.root, ...paths);
  const source = (...paths) => path.resolve(config.directories.source, ...paths);
  const dest = (...paths) => path.resolve(config.directories.dest, ...paths);


  return {
    baseUrl,
    root: rootPath,
    source,
    dest
  };
};
