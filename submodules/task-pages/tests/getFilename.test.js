var test = require('tape');
var getFilename = require('../lib/getFilename');

function runGetFilename(path) {
  return getFilename(null, {
    path: path
  });
}

test('getFilename() :: simple names', function(t) {
  const name = runGetFilename('/components/button.hbs');

  t.plan(1);
  t.equal(name, 'button')
});

test('getFilename() :: complex name', function(t) {
  const name = runGetFilename('/components/button_bugger-hope--pony.hbs');

  t.plan(1);
  t.equal(name, 'button_bugger-hope--pony')
});

test('getFilename() :: complex path', function(t) {
  const name = runGetFilename('a/b/s/b/components/button.hbs');

  t.plan(1);
  t.equal(name, 'button')
});

test('getFilename() :: complex filetype', function(t) {
  const name = runGetFilename('components/button.hbs.text.html');

  t.plan(1);
  t.equal(name, 'button')
});

test('getFilename() :: simple path', function(t) {
  const name = runGetFilename('button.hbs');

  t.plan(1);
  t.equal(name, 'button')
});
