import test from 'tape';
import zipObject from 'lodash.zipobject';
import { shallow } from 'enzyme';


const requireAll = context => {
	const keys = context.keys();
	const values = keys.map(context).map(res => res.default);
	return zipObject(keys, values);
};


const getName = path =>
	path.substr(0, path.indexOf('.test'))
		.substr(path.lastIndexOf('/') + 1);


const runTests = (type, col) =>
	Object.keys(col).forEach(key => {
		const tests = col[key];
		if (tests && tests.length) {
			tests.forEach((config, i) => {
				if (config.test) {
					test(`${type}/${getName(key)}#${i+1} (${config.name})`, t => {
						config.test(t, shallow(config.component));
					})
				}
			});
		}
	});


runTests(
	'tags',
	requireAll(require.context("./tags/", true, /\.test.jsx$/))
);

runTests(
	'components',
	requireAll(require.context("./components/", true, /\.test.jsx$/))
);
