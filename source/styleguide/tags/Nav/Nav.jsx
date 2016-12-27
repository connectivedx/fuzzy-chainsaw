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
        <Rhythm size="small">
          <Heading level="2">Components</Heading>
          <FileIndex items={getComponentsIndexData(locals)} />
        </Rhythm>

        <Rhythm size="small">
          <Heading level="2">Tags</Heading>
          <FileIndex items={getTagsIndexData(locals)} />
        </Rhythm>
      </Rhythm>
    </div>

    <div className="sg-nav__cover"></div>
  </div>
);
