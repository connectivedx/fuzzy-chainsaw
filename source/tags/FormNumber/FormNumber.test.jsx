import React from 'react';
import {FormNumber, FormNumberField} from './FormNumber.jsx';

export default [{
	name: "default",
	component: (
		<FormNumber />
	),
	test(t, component) {
		// t.equal(component.is('div'), true, 'tag name');
		// t.equal(component.is('.form-number'), true, 'tag class');
		// t.equal(component.is('.form-number--number'), true, 'tag class');
		// t.equal(component.is('[type="number"]'), true, 'tag type');
		t.end();
	}
},{
	name: "default field",
	component: (
		<FormNumberField labelText="Enter a Number" />
	),
	test(t, component) {
		// t.equal(component.is('div'), true, 'tag name');
		// t.equal(component.is('.form-field'), true, 'tag class');
		// t.equal(component.is('.form-field--number'), true, 'tag class');
		t.end();
	}
},{
	name: "range",
	component: (
		<FormNumber type="range" />
	),
	test(t, component) {
		// t.equal(component.is('div'), true, 'tag name');
		// t.equal(component.is('.form-number'), true, 'tag class');
		// t.equal(component.is('.form-number--range'), true, 'tag class');
		// t.equal(component.is('[type="range"]'), true, 'tag type');
		t.end();
	}
},{
	name: "range field",
	component: (
		<FormNumberField labelText="Choose a Value" type="range" />
	),
	test(t, component) {
		// t.equal(component.is('div'), true, 'tag name');
		// t.equal(component.is('.form-field'), true, 'tag class');
		// t.equal(component.is('.form-field--number'), true, 'tag class');
		t.end();
	}
}];
