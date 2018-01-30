import Heading from '@sg-atoms/SgHeading/SgHeading';
import Rhythm from '@sg-atoms/SgRhythm/SgRhythm';

import SgFileIndex from '@sg-atoms/SgFileIndex/SgFileIndex';
import {
  pagesIndexData,
  themedPagesIndexData,
  indexesIndexData,
  templatesIndexData,
  organismsIndexData,
  moleculesIndexData,
  atomsIndexData,
  modifiersIndexData
} from '@sg-atoms/SgTableOfContents/fileIndexData';

import { themes } from '@source/fc-config';


const getTheme = (id) =>
  themes.filter((theme) => theme.id === id)[0];


export const SgTableOfContents = (props) => {
  const {
    hidePages,
    indexClassName,
    RhythmComponent,
    HeadingComponent,
    ...attrs
  } = props;

  const indexProps = {
    RhythmComponent,
    HeadingComponent,
    className: indexClassName
  };

  return (
    <div className="SgTableOfContents" {...attrs}>
      { !props.hidePages &&
        <RhythmComponent size="large">
          <SgFileIndex
            {...indexProps}
            title="File Indexes"
            items={indexesIndexData}
          />
          <SgFileIndex
            {...indexProps}
            title="Pages"
            items={pagesIndexData}
          />
          { Object.keys(themedPagesIndexData)
            .map((key) => (
              <SgFileIndex
                key={key}
                {...indexProps}
                headingSize="h3"
                title={`${getTheme(key).name} Pages`}
                items={themedPagesIndexData[key]}
              />
            )) }
        </RhythmComponent>
      }
      { templatesIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Templates" items={templatesIndexData} size="default" /> : null }
      { organismsIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Organisms" items={organismsIndexData} size="default" /> : null }
      { moleculesIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Molecules" items={moleculesIndexData} size="default" /> : null }
      { atomsIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Atoms" items={atomsIndexData} size="default" /> : null }
      { modifiersIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Modifiers" items={modifiersIndexData} size="default" /> : null }
    </div>
  );
};

SgTableOfContents.defaultProps = {
  hidePages: false,
  RhythmComponent: Rhythm,
  HeadingComponent: Heading
};

SgTableOfContents.propTypes = {
  hidePages: PropTypes.bool,
  children: PropTypes.node,
  indexClassName: PropTypes.string,
  RhythmComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]),
  HeadingComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ])
};


export default SgTableOfContents;
