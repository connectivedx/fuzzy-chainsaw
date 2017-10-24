import RandToken from 'rand-token';
import { parse } from 'querystring';

import Heading from '@sg-tags/SgHeading/SgHeading';
import Rhythm from '@sg-tags/SgRhythm/SgRhythm';
import Nav from '@sg-components/SgNav/SgNav';
import Example from '@sg-components/SgExample/SgExample';

import { themes } from '@source/fc-config';


const getActiveTheme = (location) => {
  if (location) {
    return parse(global.location.search.substr(1)).theme;
  } else if (themes.length > 0) {
    return themes[0].id;
  }
  return undefined;
};

const getLinkClassing = (theme) => {
  if (theme.id === getActiveTheme(global.location)) {
    return 'SgStyleguide__theme-link SgStyleguide__theme-link--active';
  }
  return 'SgStyleguide__theme-link';
};

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

export const SgStyleguide_Examples = (props) => {
  const theme = getActiveTheme(global.location);

  const examples = props.examples
    .filter((ex) => {
      if (theme) {
        return theme === ex.theme || ex.theme === undefined;
      }

      return true;
    })
    .map((ex) => {
      const slug = ex.name.split(' ').map((s) => s.replace(/\W/g, '')).join('-').toLowerCase();
      return Object.assign({}, ex, {
        slug: `${slug}-${RandToken.generate(8)}`
      });
    });


  return (
    <div id="examples" className="SgStyleguide__section">
      <Rhythm className="SgStyleguide__section-header">
        <Heading level="h2">Examples</Heading>

        <Rhythm size="small">
          {
            examples.map((e) => (
              <div key={e.slug} className={getLinkClassing}>
                <a href={`#${e.slug}`} value={e.name}>
                  {e.name}
                </a>
              </div>
            ))
          }
        </Rhythm>
      </Rhythm>

      {
        examples.map((e) => (
          <Example
            key={e.slug}
            slug={e.slug}
            exampleName={e.name}
            component={e.component}
            theme={e.theme}
            options={e.options}
          />
        ))
      }
    </div>
  );
};

SgStyleguide_Examples.propTypes = {
  examples: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    theme: PropTypes.string,
    options: PropTypes.object,
    component: PropTypes.element.isRequired
  }))
};

const SgStyleguide__ThemeLinks = () => (
  <div className="SgStyleguide__themes">
    { themes
      .map((theme) => <a className={getLinkClassing(theme)} key={theme.id} href={`?theme=${theme.id}`}>{theme.name}</a>)
      .reduce((list, item, i) => {
        if (i > 0) list.push(<span key={`seperator-${i}`}>/</span>);
        list.push(item);
        return list;
      }, [])
    }
  </div>
);

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
        {themes.length > 1 && <SgStyleguide__ThemeLinks />}
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
