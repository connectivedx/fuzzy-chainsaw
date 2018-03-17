import Heading from '@sg-atoms/SgHeading/SgHeading';
import Rhythm from '@sg-atoms/SgRhythm/SgRhythm';
import SgFileIndex from '@sg-molecules/SgFileIndex/SgFileIndex';
import { themes } from '@source/fc-config';
import {
  pagesIndexData,
  themedPagesIndexData,
  sgPagesIndexData,
  templatesIndexData,
  organismsIndexData,
  moleculesIndexData,
  atomsIndexData,
  modifiersIndexData
} from './fileIndexData';

const getTheme = (id) =>
  themes.filter((theme) => theme.id === id)[0];

const filterIndexData = (data, query) => {
  if (query) {
    return data.filter((el) => el.content.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }
  return data;
};

export const SgTableOfContents = (props) => {
  const {
    hidePages,
    indexClassName,
    RhythmComponent,
    HeadingComponent,
    searchFilter,
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
        <SgFileIndex
          {...indexProps}
          title="Style Guide"
          items={sgPagesIndexData}
          size="default"
        />
      }

      { Object.keys(themedPagesIndexData)
        .map((key) => (
          <SgFileIndex
            key={key}
            {...indexProps}
            headingSize="h3"
            title={`${getTheme(key).name} Pages`}
            items={themedPagesIndexData[key]}
            size="default"
          />
        )) }
      { atomsIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Atoms" items={filterIndexData(atomsIndexData, searchFilter)} size="default" icon="atom" /> : null }
      { moleculesIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Molecules" items={filterIndexData(moleculesIndexData, searchFilter)} size="default" icon="molecule" /> : null }
      { organismsIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Organisms" items={filterIndexData(organismsIndexData, searchFilter)} size="default" icon="organism" /> : null }
      { templatesIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Templates" items={filterIndexData(templatesIndexData, searchFilter)} size="default" icon="template" /> : null }
      { modifiersIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Modifiers" items={filterIndexData(modifiersIndexData, searchFilter)} size="default" icon="modifier" /> : null }

      {!props.hidePages && pagesIndexData.length > 0 ? <SgFileIndex
        {...indexProps}
        title="Pages"
        items={pagesIndexData}
        size="default"
        icon="pages"
      /> :
      null }
    </div>
  );
};

SgTableOfContents.defaultProps = {
  hidePages: false,
  RhythmComponent: Rhythm,
  HeadingComponent: Heading,
  searchFilter: ''
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
  ]),
  searchFilter: PropTypes.string
};


export default SgTableOfContents;
