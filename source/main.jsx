// First we import css required for the bundle.css
require('./tags/PageRoot/PageRoot.css');

require.context("./tags/", true, /\.css$/);
require.context("./components/", true, /\.css$/);


// Then we can build out bundle.js from below
import React from 'react';
import Dom from 'react-dom';

import Heading from './tags/Heading/Heading';

const mountPoint = document.getElementById('mount-point')

if (mountPoint) {
	Dom.render(<Heading>Hello World</Heading>, mountPoint);
}

console.log('MAIN_BUNDLE!');
