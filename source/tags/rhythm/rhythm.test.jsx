import React from 'react';
import Rhythm from './rhythm.jsx';

const Children = [
	<div>abc</div>,
	<div>123</div>,
	<div>
		<section>9990</section>
		<div>3758</div>
		<div>2389</div>
	</div>
];

// const children = 'bunnies!';

module.exports = [{
	name: 'default',
	component: (
		<Rhythm>
			{ Children }
		</Rhythm>
	)
}, {
	name: 'small size',
	component: (
		<Rhythm size="small">
			{ Children }
		</Rhythm>
	)
}, {
	name: 'large size',
	component: (
		<Rhythm size="large">
			{ Children }
		</Rhythm>
	)
}, {
	name: 'deep',
	component: (
		<Rhythm deep="true">
			{ Children }
		</Rhythm>
	)
}, {
	name: 'size/deep',
	component: (
		<Rhythm deep="true" size="large">
			{ Children }
		</Rhythm>
	)
}]