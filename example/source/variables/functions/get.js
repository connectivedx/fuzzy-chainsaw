const get = require('./get-factory');

module.exports = (ns, name = 'default', variant) =>
  get(ns)(name, variant);
