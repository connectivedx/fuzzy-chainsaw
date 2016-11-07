import React from 'react';
import SvgSymbols from './SvgSymbols.jsx';

export default [{
	name: "default",
	component: (
		<SvgSymbols />
	),
	test(t, component) {
		t.equal(component.is('svg'), true, 'tag name');
		t.equal(component.is('.svg-symbols'), true, 'tag class');
		t.end();
	}
}];
