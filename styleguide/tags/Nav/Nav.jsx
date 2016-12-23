import React from 'react';

import Heading from '../../Heading/Heading';
import {
  getTagsIndexData,
  getComponentsIndexData,
  FileIndex
} from './FileIndex';

export default ({
  locals
}) => (
  <div className="sg-nav">
    <a href="#/" className="sg-nav__toggle">
      <span>Table of Contents</span>
      <span>Close</span>
    </a>

    <div className="sg-nav__container">
      <div className="sg-nav__rhythm">
        <div className="sg-nav__rhythm-small">
          <Heading level="2">Tags</Heading>
          <FileIndex items={getTagsIndexData(locals)} />
        </div>

        <div className="sg-nav__rhythm-small">
          <Heading level="2">Components</Heading>
          <FileIndex items={getComponentsIndexData(locals)} />
        </div>
      </div>
    </div>

    <div className="sg-nav__cover"></div>
  </div>
);
