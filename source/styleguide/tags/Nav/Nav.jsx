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
        {
          Object.keys(getPagesIndexData(locals)).length
          ?
          <Rhythm size="small">
            <Heading level="2">Pages</Heading>
            <FileIndex items={getPagesIndexData(locals)} />
          </Rhythm>
          :
          null
        }

        {
          Object.keys(getComponentsIndexData(locals)).length
          ?
          <Rhythm size="small">
            <Heading level="2">Components</Heading>
            <FileIndex items={getComponentsIndexData(locals)} />
          </Rhythm>
          :
          null
        }

        {
          Object.keys(getPagesIndexData(locals)).length
          ?
          <Rhythm size="small">
            <Heading level="2">Tags</Heading>
            <FileIndex items={getTagsIndexData(locals)} />
          </Rhythm>
          :
          null
        }
      </Rhythm>
    </div>

    <div className="sg-nav__cover"></div>
  </div>
);
