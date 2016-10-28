const webpack = require('webpack');

let build = require('./webpack.config');

const cssnano = require('cssnano');

// production specific configuration
build.forEach((b, i) => {
	build[i].devtool = 'source-map'
});

// add production flag to build environment
build.forEach((b, i) => {
	build[i].plugins.unshift(
	  new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('production')
	    }
	  })
	);
});

// add css minification
build.forEach((b, i) => {
	if (build[i].postcss !== undefined) {
		build[i].postcss = build[i].postcss.concat([
			cssnano()
		]);
	}
});

module.exports = build;