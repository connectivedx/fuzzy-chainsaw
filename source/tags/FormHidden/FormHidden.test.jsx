import React from 'react';
import FormHidden from './FormHidden.jsx';

export default [{
	name: "default",
	component: (
		<FormHidden value="bananas" />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-hidden'), true, 'tag class');
		t.equal(component.prop('value'), 'bananas', 'value');
		t.end();
	}
}];
