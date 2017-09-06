const template = require('./dist/template');

const structureArchiveData = require('fuzzy-chainsaw-shared/lib/structure-archive-data');

const tableOfContents = (rawArchive) => {
  const archive = structureArchiveData(rawArchive);
  return template(archive);
};

module.exports = tableOfContents;

