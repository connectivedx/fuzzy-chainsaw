import React from 'react';
import Heading from '../Heading/Heading';
import Rhythm from '../Rhythm/Rhythm';
import {
  getTagsIndexData,
  getComponentsIndexData,
  getPagesIndexData,
  FileIndex
} from '../FileIndex/FileIndex';

export default ({
  locals
}) => (
  <div className="sg-nav">
    <a href="#/" className="sg-nav__toggle">
      <span>Table of Contents</span>
      <span>Close</span>
    </a>

    <div className="sg-nav__container">
      <Rhythm size="large">
        <FileIndex
          items={getPagesIndexData(locals)}
          title="Pages"
          size="small"
        />
        <FileIndex
          items={getComponentsIndexData(locals)}
          title="Components"
          size="small"
        />
        <FileIndex
          items={getTagsIndexData(locals)}
          title="Tags"
          size="small"
        />
      </Rhythm>
    </div>

    <div className="sg-nav__cover"></div>
  </div>
);
