import React from 'react';
import {{componentName}} from './{{name}}.jsx';

export default [{
	name: "default",
	component: (
		<{{componentName}}>
			Hello World
		</{{componentName}}>
	),
	test(t, component) {
		t.plan(4);
		t.equal(component.is('div'), true);
		t.equal(component.is('.{{name}}'), true);
		t.equal(component.text(), 'Hello World');
	}
}];
