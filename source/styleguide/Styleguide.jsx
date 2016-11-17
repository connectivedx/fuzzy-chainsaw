import React from 'react';
import slug from 'slug';

import Wrapper from './components/Wrapper';
import Example from './components/Example';
import Heading from '../tags/Heading/Heading';
import Rhythm from '../tags/Rhythm/Rhythm';
import RichText from '../tags/RichText/RichText';

slug.charmap['/'] = '-';

const PropList = ({ name, propTypes }) => {
  return (
    <ul>
      { Object.keys(propTypes).map(type => {
        return(
          <li key={type}>{type}</li>
        )
      }) }
    </ul>
  )
}

export default ({
  name = "Generic Component",
  tag,
  readme,
  locals = {},
  tests
}) => {
  return (
    <Wrapper title={`${name} – Styleguide`} locals={locals}>
      <div className="sg-styleguide__header sg-styleguide-section__header">
        <Heading level="1">{name}</Heading>
      </div>

      { readme
        ? <div id="readme" className="sg-styleguide-section">
          <div className="sg-styleguide-section__header">
            <Heading level="2">Readme</Heading>

            <div className="sg-styleguide-readme">
              <RichText dangerouslySetInnerHTML={{ __html: readme }} />
            </div>
          </div>

        </div>
        : undefined }

      { false && tag.propTypes
        ? <div id="prop-types" className="sg-styleguide-section">
          <div className="sg-styleguide-section__header">
            <Heading level="2">Props</Heading>
            <PropList name={name} propTypes={tag.propTypes} />
          </div>
        </div>
        : undefined }

      { tests
        ? <div id="tests" className="sg-styleguide-section">
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
                  tagName={name}
                  exampleName={e.name}
                  component={e.component} />) }
          </div>
        : undefined }
    </Wrapper>
  )
};
