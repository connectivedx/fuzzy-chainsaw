import slugify from 'slugify';

import Heading from 'SgTags/Heading/Heading';
import Rhythm from 'SgTags/Rhythm/Rhythm';
import Nav from 'SgComponents/Nav/Nav';
import Example from 'SgComponents/Example/Example';


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

Styleguide_Readme.propTypes = {
  readme: React.PropTypes.string
};


export const Styleguide_Examples = ({ examples }) => (
  <div id="examples" className="sg-styleguide__section">
    <Rhythm className="sg-styleguide__section-header">
      <Heading level="2">Examples</Heading>

      <Rhythm size="small">
        { examples
          .map((e) =>
            <div key={e.name}>
              <a
                href={`#${slugify(e.name)}`}
                key={slugify(e.name)}
                value={slugify(e.name)}
              >
                {e.name}
              </a>
            </div>

          )}
      </Rhythm>
    </Rhythm>

    { examples
      .map((e) =>
        <Example
          key={slugify(e.name)}
          slug={slugify(e.name)}
          tagName={e.name}
          exampleName={e.name}
          component={e.component}
          options={e.options}
        />
        ) }
  </div>
);

Styleguide_Examples.propTypes = {
  examples: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    options: React.PropTypes.object,
    component: React.PropTypes.element
  }))
};


export const Styleguide = ({
  name = 'Generic Component',
  readme,
  examples
}) => (
  <div>
    <Nav />

    <div className="sg-styleguide" id="content">
      <div className="sg-styleguide__header sg-styleguide-section__header">
        <Heading level="1">{name}</Heading>
      </div>

      { readme ? <Styleguide_Readme readme={readme} /> : undefined }
      { examples ? <Styleguide_Examples examples={examples} /> : undefined }
    </div>
  </div>
);

Styleguide.propTypes = {
  name: React.PropTypes.string,
  readme: React.PropTypes.string,
  examples: React.PropTypes.array
};


export default Styleguide;
