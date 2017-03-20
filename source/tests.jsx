import test from 'tape';
import zipObject from 'lodash.zipobject';
import { render, shallow } from 'enzyme';


const requireAll = (context) => {
  const keys = context.keys();
  const values = keys.map(context).map(res => res.default);
  return zipObject(keys, values);
};

const runTests = (type, col) =>
  Object.keys(col).forEach((key) => {
    const tests = col[key];
    if (tests && tests.length) {
      tests.forEach((config, i) => {
        if (config.test) {
          test(`/${type}/${key.substr(2)} [test #${i + 1}: ${config.name}] =>`, (t) => {
            config.test(t, shallow(config.component), render(config.component));
          });
        }
      });
    }
  });


runTests(
  'tags',
  requireAll(require.context('Tags/', true, /\.test.jsx$/))
);

runTests(
  'components',
  requireAll(require.context('Components/', true, /\.test.jsx$/))
);
