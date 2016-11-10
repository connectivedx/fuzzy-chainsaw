import React from 'react';
import FormNumber from './FormNumber.jsx';

export default [{
	name: "default",
	component: (
		<FormNumber />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-number'), true, 'tag class');
		t.equal(component.is('[type="number"]'), true, 'tag type');
		t.end();
	}
},{
	name: "range",
	component: (
		<FormNumber type="range" />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-number--range'), true, 'tag class');
		t.equal(component.is('[type="range"]'), true, 'tag type');
		t.end();
	}
}];
