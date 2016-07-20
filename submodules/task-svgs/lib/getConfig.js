const path = require('path');

module.exports = function getConfig(options) {
	const sass = options.sass;
	const css = options.css;
	const a11y = options.meta;
	const saveOriginals = options.saveOriginals;
	const name = options.name || 'icons.svg';

	var spacingOpt = sass || css ? {padding: 10} : {};
	var destOpt = saveOriginals ? './originals' : '';
	var viewOpt, metaOpt;

	if (sass) {
		viewOpt = {
			// Activate the «view» mode
			bust: false, // remove cache busting
			render: {
				scss: true // Activate Sass output (with default options)
			},
			dest: 'sass'
		};
	}
	else if (css) {
		viewOpt = {
			// Activate the «view» mode
			bust: false, // remove cache busting
			render: {
				css: true // Activate Sass output (with default options)
			},
			dest: 'css'
		};
	}
	else {
		viewOpt = false;
	}

	if (a11y) {
		metaOpt = a11y;
	}
	else {
		metaOpt = '';
	}

	var config = {
		shape: {
			id: {
				generator: function (name) {
					return path.basename(name, '.svg');
				}
			},
			spacing: spacingOpt,
			dest: destOpt,
			meta: metaOpt
		},
		mode: {
			symbol: {
				prefix: '.%s',
				sprite: name
			},
			view: viewOpt
		},
		svg: {
			xmlDeclaration: false,
			doctypeDeclaration: false
		}
	};

	return config;
};
