import React from 'react';
import IconSet from './IconSet.jsx';

export default [{
	name: "default",
	component: (
		<IconSet />
	),
	test(t, component) {
		t.equal(component.is('svg'), true, 'tag name');
		t.equal(component.is('.icon-set'), true, 'tag class');
		t.end();
	}
}];
