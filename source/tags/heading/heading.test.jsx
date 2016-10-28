import React from 'react';
import Heading from './heading.jsx';

export default [{
	name: "default",
	component: (
		<Heading>
			Hello
		</Heading>
	),
	test(t, component) {
		test.plan(4);
		test.equal(component.is('h1'), true);
		test.equal(component.is('.heading'), true);
		test.equal(component.is('.heading--h1'), true);
		test.equal(component.text(), 'Hello');
	}
}, {
	name: "tagName",
	component: (
		<Heading level="3">
			Wowie Zowie
		</Heading>
	),
	test(t, component) {
		test.plan(4);
		test.equal(component.is('h3'), true);
		test.equal(component.is('.heading'), true);
		test.equal(component.is('.heading--h3'), true);
		test.equal(component.text(), 'Wowie Zowie');
	}
}, {
	name: "className",
	component: (
		<Heading className="super">
			Leg Shaking
		</Heading>
	),
	test(t, component) {
		test.plan(4);
		test.equal(component.is('h1'), true);
		test.equal(component.is('.heading'), true);
		test.equal(component.is('.heading--h1'), true);
		test.equal(component.is('.super'), true);
		test.equal(component.text(), 'Leg Shaking');
	}
}, {
	name: "tagName/className",
	component: (
		<Heading tagName="div" className="duper">
			Back Breaking
		</Heading>
	),
	test(t, component) {
		test.plan(4);
		test.equal(component.is('div'), true);
		test.equal(component.is('.heading'), true);
		test.equal(component.is('.heading--default'), true);
		test.equal(component.is('.super'), true);
		test.equal(component.text(), 'Back Breaking');
	}
}];