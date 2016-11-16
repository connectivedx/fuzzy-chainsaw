import React from 'react';
import List from './List.jsx';

let ListData = [
	{
		text: "List item one",
		href: "/",
		className: '--item--one',
		subClass: '--list--sub--one',
		subItems: [
			{
				text: "Sub item one",
				href: "/",				
			},
			{
				text: "Sub item two",
				href: "/"
			},
			{
				text: "Sub item three",
				href: "/"
			}						
		]
	},
	{
		text: "List item two",
		href: "/",
		className: '--item--two',
		subClass: '--list--sub--one',
		subItems: [
			{
				text: "Sub item one",
				href: "/",
				subClass: '--list--sub--two',
				subItems: [
					{
						text: "Sub item one",
						href: "/"
					},
					{
						text: "Sub item two",
						href: "/"
					},
					{
						text: "Sub item three",
						href: "/"
					}						
				]				
			},
			{
				text: "Sub item two",
				href: "/"
			},
			{
				text: "Sub item three",
				href: "/"
			}						
		]		
	}
];
export default [{
	name: "OL default",
	component: (
		<List tagName="ol" listData={ListData}></List>
	),
	test(t, component) {
		t.equal(component.is('ol'), true, 'tag name');
		t.equal(component.is('.list'), true, 'tag class');
		t.end();
	}
},{
	name: "UL default",
	component: (
		<List tagName="ul" listData={ListData}></List>
	),
	test(t, component) {
		t.equal(component.is('ul'), true, 'tag name');
		t.equal(component.is('.list'), true, 'tag class');
		t.end();
	}
},
{
	name: "OL - indents",
	component: (
		<List tagName="ol" listData={ListData} indents="true"></List>
	),
	test(t, component) {
		t.equal(component.is('ol'), true, 'tag name');
		t.equal(component.is('.list'), true, 'tag class');
		t.end();
	}
},{
	name: "UL - indents",
	component: (
		<List tagName="ul" listData={ListData} indents="true"></List>
	),
	test(t, component) {
		t.equal(component.is('ul'), true, 'tag name');
		t.equal(component.is('.list'), true, 'tag class');
		t.end();
	}
},
{
	name: "OL - indents & bullets",
	component: (
		<List tagName="ol" listData={ListData} indents="true" bullets="true"></List>
	),
	test(t, component) {
		t.equal(component.is('ol'), true, 'tag name');
		t.equal(component.is('.list'), true, 'tag class');
		t.end();
	}
},{
	name: "UL - indents & bullets",
	component: (
		<List tagName="ul" listData={ListData} indents="true" bullets="true"></List>
	),
	test(t, component) {
		t.equal(component.is('ul'), true, 'tag name');
		t.equal(component.is('.list'), true, 'tag class');
		t.end();
	}
}];
