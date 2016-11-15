import React from 'react';
import FormCheckgroup from './FormCheckgroup.jsx';

export default [{
	name: "default",
	component: (
		<FormCheckgroup>
			Hello World
		</FormCheckgroup>
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.form-checkgroup'), true, 'tag class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}];
