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
                title={`${key.toUpperCase()} Pages`}
                items={themedPagesIndexData[key]}
              />
            )) }
        </RhythmComponent>
      }
      <SgFileIndex {...indexProps} title="Compositions" items={compositionsIndexData} />
      <SgFileIndex {...indexProps} title="Components" items={componentsIndexData} />
      <SgFileIndex {...indexProps} title="Tags" items={tagsIndexData} />
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
