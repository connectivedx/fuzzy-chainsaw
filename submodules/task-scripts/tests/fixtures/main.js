import template from './test.hbs';
import test from 'tape';

// if this compiles and runs successfully
// we can *assume* that a bulk of moving
// parts in the browserify build are
// operating correctly.
test('gulp spot-test', t => {
  const result = template({
    id: '1234',
    class: 'volcano',
    text: 'Big Volcano'
  });

  t.plan(1);
  t.equal(result, '<div id="1234" class="volcano">Big Volcano</div>\n');
});
