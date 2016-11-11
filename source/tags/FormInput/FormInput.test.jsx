import React from 'react';
import FormInput from './FormInput.jsx';

export default [{
	name: "default",
	component: (
		<FormInput />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('.form-input--text'), true, 'tag class');
		t.equal(component.is('[type="text"]'), true, 'input type');
		t.end();
	}
},{
	name: "text",
	component: (
		<FormInput type="text" />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('.form-input--text'), true, 'tag class');
		t.equal(component.is('[type="text"]'), true, 'input type');
		t.end();
	}
},{
	name: "search",
	component: (
		<FormInput type="search" />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('.form-input--search'), true, 'tag class');
		t.equal(component.is('[type="search"]'), true, 'input type');
		t.end();
	}
},{
	name: "url",
	component: (
		<FormInput type="url" />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('.form-input--url'), true, 'tag class');
		t.equal(component.is('[type="url"]'), true, 'input type');
		t.end();
	}
},{
	name: "tel",
	component: (
		<FormInput type="tel" />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('.form-input--tel'), true, 'tag class');
		t.equal(component.is('[type="tel"]'), true, 'input type');
		t.end();
	}
},{
	name: "email",
	component: (
		<FormInput type="email" />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('.form-input--email'), true, 'tag class');
		t.equal(component.is('[type="email"]'), true, 'input type');
		t.end();
	}
},{
	name: "password",
	component: (
		<FormInput type="password" />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('.form-input--password'), true, 'tag class');
		t.equal(component.is('[type="password"]'), true, 'input type');
		t.end();
	}
}];
