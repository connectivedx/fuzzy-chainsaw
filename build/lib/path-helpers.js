/*
  This provides a standard way to reference
  project files from the build files without
  hardcoding too much into config
*/

const path = require('path');
const pkgpath = require('packpath');

// grab what we need from package.json
const { directories, baseUrl: packageBaseUrl } = require(path.resolve(pkgpath.self(), 'package.json')); // eslint-disable-line

// check if base url is defined in package or command,
// return root if undefined or dev task is being run
const getBaseUrl = (devTasks) => {
  if (devTasks && devTasks.includes(process.env.npm_lifecycle_event)) {
    return '/';
  }

  return process.env.BASE_URL || packageBaseUrl || '/';
};

// define paths for export
const source = (...paths) => path.resolve(pkgpath.self(), directories.source, ...paths);
const dest = (...paths) => path.resolve(pkgpath.self(), directories.dest, ...paths);
const baseUrl = getBaseUrl(['dev', 'build:dev', 'test:dev']);

// this takes a simple object of entry:filepath pairs
// and runs each filepath through the source() helper
const sourceAll = (entry) =>
  Object.keys(entry)
    .reduce((entries, key) => {
      entries[key] = source(entry[key]);
      return entries;
    }, {});


module.exports = {
  baseUrl,
  source,
  dest,
  sourceAll
};
