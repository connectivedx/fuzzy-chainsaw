import React from 'react';
import FormCheckbox from './form-checkbox.jsx';

export default [{
	name: "Default",
	component: (
		<FormCheckbox></FormCheckbox>
	),
	test(t, component) {
		test.plan(4);
		test.equal(component.is('input'), true);
		test.equal(component.is('[type="checkbox"]'), true);
		test.equal(component.is('.input'), true);
		test.equal(component.is('.input--checkbox'), true);
	}
}, {
	name: "Checked",
	component: (
		<FormCheckbox defaultChecked={true} required="true" value="foo"></FormCheckbox>
	),
	test(t, component) {
		test.plan(5);
		test.equal(component.is('input'), true);
		test.equal(component.is('[type="checkbox"]'), true);
		test.equal(component.is('[checked]'), true);
		test.equal(component.is('.input'), true);
		test.equal(component.is('.input--checkbox'), true);
	}
// }, {
// 	name: "className",
// 	component: (
// 		<Heading className="super">
// 			Leg Shaking
// 		</Heading>
// 	),
// 	test(t, component) {
// 		test.plan(4);
// 		test.equal(component.is('h1'), true);
// 		test.equal(component.is('.heading'), true);
// 		test.equal(component.is('.heading--h1'), true);
// 		test.equal(component.is('.super'), true);
// 		test.equal(component.text(), 'Leg Shaking');
// 	}
// }, {
// 	name: "tagName/className",
// 	component: (
// 		<Heading tagName="div" className="duper">
// 			Back Breaking
// 		</Heading>
// 	),
// 	test(t, component) {
// 		test.plan(4);
// 		test.equal(component.is('div'), true);
// 		test.equal(component.is('.heading'), true);
// 		test.equal(component.is('.heading--default'), true);
// 		test.equal(component.is('.super'), true);
// 		test.equal(component.text(), 'Back Breaking');
// 	}
}];