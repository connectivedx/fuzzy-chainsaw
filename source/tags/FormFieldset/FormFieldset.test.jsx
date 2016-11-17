import React from 'react';
import FormFieldset from './FormFieldset.jsx';

export default [{
	name: "default",
	component: (
		<FormFieldset>
			Hello World
		</FormFieldset>
	),
	test(t, component) {
		t.equal(component.is('fieldset'), true, 'tag name');
		t.equal(component.is('.form-fieldset'), true, 'tag class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
},{
	name: "with legend",
	component: (
		<FormFieldset legendText="Hello World">
		</FormFieldset>
	),
	test(t, component) {
		t.equal(component.is('fieldset'), true, 'tag name');
		t.equal(component.is('.form-fieldset'), true, 'tag class');
		// t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}];
