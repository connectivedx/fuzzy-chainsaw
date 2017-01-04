import React from 'react';
import FormCheckgroup from './FormCheckgroup.jsx';

const testOptions = [
	{
		label: 'first choice',
		value: 'one'
	},{
		label: 'second choice',
		value: 'two'
	},{
		label: 'third choice',
		value: 'three'
	}
];
const legendText = 'This is the legend';

export default [{
	name: "default",
	component: (
		<FormCheckgroup checks={testOptions} />
	),
	test(t, component) {
		// t.equal(component.is('fieldset'), true, 'tag name');
		// t.equal(component.is('.form-checkgroup'), true, 'tag class');
		t.end();
	}
},{
	name: "radios",
	component: (
		<FormCheckgroup legendText={legendText} type="radio" checks={testOptions} />
	),
	test(t, component) {
		// t.equal(component.is('div'), true, 'tag name');
		// t.equal(component.is('.form-checkgroup'), true, 'tag class');
		// t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
},{
	name: "svg checkboxes",
	component: (
		<FormCheckgroup legendText={legendText} variant="svgIcons" checks={testOptions} />
	),
	test(t, component) {
		// t.equal(component.is('div'), true, 'tag name');
		// t.equal(component.is('.form-checkgroup'), true, 'tag class');
		// t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
},{
	name: "svg radios",
	component: (
		<FormCheckgroup legendText={legendText} variant="svgIcons" type="radio" checks={testOptions} />
	),
	test(t, component) {
		// t.equal(component.is('div'), true, 'tag name');
		// t.equal(component.is('.form-checkgroup'), true, 'tag class');
		// t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}];
