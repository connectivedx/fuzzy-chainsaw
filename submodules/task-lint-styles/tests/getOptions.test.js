var test = require('tape');
var getOptions = require('../lib/getOptions');

test('getOptions() :: no options throws error', function(t) {
  t.plan(1);
  try {
    getOptions();
  } catch(e) {
    t.equal(true, true);
  }
});

test('getOptions({ }) :: no src throws error', function(t) {
  t.plan(1);
  try {
    getOptions({ });
  } catch(e) {
    t.equal(true, true);
  }
});

test('getOptions({ rules }) :: overwriting rules', function(t) {
  const opts = getOptions({
    src: 'component/styles',
    rules: {
      indentation: 'space'
    }
  })

  t.plan(3);

  t.equal(opts.lintConfig !== undefined, true);
  t.equal(opts.lintConfig.rules !== undefined, true);
  t.equal(opts.lintConfig.rules.indentation, 'space');
});
