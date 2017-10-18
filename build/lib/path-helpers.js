/*
  This provides a standard way to reference
  project files from the build files without
  hardcoding too much into config
*/

const path = require('path');
const pkgpath = require('packpath');

const { directories, baseUrl: packageBaseUrl } = require(path.resolve(pkgpath.self(), 'package.json')); // eslint-disable-line
const source = (...paths) => path.resolve(pkgpath.self(), directories.source, ...paths);
const dest = (...paths) => path.resolve(pkgpath.self(), directories.dest, ...paths);

// dev always serves from root (localhost:8080),
// so only use baseUrl if task is not dev-related
const devTasks = ['dev', 'build:dev', 'test:dev'];
const baseUrl = devTasks.includes(process.env.npm_lifecycle_event) ? '/' : process.env.BASE_URL || packageBaseUrl || '/';


// This takes a simple object of entry:filepath pairs
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
