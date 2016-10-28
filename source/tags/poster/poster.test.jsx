import React from 'react';
import Poster from './poster.jsx';
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
		t.plan(1);
		t.equal(1, 1);
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
		t.plan(1);
		t.equal(1, 1);
	}
}, {
	name: "long title",
	component: (
		<Poster 
			title="Lorem ipsum dolor sit amet, consectetur adipisicing." 
			src={randyImg} />
	),
	test(t, component) {
		t.plan(1);
		t.equal(1, 1);
	}
}];