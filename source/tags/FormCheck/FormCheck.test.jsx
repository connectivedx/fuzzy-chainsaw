import React from 'react';
import FormCheck from './FormCheck.jsx';

export default [{
	name: "default",
	component: (
		<FormCheck />
	),
	test(t, component) {
		t.equal(component.is('span'), true, 'tag name');
		t.equal(component.is('.form-check'), true, 'tag class');
		t.end();
	}
},{
	name: "check with svg",
	component: (
		<FormCheck variant="svgIcons" />
	),
	test(t, component) {
		t.equal(component.is('span'), true, 'tag name');
		t.equal(component.is('.form-check'), true, 'tag class');
		t.end();
	}
},{
	name: "radio",
	component: (
		<div>
			<FormCheck type="radio" name="zits" value="yes" />
			<FormCheck type="radio" name="zits" value="no" />
		</div>
	)//,
	// test(t, component) {
	// 	t.equal(component.is('div'), true, 'tag name');
	// 	t.equal(component.is('.form-check'), true, 'tag class');
	// 	t.end();
	// }
},{
	name: "radio with svg",
	component: (
		<div>
			<FormCheck type="radio" name="zits" value="yes" variant="svgIcons" />
			<FormCheck type="radio" name="zits" value="no" variant="svgIcons" />
		</div>
	)//,
	// test(t, component) {
	// 	t.equal(component.is('div'), true, 'tag name');
	// 	t.equal(component.is('.form-check'), true, 'tag class');
	// 	t.end();
	// }
}];
