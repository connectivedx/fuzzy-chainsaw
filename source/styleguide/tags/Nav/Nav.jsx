import React from 'react';
import Rhythm from 'SgTags/Rhythm/Rhythm';

import {
  getTagsIndexData,
  getComponentsIndexData,
  getPagesIndexData,
  FileIndex
} from 'SgTags/FileIndex/FileIndex';

const Nav = ({
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
    <div className="sg-nav__cover" />
  </div>
);

Nav.propTypes = {
  locals: React.PropTypes.object.isRequired
};

export default Nav;
