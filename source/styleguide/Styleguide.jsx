import React from 'react';
import slug from 'slug';

import Wrapper from './components/Wrapper';
import Example from './components/Example';
import Heading from '../tags/Heading/Heading';
import Rhythm from '../tags/Rhythm/Rhythm';

slug.charmap['/'] = '-';

export default ({
	name = "Generic Component",
	tag,
	style,
	readme,
	locals = {},
	tests
}) => {
	const niceTitle =
		name
			.split('-')
			.map(n => n.substr(0, 1).toUpperCase() + n.substr(1))
			.join('');

	const tagName = niceTitle.split(' ').join('');

	const slugy = name => slug(name);

	return (
		<Wrapper title={`${niceTitle} – Styleguide`} locals={locals}>
			<Heading level="1">{niceTitle}</Heading>

			{ tests
				? <div className="sg-styleguide-section">
						<div className="sg-styleguide-section__header">
							<Heading level="2">Tests</Heading>

							<Rhythm size="small">
								{ tests.map(e =>
										<div><a
											href={'#' + slug(e.name)}
											key={slug(e.name)}
											value={slug(e.name)}>{e.name}</a></div>) }
							</Rhythm>
						</div>

						{ tests.map(e =>
								<Example
									key={slug(e.name)}
									slug={slug(e.name)}
									tagName={tagName}
									exampleName={e.name}
									component={e.component} />) }
					</div>
				: undefined }
		</Wrapper>
	)
};
