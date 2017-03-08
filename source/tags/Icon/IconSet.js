const __svg__ = { path: './assets/**/*.svg', name: '/assets/svgs/iconset-[hash].svg' };
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
