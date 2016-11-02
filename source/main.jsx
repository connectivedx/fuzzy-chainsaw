import React from 'react';
import Dom from 'react-dom';

import Heading from './tags/Heading/Heading.jsx';

const mountPoint = document.getElementById('mount-point')

if (mountPoint) {
	Dom.render(<Heading>Hello World</Heading>, mountPoint);
}

console.log('MAIN_BUNDLE!')
