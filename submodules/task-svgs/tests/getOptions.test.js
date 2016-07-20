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

test('getOptions({ src + name }) :: no dest throws error', function(t) {
  t.plan(1);
  try {
    getOptions({
      src: 'source',
			meta: 'meta.yaml'
    });
  } catch(e) {
    t.equal(true, true);
  }
});

test('getOptions({ dest + name }) :: no src throws error', function(t) {
  t.plan(1);
  try {
    getOptions({
      dest: 'dist',
			meta: 'meta.yaml'
    });
  } catch(e) {
    t.equal(true, true);
  }
});

test('getOptions({ src + dest }) :: no name throws error', function(t) {
  t.plan(1);
  try {
    getOptions({
      src: 'source',
      dest: 'dist'
    });
  } catch(e) {
    t.equal(true, true);
  }
});

test('src directory should equal directory + globs + .svg', function(t) {
  var opts = getOptions({
    src: 'input/directory',
    dest: 'output',
		meta: 'meta.yaml'
  });

  t.plan(2);
  t.equal(opts.src, 'input/directory/**/*.svg');
  t.equal(opts.dest, 'output');
});
