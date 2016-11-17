import React from 'react';
import Poster from './Poster';
import randyImg from './images/randy-savage.jpg';

export default [{
	name: "basic",
	component: (
		<Poster
			title="Super"
			alt="super"
			src={randyImg} />
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.end();
	}
}, {
	name: "linked",
	component: (
		<Poster
			title="Randy Savage"
			alt="Randy Savage"
			href="#/"
			src={randyImg} />
	),
	test(t, component) {
		t.equal(component.is('a'), true, 'tag name');
		t.end();
	}
}, {
	name: "long title",
	component: (
		<Poster
			title="Lorem ipsum dolor sit amet, consectetur adipisicing."
			alt="Randy Savage"
			src={randyImg} />
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.end();
	}
}];
