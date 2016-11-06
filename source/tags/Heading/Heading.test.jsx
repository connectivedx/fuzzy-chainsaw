import React from 'react';
import Heading from './Heading';

export default [{
	name: "default",
	component: (
		<Heading>
			Hello
		</Heading>
	),
	test(t, component) {
		t.equal(component.is('h1'), true, 'tag name');
		t.equal(component.is('.heading'), true, 'tag class');
		t.equal(component.is('.heading--h1'), true, 'type class');
		t.equal(component.text(), 'Hello', 'text');
		t.end();
	}
}, {
	name: "tagName",
	component: (
		<Heading level="3">
			Wowie Zowie
		</Heading>
	),
	test(t, component) {
		t.equal(component.is('h3'), true, 'tag name');
		t.equal(component.is('.heading'), true, 'tag class');
		t.equal(component.is('.heading--h3'), true, 'type class');
		t.equal(component.text(), 'Wowie Zowie', 'text');
		t.end();
	}
}, {
	name: "className",
	component: (
		<Heading className="super">
			Leg Shaking
		</Heading>
	),
	test(t, component) {
		t.equal(component.is('h1'), true, 'tag name');
		t.equal(component.is('.heading'), true, 'tag class');
		t.equal(component.is('.heading--h1'), true, 'type class');
		t.equal(component.is('.super'), true, 'prop class');
		t.equal(component.text(), 'Leg Shaking', 'text');
		t.end();
	}
}, {
	name: "tagName/className",
	component: (
		<Heading tagName="div" className="duper">
			Back Breaking
		</Heading>
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.heading'), true, 'tag class');
		t.equal(component.is('.heading--default'), true, 'type class');
		t.equal(component.is('.duper'), true, 'prop class');
		t.equal(component.text(), 'Back Breaking', 'text');
		t.end();
	}
}];
