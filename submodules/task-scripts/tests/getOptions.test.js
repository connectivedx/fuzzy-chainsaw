var getOptions = require('../lib/getOptions');
var test = require('tape');

test('getOptions() :: no args throws error', function(t) {
  t.plan(1);

  try {
    const conf = getOptions();
  } catch(e) {
    t.equal(e !== undefined, true);
  }
});

test('getOptions() :: minimal default opts', function(t) {
  const conf = getOptions({
    entries: 'main.js',
    dest: 'dist',
    name: 'bundle.js'
  });

  t.plan(7);
  t.equal(conf.name, 'bundle.js');
  t.equal(conf.entries[0], 'main.js');
  t.equal(conf.dest[0], 'dist');
  t.equal(conf.debug, true);
  t.equal(conf.cache === undefined, true);
  t.equal(conf.packageCache === undefined, true);
  t.equal(conf.watch === undefined, true);
});

test('getOptions() :: missing opts.name throws error', function(t) {
  t.plan(1);

  try {
    const conf = getOptions({
      entries: 'main.js',
      dest: 'dist'
    });
  } catch(e) {
    t.equal(e !== undefined, true);
  }
});

test('getOptions() :: missing opts.dest throws error', function(t) {
  t.plan(1);

  try {
    const conf = getOptions({
      entries: 'main.js',
      name: 'bundle.js'
    });
  } catch(e) {
    t.equal(e !== undefined, true);
  }
});

test('getOptions() :: missing opts.entries throws error', function(t) {
  t.plan(1);

  try {
    const conf = getOptions({
      dest: 'dist',
      name: 'bundle.js'
    });
  } catch(e) {
    t.equal(e !== undefined, true);
  }
});

test('getOptions({ entries }) :: entries always returns array', function(t) {
  const def = {
    entries: 'main.js',
    dest: 'dist',
    name: 'bundle.js'
  };

  const c1 = getOptions(def);
  const c2 = getOptions(Object.assign({}, def, {
    entries: ['main.js'],
  }));

  t.plan(4);
  t.equal(Array.isArray(c1.entries), true);
  t.equal(Array.isArray(c2.entries), true);
  t.equal(c1.entries[0], 'main.js');
  t.equal(c2.entries[0], 'main.js');
});

test('getOptions({ dest }) :: dest always returns array', function(t) {
  const def = {
    entries: 'main.js',
    dest: 'dist',
    name: 'bundle.js'
  };

  const c1 = getOptions(def);
  const c2 = getOptions(Object.assign({}, def, {
    dest: ['dist'],
  }));

  t.plan(4);
  t.equal(Array.isArray(c1.dest), true);
  t.equal(Array.isArray(c2.dest), true);
  t.equal(c1.dest[0], 'dist');
  t.equal(c2.dest[0], 'dist');
});


test('getOptions({ watch }) :: watch options are included on watch', function(t) {
  const conf = getOptions({
    entries: 'main.js',
    dest: 'dist',
    name: 'bundle.js',
    watch: true
  });

  t.plan(3);
  t.equal(conf.cache !== undefined, true);
  t.equal(conf.packageCache !== undefined, true);
  t.equal(conf.watch, true);
});



test('getOptions({ gulpPlugins })', function(t) {
  const conf = getOptions({
    entries: 'main.js',
    dest: 'dist',
    name: 'bundle.js',
    gulpPlugins: [1, 2, 3]
  });

  t.plan(3);
  t.equal(conf.gulpPlugins[0], 1);
  t.equal(conf.gulpPlugins[1], 2);
  t.equal(conf.gulpPlugins[2], 3);
});


test('getOptions({ gulpPlugins })', function(t) {
  const conf = getOptions({
    entries: 'main.js',
    dest: 'dist',
    name: 'bundle.js'
  });

  t.plan(2);
  t.equal(Array.isArray(conf.gulpPlugins), true);
  t.equal(conf.gulpPlugins.length, 0);
});

test('getOptions({ browserSync })', function(t) {
  const conf = getOptions({
    entries: 'main.js',
    dest: 'dist',
    name: 'bundle.js',
    browserSync: 'hello'
  });

  t.plan(1);
  t.equal(conf.browserSync, 'hello');
});


