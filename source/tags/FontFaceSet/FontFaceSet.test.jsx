import React from 'react';
import FontFaceSet from './FontFaceSet.jsx';

export default [{
	name: "default",
	component: (
		<FontFaceSet />
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.end();
	}
}];
