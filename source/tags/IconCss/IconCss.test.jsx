import React from 'react';
import IconCss from './IconCss.jsx';

export default [{
	name: "default",
	component: (
		<CssIcon iconName="checkbox" />
	),
	test(t, component) {
		t.equal(component.is('span'), true, 'tag name');
		t.equal(component.is('.icon-css'), true, 'tag class');
		t.equal(component.is('.icon-css--checkbox'), true, 'tag class');
		t.end();
	}
},{
	name: "default",
	component: (
		<CssIcon iconName="radio" />
	),
	test(t, component) {
		t.equal(component.is('span'), true, 'tag name');
		t.equal(component.is('.icon-css'), true, 'tag class');
		t.equal(component.is('.icon-css--radio'), true, 'tag class');
		t.end();
	}
}];
