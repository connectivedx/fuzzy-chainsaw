import RandToken from 'rand-token';
import { parse } from 'querystring';

import SgExpander from '@sg-atoms/SgExpander/SgExpander';
import Heading from '@sg-atoms/SgHeading/SgHeading';
import SgRhythm from '@sg-atoms/SgRhythm/SgRhythm';
import Example from '@sg-organisms/SgExample/SgExample';
import Icon from '@atoms/Icon/Icon';
import SgGlobalHeader from '@sg-organisms/SgGlobalHeader/SgGlobalHeader';
import SgNavigation from '@sg-organisms/SgNavigation/SgNavigation';
import {
  SgPageShell,
  SgPageShell__header,
  SgPageShell__navigation,
  SgPageShell__main,
  SgPageShell__body
} from '@sg-molecules/SgPageShell/SgPageShell';

import { themes } from '@source/fc-config';

export const SgStyleguide_ReadmeHeading = (props) => (
  <div>
    <Heading level="h1" className="SgStyleguide__section--readme SgStyleguide__toggleTrigger">
      {props.name}
      <SgExpander />
    </Heading>
    <div
      className="SgStyleguide__readme SgStyleguide__toggleTarget SgRhythm"
      dangerouslySetInnerHTML={{ __html: props.readme }}
    />
  </div>
);

SgStyleguide_ReadmeHeading.propTypes = {
  readme: PropTypes.string,
  name: PropTypes.string
};

export const SgStyleguide_Examples = (props) => {
  const theme = global.location // eslint-disable-line
    ? parse(global.location.search.substr(1)).theme
    : themes.length > 0 ? themes[0].id : undefined;

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
      <div className="SgStyleguide__section-header">
        <div className="SgStyleguide__section-header__wrapper">
          <button className="SgStyleguide__arrow SgStyleguide__arrow--left">
            <Icon name="tab-arrow-left" />
          </button>
          <div className="SgStyleguide__section-examplesList">
            {
              examples.map((e, i) => (
                <div key={e.slug} className={`SgStyleguide__example-link ${(i === 0) ? ' is-active' : ''}`}>
                  <a href={`#${e.slug}`} value={e.name}>
                    {e.name}
                  </a>
                </div>
              ))
            }
          </div>
          <button className="SgStyleguide__arrow SgStyleguide__arrow--right">
            <Icon name="tab-arrow-right" />
          </button>
        </div>
      </div>

      {
        examples.map((e) => (
          <Example
            key={e.slug}
            slug={e.slug}
            exampleName={e.name}
            devNotes={e.devNotes}
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
    devNotes: PropTypes.string,
    options: PropTypes.object,
    component: PropTypes.element.isRequired
  }))
};

export const SgStyleguide = ({
  name = 'Generic Component',
  readme,
  examples
}) => (
  <SgPageShell>
    <SgPageShell__header>
      <SgGlobalHeader />
    </SgPageShell__header>
    <SgPageShell__body>
      <SgPageShell__navigation>
        <SgNavigation />
      </SgPageShell__navigation>
      <SgPageShell__main>
        <div className="SgStyleguide" id="content">
          <SgRhythm size="small" className="SgStyleguide__header">
            { readme
              ? <SgStyleguide_ReadmeHeading name={name} readme={readme} />
              : <Heading level="h1">{name}</Heading>
            }

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
          </SgRhythm>

          { examples && <SgStyleguide_Examples examples={examples} /> }
        </div>
      </SgPageShell__main>
    </SgPageShell__body>
  </SgPageShell>
);

SgStyleguide.propTypes = {
  name: PropTypes.string,
  readme: PropTypes.string,
  examples: PropTypes.array
};

export default SgStyleguide;
