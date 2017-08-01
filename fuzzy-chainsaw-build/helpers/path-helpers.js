
/*
  This provides a standard way to reference
  project files from the build files without
  hardcoding too much into config
*/

const path = require('path');

module.exports = (fcBuildConfig) => {
  const baseUrl = process.env.BASE_URL || fcBuildConfig.baseUrl || '/';
  const source = (...paths) => path.resolve(fcBuildConfig.directories.source, ...paths);
  const dest = (...paths) => path.resolve(fcBuildConfig.directories.dest, ...paths);


  // This takes a simple object of entry:filepath pairs
  // and runs each filepath through the source() helper
  const sourceAll = (entry) =>
    Object.keys(entry)
      .reduce((entries, key) => {
        entries[key] = source(entry[key]);
        return entries;
      }, {});


  return {
    baseUrl,
    source,
    dest,
    sourceAll
  };
};
