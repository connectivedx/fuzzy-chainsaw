import slugify from 'slugify';

import Heading from 'SgTags/SgHeading/SgHeading';
import Rhythm from 'SgTags/SgRhythm/SgRhythm';
import Nav from 'SgComponents/SgNav/SgNav';
import Example from 'SgComponents/SgExample/SgExample';


export const SgStyleguide_Readme = (props) => (
  <div id="readme" className="SgStyleguide__section">
    <div className="SgStyleguide__section-header">
      <Heading level="h2">Readme</Heading>

      <div
        className="SgStyleguide__readme"
        dangerouslySetInnerHTML={{ __html: props.readme }}
      />
    </div>
  </div>
);

SgStyleguide_Readme.propTypes = {
  readme: PropTypes.string
};


export const SgStyleguide_Examples = (props) => (
  <div id="examples" className="SgStyleguide__section">
    <Rhythm className="SgStyleguide__section-header">
      <Heading level="h2">Examples</Heading>

      <Rhythm size="small">
        {
          props.examples.map((e) => (
            <div key={e.name}>
              <a
                href={`#${slugify(e.name)}`}
                key={slugify(e.name)}
                value={slugify(e.name)}
              >
                {e.name}
              </a>
            </div>
          ))
        }
      </Rhythm>
    </Rhythm>

    {
      props.examples.map((e) => (
        <Example
          key={slugify(e.name)}
          slug={slugify(e.name)}
          tagName={e.name}
          exampleName={e.name}
          component={e.component}
          options={e.options}
        />
      ))
    }
  </div>
);

SgStyleguide_Examples.propTypes = {
  examples: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    options: PropTypes.object,
    component: PropTypes.element
  }))
};


export const SgStyleguide = ({
  name = 'Generic Component',
  readme,
  examples
}) => (
  <div>
    <Nav />

    <div className="SgStyleguide" id="content">
      <div className="SgStyleguide__header SgStyleguide-section__header">
        <Heading level="h1">{name}</Heading>
      </div>

      { readme ? <SgStyleguide_Readme readme={readme} /> : undefined }
      { examples ? <SgStyleguide_Examples examples={examples} /> : undefined }
    </div>
  </div>
);

SgStyleguide.propTypes = {
  name: PropTypes.string,
  readme: PropTypes.string,
  examples: PropTypes.array
};


export default SgStyleguide;
