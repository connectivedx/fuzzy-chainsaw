import React from 'react';
import Rhythm from 'SgTags/Rhythm/Rhythm';

import {
  pagesIndexData,
  componentsIndexData,
  tagsIndexData,
  FileIndex
} from 'SgTags/FileIndex/FileIndex';

const Nav = () => (
  <div className="sg-nav">
    <a href="#/" className="sg-nav__toggle">
      <span>Table of Contents</span>
      <span>Close</span>
    </a>

    <div className="sg-nav__container">
      <Rhythm size="large">
        <FileIndex
          items={pagesIndexData}
          title="Pages"
          size="small"
        />
        <FileIndex
          items={componentsIndexData}
          title="Components"
          size="small"
        />
        <FileIndex
          items={tagsIndexData}
          title="Tags"
          size="small"
        />
      </Rhythm>
    </div>
    <div className="sg-nav__cover" />
  </div>
);

export default Nav;
