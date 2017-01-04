import React from 'react';
import FormCheck from './FormCheck.jsx';

export default [{
	name: "default",
	component: (
		<FormCheck />
	),
	test(t, component) {
		t.equal(component.is('span'), true, 'tag name');
		t.equal(component.is('.form-check'), true, 'tag class');
		t.equal(component.is('.form-check--checkbox'), true, 'tag class');
		t.end();
	}
},{
	name: "check with svg",
	component: (
		<FormCheck variant="svgIcons" />
	),
	test(t, component) {
		t.equal(component.is('span'), true, 'tag name');
		t.equal(component.is('.form-check'), true, 'tag class');
		t.equal(component.is('.form-check--checkbox'), true, 'tag class');
		t.end();
	}
},{
	name: "radio",
	component: (
		<FormCheck type="radio" />
	),
	test(t, component) {
		t.equal(component.is('span'), true, 'tag name');
		t.equal(component.is('.form-check'), true, 'tag class');
		t.equal(component.is('.form-check--radio'), true, 'tag class');
		t.end();
	}
},{
	name: "radio with svg",
	component: (
		<FormCheck type="radio" variant="svgIcons" />
	),
	test(t, component) {
		t.equal(component.is('span'), true, 'tag name');
		t.equal(component.is('.form-check'), true, 'tag class');
		t.equal(component.is('.form-check--radio'), true, 'tag class');
		t.end();
	}
}];
