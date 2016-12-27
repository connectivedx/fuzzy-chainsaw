import React from 'react';
import slug from 'slug';

import Heading from '../../tags/Heading/Heading';
import Skeleton from '../../tags/Skeleton/Skeleton';
import Example from '../../tags/Example/Example';

slug.charmap['/'] = '-';

export const Styleguide_Readme = ({ readme }) => (
  <div id="readme" className="sg-styleguide__section">
    <div className="sg-styleguide__section-header">
      <Heading level="2">Readme</Heading>

      <div
        className="sg-styleguide__readme"
        dangerouslySetInnerHTML={{ __html: readme }}
      />
    </div>
  </div>
);

export const Styleguide_PropTypes = ({ tag, name }) => (
  <div id="prop-types" className="sg-styleguide__section">
    <div className="sg-styleguide__section-header">
      <Heading level="2">Props</Heading>

      <ul>
        { Object.keys(tag.propTypes).map(type => {
          return(
            <li key={type}>{type}</li>
          )
        }) }
      </ul>
    </div>
  </div>
)

export const Styleguide_Tests = ({ tests }) => (
  <div id="tests" className="sg-styleguide__section">
    <div className="sg-styleguide__section-header">
      <Heading level="2">Tests</Heading>

      <div className="sg-styleguide__rhythm">
        { tests.map((e, i) =>
            <div key={i}><a
              href={'#' + slug(e.name)}
              key={slug(e.name)}
              value={slug(e.name)}>{e.name}</a></div>) }
      </div>
    </div>

    { tests.map(e =>
        <Example
          key={slug(e.name)}
          slug={slug(e.name)}
          tagName={e.name}
          exampleName={e.name}
          component={e.component} />) }
  </div>
);

export const Styleguide = ({
  name = "Generic Component",
  tag,
  readme,
  locals = {},
  tests
}) => (
  <Skeleton className="sg-styleguide" title={`${name} – Styleguide`} locals={locals}>
    <div className="sg-styleguide__header sg-styleguide-section__header">
      <Heading level="1">{name}</Heading>
    </div>

    { readme ? <Styleguide_Readme readme={readme} /> : undefined }
    { tag && tag.propTypes ? <Styleguide_PropTypes tag={tag} name={name} /> : undefined }
    { tests ? <Styleguide_Tests tests={tests} /> : undefined }
  </Skeleton>
);

export default Styleguide;
