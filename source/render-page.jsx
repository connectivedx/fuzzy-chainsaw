import React from 'react';
import Dom from 'react-dom/server';



module.exports = function renderPage(locals, callback) {
	const path = locals.path.substr(0, locals.path.length - 5);
	const Page = require('./pages/' + path + '.jsx').default;
  callback(null, '<!DOCTYPE html>' + Dom.renderToStaticMarkup(<Page locals={locals} />, locals));
};
