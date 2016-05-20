var test = require('tape');
var getOptions = require('../lib/getOptions');
var getFilename = require('../lib/getFilename');

test('getOptions({ src, dest }) :: minimal', function(t) {
  const opts = getOptions({
    src: 'pages/**/*.hbs',
    dest: 'dist'
  });

  t.plan(7);
  t.equal(opts.src, 'pages/**/*.hbs');
  t.equal(opts.dest, 'dist');

  t.equal(typeof opts.hb, 'object')
  t.equal(opts.hb.parsePartialName, getFilename);
  t.equal(opts.hb.parseHelperName, getFilename);
  t.equal(opts.hb.parseDecoratorName, getFilename);
  t.equal(opts.hb.parseDataName, getFilename);
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

test('getOptions({ src }) :: no dest throws error', function(t) {
  t.plan(1);
  try {
    getOptions({
      src: 'pages/**/*.hbs',
    });
  } catch(e) {
    t.equal(true, true);
  }
});

test('getOptions({ partials, helpers, decorators, data })', function(t) {
  const opts = getOptions({
    src: 'pages/**/*.hbs',
    dest: 'dist',
    partials: 'abc',
    helpers: 'def',
    decorators: '124',
    data: '987',
  });

  t.plan(4);

  t.equal(opts.hb.partials, 'abc');
  t.equal(opts.hb.helpers, 'def');
  t.equal(opts.hb.decorators, '124');
  t.equal(opts.hb.data, '987');
});
