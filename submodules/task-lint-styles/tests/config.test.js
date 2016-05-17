var config = require('../index.js').config;
var test = require('tape');

test('Config :: default', function(t) {
  const conf = config();

  t.plan(2)
  t.equal(conf.rules !== undefined, true);
  t.equal(conf.rules.indentation, "tab");
});


test('Config :: rules options', function(t) {
  const conf = config({
    rules: {
      "indentation": "space"
    }
  });

  t.plan(2)
  t.equal(conf.rules !== undefined, true);
  t.equal(conf.rules.indentation, "space");
});
