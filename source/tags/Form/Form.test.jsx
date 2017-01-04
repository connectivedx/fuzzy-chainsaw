import React from 'react';
import Form from './Form.jsx';

export default [{
	name: "default",
	component: (
		<Form action="#">
			Hello World
		</Form>
	),
	test(t, component) {
		t.equal(component.is('form'), true, 'tag name');
		t.equal(component.is('.form'), true, 'tag class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}];
