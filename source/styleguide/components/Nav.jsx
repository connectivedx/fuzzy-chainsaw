import React from 'react';

import Heading from '../../tags/Heading/Heading';
import Rhythm from '../../tags/Rhythm/Rhythm';
import {
  getTagsIndexData,
  getComponentsIndexData,
  Index
} from './Index';

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
        <Rhythm>
          <Heading level="2">Tags</Heading>
          <Index items={getTagsIndexData(locals)} />
        </Rhythm>

        <Rhythm>
          <Heading level="2">Components</Heading>
          <Index items={getComponentsIndexData(locals)} />
        </Rhythm>
      </Rhythm>
    </div>

    <div className="sg-nav__cover"></div>
  </div>
);
