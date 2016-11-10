import React from 'react';
import {FormInput, FormInputText, FormInputSearch, FormInputUrl, FormInputTel, FormInputEmail, FormInputPassword, FormInputHidden} from './FormInput.jsx';

export default [{
	name: "default",
	component: (
		<FormInput type="text" />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-input'), true, 'tag class');
		t.end();
	}
},{
	name: "text",
	component: (
		<FormInputText value="baaaaaLarrrGGGH!" />
	),
	test(t, component) {
		t.equal(component.is('FormInput'), true, 'tag name');
		// t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('[type="text"]'), true, 'input type');
		t.end();
	}
},{
	name: "search",
	component: (
		<FormInputSearch />
	),
	test(t, component) {
		t.equal(component.is('FormInput'), true, 'tag name');
		// t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('[type="search"]'), true, 'input type');
		t.end();
	}
},{
	name: "url",
	component: (
		<FormInputUrl />
	),
	test(t, component) {
		t.equal(component.is('FormInput'), true, 'tag name');
		// t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('[type="url"]'), true, 'input type');
		t.end();
	}
},{
	name: "tel",
	component: (
		<FormInputTel />
	),
	test(t, component) {
		t.equal(component.is('FormInput'), true, 'tag name');
		// t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('[type="tel"]'), true, 'input type');
		t.end();
	}
},{
	name: "email",
	component: (
		<FormInputEmail />
	),
	test(t, component) {
		t.equal(component.is('FormInput'), true, 'tag name');
		// t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('[type="email"]'), true, 'input type');
		t.end();
	}
},{
	name: "password",
	component: (
		<FormInputPassword />
	),
	test(t, component) {
		t.equal(component.is('FormInput'), true, 'tag name');
		// t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('[type="password"]'), true, 'input type');
		t.end();
	}
},{
	name: "hidden",
	component: (
		<FormInputHidden value="bananas" />
	),
	test(t, component) {
		t.equal(component.is('FormInput'), true, 'tag name');
		// t.equal(component.is('.form-input'), true, 'tag class');
		t.equal(component.is('[type="hidden"]'), true, 'input type');
		t.end();
	}
}];
