import React from 'react';
import Button from './Button.jsx';

export default [{
	name: "default",
	component: (
		<Button>
			Hello World
		</Button>
	),
	test(t, component) {
		t.equal(component.is('button'), true, 'tag name');
		t.equal(component.is('.button'), true, 'tag class');
		t.equal(component.is('.button--default'), true, 'type class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}, {
	name: "href",
	component: (
		<Button href="#/">
			Hello World
		</Button>
	),
	test(t, component) {
		t.equal(component.is('a'), true, 'tag name');
		t.equal(component.is('.button'), true, 'tag class');
		t.equal(component.is('.button--link'), true, 'type class');
		t.equal(component.prop('href'), '#/', 'prop');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}, {
	name: "tagName",
	component: (
		<Button tagName="div">
			Hello World
		</Button>
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.button'), true, 'tag class');
		t.equal(component.is('.button--default'), true, 'type class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}, {
	name: "tagName/className",
	component: (
		<Button tagName="div" className="button--superduper">
			Hello World
		</Button>
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.button'), true, 'tag class');
		t.equal(component.is('.button--default'), true, 'type class');
		t.equal(component.is('.button--superduper'), true, 'prop class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}, {
	name: "type",
	component: (
		<Button type="cta">
			Hello World
		</Button>
	),
	test(t, component) {
		t.equal(component.is('button'), true, 'tag name');
		t.equal(component.is('.button'), true, 'tag class');
		t.equal(component.is('.button--cta'), true, 'type class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}, {
	name: "type/link",
	component: (
		<Button href="#/" type="cta">
			Hello World
		</Button>
	),
	test(t, component) {
		t.equal(component.is('a'), true, 'tag name');
		t.equal(component.is('.button'), true, 'tag class');
		t.equal(component.is('.button--link'), true, 'type class');
		t.equal(component.is('.button--cta'), true, 'type class');
		t.equal(component.prop('href'), '#/', 'prop');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}];

