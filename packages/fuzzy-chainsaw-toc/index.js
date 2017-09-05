/* eslint-disable */

const fs = require('fs');
const template = require('./dist/template');

const TableOfContents = (rawArchive) => {
  const archive = structureArchiveData(rawArchive);
  return template(archive);
}

module.exports = TableOfContents;

