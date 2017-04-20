const path = require('path');
const pkgpath = require('packpath');

const { directories, baseUrl } = require(path.resolve(pkgpath.self(), 'package.json')); // eslint-disable-line

module.exports.baseUrl = process.env.BASE_URL || baseUrl || '/';
module.exports.source = (...paths) => path.resolve(pkgpath.self(), directories.source, ...paths);
module.exports.dest = (...paths) => path.resolve(pkgpath.self(), directories.dest, ...paths);
