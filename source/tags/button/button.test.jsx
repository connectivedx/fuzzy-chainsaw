import React from 'react';
import Button from './button.jsx';

export default [{
	name: "default",
	component: (
		<Button>
			Hello World
		</Button>
	),
	test(t, component) {
		t.plan(4);
		t.equal(component.is('button'), true);
		t.equal(component.is('.button'), true);
		t.equal(component.is('.button--default'), true);
		t.equal(component.text(), 'Hello World');
	}
}, {
	name: "href",
	component: (
		<Button href="#/">
			Hello World
		</Button>
	),
	test(t, component) {
		t.plan(5);
		t.equal(component.is('a'), true);
		t.equal(component.is('.button'), true);
		t.equal(component.is('.button--link'), true);
		t.equal(component.prop('href'), '#/');
		t.equal(component.text(), 'Hello World');
	}
}, {
	name: "tagName",
	component: (
		<Button tagName="div">
			Hello World
		</Button>
	),
	test(t, component) {
		t.plan(4);
		t.equal(component.is('div'), true);
		t.equal(component.is('.button'), true);
		t.equal(component.is('.button--default'), true);
		t.equal(component.text(), 'Hello World');
	}
}, {
	name: "tagName/className",
	component: (
		<Button tagName="div" className="button--superduper">
			Hello World
		</Button>
	),
	test(t, component) {
		t.plan(5);
		t.equal(component.is('div'), true);
		t.equal(component.is('.button'), true);
		t.equal(component.is('.button--default'), true);
		t.equal(component.is('.button--superduper'), true);
		t.equal(component.text(), 'Hello World');
	}
}, {
	name: "type",
	component: (
		<Button type="cta">
			Hello World
		</Button>
	),
	test(t, component) {
		t.plan(3);
		t.equal(component.is('div'), true);
		t.equal(component.is('.button'), true);
		t.equal(component.is('.button--cta'), true);
		t.equal(component.prop('href'), '#/');
		t.equal(component.text(), 'Hello World');
	}
}, {
	name: "type/link",
	component: (
		<Button href="#/" type="cta">
			Hello World
		</Button>
	),
	test(t, component) {
		t.plan(3);
		t.equal(component.is('a'), true);
		t.equal(component.is('.button'), true);
		t.equal(component.is('.button--link'), true);
		t.equal(component.is('.button--cta'), true);
		t.equal(component.prop('href'), '#/');
		t.equal(component.text(), 'Hello World');
	}
}];

