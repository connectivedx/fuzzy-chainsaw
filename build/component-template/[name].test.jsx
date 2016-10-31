import React from 'react';
import {{name}} from './{{name}}.jsx';

export default [{
	name: "default",
	component: (
		<{{name}}>
			Hello World
		</{{name}}>
	),
	test(t, component) {
		t.plan(4);
		t.equal(component.is('div'), true);
		t.equal(component.is('.{{className}}'), true);
		t.equal(component.text(), 'Hello World');
	}
}];
