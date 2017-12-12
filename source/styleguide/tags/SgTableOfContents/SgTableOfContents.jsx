import Heading from '@sg-tags/SgHeading/SgHeading';
import Rhythm from '@sg-tags/SgRhythm/SgRhythm';

import SgFileIndex from '@sg-tags/SgFileIndex/SgFileIndex';
import {
  pagesIndexData,
  themedPagesIndexData,
  indexesIndexData,
  compositionsIndexData,
  componentsIndexData,
  tagsIndexData
} from '@sg-tags/SgTableOfContents/fileIndexData';

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
          {pagesIndexData.length > 0 ? <SgFileIndex
            {...indexProps}
            title="Pages"
            items={pagesIndexData}
          /> :
          <div /> }
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
      { compositionsIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Compositions" items={compositionsIndexData} /> : <div /> }
      { componentsIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Components" items={componentsIndexData} /> : <div /> }
      { tagsIndexData.length > 0 ? <SgFileIndex {...indexProps} title="Tags" items={tagsIndexData} /> : <div /> }
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
