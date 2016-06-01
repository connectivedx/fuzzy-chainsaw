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

test('getOptions({ dest }) :: no src throws error', function(t) {
  t.plan(1);
  try {
    getOptions({
      dest: 'dist'
    });
  } catch(e) {
    t.equal(true, true);
  }
});

test('getOptions({ src: path })', function(t) {
  var opts = getOptions({
    src: 'input/direct/*',
    dest: 'output'
  });

  t.plan(2);
  t.equal(opts.src, 'input/direct/*');
  t.equal(opts.dest, 'output');
});
