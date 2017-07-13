import slugify from 'slugify';

import Heading from 'SgTags/SgHeading/SgHeading';
import Rhythm from 'SgTags/SgRhythm/SgRhythm';
import Nav from 'SgComponents/SgNav/SgNav';
import Example from 'SgComponents/SgExample/SgExample';

import { themes } from 'Source/fc-config';


export const SgStyleguide_Readme = (props) => (
  <div id="readme" className="SgStyleguide__section SgStyleguide__section--readme">
    <Rhythm className="SgStyleguide__section-header">
      <Heading level="h2" className="SgStyleguide__section-heading--readme">
        <span className="SgStyleguide__heading-text">Readme</span>
        <span className="SgStyleguide__expander" />
      </Heading>

      <div
        className="SgStyleguide__readme SgRhythm"
        dangerouslySetInnerHTML={{ __html: props.readme }}
      />
    </Rhythm>
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
            <div
              key={`${slugify(e.name)}-${e.theme}`}
              className={`SgStyleguide__example-link ${e.theme || 'generic'}-theme-section`}
            >
              <a
                href={`#${slugify(e.name)}-${e.theme}`}
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
          key={`${slugify(e.name)}-${e.theme}`}
          slug={`${slugify(e.name)}-${e.theme}`}
          tagName={e.name}
          theme={e.theme}
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
    name: PropTypes.string.isRequired,
    theme: PropTypes.string,
    options: PropTypes.object,
    component: PropTypes.element.isRequired
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
      <Rhythm size="small" className="SgStyleguide__header">
        <Heading level="h1">{name}</Heading>
        { themes.length > 1 &&
          <div className="SgStyleguide__themes">
            { themes
              .map((theme) => <a key={theme.id} href={`?theme=${theme.id}`}>{theme.name}</a>)
              .reduce((list, item, i) => {
                if (i > 0) list.push(<span key={`seperator-${i}`}>/</span>);
                list.push(item);
                return list;
              }, [])
            }
          </div>
        }
      </Rhythm>

      { readme && <SgStyleguide_Readme readme={readme} /> }
      { examples && <SgStyleguide_Examples examples={examples} /> }
    </div>
  </div>
);

SgStyleguide.propTypes = {
  name: PropTypes.string,
  readme: PropTypes.string,
  examples: PropTypes.array
};


export default SgStyleguide;
