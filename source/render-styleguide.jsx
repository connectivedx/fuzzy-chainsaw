import React from 'react';
import Dom from 'react-dom/server';

import Styleguide from './styleguide/template.jsx';

// this requires a file's contents, or returns 
// nothing if the file doesn't exist
const requireOrFail = (path) => {
	try {
		const module = require(path);
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
	const basePath = `./${type}/${name}/`;
	const path = basePath + name;

	const res = 
		<Styleguide
			name={name}
			path={path}
			tag={require(path + '.jsx').default} 
			style={requireOrFail(path + '.css')} 
			readme={requireOrFail(basePath + 'README.md')}
			examples={requireOrFail(basePath + 'examples.jsx')}
			tests={requireOrFail(path + '.test.jsx')}
			locals={locals} />

  callback(null, Dom.renderToStaticMarkup(res, locals));
};
