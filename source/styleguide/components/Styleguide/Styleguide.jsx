import React from 'react';
import slugify from 'slugify';

import Heading from '../../tags/Heading/Heading';
import Skeleton from '../../tags/Skeleton/Skeleton';
import Example from '../../tags/Example/Example';
import Rhythm from '../../tags/Rhythm/Rhythm';


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

export const Styleguide_Tests = ({ tests, options }) => (
  <div id="tests" className="sg-styleguide__section">
    <Rhythm className="sg-styleguide__section-header">
      <Heading level="2">Tests</Heading>

      <Rhythm size="small">
        { tests
          .filter(e => !(e.options && e.options.hidden))
          .map((e, i) =>
            <div key={i}><a
              href={'#' + slugify(e.name)}
              key={slugify(e.name)}
              value={slugify(e.name)}>{e.name}</a></div>) }
      </Rhythm>
    </Rhythm>

    { tests
      .filter(e => !(e.options && e.options.hidden))
      .map(e =>
        <Example
          key={slugify(e.name)}
          slug={slugify(e.name)}
          tagName={e.name}
          exampleName={e.name}
          component={e.component}
          options={e.options} />) }
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
    { false && tag && tag.propTypes ? <Styleguide_PropTypes tag={tag} name={name} /> : undefined }
    { tests ? <Styleguide_Tests tests={tests} /> : undefined }
  </Skeleton>
);

export default Styleguide;
