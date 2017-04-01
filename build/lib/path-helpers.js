const path = require('path');
const pkgpath = require('packpath');

const { directories } = require(path.resolve(pkgpath.self(), 'package.json'));

module.exports.source = (...paths) => path.resolve(pkgpath.self(), directories.source, ...paths);
module.exports.dest = (...paths) => path.resolve(pkgpath.self(), directories.dest, ...paths);
