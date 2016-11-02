import React from 'react';

const getName = name => 
	name
		.split('-')
		.map(n => n.substr(0, 1).toUpperCase() + n.substr(1))
		.join('');

export default ({ baseUrl, components }) => {
	const Items = components.map(item => {
		const name = getName(item);
		return <li key={name} className="sg-nav__component-item">
			<a href={`${baseUrl}/${item}.html`}>{name}</a>
		</li>
	});

	return <ul className="sg-nav__component-list">
		{Items}
	</ul>
}