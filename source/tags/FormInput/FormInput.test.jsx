import React from 'react';
import FormInput from './FormInput.jsx';

export default [{
	name: "default",
	component: (
		<FormInput type="text" placeholder="Foo!" />
	),
	test(t, component) {
		t.equal(component.is('input'), true, 'tag name');
		t.equal(component.is('.form-input'), true, 'tag class');
		t.end();
	}
}];
