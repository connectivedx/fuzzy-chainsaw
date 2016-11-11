import React from 'react';

export default ({ baseUrl, components }) => (
	<ul>
		{ components.map(item => {
			return <li key={item}>
				<a href={`${baseUrl}/${item}.html`}>{item}</a>
			</li>
		}) }
	</ul>
);
