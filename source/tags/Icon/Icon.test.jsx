import React from 'react';
import Icon from './Icon.jsx';

export default [{
	name: 'default',
	component: (
		<Icon name="close" />
	),
	test(t, component) {
		t.equal(component.is('svg'), true, 'tag name');
		t.equal(component.is('.icon'), true, 'tag class');
		t.equal(component.is('.icon--default'), true, 'size class');
		t.equal(component.is('.icon--close'), true, 'icon name class');
		t.equal(component.find('use').length > 0, true, 'has children');
		t.end();
	}
}, {
	name: 'small size',
	component: (
		<Icon size="small" name="cancel" />
	),
	test(t, component) {
		t.equal(component.is('.icon--small'), true, 'size class');
		t.equal(component.is('.icon--cancel'), true, 'icon name class');
		t.end();
	}
}, {
	name: 'large size',
	component: (
		<Icon size="large" name="plus" />
	),
	test(t, component) {
		t.equal(component.is('.icon--large'), true, 'size class');
		t.equal(component.is('.icon--plus'), true, 'icon name class');
		t.end();
	}
}, {
	name: 'wide custom size',
	component: (
		<Icon size="wide" name="minus" />
	),
	test(t, component) {
		t.equal(component.is('.icon--wide'), true, 'size class');
		t.equal(component.is('.icon--minus'), true, 'icon name class');
		t.end();
	}
}];
