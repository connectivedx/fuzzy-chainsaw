import React from 'react';
import FormField from './FormField.jsx';

export default [{
	name: "default",
	component: (
		<FormField>
			Hello World
		</FormField>
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.form-field'), true, 'tag class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}];
