import React from 'react';
import Dom from 'react-dom/server';

import Styleguide from './styleguide/Styleguide';

// this requires a file's contents, or returns
// nothing if the file doesn't exist
const requireTagOrFail = (path) => {
	try {
		const module = require('./tags/' + path);
		return module.default || module;
	} catch(e) {
		return;
	}
}

const requireComponentOrFail = (path, prefix = '') => {
	try {
		const module = require('./components/' + path);
		return module.default || module;
	} catch(e) {
		return;
	}
}

module.exports = function renderStyleguide(locals, callback) {
	const fileName = locals.path.substr('styleguide/'.length)
	const type = fileName.split('/')[0];
	const first = fileName.substr(type.length + 1);
	const name = first.substr(0, first.length - 5);
	const basePath = `${name}/`;
	const path = basePath + name;

	const requirer = type === 'tags' ? requireTagOrFail : requireComponentOrFail;
	const res =
		<Styleguide
			name={name}
			path={path}
			tag={requirer(`${name}/${name}`)}
			readme={requirer(`${name}/README.md`)}
			tests={requirer(`${name}/${name}.test`)}
			locals={locals} />

  callback(null, Dom.renderToStaticMarkup(res, locals));
};
