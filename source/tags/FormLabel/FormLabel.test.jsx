import React from 'react';
import FormLabel from './FormLabel.jsx';

export default [{
	name: "default",
	component: (
		<FormLabel>
			Hello World
		</FormLabel>
	),
	test(t, component) {
		t.equal(component.is('label'), true, 'tag name');
		t.equal(component.is('.form-label'), true, 'tag class');
		t.equal(component.is('.form-label--default'), true, 'tag class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
},{
	name: "legend",
	component: (
		<FormLabel tagName="legend">
			Hello World
		</FormLabel>
	),
	test(t, component) {
		t.equal(component.is('Heading'), true, 'tag name');
		t.equal(component.is('.form-label'), true, 'tag class');
		t.equal(component.is('.form-label--legend'), true, 'tag class');
		t.end();
	}
},{
	name: "legend with h1 weight",
	component: (
		<FormLabel tagName="legend" headingLevel="1">
			Hello World
		</FormLabel>
	),
	test(t, component) {
		t.equal(component.is('Heading'), true, 'tag name');
		t.equal(component.is('.form-label'), true, 'tag class');
		t.equal(component.is('.form-label--legend'), true, 'tag class');
		t.end();
	}
}];
